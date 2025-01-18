import { 
    collection, 
    getDocs, 
    doc, 
    getDoc, 
    addDoc, 
    query, 
    where 
  } from 'firebase/firestore';
  import { db } from './config'; // Import the Firestore database instance
  
  // Get all products
  export const getProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };
  
  // Get product by ID
  export const getProductById = async (productId) => {
    try {
      const docRef = doc(db, 'products', productId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      }
      return null;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  };
  
  // Get products by category
  export const getProductsByCategory = async (category) => {
    try {
      const q = query(
        collection(db, 'products'), 
        where('category', '==', category)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error("Error fetching products by category:", error);
      throw error;
    }
  };
  