import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'

function App() {

  return (
    <>
      <div className='lexen p-3 lg:p-5'>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </>
  )
}

export default App
