import PageHero from "../ui/PageHero"

type Props = {}

const AllServices = (props: Props) => {
  return (
    <section className="section mt-8">
			<PageHero
				title="My Services"
				currentPage="Services"
      />
      </section>
  )
}

export default AllServices