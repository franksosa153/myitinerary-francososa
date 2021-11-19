import React from 'react'
import Headers from '../componentes/navbar'
import Cartel from '../componentes/cartel'
class Home extends React.Component{
 render(){
    return (
        <div>
            <Headers/>
            <main className="cuerpo">
            <Cartel/>
            
            </main>   
        </div>
    )
}
}

export default Home







