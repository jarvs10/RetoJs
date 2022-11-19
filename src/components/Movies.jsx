import React from 'react'

const Movies = ({Title, Year, Poster, imdbID, setSaveLink}) => {

    const handleLink = () => {
        setSaveLink(imdbID);
    }

    return (
        <>
            <div className='flex justify-center items-center'>
                
                <ul className='mt-4 p-2 mb-10 text-center'>
                    <li className='text-2xl font-black'>{Title}</li>
                    <li className='text-1xl font-bold mb-2'>{Year}</li>
                    <li>
                        <img
                            className='mx-auto'
                            width='400'
                            src={Poster} 
                        />
                    </li>
                    <input 
                        className='mt-2 font-bold uppercase py-2 px-5 bg-indigo-600 hover:bg-indigo-800 text-white cursor-pointer'
                        type="button" 
                        value="Leer Mas"
                        onClick={handleLink}
                    />
                </ul>
            </div>
        </>
        
    )
}

export default Movies