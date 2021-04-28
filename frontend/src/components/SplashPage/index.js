import './SplashPage.css'
import DemoButton from '../DemoButton';

function SplashPage() {
    return (
        <div className="splash-wrapper">
            <section className="top-container">
                <header className="showcase">
                    <h1>gin & tonnies</h1>
                    <p>lorem ipsum text</p>
                </header>
                <div className="splash-hero-image">
                    <img alt={"Cocktails in the background behind app logo"} src={process.env.PUBLIC_URL + './images/gandtbkgnd.png'} />
                </div>
            </section>
            <section className="demo-row">
                <div className="demo-button">
                    <DemoButton />
                </div>
            </section>
            <section className="feature-row">
                <div>
                    Image Placeholder
                </div>
                <div>
                    <h3>CHECK IN AND RATE BEER</h3>
                    <p>{"Keep track of what you’ve tried and what you thought of it by checking in a beer and rating it."}</p>
                </div>
                <div>
                    <h3>DRINK NEW BEERS, UNLOCK BADGES</h3>
                    <p>{"Expand your palate by trying new & different beer styles and unlock achievements along the way."}</p>
                </div>
            </section>
            <section className="secondary-image">
                <div>
                    Secondary picture here
                </div>
                <div>
                    <h2>{"Explore nearby popular bars, breweries, and beers."}</h2>
                    <h3>{"Not sure where to grab a pint? Untappd shows you popular bars and venues nearby and what’s on tap."}</h3>
                </div>
            </section>
            <section className="secondary-feature-row">
                <h1>Other Great Features</h1>
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
                <div>
                    <p>jane martin &copy; 2021</p>
                </div>
                <div>
                    <p>github link</p>
                </div>
                <div>
                    <p>linkedin link</p>
                </div>
            </footer>
            {/* splash-wrapper ends */}
        </div>
    )
}
export default SplashPage;