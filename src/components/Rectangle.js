import { Line, Layer } from 'react-konva';

export default function Rectangle({ x, y, width, height }) {
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
        points={[height, 0, 0, 0, 0, 0]}
        tension={0.5}
        closed
        stroke="black"
      />
      <Line
        x={x + height}
        y={y}
        points={[0, width, 0, 0, 0, 0]}
        tension={0.5}
        closed
        stroke="black"
      />
      <Line
        x={x}
        y={y + width}
        points={[height, 0, 0, 0, 0, 0]}
        tension={0.5}
        closed
        stroke="black"
      />
    </>
  );
}
