import SectionTitle from '../ui/SectionTitle';
import { blogPosts } from '../../lib/blog-data';
import BlogCard from '../ui/BlogCard';

const Blog = () => {
	const blogPostsLoop = [...blogPosts, ...blogPosts];

	return (
		<section
			id="blog"
			className="section overflow-hidden"
		>
			<div className="container">
				<SectionTitle
					title="Latest Blog Posts"
					description="I share what I learn about web development and modern technology."
				/>
			</div>

			<div className="group mt-12 overflow-hidden pt-1">
				<div className="testimonial-marquee-right flex w-max gap-6 group-hover:[animation-play-state:paused]">
					{blogPostsLoop.map((post, index) => (
						<div
							key={`${post.id}-${index}`}
							className="w-72 shrink-0 tablet:w-80"
						>
							<BlogCard post={post} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
