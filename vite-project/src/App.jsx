import React, { useState } from "react";

// Sample JSON data for products
const products = [
  { id: 1, name: "Apple", image: "/apple.jpg", isFavorited: false },
  { id: 2, name: "Banana", image: "/banana.jpg", isFavorited: false },
  { id: 3, name: "Durian", image: "/durian.jpg", isFavorited: false },
  { id: 4, name: "Orange", image: "/orange.jpg", isFavorited: false }
];

function App() {
  // useState hook to manage the list of products and their "favorited" state
  const [productList, setProductList] = useState(products);

  // Function to toggle the "isFavorited" state of a product
  const toggleFavorite = (id) => {
    // Use the setProductList function to update the state
    setProductList((prevList) => {
      // Create a new array with updated products
      const updatedList = prevList.map((product) => {
        // Check if this product matches the one we want to toggle
        if (product.id === id) {
          // Create a new object with the opposite "isFavorited" value
          const updatedProduct = {
            ...product,
            isFavorited: !product.isFavorited // Flip the favorite state
          };
          return updatedProduct; // Return the updated product
        } else {
          return product; // Return the product unchanged if the id doesn't match
        }
      });

      return updatedList; // Return the updated list of products
    });
  };

  // Inline CSS for the app
  const styles = {
    header: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "10px",
      textAlign: "center"
    },
    footer: {
      backgroundColor: "#f1f1f1",
      padding: "10px",
      textAlign: "center",
      marginTop: "20px"
    },
    main: {
      padding: "20px"
    },
    productGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px"
    },
    productCard: {
      border: "1px solid #ddd",
      padding: "20px",
      textAlign: "center"
    },
    productImage: {
      maxWidth: "100px",
      height: "auto"
    },
    button: {
      marginTop: "10px",
      padding: "5px 10px"
    }
  };

  return (
    <div>
      {/* Header content directly in App.jsx */}
      <header style={styles.header}>
        <h1>My Product Store</h1>
      </header>

      {/* Main content */}
      <main style={styles.main}>
        <h2>Available Products</h2>
        <div style={styles.productGrid}>
          {/* Loop through each product and display it */}
          {productList.map((product) => {
            return (
              <div key={product.id} style={styles.productCard}>
                {/* Display product image */}
                <img src={product.image} alt={product.name} style={styles.productImage} />
                {/* Display product name */}
                <h3>{product.name}</h3>
                {/* Display a button to toggle the favorite state */}
                <button onClick={() => toggleFavorite(product.id)} style={styles.button}>
                  {/* If the product is favorited, show "Unfavorite", otherwise show "Favorite" */}
                  {product.isFavorited ? "Unfavorite" : "Favorite"}
                </button>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer content directly in App.jsx */}
      <footer style={styles.footer}>
        <p>My React Store &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
