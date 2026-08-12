import Contact from '../components/landingPage/Contact';
import Hero from '../components/landingPage/Hero';
import Services from '../components/landingPage/Services';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutMe from '@/components/landingPage/AboutMe';
import Projects from '@/components/landingPage/Projects';
import Cta from '@/components/ui/Cta';
import Testimonials from '@/components/landingPage/Testimonials';

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Services />
			<AboutMe />
			<Projects />
			<Cta />
			<Testimonials />
			<Contact />
			<Footer />
		</main>
	);
}
