import React from 'react'
import Headers from '../componentes/navbar'
import Cartel from '../componentes/cartel'
import Footer from '../componentes/footer'
import Carousel from '../componentes/carousel'
import Slide from '../componentes/caru'
class Home extends React.Component{
 render(){
    return (
        <>
        <header>
            <Headers/>
            </header>
            <main className="cuerpo">        
            <Cartel/>
            <Carousel/>
            </main> 
            
            <Footer/>  
        </>
    )
}
}

export default Home







