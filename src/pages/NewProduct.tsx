import { Header } from "../components/Header";
import { TextInput } from "../components/TextInput";
import { Footer } from "../components/Footer";
import { Buttons } from "../components/Buttons";
import { TextAreaInput } from "../components/TextAreaInput";
import { api } from "../services/api";
import { useState } from "react";

interface NewProductProps {
    title: string
    description: string
    price: string
    initialAmount: number
    userId: string
}

async function handleSubmit({
    title,
    description,
    price,
    initialAmount,
    userId
}: NewProductProps) {
    try {
        await api.post('/products/new', {
            title,
            description,
            price,
            initialAmount,
            userId,
        });
        alert('Produto adicionado com sucesso:');
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
    }
}

export function NewProduct() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [initialAmount, setInitialAmount] = useState(0);


    const userId = "0dc99b02-9d21-48cd-b5fe-8c79c8ac5e25"

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        handleSubmit({ title, description, price, initialAmount, userId });
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className="flex flex-col items-center flex-1 w-full py-5">
                <main className="w-11/12 flex-1 overflow-y-auto flex flex-col gap-3 p-3 bg-secondaryBgDark rounded-xl">
                    <form onSubmit={handleFormSubmit}>
                        <div className="my-3.5">
                            <TextInput
                                type="text"
                                placeholder="Título do Produto"
                                hasIcon={false}
                                readonly={false}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="my-3.5">
                            <TextInput
                                type="text"
                                placeholder="Preço do Produto"
                                hasIcon={false}
                                readonly={false}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="my-3.5">
                            <TextInput
                                type="number"
                                placeholder="Quantidade do Produto"
                                hasIcon={false}
                                readonly={false}
                                value={initialAmount.toString()}
                                onChange={(e) => setInitialAmount(Number(e.target.value))}
                            />
                        </div>
                        <div className="my-3.5">
                            <TextAreaInput
                                placeholder="Descrição do Produto"
                                readonly={false}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="my-3.5">
                            <Buttons value="Adicionar Produto" type="submit" />
                        </div>
                    </form>
                </main>
            </div>
            <Footer />
        </div>
    );
}