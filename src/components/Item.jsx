import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

export const Item = ({product}) => {
return  (
    <Card
    style={{width: "18rem"}}
    key={Item.id}
    className="float-start"
    >
        <Card.Title>{pruduct.name}</Card.Title>
        <Card.Text>Categoría: {product.precioDeVentay}</Card.Text>
        <Link to={`/Item/${product.id}`}>
            <button variant="primary">Ver detalles</button>
        </Link>
    </Card>
)
}