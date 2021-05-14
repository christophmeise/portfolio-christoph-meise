/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-return-assign */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';

const GlobeFigure = styled.div`
    cursor: grab;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

export default class CustomGlobe extends PureComponent {
  mount: any;

  componentDidMount() {
    fetch('./countries_small.geojson').then((res) => res.json()).then((countries) => {
      const myGlobe = new ThreeGlobe();
      myGlobe
        .globeMaterial(new THREE.MeshPhongMaterial({
          color: new THREE.Color(0x5E3AEE),
          opacity: 0.35,
          transparent: true
        }))
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.3)
        .hexAltitude(200)
        .showAtmosphere(true)
        .atmosphereColor('#5E3AEE')
        .hexPolygonColor(() => '#5E3AEE'); // #${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}

      // renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight);
      this.mount.appendChild(renderer.domElement);

      // scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x14142B);
      scene.add(myGlobe);
      scene.add(new THREE.AmbientLight(0xbbbbbb));
      scene.add(new THREE.DirectionalLight(0xffffff, 0.6));

      // camera
      const camera = new THREE.PerspectiveCamera();
      camera.aspect = this.mount.offsetWidth / this.mount.offsetHeight;
      camera.updateProjectionMatrix();
      camera.position.z = 300;

      const xyz = new THREE.Vector3(myGlobe.position.x - 100, myGlobe.position.y, myGlobe.position.z);
      camera.lookAt(xyz);

      // controls
      /*       const controls = new OrbitControls(camera, this.mount);
            controls.target.set(0, 0, 0);
            controls.enableZoom = false;
            controls.enablePan = false;
            controls.enableRotate = false;
            controls.update(); */

      function resizeRendererToDisplaySize() {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = window.innerWidth !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(window.innerWidth, height, false);
        }
        return needResize;
      }


      const animate = () => {
        if (resizeRendererToDisplaySize()) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.lookAt(xyz);
          camera.updateProjectionMatrix();
        }
        renderer.render(scene, camera);
        myGlobe.rotation.y += 0.0009;
        requestAnimationFrame(animate);
      };
      animate();
    });
  }

  render() {
    return (
      <GlobeFigure
        id="globeViz"
        ref={(ref) => this.mount = ref}
      />
    );
  }
}
