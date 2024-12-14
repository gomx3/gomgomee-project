import styled from "styled-components";
import useAuthStore from "../../store/authStore";
import musicItems from "../../constants/musicItems";
import MusicItem from "./MusicItem";
import { useRef } from "react";

const MusicBox = () => {
  const { isVerified } = useAuthStore();
  const listRef = useRef(null);

  const handleDragStart = (e) => {
    e.preventDefault();
    listRef.current.isDragging = true;
    listRef.current.startX = e.pageX - listRef.current.offsetLeft;
    listRef.current.scrollLeft = listRef.current.scrollLeft;
  };

  const handleDragMove = (e) => {
    if (!listRef.current.isDragging) return;
    const x = e.pageX - listRef.current.offsetLeft;
    const walk = (x - listRef.current.startX) * 2; // 드래그 속도 조정
    listRef.current.scrollLeft -= walk;
  };

  const handleDrapStop = () => {
    listRef.current.isDragging = false;
  };

  return (
    <MusicContainer>
      {!isVerified ? (
        <p style={{ display: "flex", justifyContent: "center" }}> ⋆⁺₊❅.</p>
      ) : (
        <ListWrapper
          ref={listRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDrapStop}
          onMouseLeave={handleDrapStop}
        >
          {musicItems.map((item) => (
            <MusicItem key={item.id} {...item} />
          ))}
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
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  touch-action: pan-x;
  scroll-behavior: smooth;

  scroll-snap-type: x mandatory; /* 가로 방향 강제 스냅 스크롤 */
`;
