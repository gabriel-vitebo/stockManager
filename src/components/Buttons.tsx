interface ButtonsProps {
  value: string;
}

export function Buttons({ value }: ButtonsProps) {
  return (
    <button className="w-full border-none rounded-md py-2 text-white bg-green-600 font-semibold">
      {value}
    </button>
  );
}
