import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //Asetetaan blogit taulukkoon oletus arvoihin ja arvot näytölle.
  //setBlogs avulla voidaan muuttaa blogin tilaa eli klikataan jotain ja tapahtuu jotain.
  const [blogs, setBlogs] = useState(null);

  //Haetaan data/db.json kansion tiedot eli taulukossa oelvat tiedot
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  // Filtter�id��n blogit toisistaan auktoriteetti-ominaisuuden avulla, jonka arvo on Mario. Lis�ksi m��ritell��n
  //Testataan useEffect toimintoa, kun halutaan vain, ett� nimi muuttuu, kun klikataan nimi-buttonia,
  //mutta ei muutu kun klikataan poista - buttonia eli render�id��n yht� asiaa, ei kaikkia.
  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  );
};
export default Home;
