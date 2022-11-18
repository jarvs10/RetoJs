import React from 'react'

const Movies = ({Title, Year, Poster}) => {

    return (
        <>
            <ul className='mt-4 p-2'>
                <li>{Title}</li>
                <li>{Year}</li>
                <li>
                    <img src={Poster} alt="" />
                </li>
            </ul>
        </>
    )
}

export default Movies