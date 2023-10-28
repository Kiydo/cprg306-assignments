"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
//import { useState } from "react";

export default function Page() { 
    const [items, setItems] = useState(itemsData);
    const [selectedItem, setSelectedItem] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (name) => {
        // cleaning string from filler words amd emojis
        let stringsToRemove = [", 4 L 🥛", "🍞", ", dozen 🥚", "🍌", "🥦", ", 1 kg 🍗", "🍝", ", 454 g 🍝", ", 12 pack 🧻", ", 6 pack", "🍽️", "🧼"]
        let pattern = new RegExp(stringsToRemove.join("|"), "g");
        let cleanedString = name.replace(pattern, "");
        setSelectedItem(cleanedString);
    };

    return (
        <main>
            <h1>Item List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
            <MealIdeas ingredient={selectedItem} />
        </main>
    )
}