'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COLORS = ['#D4537E', '#7F77DD', '#1D9E75'];

function Particles({ count = 120 }: { count?: number }) {
  const meshRefs = useRef<THREE.Mesh[]>([]);

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4,
      ] as [number, number, number],
      color: COLORS[i % COLORS.length],
      size: Math.random() * 0.04 + 0.02,
      drift: {
        x: (Math.random() - 0.5) * 0.003,
        y: (Math.random() - 0.5) * 0.003,
        z: (Math.random() - 0.5) * 0.001,
      },
    }));
  }, [count]);

  useFrame(() => {
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.position.x += particles[i].drift.x;
      mesh.position.y += particles[i].drift.y;
      mesh.position.z += particles[i].drift.z;

      // Wrap bounds
      if (mesh.position.x > 4) mesh.position.x = -4;
      if (mesh.position.x < -4) mesh.position.x = 4;
      if (mesh.position.y > 4) mesh.position.y = -4;
      if (mesh.position.y < -4) mesh.position.y = 4;
    });
  });

  return (
    <>
      {particles.map((p, i) => (
        <mesh
          key={i}
          position={p.position}
          ref={(el) => {
            if (el) meshRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[p.size, 6, 6]} />
          <meshBasicMaterial color={p.color} transparent opacity={0.7} />
        </mesh>
      ))}
    </>
  );
}

interface ParticleFieldProps {
  particleCount?: number;
}

export default function ParticleField({ particleCount = 120 }: ParticleFieldProps) {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ alpha: true, antialias: true }}
    >
      <Particles count={particleCount} />
    </Canvas>
  );
}
