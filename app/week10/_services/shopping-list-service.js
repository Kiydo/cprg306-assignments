import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const getItems = async (userId) => {
    try {
      const items = [];
      const q = query(collection(db, `users/${userId}/items`));
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
        });
      });
  
      return items;
    } catch (error) {
      console.error("Error getting items:", error);
      throw error;
    }
  };
  
  //Function to add a new item to a specific user's list of items
  const addItem = async (userId, item) => {
    try {
      const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
      return docRef.id;
    } catch (error) {
      console.error("Error adding item:", error);
      throw error;
    }
  };


  
  export { getItems, addItem };