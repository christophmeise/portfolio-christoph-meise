/* eslint-disable */
import { a as three } from '@react-spring/three';
import { ContactShadows, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { navigate } from 'gatsby';
import React, { PureComponent, Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const vec = new THREE.Vector3();

interface ModelProps {
  open: any;
  hinge: any;
}

function Model({ open, hinge, ...props }: ModelProps) {
  const group: any = useRef(null!);
  // Load model
  const { nodes, materials }: any = useGLTF('/mac-draco.glb');
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false);
  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered]);
  // Make it float in the air when it's opened
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, open ? -24 : -32), 0.1);
    state.camera.lookAt(0, 0, 0);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, open ? Math.cos(t / 2) / 8 + 0.25 : 0, 0.1);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, open ? Math.sin(t / 4) / 4 : 0, 0.1);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, open ? Math.sin(t / 4) / 4 : 0, 0.1);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, open ? (-2 + Math.sin(t)) / 3 : -4.3, 0.1);
  });
  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      dispose={null}
    >
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes.Cube008.geometry} />
          <mesh material={materials['matte.001']} geometry={nodes.Cube008_1.geometry} />
          <mesh material={materials['screen.001']} geometry={nodes.Cube008_2.geometry} />
        </group>
      </three.group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes.Cube002.geometry} />
        <mesh material={materials.trackpad} geometry={nodes.Cube002_1.geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  );
}

export default class MacCanvas extends PureComponent<any, any> {

  render() {
    const { open, isOpened } = this.props;
    return (
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 35 }}>
        <three.pointLight position={[5, 10, -10]} intensity={0.5} color="#FCFCFC" />
        <three.pointLight position={[10, 10, 10]} intensity={0.7} color="#FCFCFC" />
        <three.pointLight position={[-10, 10, -10]} intensity={0.7} color="#FCFCFC" />
        <Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]} onClick={(e) => (e.stopPropagation(), navigate('/contact'))}>
            <Model open={isOpened} hinge={open.to([0, 1], [1.575, -0.425])} />
          </group>
        </Suspense>
        <ContactShadows rotation-x={Math.PI / 2} position={[0, -4.5, 0]} opacity={0.9} width={20} height={20} blur={2} far={4.5} />
      </Canvas>
    );
  }
}
