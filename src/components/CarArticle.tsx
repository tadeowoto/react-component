import CardData from "../data/CardData"
import Card from "./Card"

const CarArticle = () => {
  return (
    <article className="flex p-5 box-border">
        {CardData.map((card) => (
            <Card cardType={card.id} key={card.id} titleTxt={card.title} PText={card.text} CarIconTxt={card.img} />
        ))}
    </article>
  )
}

export default CarArticle