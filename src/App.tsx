import './App.css'
import DisplayData from './components/DisplayData'
import Search from './components/Search'
import SavedCity from './components/SavedCity'

const App :React.FC=()=> {
  return (
    <>
     <Search/>
     <DisplayData/>
     <SavedCity/>
    </>
  )
}

export default App
