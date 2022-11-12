import { Footer } from "../../components/Footer";
import { CardInfo } from "../../components/CardInfo";
import { CardSignIn, Container, Row } from "./styles";

export function SignIn() {
    return (
        <div>
            <Container>
                <Row>
                    <CardInfo />
                    <CardSignIn>
                        <header>
                            <span>Acesse o <b>login</b> com seu usuário do Github</span>
                        </header>
                        <form>
                            <input type="text" placeholder="Digite seu e-mail" />
                            <input type="text" placeholder="Digite sua senha" />
                            <a href="#">esqueceu a senha ?</a>
                            <button type="submit">Login</button>
                        </form>
                    </CardSignIn>
                </Row>
                <Footer />
            </Container>

        </div>
    )
}
