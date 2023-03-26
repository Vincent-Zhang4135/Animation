import { Canvas } from "@react-three/fiber";
import Item from './Item';
import Box from './box';

function App() {
    const levels = [[-2.4, 0, 0], [-1.2, 0, 0], [0, 0, 0], [1.2, 0, 0], [2.4, 0, 0],
                    [-2.4, -1.2, 0], [-1.2, -1.2, 0], [0, -1.2, 0], [1.2, -1.2, 0], [2.4, -1.2, 0],
                    [-2.4, 1.2, 0], [-1.2, 1.2, 0], [0, 1.2, 0], [1.2, 1.2, 0], [2.4, 1.2, 0],
                    [-2.4, -2.4, 0], [-1.2, -2.4, 0], [0, -2.4, 0], [1.2, -2.4, 0], [2.4, -2.4, 0],
                    [-2.4, 2.4, 0], [-1.2, 2.4, 0], [0, 2.4, 0], [1.2, 2.4, 0], [2.4, 2.4, 0]
                ];

    return (
        <Canvas>
            <pointLight position={[10, 10, 10]} />
            {/* <Item position={[0, 0, 0]}/> */}
            {/* <Item position={[-1.2, 0, 0]} />
            <Item position={[1.2, 0, 0]} /> */}
            { levels.map((level) => <Item position={[level[0], level[1], level[2]]} />) }
            {/* < Box /> */}
        </Canvas>
    );
}

export default App;
