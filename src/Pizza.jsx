import { pizzaData } from "./data"


function Pizza({pizzaO}){
    return (
      <li className={`pizza ${pizzaO.soldOut? 'sold-out': ''}`}>
        <img src={pizzaO.photoName} alt="XXX" />

        <div>
          <h3>{pizzaO.name}</h3>
          <p>{pizzaO.ingredients}</p>
          <span>{pizzaO.soldOut? 'SOLD OUT': pizzaO.price+100}</span>
        </div>
      </li>
    )
}

export default Pizza

