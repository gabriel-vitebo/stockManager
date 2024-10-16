import {useNavigate} from "react-router-dom";

export function BarOptions() {
    const navigate = useNavigate();

    function handleBackToHome() {
        navigate('/')
    }

    return (
        <div className='w-52 min-h-[200px] bg-secondaryBgDark rounded'>
            <ul className='flex flex-col'>
                <li>
                    <button onClick={() => handleBackToHome()}>
                        Inicio
                    </button>
                </li>
                <li>
                    <button>Registrar Produto</button>
                </li>
                <li>
                    <button>Sair</button>
                </li>
            </ul>
        </div>
    )
}