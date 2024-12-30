import Image, { StaticImageData } from 'next/image';
import { HiOutlinePlusCircle } from 'react-icons/hi2';

interface ConnectSuggestionProps {
	mobile?: boolean;
	data: {
		id: number;
		img: string | StaticImageData;
		name: string;
	}[];
}

const ConnectSuggestions = ({ mobile, data }: ConnectSuggestionProps) => {
	return (
		<>
			{data?.map((connect) => {
				return (
					<>
						{mobile ? (
							<div
								key={connect.id}
								className={`min-w-[156px] h-[150px] flex flex-col justify-between items-center bg-white rounded-lg shadow-md p-2`}>
								<Image src={connect.img} alt="profile-img" width={40} height={40} className="rounded-full" />
								<h2 className="font-medium text-[14px] text-gray-500 text-center">{connect.name}</h2>
								<div className="flex justify-center items-center">
									<HiOutlinePlusCircle size={35} className="text-gray-400 cursor-pointer" />
								</div>
							</div>
						) : (
							<div
								key={connect.id}
								className={`w-full flex justify-between items-center ${
									connect.id === data.length ? 'mb-0' : 'mb-8'
								}`}>
								<Image src={connect.img} alt="profile-img" width={40} height={40} className="rounded-full" />
								<h2 className="font-medium text-[14px] text-gray-500">{connect.name}</h2>
								<div className="flex justify-center items-center">
									<HiOutlinePlusCircle size={22} className="text-gray-400 cursor-pointer" />
								</div>
							</div>
						)}
					</>
				);
			})}
		</>
	);
};
export default ConnectSuggestions;
