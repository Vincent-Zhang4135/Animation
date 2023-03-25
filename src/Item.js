import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { TeapotGeometry } from "three/examples/jsm/geometries/TeapotGeometry";

const Item = (props) => {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef();
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.01));
    // Return the view, these are regular Threejs elements expressed in JSX
    const teapotGeometry = new TeapotGeometry(100, 55);

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        >
            <Html>
                <teapotGeometry />
            </Html>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
                wireframe={props.wireframe}
                color={hovered ? "hotpink" : "orange"}
            />
        </mesh>
    );
};

export default Item;
