import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere, setSphere] = useState(null);

  useEffect(() => {
    // Generate random points in a sphere
    const generatedSphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

    // Check for NaN values in the array
    const hasNaN = generatedSphere.some((value) => isNaN(value));
    if (hasNaN) {
      console.error("NaN values detected in the sphere array", generatedSphere);
    } else {
      // Remove NaN values from the array
      const cleanSphere = generatedSphere.filter((value) => !isNaN(value));
      setSphere(cleanSphere);  // Only set sphere if valid
    }
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  // Return null if sphere is not generated yet or has NaN values
  if (!sphere) {
    return null;
  }

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;