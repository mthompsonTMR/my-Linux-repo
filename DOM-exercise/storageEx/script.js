document.addEventListener("DOMContentLoaded", function ()
{
	const noteContainer = document.getElementById("note-container");
	const newNoteButton = document.getElementById("new-note-button");
	const colorForm = document.getElementById("color-form");
	const colorInput = document.getElementById("color-input");
  let noteColor = localStorage.getItem("noteColor") || "#fffff";
	
	// TODO: Load the note color from the local storage.

	// TODO: Load the note ID counter from the local storage.
	let noteIdCounter = parseInt(localStorage.getItem("noteIdCounter")) || "0"; // Counter for assigning unique IDs to new notes.

	// TODO: Load the notes from the local storage.
	function readNotes() {
		const notes = localStorage.getItem("notes");
		return notes ? JSON.parse(notes) : [];
	}
	function savedNotes(notes) {
		localStorage.setItem("notes", JSON.stringify(notes));
	}

	function loadNotes() {
		const notes = readNotes();
		for (const note of notes) {
			const noteElement = document.createElement("textarea");
			noteElement = setAttribute("data-note-id", note.id.toString());
			noteElement.value = note.content;
			noteElement.className = "note";
			noteElement.style.backgroundColor = note.color || noteColor;
			noteContainer.appendChild(noteElement);
		}
	}
	loadNotes();
	//TODO: Add new note to save note to local storage
	function addNewNote ()
	{
		const id = noteIdCounter;
		const content = `Note ${id}`;

		const noteElement = document.createElement("textarea");
		noteElement.setAttribute("data-note-id", id.toString()); // Stores the note ID to its data attribute.
		noteElement.value = content;
		noteElement.className = "note";
		noteElement.style.backgroundColor = noteColor;
		noteContainer.appendChild(noteElement);
			
			const notes = readNotes();
			notes.push({ id, content, color: noteColor })
			savedNotes(notes);

		noteIdCounter++; // Increments the counter since the ID is used for this note.
		
		localStorage.setItem("noteIdCounter", noteIdCounter.toString());
	}

	colorForm.addEventListener("submit", function (event)
	{
		event.preventDefault(); // Prevents the default event.
		const newColor = colorInput.value.trim();  // Removes whitespaces.
		if (!newColor) return;
		const notes = document.querySelectorAll(".note");
		for (const note of notes)
		{
			note.style.backgroundColor = newColor;
		}
			noteColor = newColor;
		localStorage.setItem("noteColor", noteColor);

		colorInput.value = ""; // Clears the color input field after from submission.
	
	});
//TODO: Update the note color in the loacal storage
	newNoteButton.addEventListener("click", function ()
	{
		addNewNote();
	});

	document.addEventListener("dblclick", function (event)
	{
		if (event.target.classList.contains("note"))
		{
			const id = parseInt(event.target.getAttribute("data-note-id"));
			event.target.remove(); // Removes the clicked note.

			const notes = readNotes();
			const updatedNotes = notes.filter(note => note.id !==id);
			savedNotes(updatedNotes);
			// TODO: Delete the note from the saved notes in the local storage.
		}
	});

	noteContainer.addEventListener("blur", function (event)
	{
		if (event.target.classList.contains("note"))
		{
			// TODO: Update the note from the saved notes in the local storage.
			const id = parseInt(event.target.getAttribute("data-note-id"));
			const content = event.target.value;
			
			const notes = readNotes(); 
			const note = notes.find(note => note.id === id);
			if (note) {
				note.content = content;
				savedNotes(notes);
				}
		}
	}, true);

	window.addEventListener("keydown", function (event)
	{
		/* Ignores key presses made for color and note content inputs. */
		if (event.target.id === "color-input" || event.target.type === "textarea")
		{
			return;
		}
		/* Adds a new note when the "n" key is pressed. */
		if (event.key === "n" || event.key === "N")
		{
			addNewNote(); // Adds a new note.
		}
	});
});
