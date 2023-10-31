import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EmployeeInformation from "./EmployeeInformation"
import Header from "./Header"

const EmployeeList = () => {
    const [dataApi, setDataApi] = useState([])
    const [itemDetail, setItemDetail] = useState({})

    const getData = async () => {
        const response = await axios.get('http://localhost:3003/user');
        const data = response.data;
        setDataApi(data)
        setItemDetail(data[0])
    }
    console.log(itemDetail)
    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:3003/user/${id}`)
        getData()
    }

    useEffect(() => {
        getData()
    }, [])


    const listItem = (id) => {
        setItemDetail(id)
    }
    return (
        <>
            <Header dataApi={dataApi} setDataApi={setDataApi} />
            <div className='container'>
                <div className='wrapper'>
                    <div className='employeeList'>
                        <h3 className='heading'>Employee List</h3>
                        <div className='box'>
                            <ul>
                                {dataApi.map((data) => (
                                    <li key={data.id} ><span onClick={() => listItem(data)}>{data.firstName} {data.lastName}</span> <button onClick={() => deleteItem(data.id)}><img src='delete-button.svg' /></button></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <EmployeeInformation itemDetail={itemDetail} />
                </div>
            </div>
        </>
    )
}

export default EmployeeList