// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Create from "./components/Create";

function App() {
  const [packages, setPackages] = useState([]);

  const addPackage = (newPackage: any) => {
    setPackages([...packages, newPackage]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu packages={packages} />} />
        <Route path="/create" element={<Create addPackage={addPackage} />} />
      </Routes>
    </Router>
  );
}

export default App;
