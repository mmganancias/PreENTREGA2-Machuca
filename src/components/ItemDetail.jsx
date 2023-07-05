
export const ItemDetail = ({product}) => {
return  ( <>
<div>{product.codigo}</div>
<div>{product.nombre}</div>
<div>{product.genero}</div>
<div>{product.talle}</div>
<div>{product.stock}</div>
<img src="{product.imagen}" alt="{product.monbre}"/>
<div>{product.precioDeVenta}</div>
<div>{product.categoria}</div>
</>
)
}
 