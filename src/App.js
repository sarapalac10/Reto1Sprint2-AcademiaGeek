import './App.css';
import {url} from './helpers/url'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { DevText, DisGrid, ImgCard, Item1, Item2, NameText, Point, PtMted } from './StyledComponent';

function App() {

  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");

  const peticionGet= async() => {
    await axios.get(url)
    .then(response => {
      console.log(response.data);    
      setUsuarios(response.data);
      setTablaUsuarios(response.data);

    }).catch(error => {
      console.log(error)
    })
  }

  const handleChange = (e) =>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  
  const filtrar=(terminoBusqueda)=> {
    var resultadosBusqueda=tablaUsuarios.filter((elemento)=> {
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.others.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))
        return elemento;
    });
    setUsuarios(resultadosBusqueda);
  }

  useEffect(() => {
    peticionGet();
  }, [])

  return (
    <div className="App">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Search technology..."
          onChange={handleChange}
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>

       {
         usuarios && usuarios.map(usuario=> {

          return(
            console.log(usuario.others),

            <DisGrid key={usuario.id}>
              <div>
                  <ImgCard className='imgCard' src={usuario.image}/> 
              </div>

              <Item1>
                  <div>
                      <NameText>{usuario.name}</NameText> 
                      <DevText>{usuario.dev}</DevText>
                      <PtMted>{usuario.day}</PtMted><Point>.</Point><PtMted>{usuario.time}</PtMted><Point>.</Point><PtMted>{usuario.site}</PtMted>
                  </div>
              </Item1>

              <Item2 >
                {
                    usuario.others.map((other,index) => {
                        return (
                            <div key={index} className='prueba'>{other}</div>
                        )
                    })
                }

              </Item2> 

              </DisGrid>   
          )
         }
)
}

</div>  // cierre del div className=App

);
}

export default App;