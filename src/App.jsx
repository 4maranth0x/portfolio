import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Info from "./Info"
import Shapes from "./shapes"

const App = () => {
    return (
        <>
            <Info name={"Tarea 1"} biography={"Esfera, Cono y Torus"}/>
            <Canvas
                camera={{ position: [2, 0, 5] }}   
            >
                <Shapes/>
                <Experience />
            </Canvas>
        </>
    )
}
export default App