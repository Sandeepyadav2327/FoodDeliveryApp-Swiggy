import react  from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import FoodOption from "./Component/FoodOption";
import GroceryOption from "./Component/GroceryOption";


// header section

function App(){
    return (
        <>
            <Header/>
            <FoodOption/>
            <GroceryOption/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);