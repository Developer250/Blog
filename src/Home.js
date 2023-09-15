import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //Asetetaan blogit taulukkoon oletus arvoihin ja arvot näytölle.
  //setBlogs avulla voidaan muuttaa blogin tilaa eli klikataan jotain ja tapahtuu jotain.
  const [blogs, setBlogs] = useState(null);
  //Latausviesti palvelimessa
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  //Haetaan data/db.json kansion tiedot eli taulukossa oelvat tiedot
  //If-statementissä tarksitetaan, jos ei olemassa olevaa palvelinta ole, niin lähetetään käyttäjälle virheviesti
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
        });
    }, 400);
  }, []);

  // Filtter�id��n blogit toisistaan auktoriteetti-ominaisuuden avulla, jonka arvo on Mario. Lis�ksi m��ritell��n
  //Testataan useEffect toimintoa, kun halutaan vain, että nimi muuttuu, kun klikataan nimi-buttonia,
  //mutta ei muutu kun klikataan poista - buttonia eli render�id��n yht� asiaa, ei kaikkia.
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div> loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  );
};
export default Home;
