export default function(){
    const hour = new Date().getHours();
    const openOur = 7;
    const closeOur = 18;
    
    return (
        <p>
            {hour >= openOur && hour <= closeOur
             ? <p style={{color:'green'}}>We are open noW</p>
            : <p style={{color:'red'}}>We are close NoW</p>}
        </p>
    )
}