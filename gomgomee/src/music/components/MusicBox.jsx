import styled from "styled-components";
import useAuthStore from "../../store/authStore";
import musicItems from "../../constants/musicItems";
import MusicItem from "./MusicItem";

const MusicBox = () => {
  const { isVerified } = useAuthStore();

  return (
    <MusicContainer>
      {!isVerified ? (
        <p style={{ display: "flex", justifyContent: "center" }}> ⋆⁺₊❅.</p>
      ) : (
        <ListWrapper>
          {musicItems.map((item) => {
            return <MusicItem key={item.id} {...item} />;
          })}
        </ListWrapper>
      )}
    </MusicContainer>
  );
};

export default MusicBox;

const MusicContainer = styled.div`
  position: fixed;
  top: 73%;
  left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #ccc;
  width: 400px;
  height: 100px;

  overflow-x: auto;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
