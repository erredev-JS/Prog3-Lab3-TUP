import { FC } from "react"
import { Card } from "react-bootstrap"

interface IGift{
    urlGift: string
    title: string
}


interface IPropsCardGift{
    gift: IGift
}

export const CardGift: FC<IPropsCardGift> = ({gift}) => {
  return (
    <div>

<Card style={{ width: '100%', height: '400px' }}>
      <Card.Img variant="top" src={gift.urlGift} />
      <Card.Body>
        <Card.Title>{gift.title}</Card.Title>
      </Card.Body>
    </Card>
    </div>
  )
}
