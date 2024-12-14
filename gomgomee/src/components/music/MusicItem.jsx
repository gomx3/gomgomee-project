import styled from "styled-components";

const MusicItem = ({ title, singer, img }) => {
  return (
    <MusicWrapper>
      <img src={img} width="85px" height="85px" alt={`${title} 앨범 이미지`} />
      <div style={{ display: "flex", flexDirection: "column", margin: "10px" }}>
        <DetailBox>
          <span style={{ fontWeight: "500" }}>{title}</span> - {singer}
        </DetailBox>
      </div>
    </MusicWrapper>
  );
};

export default MusicItem;

const MusicWrapper = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 500px;
  scroll-snap-align: start; /* 부모의 시작점에 맞추어 스냅 */
`;
const DetailBox = styled.div`
  width: 295px;
  font-size: 0.9rem;
  font-weight: 100;
`;
