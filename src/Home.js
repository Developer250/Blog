import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    //Asetetaan blogit taulukkoon oletus arvoihin ja arvot n‰ytˆll‰. 
    //setBlogs avulla voidaan muuttaa blogin tilaa eli klikataan jotain ja tapahtuu jotain
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: "Mario", id: 1 },
        { title: "Welcome to party!", body: "lorem ipsum...", author: "Luigi", id: 2 },
        { title: "Web dev tips", body: "lorem ipsum...", author: "Mario", id: 3 },
        { title: "Weather", body: "lorem ipsum...", author: "Luigi", id: 3 },
        { title: "Hockey", body: "lorem ipsum...", author: "Luigi", id: 3 },
        { title: "Football", body: "lorem ipsum...", author: "Mario", id: 3 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // Filtterˆid‰‰n blogit toisistaan auktoriteetti-ominaisuuden avulla, jonka arvo on Mario. Lis‰ksi m‰‰ritell‰‰n 
    return (
        <div className="home">
            <BlogList blogs={blogs.filter((blog) => blog.author === "Luigi")} handleDelete={handleDelete} title="Luigi's blogs"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "Mario", "Luigi")} handleDelete={handleDelete} title="Mario's blogs" />
        </div>
    );
}
export default Home;