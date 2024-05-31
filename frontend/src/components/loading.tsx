import Style from "@/styles/components/LoadingComponent.module.scss";

export default function LoadingComponent() {
    return (
        <div>
            <div className={Style.loader}>
                <svg viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="32"></circle>
                </svg>
            </div>

            <div className={`${Style.loader} ${Style.loaderVariant}`}>
                <svg viewBox="0 0 86 80">
                    <polygon points="43 8 79 72 7 72"></polygon>
                </svg>
            </div>

            <div className={Style.loader}>
                <svg viewBox="0 0 80 80">
                    <rect x="8" y="8" width="64" height="64"></rect>
                </svg>
            </div>
        </div>
    );
}
