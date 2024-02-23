import './ClientsInfo.css'
import clients from '../../json/clients.json';
import { useParams } from 'react-router-dom';
import Footer from '../Footer';

const ClientsInfo = () => {

    const params = useParams()

    const client = clients.find((client) => {
        return client.id === Number(params.id)
    })

    if (!client) {
        return <p>Client not found</p>
    }

    return (
        <>
            <div className='cliente'>
                <h1 className='nome-cliente'>{`${client.name} ${client.lastName}`}</h1>
                <div className='info-cliente'>
                    <div className='box-img'>
                        <img className='img-cliente' src={`/assets/posts/${client.id}/capa.png`} alt={client.name} />
                    </div>
                    <div className='box-info'>
                        <p>{client.objective}</p>
                        <p>{client.phone}</p>
                        <p>{client.email}</p>
                        <p>{client.address}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ClientsInfo