import { useState } from "react";
import { data } from "../data/data";
import "./menu.css";
import { useNavigate } from 'react-router-dom';

interface menuProps {
    packages: any
}

const Menu = ({ packages }: menuProps) => {
    const [filterSize, setFilterSize] = useState("");
    const [filterPrice, setFilterPrice] = useState("");
    const navigate = useNavigate();
  
    const handleSizeChange = (event: any) => {
      setFilterSize(event.target.value);
    };
  
    const handlePriceChange = (event: any) => {
      setFilterPrice(event.target.value);
    };
  
    const filteredData = [...data, ...packages].filter(
      (item) =>
        item.package.includes(filterSize) &&
        item.price.toString().includes(filterPrice)
    );

  return (
    <div>
     <div className="menu-options">
        <span onClick={() => navigate("/create")}>Crear un paquete</span>
        <span onClick={() => navigate("/menu")}>Menú</span>
        <span onClick={() => navigate("/")}>Cerrar sesión</span>
      </div>

      <div className="filter-section">
        <label>Filtrar por Tamaño:</label>
        <input
          type="text"
          value={filterSize}
          onChange={handleSizeChange}
          placeholder="Ingrese el tamaño"
        />

        <label>Filtrar por Precio:</label>
        <input
          type="text"
          value={filterPrice}
          onChange={handlePriceChange}
          placeholder="Ingrese el precio"
        />
      </div>

      <div className="menu-container">
        {filteredData.map((value, index) => (
          <div key={index} className="menu-item">
            <div>
              <p className="name">Nombre: {value.name}</p>
              <p className="price">Precio: {value.price} €</p>
            </div>
            <div>
              <p>Tamaño paquete: {value.package}</p>
              <p>Fecha: {value.date}</p>
            </div>
            <div>
              <p className="origin-destiny">
                Origen: {value.origin} - Destino: {value.destiny}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
