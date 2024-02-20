import './App.css';
import Header from './Components/Header'
import Clients from './Components/Clients';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {

  const entries = [
    { date: new Date("2022-01-01"), weight: 100 },
    { date: new Date("2022-01-05"), weight: 140 },
    { date: new Date("2022-01-10"), weight: 90 },
    { date: new Date("2022-01-15"), weight: 100 },
    { date: new Date("2022-01-20"), weight: 140 },
    { date: new Date("2022-01-25"), weight: 90 },
    { date: new Date("2022-01-30"), weight: 100 },
    { date: new Date("2022-01-30"), weight: 110 },
    { date: new Date("2022-02-04"), weight: 120 },
    { date: new Date("2022-02-09"), weight: 130 },
    { date: new Date("2022-02-14"), weight: 95 },
    { date: new Date("2022-02-19"), weight: 105 }
  ]

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<p>Home</p>} />
        <Route path='/clients' element={<Clients entries={entries} />} />
        <Route path='/info' element={<p>Info</p>} />
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App;
