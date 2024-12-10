import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { OptionsInput } from "../components/OptionsInput";
import { TextInput } from "../components/TextInput";
import { useNavigate } from 'react-router-dom';
import { Footer } from "../components/Footer.tsx";
import { useEffect, useState } from "react";
import { api } from "../services/api.ts";

interface ProductProps {
  id: string;
  title: string;
  amount: number;
  price: string;
  initialAmount: number;
  currentQuantity: number;
}

export function Home() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<ProductProps[]>([])

  const navigate = useNavigate()

  function handleDetails(id: string) {
    navigate(`/details/${id}`)
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/products/0dc99b02-9d21-48cd-b5fe-8c79c8ac5e25');
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (Array.isArray(response.data.response)) {
          setProducts(response.data.response);
        } else {
          console.error('API response is not an array:', response.data);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }
    fetchData();
  }, []);

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
                amount={product.initialAmount}
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
