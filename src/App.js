import React, { useState } from 'react';
import './App.css';





function App() {



    const today = new Date();

    const day = today.getDay();

    const days = { 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 7: "Sunday" };


    const [toDo, setToDo] = useState('')
    const [toDos, setToDos] = useState([])
    const [error, setError] = useState(false)


    const add = () => {
        if (toDo) {
            setToDos([...toDos, { text: toDo, id: Date.now(), status: false }]);
            setToDo('');



        }

        else {

            setError(true)



        }




    }

    const del = (id) => {

        let newlist = toDos.filter((obj) => obj.id !== id)

        setToDos([...newlist])



    }





    return (
        <div className="app">
            <div className="mainHeading" >
                <h1>ToDo List</h1>
            </div>
            <div className="subHeading">
                <br />
                <h2>Whoops, it's <span style={{ color: '#6f6fc8' }}>{days[day]}!</span> 🌝 ☕ </h2>
            </div>
            <div className="input">
                <input className='inputfield' value={toDo} onChange={(e) => {

                    setToDo(e.target.value)

                    if (e.target.value) {
                        setError(false)


                    }




                }} type="text" placeholder="🖊️ Add item..." />
                <i style={{ color: '#6f6fc8' }} onClick={add} className="fas fa-plus"></i>
            </div>

            {error && <p className="error-message">Please enter a task!</p>}








            {
                toDos.map((obj) => {
                    return (
                        <div className="todos">
                            <div className="todo">
                                <div className="left">
                                    <input className="checkbox" onChange={(e) => {




                                        setToDos(toDos.filter(obj2 => {
                                            if (obj2.id === obj.id) {
                                                obj2.status = e.target.checked
                                                obj.status = obj2.status








                                            }


                                            return obj2




                                        }))






                                    }


                                    } type="checkbox" name="" id="" />



                                    {/* <p className='todo-text'>{obj.text}</p> */}

                                    {obj.status ? <p className='todo-text' style={{ textDecoration: 'line-through' }}>{obj.text}</p> : <p className='todo-text'>{obj.text}</p>}

                                </div>
                                <div className="right">
                                    <i onClick={() => { del(obj.id) }} style={{ color: '#E40017' }} className="fas fa-trash-alt"></i>
                                </div>
                            </div>
                        </div>
                    )
                })
            }




        </div >
    );
}


export default App;