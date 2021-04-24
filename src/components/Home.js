import React from 'react';
import NavigationBar from './NavigationBar';

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar></NavigationBar>
                <h1>Musical Hendrix es una tienda de instrumentos musicales con ya 
                    más de 15 años de experiencia. Tenemos el conocimiento y la capacidad 
                    como para informarte acerca de las mejores elecciones para tu compra 
                    musical.</h1>
            </div>
        );
    }
}

export default Home;