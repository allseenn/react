export default function List({ listItems, renderer }) {
  return (
    <ol>
      {listItems.map(renderer)}
    </ol>
  )
}
