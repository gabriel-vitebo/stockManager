import { Header } from "../components/Header.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TextInput } from "../components/TextInput.tsx";
import { EditIcon } from "../components/Icons/EditIcon.tsx";
import { TextAreaInput } from "../components/TextAreaInput.tsx";
import { Buttons } from "../components/Buttons.tsx";
import { Footer } from "../components/Footer.tsx";
import { api } from "../services/api.ts";

interface ProductDetailsProps {
    id: string;
    title: string;
    price: string;
    initialAmount: number;
    currentQuantity: number;
    description: string;
    status: string;
}

export function Details() {
    const params = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState<ProductDetailsProps>({
        id: '',
        title: '',
        price: '',
        initialAmount: 0,
        currentQuantity: 0,
        description: '',
        status: '',
    });

    function handleEdit(id: string) {
        navigate(`/edit/${id}`);
    }

    async function handleDelete() {
        const confirm = window.confirm('Tem certeza que deseja excluir este produto?');

        if (!confirm) {
            return;
        }

        await api.delete(`/products/delete/${params.id}`);
        navigate("/");
    }

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

    const getStatusText = (status: string) => {
        switch (status) {
            case 'IN_STOCK':
                return 'Em estoque';
            case 'LOW_STOCK':
                return 'Baixo Estoque';
            case 'OUT_OF_STOCK':
                return 'Fora de estoque';
            default:
                return 'Status desconhecido';
        }
    };

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'IN_STOCK':
                return 'text-primaryGreen';
            case 'LOW_STOCK':
                return 'text-warning';
            case 'OUT_OF_STOCK':
                return 'text-error';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1 flex-col items-center w-full py-5">
                <main className="w-11/12 flex-1 overflow-y-auto flex items-center flex-col gap-3 p-3 bg-secondaryBgDark rounded-xl">
                    <div className="flex items-center flex-col">
                        <div className="flex flex-col">  <h1 className="text-3xl font-semibold text-colorDefaultDark text-center">{product.title}</h1>
                            <EditIcon onClick={() => handleEdit(product.id)} />
                        </div>
                        <span className={`text-base ${getStatusClass(product.status)}`}>
                            {getStatusText(product.status)}
                        </span>
                    </div>

                    <div className="w-full max-w-screen-sm flex items-center flex-col gap-3 justify-center">
                        <p className="text-2xl text-colorDefaultDark">Preço:</p>
                        <TextInput type="text" hasIcon={false} placeholder={`R$${product.price}`} readonly />
                    </div>
                    <div className="w-full max-w-screen-sm flex items-center flex-col gap-3 justify-center">
                        <p className="text-2xl text-colorDefaultDark">Quantidade Inicial:</p>
                        <TextInput type="text" hasIcon={false} placeholder={product.initialAmount.toString()} readonly />
                    </div>
                    <div className="w-full max-w-screen-sm flex items-center flex-col gap-3 justify-center">
                        <p className="text-2xl text-colorDefaultDark">Quantidade Atual:</p>
                        <TextInput type="text" hasIcon={false} placeholder={product.currentQuantity.toString()} readonly />
                    </div>
                    <div className="w-full max-w-screen-sm mt-3.5">
                        <TextAreaInput
                            placeholder={product.description}
                            value={product.description}
                            onChange={() => { }}
                            readonly
                        />
                    </div>
                    <Buttons value="Excluir" typeBg="error" onClick={() => handleDelete()} />
                </main>
            </div>
            <Footer />
        </div>
    );
}