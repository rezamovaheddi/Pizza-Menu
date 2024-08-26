import Pizza from "./Pizza"
import './App.css'
function Menu(){
    return (
        <main className="menu">
            <h2 style={{textAlign:"center"}}>Our Menu</h2>
            <Pizza/>
            <Pizza/>
            <Pizza/>
            
        </main>
    )
    
}
export default Menu