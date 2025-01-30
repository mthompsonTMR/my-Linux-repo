
function InventoryItem({ name, type, quantity, price }) {
  const totalValue = quantity * price;
	return (
    <li
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        textAlign: "left",
				backgroundColor: price >= 1000 ? "#ffcccb" : "#f0f0f0",
        color: "#333", // font color
        fontWeight: "bold" // text weight 
      }}
    >
			<div>
      <strong>{name}</strong> ({type})  
      <br />
        Quantity: {quantity} | Price: ${price.toFixed(2)}
			<br />
			 <strong>Total Value: ${totalValue.toFixed(2)}</strong>
			</div>
      {quantity <= 3 && <Message>⚠️ Low Stock Alert!</Message>}
      {price >= 1000 && <Message>🚨 High-Value Item - Secure Carefully!</Message>}
			{totalValue >= 1000 && <Message>🚨 Extra Protection Advised - High Total Value!</Message>}
    </li>
  );
}
