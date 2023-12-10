import React, { useState } from 'react';
import { fromEvent } from 'rxjs';
import './App.css';

function App() {
  const form_note = document.getElementById('form_note');
  const text_box = document.getElementById('text_box');
  const list_notes = document.getElementById('notes');
  const red_button = document.getElementById('red_button');
  const blue_button = document.getElementById('blue_button');
  const yellow_button = document.getElementById('yellow_button');
  const green_button = document.getElementById('green_button');

  function switchRed() {
      const notes = document.getElementsByClassName('note');
      const text = document.getElementsByClassName('text');
      for (let i = 0; i < notes.length; i++) {
          notes[i].style.backgroundColor = "red";
          text[i].style.backgroundColor = "red";
      }
  }
  red_button.addEventListener('click', switchRed);

  function switchBlue() {
      const notes = document.getElementsByClassName('note');
      const text = document.getElementsByClassName('text');
      for (let i = 0; i < notes.length; i++) {
          notes[i].style.backgroundColor = "blue";
          text[i].style.backgroundColor = "blue";
      }
  }
  blue_button.addEventListener('click', switchBlue);

  function switchYellow() {
      const notes = document.getElementsByClassName('note');
      const text = document.getElementsByClassName('text');
      for (let i = 0; i < notes.length; i++) {
          notes[i].style.backgroundColor = "yellow";
          text[i].style.backgroundColor = "yellow";
      }
  }
  yellow_button.addEventListener('click', switchYellow);

  function switchGreen() {
      const notes = document.getElementsByClassName('note');
      const text = document.getElementsByClassName('text');
      for (let i = 0; i < notes.length; i++) {
          notes[i].style.backgroundColor = "rgb(127, 175, 127)";
          text[i].style.backgroundColor = "rgb(127, 175, 127)";
      }
  }
  green_button.addEventListener('click', switchGreen);


  form_note.addEventListener('submit', (e)=>{
      e.preventDefault();
  
      const note = text_box.value;
      console.log(note)

      const new_note = document.createElement('div')
      new_note.classList.add('note');

      const new_words = document.createElement('div');
      new_words.classList.add('words');
      new_note.appendChild(new_words);

      const new_text = document.createElement('input');
      new_text.classList.add('text');
      new_text.type = "text";
      new_text.value = note;
      new_text.setAttribute("readonly", "readonly");


      new_words.appendChild(new_text);

      const new_functions = document.createElement('div');
      new_functions.classList.add('functions');
    
      const new_edit = document.createElement('button');
      const new_delete = document.createElement('button');

      new_edit.classList.add('edit');
      new_delete.classList.add('delete');

      new_edit.innerText = "Edit";
      new_delete.innerText = "Delete";

      new_functions.appendChild(new_edit);
      new_functions.appendChild(new_delete);
      new_note.appendChild(new_functions);
      list_notes.appendChild(new_note);
      
      new_functions.addEventListener('click', () =>{
          if(new_edit.innerText == "Edit")
          {
              new_text.removeAttribute( "readonly");
              new_text.focus();
              new_edit.innerText = "Save";
          }
          else
          {
              new_text.setAttribute("readonly", "readonly");
              new_edit.innerText = "Edit";
          }
      })

      new_delete.addEventListener('click', () => {
    list_notes.removeChild(new_note);
  });

      
  })
  return (
      <body>

        <header>
            <h2>Note Taking App</h2>
            <form id="form_note">
                <input type="text" id="text_box" placeholder="Add note here"/>
                <input type="submit" id="submit_box" value="Add note"/>
            </form>
            <h2>Set Box Color :</h2>
            <button id="red_button">Red</button>
            <button id="blue_button">Blue</button>
            <button id="yellow_button">Yellow</button>
            <button id="green_button">Green</button>

        </header>

      <main>

          <section class="note_list">
              
              <div id="notes">
                
              </div>
              
          </section>

      </main>

      <script src="index.js"></script>
      </body>
  );
}

export default App;
