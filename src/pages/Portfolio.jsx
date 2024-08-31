function Portfolio() {

    const portfolioItems = [
        {
            id: 1,
            name: "Note Taker",
            image: "/TakeNotes.png",
            github: "https://github.com/Faiza-Haque/HappyNotebook",
            live: "https://happynotebook-1.onrender.com",
            
        },
        {
            id: 2,
            name: "Employee Payroll Tracker",
            image: "/EmployeeTracker.png",
            github: "https://github.com/Faiza-Haque/Homework-3",
            live: "https://faiza-haque.github.io/Homework-3/",
        },
        {
            id: 3,
            name: "Project Manager",
            image: "/ProjectManager.png",
            github: "https://github.com/Faiza-Haque/Faizas-Project-Manager",
            live: "https://faiza-haque.github.io/Faizas-Project-Manager/",
        },

        {
            id: 4,
            name: "Weather Tracker",
            image: "/WeatherTracker.png",
            github: "https://github.com/Faiza-Haque/My-Weather-Dashboard",
            live: "https://faiza-haque.github.io/My-Weather-Dashboard/",
        },

        {
            id: 5,
            name: "Faiza's Blog",
            image: "/FaizasBlog.png",
            github: "https://github.com/Faiza-Haque/Faizas-Blog",
            live: "https://faiza-haque.github.io/Faizas-Blog/",
            
        }
    ]

    return (
        <>
            

            <div id="portfolio-container">
                {
                    portfolioItems.map(item => {
                        return (
                            <div className="big-box">

                                {/* image linked to deployed*/}
                                <a href={item.live}><div
                                    className="box"
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                    }}
                                ></div>
                                </a>

                                {/* github link */}
                                <a href={item.github}><h4>{item.name}</h4></a>


                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Portfolio;