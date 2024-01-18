/* eslint-disable react/prop-types */
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

function ToDo({ text, deleteToDo, modifyToDo }) {
    return (
        <>
            <div className="todo">
                <div className="text">{text}</div>
                <div className="icons">
                    <BiEdit className="icon" onClick={modifyToDo}></BiEdit>
                    <AiFillDelete className="icon"
                        onClick={deleteToDo}
                    ></AiFillDelete>
                </div>
            </div>
        </>
    );
}

export default ToDo;