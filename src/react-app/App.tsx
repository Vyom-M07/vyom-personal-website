// src/App.tsx

import { useState } from "react";
import "./App.css";

function App() {
	const [name, setName] = useState("unknown");

	return (
		<>
			<h1>Vyom Manot</h1>
			<div className="card">
				<button
					onClick={() => {
						fetch("/api/")
							.then((res) => res.json() as Promise<{ name: string }>)
							.then((data) => setName(data.name));
					}}
					aria-label="get name"
				>
					Name from API is: {name}
				</button>
			</div>
		</>
	);
}

export default App;
