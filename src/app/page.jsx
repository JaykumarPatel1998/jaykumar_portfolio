"use client"
import CODESVG from "@components/svg"
import "@styles/home.css"
import Lottie from "lottie-react"
import animationData from "../../public/assets/animation.json"
import apiData from "../../public/assets/api.json"
import officeData from "../../public/assets/office.json"

const Home = () => {
    return (
        <div id="container">
            <div className="aboutme">
                <h1 className="name">Jaykumar Patel Full Stack developer 💻
                </h1>
                <div className="codesvg">
                    <Lottie animationData={animationData} />
                </div>
                <p className="desc">
                    My technical skill set spans a diverse range, encompassing the robust Java programming language, which I've employed to architect and develop resilient APIs serving as application cornerstones. Additionally, my proficiency in the SpringBoot Framework has enabled me to construct scalable and high-performance applications, streamlining development workflows. I'm adept at harnessing the power of VueJS to create dynamic and user-centric frontend interfaces, ensuring seamless and intuitive interactions.
                </p>
            </div>

            <div className="techstack">
                <h1 className="name">TechStack Experience 📝
                </h1>
                <div className="codesvg">
                    <CODESVG />
                </div>
                <p className="desc">
                    <em>#PrimaryStack🗝️</em>
                    The React, Oracle SQL Server, and Spring Boot tech stack integrates a modern JavaScript library (React), a robust relational database system (Oracle SQL Server), and a Java-based backend framework (Spring Boot) to facilitate the creation of sophisticated web applications with interactive user interfaces, powerful data management, and efficient server-side functionality.
                </p>
                <p className="desc">
                    The React, MongoDB, and Node.js tech stack which combines a JavaScript-based frontend library (React), a flexible NoSQL database (MongoDB), and an asynchronous backend runtime (Node.js) to enable the efficient development of dynamic, real-time web applications with a unified language and versatile data management capabilities.
                </p>
            </div>

            <div className="experience">
                <h1 className="name">Corporate Experience 💼
                </h1>
                <div className="codesvg">
                    <Lottie animationData={apiData} />
                </div>
                <div className="codesvg">
                    <Lottie animationData={officeData} />
                </div>
                <p className="desc">
                    <span>Java and SpringBoot Framework</span>
                    <span>API Design and Development</span>
                    <span>Frontend Framework (VueJS)</span>
                    <span>User Experience (UX) Design</span>
                    <span>Cloud Infrastructure (Microsoft Azure)</span>
                    <span>DevOps Collaboration</span>
                    <span>Agile/Scrum Methodologies</span>
                    <span>Cross-Functional Team Collaboration</span>
                    <span>Legacy Application Replacement</span>
                    <span>Client Relationship Management</span>
                    <span>Innovation and Quality Delivery</span>
                    <span>End-to-End Full Stack Development</span>
                </p>
            </div>
        </div>
    )
}

export default Home