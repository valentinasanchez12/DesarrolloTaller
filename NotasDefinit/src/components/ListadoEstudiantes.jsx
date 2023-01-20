import DatoEstudiantes from "./DatoEstudiantes"

function ListadoEstudiantes() {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado estsudiantes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        revisa estudiante
      </p>
    
    <DatoEstudiantes/> 
    <DatoEstudiantes/> 
    <DatoEstudiantes/> 
    
  </div>
  )
}

export default ListadoEstudiantes