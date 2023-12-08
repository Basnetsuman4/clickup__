import '../../screens/Dashboard/Dashboard.css'
import { useEffect, useState } from 'react'
import axios from 'axios';

const ToDo = () => {

    const [dataTodo, setDataTodo] = useState([]);
    const [dataProgress, setDataProgress] = useState([]);
    const [dataCompleted, setDataCompleted] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        const urlTodos = "http://localhost:8000/todos"
        const urlProgress = "http://localhost:8000/inProgress"
        const urlCompleted = "http://localhost:8000/completed"

        axios.get(urlTodos)
            .then((res) => {
                // handle success
                setDataTodo(res.data.reverse());
                console.log(res.data);
            })
            .catch((err) => {
                // handle error
                console.log(err);
            })

        axios.get(urlProgress)
            .then((res) => {
                // handle success
                console.log(res);
                setDataProgress(res.data);
            })
            .catch((err) => {
                // handle error
                console.log(err);
            })


        axios.get(urlCompleted)
            .then((res) => {
                // handle success
                console.log(res);
                setDataCompleted(res.data);
            })
            .catch((err) => {
                // handle error
                console.log(err);
            })
    }

    const toprocess = (taskId) => {
        const taskToMove = dataTodo.find(task => task.id === taskId);
        if (taskToMove) {
            setDataTodo(prevDataTodo => prevDataTodo.filter(task => task.id !== taskId));
            setDataProgress(prevDataProgress => [...prevDataProgress, taskToMove]);
        }
    }
    const tocomplete = (taskId) => {
        const taskTOCom = dataProgress.find(task => task.id === taskId)
        if (taskTOCom) {
            setDataProgress(prevDataProgress => prevDataProgress.filter(task => taskId !== task.id));
            setDataCompleted(PrevDataComp => [...PrevDataComp, taskTOCom])
        }
    }


    const backToDo = (taskId) => {
        const goBack = dataProgress.find(task => taskId === task.id)
        if (goBack) {
            setDataProgress(prevDataProgress => prevDataProgress.filter(task => task.id !== taskId))
            setDataTodo(prevTodo => [...prevTodo, goBack])
        }
    }

    return (
        <div className='display'>

            {/*-----Card for TODOs-----*/}
            <div className='Box'>
                <div className="taskTitle" id='todo'>
                    TO DO
                </div>
                <div className='cardList'  >
                    {dataTodo.map((task, index) => (
                        <div className="card"
                            key={task.id}>
                            <div className="card-body">
                                {/* {console.log(`Card no. ${task.id} rendered success!!!`)} */}
                                <h5 className="card-title">{task.title} - {task.id}</h5>
                                <p className="card-text">{task.description}</p>

                            </div>
                            <div className='BtnBox'>
                                <button id='pushBtn' onClick={() => toprocess(task.id)}>Move Forward</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/*-----Card for In Progress-----*/}
            <div className='Box'>
                <div className="taskTitle" id='progress' >
                    IN PROGRESS
                </div>
                <div className='cardList'  >
                    {dataProgress.map((task, index) => (
                        <div className="card"
                            key={task.id}>
                            <div className="card-body">
                                {/* {console.log(`Card no. ${task.id} rendered success!!!`)} */}
                                <h5 className="card-title">{task.title} - {task.id}</h5>
                                <p className="card-text">{task.description}</p>
                            </div>
                            <div className='BtnBox'>
                                <button id='pushBtn' onClick={() => backToDo(task.id)}>Revisit To-Do
                                </button>
                                <button id='pushBtn' onClick={() => tocomplete(task.id)}>Move Forward</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/*-----Card for Completed-----*/}
            <div className='Box'>
                <div className="taskTitle" id='completed'>
                    COMPLETED
                </div>
                <div className='cardList'  >
                    {dataCompleted.map((task, index) => (
                        <div className="card"
                            key={task.id}>
                            <div className="card-body">
                                {/* {console.log(`Card no. ${task.id} rendered success!!!`)} */}
                                <h5 className="card-title">{task.title} - {task.id}</h5>
                                <p className="card-text">{task.description}</p>
                            </div>
                            <div className='BtnBox'>
                                <button id='comBtn' disabled>Completed
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default ToDo;