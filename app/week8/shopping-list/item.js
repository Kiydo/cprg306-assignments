
export default function Item ({name, quantity, category, onSelect}) {
    const handleClick = () => {
        onSelect(name);
    };


    return ( 
        <div class="flex-wrap w-64 py-2 px-4 bg-red-300 rounded-md m-5" onClick={handleClick}>
           <ul>
                <div>
                    <li>{name}</li>
                </div>
                <div>
                    <li>{quantity}</li>
                </div>
                <div>
                    <li>{category}</li>
                </div>
           </ul>
        </div>
    );
}