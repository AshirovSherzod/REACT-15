import React, { memo, useMemo } from 'react'
import './todoListManage.scss'

const TodosManage = ({data, deleteTodos, updateValus}) => {
    console.log(data);

    let total =  useMemo(()=>{
        return data.length
    }, [])

    let todosItems = data?.map(el => (
        <>
        <tr key={el.id}>
            <td>{el.text}</td>
            <td>{el.desc}</td>
            <td>{el.time}</td>
            <td>{el.endTime}</td>
            <td className='table__btns'>
                <button className='table__btn' onClick={()=> updateValus(el)}>edit</button>
                <button className='table__btn' onClick={()=> deleteTodos(el.id)}>delete</button>
            </td>
        </tr>
        </>

    ))
  return (
    <div className='container'>
        <table className='table'>
            <thead>
                <tr>
                    <td>Task name</td>
                    <td>Task description</td>
                    <td>Task start time</td>
                    <td>Task end time</td>
                    <td>Manage Task</td>
                </tr>
            </thead>
            <tbody>
                {todosItems}
            </tbody>
        </table>
    </div>
  )
}

export default memo(TodosManage)