import { Routes , Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/signIn" element={<SignIn/>}></Route>
      <Route path="/signUp" element={<SignUp/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  );
};

export default App;
