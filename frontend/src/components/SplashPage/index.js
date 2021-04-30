import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SplashPage.css'
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';
import DemoButton from '../DemoButton';
import Footer from '../Footer';


function SplashPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        // splass-wrapper begins
        <div className="splash-wrapper">
            <section className="top-container">
                <div className="showcase">
                    <img className="logo-banner" alt={"Colorful cocktail display"} src={process.env.PUBLIC_URL + './images/gandtthin2.png'} />
                    <div className="button-container">
                    <button id="log-in-button" onClick={() => setShowModal(true)}>SIGN IN</button>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <LoginForm />
                        </Modal>
                    )}
                    <NavLink to="/signup">
                        <button type="button" id="sign-up-button">
                            CREATE AN ACCOUNT
                            </button>
                    </NavLink>
                    {/* <button id="log-in-button" type="button">Sign In</button> */}
                    {/* <button  type="button">Create An Account</button> */}
                    {/* <a target="_blank" href="#">Read More</a> */}
                    </div>
                </div>
                {/* <div className={"top-box top-box-a"}>
                    <h4>Membership</h4>
                    <p className="price">$199/mo</p>
                    <a target="_blank" href="#">Buy Now</a>
                </div>
                <div className={"top-box top-box-b"}>
                    <h4>Pro Membership</h4>
                    <p className="price">$199/mo</p>
                    <a target="_blank" href="#">Buy Now</a>
                </div> */}
            </section>
                <div className='box'>
                    <DemoButton />
                </div>
            <section className="feature-row-container">
                <div className="feature-card">
                    <img className="drinks-header-1" alt={"Colorful cocktail display"} src={process.env.PUBLIC_URL + './images/drinksheader1.png'} />
                    <div>
                        <h2>RATE YOUR FAVORITE COCKTAILS</h2>
                        <p>{"Bacardi white horse: savoy affair bearded lady agent orange!"}</p>
                    </div>
                </div>
                <div className="feature-card">
                    <img className="drinks-header-2" alt={"Colorful cocktail display"} src={process.env.PUBLIC_URL + './images/drinksheader2.png'} />
                    <div>
                        <h2>CRAFT & SHARE NEW DRINKS!</h2>
                        <p>{"Lorraine blue lagoon: imperial black russian smoky martini."}</p>
                    </div>
                </div>
            </section>
            <section className="info">
                <div className="more-info">
                {/* <img alt={"Colorful cocktail display"} src={'https://images.unsplash.com/photo-1502819126416-d387f86d47a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80'} /> */}
                    <div className="more-info-text">
                        <h1>{"Explore popular cocktails."}</h1>
                        <h2>{`Liquor ipsum dolor sit amet bailey's irish cream moonwalk; the macallan glenlivet. Cuba libre, hi-fi rusty nail. Auchroisk ruby dutchess mudslide dark and stormy brave bull paddy. Bruichladdich piña colada wolfram glenmorangie jack and coke harper's dalmore joker ballantine planter's punch. Agua de valencia corn n' oil link up glendronach auchentoshan glenfarclas glenfarclas glen scotia caol ila, old mr. boston. Aberlour, french 75, jim beam hanky-panky hanky-panky seven and seven royal widow leite de onça sloe gin? Zombie blue blazer hurricane mickey slim aberlour pimm's cup vodka martini red lotus flirtini two fingers bacardi pink gin cape cod. Glen garioch irish coffee, "tom and jerry." Churchill jack and coke dewar's scotch whisky haig & haig "pinch" savoy corpse reviver.`}</h2>
                        {/* <a target="_blank" href="#">Buy Now</a> */}
                    </div>
                </div>
            </section>
            {/* <section className="secondary-feature-row">
                <div className="secondary-feature-heading">
                    <h1>Other Great Features</h1>
                </div>
                <div className="feature-box">
                    <h2>📔</h2>
                    <h3>{"UPDATED MENUS"}</h3>
                    <h4>{"Follow Verified Venues to get live tap list updates."}</h4>
                </div>
                <div className="feature-box">
                    <h2>✅</h2>
                    <h3>{"RECOMMENDATIONS"}</h3>
                    <h4>{"Discover new beers locally we think you’ll like."}</h4>
                </div>
                <div className="feature-box">
                    
                    <h2>📆</h2>
                    <h3>{"LOCAL EVENTS"}</h3>
                    <h4>{"Stay up-to-date with venue and brewery events alerts."}</h4>
                </div>
            </section> */}
            {/* splash-wrapper ends */}
            <Footer />
        </div>
    )
}
export default SplashPage;