import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-3 bg-black'>
        <h1 className='text-5xl font-black text-white'>IMBD-BATMAN</h1>
        <img src='https://p4.wallpaperbetter.com/wallpaper/452/930/411/batman-dc-comics-logo-wallpaper-preview.jpg' width='200' alt="logo batman" />
    </header>
  )
}

export default Header