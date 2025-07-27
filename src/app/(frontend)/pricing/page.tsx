import {Card} from "@/components/card";


export default function Pricing() {
    return (
        <div className={"p-6 flex flex-col gap-12"}>
            <div className={"w-1/2 mx-auto mt-24 flex justify-center items-center flex-col gap-6 text-center"}>
                <h1 className={"text-6xl leading-20"}>Which Clue<span className={"text-accent"}>Forge</span> plan is right for me?</h1>
            </div>

            <div className={"w-full flex flex-col items-center gap-12"}>
                <div
                    className={"rounded-full border border-secondary flex items-center w-48 overflow-hidden font-semibold"}>
                    <div className={"w-1/2 py-3 text-center bg-accent text-white"}>Monthly</div>
                    <div className={"w-1/2 py-3 text-center"}>Yearly</div>
                </div>

                <div className={"grid grid-cols-3 gap-6"}>
                    <Card border={true}>
                        <div className={"border-b border-background"}>
                            <h3 className={"font-bold uppercase text-xl"}>Pro</h3>
                            <div className={"flex flex-col gap-2 my-8"}>
                                <p className={"text-3xl"}>€ 3.99 <span className={"text-base"}>/ month</span></p>
                                <p className={"text-secondary"}>Pay € 42.99 yearly</p>
                            </div>
                        </div>
                        <p className={"my-3"}>More power and flexibility for frequent creators and small teams.</p>
                        <div className={"w-full flex justify-center"}>
                            <button className={"my-8 bg-success rounded-lg py-3 px-8 font-medium"}>
                                Choose Pro
                            </button>
                        </div>
                        <div className={"my-3 text-sm"}>
                            <h4 className={"text-lg mb-6"}>What's included:</h4>
                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>Create up to 100 riddles</p>
                            </div>

                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>Create up to 10 escape rooms</p>
                            </div>

                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>Mark riddles and escape rooms as private</p>
                            </div>

                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>Access to the public library</p>
                            </div>

                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>2 GB uploads</p>
                            </div>
                        </div>
                    </Card>

                    <Card border={true}>
                        <div className={"border-b border-background"}>
                            <h3 className={"font-bold uppercase text-xl"}>Advanced</h3>
                            <div className={"flex flex-col gap-2 my-8"}>
                                <p className={"text-3xl"}>€ 5.99 <span className={"text-base"}>/ month</span></p>
                                <p className={"text-secondary"}>Pay € 69.99 yearly</p>
                            </div>
                        </div>
                        <p className={"my-3"}>Advanced features and collaboration tools for serious designers.</p>
                        <div className={"w-full flex justify-center"}>
                            <button className={"my-8 bg-success rounded-lg py-3 px-8 font-medium"}>
                                Choose Advanced
                            </button>
                        </div>
                        <div className={"my-3 text-sm"}>
                            <h4 className={"text-lg mb-6"}>What's included:</h4>
                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>Create unlimited riddles</p>
                            </div>

                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>Create unlimited escape rooms</p>
                            </div>

                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>Mark riddles and escape rooms as private</p>
                            </div>

                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>Access to the public library</p>
                            </div>

                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>50 GB uploads</p>
                            </div>
                        </div>
                    </Card>


                    <Card border={true}>
                        <div className={"border-b border-background"}>
                            <h3 className={"font-bold uppercase text-xl"}>Enterprise</h3>
                            <div className={"flex flex-col gap-2 my-8"}>
                                <p className={"text-3xl"}>€ 9.99 <span className={"text-base"}>/ month</span></p>
                                <p className={"text-secondary"}>Pay € 109.99 yearly</p>
                            </div>
                        </div>
                        <p className={"my-3"}>Scalable solutions with full support for large teams and organizations.</p>
                        <div className={"w-full flex justify-center"}>
                            <button className={"my-8 bg-success rounded-lg py-3 px-8 font-medium"}>
                                Contact our Sales team
                            </button>
                        </div>
                        <div className={"my-3 text-sm"}>
                            <h4 className={"text-lg mb-6"}>What's included:</h4>
                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>Create unlimited riddles</p>
                            </div>

                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>Create unlimited escape rooms</p>
                            </div>

                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>Mark riddles and escape rooms as private</p>
                            </div>

                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>Access to the public library</p>
                            </div>

                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>100 GB uploads + 2GB per user</p>
                            </div>

                            <div className={"flex gap-3 my-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                </svg>
                                <p>Customizable plan limits based on your organization's needs</p>
                            </div>
                        </div>
                    </Card>
                </div>

                <Card border={true} className={'w-full h-72 flex justify-between gap-32'}>
                    <div>
                        <div className={"border-b border-background"}>
                            <h3 className={"font-bold uppercase text-xl"}>Starter</h3>
                            <p className={"text-3xl my-8"}>Free</p>
                        </div>
                        <p className={"my-3"}>All the essentials to start creating escape rooms with ease.</p>
                    </div>
                    <div className={"my-3 text-sm"}>
                        <h4 className={"text-lg mb-6"}>What's included:</h4>
                        <div className={"flex gap-3 my-3"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                            </svg>
                            <p>Create up to 20 riddles</p>
                        </div>

                        <div className={"flex gap-3 my-3"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                            </svg>
                            <p>Create up to 1 escape rooms</p>
                        </div>

                        <div className={"flex gap-3 my-3"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                            </svg>
                            <p>Access to the public library</p>
                        </div>

                        <div className={"flex gap-3 my-3"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                            </svg>
                            <p>250 MB uploads</p>
                        </div>
                    </div>
                    <div className={"h-full flex flex-col justify-end items-end"}>
                        <button className={"bg-success rounded-lg py-3 px-8 font-medium"}>
                            Start for free!
                        </button>
                    </div>
                </Card>
            </div>
        </div>
    )
}