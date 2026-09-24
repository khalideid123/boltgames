export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Bolt({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="27"
      height="32"
      viewBox="0 0 27 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M15 0 0 18h11L8 32l19-21H15l5-11z" />
    </svg>
  );
}
