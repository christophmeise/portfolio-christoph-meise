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
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, {
  PureComponent, Suspense, useMemo, useRef
} from 'react';
import { ImageLoader, Object3D, Vector3 } from 'three';


function GlobeSphere(props: any) {
  const mesh: any = useRef(null!);
  const { radius } = props;

  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <sphereGeometry attach="geometry" args={[radius, 64, 64]} />
      <meshPhysicalMaterial envMapIntensity={0.8} color="#14142b" clearcoat={0.2} clearcoatRoughness={0} roughness={1} metalness={0.2} />
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
        <sphereBufferGeometry args={[1, 5, 5]} />
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

  CAMERA_ASPECT: any;

  CAMERA_POSITION: Vector3 = new Vector3(600, 600, 600);


  componentDidMount() {
    const image = new ImageLoader().load('images/globe.png', () => {
      const imagedata = getImageData(image);
      const { data } = imagedata;
      let step; let x; let y;
      this.GLOBE_RADIUS = 250 + 0.3 * Math.min(document.documentElement.clientWidth, 1080);
      this.CAMERA_ASPECT = window.innerWidth / window.innerHeight;
      for (y = 0; y < imagedata.height; y += 2) {
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
    const offsetX = window.innerWidth > 768 ? -15 : -5;
    return (
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: this.CAMERA_POSITION, fov: 68, aspect: this.CAMERA_ASPECT, near: 1, far: 1000, filmOffset: offsetX
        }}
        gl={{ antialias: false }}
      >
        <ambientLight intensity={2} />
        <Suspense fallback={null}>
          <Environment preset="night" />
        </Suspense>
        {this.positions?.length > 0 && this.GLOBE_RADIUS != null
          && <Planet positions={this.positions} radius={this.GLOBE_RADIUS} />}
        {window.innerWidth > 768
          && <OrbitControls enableZoom={false} enablePan enableRotate />}
      </Canvas>
    );
  }
}
