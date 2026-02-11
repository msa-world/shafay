'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Edges, Float } from '@react-three/drei'
import * as THREE from 'three'

export default function Structure() {
    const mesh = useRef<THREE.Group>(null!)
    const towerRef = useRef<THREE.Mesh>(null!)
    const floatRef = useRef<THREE.Group>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        // Smooth, complex rotation
        mesh.current.rotation.y = Math.sin(t * 0.1) * 0.2

        // Tower "breathing" scale or subtle movement
        if (towerRef.current) {
            towerRef.current.position.y = 2 + Math.sin(t * 0.5) * 0.1
        }
    })

    return (
        <group ref={mesh} position={[0, -1, 0]}>
            {/* Abstract Building / Blueprint */}

            {/* Main Structure Base */}
            <mesh position={[2, 1, -2]}>
                <boxGeometry args={[2, 5, 2]} />
                <meshStandardMaterial transparent opacity={0.05} color="#3b82f6" />
                <Edges color="#60a5fa" linewidth={1} threshold={15} />
            </mesh>

            {/* Secondary Tower - Animated */}
            <mesh ref={towerRef} position={[-2, 2, -3]} rotation={[0, Math.PI / 4, 0]}>
                <boxGeometry args={[1, 7, 1]} />
                <meshStandardMaterial transparent opacity={0.08} color="#3b82f6" />
                <Edges color="#2563eb" linewidth={1} threshold={15} />
            </mesh>

            {/* Floating Elements (Data points) */}
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <group ref={floatRef} position={[0, 4, 0]}>
                    <mesh>
                        <octahedronGeometry args={[0.5]} />
                        <meshStandardMaterial wireframe color="#fcd34d" emissive="#fcd34d" emissiveIntensity={0.5} />
                    </mesh>
                    {/* Satellite objects */}
                    <mesh position={[1.5, 0.5, 0]}>
                        <dodecahedronGeometry args={[0.2]} />
                        <meshBasicMaterial color="#ef4444" wireframe />
                    </mesh>
                    <mesh position={[-1.2, -0.8, 0.5]}>
                        <icosahedronGeometry args={[0.3]} />
                        <meshBasicMaterial color="#10b981" wireframe />
                    </mesh>
                </group>
            </Float>

            {/* Grid Floor for context */}
            <gridHelper args={[20, 20, 0x1f2937, 0x111827]} position={[0, -2.5, 0]} />
        </group>
    )
}
