import { Header } from "../components/Header";
import { TextInput } from "../components/TextInput";

export function Home() {
  return (
    <>
      <Header />
      <div className="flex items-center flex-col py-5 w-full">
        <main className="w-11/12 h-[500px] overflow-y-auto flex flex-col gap-3 p-3 bg-secondaryBgDark rounded-xl">
          <div className=" mt-3.5 mb-6">
            <TextInput type="text" placeholder="Pesquisar Produto" hasIcon={true} />
          </div>
        </main>
      </div>
    </>
  )
}
