
const Main = () => {

    const servicios = ["Diseño Web", "Desarrollo", "Marketing Digital"]
  return (
    <main className="bg-green-100 min-h-screen flex flex-col items-center justify-center gap-10">
        
        <section className="text-center">

            <h1 className="text-4xl font-bold mb-4">
                Bienvenido a nuestra Landing Page
            </h1>

            <p className="text-lg mb-6">
                Descubre nuestros productos y servicios exclusivos.
            </p>

        </section>
            
        <section className="text-center">

                <h2 className="text-2xl font-semibold mb-4">
                    Servicios
                </h2>

                {servicios.map((servicio, index) => (
                <p key={index}>{servicio}</p>    
                )) }
                
            </section>
    </main>
    
  )
}

export default Main