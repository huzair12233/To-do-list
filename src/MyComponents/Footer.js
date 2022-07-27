import React from 'react'

const Footer = () => {
  let footerStyle ={
    position:"fixed",
    bottom:0,
    width:"100%"
}
  return (
    <footer className='bg-dark text-light' style={footerStyle} >
      <p className='text-center'>
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer