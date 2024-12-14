import styled from "styled-components";
import useAuthStore from "../../store/authStore";
import musicItems from "../../constants/musicItems";
import MusicItem from "./MusicItem";
import { useRef } from "react";
import { useState } from "react";

const MusicBox = () => {
  const { isVerified } = useAuthStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef(null);

  const scrollToItem = (index) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const itemWidth = wrapper.children[0].offsetWidth + 20; // 아이템 폭 + margin
    const scrollPosition = index * itemWidth;
    wrapper.scrollTo({ left: scrollPosition, behavior: "smooth" });
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < musicItems.length - 1) {
      scrollToItem(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToItem(currentIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    wrapperRef.current.startX = e.touches[0].pageX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].pageX;
    const diff = wrapperRef.current.startX - endX;

    if (diff > 50) {
      // 오른쪽으로 스와이프
      handleNext();
    } else if (diff < -50) {
      // 왼쪽으로 스와이프
      handlePrev();
    }
  };

  return (
    <MusicContainer>
      {!isVerified ? (
        <p style={{ display: "flex", justifyContent: "center" }}> ⋆⁺₊❅.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button onClick={handlePrev}>Prev</button>
          <ListWrapper
            ref={wrapperRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {musicItems.map((item) => (
              <MusicItem key={item.id} {...item} />
            ))}
          </ListWrapper>
          <button onClick={handleNext}>Next</button>
        </div>
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
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto; /* 가로 스크롤 활성화 */
  scroll-behavior: smooth; /* 부드러운 스크롤 */
  scroll-snap-type: x mandatory; /* 스냅 스크롤 활성화 (가로 방향) */
  -ms-overflow-style: none; /* Internet Explorer에서 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari에서 스크롤바 숨기기 */
  }
`;
