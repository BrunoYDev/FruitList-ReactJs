import { useState } from "react"

function App() {
  const [fruitList, setFruitList] = useState([
    {
       name: "Morango",
       price: 15,
       category: "Frutas",
    },
    {
       name: "Uva",
       price: 23,
       category: "Frutas",
    },
    {
       name: "Banana",
       price: 23,
       category: "Frutas",
    },
    {
       name: "Beterraba",
       price: 5,
       category: "Legumes",
    },
]);

  const legumes = fruitList.filter((fruit) => fruit.category === 'Legumes');
  const frutas = fruitList.filter((fruit) => fruit.category === 'Frutas');

  const totalValue = fruitList.reduce((previousValue, currentProduct) => (
     previousValue += currentProduct.price
  ),0)

  const addProduct = () =>{
    const newFruit = {
      name: "Abacate",
      price: 56,
      category: "Frutas"
    }
    setFruitList([...fruitList, newFruit]);
  }

  return (
    <div className="App">
      <button onClick={addProduct}>Adicionar Produto</button>
      <ul>
        <h1>Todos os produtos</h1>
        {fruitList.map((fruit) => (
          <li key={fruit.name}>
            <h2>{fruit.name}</h2>
            <p>{fruit.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
          </li>
        ))}
      </ul>
      <ul>
        <h2>Legumes</h2>
        {legumes.map((legume)=>(
          <li key={legume.name}>
            <h2>{legume.name}</h2>
            <p>{legume.price}</p>
          </li>
        ))}
      </ul>
      <ul>
        <h2>Frutas</h2>
        {frutas.map((fruta)=>(
          <li key={fruta.name}>
            <h2>{fruta.name}</h2>
            <p>{fruta.price}</p>
          </li>
        ))}
      </ul>
      <h2>Total dos itens: {totalValue.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}</h2>
    </div>
  )
}

export default App
