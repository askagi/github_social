import { useLocalStorage } from 'react-use';
export function useStoresProvider() {
    const [userData, setUserData, removerUserData] = useLocalStorage('userData@githubSocial-1.0');

    return {
        userData,
        setUserData,
        removerUserData
    }

}