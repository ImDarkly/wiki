function Navbar() {

    const [isPlusActive, setPlusActive] = React.useState("false");
    const openForm = () => {
        setPlusActive(!isPlusActive);
        };

    const [isHouseActive, setHouseActive] = React.useState("false");
    const navHome = () => {
        setHouseActive(!isHouseActive);
        setRandomActive(!isRandomActive);
        };

    const [isRandomActive, setRandomActive] = React.useState("false");
    const navRandom = () => {
        setRandomActive(!isRandomActive);
        setHouseActive(!isHouseActive);
        };

    return (
        <div className="main">
            <div className="topBar">
                <a  draggable="false" href="/">
                    <div className="appLogo"></div>
                </a>
                <div className="searchBar">
                    <i class="ph-magnifying-glass-bold"></i>
                    <input type="text" placeholder="Search..."></input>
                </div>
            </div>
            <div className="middleBar">
                {isHouseActive ? <p>Home</p> : null}
                {isRandomActive ? null : <p>Random</p>}
            </div>
            <div className="bottomBar">
                <div className="navBar">
                    <div className="house-button">
                        <button disabled={isHouseActive ? true : false} onClick={navHome} className={`nav-button ${isHouseActive ? "active" : "" }`}>
                            <i  className={isHouseActive ? "ph-house-fill" : "ph-house-bold"}></i>
                        </button>
                    </div>
                    <div className="buttonBG">
                        <button onClick={openForm} className={isPlusActive ? "main-button" : "main-button active"}>
                            <div className="plus-button">
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>
                    <div className="random-button">
                        <button disabled={isRandomActive ? false : true} onClick={navRandom} className={`nav-button ${isRandomActive ? "" : "active" }`}>
                            <i  className={isRandomActive ? "ph-shuffle-fill" : "ph-shuffle-bold"}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
function App() {
    return (
        <Navbar />
    );
}



ReactDOM.render(<App />, document.querySelector("#app"));