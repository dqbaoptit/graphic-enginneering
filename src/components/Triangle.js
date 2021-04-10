import { Text, Line, Layer } from 'react-konva';

export default function Triangle({ x, y, a, b, c }) {
  return (
    <Layer x={x} y={y} draggable>
      <Line points={[a.x, a.y, b.x, b.y]} tension={0.5} closed stroke="black" />
      <Line points={[a.x, a.y, c.x, c.y]} tension={0.5} closed stroke="black" />
      <Line points={[c.x, c.y, b.x, b.y]} tension={0.5} closed stroke="black" />
    </Layer>
  );
}
