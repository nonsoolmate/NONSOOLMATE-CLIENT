import HomeTestSet from "@assets/image/homeTestSet.png";
import styled from "styled-components";

export default function HomeImg() {
  return <Image src={HomeTestSet} alt="메인홈사진" />;
}

const Image = styled.img`
  width: 87.9rem;
  height: 33.4rem;
`;
