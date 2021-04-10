import { Line, Layer } from 'react-konva';

export default function Rectangle({ x, y, width }) {
  return (
    <>
      <Line
        x={x}
        y={y}
        points={[0, width, 0, 0, 0, 0]}
        tension={0.5}
        closed
        stroke="black"
      />
      <Line
        x={x}
        y={y}
        points={[width, 0, 0, 0, 0, 0]}
        tension={0.5}
        closed
        stroke="black"
      />
      <Line
        x={x + width}
        y={y}
        points={[0, width, 0, 0, 0, 0]}
        tension={0.5}
        closed
        stroke="black"
      />
      <Line
        x={x}
        y={y + width}
        points={[width, 0, 0, 0, 0, 0]}
        tension={0.5}
        closed
        stroke="black"
      />
    </>
  );
}
