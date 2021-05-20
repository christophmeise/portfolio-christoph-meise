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
import { ImageLoader, Object3D, Vector3 } from 'three';


function GlobeSphere(props: any) {
  const mesh: any = useRef(null!);
  const { radius } = props;

  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <sphereGeometry attach="geometry" args={[radius, 32, 32]} />
      <meshPhongMaterial attach="material" color="#14142b" shininess={50} />
    </mesh>
  );
}

function Planet(props: any) {
  const mesh: any = useRef(null!);
  const meshRef: any = useRef(null!);
  const { positions, radius } = props;

  useFrame(() => {
    mesh.current.rotation.y -= 0.002;
  });

  const tempObject = useMemo(() => new Object3D(), []);

  const arg0: any = null;
  const arg1: any = null;

  useFrame(() => {
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
      <GlobeSphere radius={radius} />
      <instancedMesh ref={meshRef} args={[arg0, arg1, positions.length]}>
        <sphereBufferGeometry args={[2, 2, 2]} />
        <meshPhongMaterial color="#5E3AEE" />
      </instancedMesh>
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


export default class CustomGlobe extends PureComponent {
  positions: any = [];

  GLOBE_RADIUS: any;


  componentDidMount() {
    const image = new ImageLoader().load('images/globe.png', () => {
      const imagedata = getImageData(image);
      const { data } = imagedata;
      let step; let x; let y;
      this.GLOBE_RADIUS = 250 + 0.3 * Math.min(document.documentElement.clientWidth, 1080);
      for (y = 0; y < imagedata.height; y += 2) {
        const yy = y / imagedata.height;// now use as scaled y coordinate

        step = 2;

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
            // Scale each position by GLOBE_RADIUS (the radius of the globe)
            const vector = new Vector3();
            vector.setFromSphericalCoords(this.GLOBE_RADIUS, phi, theta);

            this.positions.push(vector);
          }
        }
      }


      this.forceUpdate();
    });
  }

  render() {
    return (
      <Canvas camera={{ position: [800, 800, 800], fov: 80 }} gl={{ antialias: false }}>
        <ambientLight intensity={2} />
        {/*         <fog attach="fog" args={['#5E3AEE', 800, 800]} /> */}
        {this.positions?.length > 0 && this.GLOBE_RADIUS != null
          && <Planet positions={this.positions} radius={this.GLOBE_RADIUS} />}
        {window.innerWidth > 768
          && <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} enableRotate />}
      </Canvas>
    );
  }
}
