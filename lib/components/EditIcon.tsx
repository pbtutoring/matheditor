// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

import React from "react";

export interface IconProps extends React.HTMLAttributes<SVGElement> {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
  stroke?: string;
  viewBox?: string;
}
export function EditIcon(props: IconProps) {
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
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
  );
}
