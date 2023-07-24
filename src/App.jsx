import CanvasModel from "./canvas"
import Coustomizer from "./pages/Coustomizer"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <main className="app transition-all ease-in">
        <Home />
        <Coustomizer />
        <CanvasModel />
      </main>
    </>
  )
}

export default App
