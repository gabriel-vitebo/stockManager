import { SearchIcon } from "./Icons/SearchIcon";

interface TextInputProps {
  placeholder?: string;
  hasIcon: boolean;
  readonly: boolean
  type: string;
}

export function TextInput({ placeholder, hasIcon, type, readonly }: TextInputProps) {
  return (
    <div className={`w-full flex items-center  rounded-lg `}>
      <input
        type={type}
        placeholder={placeholder}
        className={`flex-1 border-none outline-none py-2 pl-3 placeholder:text-primaryBgDark bg-colorDefaultDark rounded-l-lg ${hasIcon ? 'rounded-r-none' : 'rounded-lg'}`}
        readOnly={readonly}
      />
      {hasIcon && (
        <button className="flex items-center justify-center p-2 bg-colorDefaultDark rounded-r-lg">
          <SearchIcon />
        </button>
      )}
    </div>
  );
}
