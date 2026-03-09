import React,{ useState } from 'react'

const Header = () => {

  const menu=["Inicio", "Servicios", "Contacto"]

  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <header className="bg-gray-900 text-white p-4">
        
      <nav className="flex justify-between items-center">
            
        <div className="text-xl font-bold">
          Logo
        </div>

        <i 
          className="bi bi-list text-2xl cursor-pointer"
          onClick={() => setMenuAbierto(!menuAbierto)}
        ></i>

      </nav>

      {menuAbierto && (
        <ul className="fixed top-20 right-4 flex gap-6 bg-gray-800 p-4 rounded-lg">
          {menu.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      )}

    </header>
  ) 
}

export default Header