import cart from "../assets/cart.png.svg"

const styles = {
    img: {
        height: "2rem",
        width: "auto"
    }
}

export const CartWidget = () => (
    <>
    <img src={cart} style={styles.img} alt="Changuito"/><span>0</span>
    </>
)