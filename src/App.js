import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Dashboard from '../src/routes/dashboard'
import Homepage from '../src/routes/home/home'
import BookAppointment from '../src/routes/book-appointment/book-appointment'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Dashboard />}>
                    <Route path='/' element={<Homepage />} />
                    <Route path='book-appointment' element={<BookAppointment />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
