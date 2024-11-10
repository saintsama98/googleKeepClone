document.getElementById('add-note-btn').addEventListener('click', function() {
    // Get the input values for further operation
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;

      // also we need to ensure that there is content in at least one field among the two
    if (title || content) {
        // Create a new note container
        const noteContainer = document.createElement('div');
        noteContainer.className = 'note';

    // we need to create the title element
        const noteTitle = document.createElement('h3');
        noteTitle.innerText = title;
        noteContainer.appendChild(noteTitle);

                 // we need to create the content element
        const noteContent = document.createElement('p');
        noteContent.innerText = content;
        noteContainer.appendChild(noteContent);

              // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            noteContainer.remove();
        };
        noteContainer.appendChild(deleteButton);

        
        
        // Append the new note to the notes container
        document.getElementById('notes-container').appendChild(noteContainer);

        // Clear the input fields
        document.getElementById('note-title').value = '';
        document.getElementById('note-content').value = '';
    } else {
        alert("Please enter a title or content for the note.");
    }
});


//const noteinputarea= document.getElementsByClassName('note-input-area');
const themeBtn = document.getElementById('theme-adder');
const notesContainer = document.getElementById('notes-container');

// Array of possible background colors (you can add more colors to the list)
const colors = ['#C1E1C1', '#93C572', '#B4C424', '#808000', '#2E8B57', '#4F7942', '#AFE1AF'];


function changeBackgroundColor() {
    // Randomly picks color from array above
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Set the background color of the body (or any other container element)
    notesContainer.style.backgroundColor = randomColor;
}

// Add event listener to the theme button
themeBtn.addEventListener('click', changeBackgroundColor);


//////////////////////////////////////////////////////////////////////////////////////////////

// Get the Sign-in button
const signInButton = document.querySelector('.Sign-in-btn');

// Function to show the sign-in modal
function showSignInModal() {
    // Create a modal container
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    // Create modal content
    const modalContent = `
        <div class="modal-content">
            <h2>Sign In</h2>
            <form id="signInForm">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required>

                <button type="submit">Submit</button>
                <button type="button" id="closeModal">Cancel</button>
            </form>
        </div>
    `;
    
    // Append the modal content to the modal
    modal.innerHTML = modalContent;
    
    // Append the modal to the body
    document.body.appendChild(modal);
    
    // Close the modal when the cancel button is clicked
    const closeModalButton = document.getElementById('closeModal');
    closeModalButton.addEventListener('click', function() {
        modal.remove();  // Remove the modal from the DOM
    });

    // Handle the form submission
    const form = document.getElementById('signInForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from reloading the page

        // Get the values from the input fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;

        // Display the entered data (for demo purposes)
        if (username && password && phone) {
            alert(`You entered:
            Username: ${username}
            Password: ${password}
            Phone Number: ${phone}`);
        } else {
            alert("Please fill in all the fields.");
        }

        // Close the modal after submission
        modal.remove();
    });
}

// Add event listener to the Sign-in button
signInButton.addEventListener('click', showSignInModal);


