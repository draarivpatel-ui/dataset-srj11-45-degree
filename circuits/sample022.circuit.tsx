import { RotatedPadObstacle, RotatedRectEndpointBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: -4.8, pcbY: 1.45, padWidth: 5.1, padHeight: 0.85, pcbRotation: 45 },
  { name: "OBS2", pcbX: 4.5, pcbY: -1.35, padWidth: 4.6, padHeight: 0.85, pcbRotation: -45 },
] as const

/** Two-obstacle rising slot with rotated rectangular endpoints. */
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
      { x: -2.9, y: -0.6 },
      { x: 2.8, y: 0.65 },
    ]}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </RotatedRectEndpointBoard>
)
