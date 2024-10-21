import { useNavigate } from "react-router-dom";

export function BarOptions() {
    const navigate = useNavigate();

    function handleBackToHome() {
        navigate('/')
    }

    return (
        <div className='w-52 max-h-[calc(90vh-200px) bg-secondaryBgDark rounded-md shadow-lg p-4 border-2 border-primaryButtonBg'>
            <ul className='flex flex-col space-y-3'>
                <li>
                    <button
                        onClick={handleBackToHome}
                        className='w-full py-1 text-left px-1 text-colorDefaultDark border-b-2 hover:bg-primaryGreenHover transition-colors'>
                        Início
                    </button>
                </li>
                <li>
                    <button
                        className='w-full py-1 text-left px-1 text-colorDefaultDark border-b-2 hover:bg-primaryGreenHover transition-colors'>
                        Registrar Produto
                    </button>
                </li>
            </ul>
        </div>
    );
}
