import CardItem from "./CardItem"

function CardList({products}){

    const displayProducts = products?.map((product) => {
        return <CardItem image = {product.image} name = {product.name} price = {product.price}/>
    })
    return(
        <div>
            {displayProducts}
        </div>
    )
}

export default CardList