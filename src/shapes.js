import { Sphere, Cone, Torus } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Shapes = () =>{
    const [time, setTime] = useState(0);

    const sphereRef = useRef();
    const coneRef = useRef();
    const torusRef = useRef();

    useFrame(() => {

        const orbitRadius = 2;
        const orbitSpeed = 1; 
      
        const newPositionX = Math.cos(time * orbitSpeed) * orbitRadius;
        const newPositionZ = Math.sin(time * orbitSpeed) * orbitRadius;
        const newPositionY = Math.cos(time * orbitSpeed) * orbitRadius;
      
        const positionOffset = Math.sin(time)*2;
        const rotationOffset = Math.cos(time)*2;

        sphereRef.current.position.x = newPositionX;
        sphereRef.current.position.z = newPositionZ;

        coneRef.current.rotation.x = rotationOffset;

        torusRef.current.position.x = newPositionZ;
        torusRef.current.position.z = newPositionX;
        torusRef.current.position.y = newPositionY;
        torusRef.current.rotation.y = rotationOffset;

        setTime(time + 0.01);
        
    });

    return(
        <>
            <ambientLight/>
            <pointLight position={[10, 10, 5]}/>

            <Sphere ref={sphereRef} args={[0.5, 32, 32]} position={[2, -1, 3]}>
                <meshPhysicalMaterial color={"pink"}/>
            </Sphere>

            <Cone ref={coneRef} args={[0.8, 2, 20]} position={[0, 1, 1]}>
                <meshMatcapMaterial color={"cyan"}/>
            </Cone>

            <Torus ref={torusRef} args={[1, 0.5, 8, 100]} position={[1, 3, 2]}>
                <meshLambertMaterial color={"chartreuse"}/>
            </Torus>
        </>
    );
};

export default Shapes;