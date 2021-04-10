import { Rect, Ellipse, Line, Layer } from 'react-konva';

export default function Cylinder({ x, y, width, height }) {
  return (
    <>
      <Layer draggable>
        <Ellipse
          x={x}
          y={y + height}
          width={width}
          height={40}
          fill="#fff"
          stroke="#222"
        />
        <Rect
          x={x - width / 2}
          y={y - 2}
          width={width}
          height={height}
          fill="#fff"
          stroke="#fff"
        />
        <Line
          x={x - width / 2}
          y={y}
          points={[0, height, 0, 0, 0, 0]}
          tension={0.5}
          closed
          stroke="black"
        />
        <Ellipse
          x={x}
          y={y}
          width={width}
          height={40}
          fill="#fff"
          stroke="#222"
        />
        <Line
          x={width / 2 + x}
          y={y}
          points={[0, height, 0, 0, 0, 0]}
          tension={0.5}
          stroke="black"
        />
      </Layer>
    </>
  );
}
