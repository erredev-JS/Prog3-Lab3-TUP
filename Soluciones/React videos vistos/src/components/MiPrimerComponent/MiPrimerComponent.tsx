import { FC } from "react"


interface IPropsMiPrimerComponent{
    text:string
    color : string
    fontSize?: number
}

export const MiPrimerComponent : FC <IPropsMiPrimerComponent> = ({text, color, fontSize}) => {
return (
    <div style={{color: `${color}`, fontSize: `${fontSize}rem`} }>
        <p>{text}</p>
        
        
        </div>
)}
