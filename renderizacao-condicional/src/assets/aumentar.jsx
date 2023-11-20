import { useState } from "react"

export default function Contador() {
  const [contador, setContador] = useState(0)

  function aumentar() {
    setContador(contador + 1)
  }
  function diminuir() {
    setContador(contador - 1)
  }

  if (contador >= 6) {
    return (
      <div>
        <h1>diminua o valor</h1>
        <h1>Meu Contador: {contador}</h1>
        <button onClick={aumentar}>aumentar</button>
        <button onClick={diminuir}>diminuir</button>
      </div>
    )
  } else if (contador <= 4) {
    return (
      <div>
        <h1>aumente o valor</h1>
        <h1>Meu Contador: {contador}</h1>
        <button onClick={aumentar}>aumentar</button>
        <button onClick={diminuir}>diminuir</button>
      </div>
    )
  } else
    return (
      <div>
        <h1>valor ideal</h1>
        <h1>Meu Contador: {contador}</h1>
        <button onClick={aumentar}>aumentar</button>
        <button onClick={diminuir}>diminuir</button>
      </div>
    )
}
