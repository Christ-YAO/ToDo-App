import axios from 'axios';

const baseURI = "http://localhost:5000/todo"

const getAllToDo = (setToDo, setIsLoading) => {
    axios
        .get(baseURI)
        .then((response) => {
            setToDo(response.data)
            setIsLoading(false)
            console.log(response);
        })
}

const addToDo = (text, setToDo, setText, setIsLoading, setError) => {
    if (text.replace(/\s+/, '').length) {
        axios
            .post(`${baseURI}/save`, {text} )
            .then(() => {
                setIsLoading(true)
                getAllToDo(setToDo, setIsLoading)
                setText("")
                setError(false)
            }).catch(error => console.log(error))
    }
    return setError(true)
}

const clear = (setToDo, setIsLoading) => {
    axios
        .delete(`${baseURI}/deleteall`)
        .then(() => {
            setIsLoading(true)
            getAllToDo(setToDo, setIsLoading)
        })
}

const deleteToDo = (toDoId, setToDo, setIsLoading) => {
    axios
        .post(`${baseURI}/delete`, {_id: toDoId})
        .then(() => {
            setIsLoading(true)
            getAllToDo(setToDo, setIsLoading)
            console.log(toDoId);
        })
}

const updateToDo = (toDoId, setToDo, setIsLoading, text, setText, setIsUpdating, setError) => {
    if (text.replace(/\s+/, '').length) {
        axios
            .put(`${baseURI}/update`,{_id : toDoId , text }  )
            .then (()=> {
                setText("")
                setIsUpdating(false)
                setIsLoading(true)
                setError(false)
                getAllToDo(setToDo,setIsLoading)
            })
    }
    return setError(true)
}

export { getAllToDo, addToDo, clear, deleteToDo, updateToDo };
