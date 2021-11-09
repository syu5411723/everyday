import React from 'react'
import { Sec02Card } from '../../molcules/main/sec01/Sec02Card'

const cardData = [
    {
        id: 1,
        title: 'New Style',
        content1: 'カラフルなマフラーやストールが新登場',
        content2: '冬の寒さを吹き飛ばしましょう。',
        link: 'Shop New Style',
    },
    {
        id: 2,
        title: 'Christmas Cards',
        content1: '大切な人へ絵本のワンシーンのような',
        content2: 'クリスマスカードを',
        link: 'Shop Holiday Cards',
    },
    {
        id: 3,
        title: 'Double The Points',
        content1: 'ミッフィーのライトなど',
        content2: '人気インテリア商品がダブルポイント',
        link: 'Shop Double The Points',
    },
]

export const Sec02 = () => {
    return (
        <>
            <Sec02Card />
         </>
    )
}
