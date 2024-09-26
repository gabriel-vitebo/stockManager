interface ButtonsProps {
  value: string;
}

export function Buttons({ value }: ButtonsProps) {
  return (
    <button className="w-full border-none rounded-md py-2 text-colorDefaultDark bg-secondaryGreen font-semibold">
      {value}
    </button>
  );
}
