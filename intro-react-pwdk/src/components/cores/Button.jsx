import styled from "styled-components";

function Button(props) {
  const StyledButton = styled.button`
    background-color: grey;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  `;

  return (
    <>
      <StyledButton>{props.txt}</StyledButton>
    </>
  );
}

export default Button;
