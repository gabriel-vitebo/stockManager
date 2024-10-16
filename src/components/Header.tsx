import { BarsIcon } from "./Icons/BarsIcon";
import { ExitIcon } from "./Icons/ExitIcon";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {BarOptions} from "./DropZone/BarOptions.tsx";

export function Header() {
  const navigate = useNavigate();
  const [toggleDropZone, setToggleDropZone] = useState(false);

  function handleBackToHome() {
      navigate('/')
  }

  return (
    <div className="flex bg-secondaryBgDark justify-between px-5  py-1 items-center">
      <div onClick={() => setToggleDropZone(!toggleDropZone)} className="relative">
          <BarsIcon />
      </div>
        {
            toggleDropZone && (
                <div className='absolute left-12 top-2'>
                    <BarOptions />
                </div>
            )
        }
      <h1 className="text-primaryGreen font-semibold text-xl" onClick={() => handleBackToHome()}>StockManager</h1>
      <button><ExitIcon /></button>
    </div>
  )
}

// secondaryBgDark