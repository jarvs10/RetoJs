import React from 'react'
import Movies from './Movies';

const Listar = ({infoBatman}) => {

    console.log(infoBatman);

    return (
        <div>
            {
                infoBatman.map((item) => {
                    return (
                        <Movies 
                            key={item.imdbID}
                            {...item}
                        />
                    )
                })
            }
        </div>
    )
}


export default Listar