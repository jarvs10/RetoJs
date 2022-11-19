import { useState, useEffect } from 'react';
import Header from './components/Header'
import Listar from './components/Listar'

function App() {

    const url = `https://fake-movie-database-api.herokuapp.com/api?s=Batman`

    const [infoBatman, setInfoBatman] = useState([]);

    const [saveLink, setSaveLink] = useState('');

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setInfoBatman(responseJson.Search);
    }

    useEffect(() => {
        if(saveLink === 'tt0096895'){
            console.log('clickeando img 1');
        }
    }, [saveLink])

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
            <Header />
            <Listar
                infoBatman={infoBatman}
                setSaveLink={setSaveLink}
            />
        </>
    )
}

export default App
