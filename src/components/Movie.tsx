import { styled } from "styled-components";

const MovieWrapper = styled.main`
  width: 90vw;
  height: 100%; //data 늘어나는 것에 따라 자동으로 크고 작아지도록 하고 싶다. 이러면 되나?
  margin: 30px 0 0 140px;

  background-color: blue;
`;

export default function Movie() {
  return <MovieWrapper></MovieWrapper>;
}
