import { RotatedPadObstacle, RotatedRectEndpointBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: -5.4, pcbY: 1.55, padWidth: 5.8, padHeight: 0.85, pcbRotation: 45 },
  { name: "OBS2", pcbX: -0.4, pcbY: -1.65, padWidth: 4.2, padHeight: 0.85, pcbRotation: -45 },
  { name: "OBS3", pcbX: 4.9, pcbY: 1.55, padWidth: 4.8, padHeight: 0.85, pcbRotation: 45 },
] as const

/** Three-obstacle rising slot with a wider central passage. */
export default () => (
  <RotatedRectEndpointBoard
    width={25}
    height={10.5}
    start={{ x: -9.5, y: -3.2 }}
    end={{ x: 9.5, y: 3.2 }}
    startRotation={45}
    endRotation={45}
    endpointWidth={3.2}
    endpointHeight={1.25}
    traceRouteHints={[
      { x: -3.2, y: -0.65 },
      { x: 3.1, y: 0.75 },
    ]}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </RotatedRectEndpointBoard>
)
