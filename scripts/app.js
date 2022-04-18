
function Navbar() {

    const [isPlusActive, setPlusActive] = React.useState("false");
    const toggleForm = () => {
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
    
    function Modal() {
        return (
            <div className="modal-bg">
                <div className="modal">
                    <div className="modal-top">
                        <p>Create page</p>
                        <button className="modal-close" onClick={toggleForm}>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className="modal-middle">
                        <form id="create">
                            <div className="name">
                                <i class="ph-pencil-simple-bold"></i>
                                <input type="text" placeholder="Page name"></input>
                            </div>
                            <div className="text">
                                <i class="ph-pencil-simple-bold"></i>
                                <textarea form="create" placeholder="Some text"></textarea>
                            </div>
                            <input type="submit" value="Create"></input>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

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
            </div>
            <div className="bottomBar">
                <div className="navBar">
                    <div className="house-button">
                        <button disabled={isHouseActive ? true : false} onClick={navHome} className={`nav-button ${isHouseActive ? "active" : "" }`}>
                            <i  className={isHouseActive ? "ph-house-fill" : "ph-house-bold"}></i>
                        </button>
                    </div>
                    <div className="buttonBG">
                        <button onClick={toggleForm} {...isPlusActive ? window.history.pushState("object or string", "Title", "/") : window.history.pushState("object or string", "Title", "/create")} className={isPlusActive ? "main-button" : "main-button active"}>
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

            {isPlusActive ? "" : <Modal />}
        </div>
    )
}
function App() {
    return (
        <Navbar />
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));
