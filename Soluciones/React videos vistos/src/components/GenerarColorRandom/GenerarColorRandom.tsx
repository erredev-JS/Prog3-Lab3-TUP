import { useState } from "react"


export const GenerarColorRandom = () => {

    const [colorGenerated, setColorGenerated] = useState("#ffffff")

    const changeColor = ()=>{
        const newColor = `#${Math.floor(Math.random() * 123456).toString(16)}`
        setColorGenerated(newColor)
    }


  return (
    <div style={{ display:"flex", flexDirection:"column", height:"300px", width:"300px", alignItems:"center", justifyContent:"center", textAlign:"center",  backgroundColor:`${colorGenerated}`}}>
        <h2>Generador de color random</h2>
        <button onClick={changeColor}>Cambiar Color</button>
        <h3>Color: {colorGenerated}</h3>
    </div>
  )
}
