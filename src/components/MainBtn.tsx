
type Props = {
    txt: string
}

const MainBtn = ({ txt }: Props) => {
  return (
    <a href="/">
        <button>{txt}</button>
    </a>
  )
}

export default MainBtn