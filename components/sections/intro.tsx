import { RichText, RichTextProps } from '@graphcms/rich-text-react-renderer';


type HeroProps = {
    description: RichTextProps['content'];
}
export function Intro(props: HeroProps) {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main className="relative mx-auto overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                    <div className="absolute top-20 right-0 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-40 left-0 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>
            </div>

            {/* Hero content */}
            <div className="relative px-6 py-16 sm:py-24 lg:py-32 mx-auto max-w-7xl">
                <div className="mx-auto max-w-4xl text-center">
                    {/* Logo/Title */}
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 animate-fade-up">
                        <div className="mb-2">
                            <span className="text-red-700">a</span>ll{' '}
                            <span className="text-red-700">i</span>n{' '}
                            <span className="text-red-700">o</span>ne
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text">
                            Gesundheitsmanagement
                        </h1>
                    </div>

                    {/* Description */}
                    <div className="mt-8 sm:mt-10 text-lg sm:text-xl leading-8 text-gray-700 max-w-3xl mx-auto animate-fade-up animation-delay-200">
                        <RichText
                            renderers={{
                                p: ({ children }) => (
                                    <p className="mt-4 leading-relaxed">{children}</p>
                                ),
                            }}
                            content={props.description}
                        />
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-400">
                        <button
                            onClick={() => scrollToSection('kontakt')}
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-red-700 rounded-xl hover:bg-red-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            <span>Termin vereinbaren</span>
                            <svg
                                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scrollToSection('team')}
                            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-white rounded-xl border-2 border-gray-200 hover:border-red-700 hover:text-red-700 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <span>Unser Team kennenlernen</span>
                            <svg
                                className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>


                </div>
            </div>
                            {/* <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                            </div> */}
                        {/* </div> */}
                    {/* </div> */}
        </main>
        // <main className="isolate">
        //     <div className="relative isolate -z-10">
        //         <svg
        //             className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        //             aria-hidden="true"
        //         >
        //             <defs>
        //                 <pattern
        //                     id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
        //                     width={200}
        //                     height={200}
        //                     x="50%"
        //                     y={-1}
        //                     patternUnits="userSpaceOnUse"
        //                 >
        //                     <path d="M.5 200V.5H200" fill="none" />
        //                 </pattern>
        //             </defs>
        //             <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
        //                 <path
        //                     d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
        //                     strokeWidth={0}
        //                 />
        //             </svg>
        //             <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
        //         </svg>
        //         <div
        //             className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        //             aria-hidden="true"
        //         >
        //             <div
        //                 className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        //                 style={{
        //                     clipPath:
        //                         'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
        //                 }}
        //             />
        //         </div>
        //         <div className="overflow-hidden">
        //             <div className="mx-auto max-w-7xl px-6 pb-32 pt-18 sm:pt-30 lg:px-8">
        //                 <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
        //                     <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
        //                         <div className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-6xl animate-fade-up">
        //                             <div className='text-center'><span className='text-center'><span className="text-red-800">a</span>ll <span className="text-red-800">i</span>n </span><span className="text-red-800">o</span>ne</div>
        //                             <h1>Gesundheitsmanagement</h1>
        //                         </div>
        //                         <div className="relative text-lg leading-8 text-gray-600 lg:max-w-none">
        //                             <RichText
        //                                 renderers={{
        //                                     p: ({ children }) => <p className="mt-2 text-center">{children}</p>,
        //                                 }}
        //                                 content={props.description}
        //                             />
        //                         </div>
        //                     </div>
        //                     <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
        //                         <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
        //                             <div className="relative">
        //                                 <img
        //                                     src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
        //                                     alt=""
        //                                     className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
        //                                 />
        //                                 <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        //                             </div>
        //                         </div>
        //                         <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
        //                             <div className="relative">
        //                                 <img
        //                                     src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
        //                                     alt=""
        //                                     className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
        //                                 />
        //                                 <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        //                             </div>
        //                             <div className="relative">
        //                                 <img
        //                                     src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
        //                                     alt=""
        //                                     className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
        //                                 />
        //                                 <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        //                             </div>
        //                         </div>
        //                         <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
        //                             <div className="relative">
        //                                 <img
        //                                     src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
        //                                     alt=""
        //                                     className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
        //                                 />
        //                                 <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        //                             </div>
        //                             <div className="relative">
        //                                 <img
        //                                     src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
        //                                     alt=""
        //                                     className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
        //                                 />
        //                                 <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </main>
    )
}
