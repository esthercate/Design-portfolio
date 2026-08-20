import PageHero from '../ui/PageHero';

type Props = {};

const Resume = (props: Props) => {
  return (
    <section className="section mt-8">
      <PageHero
        title="My Resume"
        currentPage="Resume"
      />
    </section>
  );
};

export default Resume;
