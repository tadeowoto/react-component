
type Props = {
    url: string
}

const CarIcon = ({ url }: Props) => {
  return (
    <img src={url} alt="Car icon" />
  )
}

export default CarIcon