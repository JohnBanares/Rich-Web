import React, { useState, useEffect, useRef } from 'react';
import { fromEvent } from 'rxjs';
import './App.css';

function App() {

    const[note, setNote] = useState('');
    const[listNote, setlistNote] = useState([]);
    const[toggle, setToggle] = useState(null);
    const inputRefs = useRef([]);


    const handleSubmit = (event) => {
        event.preventDefault();
        setlistNote([...listNote, note]);
        setNote('');
    }
    const deleteNote = (index) => {
        const update = [...listNote];
        update.splice(index, 1);
        setlistNote(update);
    }
    
    const changeNote = (index) => {
        if(toggle === index)
        {  
            inputRefs.current[index].readOnly = true;
            setToggle(null);

        }
        else
        {
            inputRefs.current[index].readOnly = false;
            inputRefs.current[index].focus();
            setToggle(index);
        }
       
    }

    
  useEffect(() => {
    console.log(listNote);
  }, [listNote])


    return (
        <div className='body'>

                <header>
                    <h2>Note Taking App</h2>
                    <form id="form_note" onSubmit={handleSubmit}>
                    <input type="text" id="text_box" placeholder="Add note here" value ={note} onChange={(event) => setNote(event.target.value)}/>
                    <input type="submit" id="submit_box" value="Add note"/>
                    </form >
                    <h2>Set Box Color :</h2>
                    <button id="red_button">Red</button>
                    <button id="blue_button">Blue</button>
                    <button id="yellow_button">Yellow</button>
                    <button id="green_button">Green</button>

                </header>

            <main>

                <section className="note_list">

                    <div id="notes">
                        {
                            listNote.map((n, index) => (
                                <div className='note'>     
                                    <div className='words'>
                                        <input 
                                            type='text' 
                                            className='text' 
                                            defaultValue={n}
                                            readOnly={true}  
                                            ref={(el) => (inputRefs.current[index] = el)}/>
                                    </div>
                                    <div className='functions'>
                                        <button className='edit' onClick={() =>changeNote(index) }>
                                            {toggle === index ? 'Save' : 'Edit'}
                                        </button>
                                        <button className='delete' onClick={() => deleteNote(index)}>Delete</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </section>

            </main>

        </div>
       
    );
}

export default App;
