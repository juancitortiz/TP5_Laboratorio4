import React from 'react';
import NavigationBar from './NavigationBar';
import Contenedor from './Contenedor';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import {instrumentos} from '../datos/instrumentos.json';

class Productos extends React.Component{

    constructor(){
        super();
        this.state = {
            instrumentos
        }
    }

    render(){
        const instrumentos = this.state.instrumentos.map((instrumento, i)=>{
            return(
                <Contenedor key={instrumento.id} 
                            id={instrumento.id}
                            precio={instrumento.precio}
                            costoEnvio={instrumento.costoEnvio}
                            cantidadVendida={instrumento.cantidadVendida}
                            imagen={instrumento.imagen}
                ></Contenedor>
            )
        })
        return(
            <React.Fragment>
                <NavigationBar></NavigationBar>
                <Container fluid="md">
                    <Row>
                    {instrumentos}
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Productos;