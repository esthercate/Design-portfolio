import Image from 'next/image'

type Props = {}

const AboutMe = (props: Props) => {
  return (
		<section
			id="about"
			className="section bg-light-background"
		>
			<div className="container flex flex-col laptop:flex-row">
				<Image
					src="/images/hero.png"
					alt="Hero"
					width={500}
					height={500}
        />
        <div className='flex flex-col gap-4'>
          <span className='text-primary font-semibold'>ABOUT ME</span>
          <h2>The story behind the code</h2>
        </div>
			</div>
		</section>
	);
}

export default AboutMe