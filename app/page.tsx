import Blog from '../components/landingPage/Blog';
import Contact from '../components/landingPage/Contact';
import Hero from '../components/landingPage/Hero';
import Portfolio from '../components/landingPage/Portfolio';
import Resume from '../components/landingPage/Resume';
import Services from '../components/landingPage/Services';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Home() {
	return (
		<main className="pt-6 max-w-7xl mx-auto">
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
