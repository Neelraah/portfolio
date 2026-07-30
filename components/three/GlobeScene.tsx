'use client'

import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Stars,
} from '@react-three/drei'

function Earth() {
  return (
    <Sphere args={[1.6, 128, 128]}>
      <MeshDistortMaterial
        color="#00F5FF"
        emissive="#00F5FF"
        emissiveIntensity={0.7}
        roughness={0.15}
        metalness={0.85}
        distort={0.18}
        speed={1.8}
      />
    </Sphere>
  )
}

export function GlobeScene() {
  return (
    <div className="w-full h-full overflow-hidden bg-transparent">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Lights */}
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[3, 3, 3]}
          intensity={2}
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={1.5}
          color="#00F5FF"
        />

        {/* Background Stars */}
        <Stars
          radius={100}
          depth={60}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        {/* Globe */}
        <Earth />

        {/* Controls */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  )
}