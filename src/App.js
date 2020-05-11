import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Sign from "./sign_in-log_in/Sign";

import "./App.css";
import Mainpage from "./Mainpage/Mainpage";
import AddMovieForm from "./Mainpage/AddMovieForm/AddMovieForm";
import Favourites from "./Favourites/Favourites";
import logo from "./logo.png";
/*let profiles = [];*/

class App extends Component {
  state = {
    modalShow: false,
    movieImage: "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",
    movieRate: "N/A",
    tab: [],
  };

  /**********Movie List**************/
  movies = [
    {
      title: "Harry Potter",
      image:
        "https://media.senscritique.com/media/000004753305/160/Harry_Potter_et_les_Reliques_de_la_Mort_2eme_partie.jpg",
      rate: "3",
      Description: "Some text",
    },
    {
      title: "DeadPool",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91tuQ9AVNxL._SY606_.jpg",
      rate: "4",
      Description: "Some text",
    },
    {
      title: "Interstellar",
      image:
        "https://i.pinimg.com/originals/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8.jpg",
      rate: "5",
      Description: "Some text",
    },
    {
      title: "Inception",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51p3oAsXNmL._AC_.jpg",
      rate: "5",
      Description: "Some text",
    },

    {
      title: "The Revenant",
      image:
        "https://cdn.shopify.com/s/files/1/1416/8662/products/revenant_2016_teaser_styleB_original_film_art_2000x.jpg",
      rate: "5",
      Description: "Some text",
    },
    {
      title: "Kung Fu Panda",
      image:
        "https://cdn.europosters.eu/image/1300/posters/kung-fu-panda-i13408.jpg",
      rate: "3",
      Description: "Some text",
    },
    {
      title: "Spiderman",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoFIBMM8XybI4D-HAVlJuwpOy79AzU5vjI-9ezMcyneWIng43G&usqp=CAU",
      rate: "5",
      Description: "Some text",
    },
    {
      title: "Superman: Man of Steel",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71exi8sFcwL._AC_SY741_.jpg",
      rate: "2",
      Description: "Some text",
    },
    {
      title: "Mad Max",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWlpPKhw16nDHdHWUYurrFzfLqNBtBKHi-GG6LMuV4Aiy_FtBE&usqp=CAU",
      rate: "5",
      Description: "Some text",
    },
    {
      title: "Blade Runner 2049",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/A1cLrVccuTL._AC_SL1500_.jpg",
      rate: "4",
      Description: "Some text",
    },
    {
      title: "I am Legend",
      image:
        "https://cdn.shopify.com/s/files/1/1416/8662/products/I_Am_Legend_2007_advance_original_film_art_2000x.jpg?v=1570119974",
      rate: "3",
      Description: "Some text",
    },
  ];
  Favourites = [];
  /***********************Functionalities*******************************/

  /**********ModalDisplay toggle functions************/
  DisplayModal = () => {
    this.setState({ modalShow: true });
  };

  OpenFilmModal = () => {
    this.setState({ AddFilmModal: true });
  };
  hideFilmModal = () => {
    this.setState({ AddFilmModal: false });
  };
  /*******Getting the users coords*******/
  GetName = (e) => {
    this.setState({ name: e.target.value });
  };
  GetEmail = (e) => {
    this.setState({ Email: e.target.value });
  };
  /***********the serach functionalities*************/
  Search = (e) => {
    this.setState({ value: e.target.value });
  };
  /***********Add Film Functions****************/
  GetFilmName = (e) => {
    if (/^[a-z0-9\.:\s]{0,16}$/gi.test(e.target.value)) {
      this.setState({ movieName: e.target.value });
    } else {
      e.target.value = "";
    }
  };

  GetFilmImage = (e) => {
    if (/(https:\/\/).*/.test(e.target.value)) {
      this.setState({ movieImage: e.target.value });
    } else {
      e.target.value = "";
    }
  };
  GetFilmRate = (e) => {
    if (/^[1-5]$/.test(e.target.value)) {
      this.setState({ movieRate: e.target.value });
    } else {
      e.target.value = "";
    }
  };
  AddFilm = () => {
    this.movies.unshift({
      title: this.state.movieName,
      image: this.state.movieImage,
      rate: this.state.movieRate,
      Description: "Some text",
    });
    this.setState({ AddFilmModal: false });
    this.setState({ movieName: "" });
    this.setState({
      movieImage:
        "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",
    });
    this.setState({ movieRate: "N/A" });
  };
  /************adding a movie to favourites**************/

  AddFav = (el) => {
    this.Favourites.push(el);
    console.log(this.Favourites);
  };
  render() {
    return (
      <Router>
        <div className="App">
          {this.state.modalShow ? (
            <Sign
              HideModal={this.HideModal}
              GetName={this.GetName}
              GetEmail={this.GetEmail}
            />
          ) : null}
          {this.state.AddFilmModal ? (
            <AddMovieForm
              HideModal={this.HideModal}
              GetFilmName={this.GetFilmName}
              GetFilmImage={this.GetFilmImage}
              GetFilmRate={this.GetFilmRate}
              AddFilm={this.AddFilm}
              hideFilmModal={this.hideFilmModal}
            />
          ) : null}
          <div>
            {/* ----------------------NavBar---------------- */}
            <nav className="myNavbar">
              <img src={logo} alt="logo" width="100px" />
              <div className="navMenu">
                <Link className="navlink Active" to={"/"}>
                  Mainpage
                </Link>
                <Link className="navlink" to={"/Favourites"}>
                  Favourites
                </Link>
              </div>
              <div className="SearchBar">
                <input
                  type="text"
                  name="Search-Bar"
                  placeholder="Search"
                  onChange={this.Search}
                />
                <button className="searchBtn">
                  <img
                    src="https://www.seekpng.com/png/full/920-9209972_magnifying-glass-png-white-search-icon-white-png.png"
                    alt=""
                    width="15px"
                  />
                </button>
              </div>
              <div className="Account">
                <input
                  type="button"
                  className="SignUpBtn"
                  value="SignUp"
                  onClick={this.DisplayModal}
                />
              </div>
            </nav>
          </div>
          {/* ------------------------------------- */}
          <div className="Body">
            <Switch>
              <Route exact path="/">
                <Mainpage
                  Movies={
                    this.state.value
                      ? this.movies.filter((el) =>
                          el.title.toLowerCase().includes(this.state.value)
                        )
                      : this.movies
                  }
                  AddFav={this.AddFav}
                  OpenFilmModal={this.OpenFilmModal}
                />
              </Route>
              <Route path="/Favourites">
                <Favourites />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
