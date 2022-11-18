import React from 'react'

const Movies = ({Title, Year, Poster}) => {

    return (
        <div className='flex justify-center items-center'>
            <ul className='mt-4 p-2 mb-10 text-center'>
                <li className='text-2xl font-black'>{Title}</li>
                <li className='text-1xl font-bold mb-2'>{Year}</li>
                <li>
                    <img className='mx-auto' src={Poster} alt="" />
                </li>
            </ul>
        </div>
    )
}

export default Movies