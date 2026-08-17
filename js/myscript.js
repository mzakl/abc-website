// function displayMessage() {
//   document.getElementById('message-box').innerHTML += 'Hello GitHub!<br/>';
// }

const messageBox = document.getElementById('message-box');

function displayMessage() {
  let newParagraph = document.createElement('p');
  newParagraph.textContent = 'Hello GitHub!';
  messageBox.appendChild(newParagraph);
}
