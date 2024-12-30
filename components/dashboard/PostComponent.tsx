'use client';
import Image from 'next/image';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaRegCommentAlt } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';
import { Post } from '@/schema/interfaces';
import { useState } from 'react';
import TextField from '../forms/textField';
import { LuSend } from 'react-icons/lu';
import DisplayImagesModal from './displayImagesModal';

const PostComponent = ({ img, content, tag }: Post) => {
	const [comment, setComment] = useState<string>('');
	const [liked, setLiked] = useState<boolean>(false);
	const [commentLiked, setCommentLiked] = useState<boolean>(false);
	const [showComments, setShowComments] = useState<boolean>(false);
	const [showCommentReplies, setShowCommentReplies] = useState<boolean>(false);
	const [readMore, setReadMore] = useState<boolean>(false);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<>
			{isModalOpen && <DisplayImagesModal images={img} closeModal={() => setIsModalOpen(false)} />}
			<div className="bg-gray-100 flex items-center justify-center mt-1">
				<div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full">
					{/* User Info with Three-Dot Menu */}
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center space-x-2">
							<Image
								src="/dashboard/dash-profile-img.jpg"
								alt="User Avatar"
								width={10}
								height={10}
								className="w-10 h-10 rounded-full"
							/>
							<div className="flex flex-col">
								<div className="flex justify-center items-center gap-4">
									<p className="text-gray-800 font-semibold">Farmer Duro</p>
									<div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
								</div>
								<div className="flex gap-4">
									<p className="text-gray-500 text-[12px]">2 hours ago</p>
								</div>
							</div>
						</div>
						<div className="text-gray-500 cursor-pointer">
							{/* Three-dot menu icon */}
							<button className="hover:bg-gray-50 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<circle cx="12" cy="7" r="1" />
									<circle cx="12" cy="12" r="1" />
									<circle cx="12" cy="17" r="1" />
								</svg>
							</button>
						</div>
					</div>
					{/* Message */}
					<div className="mb-4">
						<p className="text-gray-800 text-[.85rem] md:text-[.95rem]">
							{readMore ? `${content} ` : `${content.substring(0, 200)}... `}
							<button type="button" className="text-[13px] text-gray-400" onClick={() => setReadMore(!readMore)}>
								{readMore ? 'see less' : 'see more'}
							</button>
						</p>
					</div>
					<div className={`grid ${img.length >= 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-2 lg:gap-4 mb-4`}>
						{img.slice(0, 4)?.map((image, index) => {
							return (
								<div
									key={index}
									className={`relative w-full transition-transform duration-300 hover:scale-105`}
									onClick={() => index === 3 && img.length > 4 && setIsModalOpen(true)}>
									<Image
										src={image}
										alt="post-img"
										className={`${img.length >= 2 && 'md:w-[250px] md:h-[250px] lg:w-full lg:h-[300px]'} rounded-md`}
									/>
									{index === 3 && img.length > 4 && (
										<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
											<span className="text-white text-lg font-bold">+{img.length - 4}</span>
										</div>
									)}
								</div>
							);
						})}
					</div>
					{/* Image */}
					<div className="mb-4">
						{/* <img src="/dashboard/post-image.jpeg" alt="Post Image" className="w-full object-cover rounded-md" /> */}
					</div>
					{/* Like and Comment Section */}
					<div className="flex items-center justify-between text-[gray]">
						<div className="flex items-center space-x-2">
							<button
								className="flex justify-center items-center gap-2 px-2 hover:bg-[#ececec] rounded-full p-1"
								onClick={() => setLiked(!liked)}>
								{liked ? <FaHeart className={'text-red-500'} /> : <FaRegHeart />}
								<span className="text-[.85rem] md:text-[.95rem]">20</span>
							</button>
							<button
								className="flex justify-center items-center gap-2 px-2 hover:bg-[#ececec] rounded-full p-1"
								onClick={() => setShowComments(!showComments)}>
								<FaRegCommentAlt />
								<span className="text-[.85rem] md:text-[.95rem]">2</span>
							</button>
						</div>
						<button className="flex justify-center items-center gap-2 px-2 hover:bg-[#ececec] rounded-full p-1">
							<IoShareSocialOutline />
							<span className="text-[.85rem] md:text-[.95rem]">Share</span>
						</button>
					</div>
					{showComments && (
						<div className="flex flex-col transition-transform duration-300 mt-1.5">
							<hr className="mt-2 mb-2" />
							<div className="flex justify-center items-center mt-4 gap-4">
								<Image
									src="/dashboard/dash-profile-img.jpg"
									alt="User Avatar"
									width={8}
									height={8}
									className="w-8 h-8 rounded-full"
								/>
								<TextField
									InputProps={{
										placeholder: 'Add a comment...',
										type: 'text',
										required: true,
										value: comment,
										onChange(e) {
											setComment(e.target.value);
										},
										className: 'w-full border-gray-50 bg-gray-50 rounded-full',
									}}
								/>
								<div className="flex justify-center items-center bg-gray-200 hover:bg-[#7EB693] duration-300 rounded-full w-auto h-auto p-2">
									<LuSend className="hover:text-white duration-300 text-gray-400" size={22} />
								</div>
							</div>
							<p className="text-gray-800 font-medium my-4 text-[14px]">View more comments</p>
							<div className="mt-4">
								<div className="flex items-start space-x-2">
									<Image
										src="/dashboard/dash-profile-img.jpg"
										width={8}
										height={8}
										alt="User Avatar"
										className="w-8 h-8 rounded-full"
									/>
									<div>
										<div className="w-full h-auto border border-gray-200 rounded-lg p-2">
											<div className="flex justify-between items-center">
												<p className="text-gray-800 text-[13.5px] font-semibold">Rose Berult</p>
												<p className="text-gray-500 text-[12px]">2 hours ago</p>
											</div>
											<p className="text-gray-500 text-[12px] mt-1">
												That little furball is from a local shelter. You should check it out! 🏠😺
											</p>
										</div>
										<div className="flex space-x-2">
											<button
												className="flex justify-center items-center gap-2 px-2 hover:bg-[#ececec] rounded-full p-1"
												onClick={() => setCommentLiked(!commentLiked)}>
												{commentLiked ? <FaHeart className={'text-red-500'} /> : <FaRegHeart />}
												<span className="text-[.75rem] md:text-[.8rem]">Like</span>
											</button>
											<button
												className="flex justify-center items-center gap-2 px-2 hover:bg-[#ececec] rounded-full p-1"
												onClick={() => setShowCommentReplies(!showCommentReplies)}>
												<FaRegCommentAlt />
												<span className="text-[.75rem] md:text-[.8rem]">Reply</span>
											</button>
										</div>
										{showCommentReplies && (
											<div className="flex flex-col">
												<div className="mt-4">
													<div className="flex items-start space-x-2">
														<Image
															src="/dashboard/dash-profile-img.jpg"
															width={8}
															height={8}
															alt="User Avatar"
															className="w-8 h-8 rounded-full"
														/>
														<div>
															<div className="w-full h-auto border border-gray-200 rounded-lg p-2">
																<div className="flex justify-between items-center">
																	<p className="text-gray-800 text-[14px] font-medium">Eva Bleau</p>
																	<p className="text-gray-500 text-[12px]">6 hours ago</p>
																</div>
																<p className="text-gray-500 text-[12px] mt-1">That little furball is from a local shelter.</p>
															</div>
														</div>
													</div>
												</div>
												<div className="flex justify-center items-center mt-4 gap-4">
													<Image
														src="/dashboard/dash-profile-img.jpg"
														alt="User Avatar"
														width={8}
														height={8}
														className="w-8 h-8 rounded-full"
													/>
													<TextField
														InputProps={{
															placeholder: 'Add a comment...',
															type: 'text',
															required: true,
															value: comment,
															onChange(e) {
																setComment(e.target.value);
															},
															className: 'w-full border-gray-50 bg-gray-50 rounded-full',
														}}
													/>
													<div className="flex justify-center items-center bg-gray-200 hover:bg-[#7EB693] duration-300 rounded-full w-auto h-auto p-2">
														<LuSend className="hover:text-white duration-300 text-gray-400" size={22} />
													</div>
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default PostComponent;
