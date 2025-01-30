function App() {
	const spacePhenomena = [
	  { id: 1, name: "Asteroid Belt", emoji: "☄️" },
	  { id: 2, name: "Galactic Nebula", emoji: "🌌" },
	  { id: 3, name: "Black Hole", emoji: "🕳️" },
	  { id: 4, name: "Supernova Explosion", emoji: "💥" },
	  { id: 5, name: "Pulsar", emoji: "⚡" },
	  { id: 6, name: "Quasar", emoji: "💫" },
	  { id: 7, name: "Exoplanet", emoji: "🪐" },
	  { id: 8, name: "Interstellar Cloud", emoji: "☁️" },
	  { id: 9, name: "Gamma-Ray Burst", emoji: "🌠" },
	  { id: 10, name: "Magnetic Field Reversal", emoji: "🧲" }
	];
  
	const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];
  
	// Assign a random observation status to each phenomenon
	const spacePhenomenaWithStatus = spacePhenomena.map(phenomenon => ({
	  ...phenomenon,
	  status: observationStatuses[Math.floor(Math.random() * observationStatuses.length)]
	}));
  
	return (
	  <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
		<h1>🌌 Space Phenomena Tracker 🌌</h1>
		<ul style={{ listStyle: "none", padding: 0 }}>
		  {spacePhenomenaWithStatus.map(phenomenon => (
			<li
			  key={phenomenon.id}
			  style={{
				padding: "10px",
				margin: "10px",
				borderRadius: "8px",
				fontSize: "20px",
				fontWeight: "bold",
				backgroundColor: phenomenon.status === "🚀 Prime for Study" ? "#ffeb3b" : "#ddd"
			  }}
			>
			  {phenomenon.emoji} {phenomenon.name} - {phenomenon.status}
			</li>
		  ))}
		</ul>
	  </div>
	);
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  