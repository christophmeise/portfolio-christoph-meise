/* eslint-disable no-continue */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-use-before-define */
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { PureComponent, useMemo, useRef } from 'react';
import * as THREE from 'three';

function GlobeSphere(props: any) {
  const mesh: any = useRef(null!);

  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <sphereGeometry args={[600, 32, 32]} />
      <meshPhongMaterial color="#5E3AEE" transparent opacity={0.5} />
    </mesh>
  );
}

function Planet(props: any) {
  const mesh: any = useRef(null!);
  const meshRef: any = useRef(null!);
  const { positions } = props;

  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.002;
  });

  /*   const geom = useMemo(() => new THREE.SphereBufferGeometry(2, 2, 2), []);
    const mat = useMemo(() => new THREE.MeshPhongMaterial(), []); */
  const tempObject = useMemo(() => new THREE.Object3D(), []);

  const arg0: any = null;
  const arg1: any = null;

  useFrame((state) => {
    let i = 0;
    for (let x = 0; x < positions.length; x++) {
      const id = i++;
      tempObject.position.set(positions[x].x, positions[x].y, positions[x].z);
      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(id, tempObject.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group
      {...props}
      ref={mesh}
    >
      <GlobeSphere />
      <instancedMesh ref={meshRef} args={[arg0, arg1, positions.length]}>
        <sphereBufferGeometry args={[2, 2, 2]} />
        <meshPhongMaterial />
      </instancedMesh>
      {/*       {positions.map((dot: any) => (
        <mesh
          position={[dot.x, dot.y, dot.z]}
          key={`${dot.x}${dot.y}${dot.z}`}
          geometry={geom}
          material={mat}
        />
      ))} */}
    </group>
  );
}

function getImageData(image: any) {
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;

  const ctx: any = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);

  return ctx.getImageData(0, 0, image.width, image.height);
}


export default class BoxCanvas extends PureComponent {
  positions: any = [];

  componentDidMount() {
    const image = new THREE.ImageLoader().load('images/globe.png', () => {
      const imagedata = getImageData(image);
      const { data } = imagedata;
      let step; let x; let y;
      for (y = 0; y < imagedata.height; y += 3) {
        const yy = y / imagedata.height;// now use as scaled y coordinate

        if (yy <= 0.07) continue; // don't care about arctica, it's not on my map
        else if (yy <= 0.14) step = Math.floor(Math.pow(2, (0.14 * imagedata.height - y) / 6) + 3);
        else if (yy < 0.83) step = 3;
        else break;// Don't care about antarctica, it's not on my map

        for (x = 0; x < imagedata.width; x += step) {
          const i = (y * imagedata.width + x) * 4;
          const intensity = data[i] + data[i + 1] + data[i + 2];
          const lat = 90 - 180 * (y / imagedata.height); // equilateral projection
          const lng = 360 * (x / imagedata.width) - 180;
          if (intensity > 0x33 * 3) {
            const phi = (90 - lat) * Math.PI / 180;
            const theta = (180 - lng) * Math.PI / 180;

            // Pass the angle between this dot an the Y-axis (phi)
            // Pass this dot’s angle around the y axis (theta)
            // Scale each position by 600 (the radius of the globe)
            const vector = new THREE.Vector3();
            vector.setFromSphericalCoords(600, phi, theta);

            this.positions.push(vector);
          }
        }
      }

      this.forceUpdate();
    });
  }

  render() {
    return (
      <Canvas camera={{ position: [300, 300, 1200], fov: 60 }} gl={{ antialias: false }}>
        <ambientLight intensity={2} />
        <fog attach="fog" args={['#5E3AEE', 300, 300]} />
        <directionalLight position={[-800, 0, -800]} intensity={0.2} />
        <directionalLight position={[800, 800, 800]} intensity={0.2} />
        {this.positions?.length > 0
          && <Planet positions={this.positions} />}
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
      </Canvas>
    );
  }
}
