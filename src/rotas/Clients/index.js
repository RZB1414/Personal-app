import './Clients.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { getClients } from '../../servicos/clients';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import { useEffect, useState } from 'react';

const Clients = () => {

    const [clients, setClients] = useState([])

    async function fetchClients() {
        const clientsAPI = await getClients()
        setClients(clientsAPI)
    }

    useEffect(() => {
        fetchClients()
    }, [clients])

    return (
        <>
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            style={{ marginLeft: 30, marginRight: 0 }}
        >
            {clients.map((client) => {
                return (
                    <SwiperSlide key={client.id}>
                            <Link to={`/clients/${client.id}`} className='card'>
                                <img className='image' src={`assets/posts/${client.id}/capa.png`} alt={client.name} />
                                <h3>{client.lastName}</h3>
                            </Link>
                    </SwiperSlide>
                )
            })}
        </Swiper>
        <Footer />
        </>
    )
}

export default Clients
