"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    //const [item, setItem] = useState({name: "", quantity: 1, category: "Produce"});

    const handleSubmit = (event) => {
        event.preventDefault();

        const newEvent = {
        name,
        quantity,
        category,
        };
        console.log(newEvent);
        // alert("Added item: " + name + ", quantity: " + quantity + ", category: " + category);
        onAddItem(newEvent)

        //setItem(newEvent)
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    // const handleInputChange = (event) => {
    //     setItem(event.target.value);
    // }

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <main className="min-h-screen">
            <form onSubmit={handleSubmit}>
                <span>Name</span>
                <input
                    type="text"
                    required
                    onChange={handleNameChange}
                    value={name}
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                />
                <span>Quantity</span>
                <input
                    type="number"
                    onChange={handleQuantityChange}
                    value={quantity}
                    min={1}
                    max={99}
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                />
                <span>Category</span>
                <select onChange={handleCategoryChange}>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Meat">Meat</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Household">Household</option>
                </select>
                
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
                >
                    Add Item
                </button>

            </form>
        </main>
       
    )

   
}
  