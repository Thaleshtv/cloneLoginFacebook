import AboutGroup from "../../molecules/AboutGroup";
import LoginGroup from "../../molecules/LoginGroup";
import * as Styled from './styles'

export default function PrincipalPage() {
    return(
        <Styled.Container>
            <Styled.Content>
                <AboutGroup />
                <LoginGroup />
            </Styled.Content>
        </Styled.Container>
    )
}