'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Trophy() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.45) * 0.22;
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.28) * 0.05;
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.85) * 0.06;
    }
  });

  return (
    <group ref={groupRef} scale={1.1}>
      <mesh position={[0, 1.02, 0]}>
        <sphereGeometry args={[0.08, 18, 18]} />
        <meshStandardMaterial color="#FFD98B" emissive="#FFD98B" emissiveIntensity={1} />
      </mesh>

      <mesh position={[0, 0.24, 0]}>
        <cylinderGeometry args={[0.45, 0.3, 0.82, 24]} />
        <meshStandardMaterial color="#D78816" metalness={0.92} roughness={0.18} />
      </mesh>

      <mesh position={[-0.5, 0.36, 0]} rotation={[0, 0, 0.9]}>
        <torusGeometry args={[0.22, 0.05, 12, 24, Math.PI]} />
        <meshStandardMaterial color="#E9A12A" metalness={0.9} roughness={0.15} />
      </mesh>

      <mesh position={[0.5, 0.36, 0]} rotation={[0, 0, -0.9]}>
        <torusGeometry args={[0.22, 0.05, 12, 24, Math.PI]} />
        <meshStandardMaterial color="#E9A12A" metalness={0.9} roughness={0.15} />
      </mesh>

      <mesh position={[0, -0.34, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.48, 14]} />
        <meshStandardMaterial color="#F3B24A" metalness={0.94} roughness={0.12} />
      </mesh>

      <mesh position={[0, -0.63, 0]}>
        <cylinderGeometry args={[0.34, 0.4, 0.12, 24]} />
        <meshStandardMaterial color="#7D4307" metalness={0.45} roughness={0.42} />
      </mesh>

      <mesh position={[0, -0.74, 0]}>
        <cylinderGeometry args={[0.26, 0.28, 0.08, 24]} />
        <meshStandardMaterial color="#B76F10" metalness={0.7} roughness={0.25} />
      </mesh>

      <mesh position={[0, -0.93, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.62, 32]} />
        <meshStandardMaterial color="#E8B96B" transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

export default function TrophyScene() {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0.15, 3.2], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[2, 3, 3]} intensity={1.3} color="#FFE4A6" />
      <pointLight position={[0, 2, 2]} intensity={1.6} color="#FAC775" />
      <pointLight position={[-2, -1, 1]} intensity={0.75} color="#EF9F27" />
      <pointLight position={[2, 0, -2]} intensity={0.4} color="#FFF8E5" />
      <Trophy />
    </Canvas>
  );
}
