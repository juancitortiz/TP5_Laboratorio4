import React from 'react';
import Card from 'react-bootstrap/Card';

class Contenedor extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Card style={{ width: '18rem' }}>
                    <a href={`detalle-instrumento/${this.props.id}`}>
                    <Card.Img variant="top" src={require(`../assets/images/${this.props.imagen.toLowerCase()}`)} />
                    </a>
                    <Card.Body>
                        <Card.Title>{this.props.instrumento}</Card.Title>
                        <Card.Text>
                        ${this.props.precio}
                        </Card.Text>
                        <Card.Text>
                        {this.props.costoEnvio}
                        </Card.Text>
                        <Card.Text>
                        {this.props.cantidadVendida} vendidos
                        </Card.Text>
                    </Card.Body>
                </Card>
            </React.Fragment>
        )
    }
}

export default Contenedor;