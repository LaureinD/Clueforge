import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {Card} from "@/components/card";

export default function WhyClueForge() {
    return (
        <div className={"p-6 flex flex-col gap-48"}>
            <div className={"w-1/2 mx-auto mt-24 flex justify-center items-center flex-col gap-6 text-center"}>
                <h1 className={"text-6xl leading-20"}>Why Clue<span className={"text-accent"}>Forge</span>?</h1>
                <h2 className={"text-xl leading-8"}>ClueForge makes designing interactive escape rooms simple, fun, and accessible.
                    By organizing the entire creation process in a clear and intuitive way, you can focus on crafting engaging puzzles.</h2>
                <div className={"p-8 flex flex-col gap-6"}>
                    <Button size={'md'} color={'success'}>
                        Get ClueForge for free!
                    </Button>
                    <Link href={'/login'}>Already have an account? Log in.</Link>
                </div>
            </div>

            <div className={"flex items-center gap-10 w-2/3 mx-auto"}>
                <Image
                    src="/img/users/Laurein_Demeyere.png"
                    alt="ClueForge Logo"
                    width={128}
                    height={64}
                    className={"rounded-full"}
                />

                <div className={"flex flex-col gap-4"}>
                    <p>"As the creator of ClueForge, I wanted to build a tool that anyone could use to bring their escape room ideas to life effortlessly. Seeing how our users design amazing experiences with ease truly makes all the hard work worthwhile."</p>
                    <p className={"font-semibold"}>— Laurein Demeyere, Founder of ClueForge</p>
                </div>
            </div>

            <div className={"text-center flex flex-col gap-6"}>
                <h2 className={"text-5xl"}>Your go-to creation tool</h2>
                <p>The easiest way to bring your escape room ideas to life!</p>

                <div className={"grid grid-cols-4"}>
                    <Card border={false}>
                        <div className={"w-full flex items-center justify-center"}>
                            <div className={"relative bg-brush-warning text-warning w-full p-6 m-6 aspect-square"}>
                                <div
                                    className={"absolute top-5 right-8 p-3  rounded-full bg-white flex justify-center items-center"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="size-18">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"/>
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <h3 className={"text-xl font-semibold my-6"}>Create Escape Room Puzzles</h3>
                        <p>Easily design custom puzzles tailored to your escape room theme.</p>
                    </Card>

                    <Card border={false}>
                        <div className={"w-full flex items-center justify-center"}>
                            <div className={"relative bg-brush-primary text-primary w-full p-6 m-6 aspect-square"}>
                                <div
                                    className={"absolute top-5 right-8 p-3  rounded-full bg-white flex justify-center items-center"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="size-18">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <h3 className={"text-xl font-semibold my-6"}>Get Inspired</h3>
                        <p>Browse our extensive online puzzle library for fresh ideas.</p>
                    </Card>

                    <Card border={false}>
                        <div className={"w-full flex items-center justify-center"}>
                            <div className={"relative bg-brush-success text-success w-full p-6 m-6 aspect-square"}>
                                <div
                                    className={"absolute top-5 right-8 p-3  rounded-full bg-white flex justify-center items-center"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="size-18">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"/>
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <h3 className={"text-xl font-semibold my-6"}>Build Your Puzzle Library</h3>
                        <p>Collect and organize your favorite puzzles in one personal space.</p>
                    </Card>

                    <Card border={false}>
                        <div className={"w-full flex items-center justify-center"}>
                            <div className={"relative bg-brush-danger text-danger w-full p-6 m-6 aspect-square"}>
                            <div className={"absolute top-5 right-8 p-3  rounded-full bg-white flex justify-center items-center"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="size-18">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"/>
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <h3 className={"text-xl font-semibold my-6"}>Combine Puzzles into Escape Rooms</h3>
                        <p>Arrange puzzles into clear, engaging escape room experiences.</p>
                    </Card>

                    <Card border={false}>
                        <div className={"w-full flex items-center justify-center"}>
                            <div className={"relative bg-brush-success text-success w-full p-6 m-6 aspect-square"}>
                                <div
                                    className={"absolute top-5 right-8 p-3  rounded-full bg-white flex justify-center items-center"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="size-18">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"/>
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <h3 className={"text-xl font-semibold my-6"}>Attach Materials & Resources</h3>
                        <p>Add all necessary files and notes to each puzzle and escape room.</p>
                    </Card>

                    <Card border={false}>
                    <div className={"w-full flex items-center justify-center"}>
                            <div className={"relative bg-brush-warning text-warning w-full p-6 m-6 aspect-square"}>
                                <div className={"absolute top-5 right-8 p-3  rounded-full bg-white flex justify-center items-center"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="size-18">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                                    </svg>

                                </div>
                            </div>
                    </div>
                        <h3 className={"text-xl font-semibold my-6"}>Organize with Handy Overviews</h3>
                        <p>Access helpful summaries for planning and material needs.</p>
                    </Card>

                    <Card border={false}>
                        <div className={"w-full flex items-center justify-center"}>
                        <div className={"relative bg-brush-danger text-danger w-full p-6 m-6 aspect-square"}>
                            <div
                                className={"absolute top-5 right-8 p-3  rounded-full bg-white flex justify-center items-center"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="size-18">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                                </svg>

                            </div>
                        </div>
                        </div>
                        <h3 className={"text-xl font-semibold my-6"}>Rate & Note Your Creations</h3>
                        <p>Give feedback and keep track with ratings and notes.</p>
                    </Card>

                    <Card border={false}>
                        <div className={"w-full flex items-center justify-center"}>
                            <div className={"relative bg-brush-primary text-primary w-full p-6 m-6 aspect-square"}>
                                <div className={"absolute top-5 right-8 p-3  rounded-full bg-white flex justify-center items-center"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="size-18">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"/>
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <h3 className={"text-xl font-semibold my-6"}>Share with Friends & Colleagues</h3>
                        <p>Easily share your puzzles and rooms to collaborate and inspire.</p>
                    </Card>
                </div>
            </div>
        </div>
    )
}