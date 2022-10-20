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
        <div className="flex flex-col gap-5 w-full h-[100vh] items-start justify-center px-4">
          {groups.map((item, key) => {
            console.log(item)
            return (
              <div className="p-8 border w-[200px]" key={key}>
                <ul>Grupo {key + 1}</ul>
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

// ;<div className="groups">
//   {groups.map((item, key) => {
//     return (
//       <>
//         <li>Grupo {key + 1}</li>
//         {item.find((item, keyItem) => {
//           if (keyItem + 1 === key + 1) {
//             return item.Name
//           } else {
//             return false
//           }
//         })}
//       </>
//     )
//   })}
// </div>
