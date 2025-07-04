

function Register() {
  return (
    <>
    <div className="bg-gray-100 rounded-md m-auto w-[340px]">
      <h1 className="text-center font-bold text pt-[25px]">Registra una cuenta</h1>
      <form className="m-[30px]" action="/action_page.php">
        <label className="text-gray-700 font-bold">Nombre</label>
        <br />
        <input className="bg-white p-[20px] rounded-md w-[280px] h-[45px] mb-[15px]" type="text"  placeholder="Nombre y Apellido"/>
        <br />
        <label className="text-gray-700 font-bold">Correo Electrónico</label>
        <br />
        <input className="bg-white p-[20px] rounded-md w-[280px] h-[45px] mb-[15px]" type="email"   placeholder="Correo"/>
        <br />
        <label className="text-gray-700 font-bold">Contraseña</label>
        <br />
        <input className="bg-white p-[20px] rounded-md w-[280px] h-[45px] mb-[15px]" type="password"   placeholder="Contraseña" />    
        <br />
        <label className="text-gray-700 font-bold">Verificar Contraseña</label>
        <br />
        <input className="bg-white p-[20px] rounded-md w-[280px] h-[45px] mb-[15px]" type="password"   placeholder="Contraseña" />
        
          <br />      
           
        <button className="bg-yellow-500 rounded-md mb-[35px] w-[280px] h-[48px]" type="submit">Registrar</button>
       
        
       

      </form>

      
    </div>
    </>
  );
}

export default Register;
