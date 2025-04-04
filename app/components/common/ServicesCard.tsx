import React from 'react';

type ServicesCardProps = {
	icon: React.ElementType;
	title: string;
};

const ServicesCard = ({ icon: Icon, title }: ServicesCardProps) => {
	return (
		<div className="bg-bg-dark p-4 flex flex-col gap-3 justify-center items-center rounded-md w-full tablet:w-64">
			<Icon
				size={30}
				color="orange"
			/>
			<h5 className="text-white font-medium">{title}</h5>
		</div>
	);
};

export default ServicesCard;
