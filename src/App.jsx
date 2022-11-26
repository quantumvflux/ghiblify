import { useEffect, useState } from "react";
import "./App.css";
import Movies from "./pages/Movies";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SearchInput from "./components/SearchInput";

function App() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    let ghibli = fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((item) => {
        setData(item);
      });
  }, []);

  return (
    <div className="app-container">
      <NavBar />
      <Header />
      <SearchInput setSearchInput={setSearchInput} />
      <Movies data={data} searchInput={searchInput} />
    </div>
  );
}

export default App;
