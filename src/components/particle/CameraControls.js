import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { extend, useFrame, useThree } from 'react-three-fiber';

extend({ OrbitControls });

const CameraControls = () => {
  const { camera, gl: { domElement } } = useThree();

  const controlsRef = useRef();

  useFrame(() => controlsRef.current.update());

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, domElement]}
      autoRotate
      autoRotateSpeed={-0.2}
      enableZoom={false}
    />
  )
}

export default CameraControls;