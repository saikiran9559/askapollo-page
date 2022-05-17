import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState, useRef} from 'react'
import Dashboard from '../src/routes/dashboard'
import Homepage from '../src/routes/home/home'
import BookAppointment from '../src/routes/book-appointment/book-appointment'
function App() {
    const [stage, setStage] = useState({'step': 1, 'city': 'Hyderabad', })
    const sectionOne = useRef(null);
    const gotoSectionOne = () => {
        window.scrollTo({
            top: sectionOne.current.offsetTop,
            behavior: 'smooth',
        })
    }
    const sectionTwo = useRef(null);
    const gotoSectionTwo = () => {
        window.scrollTo({
            top: sectionTwo.current.offsetTop,
            behavior: 'smooth',
        })
    }
    const sectionThree = useRef(null);
    const gotoSectionThree = () => {
        window.scrollTo({
            top: sectionThree.current.offsetTop,
            behavior: 'smooth',
        })
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Dashboard stage={stage} setStage={setStage} gotoSectionTwo={gotoSectionTwo} />}>
                    <Route path='/' element={<Homepage />} />
                    <Route path='book-appointment'
                         element={<BookAppointment 
                            stage={stage}
                            setStage={setStage} 
                            gotoSectionOne={gotoSectionOne}
                            gotoSectionTwo={gotoSectionTwo}
                            gotoSectionThree={gotoSectionThree}
                            sectionOne={sectionOne}
                            sectionTwo={sectionTwo}
                            sectionThree={sectionThree}
                        />}
                     />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;



