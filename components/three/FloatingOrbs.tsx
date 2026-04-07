'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Orb({ position, color, radius }: { position: [number, number, number]; color: string; radius: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  const speed = Math.random() * 0.3 + 0.2;
  const offset = Math.random() * Math.PI * 2;

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(clock.elapsedTime * speed + offset) * 0.3;
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius, 16, 16]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.15}
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  );
}

export default function FloatingOrbs() {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      camera={{ position: [0, 0, 5] }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} intensity={0.8} color="#D4537E" />
      <Orb position={[-2, 1, 0]} color="#D4537E" radius={0.8} />
      <Orb position={[2, -1, -1]} color="#7F77DD" radius={0.6} />
      <Orb position={[0, 0, -2]} color="#1D9E75" radius={0.5} />
    </Canvas>
  );
}
