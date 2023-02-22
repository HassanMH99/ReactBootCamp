import './App.css'
import { Stores } from './store'
export function Products(){
    return <div id='Products'>
        <h1 >Products</h1>
        <div id='5' className='list-product'>
            {Stores.map(name=>{
                return <div key={name.id}>
                    <a href={name.id}>{name.title}</a>

                    </div>
            })}

        </div>

    </div>
}