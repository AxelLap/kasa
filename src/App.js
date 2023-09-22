
import { Routes, Route} from 'react-router-dom';

import './styles/css/pages.css'
import './styles/css/components.css'

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Accomodation from './pages/Accomodation'


import './App.css'



function App(){
    return(
        <>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/*' element={<Error/>}></Route>
            <Route path='/accommodation/:id' element={<Accomodation/>}></Route>
        </Routes>
        <Footer/>
        </>
    )
}

export default App
