import { twMerge } from 'tailwind-merge';

interface CardProps {
  title: string
  price: string
  amount: number
  status: 'Em Estoque' | 'Baixo estoque' | 'Fora de Estoque'
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onChange: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export function Card({ title, price, amount, status, onClick }: CardProps) {
  const statusColor = (status: string) => {
    switch (status) {
      case 'Em Estoque':
        return 'text-primaryGreen';
      case 'Baixo estoque':
        return 'text-warning';
      case 'Fora de Estoque':
        return 'text-error';
      default:
        return 'text-primaryGreen';
    }
  };

  return (
    <div className="rounded-2xl bg-primaryBgDark flex flex-col justify-between pl-5 h-24" onClick={onClick}>
      <div className="flex flex-row items-start gap-1 mt-2 ">
        <h2 className="text-colorDefaultDark text-xl font-semibold w-52 line-clamp-2">{title}</h2>
        <span className={twMerge("text-xs items-center mt-1", statusColor(status))}>{`(${status})`}</span>
      </div>
      <div className="flex flex-row mb-2">
        <div className="flex items-center mr-5 gap-1">
          <p className="text-colorDefaultDark">Preço: </p>
          <p className="text-secondaryGreen">{price}</p>
        </div>
        <div className="flex gap-1 items-center">
          <p className="text-colorDefaultDark">Quantidade: </p>
          <p className="text-secondaryGreen">{amount}</p>
        </div>
      </div>
    </div>
  )
}