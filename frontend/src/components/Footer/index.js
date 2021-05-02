import './Footer.css';

function Footer() {
    return (
        <footer>
            <ul className="oh-hai-it-me">
                <li>mixed with joy by jane martin &copy; 2021  &zwnj; 🍹cheers!🍹</li>
            </ul>
            <ul className={"footer-links"}>
                
                <li><a target="_blank" rel="noreferrer" href="https://github.com/jemcodes">GitHub</a><i className="fab fa-github"></i></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jemcodes/">LinkedIn</a><i className="fab fa-linkedin"></i></li>
            </ul>
        </footer>
    )
}
export default Footer;