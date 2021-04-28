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
            <section className="splash-demo">
                <DemoButton />
            </section>
            <section className="feature-row">
                <div>
                    Image Placeholder
                </div>
                <div>
                    <h4>CHECK IN AND RATE BEER</h4>
                    <p>{"Keep track of what you’ve tried and what you thought of it by checking in a beer and rating it."}</p>
                </div>
                <div>
                    <h4>DRINK NEW BEERS, UNLOCK BADGES</h4>
                    <p>{"Expand your palate by trying new & different beer styles and unlock achievements along the way."}</p>
                </div>
            </section>
            <div className="footer"><h3>Contact Me</h3></div>
        </div>
    )
}
export default SplashPage;