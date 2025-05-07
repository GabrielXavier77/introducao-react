import Hello from "./components/Hello"
import JsxExemple from "./components/JsxExemple"
import Welcome from "./components/Welcome"
import "./style.css"

export function App() {
    return (
        <div className="App">
            <h1>Olá, Mundo!</h1>
            <Hello name={"Gabriel"}/>
            <JsxExemple/>
            <Welcome name={"Gabriel"}/>
        </div>
    )
}
