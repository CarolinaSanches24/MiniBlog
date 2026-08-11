import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";

//hooks

import {useState, useEffect} from "react";
import { useAuthentication } from "./hooks/useAuthentication"; 

//pages

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//contexts

import { AuthProvider } from "./context/AuthContext";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {

  const [user,setUser] = useState(undefined);
  const{auth} = useAuthentication();
  const loadingUser = user === undefined;

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log("Firebase respondeu");
    setUser(user);
  });

  return () => unsubscribe();
}, [auth]);

  if(loadingUser){
    console.log("Mostrando loading");
    return <p>Carregando ...</p>
  }

  return(
    <AuthProvider value = {{user}}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={!user? <Login /> : <Navigate to = "/"/>} />
              <Route path="/register" element={!user? <Login /> : <Navigate to = "/"/>} />
              <Route path="/posts/create" element={user? <CreatePost/> : <Navigate to = "/login"/>}/>
              <Route path="/dashboard" element ={user? <Dashboard/>: <Navigate to = "/login"/>}/>
          
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
