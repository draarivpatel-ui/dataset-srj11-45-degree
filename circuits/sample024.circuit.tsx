import { RotatedPadObstacle, RotatedRectEndpointBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: -5.8, pcbY: 1.7, padWidth: 6.5, padHeight: 0.85, pcbRotation: 45 },
  { name: "OBS2", pcbX: -0.9, pcbY: -1.8, padWidth: 4.6, padHeight: 0.85, pcbRotation: -45 },
  { name: "OBS3", pcbX: 2.9, pcbY: 2.05, padWidth: 5.2, padHeight: 0.85, pcbRotation: 45 },
  { name: "OBS4", pcbX: 6.6, pcbY: -1.25, padWidth: 3.8, padHeight: 0.85, pcbRotation: -45 },
] as const

/** Four-obstacle rising slot with alternating rotated rectangular blockers. */
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
      { x: -3.7, y: -0.7 },
      { x: 2.7, y: 0.8 },
    ]}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </RotatedRectEndpointBoard>
)
