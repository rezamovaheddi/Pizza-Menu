import './App.css'

export default function(){
    const hour = new Date().getHours();
    const openOur = 7;
    const closeOur = 22;
    return (
        <>
        <footer className='footer'>
            <div className='order'>
                {hour >= openOur && hour <= closeOur
                ? <p style={{color:'green'}}>We are open now to {closeOur}:00 pm</p>
                : <p style={{color:'red'}}>We are close now We open at {closeOur}:00 am</p>}
                <span>{new Date().toLocaleTimeString()}</span>
                <button className='btn'>ORDER</button>
            </div>
        </footer>

        </>
    )
}
