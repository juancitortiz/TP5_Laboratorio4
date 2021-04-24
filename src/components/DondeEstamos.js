import React from 'react';
import NavigationBar from './NavigationBar';
import GoogleMapReact from 'google-map-react';
import googleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div> <marker>{text}</marker></div>;

class DondeEstamos extends React.Component{
    static defaultProps = {
        center: {
          lat: -32.886306, 
          lng: -68.838297
        },
        zoom: 11
    };
    render(){
        return(
            <React.Fragment>
                <NavigationBar></NavigationBar>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBl2oJaWVIAGrzYmMPeHSm0IQnwVm0WXMU" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                    <AnyReactComponent
                        lat={-32.886306}
                        lng={-68.838297}
                        text="Musical Hendrix"
                    />
                    </GoogleMapReact>
                </div>
            </React.Fragment>
        );
    }
}

export default DondeEstamos;