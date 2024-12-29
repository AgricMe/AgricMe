'use client';
import Nav from '@/components/dashboard/Nav';
import PostComponent from '@/components/dashboard/PostComponent';
import UploadPost from '@/components/dashboard/UploadPost';
import { agrionsConnectData, postsData } from '@/lib/data/data';
import { User } from '@/schema/interfaces/user.interface';
import { useGetProfile } from '@/services/user.service';
import Image from 'next/image';
import { HiOutlinePlusCircle } from 'react-icons/hi2';

const page = () => {
	const { data } = useGetProfile();
	const user: User = data;

	return (
		<div className="md:pl-3">
			<Nav />
			<div className="flex flex-col md:flex-row justify-between items-center px-1.5 md:px-0">
				<div className="w-full md:w-[67%] h-[210px] rounded-xl agrion-banner flex items-center mt-4">
					<div className="ml-8 md:ml-11">
						<span></span>
						<h2 className="mt-4 mb-4 text-[30px] text-black font-bold">
							Hello, {user?.firstName} {user?.lastName}
						</h2>
						<p className="font-bold text-[15px]">
							Get <span className="text-[#7EB693]">FREE DELIVERY</span> on every weekend
						</p>
						<button className="bg-[#7EB693] p-2 rounded-md text-white text-[12px] mt-4">
							Post an Advert
						</button>
					</div>
				</div>
				<div className="w-full md:w-[31%] h-[300px] rounded-xl hamburger-img"></div>
			</div>
			{/* Posts Section */}
			<div className="flex flex-col md:flex-row justify-between mt-[40px] w-[100%] h-[200vh] relative px-1.5 md:px-0">
				<div className="w-full md:w-[72%]">
					<UploadPost />
					{postsData.map((post) => {
						return <PostComponent key={post.id} {...post} />;
					})}
				</div>
				<div className="w-full md:w-[23%] my-6 md:my-0">
					<div className="p-3 text-black">
						<h2 className="text-[14px] font-bold">Connects suggestions</h2>
					</div>
					<div className="bg-white rounded-lg shadow-md w-full sticky top-[20px] p-4">
						{agrionsConnectData.map((connect) => {
							return (
								<div
									key={connect.id}
									className={`w-full flex justify-between items-center ${
										connect.id === agrionsConnectData.length ? 'mb-0' : 'mb-8'
									}`}>
									<Image
										src={connect.img}
										alt="profile-img"
										width={40}
										height={40}
										className="rounded-full"
									/>
									<h2 className="font-medium text-[14px] text-gray-500">{connect.name}</h2>
									<div className="flex justify-center items-center">
										<HiOutlinePlusCircle
											size={22}
											className="text-gray-400 cursor-pointer"
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
