import { useState } from 'react'
import './ClientEdit.css'
import { patchClient } from '../../servicos/clients'

const ClientEdit = ({ client, setIsEditing }) => {

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
            <h1>Edit Client</h1>
            <form className='edit-info'>

                <div className='info-details-box'>
                    <img className='icon' src='/assets/svg-icons/user.svg' alt='user' />
                    <input
                        className='info-details'
                        type='text'
                        value={name}
                        onChange={handleChangeName}
                        placeholder='First Name'
                    />
                </div>

                <div className='info-details-box'>
                    <img className='icon' src='/assets/svg-icons/user.svg' alt='user' />
                    <input
                        className='info-details'
                        type='text'
                        value={lastName}
                        onChange={handleChangeLastName}
                        placeholder='Last Name'
                    />
                </div>

                <div className='info-details-box'>
                    <img className='icon' src='/assets/svg-icons/target.svg' alt='objective' />
                    <input
                        className='info-details'
                        type='text'
                        value={objective}
                        onChange={handleChangeObjective}
                        placeholder='Objective'
                    />
                </div>

                <div className='info-details-box'>
                    <img className='icon' src='/assets/svg-icons/cellphone.svg' alt='phone' />
                    <input
                        className='info-details'
                        type='text'
                        value={phone}
                        onChange={handleChangePhone}
                        placeholder='Phone'
                    />
                </div>

                <div className='info-details-box'>
                    <img className='icon' src='/assets/svg-icons/email.svg' alt='email' />
                    <input
                        className='info-details'
                        type='text'
                        value={email}
                        onChange={handleChangeEmail}
                        placeholder='Email'
                    />
                </div>

                <div className='info-details-box'>
                    <img className='icon' src='/assets/svg-icons/map.svg' alt='adress' />
                    <input
                        className='info-details'
                        type='text'
                        value={address}
                        onChange={handleChangeAddress}
                        placeholder='Address'
                    />
                </div>

                <button
                    className='btn-save'
                    onClick={(e) => {
                        e.preventDefault()
                        patchClient(client.id, editedClient)
                        setIsEditing(false)
                    }}
                >Save</button>
            </form>
        </div>
    )
}

export default ClientEdit