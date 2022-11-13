import { useForm } from "react-hook-form";
import { CardInfo } from "../../components/CardInfo";
import { Footer } from "../../components/Footer";
import { CardSignUp, Container, LinkSignIn, Row } from "./styles";

export function SignUp() {

    const { register, handleSubmit } = useForm()


    return (
        <Container>
            <Row>
                <CardInfo />
                <CardSignUp>
                    <header>
                        <span>Acesse o <b>login</b> com seu usuário do Github</span>
                    </header>
                    <form onSubmit={handleSubmit((data) => console.log(data))}>
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            {...register('email')}
                        />
                        {/* {errors.email && <span>Error no email</span>} */}
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
