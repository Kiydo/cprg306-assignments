import Link from "next/link";
import NewItem from "./new-item";

export default function Home() {
    return (
        <main>
            <Link href="./week4/new-item.js">Add New Item</Link>
            <NewItem />

        </main>
    )
}