
import { Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Àpropos from './pages/Àpropos';
import Error from './pages/Error';

function App(){
    return(
        <>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<Àpropos/>}></Route>
            <Route path='/*' element={<Error/>}></Route>
        </Routes>
        <Footer/>
        </>
    )
}

export default App
