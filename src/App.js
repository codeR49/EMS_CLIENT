import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Signin from "./Page/Signin/Signin";


import Home from "./Page/Layouts/Home";
import EngineerForm from "./Page/Layouts/EngineerForm";
import { AuthProvider } from "./Component/Utils/Auth";
import RequireAuth from "./Component/ProtectedRoute/RequireAuth";
import AdminDashbord from "./Page/Layouts/AdminDashbord";



function App() {
  return (
    <AuthProvider>
    
      <div className="">
      <BrowserRouter>
     
      <Routes>
      
      <Route exact path="/" element={<Signin />}/>
      <Route exact path="/home" element={<RequireAuth><Home/></RequireAuth>}/>
      <Route exact path="/admin/viewdata" element={<RequireAuth><AdminDashbord/>  </RequireAuth>}/>
      <Route exact path="/engineer/form" element={<RequireAuth><EngineerForm/></RequireAuth>}/>
         
         
          
      </Routes>
     
      </BrowserRouter>
      </div>
    </AuthProvider>

  );
}

export default App;
