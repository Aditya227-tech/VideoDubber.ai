import Navbar from '@/components/Navbar'
import MyHome from '../components/TableSelection'
const Home = () => {
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='p-20'>
      <MyHome/>
    </div>
    </div>
  )
}

export default Home
