import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from '../componentes/header/header'
import {SobreMi} from '../componentes/sobre-mi/SobreMi'
import {Educacion} from '../componentes/educacion/educacion'
import ResponsiveAppBar from '../componentes/header-mobile/Header-mobile'
import App from '../componentes/habilidades/Habilidades'
import {Proyectos} from '../componentes/proyectos/Proyectos'
import {Contacto} from '../componentes/contacto/Contacto'

import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header /> */}
    <ResponsiveAppBar/>
    <SobreMi />
    <Educacion/>
    <App />
    <Proyectos/>
    <Contacto/>
  </React.StrictMode>,
)
