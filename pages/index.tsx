import { Layout } from '../components/design/Layout'
import { Home } from '../components/pages/Home'

const Data = [{}]

export const getStaticProps = async () => {
  const data = await Data
  return { props:data }
}

const index = ({data}) => {
  return (
    <>
      <Home />
      </>
  )
}

export default index
