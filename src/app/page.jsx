import Footer from "@components/Footer"
import CODESVG from "@components/svg"
import "@styles/home.css"

const Home = () => {
    return (
        <div id="container">
            <div className="aboutme">
                <h1 className="name">Jaykumar Patel | Full Stack developer 💻
                </h1>
                <div className="codesvg">
                <CODESVG/>
                </div>
                <p className="desc">
                My technical skill set spans a diverse range, encompassing the robust Java programming language, which I've employed to architect and develop resilient APIs serving as application cornerstones. Additionally, my proficiency in the SpringBoot Framework has enabled me to construct scalable and high-performance applications, streamlining development workflows. I'm adept at harnessing the power of VueJS to create dynamic and user-centric frontend interfaces, ensuring seamless and intuitive interactions.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Home