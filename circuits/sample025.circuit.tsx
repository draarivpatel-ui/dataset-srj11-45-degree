import { RotatedPadObstacle, RotatedRectEndpointBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: -5.8, pcbY: 1.7, padWidth: 6.5, padHeight: 0.85, pcbRotation: 45 },
  { name: "OBS2", pcbX: -3.1, pcbY: 0.2, padWidth: 3.2, padHeight: 0.85, pcbRotation: -45 },
  { name: "OBS3", pcbX: 1.4, pcbY: 2.2, padWidth: 6.3, padHeight: 0.85, pcbRotation: 45 },
  { name: "OBS4", pcbX: 4.8, pcbY: -1.7, padWidth: 6.1, padHeight: 0.85, pcbRotation: -45 },
  { name: "OBS5", pcbX: 6.9, pcbY: 1.45, padWidth: 4.2, padHeight: 0.85, pcbRotation: 45 },
] as const

/** Five-obstacle rising slot with both endpoints inside rotated rectangular pads. */
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
      { x: -3.9, y: -0.8 },
      { x: 2.8, y: 0.8 },
    ]}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </RotatedRectEndpointBoard>
)
