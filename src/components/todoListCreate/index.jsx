import React, { memo } from "react";
import './todoListCreate.scss'

const TodosCreate = ({updateTodos, formData, getValue, createTodos }) => {
    const handleCreateTodos = e =>{
        e.preventDefault()
        if(formData.id){
            // update
            updateTodos(formData);
        }else{
            // create
            let date = new Date()
            formData.id = date.getTime()
            formData.time =`${date.getHours()}:${date.getMinutes()}`
            createTodos(formData);
        }
    }
console.log(formData);

  return (
    <div className="form__wrapper">
      <form className="" onSubmit={handleCreateTodos}>
        <h2>Todo List Create</h2>
        <input 
          value={formData.text} 
          onChange={(e) => getValue({text:e.target.value})} 
          type="text"
          placeholder="vazifani nomini kiriting" />
        <input 
          value={formData.desc} 
          onChange={(e) => getValue({desc:e.target.value})} 
          type="text" 
          placeholder="vazifaga qisqa tarif yozing"/>
        <input 
          value={formData.endTime} 
          onChange={(e) => getValue({endTime:e.target.value})} 
          type="text"
          placeholder="00:00 korinishida kiririting" />
          <div className="form__btn">
            <button>{formData.id ? "save" : "create"}</button>
          </div>
      </form>
    </div>
  );
};


export default memo(TodosCreate);
