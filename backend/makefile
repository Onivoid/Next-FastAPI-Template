run:
	docker-compose up
run-build:
	docker-compose up --build
migrate:
	docker exec -it backend aerich migrate
upgrade:
	docker exec -it backend aerich upgrade
runall:
	docker exec -it backend aerich migrate && docker exec -it backend aerich upgrade
format:
	black .
