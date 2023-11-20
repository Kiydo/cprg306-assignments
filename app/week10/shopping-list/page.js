"use client";

// import { useUserAuth } from "./_utils/auth-context";
import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
// import itemsData from "./items.json";
import { getItems, addItem } from "../_services/shopping-list-service";
import MealIdeas from "./meal-ideas";
//import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() { 
    // const { user } = useUserAuth();
    // if(!user) return null;

    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState("");
    const { user: currentUser, firebaseSignOut } = useUserAuth();

    const handleAddItem = async (newItem) => {
        try {
          if (currentUser) {
            // If there is a current user, use asynchronous logic to add the item
            const newItemId = await addItem(currentUser.uid, newItem);
            // console.log(newItemId);
            // addItem(currentUser.uid, newItem)
            setItems([...items, newItem]);
            // setItems([...items, { id: newItemId, data: newItem }]);
          } else {
            // If there is no current user, add the item directly to the state
            // setItems([...items, newItem]);
          }
        } catch (error) {
          console.error('Error adding item:', error);
        }
    };

    useEffect(() => {
        const loadItems = async () => {
          if (currentUser) {
            try {
              const userItems = await getItems(currentUser.uid);
              console.log(userItems);
              setItems(userItems);
            } catch (error) {
              console.error('Error loading items:', error);
            }
          }
        };
    
        loadItems();
    }, [currentUser]);

    

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
            {/* <ItemList items={items} onItemSelect={handleItemSelect} /> */}
            <ItemList items={items} onItemSelect={handleItemSelect} />
            <MealIdeas ingredient={selectedItem} />
        </main>
    )
}