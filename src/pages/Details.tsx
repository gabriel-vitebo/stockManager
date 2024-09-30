import {Header} from "../components/Header.tsx";

import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {fakeProducts} from "../utils/fakeProducts.ts";
import {TextInput} from "../components/TextInput.tsx";
import {EditIcon} from "../components/Icons/EditIcon.tsx";
import {TextAreaInput} from "../components/TextAreaInput.tsx";
import {Buttons} from "../components/Buttons.tsx";

interface ProductDetailsProps {
    title: string,
    price: string,
    amount: number,
    description: string
}

export function Details() {
    const params = useParams();

    const [product, setProduct] = useState<ProductDetailsProps>({
        title: '',
        price: '',
        amount: 0,
        description: ''
    });
    console.log(product)

    useEffect(() => {
      try {
        const response = fakeProducts.find((product) => product.id === params.id);
        if(!response) {
            throw new Error("Failed to fetch product");
        }
        setProduct(response)
      } catch (error) {
          console.error(error);
      }
    }, [])


    return (
    <>
        <Header />
            <div className="flex items-center flex-col py-5 w-full">
                <main
                    className="w-11/12 h-[700px] overflow-y-auto flex items-center flex-col gap-3 p-3 bg-secondaryBgDark rounded-xl">
                    <div className="flex items-center flex-col">
                        <div className='flex items-center gap-2 justify-center items-center'>
                            <h1 className='text-3xl font-semibold text-colorDefaultDark'>{product.title}</h1>
                            <EditIcon/>
                        </div>
                        <span className='text-base text-secondaryGreen'>(Em Estoque)</span>
                    </div>

                    <div className=" w-full max-w-screen-sm flex items-center flex-col gap-3 justify-center">
                        <p className='text-2xl text-colorDefaultDark'>Preço:</p>
                        <TextInput type='text' hasIcon={false} placeholder={`R$${product.price}`} readonly={true}/>
                    </div>
                    <div className=" w-full max-w-screen-sm flex items-center flex-col gap-3 justify-center">
                        <p className='text-2xl text-colorDefaultDark'>Quantidade:</p>
                        <TextInput type='text' hasIcon={false} placeholder={product.amount.toString()} readonly={true}/>
                    </div>
                    <div className={'w-full max-w-screen-sm mt-3.5'}>
                        <TextAreaInput value={product.description}  readonly={true}/>
                    </div>
                    <Buttons value={'Excluir'} typeBg='error'/>
                </main>
            </div>
    </>
    )
}