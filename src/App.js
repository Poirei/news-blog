import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import News from "./components/news/news.component";
import HomePage from "./pages/home/home.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/news/:id" component={News} />
      </BrowserRouter>
    </>
  );
}

export default App;
