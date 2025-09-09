export default function authLayout(
    {
        children
    }:{
        children:React.ReactNode;
    }
){
    return (
        <div className="flex flex-col gap-6">
            <div className={"w-[450px] min-h-[500px] mx-auto"}>
                {children}
            </div>
        </div>
    )
}