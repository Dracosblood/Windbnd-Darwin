import { useState } from "react";
import Cards from "./componentes/Cards/Cards";
import Finland from "./componentes/Nav/Finland";
import Nav from "./componentes/Nav/Nav";


const options = [
  { value: 'Helsinki', label: 'Helsinki, Finland' },
  { value: 'Turku', label: 'Turku, Finland' },
  { value: 'Vaasa', label: 'Vaasa, Finland' },
  { value: 'Oulu', label: 'Oulu, Finland' }
  ]

const App = () => {
  // Estado para almacenar los valores de los campos de entrada
  const [city, setCity] = useState("");
  const [guests, setGuests] = useState(0);

  // Función para manejar el cambio en el campo de entrada de ciudad
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  // Función para manejar el cambio en el campo de entrada de invitados
  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  return (
    <>
      {/* Renderizar el componente Nav y pasar las funciones de manejo como props */}
      <div className="divpadre">
      <Nav onCityChange={handleCityChange} onGuestsChange={handleGuestsChange} options={options}/>
      <Finland />
      {/* Renderizar el componente Cards y pasar los valores de los campos de entrada como props */}
      <div className="container-cards">  
      <Cards city={city} guests={guests} />
      </div>
      </div>
    </>
  );
};

export default App;
