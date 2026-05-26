type Point = {
	x: number;
	y: number;
};

type SingleTraceBoardProps = {
	width: number | string;
	height: number | string;
	start: Point;
	end: Point;
	traceRouteHints?: Point[];
	children?: any;
};

type RotatedPadObstacleProps = {
	name: string;
	pcbX: number;
	pcbY: number;
	layer?: string;
	padWidth?: number | string;
	padHeight?: number | string;
	pcbRotation?: number;
};

type RotatedRectEndpointProps = {
	name: string;
	pcbX: number;
	pcbY: number;
	padWidth?: number | string;
	padHeight?: number | string;
	pcbRotation?: number;
};

type RotatedRectEndpointBoardProps = {
	width: number | string;
	height: number | string;
	start: Point;
	end: Point;
	startRotation?: number;
	endRotation?: number;
	endpointWidth?: number | string;
	endpointHeight?: number | string;
	traceRouteHints?: Point[];
	children?: any;
};

type DiagonalTwinPadObstacleProps = {
	name: string;
	pcbX: number;
	pcbY: number;
	padSize?: number;
	gap?: number;
	stretchRotation?: number;
	padRotation?: number;
};

export const SingleTraceBoard = ({
	width,
	height,
	start,
	end,
	traceRouteHints,
	children,
}: SingleTraceBoardProps) => (
	<board width={width} height={height} layers={2} routingDisabled>
		<testpoint
			name="TP1"
			footprintVariant="pad"
			padShape="circle"
			padDiameter="1.1mm"
			layer="top"
			pcbX={start.x}
			pcbY={start.y}
		/>
		<testpoint
			name="TP2"
			footprintVariant="pad"
			padShape="circle"
			padDiameter="1.1mm"
			layer="top"
			pcbX={end.x}
			pcbY={end.y}
		/>
		{children}
		<trace from="TP1.pin1" to="TP2.pin1" pcbRouteHints={traceRouteHints} />
	</board>
);

export const RotatedPadObstacle = ({
	name,
	pcbX,
	pcbY,
	layer,
	padWidth = 2.4,
	padHeight = 2.4,
	pcbRotation = 45,
}: RotatedPadObstacleProps) => (
	<chip
		// @ts-expect-error
		layer={layer ?? "top"}
		name={name}
		pcbX={pcbX}
		pcbY={pcbY}
		pcbRotation={pcbRotation}
		pinLabels={{ pin1: "OBSTACLE" }}
		pinAttributes={{ OBSTACLE: { doNotConnect: true } }}
		footprint={
			<footprint>
				<smtpad
					portHints={["pin1"]}
					shape="rect"
					width={padWidth}
					height={padHeight}
				/>
			</footprint>
		}
	/>
);

export const RotatedRectEndpoint = ({
	name,
	pcbX,
	pcbY,
	padWidth = 2.8,
	padHeight = 1.35,
	pcbRotation = 45,
}: RotatedRectEndpointProps) => (
	<chip
		name={name}
		pcbX={pcbX}
		pcbY={pcbY}
		pcbRotation={pcbRotation}
		pinLabels={{ pin1: "SIGNAL" }}
		footprint={
			<footprint>
				<smtpad
					portHints={["pin1"]}
					shape="rect"
					width={padWidth}
					height={padHeight}
				/>
			</footprint>
		}
	/>
);

export const RotatedRectEndpointBoard = ({
	width,
	height,
	start,
	end,
	startRotation = 45,
	endRotation = 45,
	endpointWidth,
	endpointHeight,
	traceRouteHints,
	children,
}: RotatedRectEndpointBoardProps) => (
	<board width={width} height={height} layers={2} routingDisabled>
		<RotatedRectEndpoint
			name="EP1"
			pcbX={start.x}
			pcbY={start.y}
			padWidth={endpointWidth}
			padHeight={endpointHeight}
			pcbRotation={startRotation}
		/>
		<RotatedRectEndpoint
			name="EP2"
			pcbX={end.x}
			pcbY={end.y}
			padWidth={endpointWidth}
			padHeight={endpointHeight}
			pcbRotation={endRotation}
		/>
		{children}
		<trace from="EP1.pin1" to="EP2.pin1" pcbRouteHints={traceRouteHints} />
	</board>
);

export const DiagonalTwinPadObstacle = ({
	name,
	pcbX,
	pcbY,
	padSize = 1.9,
	gap = 0.1,
	stretchRotation = 45,
	padRotation = 0,
}: DiagonalTwinPadObstacleProps) => {
	const stretchRadians = (stretchRotation * Math.PI) / 180;
	const padRadians = (padRotation * Math.PI) / 180;
	const relativeAngle = stretchRadians - padRadians;
	const supportRadius =
		(Math.abs(Math.cos(relativeAngle)) + Math.abs(Math.sin(relativeAngle))) *
		(padSize / 2);
	const padOffset = supportRadius + gap / 2;
	const dx = Math.cos(stretchRadians) * padOffset;
	const dy = Math.sin(stretchRadians) * padOffset;

	return (
		<>
			<RotatedPadObstacle
				name={`${name}_A`}
				pcbX={pcbX - dx}
				pcbY={pcbY - dy}
				padWidth={padSize}
				padHeight={padSize}
				pcbRotation={padRotation}
			/>
			<RotatedPadObstacle
				name={`${name}_B`}
				pcbX={pcbX + dx}
				pcbY={pcbY + dy}
				padWidth={padSize}
				padHeight={padSize}
				pcbRotation={padRotation}
			/>
		</>
	);
};
