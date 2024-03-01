import styled from "styled-components";
import Button from "../../components/cores/Button";

function HomePage(){
    return(
        <>
            <h1>
                Home Page 
            </h1>
            <Button 
                text='Button Home'
                page='home'
            />
        </>
    )
}

export default HomePage;