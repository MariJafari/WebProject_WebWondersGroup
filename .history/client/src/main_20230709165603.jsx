/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/

import React from 'react'
import App from './App.jsx'
import {createRoot} from react-dom/client'
import { render } from 'react-dom'

render(<App/>, document.getElementById('root'));


