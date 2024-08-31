export default function Order(props) {
    return (
        <div className="order">
            <p style={{color:'green'}}>We are open now to {props.closeOur}:00 pm</p>
            <button className="btn">order</button>
        </div>
    )
}

