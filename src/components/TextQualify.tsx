interface Props {
  text: string
}

export function TextQualify({ text }: Props) {
  return <p className="text-center font-bold text-lg mb-2">{text}</p>
}
