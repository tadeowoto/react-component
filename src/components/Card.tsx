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

    const cardStyle = `flex flex-col gap-4 p-5 box-border ${color} h-[600px] w-[500px]`

    return (
    <article className={cardStyle} >
        <div className="flex flex-col gap-4 h-4/5">
            <CarIcon url={CarIconTxt} />
            <MainTitle txt={titleTxt} />
            <MainText txt={PText} />
        </div>
        <div >
            <MainBtn CardType={cardType} />
        </div>
    </article>
  )
}

export default Card