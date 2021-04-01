import "./App.css";
import SearchMovies from "./components/searchMovies";
import Footer from "./components/Footer";
import Header from "./components/Header"

function App() {
  return (
    <div className="container">
      <Header/>
      <h1 className="title">MisuMovi Planet</h1>
      <SearchMovies />
      <Footer/>
    </div>
  );
}

export default App;
