import React from 'react'
import Head from 'next/dist/shared/lib/head'
import { Data } from '../index'

export const getStaticPaths = async () => {
    const paths = Data.map(data => data)
    params: {id:paths}
}


const Post = () => {
    return (
        <Head>
            <title></title>
        </Head>

    )
}

export default Post
