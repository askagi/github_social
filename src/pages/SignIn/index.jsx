import { useForm } from "react-hook-form";
import { api } from "../../services/axios";
import { CardInfo } from "../../components/CardInfo";
import { Footer } from "../../components/Footer";
import { CardSignIn, Container, LinkSignUp, Row } from "./styles";
import { useStores } from '../../hooks/useStores';
import { useNavigate } from 'react-router-dom'

export function SignIn() {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { setUserData } = useStores()

    async function login(data) {
        const users = await (await api.get('/users')).data;

        const user = users.find(user => {
            if (user.email === data.email && user.password === data.password) {
                console.log('Sucesso!');

                setUserData({
                    id: user.id,
                    email: user.email,
                    githubUser: user.githubUser,
                    nickname: user.nickname,
                });
                navigate('/main')
                return true;
            } else {
                return false
            }
        })

        console.log(user);

    }

    return (
        <Container>
            <Row>
                <CardInfo />
                <CardSignIn>
                    <header>
                        <span>Acesse o <b>login</b> com seu usuário do Github</span>
                    </header>
                    <form onSubmit={handleSubmit(login)}>
                        <input
                            type="text"
                            placeholder="Digite seu e-mail"
                            {...register('email')} />
                        <input
                            type="text"
                            placeholder="Digite sua senha"
                            {...register('password')} />
                        <a href="#">esqueceu a senha ?</a>
                        <button type="submit">Login</button>
                    </form>
                    <LinkSignUp to='/sign-up'>
                        Criar uma conta
                    </LinkSignUp>
                </CardSignIn>
            </Row>
            <Footer />
        </Container>

    )
}
