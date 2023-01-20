import { useState, useEffect} from "react";

function FormularioEstudiante() {

    const [nombre, setNombre] = useState('');
    const [programa, setPrograma] = useState('');
    const [direccion, setDireccion] = useState('');
    const [email, setEmail] = useState('');


  return (
   
    <div className="md:w-1/2 lg:w-2/5 "> 
    <h2 className="font-black text-3xl text-center uppercase text-green-900">
      Datos Estudiantes
    </h2>
    

    <form className="bg-gray-100 shadow-md rounded-lg py-10 px-5 mb-10 ">
      <div className="mb-5">
        <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold "> Nombre Estudiante: </label>
        <input id="nombre" type="text" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" placeholder = "Nombre estudiante:" value={nombre} onChange={(e)=> setNombre (e.target.value)}
        />

      </div>

      <div className="mb-5">
        <label htmlFor="programa" className="block text-gray-700 uppercase font-bold ">programa: </label>
        <input id="programa" type="text" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" placeholder = "programa que pertenece:" 
        value={programa} onChange={(e)=> setPrograma (e.target.value)}/>
      </div>

      <div className="mb-5">
        <label htmlFor="direccion" className="block text-gray-700 uppercase font-bold ">direccion: </label>
        <input id="direccion" type="text" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" placeholder = "direccion de residencia:"
        value={direccion} onChange={(e)=> setDireccion (e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-gray-700 uppercase font-bold ">correo electronico: </label>
        <input id="email" type="email" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" placeholder = "corrreo electronico:" value={email} onChange={(e)=> setEmail (e.target.value)}/>
      </div>

      <div className="mb-5">
        <label htmlFor="materia1" className="block text-gray-700 uppercase font-bold "> electiva II </label>
        <input id="materia1" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" placeholder = "agregar notas:"/>
      </div>

      <div className="mb-5">
        <label htmlFor="materia2" className="block text-gray-700 uppercase font-bold "> mineria de datos </label>
        <input id="materia2" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" placeholder = "agregar notas:"/>
      </div>

      <div className="mb-5">
        <label htmlFor="materia2" className="block text-gray-700 uppercase font-bold "> logica de programacion </label>
        <input id="materia3" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" placeholder = "agregar notas:"/>
      </div>

      <input type="submit" value="agregar estudiante" className="bg-green-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors" />

     </form>

  </div> 

  )
}

export default FormularioEstudiante