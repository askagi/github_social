import { useStores } from "../../hooks/useStores";
import { Outlet } from "react-router-dom";
import { Container } from "./styles";
import { Navbar } from "../../components/Navbar";

export function DefaultLayout() {
    const { userData } = useStores()
    return (
        <div>
            {userData && <Navbar />}
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}