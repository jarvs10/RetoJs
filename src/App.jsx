import { useState, useEffect } from 'react';
import Header from './components/Header'
import Listar from './components/Listar'

function App() {

    const url = `https://fake-movie-database-api.herokuapp.com/api?s=Batman`

    const [infoBatman, setInfoBatman] = useState([]);

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setInfoBatman(responseJson.Search);
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
            <Header />
            <Listar 
               infoBatman={infoBatman} 
            />
        </>
    )
}

export default App
