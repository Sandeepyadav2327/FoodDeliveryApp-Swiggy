import react  from "react";
import ReactDOM from "react-dom/client";
//import Header from "./Component/Header";
// import FoodOption from "./Component/FoodOption";
// import GroceryOption from "./Component/GroceryOption";
// import DineOption from "./Component/DineOption";  // ab inhe ham  router se likh rahe hai
import Restaurant from "./Component/Restaurant";
import {BrowserRouter, Routes, Route} from "react-router";
import Home from "./Component/Home";
import ReataurantMenu from "./Component/RestaurantMenu";


// header section

function App(){
    return (
        <>
            {/* <Header/>
            <FoodOption/>
            <GroceryOption/>
            <DineOption/>   ab router se ise likhenge han */}

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
                    <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
                </Routes>
            </BrowserRouter>
            
            {/* //<Restaurant/> */}
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);