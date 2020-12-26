import React from 'react'

export default function Eye(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 22 15"
        {...props}
      >
        <path
          d="M4.3 2.1a11.738 11.738 0 0113.4 0A11.943 11.943 0 0122 7.5a11.792 11.792 0 01-17.7 5.4A11.943 11.943 0 010 7.5a11.321 11.321 0 014.3-5.4zm3.1 9a4.852 4.852 0 003.5 1.5 4.539 4.539 0 003.5-1.5 5.288 5.288 0 001.5-3.5 4.691 4.691 0 00-1.5-3.5 5.288 5.288 0 00-3.5-1.5 4.539 4.539 0 00-3.5 1.5 5.288 5.288 0 00-1.5 3.5 4.852 4.852 0 001.5 3.5zm1.5-5.7A2.9 2.9 0 118 7.5a2.878 2.878 0 01.9-2.1z"
          fill="rgba(6,126,114,.32)"
        />
      </svg>
    )
}
