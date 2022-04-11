



function Navbar() {

    const [isActive, setActive] = React.useState("false");
    const handleToggle = () => {
        setActive(!isActive);
        };

    return (
        <div className="main">
            <div className="topBar"></div>
            <div className="middleBar">
            </div>
            <div className="bottomBar">
                <div className="navBar">
                    <div className="buttonBG">
                        <button onClick={handleToggle} className={isActive ? "main-button" : "main-button active"}>
                            <div className="plus-button">
                                <span></span>
                                <span></span>
                            </div>
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