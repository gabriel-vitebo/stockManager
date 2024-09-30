import { useNavigate } from "react-router-dom";
import { Buttons } from "../components/Buttons";
import { TextInput } from "../components/TextInput";

export function Login() {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate('/register')
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center w-11/12 max-w-96 bg-secondaryBgDark py-10 rounded-xl">
        <h1 className="text-4xl font-bold text-primaryGreen mb-6">StockManager</h1>
        <div className="w-[90%] flex flex-col gap-5 justify-center items-center">
          <TextInput
            placeholder="Email"
            hasIcon={false}
            type="email"
          />
          <TextInput
            placeholder="Senha"
            hasIcon={false}
            type="password"
          />
        </div>
        <div className="w-[90%] flex gap-2 mt-5">
          <Buttons value="Entrar" onClick={() => handleNavigate()} />
          <Buttons value="Cadastrar" typeBg={'secondaryButtonBg'} onClick={() => handleNavigate()} />
        </div>
      </div>
    </div>
  )
}
