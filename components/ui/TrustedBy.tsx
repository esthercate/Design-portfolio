import Image from 'next/image';

const users = [
	{
		name: 'Client 1',
		image: '/images/client1.jpeg',
	},
	{
		name: 'Client 2',
		image: '/images/client2.jpeg',
	},
	{
		name: 'Client 3',
		image: '/images/client3.jpeg',
	},
	{
		name: 'Client 4',
		image: '/images/client4.jpeg',
	},
];

const TrustedBy = () => {
	return (
		<div className="flex items-center gap-4">
			{/* Avatars */}
			<div className="flex items-center">
				{users.map((user, index) => (
					<div
						key={user.name}
						className={`relative h-8 w-8 overflow-hidden rounded-full border-2 border-background ${
							index > 0 ? '-ml-3' : ''
						}`}
					>
						<Image
							src={user.image}
							alt=""
              width={30}
              height={30}
							className="object-cover w-full h-full"
						/>
					</div>
				))}
			</div>

			{/* Text */}
			<div className="flex flex-col">
				<small>
					Trusted by local businesses
				</small>

				<small>
					to deliver results
				</small>
			</div>
		</div>
	);
};

export default TrustedBy;
