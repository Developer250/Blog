import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("Mario");

    const handleCLick = () => {
        setName("Luigi");
    }
    return (
        <div className="home">
            <h2>Home page</h2>
            <p> { name }</p>
            <button onClick={handleCLick}>Click me</button>
        </div>
    );
}
export default Home;