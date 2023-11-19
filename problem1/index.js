window.addEventListener('load', ()=> {
    const { fromEvent } = rxjs;
    const form_note = document.getElementById('form_note');
    const text_box = document.getElementById('text_box');
    const list_notes = document.getElementById('notes');
    const red_button = document.getElementById('red_button');
    const blue_button = document.getElementById('blue_button');
    const yellow_button = document.getElementById('yellow_button');
    const green_button = document.getElementById('green_button');

    function switchColor(color) {
        const notes = document.getElementsByClassName('note');
        const text = document.getElementsByClassName('text');
        for (let i = 0; i < notes.length; i++) {
            notes[i].style.backgroundColor = color;
            text[i].style.backgroundColor = color;
        }
    }

    // Create observables and subscribe to them
    fromEvent(red_button, 'click')
        .subscribe(() => switchColor('red'));

    fromEvent(blue_button, 'click')
        .subscribe(() => switchColor('orange'));

    fromEvent(yellow_button, 'click')
        .subscribe(() => switchColor('yellow'));

    fromEvent(green_button, 'click')
        .subscribe(() => switchColor('green'));
    

    //create observable
    const formSubmit$ = fromEvent(form_note, 'submit');

    // subscribe to observable
    formSubmit$.subscribe((e) => {
        e.preventDefault();

        const note = text_box.value;

        const new_note = document.createElement('div');
        new_note.classList.add('note');

        const new_words = document.createElement('div');
        new_words.classList.add('words');
        new_note.appendChild(new_words);

        const new_text = document.createElement('input');
        new_text.classList.add('text');
        new_text.type = 'text';
        new_text.value = note;
        new_text.setAttribute('readonly', 'readonly');

        new_words.appendChild(new_text);

        const new_functions = document.createElement('div');
        new_functions.classList.add('functions');

        const new_edit = document.createElement('button');
        const new_delete = document.createElement('button');

        new_edit.classList.add('edit');
        new_delete.classList.add('delete');

        new_edit.innerText = 'Edit';
        new_delete.innerText = 'Delete';

        new_functions.appendChild(new_edit);
        new_functions.appendChild(new_delete);
        new_note.appendChild(new_functions);
        list_notes.appendChild(new_note);
        
        // Create observables and subscribe to them
        fromEvent(new_functions, 'click')
            .subscribe(() => {
                if (new_edit.innerText == 'Edit') {
                    new_text.removeAttribute('readonly');
                    new_text.focus();
                    new_edit.innerText = 'Save';
                } else {
                    new_text.setAttribute('readonly', 'readonly');
                    new_edit.innerText = 'Edit';
                }
            });
        // Create observables and subscribe to them
        fromEvent(new_delete, 'click')
            .subscribe(() => {
                list_notes.removeChild(new_note);
            });
    });


});