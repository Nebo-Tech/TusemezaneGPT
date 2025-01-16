const messagesDiv = document.getElementById('messages');

function sendMessage() {
  const userInput = document.getElementById('userInput');
  const userMessage = userInput.value.trim();

  if (userMessage) {
    addMessage('user', userMessage);
    userInput.value = '';

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(userMessage);
      addMessage('bot', botResponse);
    }, 1000);
  }
}

function addMessage(sender, text) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);

  const messageText = document.createElement('div');
  messageText.classList.add('message-text');
  messageText.textContent = text;

  messageDiv.appendChild(messageText);
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function generateBotResponse(userMessage) {
  // Example bot response logic
  if (userMessage.toLowerCase().includes('habari')) {
    return 'Habari! Unahitaji msaada gani leo?';
  }
  return 'Samahani, bado nipo kwenye mafunzo! Tafadhali jaribu tena.';
}
