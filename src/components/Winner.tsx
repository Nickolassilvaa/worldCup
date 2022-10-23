interface Props {
  text: string
}

export function Winner({ text }: Props) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <span className="font-bold text-xl">{text}</span>
      <p className="w-[350px] h-[25px] border-b text-center text-lg"></p>
    </div>
  )
}
