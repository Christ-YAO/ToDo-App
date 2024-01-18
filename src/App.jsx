import { useEffect, useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'
import { addToDo, clear, deleteToDo, getAllToDo, updateToDo } from './utils/HandleApi'

function App() {
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isLoding, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  // const [errText, setErrText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    setIsLoading(true);
    getAllToDo(setToDo, setIsLoading)
  }, [])

  const modifyToDo = (_id, text) => {
    setIsUpdating(true)
    setToDoId(_id)
    setText(text)
  }


  return (
    <>
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder='Add ToDos...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="add"
            onClick={
              isUpdating
              ?
                () => updateToDo(toDoId, setToDo, setIsLoading, text, setText, setIsUpdating, setError)
              :
                () => addToDo(text, setToDo, setText, setIsLoading, setError)
            }
          >
            {isUpdating ? "Update" : "Add" }
          </div>
          <div className="add"
            onClick={() => clear(setToDo, setIsLoading)}
          >
            Clear
          </div>
        </div>
        {error && <div style={{marginTop: "20px", color: "red"}}>Veuillez saisir ce champ !!!</div>}

        {isLoding 
        ?
          <div style={{marginTop: "20px"}}>Loading...</div>
        :
          <div className="list">
            {toDo.map((item) => (
              <ToDo
                key={item._id}
                text={item.text}
                modifyToDo={() => modifyToDo(item._id, item.text)}
                deleteToDo={() => deleteToDo(item._id, setToDo, setIsLoading)}
                error={error}
              />
            ))}
          </div>
        }
      </div>
    </>
  )
}

export default App
