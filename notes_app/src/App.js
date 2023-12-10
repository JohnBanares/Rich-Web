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
            const updateText = [...listNote];
            //remove read only and focus on input
            inputRefs.current[index].readOnly = false;
            inputRefs.current[index].focus();

            //update value of index and store in swap array
            updateText[index] = inputRefs.current[index].value;
            setlistNote(updateText);

            // console.log("text was changed to", updateText[index]);
            setToggle(updateText);
            setToggle(index);
        }
       
    }

    //used tp check updated of listnode
    // useEffect(() => {
    //     console.log(listNote);
    // }, [listNote])

    const handleColor = (color) => {
        
        //loop through each not in listNote
        listNote.forEach((_, index) => {
            //get the note and text classes and updated color
            const noteElement = inputRefs.current[index].closest('.note');
            const text = inputRefs.current[index].closest('.text');

            noteElement.style.backgroundColor = color;
            text.style.backgroundColor = color
        });
    };
      
    
    

    return (
        <div className='body'>

                <header>
                    <h2>Note Taking App</h2>
                    <form id="form_note" onSubmit={handleSubmit}>
                    <input type="text" id="text_box" placeholder="Add note here" value ={note} onChange={(event) => setNote(event.target.value)}/>
                    <input type="submit" id="submit_box" value="Add note"/>
                    </form >
                    <h2>Set Box Color :</h2>
                    <button id="red_button" onClick={() => handleColor('red')}>Red</button>
                    <button id="blue_button" onClick={() => handleColor('blue')}>Blue</button>
                    <button id="yellow_button" onClick={() => handleColor('yelow')}>Yellow</button>
                    <button id="green_button" onClick={() => handleColor('green')}>Green</button>

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
