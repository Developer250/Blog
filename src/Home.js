import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    //Asetetaan blogit taulukkoon oletus arvoihin ja arvot näytöllä. 
    //setBlogs avulla voidaan muuttaa blogin tilaa eli klikataan jotain ja tapahtuu jotain
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: "Mario", id: 1 },
        { title: "Welcome to party!", body: "lorem ipsum...", author: "Luigi", id: 2 },
        { title: "Web dev tips", body: "lorem ipsum...", author: "Mario", id: 3 },
    ]);

    // Filtteröidään blogit toisistaan auktoriteetti-ominaisuuden avulla, jonka arvo on Mario. Lisäksi määritellään 
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All in one!" />
            <BlogList blogs={blogs.filter((blog) => blog.author === "Mario")} title="Mario's blogs" />
        </div>
    );
}
export default Home;