import styled from "styled-components"
import FrontCard from "./FrontCardImg";
import BackCard from "./BackCardImg";

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
`

function CardLayout() {

    return (
      <ImgContainer>
        <FrontCard/>
        <BackCard />
      </ImgContainer>
    );
}

export default CardLayout
