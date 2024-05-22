import React, {memo, useState, useCallback} from 'react'
import TodosCreate from '../todoListCreate'
import TodosManage from '../todoListManage'

let initialState = {
    id: null,
    text: "",
    desc: "",
    time: "",
    endTime: ""
}

const TodoApp = () => {
    const [formData, setFormData] = useState(initialState)
    const [data, setData] = useState([])

    let createTodos = useCallback((todos)=>{
        setData(prev => ([...prev, todos]))
        setFormData(initialState)
    }, [data])

    let deleteTodos = useCallback((id)=>{
        let filterData = data?.filter(el => el.id !== id)
        setData(filterData)
    }, [data])

    let updateTodos = useCallback((payload)=>{
        console.log(payload);
        let index = data?.findIndex(el => el.id === payload.id)
        data?.splice(index, 1, payload)
        setData([...data])
        setFormData(initialState)
    }, [data])

    let getValue = useCallback((payload)=>{
        setFormData(p => ({...p, ...payload}))
    }, [])

    let updateValues = useCallback((payload) => {
        setFormData(payload)
    }, [])

  return (
    <div>
        <TodosCreate  
            formData={formData} 
            createTodos={createTodos}
            updateTodos={updateTodos}
            getValue={getValue}/>
        <TodosManage 
            updateValus={updateValues}
            deleteTodos={deleteTodos}
            data={data}/>
    </div>
  )
}

export default memo(TodoApp)