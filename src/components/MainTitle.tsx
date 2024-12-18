

type Props = {
    txt: string
}

const MainTitle = ({ txt }: Props) => {
  return (
    <h1 className="text-[60px] text-transparent-white font-bold mb-4 font-big mt-2">{txt}</h1>
  )
}

export default MainTitle