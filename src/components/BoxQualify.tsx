interface Props {
  firstText: string
  secondText?: string
  style: string
}

export function BoxQualify({ firstText, secondText, style }: Props) {
  return (
    <div className={style}>
      <ul className="flex flex-col gap-2">
        <li>{firstText}</li>
        <li>{secondText}</li>
      </ul>
    </div>
  )
}
