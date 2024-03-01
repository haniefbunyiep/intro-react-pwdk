import styled from "styled-components"

function Button({text, page}){
    const StyledButton = styled.button`
        background-color: ${page === 'home'? 'red':'blue'};
        font-size: 32px;
        color: white;
    `

    return(
            <StyledButton>
                {text}
            </StyledButton>
    )
}

export default Button;