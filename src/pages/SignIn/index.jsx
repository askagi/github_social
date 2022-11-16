import { useForm } from "react-hook-form";
import { api } from "../../services/axios";
import { CardInfo } from "../../components/CardInfo";
import { Footer } from "../../components/Footer";
import { CardSignIn, Container, LinkSignUp, Row, ErrorMessage } from "./styles";
import { useStores } from '../../hooks/useStores';
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { pt } from 'yup-locales';
import { useEffect, useState } from "react";
yup.setLocale(pt)
/*asdfasdf*/

export function SignIn() {
    const schemaSignIn = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required()
    }).required()

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schemaSignIn)
    });
    const { setUserData, userData } = useStores()
    const [authenticationError, setAuthenticationError] = useState(false)

    async function login(data) {
        const users = await (await api.get('/users')).data;

        const user = users.find(user => {
            if (user.email === data.email && user.password === data.password) {
                console.log('Sucesso!');
                const { password, ...userRest } = user;
                setUserData(userRest)
                navigate('/main')
                setAuthenticationError(false)
                return true;
            } else {
                return false
            }
        })

        if (!user) {
            setAuthenticationError(true)
        }
    }

    useEffect(() => {
        if (userData) {
            navigate('/main')
        }
    }, [])
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
                            type="password"
                            placeholder="Digite sua senha"
                            {...register('password')} />

                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                        {authenticationError && <ErrorMessage>E-mail ou Senha incorretos!</ErrorMessage>}

                        <a href="#">esqueceu a senha ?</a>
                        <button
                            type="submit"
                            disabled={isSubmitting}>
                            Login
                        </button>
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
