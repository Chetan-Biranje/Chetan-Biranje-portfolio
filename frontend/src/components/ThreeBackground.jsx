import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Floating rotating torus knot
function CyberTorus() {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.20;
    }
  });
  return (
    <mesh ref={meshRef} position={[3.5, 0, -2]} scale={0.6}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial
        color="#00ff88"
        wireframe={true}
        opacity={0.12}
        transparent={true}
        emissive="#00ff88"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function CyberTorus2() {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = -state.clock.elapsedTime * 0.10;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });
  return (
    <mesh ref={meshRef} position={[-4, 1, -3]} scale={0.45}>
      <torusKnotGeometry args={[1, 0.25, 100, 16]} />
      <meshStandardMaterial
        color="#00e5ff"
        wireframe={true}
        opacity={0.08}
        transparent={true}
        emissive="#00e5ff"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function CyberIcosahedron() {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <mesh ref={meshRef} position={[-2.5, -1.5, -1]} scale={0.5}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#00a1ff"
        wireframe={true}
        opacity={0.10}
        transparent={true}
        emissive="#00a1ff"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

function FloatingOctahedron() {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
      meshRef.current.position.y = 2 + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });
  return (
    <mesh ref={meshRef} position={[2, 2, -2]} scale={0.35}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#00ff88"
        wireframe={true}
        opacity={0.15}
        transparent={true}
        emissive="#00ff88"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

// Star field using plain Three.js Points
function StarField() {
  const pointsRef = useRef();

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 2500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: '#00ff88',
        size: 0.025,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
      }),
    []
  );

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.005) * 0.1;
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

const ThreeBackground = () => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#00ff88" intensity={0.5} />
        <pointLight position={[-10, -10, -10]} color="#00e5ff" intensity={0.3} />
        <StarField />
        <CyberTorus />
        <CyberTorus2 />
        <CyberIcosahedron />
        <FloatingOctahedron />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
