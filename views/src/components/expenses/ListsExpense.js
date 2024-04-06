import React, { useEffect, useState } from 'react'
import Loader from '../layouts/Spinner'
import { services } from '../../services/services';



export default function ListsExpense() {

  const token = localStorage.getItem("token");

  const API_URL = process.env.REACT_APP_API_URL;

  const [list, setList] = useState([]);

  useEffect(() => {
    getExpenses();


  }, [])

  const getExpenses = () => {

    services.post('expenses')
      .then((result) => result.json())
      .then((res) => {
        console.log("res", res);
        if (res.status == true) {
          setList(res.data);
        }
      })
  }

  if (list.length == 0) {
    return (
      <div className='d-flex flex-wrap mt-5 justify-content-center'>
        <Loader />
      </div>)
   
  }

  return (
    <div className='d-flex flex-wrap mt-5 justify-content-start'>
      {list && list.map((value, index) => {
        return (
          <div className='card m-2' key={index}>
            <h1 className='card-title'>{value.expense}</h1>
            <div className='card-body'>{value.reason}</div>
          </div>
        )
      })}
    </div>
  )
}
