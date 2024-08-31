
export default function Order({closeOur}) {
    return (
        <div className="order">
            <p style={{color:'green'}}>We are open now to {closeOur}:00 pm</p>
            <button className="btn">order</button>
        </div>
    )
}

