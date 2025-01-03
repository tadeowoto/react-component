
type Props = {
    url: string
}

const CarIcon = ({ url }: Props) => {
  return (
    <img src={url} alt="Car icon" className="w-[60px]" />
  )
}

export default CarIcon