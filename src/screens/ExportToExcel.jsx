import { useState } from 'react';

import { db } from '../firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

import { CSVLink } from "react-csv";

export const ExportToExcel = () => {
  const [listUsers, setListUsers] = useState([])

  const getList = async(setListUsers) => {
    try {
      const docs = []
      const querySnapshot = await getDocs(collection(db, "users"))
      querySnapshot.forEach( doc => {
        const { date, fullName, email, isOlder, terms } = doc.data()
        const fecha = date.toDate()
        docs.push({fecha, fullName, email, isOlder, terms})
      })

      setListUsers(docs)
      console.log(docs)

    } catch (error) {
      console.log(error);
    }
  }

  const headers = [
    { label: "Nombre", key: 'fullName' },
    { label: "Email", key: 'email' },
    { label: "Es mayor", key: 'isOlder' },
    { label: "Acepto terminos y condiciones", key: 'terms' },
    { label: "Fecha y hora", key: 'fecha' },
  ]

  return (
    <div className='page'>
      { listUsers && (
        <div className='container'>
          <button onClick={() => getList(setListUsers)}>Actualizar data</button>
          <CSVLink data={listUsers} headers={headers} filename={"Mercado_vasar.csv"} >Download excel</CSVLink>
        </div>
      )}
    </div>
  )
}
