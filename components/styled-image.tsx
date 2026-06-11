import React from "react";

type StyledImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
export type ImageRounded = 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
export function StyledImage({
  className = "",
  style,
  rounded = 'lg',
  ...imgProps
}: StyledImageProps & {rounded: ImageRounded }) {
  return (
    <div className="relative h-full w-full">
      {/* Inset border overlay */}
      <div
        className={`absolute inset-0 z-10 h-full w-full rounded-${rounded} pointer-events-none`}
        style={{
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)",
        }}
      />

      <img
        {...imgProps}
        className={`rounded-${rounded} shrink-0 ${className}`}
        style={{
          margin:0,
          ...style, // allow full override
        }}
      />
    </div>
  );
}