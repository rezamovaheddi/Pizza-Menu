import Pizza from "./Pizza";
import './Menu.css';
import { pizzaData } from "./data";


  function Menu(){

    const Pizzas =pizzaData;

      return (
          <main className="menu">
            <h2>Our Menu</h2>

            {Pizzas.length < 1 
            ? <h1 style={{color: 'red'}}>We aren`t item</h1>:
            <ul className="pizzas">
            {Pizzas.map(m=>
<Pizza pizzaO={m} key={m} />)}
            </ul>
            }
          </main>
      )
      
  }
  export default Menu

