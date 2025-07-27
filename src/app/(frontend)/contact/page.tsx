import {Button} from "@/components/button";
import Link from "next/link";

export default function Contact() {
    return (
        <div className={"p-6"}>
            <div className={"w-1/2 mx-auto my-24 flex justify-center items-center flex-col gap-6 text-center"}>
                <h1 className={"text-6xl leading-20"}>Contact us at Clue<span className={"text-accent"}>Forge</span>!
                </h1>
                <h2 className={"text-xl leading-8"}>Questions, feedback, or just want to say hi? <br/> We’d love to hear
                    from you.</h2>
            </div>
            <div className={"grid grid-cols-2 gap-12 gap-y-20 w-2/3 mx-auto mb-24"}>
                <div className={"flex flex-col"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-12 text-warning mb-3">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z"/>
                    </svg>

                    <h2 className={"text-xl font-semibold my-3"}>Get support</h2>
                    <p className={"leading-7"}>Having trouble using ClueForge or need help navigating the platform?
                        Our <Link href={'/help'} className={"text-accent"}>Help Center</Link> is the best place to
                        start, filled with useful articles and tips. If you can't find what you're looking for, our team
                        is happy to help, just reach out to <a href="mailto:support@clueforge.com"
                                                               className={"text-accent"}>support@clueforge.com</a>.</p>
                </div>

                <div className={"flex flex-col"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-12 text-danger mb-3">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
                    </svg>

                    <h2 className={"text-xl font-semibold my-3"}>Found a Security Vulnerability?</h2>
                    <p className={"leading-7"}>We take security seriously and appreciate your help in keeping ClueForge
                        safe for everyone. If you've found a vulnerability or suspect a potential issue, please report
                        it confidentially to <a href="mailto:security@clueforge.com"
                                                className={"text-accent"}>security@clueforge.com</a> so our team can
                        investigate promptly.</p>
                </div>

                <div className={"flex flex-col"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-12 text-success mb-3">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/>
                    </svg>


                    <h2 className={"text-xl font-semibold my-3"}>Suggest a New Feature</h2>
                    <p className={"leading-7"}>Got an idea to improve ClueForge? Whether it’s a small tweak or a big new
                        feature, we’d love to hear your thoughts. Many of our best ideas come from users like you. Email
                        us anytime at <a href="mailto:suggestions@clueforge.com"
                                         className={"text-accent"}>suggestions@clueforge.com</a>.</p>
                </div>

                <div className={"flex flex-col"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-12 text-primary mb-3">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
                    </svg>

                    <h2 className={"text-xl font-semibold my-3"}>Other</h2>
                    <p className={"leading-7"}>Not sure where your message fits? No problem. Whether it’s feedback,
                        partnership ideas, press inquiries or just a friendly hello, we’re always open to hearing from
                        you. Send us an email at <a href="mailto:info@clueforge.com" className={"text-accent"}>info@clueforge.com</a> or use the contact
                        form below.</p>
                </div>
            </div>

            <div className={"bg-background rounded-lg w-2/3 mx-auto aspect-square my-12 flex justify-center items-center"}>
                <p>Contact form</p>
            </div>
        </div>
    )
}