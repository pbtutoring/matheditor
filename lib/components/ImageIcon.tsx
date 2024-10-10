import React from "react";

export interface IconProps extends React.HTMLAttributes<SVGElement> {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
  stroke?: string;
  viewBox?: string;
}
export function ImageIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 24}
      height={props.height ?? props.width ?? 24}
      viewBox={props.viewBox ?? "0 0 24 24"}
      fill={props.fill ?? "none"}
      stroke={props.stroke ?? "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  );
}
