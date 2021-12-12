import React from 'react'
import { Footer } from '../organisms/footer/Footer'
import { Sec01 } from '../organisms/main/Sec01'
import { Sec02 } from '../organisms/main/Sec02'
import { Sec03 } from '../organisms/main/Sec03'
import { Sec04 } from '../organisms/main/Sec04'
import { Sec05 } from '../organisms/main/Sec05'
import { Sec06 } from '../organisms/main/Sec06'
import { Sec07 } from '../organisms/main/Sec07'

export const Main = () => {
    return (
        <>
            <Sec01 />
            <Sec02 />
            <Sec03 />
            <Sec04 />
            <Sec05 />
            <Sec06 />
            <Sec07 />
            <Footer />
        </>
    )
}
