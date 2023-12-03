
import { BrowserRouter, Route, Routes, redirect } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import PageNotFound from './components/404';


function App() {

    const token = localStorage.getItem('token');

    if (!token) {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )


}

export default App;
