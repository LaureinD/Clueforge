type ColorKey =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'background'
    | 'success'
    | 'warning'
    | 'danger'

const colorClasses: Record<ColorKey, string> = {
    'primary': 'bg-primary text-white',
    'secondary': 'bg-secondary text-text-primary',
    'accent': 'bg-accent text-white',
    'background': 'bg-background text-text-primary',
    'success': 'bg-success text-white',
    'warning': 'bg-warning text-text-primary',
    'danger': 'bg-danger text-white',
}

type SizeKey =
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'full'

const sizeClasses: Record<SizeKey, string> = {
    'sm': 'py-2 px-4 text-sm w-fit',
    'md': 'py-4 px-8 font-medium w-fit',
    'lg': 'py-5 px-12 text-lg font-medium w-fit',
    'xl': 'py-6 px-16 text-xl font-semibold w-fit',
    'full': 'w-full py-4'
}

export const Button = (
    {
        type,
        disabled,
        size,
        color,
        className,
        children
    } : {
        type?: "button" | "submit" | "reset"
        disabled?: boolean
        size?: SizeKey
        color?: ColorKey
        className?: string
        children: React.ReactNode
    } ) => {
    const styleClasses: string =
        (color
            ? colorClasses[color]
            :'bg-background text-text-primary'
        ) + ' ' +
        (size
            ? sizeClasses[size]
            : sizeClasses['md']
        )

    return (
        <button
            type={type ?? 'button'}
            disabled={disabled}
            className= { 'rounded hover:cursor-pointer disabled:bg-background disabled:text-text-muted disabled:cursor-not-allowed' + ' ' + styleClasses + ' ' + className}
        >
            {children}
        </button>
    )
}