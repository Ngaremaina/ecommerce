import './App.css';
import CardList from './components/CardList';
import { useEffect, useState } from "react"

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetching = async () => {

      const response = await fetch("https://shoes-data.onrender.com/sneakers")
      const data = await response.json()
      console.log(data)
      return setProducts(data)
    }

    fetching()

  })


  return (
    <div className = "flex flex-col h-screen max-h-screen">
      <CardList products = {products}/>
    </div>
  );
}

export default App;
