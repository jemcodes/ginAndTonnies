import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { getDrinks } from '../../store/drink';
import CreateDrinkPage from '../CreateDrinkPage';
import './DrinkList.css';
import Footer from '../Footer';

function DrinkList() {
    const dispatch = useDispatch();
    // const { id } = useParams();
    const drinkList = useSelector(state => {
        return state.drink.allDrinks
    });
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getDrinks());
    }, [dispatch]);

    if (!sessionUser) {
        return (
            <Redirect to="/" />
        )
    }

    if (drinkList.length === 0) {
        return (
            <h1>No drinks found!</h1>
        );
    }

    return (
        <div>
        <div id="drink-list-container">
            <ul>
                <div className="drink-profile-container">
                    <h1>Top Rated Cocktails</h1>
                    <p>Seven and seven gordon's mimosa hairy jack rose. Sea breeze wolfschmitt caridan balblair french 75, aberfeldy old mr. boston paradise cragganmore cointreau fleischmann's pulteney. Benromach piña colada matador, gilbey's tullibardine sundowner lejon montgomery polmos krakow stolichnaya vesper fish house punch piscola sidecar glenlossie, tanqueray salty dog. Caipiroska tennessee cowboy pisco sour glenmorangie johnny walker red. Pisco sour piscola polmos krakow aberlour, glenturret wolfram glenfarclas. French 75: hurricane whiskey sour vodka sunrise link up caribou lou.</p>
                    {drinkList.map((drink) => (
                        <li key={drink.id} id="drink-profile">
                        <div className="drink-img-container">
                            <img alt={`${drink.title}`} src={drink.drinkImg} id="drink-profile-img"/>
                        </div>
                            <div className="drink-profile-content">
                                <NavLink className="drink-title-text"
                                    to={`/drinks/${drink.id}`}>{drink.title}
                                </NavLink>
                                <p>{drink.content}</p>
                                <div className="drink-profile-details">
                                    <NavLink to={`/drinks/${drink.id}`}>
                                        <button className="drink-detail-button" type="button">
                                            Learn More
                                        </button>
                                    </NavLink>
                                    {/* <NavLink to={`/drinks/${drink.id}/reviews`}>
                                        <button className="drink-detail-button" type="button">
                                            See Reviews
                                        </button>
                                    </NavLink> */}
                                </div>
                            </div>
                    </li>)
                    )}
                </div>
            </ul>
            <div>
                <CreateDrinkPage />
            </div>
        </div>
        <Footer />
        </div>
    )
    
};

export default DrinkList;