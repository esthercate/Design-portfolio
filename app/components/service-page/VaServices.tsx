import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { GrVmMaintenance } from 'react-icons/gr';
import { RiSeoLine } from 'react-icons/ri';
import { MdOutlineBrowserUpdated, MdOutlineDraw } from 'react-icons/md';
import { SiSimpleanalytics } from 'react-icons/si';

type Props = {};

const VaServices = (props: Props) => {
	return (
		<div className="flex flex-col px-5 tablet:px-16 py-10 bg-bg-gray">
			<div className="flex flex-col gap-6 justify-center items-center w-full">
				<div className="flex flex-col gap-2 w-full justify-center items-center">
					<h2 className="flex justify-center items-center text-white gap-3">
						What I do best
					</h2>
					<p className="w-full laptop:w-1/2 text-center italic">
						I'm here to keep your website running smoothly and looking great! So
						that you can focus on growth.
					</p>
				</div>
				<div className="flex flex-col gap-4 w-full justify-center items-center">
					<div className="bg-bg-dark p-4 flex flex-col gap-3 justify-center items-center rounded-md w-full tablet:w-64">
						<CgWebsite
							size={30}
							color="orange"
						/>
						<h5 className="text-white font-medium">Website Development</h5>
					</div>
					<div className="flex flex-col tablet:flex-row gap-4 w-full justify-center items-center">
						<div className="bg-bg-dark p-4 flex flex-col gap-3 justify-center items-center rounded-md w-full tablet:w-64">
							<GrVmMaintenance
								size={30}
								color="orange"
							/>
							<h5 className="text-white font-medium">Website Maintenance</h5>
						</div>
						<div className="bg-bg-dark p-4 flex flex-col gap-3 justify-center items-center rounded-md w-full tablet:w-64">
							<MdOutlineDraw
								size={30}
								color="orange"
							/>
							<h5 className="text-white font-medium">UI/UX</h5>
						</div>
					</div>
					<div className="bg-bg-dark p-4 flex flex-col gap-3 justify-center items-center rounded-md w-full tablet:w-64">
						<SiSimpleanalytics
							size={30}
							color="orange"
						/>
						<h5 className="text-white font-medium">SEO</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VaServices;
