import * as React from 'react'
import { useFrame } from 'react-three-fiber'

import { Setup } from '../Setup'

import { Icosahedron } from '../../src/shapes'
import { Html } from '../../src/Html'
import { useTurntable } from '../useTurntable'

export default {
  title: 'Misc/Html',
  component: Html,
  decorators: [(storyFn) => <Setup cameraPosition={[-20, 20, -20]}> {storyFn()}</Setup>],
}

function HTMLScene() {
  const ref = useTurntable()
  return (
    <group ref={ref}>
      <Icosahedron args={[2, 2]} position={[3, 6, 4]}>
        <meshBasicMaterial attach="material" color="hotpink" wireframe />
        <Html scaleFactor={30} className="html-story-block">
          First
        </Html>
      </Icosahedron>

      <Icosahedron args={[2, 2]} position={[10, 0, 10]}>
        <meshBasicMaterial attach="material" color="hotpink" wireframe />
        <Html scaleFactor={30} className="html-story-block">
          Second
        </Html>
      </Icosahedron>

      <Icosahedron args={[2, 2]} position={[-10, 0, -10]}>
        <meshBasicMaterial attach="material" color="hotpink" wireframe />
        <Html scaleFactor={30} className="html-story-block">
          Third
        </Html>
      </Icosahedron>
    </group>
  )
}

const round = (n) => Math.round(n * 100) / 100

function BugRepro() {
  const ref = React.useRef()
  useFrame(({ mouse }) => {
    ref.current.innerText = `${round(mouse.x)}, ${round(mouse.y)}`
  })
  return (
    <group>
      <Html>
        <div style={{backgroundColor: 'white'}} ref={ref}>Hello world</div>
      </Html>
    </group>
  )
}

export const Bug = () => <BugRepro />
Bug.storyName = 'Bug'

export const HTMLSt = () => <HTMLScene />
HTMLSt.storyName = 'Default'
