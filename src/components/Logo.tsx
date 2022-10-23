import logo from '../assets/logoTaca.svg'

export function Logo() {
  return (
    <div className="absolute top-0 left-[50%] translate-x-[-50%] font-bold text-6xl">
      <div className="w-[350px]">
        <img src={logo} alt="" />
      </div>
    </div>
  )
}
