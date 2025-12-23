'use client'

import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'

export default function GradientBackground() {
  return (
    <ShaderGradientCanvas
      importedFiber={{ ...reactSpring }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <ShaderGradient
        animate="on"
        axesHelper="off"
        brightness={0.8}
        cAzimuthAngle={180}
        cDistance={3.54}
        cPolarAngle={90}
        cameraZoom={1}
        color1="#051a0c"
        color2="#000000"
        color3="#000000"
        destination="onCanvas"
        embedMode="off"
        envPreset="dawn"
        format="gif"
        fov={40}
        frameRate={10}
        gizmoHelper="hide"
        grain="off"
        lightType="env"
        pixelDensity={1.3}
        positionX={-1.4}
        positionY={0}
        positionZ={0}
        range="disabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.1}
        rotationX={0}
        rotationY={10}
        rotationZ={50}
        shader="defaults"
        type="waterPlane"
        uAmplitude={1}
        uDensity={1.3}
        uFrequency={5.5}
        uSpeed={0.05}
        uStrength={4}
        uTime={0}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  )
}
