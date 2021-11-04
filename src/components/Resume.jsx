import React from 'react'

function Resume() {
    return (

        <div className='resume'>
            <h1>Resumé</h1>

            <div className='professional-experience'>
                <h2>Skills</h2>
            </div>

            <div className='skill-block-parent'>
                <div className='skill-block'>
                    <div className='skill-block-heading'><h3>Languages</h3></div>
                    <div className='skills'>
                        <p>Javascript (ES6)</p>
                        <p>Python3</p>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>Mongoose</p>
                        <p>SQL</p>
                    </div>
                </div>
            </div>

            <div className='skill-block-parent'>
                <div className='skill-block'>
                    <div className='skill-block-heading'><h3>Databases</h3></div>
                    <div className='skills'>
                        <p>Mongoose</p>
                        <p>MongoDB</p>
                    </div>
                </div>
            </div>

            <div className='skill-block-parent'>
                <div className='skill-block'>
                    <div className='skill-block-heading'><h3>Libraries</h3></div>
                    <div className='skills'>
                        <p>React</p>
                        <p>Node.js</p>
                        <p>Express.js</p>
                    </div>
                </div>
            </div>

            <div className='skill-block-parent'>
                <div className='skill-block'>
                    <div className='skill-block-heading'><h3>Other</h3></div>
                    <div className='skills'>
                        <p>RESTful Routing</p>
                        <p>JSON</p>
                    </div>
                </div>
            </div>


            <div className='professional-experience'>
                <h2>Professional Experience</h2>
            </div>

            <div className="one-job">
                <div className='job-block-header'>
                    <h3>Administrative Assistant | Bonin Kaster Souder CPAs | Eugene, OR</h3> <h3>01/2021 - 04/2021</h3>
                </div>

                <p>
                    Prepared and mailed several hundred tax preparation worksheets, streamlining the tax filing process for both clients and the firm.
                </p>
                <p>
                    Finalized the processing of tax returns, saving the accountants countless hours in administrative work.
                </p>
            </div>


            <div className="one-job">
                <div className='job-block-header'>
                    <h3>Legal Assistant | Hershner Hunter, LLP | Eugene, OR</h3> <h3>06/2020 - 10/2020</h3>
                </div>

                <p>
                    Assembled and filed Federal and Oregon state trademark applications, as well as copyright applications.
                </p>
                <p>
                    Maintained responsibility of the client and legal databases, ensuring all information was accurate and up-to-date.
                </p>
            </div>


            <div className="one-job">
                <div className='job-block-header'>
                    <h3>Administrative Assistant | Eugene Mission | Eugene, OR </h3>
                    <h3>10/2017 - 04/2018</h3>
                </div>

                <p>
                    Managed the coordination of two free dental clinics for a total of 20 homeless individuals, allowing them the opportunity to receive dental care in a judgment free environment.
                </p>
                <p>
                    Restructured filing and organizational systems, increasing overall efficiency and scalability within the nonprofit.
                </p>
            </div>


            <div className="one-job">
                <div className='job-block-header'>
                    <h3>Administrative Assistant | Eugene Veterans Center | Eugene, OR </h3>
                    <h3>12/2015 - 03/2017</h3>
                </div>

                <p>
                    Coordinated several stakeholder schedules simultaneously and contacted clients regarding appointments.
                </p>
                <p>
                    Maintained the utmost tact and discretion when dealing with sensitive topics, to ensure a relaxed and safe atmosphere.
                </p>
            </div>

            <div className="one-job">
                <div className='job-block-header'>
                    <h3>Sales Associate | Jos A Bank | Willow Grove, PA	</h3>
                    <h3>07/2014 - 04/2015</h3>
                </div>
                <p>
                    Ensured accuracy in customer transactions by operating multiple technologies to itemize and total purchases.
                </p>
                <p>
                    Assisted management with store stocking and opening/closing procedures.
                </p>
            </div>


            <div className="one-job">
                <div className='job-block-header'>
                    <h3>Cryptologic Technician Interpretive, 2nd Class | US Navy | Fort Gordon, GA </h3>
                    <h3>06/2008 - 06/2014</h3>
                </div>
                <p>
                    Served as a translator with proficiency in Persian Farsi and Dari.
                </p>
                <p>
                    Deployed on two separate occasions as a Special Operator aboard EP-3E, for a total of over ten months.
                </p>
                <p>
                    Earned multiple awards while serving, to include Good Conduct Medal (x2), National Defense Medal, Global War on Terror Expeditionary Medal and Sea Service Deployment Ribbon.
                </p>
            </div>


            <div className='education-section'>
                <div className='professional-experience'>
                    <h2>Education</h2>
                </div>
                <div className='job-block-header'>
                    <h3>Software Engineering Immersive Fellow, General Assembly</h3> <h3>09/2021</h3>
                </div>
                
                <div className='job-block-header'>
                    <h3>Bachelor of Arts, International Studies | University of Oregon | Eugene, OR</h3> <h3>06/2018</h3>
                </div>
            </div>
        </div>
    )
}

export default Resume;