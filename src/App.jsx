import React, { useState, useEffect } from "react";
import Form from "./components/Form.jsx";
import Song from "./components/Song.jsx";
import InfoC from "./components/InfoC.jsx";

import axios from "axios";

const App = () => {
  const [Artist, setArtist] = useState("");
  const [Word, setWord] = useState([]);
  const [Info, setInfo] = useState({});

  const consultAPIW = async (Search) => {
    const { Artist, Song } = Search;
    const res = await axios(`https://api.lyrics.ovh/v1/${Artist}/${Song}`);
    //console.log(res)
    setWord(res.data.lyrics);
    setArtist(Artist);
  };

  const consultInfoAPI = async () => {
    let url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${Artist}`;
    const res = await axios(url);

    setInfo(res.data.artists[0]);
    console.log(Info);
  };

  useEffect(() => {
    //console.log("object", Artist)
    consultInfoAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Artist]);

  return (
    <>
      <Form consultAPIW={consultAPIW} />
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-6">
            <InfoC Info={Info} />
          </div>
          <div className="col-md-6">
            <Song Word={Word} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
