import { Stores } from "./store"
import {useParams} from 'react-router-dom'
import './App.css'
export function ShowPorduct(){
    const id = useParams().id;
    console.log(id);
    const product = Stores.find((p) => p.id == id);
    console.log(product);
    return <div className="ShowProduct">
                <h1>{product.title}</h1>
                <h3>{product.size}</h3>
                <img src={product.imageUrl}  />
                <p>{product.price+"$"}</p>
            <button><a href="/product">back</a></button>
    </div>
}