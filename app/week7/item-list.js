"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList ({ items, onItemSelect }) {
    
    const defaultButton = "w-28 py-2 px-4 bg-gray-800 hover:bg-gray-500 rounded-md text-white m-5";
    const clickedButton = "w-28 py-2 px-4 bg-gray-500 rounded-md text-white m-5";

    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items]
    
    if (sortBy === "name") {
        sortedItems.sort((a, b) => (a?.name || "").localeCompare(b?.name || ""));
            
    };
    if (sortBy === "category") {
        sortedItems.sort((a, b) => (a?.category || "").localeCompare(b?.category || ""));
    };
        
    
    const handleSortName = () => {
        setSortBy("name");
    };
    const handleSortCategory = () => {
        setSortBy("category");
    };
    
    const handleItemClick = (name) => {
        onItemSelect(name);
    };

    return (
        <main>
            <div class="inline-flex">
                <div className={sortBy === "name" ? clickedButton : defaultButton}>
                    <button id="btnName" onClick={handleSortName}>Sort by Name</button>
                </div>
                <div className={sortBy === "category" ? clickedButton : defaultButton}>
                    <button id="btnCat" onClick={handleSortCategory}>Sort by Category</button>
                </div>
            </div>
                {sortedItems.map((item) => (
                    <Item name={item.name} quantity={item.quantity} category={item.category} onSelect={() => handleItemClick(item.name)}/>
                ))}

            
        </main>
    );
}