'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Plane } from '@react-three/drei'
import * as THREE from 'three'

export default function Terrain() {
    const mesh = useRef<THREE.Mesh>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        // mesh.current.rotation.x = -Math.PI / 2
        // animated movement if needed
    })

    return (
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <Plane args={[20, 20, 64, 64]}>
                <meshStandardMaterial
                    color="#27272a"
                    wireframe
                    transparent
                    opacity={0.2}
                />
            </Plane>
            {/* Second layer for depth */}
            <Plane args={[20, 20, 32, 32]} position={[0, 0, -0.5]}>
                <meshStandardMaterial
                    color="#0ea5e9"
                    wireframe
                    transparent
                    opacity={0.1}
                />
            </Plane>
        </group>
    )
}
