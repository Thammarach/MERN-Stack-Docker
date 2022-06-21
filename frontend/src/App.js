import {useEffect, useState } from 'react'
import axios from 'axios';

const baseURL = "http://localhost:3333/api/product"

function App() {

  const [products, setproducts] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setproducts(response.data);
    });
  }, [])

  if (!products) return null;

  return (
    <div>
      {
        products.map(element => {
          return (
            <div key={element.id} >
              <h2>{element.productName}</h2>
              <p>{element.price}</p>
              <p>{element.thumbnail}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
