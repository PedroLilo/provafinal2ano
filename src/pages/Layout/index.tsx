import { Outlet } from 'react-router-dom'
import { Main } from './styles'
import { CompHeader } from '../../components'

export const Layout = () => {
  return (
    <>
      <CompHeader />
      <Main>
        <Outlet />
      </Main>
    </>
  )
}