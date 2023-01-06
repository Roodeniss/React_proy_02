function Texto() {
    return (
        <div>
            <h2 className="subtitle">About</h2>
            <h3 className="content">I am a fullstack developer with a particular interest in
                making things simple and automating daily tasks.
                I try to keep up with security and best practices,
                and am always looking for new things to learn.</h3>
            <h2 className="subtitle">Interest</h2>
            <h3 className="content">Food expert.
                Music scholar. Reader. Internet fanatic. Bacon buff.
                Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </h3>
        </div>
    )
}

function Button() {
    return (
        <div className="button-conteiner">
            <button className="buttonEmail" type="button"> Email </button>
            <button className="buttonIn" type="button"> LinkedIn </button>
        </div>
    )
}

function Footer() {
    return (
        <div>
            <ul className="footer-container">
                <img className="footer-element git" src="./images/GitHub Icon.png"></img>
                <img className="footer-element in" src="./images/Linkedin Icon.png"></img>
            </ul>
        </div>
    )
}

function Main() {
    return (
        <div>
            <img className="image" src="./images/portfile-image.jpeg"></img>
            <div className="main-info">
                <h1 className="nombre"> Rodrigo Denis</h1>
                <h3 className="ocupation">Full stack Developer</h3>
                <p>rodrigodenis.website</p>
            </div>
            <Button />
            <Texto />

        </div>
    )
}

function App() {
    return (
        <div className="app-conteiner">
            <Main />
            <Footer />
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById("root"))