
export default function Item ({name, quantity, category}) {

    return ( 
        <div class="flex-wrap w-64 py-2 px-4 bg-red-300 rounded-md m-5">
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