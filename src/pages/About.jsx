import faizasAI from "../../public/FaizasAI.png"
function About() {
    return (
        <>
            <section className="about-me">
                <img src={faizasAI} className="avatar" />
                <div>
                    My name is Faiza Haque and I currently work at as a Data Analyst for a tech company in the bay area.
                    I am passionate about using data to tell stories and drive business decisions. I am also interested in
                    machine learning and artificial intelligence. I am excited to learn more about these topics and apply them
                    to real-world problems.
                </div>
            </section>
        </>
    )
}

export default About;