import styled from "styled-components";

function Container() {
  return (
    <>
      {/* <h1>Hello react</h1> */}
      <Header>
        <h1>hello</h1>
        <p>akfnslkdfn</p>
      </Header>
    </>
  );
}

const Header = styled.h1`
  font-size: 3rem;
  color: green;
`;

export default Container;
