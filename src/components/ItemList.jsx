import {Item} from "../components/Item"

export const ItemList ({produscts}) =>
produscts.map(product => <Item key={product.id} product={product} />)