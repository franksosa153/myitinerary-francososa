import Headers from '../componentes/navbar'
import React,{setEffect, useState} from "react"
import Poster from '../componentes/Poster';
import Lista from '../componentes/lista';
import Footer from "../componentes/footer"
const Cities = () => {
    
    

    return (
        <>
        <Headers/> 
        <Poster/>
        <Lista/>
        <Footer/>   
        </>
    )
}

export default Cities
