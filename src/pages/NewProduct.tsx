import { Header } from "../components/Header";
import { TextInput } from "../components/TextInput";
import {Footer} from "../components/Footer.tsx";

export function NewProduct() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className="flex flex-col items-center flex-1 w-full py-5">
                <main className="w-11/12 flex-1 overflow-y-auto flex flex-col gap-3 p-3 bg-secondaryBgDark rounded-xl">
                    <div className="my-3.5">
                        <TextInput
                            type="text"
                            placeholder="Titulo do Produto"
                            hasIcon={false}
                            readonly={false}
                        />
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    )
}
