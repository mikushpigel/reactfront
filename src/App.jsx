import "./App.css";
import About from "./components/about";
import Home from "./components/home";
import NavBar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import AllCards from "./components/allCards";
import LogOut from "./components/logOut";
import SignUpBiz from "./components/signUpBiz";
import DeleteCard from "./components/deleteCard";
import { ToastContainer } from "react-toastify";
import Greeting from "./components/greeting";
import CreateCard from "./components/createCard";
import UpdateCard from "./components/updateCard";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <ToastContainer />
      <header>
        <NavBar />
      </header>
      <div className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signupbiz" element={<SignUpBiz />} />
          <Route path="allcards" element={<AllCards />} />
          <Route path="createcard" element={<CreateCard />} />
          <Route path="logout" element={<LogOut />} />
          <Route path="mycards/delete/:id" element={<DeleteCard />} />
          <Route path="mycards/update/:id" element={<UpdateCard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
