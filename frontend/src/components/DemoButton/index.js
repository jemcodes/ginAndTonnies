import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';
import './DemoButton.css';

function DemoButton() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        return (
            dispatch(login({credential: 'Demo-lition', password: 'password'})),
            history.push(`/drinks/`)
        )
    }
    
    return (
        <section className="demo-row">
            <form onSubmit={handleSubmit} >
                    <button type="submit">DEMO LOGIN</button>
            </form>
        </section>
        
    )
}

export default DemoButton;