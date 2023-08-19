import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from '../componentes/header/header'
import {SobreMi} from '../componentes/sobre-mi/SobreMi'
import {Educacion} from '../componentes/educacion/educacion'
import ResponsiveAppBar from '../componentes/header-mobile/Header-mobile'

import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header /> */}
    <ResponsiveAppBar/>
    <SobreMi />
    <Educacion />
  </React.StrictMode>,
)
