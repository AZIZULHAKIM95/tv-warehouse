import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const useUser = () => {
    const [user] = useAuthState(auth);
    return [user]
}
export default useUser;