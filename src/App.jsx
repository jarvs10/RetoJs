import { useState, useEffect } from 'react';
import Header from './components/Header'
import Listar from './components/Listar'
import {Link, Outlet} from 'react-router-dom'
import Batman1 from './pages/Batman1';

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
            console.log('clikeando 1');
            <Link to={Batman1}/>
             
        } else if (saveLink === 'tt0468569'){
            console.log('clikeando 2');
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

            <Outlet/>
        </>
    )
}

export default App
