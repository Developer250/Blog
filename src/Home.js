import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs");
  //If-statementissä tarksitetaan, jos ei olemassa olevaa palvelinta ole, niin lähetetään käyttäjälle virheviesti")

  //Haetaan data/db.json kansion tiedot eli taulukossa oelvat tiedot
  //If-statementissä tarksitetaan, jos ei olemassa olevaa palvelinta ole, niin lähetetään käyttäjälle virheviesti

  // Filtteröidään blogit toisistaan auktoriteetti-ominaisuuden avulla, jonka arvo on Mario. Lis�ksi m��ritell��n
  //Testataan useEffect toimintoa, kun halutaan vain, että nimi muuttuu, kun klikataan nimi-buttonia,
  //mutta ei muutu kun klikataan poista - buttonia eli renderöidn yhtä asiaa, ei kaikkia.
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div> loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  );
};
export default Home;
