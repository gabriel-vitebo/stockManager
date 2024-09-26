import { Buttons } from "../components/Buttons";
import { TextInput } from "../components/TextInput";

export function Register() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-green-700 mb-6">StockManager</h1>
      <div className="w-[90%] flex flex-col gap-5 justify-center items-center">
        <TextInput
          placeholder="Email"
          hasIcon={false}
          type="text"
        />
        <TextInput
          placeholder="Senha"
          hasIcon={false}
          type="password"
        />
      </div>
      <div className="w-[90%] flex gap-2 mt-5">
        <Buttons value="Entrar" />
        <Buttons value="Cadastrar" />
      </div>
    </div>
  )
}
