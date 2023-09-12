import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    //Asetetaan blogit taulukkoon oletus arvoihin ja arvot näytöllä. 
    //setBlogs avulla voidaan muuttaa blogin tilaa eli klikataan jotain ja tapahtuu jotain
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: "Mario", id: 1 },
        { title: "Welcome to party!", body: "lorem ipsum...", author: "Luigi", id: 2 },
        { title: "Web dev tips", body: "lorem ipsum...", author: "Mario", id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    const [name, setName] = useState("Mario");

    useEffect(() => {
        console.log("use effect ran");
        console.log(name);
    }, [name]);

   
    // Filtteröidään blogit toisistaan auktoriteetti-ominaisuuden avulla, jonka arvo on Mario. Lisäksi määritellään 
    //Testataan useEffect toimintoa, kun halutaan vain, että nimi muuttuu, kun klikataan nimi-buttonia, 
    //mutta ei muutu kun klikataan poista - buttonia eli renderöidään yhtä asiaa, ei kaikkia.
    return (
        <div className="home">
            <BlogList blogs={blogs.filter((blog) => blog.author === "Mario")} handleDelete={handleDelete} title="All blogs!" />
            <button onClick={() => setName("Luigi")}>Change name</button>
            <p> {name }</p>
        </div>
    );
}
export default Home;