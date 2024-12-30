'use client';
import ConnectSuggestions from '@/components/dashboard/connectSuggestions';
import Nav from '@/components/dashboard/Nav';
import PostComponent from '@/components/dashboard/PostComponent';
import ScrollContainers from '@/components/dashboard/scrollContainers';
import UploadPost from '@/components/dashboard/UploadPost';
import { agrionsConnectData, postsData } from '@/lib/data/data';
import { User } from '@/schema/interfaces/user.interface';
import { useGetProfile } from '@/services/user.service';

const Page = () => {
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
						<button className="bg-[#7EB693] p-2 rounded-md text-white text-[12px] mt-4">Post an Advert</button>
					</div>
				</div>
				<div
					className="w-full md:w-[31%] h-[300px] rounded-xl hidden md:block"
					style={{
						backgroundImage: `url('/dashboard/hamburger-img.png')`,
						backgroundSize: 'cover',
					}}></div>
			</div>
			{/* Posts Section */}
			<div className="flex flex-col md:flex-row justify-between md:mt-[0px] w-[100%] h-[200vh] relative px-1.5 md:px-0 mt-4">
				<div className="w-full md:w-[72%]">
					<UploadPost />
					<div className="w-full flex md:hidden justify-between items-center mt-4 md:mt-8">
						<ScrollContainers width={1300} displayWidgets={true}>
							<></>
							<ConnectSuggestions data={agrionsConnectData} mobile />
						</ScrollContainers>
					</div>
					{postsData.map((post) => {
						return <PostComponent key={post.id} {...post} />;
					})}
				</div>
				<div className="w-full md:w-[23%] my-6 md:my-0 hidden md:block">
					<div className="p-3 text-black">
						<h2 className="text-[14px] font-bold">Connects suggestions</h2>
					</div>
					<div className="bg-white rounded-lg shadow-md w-full sticky top-[20px] p-4">
						<ConnectSuggestions data={agrionsConnectData} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
