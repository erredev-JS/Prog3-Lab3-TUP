import { useEffect, useState } from "react"


export const Temporizador = () => {

    const [time, setTime] = useState(0)

    const[timer, setTimer] = useState(false)

    useEffect(()=>{
        let interval = undefined
        if(timer && time > 0){

            interval = setInterval(()=>{
                setTime((prevTime)=> prevTime-1)
            }, 1000)   
        }else if(time === 0 && timer){
            setTimer(false)
        }

        return () => clearInterval(interval);
    }, [timer, time])

    const turnOnTimer = ()=>{
        if(time > 0){
            setTimer(true)
            
        }
    }
    const turnOffTimer = ()=>{
        setTimer(false)
    }


    return (
    <div style={{border:"solid", display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center", alignItems:"center", gap:"2vh"}}>
        <h2>Temporizador</h2>
        
        <input type="number" placeholder="Ingrese tiempo en segundos" value={time} onChange={(event) =>{setTime(parseInt(event.target.value))}}/>
        <div >
            <button onClick={turnOnTimer} disabled={timer || time <=0}>Activar</button>
            <button onClick={turnOffTimer} disabled={!timer} >Desactivar</button>
        </div>
        
    </div>
    )
}
