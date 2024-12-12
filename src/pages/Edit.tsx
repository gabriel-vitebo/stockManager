import { Header } from "../components/Header.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TextInput } from "../components/TextInput.tsx";
import { TextAreaInput } from "../components/TextAreaInput.tsx";
import { Buttons } from "../components/Buttons.tsx";
import { Footer } from "../components/Footer.tsx";
import { api } from "../services/api.ts";

interface ProductEditProps {
    id: string;
    title: string;
    price: string;
    initialAmount: number;
    description: string;
    currentQuantity: number
}

export function Edit() {
    const params = useParams();
    const navigate = useNavigate()

    const [product, setProduct] = useState<ProductEditProps>({
        id: '',
        title: '',
        price: '',
        initialAmount: 0,
        description: '',
        currentQuantity: 0,
    });

    const [updatedProduct, setUpdatedProduct] = useState<Partial<ProductEditProps>>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/products/details/${params.id}`);
                setProduct(response.data.response);
            } catch (error) {
                console.error('Failed to fetch product:', error);
            }
        };

        fetchData();
    }, [params.id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUpdatedProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    console.log(updatedProduct)

    const handleUpdate = async () => {
        try {
            await api.put(`/products/update/${product.id}`, updatedProduct);
            alert('Produto atualizado com sucesso!');
            navigate(-1)
        } catch (error) {
            console.error('Failed to update product:', error);
            alert('Falha ao atualizar o produto.');
        }
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className="flex flex-1 flex-col items-center w-full py-5">
                <main
                    className="w-11/12 flex-1 overflow-y-auto flex items-center flex-col gap-3 p-3 bg-secondaryBgDark rounded-xl">
                    <div className="w-full max-w-screen-sm flex items-center flex-col gap-3 justify-center">
                        <p className="text-2xl text-colorDefaultDark">Titulo:</p>
                        <TextInput
                            type="text"
                            name="title"
                            hasIcon={false}
                            value={updatedProduct.title ?? product.title}
                            onChange={handleInputChange}
                            readonly={false}
                        />
                    </div>
                    <div className="w-full max-w-screen-sm flex items-center flex-col gap-3 justify-center">
                        <p className="text-2xl text-colorDefaultDark">Preço:</p>
                        <TextInput
                            type="text"
                            name="price"
                            hasIcon={false}
                            value={updatedProduct.price ?? product.price}
                            onChange={handleInputChange}
                            readonly={false}
                        />
                    </div>
                    <div className="w-full max-w-screen-sm flex items-center flex-col gap-3 justify-center">
                        <p className="text-2xl text-colorDefaultDark">Quantidade Inicial:</p>
                        <TextInput
                            type="text"
                            name="initialAmount"
                            hasIcon={false}
                            value={updatedProduct.initialAmount?.toString() ?? product.initialAmount.toString()}
                            onChange={handleInputChange}
                            readonly={false}
                        />
                    </div>
                    <div className="w-full max-w-screen-sm flex items-center flex-col gap-3 justify-center">
                        <p className="text-2xl text-colorDefaultDark">Estoque atual:</p>
                        <TextInput
                            type="text"
                            name="currentQuantity"
                            hasIcon={false}
                            value={updatedProduct.currentQuantity?.toString() ?? product.currentQuantity.toString()}
                            onChange={handleInputChange}
                            readonly={false}
                        />
                    </div>
                    <div className="w-full max-w-screen-sm mt-3.5">
                        <TextAreaInput
                            name="description"
                            value={updatedProduct.description ?? product.description}
                            onChange={handleInputChange}
                            readonly={false}
                        />
                    </div>
                    <Buttons value={'Atualizar'} typeBg='secondaryGreen' onClick={handleUpdate} />
                </main>
            </div>
            <Footer />
        </div>
    )
}