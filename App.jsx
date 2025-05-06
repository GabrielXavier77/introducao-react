import Hello from "./components/Hello"
import JsxExemple from "./components/JsxExemple"
import "./style.css"

export function App() {
    return (
        <div className="App">
            <h1>Olá, Mundo!</h1>
            <Hello nome={"Gabriel"}/>
            <JsxExemple/>
        </div>
    )
}
