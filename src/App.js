import './App.css';
import {useState} from 'react';
import FruitList from './components/FruitList';

function App() {

  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
   ]);

   const filterRedFruits = () => {
    const filter = fruits.filter(item=> item.color === "red");
    setFruits(filter);
  }

  const totalPrice = fruits.reduce((acc, item) => acc += item.price, 0);

  return (
    <div className="App">
      <header className="App-header">
          <div>Valor total: ${totalPrice}</div>
          <FruitList fruits={fruits} setFruits={setFruits}/>
          <button onClick={filterRedFruits}>Filtrar frutas vermelhas</button>
      </header>
    </div>
  );
}

export default App;
