import React from 'react'
import Headers from '../componentes/navbar'
import Hero from '../componentes/Hero'
import Footer from '../componentes/footer'
import PauseOnHover  from '../componentes/carousel'


class Home extends React.Component{
 render(){
    return (
        <>
            <Headers/>  
            <Hero/> 
            <PauseOnHover />        
            <Footer/>  
        </>
    )
}
}

export default Home







