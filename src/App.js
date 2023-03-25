import { Canvas } from "@react-three/fiber";
import Item from './Item';

function App() {
    return (
        <header className="App-header">
            <Canvas>
                <pointLight position={[10, 10, 10]} />
                <Item position={[-1.2, 0, 0]} />
                <Item position={[1.2, 0, 0]} />
            </Canvas>
        </header>
    );
}

export default App;
