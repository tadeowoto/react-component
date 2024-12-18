

type Props = {
  CardType : number
}

const MainBtn = ( { CardType } : Props ) => {
  
  
  const btnColor = CardType === 1 ? 'orange' : CardType === 2 ? 'cyan' : CardType === 3 ? 'dark-cyan' :'transparent-white'
  
  const btnStyle = `bg-transparent-white text-${btnColor} py-3 px-6 rounded-full hover:bg-${btnColor} hover:text-transparent-white border-2 border-${btnColor} hover:border-transparent-white`

  return (
    <a href="/">
        <button className= {btnStyle}>
            Learn More
        </button>
    </a>
  )
}

export default MainBtn