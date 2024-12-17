import MainBtn from "./MainBtn"
import MainText from "./MainText"
import MainTitle from "./MainTitle"
import CarIcon from "./CarIcon"


type Props = {
    titleTxt: string,
    PText: string,
    CarIconTxt: string,
    cardType: number
}

const Card = ({ cardType, titleTxt, PText, CarIconTxt}: Props) => {
  
    
    const color = cardType === 1 ? 'bg-orange' : cardType === 2 ? 'bg-cyan' : 'bg-dark-cyan'

    const cardStyle = `flex flex-col gap-4 p-5 box-border ${color}`

    return (
    <article className={cardStyle} >
        <CarIcon url={CarIconTxt} />
        <MainTitle txt={titleTxt} />
        <MainText txt={PText} />
        <MainBtn />
    </article>
  )
}

export default Card