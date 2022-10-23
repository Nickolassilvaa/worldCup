import logo from '../assets/logoTaca.svg'

export function NotFound() {
  return (
    <div className="w-full min-h-[100vh] p-8 flex items-center justify-center bg-gradient-to-r from-[#8a0a2d] to-[#310111]">
      <div className="w-96">
        <img src={logo} alt="" />
      </div>
    </div>
  )
}
