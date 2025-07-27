import Link from "next/link";

export default function authLayout(
    {
        children
    }:{
        children:React.ReactNode;
    }
){
    return (
        <div className="flex flex-col gap-6">
            <p>Auth layout</p>
            <div>
                {children}
            </div>
        </div>
    )
}