"use client";

import Item from "./item";
import data from "./items.json";
import { useState } from "react";

export default function ItemList () {
    const [sortBy, setSortBy] = useState("name");
    
    // const handleEvent = (event) => {
    // event.preventDefault();
    if (sortBy === "name") {
        data.sort((a, b) => a.name.localeCompare(b.name));
    };
    if (sortBy === "category") {
        data.sort((a, b) => a.category.localeCompare(b.category));
    };
        
    // };
    const handleSortName = () => {
        setSortBy("name");
    };
    const handleSortCategory = () => {
        setSortBy("category");
    };
    // const handleSort = () => {
        
    //     if (sortBy === "name") {
    //         data.sort((a, b) => a.name.localeCompare(b.name));
    //     } else if (sortBy === "quantity") {
    //         setSortBy("category");
    //     } else {
    //         setSortBy("name");
    //     }
    // };

    return (
        <main>
            {/* <form onSubmit={handleEvent}> */}
                <button onClick={handleSortName}>Sort by Name</button>
                <button onClick={handleSortCategory}>Sort by Category</button>
                {data.map((item) => (
                    <Item name={item.name} quantity={item.quantity} category={item.category} />
                ))}

                {/* <button onClick={handleSortName}>Sort by Name</button>
                <button onClick={handleSortCategory}>Sort by Category</button> */}
            {/* </form> */}
            
        </main>
    );
}