import { useCallback, useEffect, useState } from 'react'
import api from './services/api'
import './styles/global.css'

interface IProps {
  Token?: string
  Name?: string
}

export function App() {
  const [listTeam, setListTeam] = useState<IProps[]>([])
  const [groups, setGroups] = useState<IProps[][]>([])

  const nameGroup = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

  const getTeams = useCallback(async () => {
    await api
      .get('/WorldCup/GetAllTeams')
      .then((response) => {
        const apiResponse: IProps[] = response.data.Result
        const createGroup: any[] = []

        const chunkSize = 4
        for (let i = 0; i < apiResponse.length; i += chunkSize) {
          const chunk = apiResponse.slice(i, i + chunkSize)
          createGroup.push(chunk)
        }

        setGroups(createGroup)
        setListTeam(apiResponse)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  useEffect(() => {
    getTeams()
  }, [getTeams])

  return (
    <>
      {listTeam.length > 0 ? (
        <div className="px-8 flex items-center justify-center">
          {groups.map((item, key) => {
            console.log(key, item)
            return (
              <div key={key} className="">
                <p>Grupo {nameGroup[key]}</p>
                <div className="w-[200px]">
                  {item.map((itemId) => {
                    return (
                      <ul key={itemId.Token}>
                        <li className="border">{itemId.Name}</li>
                      </ul>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <p>Nenhum time encontrado.</p>
      )}
    </>
  )
}
