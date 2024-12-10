import styled from "styled-components";

const UserBox = () => {
  return (
    <UserConatiner>
    
      <h3 style={{ color: "white" }}>gom?</h3>
      <InputBox placeholder="id"/>
      <InputBox placeholder="pw"/>
    </UserConatiner>
  );
};

export default UserBox;

const UserConatiner = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #7e9040;
  width: 400px;
  height: 280px;
`;
const InputBox = styled.input`
  margin: 3px;
  padding: 5px;
  border: none;
`