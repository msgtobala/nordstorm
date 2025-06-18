import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface SuitcaseModelProps {
  autoRotate?: boolean;
}

const SuitcaseModel: React.FC<SuitcaseModelProps> = ({
  autoRotate = false,
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered] = useState(false);

  const { scene } = useGLTF('/model.glb');

  useFrame((_state, delta) => {
    if (meshRef.current && autoRotate && !hovered) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  if (!scene) return null;

  return (
    <group ref={meshRef} scale={0.92} rotation={[-0.2, 0, 0]}>
      <primitive object={scene.clone()} />
    </group>
  );
};

interface ThreeDModelProps {
  className?: string;
}

const ThreeDModel: React.FC<ThreeDModelProps> = () => {
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only zoom if Ctrl or Meta (Cmd) is pressed
      if (!(e.ctrlKey || e.metaKey)) {
        // Let the page scroll
        return;
      }
      // Otherwise, allow OrbitControls to handle zoom
      // Prevent page scroll
      e.preventDefault();
    };

    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (canvas) {
        canvas.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 1.6, 4.5], fov: 35, near: 0.1, far: 1000 }}
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
      >
        <ambientLight intensity={0.85} />
        <directionalLight
          position={[2, 6, 2]}
          intensity={0.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0005}
        />

        <Environment
          files="https://modelviewer.dev/shared-assets/environments/neutral.hdr"
          background={false}
        />

        <SuitcaseModel />

        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          minDistance={2.5}
          maxDistance={5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.1}
          autoRotate={false}
          autoRotateSpeed={0.5}
          dampingFactor={0.05}
          enableDamping={true}
        />
      </Canvas>
    </div>
  );
};

useGLTF.preload('/model.glb');

export default ThreeDModel;
