import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { OptionsInput } from "../components/OptionsInput";
import { TextInput } from "../components/TextInput";
import { useNavigate } from 'react-router-dom';
import { fakeProducts } from '../utils/fakeProducts'

export function Home() {
  const navigate = useNavigate()

    function handleDetails(id: string) {
        navigate(`/details/${id}`)
    }

  return (
    <>
      <Header />
      <div className="flex items-center flex-col py-5 w-full">
        <main className="w-11/12 h-[500px] overflow-y-auto flex flex-col gap-3 p-3 bg-secondaryBgDark rounded-xl">
          <div className=" my-3.5">
            <TextInput type="text" placeholder="Pesquisar Produto" hasIcon={true} readonly={false} />
          </div>
          <div>
            <OptionsInput />
          </div>
          {
            fakeProducts.map((product) => (
              <Card
                  title={product.title}
                  amount={product.amount}
                  price={product.price}
                  onClick={() => handleDetails(product.id)}
              />
            ))
          }
        </main>
      </div>
    </>
  )
}
