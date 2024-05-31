import strawberry
import bcrypt
import os
from typing import Union
from fastapi.requests import HTTPConnection
from app.models.user import User as UserModel
from app.graphql.types.user import (
    User,
    PublicUser,
    PublicUserList,
    AdminUserList,
    AuthenticatedUser,
)
from app.graphql.types.error import Error
from tortoise.exceptions import DoesNotExist
from dotenv import load_dotenv
from jwt import (
    encode as jwt_encode,
)
from datetime import datetime, timedelta
from app.utils.jwt_utils import verify_token

load_dotenv()

SECRET_KEY = os.getenv("JWT_SECRET")
ALGORITHM = os.getenv("JWT_ALGORITHM")


@strawberry.type
class Mutation:
    @strawberry.field
    async def register(
        self, info, username: str, email: str, password: str
    ) -> Union[AuthenticatedUser, Error]:
        try:
            user = await UserModel.create(
                username=username,
                email=email,
                password=password,
            )
            payload = {
                "user_id": user.id,
                "username": user.username,
                "role": user.role,
                "exp": datetime.now() + timedelta(hours=12),
            }
            token = jwt_encode(
                payload=payload, key=SECRET_KEY, algorithm=ALGORITHM
            )
            info.context["response"].set_cookie(key="token", value=token)
            return AuthenticatedUser(
                id=user.id,
                username=user.username,
                discord_id=user.discord_id,
                email=user.email,
                role=user.role,
            )
        except Exception as e:
            return Error(message=str(e))

    @strawberry.field
    async def login(
        self, info, username: str, password: str
    ) -> Union[AuthenticatedUser, Error]:
        try:
            user = await UserModel.get(username=username)
            if bcrypt.checkpw(
                password.encode("utf8"), user.password.encode("utf8")
            ):
                payload = {
                    "user_id": user.id,
                    "username": user.username,
                    "role": user.role,
                    "exp": datetime.now() + timedelta(hours=12),
                }
                token = jwt_encode(
                    payload=payload, key=SECRET_KEY, algorithm=ALGORITHM
                )
                info.context["response"].set_cookie(key="token", value=token)
                return AuthenticatedUser(
                    id=user.id,
                    username=user.username,
                    discord_id=user.discord_id,
                    email=user.email,
                    role=user.role,
                )
            else:
                return Error(message="Invalid password")
        except DoesNotExist:
            return Error(message="User not found")

    @strawberry.field
    async def logout(self, info: strawberry.private) -> bool:
        info.context["response"].delete_cookie("token")
        return True


@strawberry.type
class Query:
    @strawberry.field
    async def me(
        self, info: strawberry.private
    ) -> Union[AuthenticatedUser, Error]:
        request: HTTPConnection = info.context["request"]
        token = request.cookies.get("token")
        payload = verify_token(token)

        if isinstance(payload, str):
            return Error(message=payload)

        user_id = payload.get("user_id")
        try:
            user = await UserModel.get(id=user_id)
            return AuthenticatedUser(
                id=user.id,
                username=user.username,
                email=user.email,
                discord_id=user.discord_id,
                role=user.role,
            )
        except DoesNotExist:
            return Error(message="User not found")

    @strawberry.field
    async def user(
        self, info: strawberry.private, user_id: str
    ) -> Union[PublicUser, Error]:
        request: HTTPConnection = info.context["request"]
        token = request.cookie.get("token")
        payload = verify_token(token)

        if isinstance(payload, str):
            return Error(message=payload)

        try:
            user = await UserModel.get(id=user_id)
            return PublicUser(username=user.username)
        except DoesNotExist:
            return Error(message="User not found")

    @strawberry.field
    async def users(
        self, info: strawberry.private
    ) -> Union[PublicUserList, Error]:
        request: HTTPConnection = info.context["request"]
        token = request.cookie.get("token")
        payload = verify_token(token)

        if isinstance(payload, str):
            return Error(message=payload)

        users = await UserModel.all()
        return PublicUserList(
            users=[PublicUser(username=user.username) for user in users]
        )

    @strawberry.field
    async def admin_users(
        self, info: strawberry.private
    ) -> Union[AdminUserList, Error]:
        request: HTTPConnection = info.context["request"]
        token = request.cookie.get("token")
        payload = verify_token(token)
        if isinstance(payload, str):
            return Error(message=payload)
        user_role = payload.get("role")

        if not user_role == "admin":
            return Error(message="Unauthorized")

        users = await UserModel.all()
        return AdminUserList(
            users=[
                User(
                    id=str(user.id),
                    username=user.username,
                    email=user.email,
                    discord_id=user.discord_id,
                    role=user.role,
                )
                for user in users
            ]
        )

    @strawberry.field
    async def admin_user(
        self, info: strawberry.private, user_id: str
    ) -> Union[User, Error]:
        request: HTTPConnection = info.context["request"]
        token = request.cookie.get("token")
        payload = verify_token(token)
        if isinstance(payload, str):
            return Error(message=payload)
        user_role = payload.get("role")

        if not user_role == "admin":
            return Error(message="Unauthorized")

        try:
            user = await UserModel.get(id=user_id)
            return User(
                id=str(user.id),
                username=user.username,
                email=user.email,
                discord_id=user.discord_id,
                role=user.role,
            )
        except DoesNotExist:
            return Error(message="User not found")
