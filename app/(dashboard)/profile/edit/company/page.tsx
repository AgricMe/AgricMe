'use client';
import Nav from '@/components/dashboard/Nav';
import SelectField from '@/components/forms/selectField';
import TextField from '@/components/forms/textField';
import avatar2 from '@/public/dashboard/avatar2.jpg';
import { useEditCompanyProfile } from '@/services/company.service';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

const EditPage = () => {
	const [companyName, setCompanyName] = useState<string>();
	const [fullName, setFullName] = useState<string>();
	const [area, setArea] = useState<string>();
	const [CACNumber, setCACNumber] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [countryCode, setCountryCode] = useState<string>();
	const [phoneNumber, setPhoneNumber] = useState<string>();
	const [address, setAddress] = useState<string>();
	const mutation = useEditCompanyProfile();
	const { push } = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await mutation.mutateAsync({
			companyName,
			fullName,
			area,
			CACNumber,
			email,
			countryCode,
			phoneNumber,
			address,
		});
		toast.success('Company profile updated successfully');
		push('/profile');
	};
	return (
		<section className="pb-10 px-1">
			<div className="bg-[#fff] pb-2 px-1.5">
				<Nav />
			</div>
			<h3 className="text-[1.2rem] md:text-[1.6rem] text-[#222] font-bold my-4 px-4 md:px-6 lg:px-[3.5rem]">
				Edit Company Profile
			</h3>
			<div className="bg-[#eff6f1] min-h-screen px-4 md:px-6 lg:px-[3.5rem]">
				<form
					onSubmit={handleSubmit}
					className={`bg-[#fff] flex flex-col lg:flex-row justify-between items-center md:items-start w-full h-auto px-4 md:px-6 py-8 md:py-6 shadow-md rounded-xl`}
				>
					<div className="w-full lg:w-[40%] flex flex-col justify-center items-center lg:mr-10 mb-6 lg:mb-0">
						<Image
							src={avatar2}
							alt="company-logo"
							width={120}
							height={120}
							className="rounded-full border-4 border-[#7EB693]"
						/>
						<p className="text-[#444] font-semibold text-[.95rem] mt-4">
							Edit Company Logo
						</p>
					</div>
					<div className="w-full flex flex-col items-start lg:mr-10">
						<div className="w-full flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
							<TextField
								label="Company Name"
								InputProps={{
									placeholder: "Enter your Company's Name",
									type: 'text',
									value: companyName,
									onChange(e) {
										setCompanyName(e.target.value);
									},
								}}
								className="w-full"
								LabelProps={{ className: 'text-[.8rem] font-[500]' }}
							/>
							<TextField
								label="Full Name"
								InputProps={{
									placeholder: 'Enter your Full Name',
									type: 'text',
									value: fullName,
									onChange(e) {
										setFullName(e.target.value);
									},
								}}
								className="w-full"
								LabelProps={{ className: 'text-[.8rem] font-[500]' }}
							/>
						</div>
						<SelectField
							label="Area"
							value={area}
							LabelProps={{ className: '!text-[.9rem] font-[500]' }}
							onChange={(e) => setArea(e.target.value)}
							className=""
						>
							<option value={'Select your Area'}>
								Select your Area
							</option>
							<option value={'Oregun-UI'}>Oregun-UI</option>
						</SelectField>
						<TextField
							label="CAC Number (Optional)"
							InputProps={{
								placeholder: 'Enter your CAC Number',
								type: 'tel',
								value: CACNumber,
								onChange(e) {
									setCACNumber(e.target.value);
								},
							}}
							className="mt-4"
							LabelProps={{ className: 'text-[.8rem] font-[500]' }}
						/>
						<button
							type="submit"
							className="hidden lg:flex bg-[#7EB693] text-[#fff] mt-12 px-10 py-2.5 rounded-md shadow-sm text-[.95rem] font-semibold"
						>
							Save
						</button>
					</div>
					<div className="w-full flex flex-col mt-4 lg:mt-0">
						<TextField
							label="Email"
							InputProps={{
								placeholder: 'Enter your Email address',
								type: 'email',
								value: email,
								onChange(e) {
									setEmail(e.target.value);
								},
							}}
							LabelProps={{ className: 'text-[.8rem] font-[500]' }}
						/>

						<label
							htmlFor={'Phone Number'}
							className={`text-[.9rem] font-[500] mt-4 mb-1.5`}
						>
							Phone Number
						</label>
						<div className="flex justify-start items-center gap-4">
							<div className="w-[40%] md:w-[40%] lg:w-[30%]">
								<SelectField
									value={area}
									onChange={(e) => setCountryCode(e.target.value)}
								>
									<option value={'Select-country-code'} disabled>
										Select Country Code
									</option>
									<option value={'+233'}>+233</option>
									<option value={'+234'}>+234</option>
								</SelectField>
							</div>
							<TextField
								InputProps={{
									placeholder: 'Enter your Phone Number',
									type: 'tel',
									value: phoneNumber,
									onChange(e) {
										setPhoneNumber(e.target.value);
									},
								}}
							/>
						</div>
						<TextField
							label="Address"
							InputProps={{
								placeholder: 'Enter your Address',
								type: 'text',
								value: address,
								onChange(e) {
									setAddress(e.target.value);
								},
							}}
							className="mt-4"
							LabelProps={{ className: 'text-[.8rem] font-[500]' }}
						/>
					</div>
					<button
						type="submit"
						className="flex lg:hidden bg-[#7EB693] text-[#fff] mt-8 px-10 py-2.5 rounded-md shadow-sm text-[.95rem] font-semibold"
					>
						Save
					</button>
				</form>
			</div>
		</section>
	);
};

export default EditPage;
