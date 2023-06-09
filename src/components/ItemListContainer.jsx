import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import Container from "react-bootstrap/Container"

import data from "../data/products.json"
import {ItemListContainer} from "../components/ItemList"
import { resourceLimits } from "worker_threads"
export const ItemListContainer = props => {
    const [products, setProducts] = useState ([])

const {id} = useParams()

    useEffect (() => {
        const promesa = new Promise((resolve, rejected) => {
            setTimeout (() => {
                resolve(data);
            }, 2000)
        }) 

        promesa.then(result => 
            if(id) {
                setProducts(result.filter(product => product.categoria === id))
            } else {
                setProducts (result)
            }
            setProducts(result))
    }, [id])
   
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