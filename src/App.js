import { Canvas } from "@react-three/fiber";
import Item from './Item';

function App() {
    const levels = [[-2.4, 0, 0], [-1.2, 0, 0], [0, 0, 0], [1.2, 0, 0], [2.4, 0, 0]];

    return (
        <header className="App-header">
            <Canvas>
                <pointLight position={[10, 10, 10]} />
                { levels.map((level) => <Item position={[level[0], level[1], level[2]]} />) }
            </Canvas>
        </header>
    );
}

export default App;
