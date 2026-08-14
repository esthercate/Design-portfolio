import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import type { BlogPost } from '../../lib/blog-data';

type BlogCardProps = {
	post: BlogPost;
};

const BlogCard = ({ post }: BlogCardProps) => {
	return (
		<article className="flex h-full flex-col justify-between rounded-xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
			<div className="flex flex-col gap-4">
				{/* Date */}
				<small className="text-xs font-medium text-primary">
					{post.datePosted}
				</small>

				{/* Title */}
				<h3 className="text-lg font-semibold leading-7 text-text">
					{post.title}
				</h3>

				{/* Description */}
				<p className="text-sm leading-6 text-text-secondary">
					{post.description}
				</p>
			</div>

			{/* Footer */}
			<div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
				<small className="text-xs text-text-secondary">By {post.author}</small>

				<Link
					href={post.url}
					target="_blank"
					rel="noopener noreferrer"
					className="group flex shrink-0 items-center gap-2 text-xs font-semibold text-primary transition-colors duration-300 hover:text-primary-dark"
				>
					Read article
					<FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
				</Link>
			</div>
		</article>
	);
};

export default BlogCard;
