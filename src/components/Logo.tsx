import React from 'react';

type ILogoProps = {
  xl?: boolean;
};
const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  return (
    <>
      <svg
        height={size}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5523 14.5183V17.3218C17.5523 17.3556 17.5523 17.3893 17.5503 17.4231C17.4966 18.9809 16.2171 20.2266 14.6474 20.2266C13.0778 20.2266 11.8002 18.9809 11.7466 17.4231H11.7446V11.6154H14.6474C16.2509 11.6154 17.5523 12.9148 17.5523 14.5183Z"
          fill="#0058D3"
        />
        <path
          d="M17.5523 26.1337V29.0366H14.6474C13.044 29.0366 11.7446 27.7371 11.7446 26.1337C11.7446 24.5303 13.044 23.2308 14.6474 23.2308C16.2509 23.2308 17.5523 24.5303 17.5523 26.1337Z"
          fill="#3CD0B6"
        />
        <path
          d="M29.0366 11.6154V26.1337C29.0366 27.7371 27.7371 29.0366 26.1337 29.0366H23.2289V14.5183C23.2289 12.9148 24.5303 11.6154 26.1337 11.6154H29.0366Z"
          fill="#3CD0B6"
        />
        <path
          d="M29.0365 0V2.90485C29.0365 4.50827 27.7371 5.80771 26.1337 5.80771H8.8417C7.23629 5.80771 5.93686 7.10913 5.93686 8.71255V26.1337C5.93686 27.7371 4.63742 29.0365 3.034 29.0365H0V2.90485C0 1.30142 1.29943 0 2.90286 0H29.0365Z"
          fill="#0058D3"
        />
      </svg>
    </>
  );
};

export default Logo;
