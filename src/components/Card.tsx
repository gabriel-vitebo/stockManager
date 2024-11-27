interface CardProps {
  title: string
  price: string
  amount: number
  status: 'Em Estoque' | 'Fora de Estoque'
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onChange: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export function Card({ title, price, amount, status, onClick }: CardProps) {
  return (
    <div className="rounded-2xl bg-primaryBgDark flex flex-col justify-between pl-5" onClick={onClick}>
      <div className="flex flex-row items-center gap-1 mt-2">
        <h2 className="text-colorDefaultDark text-xl font-semibold">{title}</h2>
        <span className="text-secondaryGreen text-xs items-center">{`(${status})`}</span>
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