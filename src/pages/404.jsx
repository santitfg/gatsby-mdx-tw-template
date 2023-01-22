import * as React from "react"
import { Link } from "gatsby"
import '../styles/global.css'

const NotFoundPage = () => {
  return (
    <main className="max-w-[75%] mx-auto text-justify">
    <h1 >No se Ha encontrado la pagina</h1>
      <p >
trata de volver al inicio
si clickeastes una img 
        <br />
        <Link to="/">volver al inicio</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
