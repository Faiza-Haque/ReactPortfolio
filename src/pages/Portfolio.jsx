function Portfolio() {

    const portfolioItems = [
        {
            id: 1,
            name: "Faiza's Blog",
            image: "/FaizasBlog.png",
            github: "https://github.com/Faiza-Haque/Faizas-Blog",
            live: "https://faiza-haque.github.io/Faizas-Blog/",
        },
        {
            id: 2,
            name: "Weather Tracker 2",
            image: "https://placehold.co/600x400",
            github: "https://github.com/Faiza-Haque/My-Weather-Dashboard",
            live: "https://faizasblog.netlify.app/",
        },
        {
            id: 3,
            name: "Weather Tracker 3",
            image: "https://placehold.co/600x400",
            github: "https://github.com/Faiza-Haque/My-Weather-Dashboard",
            live: "https://faizasblog.netlify.app/",
        },

        {
            id: 4,
            name: "Weather Tracker 4",
            image: "https://placehold.co/600x400",
            github: "https://github.com/Faiza-Haque/My-Weather-Dashboard",
            live: "https://faizasblog.netlify.app/",
        },

        {
            id: 5,
            name: "Weather Tracker 5",
            image: "https://placehold.co/600x400",
            github: "https://github.com/Faiza-Haque/My-Weather-Dashboard",
            live: "https://faizasblog.netlify.app/",
        }
    ]

    return (
        <>
            <h3>Portfolio</h3>

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