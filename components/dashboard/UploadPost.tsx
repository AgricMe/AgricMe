'use client';
import { FaRegImage } from 'react-icons/fa6';
import { GoVideo } from 'react-icons/go';
import { MdOutlineEdit } from 'react-icons/md';
import TextField from '../forms/textField';
import { useState } from 'react';

const UploadPost = () => {
	const [post, setPost] = useState<string>('');

	return (
		<div className="w-full h-auto bg-[#fff] rounded-lg shadow-md p-3 md:mt-3">
			<div className="w-[85%] mx-auto">
				<div className="flex items-start flex-col w-full">
					<div className="flex items-start gap-6">
						<div className="flex justify-center items-center bg-gray-200 rounded-full w-8 h-8">
							<MdOutlineEdit className="text-gray-400" size={15} />
						</div>
						<p className="text-[14px] text-gray-400 my-auto">Create post</p>
					</div>
					<div className="w-full flex justify-center items-center">
						<TextField
							InputProps={{
								placeholder: "What's on your mind?",
								type: 'text',
								required: true,
								value: post,
								onChange(e) {
									setPost(e.target.value);
								},
								className: 'w-full mt-6 border-gray-50 bg-gray-50',
							}}
							multiline
							className="w-full"
						/>
					</div>
				</div>
				<div className="flex items-center justify-start gap-4 md:gap-7 mt-3">
					<div>
						<label htmlFor="image" className="cursor-pointer flex items-center gap-2">
							<FaRegImage className="text-[#378FE9]" />
							<p className="text-[#666666] text-[14px]">Photo</p>
						</label>
						<input type="file" id="image" className="hidden" />
					</div>
					<div>
						<label htmlFor="video" className="cursor-pointer flex items-center gap-2">
							<GoVideo className="text-[#5F9B41]" />
							<p className="text-[#666666] text-[14px]">Video</p>
						</label>
						<input type="file" id="video" className="hidden" />
					</div>
					<button
						type="button"
						className="bg-gray-200 hover:bg-[#7EB693] py-2 px-4 rounded-md hover:text-white text-gray-400 text-[14px] ml-auto">
						Post
					</button>
				</div>
			</div>
		</div>
	);
};

export default UploadPost;
