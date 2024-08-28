import './App.css'

export default function(){
    const hour = new Date().getHours();
    const openOur = 7;
    const closeOur = 22;

    return (
        <>
        <footer className='footer'>

            {hour >= openOur && hour <= closeOur
            ? <p style={{color:'green'}}>We are open now</p>
            : <p style={{color:'red'}}>We are close now</p>}
        <span>{new Date().toLocaleTimeString()}</span>
        </footer>

        </>
    )
}
