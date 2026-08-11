import Blog from '../components/landingPage/Blog';
import Contact from '../components/landingPage/Contact';
import Hero from '../components/landingPage/Hero';
import Portfolio from '../components/landingPage/Portfolio';
import Resume from '../components/landingPage/Resume';
import Services from '../components/landingPage/Services';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutMe from '@/components/landingPage/AboutMe';
import Projects from '@/components/landingPage/Projects';

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Services />
			<AboutMe />
			<Projects />
			{/* <Portfolio /> */}
			{/* <Resume />
			<Blog />
			<Contact />
			<Footer /> */}
		</main>
	);
}
