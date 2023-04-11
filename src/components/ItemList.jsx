import { useState } from "react"
import Item from "./Item"
import Loading from "./Loading"
import shoes from "../utils/data"

const ItemList = () => {
  const [shoesList, setShoesList] = useState(shoes)
  const [loading, setLoading] = useState(false)

  if(loading){
    return <Loading />
  }


  return (
    <div className="item-list">
      <h1>Shoes</h1>
      {shoesList.map((shoe) => {
        return <Item key={shoe.id} shoe={shoe} />
      })}
    </div>
  )
}
export default ItemList