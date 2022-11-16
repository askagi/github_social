import { useForm } from "react-hook-form";
import { api } from "../../services/axios";
import { CardInfo } from "../../components/CardInfo";
import { Footer } from "../../components/Footer";
import { CardSignUp, Container, LinkSignIn, Row } from "./styles";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

export function SignUp() {

    const navegate = useNavigate()
    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
        githubUser: yup.string().required(),
    }).required()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    async function createUser(data) {
        const user = {
            email: data.email,
            password: data.password,
            githubUser: data.githubUser,
            nickname: data.nickname
        }
        console.log(user)

        const users = await (await api.get('/users')).data;
        console.log(users);
        const userAlreadyExists = users.find(dbUser => dbUser.email === user.email)

        if (userAlreadyExists) {
            alert("Já existe um cadastro com este email!")
            return;
        }
        await api.post('/users', user);
        navegate('/sign-in');
    }
    return (
        <Container>
            <Row>
                <CardInfo />
                <CardSignUp>
                    <header>
                        <span>Acesse o <b>login</b> com seu usuário do Github</span>
                    </header>
                    <form onSubmit={handleSubmit(createUser)}>
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            {...register('email')}
                        />
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            {...register('password')}
                        />
                        <input
                            type="password"
                            placeholder="Repita sua senha"
                            {...register('passwordConfirm')}
                        />

                        <input
                            type="text"
                            placeholder="Usuário github"
                            {...register('githubUser')} />
                        <input
                            type="text"
                            placeholder="Apelido"
                            {...register('nickname')} />

                        <button type="submit">Cadastrar</button>
                    </form>
                    <LinkSignIn to='/'>
                        Já tenho uma conta
                    </LinkSignIn>
                </CardSignUp>
            </Row>
            <Footer />
        </Container >
    )
}
