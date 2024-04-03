import {
  MessageFormContainer,
  SendButton,
  TextInput,
  UserSelect,
} from "./StyledMessageForm";

function MessageForm(props) {
  return (
    // desafio: com a tag form é possível fazer o envio da mensagem com o botão "enter"
    <MessageFormContainer>
      <UserSelect
        type="text"
        onChange={props.onChangeUser}
        value={props.userValue}
      >
        <option>Eu</option>
        <option>Turma</option>
      </UserSelect>

      <TextInput
        type="text"
        placeholder="Mensagem"
        onChange={props.onChangeText}
        value={props.textValue}
      />
      <SendButton onClick={props.onSendMessage}> Enviar</SendButton>
    </MessageFormContainer>
  );
}

export default MessageForm;
