export const Button = ( {children} : {children: React.ReactNode} ) => {
    const buttonClasses : string = 'px-8 py-4 bg-success text-white font-medium rounded-lg';

    return (
        <button className= { buttonClasses }>
            {children}
        </button>
    )
}