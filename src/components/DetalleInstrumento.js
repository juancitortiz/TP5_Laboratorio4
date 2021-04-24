import React from 'react';
import NavigationBar from './NavigationBar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import {instrumentos} from '../datos/instrumentos.json';

class DetalleInstrumento extends React.Component{
    
    constructor(){
        super();
        this.state = {instrumentos}
    }

    render(){
        const paramId = this.props.match.params.id;
        const instrumentoEncontrado = instrumentos.filter(instrumento => instrumento.id === paramId)
        const txtEnvio = this.obtenerTxtEnvio(instrumentoEncontrado[0]);

        console.log(instrumentoEncontrado);
        console.log(instrumentoEncontrado[0].imagen.toLowerCase());

        return (
            <React.Fragment>
                <NavigationBar></NavigationBar>
                <Container fluid="md">
                    <Row>
                        <Col>
                            <Image src={require(`./../assets/images/${instrumentoEncontrado[0].imagen.toLowerCase()}`)}></Image>
                            <p>Descripción</p>
                            <p>
                                {instrumentoEncontrado[0].descripcion}
                            </p>
                        </Col>
                        <Col>
                            <p>{instrumentoEncontrado[0].cantidadVendida} vendidos</p>
                            <strong>{instrumentoEncontrado[0].instrumento}</strong>
                            <h3>${instrumentoEncontrado[0].precio}</h3>
                            <h4>Marca: {instrumentoEncontrado[0].marca}</h4>
                            <h4>Modelo: {instrumentoEncontrado[0].modelo}</h4>
                            <p>Costo envío:</p>
                            <Col>
                                <Image src="../assets/images/camion.png"></Image>
                                <p> {txtEnvio} </p>
                            </Col>
                            <Button variant="outline-primary">Agregar al carrito</Button>{' '}
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }

    obtenerTxtEnvio(instrumento){
        var txt = "";
        if(instrumento.costoEnvio === "G"){
            txt = "Envío gratis";
        }
        else{
            txt = "Costo de Envío de Interior de Argentina: $" + instrumento.costoEnvio;
        }
        return txt;
    }
}

export default DetalleInstrumento;