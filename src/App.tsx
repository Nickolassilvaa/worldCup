import { useCallback, useEffect, useState } from 'react'
import { nameGroup, stylesLeft, stylesRight } from './assets/Settings'
import api from './services/api'

import { FinalGroups } from './components/FinalGroups'
import { TextQualify } from './components/TextQualify'
import { BoxQualify } from './components/BoxQualify'
import { GroupList } from './components/GroupList'
import { NotFound } from './components/NotFound'
import { Winner } from './components/Winner'
import { Logo } from './components/Logo'

import './styles/global.css'

export interface IProps {
  Token?: string
  Name?: string
}

export function App() {
  const [groups, setGroups] = useState<IProps[][]>([])

  const getTeams = useCallback(async () => {
    await api
      .get('/WorldCup/GetAllTeams')
      .then((response) => {
        const apiResponse: IProps[] = response.data.Result
        const createGroup: IProps[][] = []

        const chunkSize = 4
        for (let i = 0; i < apiResponse.length; i += chunkSize) {
          const chunk = apiResponse.slice(i, i + chunkSize)
          createGroup.push(chunk)
        }

        setGroups(createGroup)
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
      {groups.length > 0 ? (
        <div className="relative min-w-[1920px] w-full min-h-[100vh] p-8 flex items-center justify-between gap-4 text-zinc-100 bg-gradient-to-r from-[#8a0a2d] to-[#310111]">
          <Logo />

          <GroupList
            groups={groups.slice(0, 4)}
            nameGroup={nameGroup.slice(0, 4)}
            style={stylesLeft[0]}
          />

          <div className="h-full flex flex-col items-center justify-center">
            <TextQualify text="Oitavas" />
            <div className="flex flex-col gap-10">
              <BoxQualify
                firstText="Grupo 1A"
                secondText="Grupo 2B"
                style={stylesLeft[1]}
              />
              <BoxQualify
                firstText="Grupo 1C"
                secondText="Grupo 2D"
                style={stylesLeft[1]}
              />
              <BoxQualify
                firstText="Grupo 1E"
                secondText="Grupo 2F"
                style={stylesLeft[1]}
              />
              <BoxQualify
                firstText="Grupo 1G"
                secondText="Grupo 2H"
                style={stylesLeft[1]}
              />
            </div>
          </div>

          <div className="h-full flex flex-col items-center justify-center">
            <TextQualify text="Quartas" />
            <div className="flex flex-col gap-40">
              <BoxQualify
                firstText="Grupo 1"
                secondText="Grupo 2"
                style={stylesLeft[1]}
              />
              <BoxQualify
                firstText="Grupo 3"
                secondText="Grupo 4"
                style={stylesLeft[1]}
              />
            </div>
          </div>

          <div className="h-full flex-1 flex items-center justify-between">
            <div>
              <TextQualify text="Semifinais" />
              <BoxQualify
                firstText="Semifinalista 1"
                secondText="Semifinalista 2"
                style={stylesLeft[1]}
              />
            </div>

            <FinalGroups />

            <div>
              <TextQualify text="Semifinais" />
              <BoxQualify
                firstText="Semifinalista 3"
                secondText="Semifinalista 4"
                style={stylesRight[1]}
              />
            </div>
          </div>

          <div className="h-full flex flex-col items-center justify-center">
            <TextQualify text="Quartas" />
            <div className="flex flex-col gap-40">
              <BoxQualify
                firstText="Grupo 5"
                secondText="Grupo 6"
                style={stylesRight[1]}
              />
              <BoxQualify
                firstText="Grupo 7"
                secondText="Grupo 8"
                style={stylesRight[1]}
              />
            </div>
          </div>

          <div className="h-full flex flex-col items-center justify-center">
            <TextQualify text="Oitavas" />
            <div className="flex flex-col gap-10">
              <BoxQualify
                firstText="Grupo 1B"
                secondText="Grupo 2A"
                style={stylesRight[1]}
              />
              <BoxQualify
                firstText="Grupo 1D"
                secondText="Grupo 2C"
                style={stylesRight[1]}
              />
              <BoxQualify
                firstText="Grupo 1F"
                secondText="Grupo 2E"
                style={stylesRight[1]}
              />
              <BoxQualify
                firstText="Grupo 1H"
                secondText="Grupo 2G"
                style={stylesRight[1]}
              />
            </div>
          </div>

          <GroupList
            groups={groups.slice(4)}
            nameGroup={nameGroup.slice(4)}
            style={stylesRight[0]}
          />

          <div className="absolute bottom-28 left-[50%] translate-x-[-50%] flex flex-col items-center justify-center gap-8">
            <Winner text="Campeão" />
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  )
}
