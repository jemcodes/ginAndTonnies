import './SplashPage.css'

function SplashPage() {
    return (
        <div className="splash-wrapper">
            <div className="splash-hero"><h3>Welcome to gin & tonnies</h3>
            </div>
            <div className="splash-demo-panel">
                <h1>
                    Welcome To gin & tonnies
                </h1>
                <h3>Drink Delightfully</h3>
            </div>
            <div className="section">
                <div className="cards">
                    <h2>Ratings & Reviews</h2>
                    <button>See More</button>
                </div>
                <div className="cards">
                    <h2>Badges</h2>
                    <button>See More</button>
                </div>
            </div>
            <div className="footer"><h3>Contact Me</h3></div>
        </div>
    )
}
export default SplashPage;