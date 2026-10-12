import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';

import Points from './Points';
import CameraControls from './CameraControls';

const AnimationCanvas = () => {
  return (
    <Canvas colorManagement={false} camera={{ position: [100, 10, 0], fov: 75 }} style={{ opacity: "0.6" }}>
      <Suspense fallback={null}>
        <Points />
      </Suspense>
      <CameraControls />

    </Canvas>
  );
}

export default AnimationCanvas;