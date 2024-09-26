import { Header } from "../components/Header";
import { OptionsInput } from "../components/OptionsInput";
import { TextInput } from "../components/TextInput";

export function Home() {
  return (
    <>
      <Header />
      <div className="flex items-center flex-col py-5 w-full">
        <main className="w-11/12 h-[500px] overflow-y-auto flex flex-col gap-3 p-3 bg-secondaryBgDark rounded-xl">
          <div className=" my-3.5">
            <TextInput type="text" placeholder="Pesquisar Produto" hasIcon={true} />
          </div>
          <div>
            <OptionsInput />
          </div>
        </main>
      </div>
    </>
  )
}
