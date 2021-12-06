import { createContext } from 'react'
import Head from 'next/dist/shared/lib/head'
import { Data } from '../index'
import Detail from '../../components/pages/Detail'

type ContextProps = {
    data: any
}

export const getStaticPaths = async () => {
    const paths = Data.map(data => data)
    params: { id: paths }
}

export const getStaticProps = async () => {
    const data = await Data.map(item => item)
    return { props: data }
}


export const DetailContext = createContext({} as ContextProps)

const Post = ({ data }) => {
    return (
        <>
            <Head>
                <title></title>
            </Head>
            <DetailContext.Provider value={data}>
                <Detail />
            </DetailContext.Provider>
        </>
    )
}

export default Post
