import * as Styled from './styles'

export default function Button({ children }) {
    return(
        <Styled.Button type="button">
            {children}
        </Styled.Button>
    )
}