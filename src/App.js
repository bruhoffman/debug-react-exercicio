import { useState } from "react";

import MessageForm from "./components/MessageForm";
import Message from "./components/Message";
import { AppContainer, MessagesContainer } from "./AppStyled";
import GlobalStyle from "./GlobalStyle";

function App() {
  const [userValue, setUserValue] = useState("Eu");
  const [textValue, setTextValue] = useState("");
  const [messages, setMessages] = useState([]);

  const onChangeUser = (event) => {
    setUserValue(event.target.value);
  };

  const onChangeText = (event) => {
    setTextValue(event.target.value);
  };

  const onSendMessage = (event) => {
    event.preventDefault();
    const message = {
      user: userValue,
      text: textValue,
    };

    setTextValue("");
    addMessage(message);
  };

  const addMessage = (message) => {
    const newListMessage = [...messages, message];
    setMessages(newListMessage);
  };

  const deleteMessage = (message) => {
    const filterResult = messages.filter((msg) => msg !== message);
    setMessages(filterResult);
  };

  const resultMessageMapping = messages.map((message, index) => (
    <Message deleteMessage={deleteMessage} message={message} key={index} />
  ));

  return (
    <AppContainer>
      <GlobalStyle />
      <MessagesContainer>{resultMessageMapping}</MessagesContainer>
      <MessageForm
        userValue={userValue}
        onChangeUser={onChangeUser}
        textValue={textValue}
        onChangeText={onChangeText}
        onSendMessage={onSendMessage}
      />
    </AppContainer>
  );
}
export default App;
