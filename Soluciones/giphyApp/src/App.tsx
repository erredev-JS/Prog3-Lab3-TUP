import { useState } from "react"
import { GiftList } from "./components/GiftList/GiftList"
import { NavBar } from "./components/ui/NavBar/NavBar"
import { store } from "./redux/store/store"
import { Provider } from "react-redux"

interface IGift{
  urlGift: string
  title: string
}

function App() {
  const [gift, setGift] = useState<IGift[]>([])
  return (
    <Provider store = {store}>
     <NavBar setGift = {setGift}/>
     <GiftList gift= {gift}/>
    </Provider>
  )
}

export default App
