import { useState, useEffect } from "react";

const useFetch = (url) => {
  //Asetetaan blogit taulukkoon oletus arvoihin ja arvot näytölle.
  //setBlogs avulla voidaan muuttaa blogin tilaa eli klikataan jotain ja tapahtuu jotain.
  const [data, setData] = useState(null);
  //Latausviesti palvelimessa
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Haetaan data/db.json kansion tiedot eli taulukossa oelvat tiedot
  //If-statementissä tarksitetaan, jos ei olemassa olevaa palvelinta ole, niin lähetetään käyttäjälle virheviesti
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 400);
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
