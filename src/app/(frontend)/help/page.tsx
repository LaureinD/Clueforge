import Link from "next/link";
import { FaqAccordion } from "./FAQAccordeon";

export default function Help() {
    return (
        <div className={"p-6 flex flex-col gap-20"}>
            <div className={"w-1/2 mx-auto mt-24 flex justify-center items-center flex-col gap-6 text-center"}>
                <h1 className={"text-6xl leading-20"}>Need help with Clue<span className={"text-accent"}>Forge</span>?</h1>
                <h2 className={"text-xl leading-8"}>Find your answers below or <Link href={'/contact'} className={'text-accent'}>contact us</Link> with your question!</h2>
            </div>

            <FaqAccordion />
        </div>
    )
}