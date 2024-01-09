import University from "@assets/image/univieristy.png";
import styled from "styled-components";

export default function UnivImgs() {
  return <Image src={University} alt="대학 사진들" />;
}

const Image = styled.img`
  width: 100%;
  height: 26.5rem;
  margin-top: 5.6rem;
`;
