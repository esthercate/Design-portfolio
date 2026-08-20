import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import SectionTitle from '../ui/SectionTitle';
import { blogPosts } from '../../lib/blog-data';
import BlogCard from '../ui/BlogCard';

type Props = {};

const Blog = (props: Props) => {
	return (
		<section
			id="blog"
			className="section"
		>
			<div className="container flex flex-col gap-10">
				<SectionTitle
					title="Latest Blog Posts"
					description="I share what I learn about web development and modern technology."
				/>
				<div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 laptop:grid-cols-3">
					{blogPosts.map((post) => (
						<BlogCard
							key={post.id}
							post={post}
						/>
					))}
				</div>

				{/* View all */}
				{/* <div className="flex justify-center">
					<Link
						href="/blogs"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 hover:text-primary-dark"
					>
						View all articles
						<FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				</div> */}
			</div>
		</section>
	);
};

export default Blog;
