/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-use-before-define */
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';

function Globus(props: any) {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh: any = useRef(null!);
  // Set up state for the hovered and active state
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  const { myGlobe } = props;
  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.0009;
    if (ready) {
      if (myGlobe.globeMaterial().opacity < 0.3) {
        myGlobe.globeMaterial().opacity += 0.0025;
        mesh.current.rotation.y += (0.3 - myGlobe.globeMaterial().opacity) / 10;
      }
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onAfterRender={(() => setReady(true))}
    >
      <primitive object={myGlobe} />
    </mesh>
  );
}


export default function BoxCanvas(globe: any) {
  const { myGlobe } = globe;
  return (
    <Canvas camera={{ position: [0, 0, 300], fov: 50 }}>
      <ambientLight color="#bbbbbb" />
      <directionalLight color="#ffffff" intensity={0.6} />
      <Globus myGlobe={myGlobe} />
    </Canvas>
  );
}
