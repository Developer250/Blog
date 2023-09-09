import { useState } from "react";

const Home = () => {
    //Asetetaan nimi ja ik� oeltus arvoihin ja kun klikataan buttonia, niin se vaihtaa nimen ja i�n arvot n�yt�ll�
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...",author: "Mario", id:1 },
        { title: "Welcome to party!", body: "lorem ipsum...",author: "Luigi", id:2 },
        { title: "Web dev tips", body: "lorem ipsum...",author: "Mario", id:3 },
    ]);
    

       
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> {blog.title} </h2>
                    <p> Written by {blog.author} </p>
            </div>
            ))}
        </div>
    );
}
export default Home;