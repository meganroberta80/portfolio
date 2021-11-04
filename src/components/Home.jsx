import React from 'react'

function Home() {
    return (
        <div className='home-page'>
            <div className='introduction'>
                <h1>Hi, I'm Megan</h1>
                <p>As a veteran with a background in military intelligence, I have a strong work ethic, excellent organizational skills, and a keen eye for detail. I specialize in full-stack Javascript technologies (MERN stack) and am looking for opportunities to learn from other conscientious software engineers. </p>
            </div>

            <div className='contact'>
                <h1>Contact Me</h1>

                <h4><a href="mailto:meganroberta89@gmail.com">Email</a> | <a href="https://www.linkedin.com/in/megan-waltman/">LinkedIn</a> | <a href="https://github.com/meganroberta80">GitHub</a>
                </h4>
            </div>

            <div className='projects'>
                <h1>Software Engineering Projects</h1>

                <h3 className='proj-header'>Design by Louis, September 2021</h3>

                <h3 className='proj-header' >Nails R Us, August 2021</h3>

                <h3 className='proj-header' >Tamagotchi App, July 2021</h3>
            </div>

            <div className='resume'>
                <h1>Resumé</h1>

                <div className='skills'>
                    <h2>Skills</h2>

                    <div className='skill-block'>
                        <h3>Languages</h3>
                        <p>Javascript (ES6) | Python3 | HTML5 | CSS3 | SQL</p>
                    </div>

                    <div className='skill-block'>
                        <h3>Databases</h3>
                        <p>Mongoose | MongoDB</p>
                    </div>

                    <div className='skill-block'>
                        <h3>Libraries</h3>
                        <p>React | Node.js | Express.js</p>
                    </div>


                    <div className='skill-block'>
                        <h3>Other</h3>
                        <p>RESTful Routing | JSON</p>
                    </div>
                </div>

                <div className='professional-experience'>
                    <h2>Professional Experience</h2>

                    <div className="job-block">
                        <h3>Administrative Assistant | Bonin Kaster Souder CPAs | Eugene, OR</h3>
                        <h3>01/2021 - 04/2021</h3>

                        <p>
                        Prepared and mailed several hundred tax preparation worksheets, streamlining the tax filing process for both clients and the firm.
                        </p>
                        <p>
                            Finalized the processing of tax returns, saving the accountants countless hours in administrative work.
                        </p>
                    </div> <br />

                    <div className="job-block">
                        <h3>Legal Assistant | Hershner Hunter, LLP | Eugene, OR</h3>
                        <h3>06/2020 - 10/2020</h3>

                        <p>
                            Assembled and filed Federal and Oregon state trademark applications, as well as copyright applications.
                        </p>
                        <p>
                            Maintained responsibility of the client and legal databases, ensuring all information was accurate and up-to-date.
                        </p>
                    </div> <br />


                    <div className="job-block">
                        <h3>Administrative Assistant | Eugene Mission | Eugene, OR </h3>
                        <h3>10/2017 - 04/2018</h3>

                        <p>
                            Managed the coordination of two free dental clinics for a total of 20 homeless individuals, allowing them the opportunity to receive dental care in a judgment free environment.
                        </p>
                        <p>
                            Restructured filing and organizational systems, increasing overall efficiency and scalability within the nonprofit.
                        </p>
                    </div> <br />


                    <div className="job-block">
                        <h3>Administrative Assistant | Eugene Veterans Center | Eugene, OR </h3>
                        <h3>12/2015 - 03/2017</h3>

                        <p>
                            Coordinated several stakeholder schedules simultaneously and contacted clients regarding appointments.
                        </p>
                        <p>
                            Maintained the utmost tact and discretion when dealing with sensitive topics, to ensure a relaxed and safe atmosphere.
                        </p>
                    </div> <br />

                    <div className="job-block">
                        <h3>Sales Associate | Jos A Bank | Willow Grove, PA	</h3>
                        <h3>07/2014 - 04/2015</h3>

                        <p>
                            Ensured accuracy in customer transactions by operating multiple technologies to itemize and total purchases.
                        </p>
                        <p>
                            Assisted management with store stocking and opening/closing procedures.
                        </p>
                    </div> <br />

                    <div className="job-block">
                        <h3>Cryptologic Technician Interpretive, 2nd Class | US Navy | Fort Gordon, GA </h3>
                        <h3>06/2008 - 06/2014</h3>

                        <p>
                            Served as a translator with proficiency in Persian Farsi and Dari.
                        </p>
                        <p>
                            Deployed on two separate occasions as a Special Operator aboard EP-3E, for a total of over ten months.
                        </p>
                        <p>
                            Earned multiple awards while serving, to include Good Conduct Medal (x2), National Defense Medal, Global War on Terror Expeditionary Medal and Sea Service Deployment Ribbon.
                        </p>
                    </div> <br />
                </div>

                <div className='education'>
                        <h2>Education</h2>
                    </div>
                    <div className='ed-block'>
                        <h3>Software Engineering Immersive Fellow, General Assembly</h3> <h3>09/2021</h3>
                    </div>

                    <div className='ed-block'>
                        <h3>Bachelor of Arts, International Studies | University of Oregon | Eugene, OR</h3> <h3>06/2018</h3>
                    </div>
                </div>
            </div>
    )
}

export default Home;