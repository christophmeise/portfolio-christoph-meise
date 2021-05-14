/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-use-before-define */
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';

function Globus(props: any) {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef<THREE.Mesh>(null!);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [globeAdded, setGlobe] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.y += 0.0009));
  if (mesh.current != null && !globeAdded) {
    setGlobe(true);

    const myGlobe = new ThreeGlobe();
    myGlobe
      .globeMaterial(new THREE.MeshPhongMaterial({
        color: new THREE.Color(0x5E3AEE),
        opacity: 0.35,
        transparent: true
      }))
      .hexPolygonsData(props.countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.3)
      .showAtmosphere(true)
      .atmosphereColor('#5E3AEE')
      .hexPolygonColor(() => '#5E3AEE');
    // Return the view, these are regular Threejs elements expressed in JSX
    mesh.current.add(myGlobe);
  }
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    />
  );
}


export default function BoxCanvas(countries: any) {
  const { loadedCountries } = countries;
  return (
    <Canvas camera={{ position: [0, 0, 300], fov: 50 }}>
      <ambientLight color="#bbbbbb" />
      <directionalLight color="#ffffff" intensity={0.6} />
      <Globus position={[100, 0, 0]} countries={loadedCountries} />
    </Canvas>
  );
}
