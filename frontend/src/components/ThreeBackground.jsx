import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Rotating wireframe Cyber Torus
function CyberTorus() {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.12;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    }
  });
  return (
    <mesh ref={meshRef} position={[3.8, 0.5, -2]} scale={0.65}>
      <torusKnotGeometry args={[1, 0.28, 128, 16]} />
      <meshStandardMaterial
        color="#00ff88"
        wireframe={true}
        opacity={0.16}
        transparent={true}
        emissive="#00ff88"
        emissiveIntensity={0.35}
      />
    </mesh>
  );
}

// Second Cyan Torus for deep perspective
function CyberTorus2() {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = -state.clock.elapsedTime * 0.08;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.14;
    }
  });
  return (
    <mesh ref={meshRef} position={[-4.2, -1, -3]} scale={0.5}>
      <torusKnotGeometry args={[1, 0.22, 100, 16]} />
      <meshStandardMaterial
        color="#00e5ff"
        wireframe={true}
        opacity={0.12}
        transparent={true}
        emissive="#00e5ff"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

// Spinning icosahedron
function CyberIcosahedron() {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.25;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    }
  });
  return (
    <mesh ref={meshRef} position={[-2.8, 2.2, -1.5]} scale={0.55}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#00a1ff"
        wireframe={true}
        opacity={0.14}
        transparent={true}
        emissive="#00a1ff"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

// Floating octahedron
function FloatingOctahedron() {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.35;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.22;
      meshRef.current.position.y = 1.2 + Math.sin(state.clock.elapsedTime * 0.6) * 0.35;
    }
  });
  return (
    <mesh ref={meshRef} position={[2.6, 2.4, -2]} scale={0.4}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#00ff88"
        wireframe={true}
        opacity={0.18}
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
    const count = 2800;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 24;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: '#00ff88',
        size: 0.024,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.65,
        depthWrite: false,
      }),
    []
  );

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.012;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.006) * 0.08;
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} color="#00ff88" intensity={0.6} />
        <pointLight position={[-10, -10, -10]} color="#00e5ff" intensity={0.4} />
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
