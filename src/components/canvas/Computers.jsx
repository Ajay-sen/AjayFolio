import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three"; // Make sure to import THREE
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  useEffect(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        const geometry = object.geometry;
        const positions = geometry.attributes.position.array;

        // Check and replace NaN values in the positions array
        let hasNaN = false;
        for (let i = 0; i < positions.length; i++) {
          if (isNaN(positions[i])) {
            positions[i] = 0; // Replace NaN with 0
            hasNaN = true;
          }
        }

        if (hasNaN) {
          geometry.attributes.position.needsUpdate = true;
        }

        // Ensure bounding box and bounding sphere are calculated properly
        geometry.computeBoundingBox();
        geometry.computeBoundingSphere();

        // Fix bounding sphere radius if it's NaN
        if (isNaN(geometry.boundingSphere?.radius)) {
          geometry.boundingSphere.radius = 10; // Assign a default value
        }
      }
    });
  }, [scene]);

  return (
    <mesh>
      {/* Basic lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Render the 3D model */}
      <primitive
        object={scene}
        scale={isMobile ? 0.4 : 0.75} // Scale based on device
        position={isMobile ? [0, -1.5, -1] : [0, -3.25, -1.5]} // Position based on device
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 760px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "100%" }} // Ensure canvas takes full space
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
