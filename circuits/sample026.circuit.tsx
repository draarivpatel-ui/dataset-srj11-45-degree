import { RotatedPadObstacle, RotatedRectEndpointBoard } from "./common"

const obstacles = [
  { name: "OBS1", pcbX: -7.1, pcbY: -2.1, padWidth: 4.8, padHeight: 0.85, pcbRotation: -45 },
  { name: "OBS2", pcbX: -4.6, pcbY: -0.2, padWidth: 3.4, padHeight: 0.85, pcbRotation: 45 },
  { name: "OBS3", pcbX: -0.4, pcbY: -2.2, padWidth: 6.1, padHeight: 0.85, pcbRotation: -45 },
  { name: "OBS4", pcbX: 3.6, pcbY: 2.1, padWidth: 6.5, padHeight: 0.85, pcbRotation: 45 },
  { name: "OBS5", pcbX: 6.7, pcbY: -1.6, padWidth: 5.2, padHeight: 0.85, pcbRotation: -45 },
  { name: "OBS6", pcbX: 9.4, pcbY: 1.8, padWidth: 4.2, padHeight: 0.85, pcbRotation: 45 },
] as const

/** Six-obstacle falling slot with both route endpoints centered in rotated rectangles. */
export default () => (
  <RotatedRectEndpointBoard
    width={27}
    height={11}
    start={{ x: -10.2, y: 3.2 }}
    end={{ x: 10.2, y: -3.2 }}
    startRotation={-45}
    endRotation={-45}
    endpointWidth={3.2}
    endpointHeight={1.25}
    traceRouteHints={[
      { x: -5.6, y: 0.5 },
      { x: -0.3, y: -0.7 },
      { x: 5.1, y: 0.6 },
    ]}
  >
    {obstacles.map((obstacle) => (
      <RotatedPadObstacle key={obstacle.name} {...obstacle} />
    ))}
  </RotatedRectEndpointBoard>
)
