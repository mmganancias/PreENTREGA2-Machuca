import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"

import data from "../data/products.json"
import {ItemListContainer} from "./ItemList"

export const ItemListContainer = props => {
    const [products, setProducts] = useState ([])

const {id} = useParams()

    useEffect (() => {
        const promesa = new Promise((resolve, rejected) => {
            setTimeout (() => {
                resolve(data);
            }, 2000)
        })

        promesa.then(result => {
            setProducts(result)
    }, [id])
    }

    return (
    <Container>
        <h1>Detalle</h1>
        {product.length === 0 ? (
            <div>Cargando... </div>
        ) : (
        <ItemDetail products={product} />
        )}
    </Container>
    )
}
