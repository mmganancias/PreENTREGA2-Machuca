import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"

import data from "../data/products.json"
import {ItemListContainer} from "../components/ItemList"
export const ItemListContainer = props => {
    const [products, setProducts] = useState ([])

    useEffect (() => {
        const promesa = new Promise((resolve, rejected) => {
            setTimeout (() => {
                resolve(data);
            }, 2000)
        }) 

        promesa.then(result => setProducts(result))
    }, [])
   
    return (
    <Container>
        <h2>{props.geeting}</h2>
        {products.length === 0 ? (
            <div>Cargando... </div>
        ) : <TtemList products={products} />
}
    </Container>
    )
}  