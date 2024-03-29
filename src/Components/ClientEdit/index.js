import { useState } from 'react'
import './ClientEdit.css'
import { deleteClient, patchClient } from '../../servicos/clients'
import { Link } from 'react-router-dom'

const ClientEdit = ({ client, setIsChanging }) => {

    const [name, setName] = useState(client.name)
    const [lastName, setLastName] = useState(client.lastName)
    const [objective, setObjective] = useState(client.objective)
    const [phone, setPhone] = useState(client.phone)
    const [email, setEmail] = useState(client.email)
    const [address, setAddress] = useState(client.address)

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeLastName(e) {
        setLastName(e.target.value)
    }

    function handleChangeObjective(e) {
        setObjective(e.target.value)
    }

    function handleChangePhone(e) {
        setPhone(e.target.value)
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleChangeAddress(e) {
        setAddress(e.target.value)
    }

    const editedClient = { name, lastName, objective, phone, email, address }

    return (
        <div className='edit'>
            <div className='header'>
                <h1>Edit Client</h1>

                <Link to='/clients'
                    onClick={() => {
                        if (window.confirm('Are you sure you want to delete this client?')) {
                            deleteClient(client.id)
                            .then((res) => {
                                const message = document.createElement('p')
                                message.innerText = "Client deleted successfully!"
                                message.style.position = 'fixed'
                                message.style.top = '50%'
                                message.style.left = '50%'
                                message.style.transform = 'translate(-50%, -50%)'
                                message.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
                                message.style.color = 'white'
                                message.style.padding = '10px'
                                message.style.borderRadius = '5px'
                                message.style.zIndex = '9999'
                                document.body.appendChild(message)
                                setTimeout(() => {
                                    document.body.removeChild(message)
                                }, 3000)
                            })
                        }
                    }}
                    className='delete-btn-link' >
                    <img src='/assets/svg-icons/delete-btn.svg' alt='delete' className='delete-btn'/>
                </Link>
            </div>
            <form className='edit-info'>

                <div className='info-details-box'>
                    <img className='icon' src='/assets/svg-icons/user.svg' alt='user' />
                    <input
                        className='info-details-edit'
                        type='text'
                        value={name}
                        onChange={handleChangeName}
                        placeholder='First Name'
                    />
                </div>

                <div className='info-details-box'>
                    <img className='icon' src='/assets/svg-icons/user.svg' alt='user' />
                    <input
                        className='info-details-edit'
                        type='text'
                        value={lastName}
                        onChange={handleChangeLastName}
                        placeholder='Last Name'
                    />
                </div>

                <div className='info-details-box'>
                    <img className='icon' src='/assets/svg-icons/target.svg' alt='objective' />
                    <input
                        className='info-details-edit'
                        type='text'
                        value={objective}
                        onChange={handleChangeObjective}
                        placeholder='Objective'
                    />
                </div>

                <div className='info-details-box'>
                    <img className='icon' src='/assets/svg-icons/cellphone.svg' alt='phone' />
                    <input
                        className='info-details-edit'
                        type='text'
                        value={phone}
                        onChange={handleChangePhone}
                        placeholder='Phone'
                    />
                </div>

                <div className='info-details-box'>
                    <img className='icon' src='/assets/svg-icons/email.svg' alt='email' />
                    <input
                        className='info-details-edit'
                        type='text'
                        value={email}
                        onChange={handleChangeEmail}
                        placeholder='Email'
                    />
                </div>

                <div className='info-details-box'>
                    <img className='icon' src='/assets/svg-icons/map.svg' alt='adress' />
                    <input
                        className='info-details-edit'
                        type='text'
                        value={address}
                        onChange={handleChangeAddress}
                        placeholder='Address'
                    />
                </div>

                <div className='buttons'>

                    <button
                        className='btn'
                        onClick={(e) => {
                            e.preventDefault()
                            patchClient(client.id, editedClient)
                            setIsChanging(false)
                        }}
                    >Save</button>

                    <button
                        className='btn'
                        onClick={(e) => {
                            e.preventDefault()
                            setIsChanging(false)
                        }}
                    >Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ClientEdit