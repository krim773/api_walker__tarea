import React, {useState, useEffect} from 'react'
import axios from 'axios';



const Home = () => {

    const [categorias, setCategorias] = useState([]);

    const [idItem, setIdItem] = useState([]);

    const [error, setError] = useState(Object)
    

    useEffect(() => {
        axios.get('https://swapi.dev/api/')
        .then(res => {
            setCategorias(Object.keys(res.data))
        }).catch(err =>{
            setError(err)
            setIdItem([])})
    }, []);

    const obtenerValor = (e) =>{

        if(error.message){
            setError('')
        }

        e.preventDefault();
        // primer elemento del formulario
        let category = e.target[0].value
        // se refiere al segundo elemento del formulario
        let id = e.target[1].value
        let url = `https://swapi.dev/api/${category}/${id}`
        axios.get(url)
        .then(res => {
            setIdItem(Object.entries(res.data))
        })
        .catch(err => {
            setError(err)
            setIdItem([])
        })
    }

    return (
        <div>
            <form onSubmit={ obtenerValor }>
                <select>
                    {
                        categorias.map((category, index) => (
                            <option key={index}>{category}</option>
                        ))
                    }
                </select>
                <label htmlFor='id'>Id</label>
                <input name='id' type='Number'></input>
                <button type='submit' >Search</button>
            </form>
            <div>
      {/* seguidamente ejecutare el ternario para para renderizar los datos obtenidos o el rechazo de los datos */}
                {
                    idItem.length === 0 ?
                        null
                    :
                    <div>
                        <h1>{idItem[0][1]}</h1>
                        <p>{idItem[1][0]}: {idItem[1][1]}</p>
                        <p>{idItem[2][0]}: {idItem[2][1]}</p>
                        <p>{idItem[3][0]}: {idItem[3][1]}</p>
                        <p>{idItem[4][0]}: {idItem[4][1]}</p>
                    </div>
                }
            </div>
            <div>
                {
                    error.message ?
                        <>
                            <h2>Estos no son los droides que estas buscando</h2>
                        </>
                    :
                    null
                }
            </div>
        </div>

     )
}

export default Home