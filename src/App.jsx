import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './components/MiApi'

function App() {

  return (
    <>
      <header>
        <h1>Adopta un gatito</h1>
        <p>¡Ayudanos a encontrar un hogar para estos lindos gatitos!</p>
      </header>
      <main>
        <MiApi/>
      </main>
      <footer>Datos obtenidos desde API Huachitos : <a href="https://huachitos.cl/docs">https://huachitos.cl/docs</a> </footer>
    </>
  )
}

export default App
