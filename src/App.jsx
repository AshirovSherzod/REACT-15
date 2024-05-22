import React, {memo} from 'react'
import TodoApp from './components/todoListApp/TodoApp'

const App = () => {
  return (
    <div>
      <TodoApp/>
    </div>
  )
}

export default memo(App)