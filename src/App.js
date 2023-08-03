import { Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import AddBlog from "./screens/AddBlog";

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} exact element={<HomeScreen/>}/>
        <Route path={'/add'} element={<AddBlog/>}/>
      </Routes>
    </div>
  );
}

export default App;
