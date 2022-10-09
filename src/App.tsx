import "./App.css"
import "./components/Pinned/index.css"
import Pinned from "./components/Pinned"

function App() {
    return (
        <div className="App">
            <section className="container">
                <h2>Scroll down</h2>
            </section>
            <Pinned image="https://picsum.photos/id/1018/2400/1350" text="Some text" />
            <section className="container">
                <h2>Scroll up or down</h2>
            </section>
            <Pinned image="https://picsum.photos/id/1021/2400/1350" text="Other text" />
            <section className="container">
                <h2>Scroll up</h2>
            </section>
        </div>
    )
}

export default App
