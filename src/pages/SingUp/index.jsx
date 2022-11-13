import { Footer } from "../../components/Footer";
import { CardInfo } from "../../components/CardInfo";
import { CardSignUp, Container, LinkSignIn, Row } from "./styles";

export function SignUp() {
    return (
        <Container>
            <Row>
                <CardInfo />
                <CardSignUp>
                    <header>
                        <span>Acesse o <b>login</b> com seu usuário do Github</span>
                    </header>
                    <form>
                        <input type="text" placeholder="Digite seu e-mail" />
                        <input type="text" placeholder="Digite sua senha" />
                        <input type="text" placeholder="Repita sua senha" />
                        <input type="text" placeholder="Usuário github" />
                        <input type="text" placeholder="Apelido" />
                        <button type="submit">Cadastrar</button>
                    </form>
                    <LinkSignIn to='/'>
                        Já tenho uma conta
                    </LinkSignIn>
                </CardSignUp>
            </Row>
            <Footer />
        </Container>
    )
}
