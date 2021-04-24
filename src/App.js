import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Home from './components/Home';
import DondeEstamos from './components/DondeEstamos';
import Productos from './components/Productos';
import DetalleInstrumento from './components/DetalleInstrumento';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/dondeestamos" component={DondeEstamos}></Route>
        <Route exact path="/productos" component={Productos}></Route>
        <Route path="/detalle-instrumento/:id" component={DetalleInstrumento}></Route>
      </Switch>
    )
  }
}

export default App;
