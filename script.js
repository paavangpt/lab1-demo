const button = document.getElementById('actionButton');
const message = document.getElementById('message');

// New comment added
let clickCount = 0;

button.addEventListener('click', () => {
  clickCount += 1;

  if (clickCount === 1) {
    message.textContent = 'You clicked the button!';
    button.textContent = 'Click Again';
    return;
  }

  message.textContent = `You clicked the button ${clickCount} times!`;
  button.textContent = clickCount % 2 === 0 ? 'Keep Going' : 'One More';
});
