import { useDispatch } from 'react-redux';
import { login } from '../../store/session';

function DemoButton() {
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(login({credential: 'Demo-lition', password: 'password'}))
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <button>DEMO</button>
        </form>
    )
}

export default DemoButton;