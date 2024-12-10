interface OptionsInputProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function OptionsInput({ onChange }: OptionsInputProps) {
  return (
    <select className="bg-colorDefaultDark p-1 rounded text-white" onChange={onChange}>
      <option value="all">Todos</option>
      <option value="IN_STOCK">Em Estoque</option>
      <option value="LOW_STOCK">Baixo Estoque</option>
      <option value="OUT_OF_STOCK">Fora de Estoque</option>
    </select>
  )
}