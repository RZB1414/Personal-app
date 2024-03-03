import './Home.css'
import Footer from '../../Components/Footer'
import ProgressBarComponent from '../../Components/ProgressBar';

const Home = () => {

    const hours = new Date().getHours();

    const greeting = (hours < 12) ? 'Good Morning' : (hours < 18) ? 'Good Afternoon' : 'Good Evening';

    return (
        <>
            <div className='greeting'>
                <h1>{greeting}</h1>
                <h1>Mr. Buiatti</h1>
            </div>
            <ProgressBarComponent type='Payments' now={500} min={0} max={1000} />
            <Footer />
        </>
    )
}

export default Home