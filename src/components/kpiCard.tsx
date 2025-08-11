import Icon, {IconName} from "@/components/icon";

export const KpiCard = (
    {
        icon,
        color,
        name,
        value,
        className,
    }: {
        icon?: IconName;
        color?: string;
        name: string;
        value: string | number
        className?: string;
    }
)=> {
    const standardClasses: string = 'rounded shadow-xl p-6 bg-white border-background flex';
    const iconClasses: string = 'bg-'+ color +'-light text-'+ color;

    return (
        <div className={standardClasses + ' ' + className}>
            {icon && (
                <div className={"size-10 p-2 rounded "+ iconClasses}>
                    <Icon name={icon} />
                </div>
            )}

            <div className={"flex-grow flex flex-col text-right"}>
                <p>{name}</p>
                <p>{value}</p>
            </div>
        </div>
    )
}