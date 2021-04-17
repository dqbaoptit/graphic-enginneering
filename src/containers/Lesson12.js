import { Line, Stage, Layer, Arrow } from 'react-konva';
import { Triangle, Square, Cylinder, Rectangle } from '../components';
export default function Lesson12() {
  return (
    <Stage
      width={900}
      height={window.innerHeight - 100}
      style={{
        background: '#fff',
        marign: 30,
        border: '1px solid #eee',
        borderRadius: 10,
      }}
    >
      <Layer draggable>
        <Rectangle x={20} y={20} width={100} height={200} />
        <Square x={280} y={20} width={100} />
        <Line
          x={20}
          y={200}
          points={[100, 0, 0, 0, 0, 0]}
          tension={5}
          stroke="#222"
          strokeWidth={2}
          dash={[10, 1, 10]}
        />
        <Line
          x={20}
          y={240}
          points={[100, 0, 0, 0, 0, 0]}
          tension={5}
          stroke="#222"
          strokeWidth={2}
          dash={[10, 10]}
        />
        <Line
          x={20}
          y={280}
          points={[100, 0, 0, 0, 0, 0]}
          tension={5}
          stroke="#222"
          strokeWidth={2}
        />
        <Line
          x={20}
          y={320}
          points={[100, 0, 0, 0, 0, 0]}
          tension={5}
          stroke="#222"
          strokeWidth={2}
          dash={[10, 3, 3]}
        />
        <Arrow
          x={20}
          y={280}
          points={[0, 100, 100, 100]}
          stroke="#222"
          fill="#000"
          strokeWidth={5}
          pointerLength={10}
          pointerWidth={10}
        />
      </Layer>
      <Triangle
        x={200}
        y={100}
        a={{ x: 200, y: 200 }}
        b={{ x: 300, y: 300 }}
        c={{ x: 100, y: 300 }}
      />
      <Cylinder x={500} y={40} width={120} height={70} />
    </Stage>
  );
}
