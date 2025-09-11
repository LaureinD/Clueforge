import React from "react";
import Link from "next/link";

type BaseType = {
    size?: SizeKey
    color?: ColorKey
    className?: string,
    children: React.ReactNode
}

type ButtonProps =
    React.ButtonHTMLAttributes<HTMLButtonElement>
    & BaseType
    & {
        type: "button" | "submit" | "reset",
        disabled?: boolean,
        href?: never,
    }

type LinkProps = BaseType & {
    type: "link",
    href: string,
    disabled?: never,
    onClick?: never,
}

type FinalButtonProps = ButtonProps | LinkProps;

type ColorKey =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'background'
    | 'success'
    | 'warning'
    | 'danger'
    | 'surface'

const colorClasses: Record<ColorKey, string> = {
    'primary': 'bg-primary text-white',
    'secondary': 'bg-secondary text-text-primary',
    'accent': 'bg-accent text-white',
    'background': 'bg-background text-text-primary',
    'success': 'bg-success text-white',
    'warning': 'bg-warning text-text-primary',
    'danger': 'bg-danger text-white',
    'surface': 'bg-surface text-text-primary border border-background'
}

type SizeKey =
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'full'
    | 'fit'

const sizeClasses: Record<SizeKey, string> = {
    'sm': 'py-2 px-4 text-sm w-fit',
    'md': 'py-4 px-8 font-medium w-fit',
    'lg': 'py-5 px-12 text-lg font-medium w-fit',
    'xl': 'py-6 px-16 text-xl font-semibold w-fit',
    'full': 'w-full py-4',
    'fit' : 'w-fit '
}

// forwardRef only works when button is used as button. Fix when ref on button as Link is needed
export const Button = React.forwardRef<HTMLButtonElement, FinalButtonProps> ((props, ref) => {
    const {type, size, color, disabled, onClick, href, className, children} = props;
    const styleClasses: string =
        (color
            ? colorClasses[color]
            :'bg-background text-text-primary'
        ) + ' ' +
        (size
            ? sizeClasses[size]
            : sizeClasses['md']
        )

    if (type === 'link') {
        return (
            <Link
                href={href}
                className={`rounded hover:cursor-pointer disabled:bg-background disabled:text-text-muted disabled:cursor-not-allowed ${styleClasses} ${className ?? ''}`}
            >
                {children}
            </Link>
        )

    } else {
        return (
            <button
                ref={ref}
                type={type}
                disabled={disabled}
                onClick={onClick}
                className={`rounded hover:cursor-pointer disabled:bg-background disabled:text-text-muted disabled:cursor-not-allowed ${styleClasses} ${className ?? ''}`}
            >
                {children}
            </button>
        )
    }
})

Button.displayName = "Button";