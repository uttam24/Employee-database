import React, { useState } from 'react'
import axios from 'axios'

const AddEmployee = ({ dataApi, setDataApi, showModel }) => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        age: "",

        date: "",
        address: "",
    })
    const [error, setError] = useState({})
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const formSubmit = async (e) => {
        e.preventDefault();

        if (user.firstName == "") {
            return setError({ fName: <p>please enter name</p> })
        }
        else if (user.lastName == "") {
            return setError({ lName: <p>please enter lastName</p> })
        } else if (user.email == "") {
            return setError({ email: <p>please enter email</p> })
        } else if (user.contact == "") {
            return setError({ contact: <p>please enter contact</p> })
        } else if (user.age == "") {
            return setError({ age: <p>please enter age</p> })
        } else if (user.date == "") {
            return setError({ date: <p>please enter dob</p> })
        } else if (user.address == "") {
            return setError({ address: <p>please enter address</p> })
        } else {
            setError({})
            await axios.post('http://localhost:3003/user', user)
            await setDataApi([...dataApi, user])
            await showModel()
        }

    }
    return (
        <div className='popUp'>
            <div className='popUpContainer'>
                <span className='close' onClick={showModel}> <img src="./icons-close.svg" /> </span>
                <form action="" onSubmit={formSubmit}>
                    <ul>
                        <li><input type="text" name='firstName' value={user.firstName} className='form-control' onChange={handleInput} placeholder='First Name' />
                            {error?.fName && error.fName}</li>
                        <li>    <input type="text" name='lastName' value={user.lastName} className='form-control' onChange={handleInput} placeholder='Last Name' />
                            {error?.lName && error.lName}</li>
                        <li><input type="text" name='email' value={user.email} className='form-control' onChange={handleInput} placeholder='Email' />
                            {error?.email && error.email}</li>
                        <li> <input type="number" name='contact' value={user.contact} className='form-control' onChange={handleInput} placeholder='Contact' maxlength="10" />
                            {error?.contact && error.contact}</li>
                        <li><input type="number" name='age' value={user.age} className='form-control' onChange={handleInput} placeholder='Age' />
                            {error?.age && error.age}</li>
                        <li><input type="date" name='date' value={user.date} className='form-control' onChange={handleInput} placeholder='DOB' />
                            {error?.date && error.date}</li>
                        <li>  <input type="text" name='address' value={user.address} className='form-control' onChange={handleInput} placeholder='Address' />
                            {error?.address && error.address}</li>
                        <button className='btn btn-success' type='submit' style={{ width: "100%" }}>Add Employee</button>
                    </ul>
                </form>


            </div>
        </div>
    )
}

export default AddEmployee