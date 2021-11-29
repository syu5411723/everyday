import { Layout } from '../components/design/Layout'
import { Home } from '../components/pages/Home'
import { createContext } from "react"
import Head from "next/head"

type ContextProps = {
  data: any
}

const Data = [{}]

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
