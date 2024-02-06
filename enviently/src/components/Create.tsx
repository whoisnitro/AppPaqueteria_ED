// Create.jsx
import { useState } from "react";
import "./create.css";
import { useNavigate } from "react-router-dom";

interface createProps {
  addPackage: any;
}

const Create = ({ addPackage }: createProps) => {
  const navigate = useNavigate();
  const [newPackage, setNewPackage] = useState({
    name: "",
    price: 0,
    package: "",
    date: "",
    origin: "",
    destiny: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewPackage({ ...newPackage, [name]: value });
  };

  const handleCreatePackage = () => {
    addPackage(newPackage);
    setNewPackage({
      name: "",
      price: 0,
      package: "",
      date: "",
      origin: "",
      destiny: "",
    });
  };

  return (
    <>
     <div className="menu-options">
        <span onClick={() => navigate("/create")}>Crear un paquete</span>
        <span onClick={() => navigate("/menu")}>Menú</span>
        <span onClick={() => navigate("/")}>Cerrar sesión</span>
      </div>
      <div className="create-container">
      <h2>Crear nuevo paquete</h2>
      <label>Nombre:</label>
      <input
        type="text"
        name="name"
        value={newPackage.name}
        onChange={handleInputChange}
      />

      <label>Precio:</label>
      <input
        type="number"
        name="price"
        value={newPackage.price}
        onChange={handleInputChange}
      />

      <label>Tamaño paquete:</label>
      <input
        type="text"
        name="package"
        value={newPackage.package}
        onChange={handleInputChange}
      />

      <label>Fecha:</label>
      <input
        type="text"
        name="date"
        value={newPackage.date}
        onChange={handleInputChange}
      />

      <label>Origen:</label>
      <input
        type="text"
        name="origin"
        value={newPackage.origin}
        onChange={handleInputChange}
      />

      <label>Destino:</label>
      <input
        type="text"
        name="destiny"
        value={newPackage.destiny}
        onChange={handleInputChange}
      />

      <button onClick={handleCreatePackage}>Crear Paquete</button>
    </div>
    </>
  );
};

export default Create;
