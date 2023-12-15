
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/css/pages.css'
import './styles/css/components.css'

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Error from './pages/error/Error';
import Accomodation from './pages/accomodation/Accomodation'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />} />
                <Route path='accomodation/:id' element={<Accomodation />} />
                <Route path='/*' element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
