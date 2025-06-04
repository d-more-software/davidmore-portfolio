import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
	return (
		<>
			<div className="p-5 md:px-[15%]">
				<Navbar />
				<About />
			</div>
			<div className="bg-base-300">
				<Skills />
			</div>
			<div className="p-5 md:px-[15%]">
				<Projects />
			</div>

			<Footer />
		</>
	);
}
