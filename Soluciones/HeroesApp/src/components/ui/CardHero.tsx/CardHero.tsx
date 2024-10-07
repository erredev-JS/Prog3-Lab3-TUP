import { FC } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

interface ICardHero{
    hero: IHeroes
}


export const CardHero: FC<ICardHero> = ({hero}) => {
    const navigate = useNavigate()
    const handleNavigateHero = () => {
        navigate(`/hero/${hero.id}`)
    }
  return (
    <Card style={{ width: '100%' }} onClick={handleNavigateHero}>
    <Card.Img variant="top" src={`/assets/heroes/${hero.id}.jpg` }/>
    <Card.Body>
      <Card.Title>{hero.superhero}</Card.Title>
      <Card.Text>
       <p><b>Alter Ego:</b> {hero.alter_ego}</p>
       <p><b>Publicadora:</b> {hero.publisher}</p>
       <p><b>Primera aparición:</b> {hero.first_appearance}</p>
      </Card.Text>
     
    </Card.Body>
  </Card>
  )
}
