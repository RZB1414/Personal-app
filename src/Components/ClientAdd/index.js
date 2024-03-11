import { useState } from 'react'
import './ClientAdd.css'
import { getClients, postClient } from '../../servicos/clients'

const ClientAdd = ({ setIsAdding }) => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [objective, setObjective] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')


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

    const clientAdded = { id, name, lastName, objective, phone, email, address }

    async function addID() {
        try {
            const clientsAPI = await getClients()
            const client = clientsAPI.map(client => parseInt(client.id))
            const maxId = Math.max(...client)
            const newId = maxId + 1
            const newIdString = newId.toString()
            setId(newIdString)
            clientAdded.id = newIdString
            postClient(clientAdded)
        } catch (error) {
            console.error("Error occurred while generating ID:", error)
        }
    }

    return (
        <div className='edit'>
            <h1>Add Client</h1>
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
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>

                <div className='buttons'>

                    <button
                        className='btn'
                        onClick={(e) => {
                            e.preventDefault()
                            addID()
                            setIsAdding(false)
                        }}
                    >Add</button>

                    <button
                        className='btn'
                        onClick={(e) => {
                            e.preventDefault()
                            setIsAdding(false)
                        }}
                    >Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ClientAdd