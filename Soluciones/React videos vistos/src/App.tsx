//import { useState } from "react"
//import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { JuegoAdivinanzas } from "./components/AdivinarNumero/JuegoAdivinanzas"
import { AppProduct } from "./components/AppProduct/AppProduct"
import { GenerarColorRandom } from "./components/GenerarColorRandom/GenerarColorRandom"
import { Temporizador } from "./components/Temporizador/Temporizador"
//import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent"
//import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
//import { FormComponent } from "./components/FormComponent/FormComponent"
//import { AppProduct } from "./components/AppProduct/AppProduct"

export const App = () => {

//    const [enableCounter, setEnableCounter] = useState(false)

    return (

        <div style={{display: "flex", flexDirection: "column", gap: "2vh"}}>

        {/*         
        <ComponentCounter/>

        <ComponentUseEffect/> 

        <FormComponent /> 

    <JuegoAdivinanzas/>

        <GenerarColorRandom/>

        <Temporizador/>


        */}

        <AppProduct/>

        
        </div>

)
}
