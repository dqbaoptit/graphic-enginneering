import React, { useState } from 'react';
import { Stage, Circle, Layer } from 'react-konva';
export default function Lesson3() {
  const [radius, setRadius] = useState(10);

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
          <Circle
            draggable
            x={600 / 2}
            y={(window.innerHeight - 200) / 2}
            radius={radius}
            fill="#fff"
            stroke="#338eef"
            strokeWidth={2}
            dash={[5, 5, 5]}
          />
        </Layer>
      </Stage>
    </div>
  );
}
