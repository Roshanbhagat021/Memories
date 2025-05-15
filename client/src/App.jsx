import Form from "./components/form"
import ImageUploader from "./components/ImageUploader"
import Memories from "./components/Memories"
// import bgImage from "./assets"

function App() {

  return (
   <div className="bg-[url('./assets/bg.png')] bg-cover bg-center ">
         <header className=" bg-white mb-3 max-w-[880px] m-auto text-center text-4xl shadow-xl rounded-xl py-2 text-blue-400">Memories</header>
         <main className="max-w-[880px] m-auto ">
          <div className="flex gap-14 ">
              <Memories/>
              <Form/>
          </div>
         </main>
         <ImageUploader/>

    </div>
  )
}

export default App
