
type Props = {
    txt: string
}

const MainText = ({ txt }: Props) => {
  return (
    <p className="text-transparent-white font-lexend mt-5 text-[18px]">{txt}</p>
  )
}

export default MainText