import DatoEstudiantes from './components/DatoEstudiantes'
import FormularioEstudiante from './components/FormularioEstudiante'
import Header from './components/Header'

function App() {
  
  return (
<div className="container mx-auto mt-20">
        
        <Header/>
        <div className="mt-12 md:flex"> 
        
          <FormularioEstudiante/>
          <DatoEstudiantes/>

        </div>
      </div>
  )
}

export default App
