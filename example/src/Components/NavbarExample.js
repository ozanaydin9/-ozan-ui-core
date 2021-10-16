import React from 'react'
import { Sidebar } from '@ozan-ui/core'
import { Link } from 'react-router-dom'

export const NavbarExample = ( props ) => {

  return <div className="row">
    <Sidebar>
      <div className="routerLink"> <Link to="/input">Input</Link></div>
      <hr style={{margin:0}}/>
      <div className="routerLink"> <Link to="/button">Button</Link></div>
      <hr style={{margin:0}}/>
      <div className="routerLink"> <Link to="/card">Card</Link></div>
      <hr style={{margin:0}}/>
      <div className="routerLink"> <Link to="/nav">Navbar</Link></div>
      <hr style={{margin:0}}/>
      <div className="routerLink"> <Link to="/selectbox">Selectbox</Link></div>
      <hr style={{margin:0}}/>
      <div className="routerLink"> <Link to="/divider">Divider</Link></div>
    </Sidebar>
  </div>

}
