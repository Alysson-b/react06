import { useLocation } from "react-router-dom"

export const Resultado = () =>{

  const { state } = useLocation()
  const {nome, email, mensagem} =  state
  return(
    <>
    <h1>Resultado</h1>
    <p>Óla {nome} sua mensagem {mensagem} foi enviada com sucesso pelo email{email}.</p>

    </>
  )
}