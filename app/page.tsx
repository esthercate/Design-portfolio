import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
	return (
		<main className="pt-6">
			<Navbar pageType="home" />
			<Hero />
			<Services />
			<Resume />
			<Portfolio />
			<Blog />
			<Contact />
			<Footer />
		</main>
	);
}
