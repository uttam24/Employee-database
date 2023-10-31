import React, { useState } from 'react'
import AddEmployee from './AddEmployee';

const Header = ({ dataApi, setDataApi }) => {
    const [show, setShow] = useState(false)

    const showModel = () => {
        setShow(!show)
    }

    return (
        <div className='container'>
            <div className='header'>
                <h1 className='heading'>Employee Database Management</h1>
                <button className='btn btn-success' onClick={showModel}>Add Employee</button>
                {show && <AddEmployee dataApi={dataApi} setDataApi={setDataApi} showModel={showModel} />}
            </div>
        </div>
    )
}

export default Header