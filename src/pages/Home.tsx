import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { OptionsInput } from "../components/OptionsInput";
import { TextInput } from "../components/TextInput";
import { useNavigate } from 'react-router-dom';
import { fakeProducts } from '../utils/fakeProducts'
import {Footer} from "../components/Footer.tsx";
import {useState} from "react";

export function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

    function handleDetails(id: string) {
        navigate(`/details/${id}`)
    }

    function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

   const filteredProducts = fakeProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className="flex flex-col items-center flex-1 w-full py-5">
        <main className="w-11/12 flex-1 overflow-y-auto flex flex-col gap-3 p-3 bg-secondaryBgDark rounded-xl">
          <div className="my-3.5">
            <TextInput
                type="text"
                placeholder="Pesquisar Produto"
                hasIcon={true}
                readonly={false}
                value={search}
                onChange={handleSearchChange}
            />
          </div>
          <div>
            <OptionsInput />
          </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 overflow-y-auto max-h-[calc(90vh-200px)]">
                {filteredProducts.map((product) => (
                    <Card
                        key={product.id}
                        title={product.title}
                        amount={product.amount}
                        price={product.price}
                        onClick={() => handleDetails(product.id)}
                    />
                ))}
            </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
