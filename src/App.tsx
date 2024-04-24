import PdfGenerator from "@components/PdfGenerator"
import ReactLogo from "./logo.svg"

function App() {
  return (
    <section className="text-center px-8 mt-20 sm:mt-32 md:mt-40">
      <div className="flex justify-center">
        <img src={ReactLogo} className="react-logo" alt="logo" />
      </div>

      <h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">
          A simple Pdf Generator 
      </h2>

      <article>
        <p className="mt-6 max-w-3xl mx-auto text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur itaque omnis cupiditate delectus, porro odio rerum possimus ad laboriosam sequi deserunt veniam vitae quaerat animi quod unde totam autem pariatur.
        </p>

        <div className="mt-6 flex items-center justify-center space-x-4 text-left">
          <PdfGenerator/>
        </div>
      </article>
    </section>
  )
}


export default App
