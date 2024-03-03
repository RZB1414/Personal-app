import './ClientsInfo.css'
import { getClients } from '../../servicos/clients';
import { useParams } from 'react-router-dom';
import Footer from '../../Components/Footer';
import { useEffect, useState } from 'react';
import ClientEdit from '../../Components/ClientEdit';

const ClientsInfo = () => {

    const [clients, setClients] = useState([])
    const [isEditing, setIsEditing] = useState(false)

    async function fetchClients() {
        const clientsAPI = await getClients()
        setClients(clientsAPI)
    }

    useEffect(() => {
        fetchClients()
    }, [clients])

    const params = useParams()

    const client = clients.find((client) => {
        return Number(client.id) === Number(params.id)
    })

    if (!client) {
        return <p>Client not found</p>
    }

    const handleEditClickTrue = () => {
        setIsEditing(true)
    }

    return (
        <>
            {isEditing ?
                <ClientEdit client={client} setIsEditing={setIsEditing} />
                :
                <>
                    <div className='cliente'>
                        <h1 className='nome-cliente'>{`${client.name} ${client.lastName}`}</h1>
                        <div className='info-cliente'>
                            <div className='box-img'>
                                <img className='img-cliente' src={`/assets/posts/${client.id}/capa.png`} alt={client.name} />
                            </div>
                            <div className='box-info'>
                                <div className='info-details-box'>
                                    <img className='icon' src='/assets/svg-icons/target.svg' alt='objective' />
                                    <p className='info-details'>{client.objective}</p>
                                </div>

                                <div className='info-details-box'>
                                    <img className='icon' src='/assets/svg-icons/cellphone.svg' alt='objective' />
                                    <p className='info-details'>{client.phone}</p>
                                </div>

                                <div className='info-details-box'>
                                    <img className='icon' src='/assets/svg-icons/email.svg' alt='objective' />
                                    <p className='info-details'>{client.email}</p>
                                </div>

                                <div className='info-details-box'>
                                    <img className='icon' src='/assets/svg-icons/map.svg' alt='objective' />
                                    <p className='info-details'>{client.address}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='box-btn'>
                        <button className='btn' onClick={handleEditClickTrue}>Edit</button>
                    </div>
                </>
            }
            <Footer />
        </>
    )
}

export default ClientsInfo