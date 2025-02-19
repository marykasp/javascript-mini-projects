const chatBody = document.querySelector(".chat-body");
const messsageInput = document.querySelector(".message-input");
const sendMessageBtn = document.querySelector("#send-message");

// Create message element with dynamic classes (user or bot) and return it
const createMessageElement = (content, classes) => {
  const div = document.createElement("div");
  div.classList.add("message", classes);
  div.innerHTML = content;
  return div;
};

// Add user message to the outgoing list
const handleOutgoingMessage = (userMessage) => {
  const messageContent = `<div class="message-text">${userMessage}</div>`;
  // create a new message element with user message content
  const outgoingMessageDiv = createMessageElement(
    messageContent,
    "user-message",
  );

  // append outgoing message to chat body element
  chatBody.appendChild(outgoingMessageDiv);
};

// handle Enter key press for sending message
messsageInput.addEventListener("keydown", (e) => {
  const userMessage = e.target.value.trim();
  if (e.key === "Enter" && userMessage) {
    console.log(userMessage);
    handleOutgoingMessage(userMessage);
  }
});

// get message input value when send message button clicked
sendMessageBtn.addEventListener("click", () => {
  const message = messsageInput.value;
  console.log(message);
});
