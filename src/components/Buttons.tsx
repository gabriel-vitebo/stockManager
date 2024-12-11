interface ButtonsProps {
  value: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  typeBg?: 'secondaryGreen' | 'error' | 'secondaryButtonBg';
  type?: string
}

export function Buttons({ value, onClick, typeBg = 'secondaryGreen', type }: ButtonsProps) {
  const backgroundColor = typeBg === 'secondaryGreen'
    ? 'bg-secondaryGreen'
    : typeBg === 'error'
      ? 'bg-error'
      : 'bg-secondaryButtonBg';

  return (
    <button
      className={`w-full border-none rounded-md py-2 text-colorDefaultDark font-semibold ${backgroundColor}`}
      onClick={onClick}
      type={type as "submit" | "reset" | "button" | undefined}
    >
      {value}
    </button>
  );
}
