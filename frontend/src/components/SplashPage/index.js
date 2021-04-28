import { Link } from 'react-router-dom';
import './SplashPage.css'
import DemoButton from '../DemoButton';


function SplashPage() {
    return (
        // splass-wrapper begins
        <div className="splash-wrapper">
            <section className="top-container">
                {/* <header className="showcase">
                    <h1>gin & tonnies</h1>
                    <p>lorem ipsum text</p>
                </header> */}
                <div className="splash-hero-image">
                    <img alt={"Cocktails in the background behind app logo"} src={process.env.PUBLIC_URL + './images/gandtbkgnd.png'} />
                </div>
            </section>
            <section>
                <div className='splash-demo-button'>
                    <DemoButton />
                </div>
            </section>
            <section className="feature-row-container">
                <div className="feature-row-left">
                    Image Placeholder
                    <div>
                        <h3>CHECK IN AND RATE BEER</h3>
                        <p>{"Keep track of what you’ve tried and what you thought of it by checking in a beer and rating it."}</p>
                    </div>
                </div>
                <div className="feature-row-right">
                    Image Placeholder
                    <div>
                        <h3>DRINK NEW BEERS, UNLOCK BADGES</h3>
                        <p>{"Expand your palate by trying new & different beer styles and unlock achievements along the way."}</p>
                    </div>
                </div>
            </section>
            <section className="secondary-image">
                <img alt={"Colorful cocktail display"} src={process.env.PUBLIC_URL + './images/ruyan-ayten-lPHrhCJ8nUo-unsplash.jpg'} />
                <div>
                    <h2>{"Explore nearby popular bars, breweries, and beers."}</h2>
                    <p>{"Not sure where to grab a pint? Untappd shows you popular bars and venues nearby and what’s on tap."}</p>
                </div>
            </section>
            <section className="secondary-feature-row">
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
            </section>
            <footer>
                <ul>
                    <div> 
                        <li>jane martin &copy; 2021</li>
                        </div>
                    
                    <li>
                        <a target="_blank" href="https://github.com/jemcodes">Github</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/jemcodes/">LinkedIn</a>
                    </li>
                </ul>
            </footer>
            {/* splash-wrapper ends */}
        </div>
    )
}
export default SplashPage;