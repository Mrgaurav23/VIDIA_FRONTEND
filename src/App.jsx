import { Outlet } from "react-router-dom"
import { Header } from "./component/index"

function App() {

  return (
    <div className="min-h-screen">
      <Header />
      < Outlet />
    </div>
  )
}

export default App