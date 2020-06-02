import React, { useState } from "react";

const Form = ({setInfo}) => {

  const [Search, setSearch] = useState({
    Artist:"",
    Song: ""
  });

  const updateSearch = (e) => {
    setSearch({
      ...Search,
      [e.target.name]: e.target.value
    })
  }

  const sendSearch = (e) => {
    e.preventDefault();
    if(Search.Artist.trim() === "" || Search.Song.trim() === ""){
      alert("Ambos campos son Obligatorios");
      return;
    }
    setInfo(Search);
  }

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form className="col card text-white bg-transparent  mb-5 pt-5 pb-2"
            onSubmit={sendSearch}
          >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Artist"
                      placeholder="Nombre Artista"
                      required
                      onChange={updateSearch}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Song"
                      placeholder="Nombre Canción"
                      required
                      onChange={updateSearch}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
