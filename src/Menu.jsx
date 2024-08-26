import Pizza from "./Pizza"
import './App.css'
function Menu(){
    return (
        <main className="menu">
            <h2 style={{textAlign:"center"}}>Our Menu</h2>
            <Pizza 
            name="Pizza Salamino"
            ingredients="Tomato, mozarella, and pepperoni"
            photoName="pizzas/salamino.jpg"
            price={15}
            />
            <Pizza 
             name="Pizza Prosciutto"
            ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
            photoName="pizzas/prosciutto.jpg"
            price={49}
            />
        </main>
    )
    
}
export default Menu