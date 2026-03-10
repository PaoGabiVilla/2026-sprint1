import fondo from "../assets/informatica.jpg"

const Main = () => {

    const servicios = ["Diseño Web", "Desarrollo", "Marketing Digital"]

  return (

    <main
      className="flex-grow flex flex-col items-center justify-center gap-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${fondo})` }}
    >

        <div className="bg-black/50 p-10 rounded text-white">

            <section className="text-center">

                <h1 className="text-4xl font-bold mb-4">
                    Creamos experiencias digitales
                </h1>

                <p className="text-lg mb-6">
                    Descubre nuestros productos y servicios exclusivos.
                </p>

            </section>
            
            <section className="text-center">

                <h2 className="text-2xl font-semibold mb-4">
                    Servicios
                </h2>

                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                    {servicios.map((servicio, index) => (
                        <div
                            key={index}
                            className="bg-white text-black p-6 rounded-lg shadow-lg w-52 hover:scale-105 transition"
                        >
                            <h3 className="font-semibold text-lg">{servicio}</h3>
                        </div>
                    ))}
                </div>

            </section>

        </div>

    </main>
    
  )
}

export default Main