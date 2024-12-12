import styled from "styled-components";
import useAuthStore from "../../store/authStore";

const UserBox = () => {
  const { email, logout } = useAuthStore();
  const nameFromEmail = email.substring(0, email.indexOf("@"));

  return (
    <UserContainer>
      <h2 style={{ fontWeight: "lighter" }}>{nameFromEmail}님, 안녕하세요</h2>
      <LogoutBtn onClick={() => logout()}>로그아웃</LogoutBtn>
    </UserContainer>
  );
};

export default UserBox;

const UserContainer = styled.div`
  position: fixed;
  top: 300px;
  left: 400px;
  background-color: #7e9040;
  width: 400px;
  height: 280px;
`;
const LogoutBtn = styled.button`
  margin: 3px;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;
