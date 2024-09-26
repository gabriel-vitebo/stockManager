interface TextInputProps {
  placeholder?: string;
  hasIcon: boolean;
  type: string;
}

export function TextInput({ placeholder, hasIcon, type }: TextInputProps) {
  return (
    <div className={`w-full flex items-center bg-gray-100 rounded-lg ${hasIcon ? 'pr-0' : 'pr-2'}`}>
      <input
        type={type}
        placeholder={placeholder}
        className={`flex-1 border-none outline-none py-2 px-3 text-base text-gray-900 bg-gray-100 rounded-l-lg ${hasIcon ? 'rounded-r-none' : ''}`}
      />
      {hasIcon && (
        <button className="flex items-center justify-center p-2 bg-gray-100 rounded-r-lg">
          <p>VOU BOTAR UM ICONE AQUI</p>
        </button>
      )}
    </div>
  );
}
