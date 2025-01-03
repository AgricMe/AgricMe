import Footer from '@/components/home/NotFoundFooter';
import Nav from '@/components/home/NotFoundNav';
import { ButtonContained } from '@/components/shared/Button';
import Link from 'next/link';
import { FaCircleArrowRight } from 'react-icons/fa6';

const NotFoundPage = () => {
	return (
		<section>
			<Nav />
			<div
				className="relative w-full h-[90vh] flex justify-end items-start pt-[3rem]"
				style={{
					backgroundImage: `url('/component-images/not-found-img.png')`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}>
				<div className="flex flex-col pr-[4.5rem]">
					<h1 className="text-[12rem] text-[#8FA8A8] font-extrabold">404</h1>
					<h2 className="text-[#274C5B] text-[2.8rem] font-semibold mt-[-2rem]">Page Not Found</h2>
					<p className="text-[#525C60] text-[14px] mb-4">
						The page you are looking for doesn&#39;t exist or has been moved
					</p>
					<Link href={'/'} className="w-[40%]">
						<ButtonContained>
							Go to Homepage
							<FaCircleArrowRight size={18} className="text-[#335B6B]" />
						</ButtonContained>
					</Link>
				</div>
			</div>
			<Footer />
		</section>
	);
};
export default NotFoundPage;
