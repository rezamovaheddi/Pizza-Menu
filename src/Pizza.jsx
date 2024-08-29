function Pizza(props){
    return (
      <div className="pizza">
        <img src={props.pizzaO.photoName} alt="XXX" />
        <li>
          <h3>{props.pizzaO.name}</h3>
          <p>{props.pizzaO.ingredients}</p>
          <span>{props.pizzaO.price+116} $</span>
        </li>
      </div>
    )
}

export default Pizza

