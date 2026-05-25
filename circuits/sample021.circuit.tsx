import { RotatedPadObstacle, RotatedRectEndpointBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: 0.8, pcbY: 1.35, padWidth: 4.2, padHeight: 0.85, pcbRotation: 45 },
] as const

/** Single-obstacle rising slot with rotated rectangular endpoints. */
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
    traceRouteHints={[{ x: 1.4, y: 0.45 }]}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </RotatedRectEndpointBoard>
)
