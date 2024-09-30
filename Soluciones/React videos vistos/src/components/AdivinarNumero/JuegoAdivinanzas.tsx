import { useState } from "react";

export const JuegoAdivinanzas = () => {

    const [ranNum, setRanNum] = useState<number>(Math.floor(Math.random() * 101))
    

    
    const[userTryNum, setUserTryNum] = useState("")
    const[mensaje, setMensaje] = useState("")

    const handleTry = (e:React.FormEvent)=>{
        
        let tryNum = parseInt(userTryNum)
        
        if(tryNum < ranNum){
            setMensaje("El numero a adivinar es más grande")
        }else if(tryNum > ranNum){
            setMensaje("El numero a adivinar es más pequeño")
        }else{
            setMensaje("GANASTE!!!")
        }
        e.preventDefault()
    }

    const resetGame = ()=>{
        setRanNum(Math.floor(Math.random() * 101))
    }


  return (
    <div>
        <h1>Juego adivinanzas</h1>
        <form action="" onSubmit={handleTry}>

            <input type="number"
            name="userTryNum"
            value={userTryNum} 
            onChange={(event) => {setUserTryNum(event.target.value)}}
            placeholder="Ingrese un valor del 1 al 100" 
            required
            />
            <button type="submit">Intentar</button>
            <button onClick={resetGame}>Reiniciar Juego</button>
        </form>

        <p>{mensaje}</p>
    </div>
  )
}