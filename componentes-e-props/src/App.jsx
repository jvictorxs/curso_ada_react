import MeuComponente from "./assets/componentes/MeuComponente"

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <MeuComponente />
      <Button conteudo="me clique" />
      <Button conteudo="depois aqui" />
      <Button conteudo="por ultimo aqui" />
    </div>
  )
}
function Button(props) {
  return <button>{props.conteudo}</button>
}

export default App
