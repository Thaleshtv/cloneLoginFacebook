import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

import * as Styled from './styles'



export default function LoginGroup() {
    return (
        <Styled.Container>
            <Styled.Content>
                <Input placeholder='Email ou senha' />
                <Input placeholder='Senha' />

                <Button>Entrar</Button>
                <p><a href="#">Esqueceu a senha?</a></p>
                <hr />

                <button className="green">
                    Criar nova conta
                </button>
            </Styled.Content>
            <p><a href="#">Criar uma pagina</a> para uma celebridade, banda ou empresa</p>
        </Styled.Container>
    )
}