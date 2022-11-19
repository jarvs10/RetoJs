import React from 'react'
import Movies from './Movies';

const Listar = ({infoBatman, setSaveLink}) => {

    console.log(infoBatman);

    return (
        <div>
            <h1 className='text-5xl font-black text-center'>Batman Movies</h1>
            {
                infoBatman.map((item) => {
                    
                    return (
                        <Movies 
                            key={item.imdbID}
                            {...item}
                            setSaveLink={setSaveLink}
                        />
                    )
                })
            }
        </div>
    )
}


export default Listar