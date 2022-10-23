import { IProps } from '../App'

interface Props {
  groups: IProps[][]
  nameGroup: string[]
  style: string
}

export function GroupList({ groups, nameGroup, style }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {groups.map((item, key) => {
        return (
          <div key={key} className={style}>
            <p className="text-center font-bold border-b">
              Grupo {nameGroup[key]}
            </p>
            <ul className="flex flex-col gap-2">
              {item.map((itemId) => {
                return <li key={itemId.Token}>{itemId.Name}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
