import {GrocerGridCard} from "../Utils/Grocery"
import GroceryCard from "./GroceryCard"


export default function GroceryOption(){


    return(
         <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="text-2xl font-bold ">Shop Groceries on Instamart</h1>
            <div className="container mx-auto flex flex-nowrap gap-3 overflow-x-auto mt-10">
                    {
                        GrocerGridCard.map((foodData)=><GroceryCard key={foodData.id} foodData={foodData}></GroceryCard>)
                    }
                  </div>
        </div>
    )
}