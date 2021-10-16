import React from 'react'
import {Sidebar} from '@ozan-ui/core'
import "../src/index.css"

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import '@ozan-ui/core/dist/index.css'
import { InputExample } from './Components/InputExample'
import { ButtonExample } from './Components/ButtonExample'
import { CardExample } from './Components/CardExample'
import { Home } from './Components/Home'
import { NavbarExample } from './Components/NavbarExample'
import { SelectboxExample} from './Components/SelectboxExample'
import { DividerExample} from './Components/DividerExample'
import { TableExample } from './Components/TableExample'
import { BoxExample } from './Components/BoxExample'


const App = () => {

  return <div>
      <div className="appMain" style={{position:"fixed", width:"100%", top: 0}}>
        <div className="sidebarText" >
          <Link to="/" className="ozan-ui"><span className="ozan-ui-text" >Ozan UI</span></Link>
        </div>
        <Sidebar>
          <div className="routerLink"> <Link to="/input">Input</Link></div>
          <hr style={{margin:0}}/>
          <div className="routerLink"> <Link to="/button">Button</Link></div>
          <hr style={{margin:0}}/>
          <div className="routerLink"> <Link to="/card">Card</Link></div>
          <hr style={{margin:0}}/>
          <div className="routerLink"> <Link to="/navbar">Navbar</Link></div>
          <hr style={{margin:0}}/>
          <div className="routerLink"> <Link to="/selectbox">Selectbox</Link></div>
          <hr style={{margin:0}}/>
          <div className="routerLink"> <Link to="/divider">Divider</Link></div>
          <hr style={{margin:0}}/>
          <div className="routerLink"> <Link to="/table">Table</Link></div>
          <hr style={{margin:0}}/>
          <div className="routerLink"> <Link to="/box">Box</Link></div>
          </Sidebar>
      </div>
      <div className="content">

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/input">
            <InputExample />
          </Route>
          <Route path="/button">
            <ButtonExample />
          </Route>
          <Route path="/card">
            <CardExample />
          </Route>
          <Route path="/navbar">
            <NavbarExample />
          </Route>
          <Route path="/selectbox">
            <SelectboxExample />
          </Route>
          <Route path="/divider">
            <DividerExample />
          </Route>
          <Route path="/table">
            <TableExample />
          </Route>
          <Route path="/box">
            <BoxExample />
          </Route>
        </Switch>

      </div>
  </div>
}

export default App
