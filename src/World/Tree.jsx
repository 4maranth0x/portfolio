import React from "react";
import { useGLTF } from "@react-three/drei";

const Tree = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/tree/tree.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          geometry={nodes.Object_3.geometry}
          material={materials.formica_cinza}
        />
        <mesh
          castShadow
          geometry={nodes.Object_4.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          geometry={nodes.Object_5.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          geometry={nodes.Object_6.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          geometry={nodes.Object_7.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          geometry={nodes.Object_8.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          geometry={nodes.Object_9.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Vegetation_Bark_Maple_1}
        />
      </group>
    </group>
  );
}
export default Tree;

useGLTF.preload("/assets/models/tree/tree.glb");
