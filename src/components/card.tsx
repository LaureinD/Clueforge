export const Card = (
    {
        children,
        className,
        border,
    }: {
        children: React.ReactNode;
        className?: string;
        border: boolean;
    }
)=> {
    const standardClasses: string = 'p-6 ';
    const borderClasses: string = border
        ?'border border-background rounded-lg shadow shadow-background'
        :'';

    return (
        <div className={standardClasses + ' ' + borderClasses + ' ' + className}>
            { children }
        </div>
    )
}