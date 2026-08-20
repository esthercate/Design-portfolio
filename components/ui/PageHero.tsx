import Breadcrumb from "./Breadcrumb";

type PageHeroProps = {
  title: string,
  currentPage: string,
}

const PageHero = ({title, currentPage}: PageHeroProps) => {
  return (
		<div
			className="w-full h-72 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center mb-6"
			style={{ backgroundImage: "url('/images/section-bg.png')" }}
		>
			<h2 className="text-white">{title}</h2>
			<Breadcrumb currentPage={currentPage} />
		</div>
	);
}

export default PageHero