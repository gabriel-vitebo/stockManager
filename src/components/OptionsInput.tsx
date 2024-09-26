export function OptionsInput() {
  return (
    <select className="bg-colorDefaultDark p-1 rounded text-white">
      <option value="all">Todos</option>
      <option value="inStock">Em Estoque</option>
      <option value="outStock">Fora de Estoque</option>
    </select>
  )
}