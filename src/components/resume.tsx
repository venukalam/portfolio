

function Resume() {
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => { document.designMode = "on" }}>
                Edit
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => { document.designMode = "off" }}>
                Stop Editing
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={() => { document.designMode = "off"; window.print() }}>
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span>Print</span>
            </button>

            <div className="">
                <div className="">
                    <div className="relative px-12 py-12 bg-white shadow-lg sm:rounded-3xl sm:p-20">

                        <div className="grid grid-cols-5 grid-rows-1 gap-6">
                            <div className="col-span-3">
                                <p className="text-5xl font-serif font-bold"><span>Venu Kalam</span></p>
                                <p className="text-base"><span>Full Stack Developer</span></p>
                            </div>
                            <div className="col-span-2">
                                <p className="text-base font-bold leading-tight"><span>kalamvenu@gmail.com</span></p>
                                <p className="text-base font-bold leading-tight"><span>(+91) 9381338831</span></p>
                                <p className="text-base font-bold leading-tight underline text-blue-600"><span><a href="https://www.google.com/url?q=http://linkedin.com/in/venu-kalam-14aaa6138/&sa=D&source=editors&ust=1628426321864000&usg=AOvVaw2p69HQmaCNuZAjdiG_STqO">linkedin.com/in/venu-kalam-14aaa6138/</a></span></p>
                                <p className="text-base font-bold leading-tight underline text-blue-600"><span><a href="https://www.google.com/url?q=http://venukalam.github.io/venukalam-resume/&sa=D&source=editors&ust=1628426321865000&usg=AOvVaw2HoXcJpSsxATgyw-Gs_caW">venukalam.github.io/venukalam-resume/</a></span></p>
                            </div>
                        </div>

                        <div className="grid grid-cols-5 grid-rows-1 gap-6">
                            <div className="col-span-3 space-y-2">
                                <div>
                                    <p className="text-lg font-bold text-blue-600"><span>EXPERIENCE</span></p>
                                    <p className="text-lg"><span className="font-bold">Acuvate,</span> <span>Hyderabad</span> — <span className="italic">Software Engineer</span></p>
                                    <p className="text-sm"><span>August 2018 - PRESENT</span></p>
                                </div>
                                <div>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-lg leading-snug">
                                            Revamped a portal built on Angular to serve 30k + employees with a team of 3 members. Improved the user experience by making use of PWA to enable offline features and faster loading. Implemented many other security related features like SSO, JWT Tokens, Recaptcha and Analytics to name a few.
                                        </li>
                                        <li className="text-lg leading-snug">
                                            Used SPFX/React environment to create an internal site on sharepoint which is now being used by the Top level management in my client’s Organization.
                                        </li>
                                        <li className="text-lg leading-snug">
                                            Built a portal that now enables over 6000 users to seamlessly collaborate on their documents and make best use of sharepoint’s document sharing and content versioning tools
                                        </li>
                                        <li className="text-lg leading-snug">
                                            Been a part of a project that deals with the finance division of my client’s company (Bajaj Finserv), where we used SQL along with sharepoint  to handle millions of transactions happening  on a daily basis.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-blue-600"><span>EDUCATION</span></p>
                                    <p className="text-lg">
                                        <span className="font-bold">Sri Indu college of Engineering and Technology,</span>
                                        <span>Hyderabad</span> — <span className="italic">B.Tech in Mechanical Engineering</span></p>
                                    <p className="text-sm"><span>January 2014 - May 2017</span></p>
                                    <p className="text-lg"><span>Honors : First Class (CGPA : 6.7/10)</span></p>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div>
                                    <p className="text-lg font-bold text-blue-600"><span>SKILLS</span></p>
                                    <p className="text-lg"><span>React JS  </span></p>
                                    <p className="text-lg"><span>Sharepoint</span></p>
                                    <p className="text-lg"><span>Angular</span></p>
                                    <p className="text-lg"><span>C# </span></p>
                                    <p className="text-lg"><span>SQL</span></p>
                                    <p className="text-lg"><span>JavaScript</span></p>
                                    <p className="text-lg"><span>Net</span></p>
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-blue-600"><span>AWARDS</span></p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-lg leading-snug">
                                            Came runner-up in the first ever Hackathon my company conducted. We were especially appreciated for our out of the box thinking we showcased in solving the challenge.
                                        </li>
                                        <li className="text-lg leading-snug">
                                            Accepted multiple spot awards.       Received acknowledgement from my client on multiple occasions for the efforts invested in enhancing their products.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-blue-600"><span>LANGUAGES</span></p>
                                    <p className="text-lg"><span>English, Telugu</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;