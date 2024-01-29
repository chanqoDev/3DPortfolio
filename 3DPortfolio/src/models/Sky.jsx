import { useGLTF } from '@react-three/drei';
import React from 'react'
import skyScene from "../assets/3d/sky.glb"; // we didn't use a regular image becase we need it feel like a sphere when it rotatotes

// our sky needs to be primitive to simple consume our 3D model
const Sky = () => {
    const sky = useGLTF(skyScene); 
    return (
    <mesh>
    <primitive object={sky.scene} />
    </mesh>
)
}

export default Sky; 