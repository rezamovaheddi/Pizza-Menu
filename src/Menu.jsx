import Pizza from "./Pizza";
import './App.css';
import { pizzaData } from "./data";


  function Menu(){
      return (
          <main className="menu">
            <h2>Our Menu</h2>
            <ul className="pizzas">
            {pizzaData.map(m=>
            <Pizza 
             pizzaO={m}
            key={m.name}
             />
            )}
            </ul>
          </main>
      )
      
  }
  export default Menu

