import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/GithubContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./pages/User";
const App = () => {
  return (
    <AlertProvider>
      <GithubProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar title={"Github Finder"} />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<Home />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </GithubProvider>
    </AlertProvider>
  );
};

export default App;
