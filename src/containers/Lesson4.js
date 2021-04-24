import React, { useState } from 'react';
import { Stage, Circle, Layer, Ellipse, Rect, Arc } from 'react-konva';
export default function Lesson3() {
  const [radius, setRadius] = useState(100);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <input
          type="number"
          name=""
          id=""
          onChange={(e) => {
            setRadius(() =>
              parseFloat(e.target.value) > 250
                ? 250
                : parseFloat(e.target.value)
            );
          }}
          value={radius}
          max={600}
        />
      </div>
      <p>{`Bán kính hình tròn : ${radius} ${
        parseFloat(radius) === 250 ? 'MAX' : ''
      } `}</p>
      <Stage
        width={600}
        height={window.innerHeight - 200}
        style={{
          background: '#fff',
          marign: 30,
          border: '1px solid #eee',
          borderRadius: 10,
        }}
      >
        <Layer>
          <Arc
            x={600 / 2}
            y={(window.innerHeight - 200) / 2}
            innerRadius={radius}
            outerRadius={radius}
            angle={180}
            fill="#222"
            stroke="#338eef"
            dash={radius > 100 ? [10, 10, 10] : [5, 5, 5]}
            strokeWidth={3}
            rotation={180}
          />
          <Arc
            x={600 / 2}
            y={(window.innerHeight - 200) / 2}
            innerRadius={radius}
            outerRadius={radius}
            angle={180}
            fill="#222"
            stroke="#338eef"
            strokeWidth={3}
          />
        </Layer>
      </Stage>
    </div>
  );
}
