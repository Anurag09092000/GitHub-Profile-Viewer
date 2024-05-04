import Search from "./Components/Search";
import UserInfo from "./Components/UserInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element = {<Search/>}/>
      <Route exact path="/user/:usename" element = {<UserInfo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
