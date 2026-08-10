type SectionTitleProps = {
	title: string;
	description: string;
};

const SectionTitle = ({ title, description }: SectionTitleProps) => {
	return (
		<div className="flex flex-col items-center text-center gap-2">
			<h2>{title}</h2>
			<span className="h-1 w-12 bg-primary" />
			<p>{description}</p>
		</div>
	);
};

export default SectionTitle;
