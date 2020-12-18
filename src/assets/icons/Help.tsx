import React from 'react'

export default function Help(props: any) {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={19}
          height={19}
          viewBox="0 0 19 19"
          {...props}
        >
          <g stroke="#888" strokeWidth={1.5} fill="none">
            <circle cx={9.5} cy={9.5} r={9.5} stroke="none" />
            <circle cx={9.5} cy={9.5} r={8.75} />
          </g>
          <text
            transform="translate(6.257 12.886)"
            fill="#3e5351"
            fontSize={12}
            fontFamily="Rubik-Regular,Rubik"
          >
            <tspan x={0} y={0}>
              {"?"}
            </tspan>
          </text>
        </svg>
      )
}
