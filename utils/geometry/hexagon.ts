interface Point {
	x: number;
	y: number;
}

export function calculateHexagonPoints(radius: number): Point[] {
	const points: Point[] = [];
	const numberOfPoints = 6;
	const angleStep = (2 * Math.PI) / numberOfPoints;
	// Start from the top (270 degrees or -90 degrees in radians)
	const startAngle = -Math.PI / 2;

	for (let i = 0; i < numberOfPoints; i++) {
		const angle = startAngle + i * angleStep;
		points.push({
			x: Math.round(radius * Math.cos(angle)),
			y: Math.round(radius * Math.sin(angle)),
		});
	}

	return points;
}
