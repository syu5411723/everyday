import React from 'react'
import Head from 'next/dist/shared/lib/head'
import { Data } from '../index'

export const getStaticPaths = async () => {
    const paths = Data.map(data => data)
    params: { id: paths }
}

export const getStaticProps = async () => {
    const data = await Data.map(item => item)
    return { props: data }
}


const Post = ({ data }) => {
    return (
        <>
            <Head>
                <title></title>
            </Head>
        </>

    )
}

export default Post
