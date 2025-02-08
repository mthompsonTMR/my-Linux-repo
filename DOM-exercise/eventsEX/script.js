//Declare global variables
//Define standalone helper functions(createBox and others)
//add event listeners for user interactions(colorForm, button clicks,keyboard events)
//Place initatlizationlogic 
document.addEventListener('DOMContentLoaded', function() {
  // Get elements from the DOM
  //Match HTML ids & labels
  const boxContainer = document.getElementById('box-container');
  const newBoxButton = document.getElementById('new-box-button');
  const colorForm = document.getElementById('color-form');
  const colorInput = document.getElementById('color-input'); 

  // Variables to store box color and counter for box ID
    let boxColor = '#000';
  let boxCounter = 0;
  // Handle form submission to update the color of all boxes
  colorForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const newColor = colorInput.value.trim();
      if (newColor) {
          boxColor = newColor  
        document.querySelectorAll('.box').forEach(function(box) {
              box.style.backgroundColor = boxColor;
          });
          colorInput.value = ''; // Reset the input value
      } else {
          alert('Please select a valid color!');
      }
  });

  // Function to add a new box
  function createBox() {
      const box = document.createElement('div');
      const boxId = `box-${++boxCounter}`;

      box.className = 'box';
      box.style.backgroundColor = boxColor;
      box.textContent = boxId;
      box.setAttribute('data-id', boxId);

      // Set up event listeners for hover and leave
      box.addEventListener('mouseenter', function(e) {
          const pageX = e.pageX;
          const pageY = e.pageY;
          box.textContent = `X: ${pageX}, Y: ${pageY}`;
      });

      box.addEventListener('mouseleave', function() {
          box.textContent = box.getAttribute('data-id');
      });

      boxContainer.appendChild(box);
  }

  // Add a new box when the button is clicked
  newBoxButton.addEventListener('click', createBox);

  // Remove a box on double-click
  document.addEventListener('dblclick', function(e) {
      if (e.target.classList.contains('box')) {
          e.target.remove();
      }
  });

  // Display a box's page coordinates on mouse over
  document.addEventListener('mouseover', function(e) {
      if (e.target.classList.contains('box')) {
          const pageX = e.pageX;
          const pageY = e.pageY;
          e.target.textContent = `X: ${pageX}, Y: ${pageY}`;
      }
  });

  // Display a box's ID back on mouse out
  document.addEventListener('mouseout', function(e) {
      if (e.target.classList.contains('box')) {
          e.target.textContent = e.target.getAttribute('data-id');
      }
  });

  // Add a new box when the 'N' key is pressed
  document.addEventListener('keydown', function(e) {
      if (e.key.toLowerCase() === 'n' && e.target !== colorInput) {
          createBox();
      }
  });

  // Fix: Apply initial color to existing boxes on DOM load
  document.querySelectorAll('.box').forEach(function(box) {
      box.style.backgroundColor = boxColor;
  });
});
