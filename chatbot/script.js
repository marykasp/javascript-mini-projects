const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessageBtn = document.querySelector("#send-message");

// create a user message object to store values
const userData = {
  message: null,
};

// Create message element with dynamic classes (user or bot) and return it
const createMessageElement = (content, classes) => {
  const div = document.createElement("div");
  div.classList.add("message", classes);
  div.innerHTML = content;
  return div;
};

// Add user message to the outgoing list
const handleOutgoingMessage = (event) => {
  event.preventDefault();
  userData.message = messageInput.value.trim();

  const messageContent = `<div class="message-text">${userData.message}</div>`;
  // create a new message element with user message content
  const outgoingMessageDiv = createMessageElement(
    messageContent,
    "user-message",
  );

  // append outgoing message to chat body element
  chatBody.appendChild(outgoingMessageDiv);
};

// handle Enter key press for sending message
messageInput.addEventListener("keydown", (e) => {
  const userMessage = e.target.value.trim();
  if (e.key === "Enter" && userMessage) {
    console.log(userMessage);
    handleOutgoingMessage(e);
  }
});

// get message input value when send message button clicked
sendMessageBtn.addEventListener("click", (event) => {
  console.log(event);
  handleOutgoingMessage(event);
});
