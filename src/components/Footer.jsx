import Order from './Order';
import './Footer.css'
export default function(){
    const hour = new Date().getHours();
    const openOur = 7;
    const closeOur = 20;
    return (
        <>
        <footer className='footer'>
                {hour >= openOur && hour <= closeOur ?(
                    <Order closeOur={closeOur} />
                ):(
                    <p style={{color:'red'}}>We are open ulit to {openOur}:00 am</p>
                )
             }
        </footer>
        </>
    )
}
