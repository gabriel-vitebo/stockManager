import { BarsIcon } from "./Icons/BarsIcon";
import { ExitIcon } from "./Icons/ExitIcon";

export function Header() {
  return (
    <div className="flex bg-secondaryBgDark justify-between px-5  py-1 items-center">
      <div><BarsIcon /></div>
      <h1 className="text-primaryGreen font-semibold text-xl">StockManager</h1>
      <button><ExitIcon /></button>
    </div>
  )
}

// secondaryBgDark