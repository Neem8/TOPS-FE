import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import Header from './header/Header.jsx'
import Slider from './Carousel/Slider.jsx'
import LowerCard from './card/LowerCard.jsx'
<script type="text/javascript" src="./node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Slider/>
    <LowerCard/>
  </React.StrictMode>,
)
