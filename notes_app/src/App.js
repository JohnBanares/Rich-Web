import React, { useState, useEffect } from 'react';
import { fromEvent } from 'rxjs';
import './App.css';

function App() {

    const[note, setNote] = useState('');
    const[listNote, setlistNote] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setlistNote([...listNote, note]);
        setNote('');
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
                            listNote.map((n) => (
                                <div className='note'>
                                    <input type='text' className='text' value={n}/>
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
