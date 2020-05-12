import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Sign from "./sign_in-log_in/Sign";
import Filmpage from "./Mainpage/Filmpage/Filmpage";
import "./App.css";
import Mainpage from "./Mainpage/Mainpage";
import AddMovieForm from "./Mainpage/AddMovieForm/AddMovieForm";
import Favourites from "./Favourites/Favourites";
import logo from "./logo.png";
import Rating from "./Rating";
import SearchByRate from "./SearchByRate";
/*let profiles = [];*/

class App extends Component {
  /**********Movie List**************/
  movies = [
    {
      title: "Harry Potter",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61FIMzHQJhL._SY679_.jpg",
      rate: "***",
      Description:
        "After burying Dobby, Harry Potter asks the goblin Griphook to help Ron Weasley, Hermione Granger and him break into Bellatrix Lestrange's vault at Gringotts bank, suspecting a Horcrux may be there. Griphook agrees in exchange for the Sword of Gryffindor. Wandmaker Ollivander tells Harry that two wands taken from Malfoy Manor belonged to Bellatrix and Draco Malfoy, though Malfoy's has changed its allegiance to Harry.",
    },
    {
      title: "DeadPool",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91tuQ9AVNxL._SY606_.jpg",
      rate: "****",
      Description:
        "Deadpool is a highly trained assassin and mercenary. He is adept in multiple forms of martial arts, including Savate. Deadpool is an extraordinary athlete, and an expert swordsman and marksman. He is skilled in the use of multiple weapons, including katanas, knives, grenades, and guns.",
    },
    {
      title: "Interstellar",
      image:
        "https://i.pinimg.com/originals/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8.jpg",
      rate: "*****",
      Description:
        "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
    },
    {
      title: "Inception",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51p3oAsXNmL._AC_.jpg",
      rate: "*****",
      Description:
        "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.t",
    },

    {
      title: "The Revenant",
      image:
        "https://cdn.shopify.com/s/files/1/1416/8662/products/revenant_2016_teaser_styleB_original_film_art_2000x.jpg",
      rate: "*****",
      Description:
        "While exploring the uncharted wilderness in 1823, frontiersman Hugh Glass (Leonardo DiCaprio) sustains life-threatening injuries from a brutal bear attack. When a member (Tom Hardy) of his hunting team kills his young son (Forrest Goodluck) and leaves him for dead, Glass must utilize his survival skills to find a way back to civilization. Grief-stricken and fueled by vengeance, the legendary fur trapper treks through the snowy terrain to track down the man who betrayed him.",
    },
    {
      title: "Kung Fu Panda",
      image:
        "https://cdn.europosters.eu/image/1300/posters/kung-fu-panda-i13408.jpg",
      rate: "***",
      Description:
        "Po might just be the laziest, clumsiest panda in the Valley of Peace, but he secretly dreams of becoming a kung fu legend. When the villainous snow leopard Tai Lung threatens Po's homeland, the hapless panda is chosen to fulfil an ancient prophecy and defend the Valley from attack. Training under Master Shifu, Po embarks on an epic high-kicking adventure as he sets out to thwart Tai Lung's evil plans. A DreamWorks animation.t",
    },
    {
      title: "Spiderman",
      image:
        "https://ae01.alicdn.com/kf/H1724fda91c994de5a906770bfb8e1ec6f.jpg",
      rate: "*****",
      Description:
        "Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.",
    },
    {
      title: "Superman: Man of Steel",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71exi8sFcwL._AC_SY741_.jpg",
      rate: "**",
      Description:
        "With the imminent destruction of Krypton, their home planet, Jor-El (Russell Crowe) and his wife seek to preserve their race by sending their infant son to Earth. The child's spacecraft lands at the farm of Jonathan (Kevin Costner) and Martha (Diane Lane) Kent, who name him Clark and raise him as their own son. Though his extraordinary abilities have led to the adult Clark (Henry Cavill) living on the fringe of society, he finds he must become a hero to save those he loves from a dire threat.t",
    },
    {
      title: "Mad Max",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/A1Y9Cqo1FmL._AC_SY679_.jpg",
      rate: "*****",
      Description:
        "Years after the collapse of civilization, the tyrannical Immortan Joe enslaves apocalypse survivors inside the desert fortress the Citadel. When the warrior Imperator Furiosa (Charlize Theron) leads the despot's five wives in a daring escape, she forges an alliance with Max Rockatansky (Tom Hardy), a loner and former captive. Fortified in the massive, armored truck the War Rig, they try to outrun the ruthless warlord and his henchmen in a deadly high-speed chase through the Wasteland.",
    },
    {
      title: "Blade Runner 2049",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/A1cLrVccuTL._AC_SL1500_.jpg",
      rate: "****",
      Description:
        "Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who's been missing for 30 years.",
    },
  ];
  Favourites = [];
  state = {
    modalShow: false,
    movieImage: "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",
    movieRate: "N/A",
    Films: this.movies,
  };
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
  SearchRate = (e) => {
    console.log(e);
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
    if (/.*/.test(e.target.value)) {
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
    this.Favourites.push(this.movies[el]);
    console.log(el);
    console.log(this.Favourites);
  };
  /****************Removing a movie from favourites********************/
  RemoveFav = (e) => {
    this.Favourites.splice(e, 1);
    console.log(this.Favourites);
    this.setState({ change: "changed" });
  };
  /**************Rating***************/

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
                <SearchByRate SearchRate={this.SearchRate} />
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
                      ? this.state.rate
                        ? this.movies.filter((el) =>
                            el.title.toLowerCase().includes(this.state.rate)
                          )
                        : this.movies.filter((el) =>
                            el.title.toLowerCase().includes(this.state.value)
                          )
                      : this.movies
                  }
                  AddFav={this.AddFav}
                  OpenFilmModal={this.OpenFilmModal}
                  Rating={this.Rating}
                />
              </Route>
              <Route path="/Favourites">
                <Favourites
                  Favourites={
                    this.state.value
                      ? this.Favourites.filter((el) =>
                          el.title.toLowerCase().includes(this.state.value)
                        )
                      : this.Favourites
                  }
                  RemoveFav={this.RemoveFav}
                />
              </Route>
              {this.movies.map((el) => (
                <Route path={`/${el.title}`}>
                  <Filmpage el={el} />
                </Route>
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
