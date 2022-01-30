import { VFC } from "react";

/**
 * Taileind fixed size list
 * @see https://tailwindcss.com/docs/height#fixed-heights
 */
const TAILWIND_FIXED_SIZES = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24,
  28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
] as const;

type Size = typeof TAILWIND_FIXED_SIZES[number];
type Axis = "vertical" | "horizontal";

interface SpacerProps {
  size: Size;
  axis?: Axis;
}

export const Spacer: VFC<SpacerProps> = ({ size, axis }) => {
  const w = axis === "vertical" ? "px" : size;
  const h = axis === "horizontal" ? "px" : size;
  const minW = axis === "horizontal" ? 1 : size;
  const minH = axis === "horizontal" ? 1 : size;

  return (
    <span
      className={`block w-${w} h-${h}`}
      style={{
        minWidth: minW,
        minHeight: minH,
      }}
    />
  );
};
