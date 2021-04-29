import { Link } from 'react-router-dom';
import './SplashPage.css'
import DemoButton from '../DemoButton';


function SplashPage() {
    return (
        // splass-wrapper begins
        <div className="splash-wrapper">
            <section className="top-container">
                <div className="showcase">
                    <h1>Your Web Presense</h1>
                    <p>lorem ipsum text lorem ipsum text lorem ipsum text
                        lorem ipsum text lorem ipsum text lorem ipsum text
                        lorem ipsum text lorem ipsum text lorem ipsum text!
                    </p>
                    <img alt={"Colorful cocktail display"} src={process.env.PUBLIC_URL + './images/gandtbkgnd.png'} />
                    {/* <a target="_blank" href="#">Read More</a> */}
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
            <section className="boxes">
                <div className='box'>
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
            <section className="info">
                {/* <img alt={"Colorful cocktail display"} src={'https://images.unsplash.com/photo-1502819126416-d387f86d47a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80'} /> */}
                <div className="more-info-text">
                    <h1>{"Explore nearby popular bars, breweries, and beers."}</h1>
                    <h2>{"Not sure where to grab a pint? Untappd shows you popular bars and venues nearby and what’s on tap."}</h2>
                    {/* <a target="_blank" href="#">Buy Now</a> */}
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
            <footer>
                <ul className={"footer-links"}>
                    <li><a target="_blank" href="#">jane martin</a></li>
                    <li><a target="_blank" href="#">github</a></li>
                    <li><a target="_blank" href="#">linkedin</a></li>
                </ul>
            </footer>
            {/* splash-wrapper ends */}
        </div>
    )
}
export default SplashPage;