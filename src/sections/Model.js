import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Model = (props) =>  {
  const { nodes, materials } = useGLTF("http://localhost:3000/low_poly_island.glb");
  return (
    <group {...props} dispose={null}>
    <group rotation={[-Math.PI / 2, 0, 0]} scale={0.05}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group scale={10}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["Material.003"]}
          />
        </group>
        <group position={[0, 0.11, 0]} scale={13.11}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group position={[5.12, 2.28, 4.4]} scale={0.7}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials["Material.007"]}
          />
        </group>
        <group position={[-2.99, 0.59, 6.54]} scale={0.68}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <group
          position={[6.57, 2.42, 1.07]}
          rotation={[0, 1.55, 0]}
          scale={[0.7, 0.86, 0.7]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_19.geometry}
            material={materials["Material.007"]}
          />
        </group>
        <group position={[-3.03, 1.49, -4.69]} scale={[0.68, 0.88, 0.68]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <group position={[5.71, 2.57, 2.71]} scale={0.62}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_25.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <group
          position={[-2.23, 1.15, -2.92]}
          rotation={[-Math.PI, 0.14, -Math.PI]}
          scale={[0.87, 0.76, 0.87]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_27.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_29.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials["Material.007"]}
          />
        </group>
        <group position={[0, 6.09, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={materials["Material.009"]}
          />
        </group>
      </group>
    </group>
  </group>
  );
}

useGLTF.preload("http://localhost:3000/low_poly_island.glb");

export default Model