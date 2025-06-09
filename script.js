function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message === "") return;

  addMessage("user", message);
  input.value = "";

  // Simulate bot response
  setTimeout(() => {
    addMessage("bot", generateBotReply(message));
  }, 500);
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotReply(userMessage) {
  // Replace this with actual AI logic or API call
  const responses = [
    "Interesting!",
    "Tell me more.",
    "I'm not sure, can you elaborate?",
    "That's great!",
    "Hmm, let's think about that.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
