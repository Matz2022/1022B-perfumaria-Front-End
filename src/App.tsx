import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';


// Definindo o tipo para Perfumes
type PerfumeType = {
  id:number,
  nome:string,
  marca:string,
  fragrancia:string,
  volume:string,
  preco:string,
  imagem:string
}



function App() {
  const [perfumes, setPerfumes] = useState<PerfumeType[]>([])

  //useEffect(O QUe fazer, Quando Fazer)
   // useEffect para buscar perfumes
  useEffect(()=>{
    fetch("https://one022b-perfumaria.onrender.com/perfumes")
    .then(resposta=>resposta.json())
    .then(dados=>setPerfumes(dados))
  },[])


  return (
    <>  
    <header>
      <div className="cabeçalho-app">
          <ul className='menu-app'>
          <li><Link to={"/"}>Início</Link></li>
          <li><Link to={"/lista-cliente"}>Veja nossos clientes</Link></li>
          <li><Link to={"/cadastro-perfume"}>Cadastre um perfume</Link></li>
          <li> <Link to={"/cadastro-cliente"}>Cadastrar um cliente</Link></li>

          </ul>
        </div>
  </header>



      <div className="container-perfumes">
        <h2 className='perfume-lista'> Todos os nossos perfumes:</h2>
        {perfumes.map(perf=>{
          return(
            <div key={perf.id} className="perfume-item">
              <h1 className='perfume-nome'>{perf.nome}</h1>
              <img src={perf.imagem} alt="Imagem de celular" />
              <p><strong>R$</strong>{perf.preco}</p>
              <p>Volume: {perf.volume}</p>
              <p>Marca: {perf.marca}</p>
            </div>
            
            
          )
        })}
            
     
              
      </div>


    </>
  )
}

export default App