import React from 'react'

const Footer = (props) => {
  return (
    <>
    <nav className={`navbar fixed-bottom navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-3`}>
        <p className={`py-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{textAlign:"center", margin: "auto"}} >© 2023 News Panda</p>
      </nav>
    </>
  )
}

export default Footer