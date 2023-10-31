import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EmployeeInformation = ({ itemDetail }) => {

    return (
        <div className='employee_infomration'>
            <h3 className='heading'>Employee Information</h3>
            <div className='box employee_id'>
                <h3> {itemDetail.firstName} {itemDetail.lastName}</h3>
                <p>{itemDetail.email}</p>
                <p>{itemDetail.contactNumber}</p>
                <p>{itemDetail.age}</p>
                <p>{itemDetail.dob}</p>
                <p>{itemDetail.address}</p>
            </div>
        </div>
    )
}

export default EmployeeInformation