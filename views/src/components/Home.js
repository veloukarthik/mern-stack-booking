import React from 'react'
import ListsExpense from './expenses/ListsExpense'
import HOC from './HigherOrderComponent/HOC'

function Home() {
  return (
    <div>
        <ListsExpense />
    </div>
  )
}


export default HOC(Home);