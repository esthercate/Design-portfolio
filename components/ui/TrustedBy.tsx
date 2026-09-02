import Image from 'next/image';

const users = [
	{
		name: 'Dan K.',
		initial: 'DK',
	},
	{
		name: 'Mwangi I.',
		initial: 'MI',
	},
	{
		name: 'Carol M.',
		initial: 'CM',
	},
	{
		name: 'Kioko W.',
		initial: 'KW',
	},
];

const TrustedBy = () => {
	return (
		<div className="flex items-center gap-4">
			{/* Avatars */}
			<div className="flex items-center">
				{users.map((user, index) => (
					<div
						key={user.initial}
						className={`relative h-8 w-8 overflow-hidden rounded-full border border-primary/50 bg-light-background flex items-center justify-center ${
							index > 0 ? '-ml-2' : ''
						}`}
					>
						<small className="text-primary text-xs">{user.initial}</small>
					</div>
				))}
			</div>

			{/* Text */}
			<div className="flex flex-col text-xs">
				<small>Trusted by local businesses & </small>

				<small>clients to deliver results.</small>
			</div>
		</div>
	);
};

export default TrustedBy;
