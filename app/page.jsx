import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi'

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";



const Home = () =>{
  return(
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Front End Developer</span>
          <h1 className="h1">
            Hola, mi nombre es <br /> <span className="text-cyan-600">Diego Del Agua</span>
          </h1>
          <br /><p className="max-w-[500px] mb-9 text-white/80">Desarrollador web en formación, listo para enfrentar nuevos desafíos.
          Estoy buscando mi primera oportunidad laboral para aplicar mis conocimientos y seguir aprendiendo. En este porfolio encontrarás
          mis proyectos recientes y cómo puedes contactarme para colaborar en futuras oportunidades. Desde ya muchas gracias!</p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
              size="lg"
              variant="outline"
              className="uppercase flex items-center gap-2 text-cyan-600 hover:text-black"
            >
              <a href="assets\CV.pdf" download="Curriculum">Descargar CV</a>
              <FiDownload className="text-xl"/>
            </Button>
            <div className="mb-8 xl:mb-0 ">
              <Social
                containerStyles="flex gap-8  text-cyan-600 rounded rounded-full"
                iconStyles="w-10 h-10 border border-cyan-600 rounded rounded-full flex justify-center
                items-center text-cyan-600 text-base hover:bg-cyan-600 hover:text-primary hover:transition-all duration-500"
                />
            </div>
          </div>
        </div>
        {/* foto */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo/>
        </div>
        </div>
      </div>
      
    </section>
  )
}

export default Home;