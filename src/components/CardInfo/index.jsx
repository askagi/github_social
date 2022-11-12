import { Container } from "./styles";
import figure from '../../assets/figure.svg'
export function CardInfo() {
    return (
        <Container>
            <img src={figure} alt="figura de um boneco usando o computador" />
            <span><b>Siga</b> amigos e outros devs do seu interesse usando o botão seguir </span>
            <span><b>Conheça</b> novos devs e repositórios através da aba explorar</span>
            <span><b>Compartilhe</b> ideias e soluções em um só lugar</span>
        </Container>
    )
}