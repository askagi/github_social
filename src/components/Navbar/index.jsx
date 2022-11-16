import { useNavigate } from "react-router-dom";
import { useStores } from "../../hooks/useStores";
import { Container, LinkExitApp } from "./styles";

export function Navbar() {
    const { removerUserData } = useStores();
    const navigate = useNavigate()

    function handleExitApp() {
        removerUserData();
        navigate('/')
    }
    return (
        <Container>
            <nav>
                <ul>
                    <li>Logo</li>
                    <li>Início</li>
                    <li>Pull Requests</li>
                    <li>Issues</li>
                    <li>Marketplace</li>
                    <li>Expore</li>
                </ul>

                <ul>
                    <li>
                        <LinkExitApp onClick={handleExitApp}>Sair</LinkExitApp>
                    </li>
                    <li>
                        <input type="search" />
                    </li>
                </ul>
            </nav>
        </Container>
    )
}