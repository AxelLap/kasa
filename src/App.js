
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './styles/css/pages.css'
import './styles/css/components.css'

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Accomodation from './pages/Accomodation'



function App(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}/>
            <Route path='accomodation/:id' element={<Accomodation/>}/>
            <Route path='/*' element={<Error/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default App
