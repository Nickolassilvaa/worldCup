import { X } from 'phosphor-react'
import { useCallback, useEffect, useState } from 'react'
import api from './services/api'
import './styles/global.css'
import logo from './assets/logoTaca.svg'

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
        <div className="relative min-w-[1920px] w-full min-h-[100vh] p-8 flex items-center justify-between gap-4 text-zinc-100 bg-gradient-to-r from-[#8a0a2d] to-[#310111]">
          <div className="absolute top-0 left-[50%] translate-x-[-50%] font-bold text-6xl">
            <div className="w-[350px]">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {groups.slice(0, 4).map((item, key) => {
              return (
                <div
                  key={key}
                  className="border w-[200px] h-[200px] backdrop-blur-3xl bg-[#310111]/30 p-4 rounded-lg flex flex-col gap-2"
                >
                  <p className="text-center font-bold border-b">
                    Grupo {nameGroup.slice(0, 4)[key]}
                  </p>
                  <ul className="flex flex-col gap-2 items-center justify-center">
                    {item.map((itemId) => {
                      return <li key={itemId.Token}>{itemId.Name}</li>
                    })}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="h-full flex flex-col items-center justify-center">
            <p className="text-center font-bold text-lg mb-2">Oitavas</p>
            <div className="flex flex-col gap-10">
              <div className="border w-[150px] backdrop-blur-3xl bg-[#310111]/30 p-4 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li>Grupo 1A</li>
                  <li>Grupo 2B</li>
                </ul>
              </div>
              <div className="border w-[150px] backdrop-blur-3xl bg-[#310111]/30 p-4 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li>Grupo 1C</li>
                  <li>Grupo 2D</li>
                </ul>
              </div>
              <div className="border w-[150px] backdrop-blur-3xl bg-[#310111]/30 p-4 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li>Grupo 1E</li>
                  <li>Grupo 2F</li>
                </ul>
              </div>
              <div className="border w-[150px] backdrop-blur-3xl bg-[#310111]/30 p-4 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li>Grupo 1G</li>
                  <li>Grupo 2H</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col items-center justify-center">
            <p className="text-center font-bold text-lg mb-2">Quartas</p>
            <div className="flex flex-col gap-40">
              <div className="border w-[150px] backdrop-blur-3xl bg-[#310111]/30 p-4 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li>Grupo 1</li>
                  <li>Grupo 2</li>
                </ul>
              </div>
              <div className="border w-[150px] backdrop-blur-3xl bg-[#310111]/30 p-4 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li>Grupo 3</li>
                  <li>Grupo 4</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-full flex-1 flex items-center justify-between">
            <div>
              <p className="text-center font-bold text-lg mb-2">Semifinais</p>
              <div className="border w-[150px] backdrop-blur-3xl bg-[#310111]/30 p-4 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li>Semifinalista 1</li>
                  <li>Semifinalista 2</li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-center font-bold text-2xl mb-2">Finalistas</p>
              <div className="border-b-2 p-4">
                <ul className="h-full w-full flex items-center justify-center gap-4 text-xl">
                  <li>Finalista 1</li>
                  <li>
                    <X size={22} />
                  </li>
                  <li>Finalista 2</li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-center font-bold text-lg mb-2">Semifinais</p>
              <div className="border w-[150px] backdrop-blur-3xl bg-[#8a0a2d]/30 p-4 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li>Semifinalista 3</li>
                  <li>Semifinalista 4</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col items-center justify-center">
            <p className="text-center font-bold text-lg mb-2">Quartas</p>
            <div className="flex flex-col gap-40">
              <div className="border w-[150px] backdrop-blur-3xl bg-[#8a0a2d]/30 p-4 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li>Grupo 5</li>
                  <li>Grupo 6</li>
                </ul>
              </div>
              <div className="border w-[150px] backdrop-blur-3xl bg-[#8a0a2d]/30 p-4 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li>Grupo 7</li>
                  <li>Grupo 8</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col items-center justify-center">
            <p className="text-center font-bold text-lg mb-2">Oitavas</p>
            <div className="flex flex-col gap-10">
              <div className="border w-[150px] backdrop-blur-3xl bg-[#8a0a2d]/30 p-4 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li>Grupo 1B</li>
                  <li>Grupo 2A</li>
                </ul>
              </div>
              <div className="border w-[150px] backdrop-blur-3xl bg-[#8a0a2d]/30 p-4 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li>Grupo 1D</li>
                  <li>Grupo 2C</li>
                </ul>
              </div>
              <div className="border w-[150px] backdrop-blur-3xl bg-[#8a0a2d]/30 p-4 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li>Grupo 1F</li>
                  <li>Grupo 2E</li>
                </ul>
              </div>
              <div className="border w-[150px] backdrop-blur-3xl bg-[#8a0a2d]/30 p-4 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li>Grupo 1H</li>
                  <li>Grupo 2G</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {groups.slice(4).map((item, key) => {
              return (
                <div
                  key={key}
                  className="border w-[200px] backdrop-blur-3xl bg-[#8a0a2d]/30 p-4 rounded-lg flex flex-col gap-2"
                >
                  <p className="text-center font-bold border-b">
                    Grupo {nameGroup.slice(4)[key]}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {item.map((itemId) => {
                      return (
                        <li key={itemId.Token} className="">
                          {itemId.Name}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="absolute bottom-28 left-[50%] translate-x-[-50%] flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col gap-4 items-center justify-center">
              <span className="font-bold text-xl">Campeão</span>
              <p className="w-[350px] h-[25px] border-b text-center text-lg"></p>
            </div>
          </div>
        </div>
      ) : (
        <p>Nenhum time encontrado.</p>
      )}
    </>
  )
}
