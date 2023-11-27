
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Regisgter from './components/Regisgter';
import Login from './components/Login';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Regisgter />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
