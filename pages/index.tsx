import { Layout } from '../components/design/Layout'
import { Home } from '../components/pages/Home'
import { createContext } from "react"
import Head from "next/head"

type ContextProps = {
  data: any
}

export const Data = [
  {
    text1: "News&キャンペーン",
    text2: "ストアイベント",
  },
  {
    text1: "MoNA Design Sotre 表参道",
    text2: "MoNA Design Sotre 京都",
    text3: "MoNA Design Sotre 心斎橋",
    text4: "MoNA Design at ロフト",
  },
  {
    text1: "新商品",
    text2: "ベストセラー",
    text3: "メディア掲載",
    text4: "再入荷",
  },
  {
    text1: "MoNAの歴史と理念",
    text2: "MoNAメンバーシップについて",
  },
]

export const getStaticProps = async () => {
  const data = await Data
  return { props: data }
}

export const DataContext = createContext({} as ContextProps)

const index = ({ data }) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <DataContext.Provider value={data} >
        <Home />
      </DataContext.Provider>
    </>
  )
}

export default index
