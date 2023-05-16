import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

function Box( props ) {
  const ref = useRef();

  const [hovered, onHover] = useState(false);
  const [clicked, onClick] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.x += delta));

  return (
    <mesh {...props} 
      ref={ref}
      scale={clicked? 1.5 : 1}
      onClick={() => onClick(!clicked)}
      onPointerOver={() => onHover(true)}
      onPointerOut={() => onHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Box