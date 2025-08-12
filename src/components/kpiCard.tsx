import Icon, {IconName} from "@/components/icon";

type ColorKey =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'background'
    | 'success'
    | 'warning'
    | 'danger'

const colorClasses: Record<ColorKey, string> = {
    'primary': 'bg-primary-light text-primary',
    'secondary': 'bg-secondary-light text-secondary',
    'accent': 'bg-accent-light text-accent',
    'background': 'bg-background-light text-background',
    'success': 'bg-success-light text-success',
    'warning': 'bg-warning-light text-warning',
    'danger': 'bg-danger-light text-danger',
}

export const KpiCard = (
    {
        icon,
        color,
        name,
        value,
        tooltip,
        className,
    }: {
        icon?: IconName;
        color?: ColorKey;
        name: string;
        value: string | number;
        tooltip?: string;
        className?: string;
    }
)=> {

    const standardClasses: string = 'rounded shadow-xl p-6 bg-white border-background flex items-center';
    const iconClasses: string =
        color
            ? colorClasses[color]
            :'bg-surface text-text-primary'

    return (
        <div className={standardClasses + ' ' + (className ?? '')}>
            {icon && (
                <div className={"size-12 p-3 rounded "+ iconClasses}>
                    <Icon name={icon} />
                </div>
            )}

            <div className={"flex-grow flex flex-col text-right"}>
                <p className={"text-xl font-semibold my-1"}>
                    {typeof value === 'number'
                        ? new Intl.NumberFormat('nl-BE').format(value)
                        : value
                    }
                </p>
                <div className={"flex gap-3 w-full justify-end items-center text-text-muted"}>
                    <div className={"relative group size-5"}>
                        <Icon name={"info"}/>
                        {tooltip &&
                            <div className={"absolute top-full left-0 z-50 w-32 p-3 shadow-xl rounded overflow-hidden hidden group-hover:block text-left bg-background whitespace-normal mt-1"}>
                                <p className={"text-xs text-text-primary"}>{tooltip}</p>
                            </div>
                        }
                    </div>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}