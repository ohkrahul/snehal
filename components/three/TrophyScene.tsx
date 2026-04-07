'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Trophy() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.5) * 0.2;
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Trophy cup body */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.4, 0.3, 0.8, 16]} />
        <meshStandardMaterial color="#EF9F27" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Trophy stem */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 8]} />
        <meshStandardMaterial color="#EF9F27" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Trophy base */}
      <mesh position={[0, -0.62, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 16]} />
        <meshStandardMaterial color="#EF9F27" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Star on top */}
      <mesh position={[0, 0.7, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#FAC775" emissive="#FAC775" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

export default function TrophyScene() {
  return (
    <Canvas
      style={{ width: '100%', height: '180px' }}
      camera={{ position: [0, 0, 3], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 2]} intensity={1.2} color="#FAC775" />
      <pointLight position={[-2, -1, 1]} intensity={0.5} color="#EF9F27" />
      <Trophy />
    </Canvas>
  );
}
