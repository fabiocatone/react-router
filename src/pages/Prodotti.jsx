import { useEffect, useState } from "react";
import AppHeader from "../components/AppHeader";

export default function Prodotti() {
    const [products, setProducts] = useState([]);
    function fetchProducts() {
        const url = "https://fakestoreapi.com/products";
        fetch(url)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => {console.error("Error fetching products:", error)});
    }
    useEffect(fetchProducts, []);

    return (
       <>
       <AppHeader />
       <div className="container text-center">
            <h1>Prodotti</h1>
            <p>Qui puoi trovare una vasta gamma di prodotti di alta qualità. Esplora le nostre categorie e scopri le ultime novità!</p>
        </div>

       <div className="container d-flex flex-wrap gap-3">
{products.map((product) => (
   
    <div className="card"  key={product.id}>
  <img src= {product.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
  </div>
  
  </div>

    
))}
</div>
    
       
        
       
         </>)}