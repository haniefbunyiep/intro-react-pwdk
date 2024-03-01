import styled from "styled-components";

function Button() {
  const StyledButton = styled.button`
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  `;

  return (
    <>
      <StyledButton>Test</StyledButton>
    </>
  );
}

export default Button;
