interface ButtonsProps {
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function Buttons({ value, onClick }: ButtonsProps) {
  return (
    <button
      className="
        w-full 
        border-none 
        rounded-md 
        py-2
      text-colorDefaultDark
      bg-secondaryGreen 
        font-semibold"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
