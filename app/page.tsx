import Contact from '../components/landingPage/Contact';
import Hero from '../components/landingPage/Hero';
import Services from '../components/landingPage/Services';
import AboutMe from '@/components/landingPage/AboutMe';
import Projects from '@/components/landingPage/Projects';
import Cta from '@/components/ui/Cta';
import Testimonials from '@/components/landingPage/Testimonials';
import Blog from '@/components/landingPage/Blog';

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<AboutMe />
			<Projects />
			<Cta />
			<Testimonials />
			<Blog />
			<Contact />
		</>
	);
}
