import Link from 'next/link';

type BreadcrumbProps = {
	currentPage: string;
};

const Breadcrumb = ({ currentPage }: BreadcrumbProps) => {
	return (
		<div
			aria-label="Breadcrumb"
			className="my-1"
		>
			<ol className="flex items-center gap-1 text-sm font-medium">
				<li>
					<Link
						href="/"
						className="text-light-background transition-colors hover:underline"
					>
						Home
					</Link>
				</li>

				<li
					aria-hidden="true"
					className="text-light-background text-lg"
				>
					&gt;
				</li>

				<li
					aria-current="page"
					className="text-light-background"
				>
					{currentPage}
				</li>
			</ol>
		</div>
	);
};

export default Breadcrumb;
