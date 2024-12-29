'use client';
import Nav from '@/components/dashboard/Nav';
import SelectField from '@/components/forms/selectField';
import TextField from '@/components/forms/textField';
import Loader from '@/components/shared/loader';
import { settingsData } from '@/lib/data/data';
import { uploadFile } from '@/lib/utils/file';
import {
	DateFormat,
	Default,
	Language,
	TimeZone,
} from '@/schema/enums/preference.enum';
import { User } from '@/schema/interfaces/user.interface';
import { useEditPreference } from '@/services/preference.service';
import {
	useChangeEmail,
	useChangePassword,
	useDeleteAccount,
	useEditProfile,
	useGetProfile,
} from '@/services/user.service';
import { useParams } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { MdImage } from 'react-icons/md';

const EditPage = () => {
	const { data, isPending } = useGetProfile();
	const user: User = data;
	const { id: userId } = useParams<{ id: string }>();
	const [activeId, setActiveId] = useState<string>('1');
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [avatar, setAvatar] = useState<File>();
	const [coverPhoto, setCoverPhoto] = useState<File>();
	const [country, setCountry] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [state, setState] = useState<string>('');
	const [address1, setAddress1] = useState<string>('');
	const [address2, setAddress2] = useState<string>('');
	const [zipcode, setZipCode] = useState<string>('');
	const [currentpassword, setCurrentPassword] = useState<string>('');
	const [newpassword, setNewPassword] = useState<string>('');
	const [newpassword2, setNewPassword2] = useState<string>('');
	const [language, setLanguage] = useState<string>(Language.ENGLISH);
	const [timezone, setTimeZone] = useState<string>(TimeZone.GMT_PLUS_5_30);
	const [dateformat, setDateFormat] = useState<string>(
		DateFormat.NO_PREFERENCE
	);
	const [defaultOption, setDefaultOption] = useState<string>(Default.OFF);

	const mutation = useEditProfile(userId!);
	const emailMutation = useChangeEmail();
	const passwordMutation = useChangePassword();
	const preferenceMutation = useEditPreference();
	const accountDeletionMutation = useDeleteAccount();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (activeId === '1') {
			let avatarUrl, coverPhotoUrl;
			if (avatar) {
				avatarUrl = await uploadFile(avatar);
			}
			if (coverPhoto) {
				coverPhotoUrl = await uploadFile(coverPhoto!);
			}
			await mutation.mutateAsync({
				profilePicture: avatarUrl,
				coverPhoto: coverPhotoUrl,
				firstName,
				lastName,
				phoneNumber: phone,
				location: `${country} ${state} ${city}`,
				address: `${address1} ${address2}`,
				zipCode: zipcode,
			});
			toast.success('General settings updated successfully');
		}

		if (activeId === '2') {
			await emailMutation.mutateAsync({
				email,
			});
			toast.success('Email has been successfully changed');
		}

		if (activeId === '3') {
			await passwordMutation.mutateAsync({
				currentPassword: currentpassword,
				newPassword: newpassword,
			});
			toast.success('Password has been successfully changed');
		}

		if (activeId === '4') {
			await preferenceMutation.mutateAsync({
				language,
				timeZone: timezone,
				dateFormat: dateformat,
				default: defaultOption,
			});
			toast.success('Preferences has been updated successfully');
		}

		if (activeId === '5') {
			await accountDeletionMutation.mutateAsync({
				email,
			});
			toast.success('Account has been deleted successfully');
		}
	};

	useEffect(() => {
		setFirstName(user?.firstName);
		setLastName(user?.lastName);
		setEmail(user?.email);
		setPhone(user?.phoneNumber);
		setAddress1(user?.address);
		setZipCode(user?.zipCode);
		setLanguage(user?.preference?.language);
		setTimeZone(user?.preference?.timeZone);
		setDateFormat(user?.preference?.dateFormat);
		setDefaultOption(user?.preference?.default);
	}, [user]);
	return (
		<section className="pb-10 px-1">
			<div className="bg-[#fff] pb-2 px-1.5">
				<Nav />
			</div>
			<div className="flex flex-col gap-4 px-4 md:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center pt-6 pb-4 border-b-2 border-gray-300">
					<h3 className="text-[1.2rem] md:text-[1.6rem] text-[#222] font-bold ">
						Account
					</h3>

					<div className="flex flex-col md:flex-row items-center gap-4 mt-6 md:mt-0">
						{settingsData?.map((setting) => {
							return (
								<button
									key={setting.id}
									id={setting.id}
									type="button"
									className={`${
										activeId === setting.id
											? 'bg-yellow-600'
											: 'bg-yellow-300'
									} text-[#444] px-8 py-2.5 rounded-md shadow-sm text-[.85rem] font-medium duration-300`}
									onClick={() => setActiveId(setting.id)}
								>
									{setting.title}
								</button>
							);
						})}
					</div>
				</div>
				<div className="md:px-6">
					{isPending ? (
						<Loader
							loading={isPending}
							loadingText="Fetching User Details..."
						/>
					) : (
						<div className="bg-[#fff] w-full h-auto px-4 md:px-10 py-8 md:py-6 shadow-md rounded-xl transition-all duration-500">
							{activeId === '1' && (
								<form
									onSubmit={handleSubmit}
									className="flex flex-col gap-[6rem]"
								>
									<div className="flex flex-col gap-2.5">
										<h1 className="text-[1.4rem] md:text-[1.8rem] text-[#222] font-bold ">
											General Settings
										</h1>
										<p className="text-[#444] font-semibold text-[1rem]">
											Your current primary email address is{' '}
											<span className="text-[#7EB693]">
												{user?.email}
											</span>
										</p>
										<div className="border-b-2 border-gray-100 pt-2"></div>
										<div className="flex flex-col gap-[3rem] mt-4">
											<div className="flex flex-col md:flex-row justify-between items-center">
												<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
													Avatar
												</h3>
												<div className="w-full flex items-end gap-4">
													<button
														type="button"
														className="bg-[#fff] text-[#7EB693] border border-gray-200 px-8 py-2.5 rounded-md shadow-sm text-[.85rem] font-medium"
													>
														Change
													</button>
													<button
														type="button"
														className="bg-[#fff] text-[#7EB693] border border-gray-200 px-8 py-2.5 rounded-md shadow-sm text-[.85rem] font-medium"
													>
														Remove
													</button>
												</div>
											</div>
											<div className="flex flex-col md:flex-row justify-between items-center">
												<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
													Cover Photo
												</h3>
												<div className="relative w-full h-[170px] flex flex-col justify-center items-center border border-gray-200 rounded-xl cursor-pointer">
													<div className="absolute flex flex-col justify-center items-center">
														<MdImage
															size={28}
															className="text-gray-400"
														/>
														<p className="text-gray-400 font-semibold text-[1rem]">
															Drag image here. or
															<span className="text-[#7EB693]">
																{' '}
																Browse Files
															</span>
														</p>
													</div>
													<input
														type="file"
														name="cover-photo"
														id="cover-photo"
														// value={coverPhoto}
														className="w-full h-full opacity-0 cursor-pointer"
													/>
												</div>
											</div>
										</div>
										<button
											type="button"
											className="w-[50%] md:w-[10%] mx-auto md:ml-[31%] my-2 text-[#7EB693] bg-[#fff] border border-gray-200 py-2 rounded-md shadow-sm text-[.95rem] font-semibold"
										>
											Change
										</button>
									</div>
									<div className="flex flex-col gap-2.5">
										<h1 className="text-[1.4rem] md:text-[1.8rem] text-[#222] font-bold ">
											Basic Information
										</h1>
										<p className="text-[#444] font-semibold text-[1rem]">
											Update some personal information. Your address
											will never be publicly available.
										</p>
										<div className="border-b-2 border-gray-100 pt-2"></div>
										<div className="flex flex-col gap-4 mt-4">
											<div className="flex flex-col md:flex-row justify-between items-center">
												<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
													Full Name
												</h3>
												<div className="w-full flex gap-2 md:gap-4">
													<TextField
														InputProps={{
															placeholder: 'First Name',
															type: 'text',
															required: true,
															value: firstName,
															onChange(e) {
																setFirstName(e.target.value);
															},
															className:
																'text-[.95rem] font-medium p-3.5',
														}}
													/>
													<TextField
														InputProps={{
															placeholder: 'Last Name',
															type: 'text',
															required: true,
															value: lastName,
															onChange(e) {
																setLastName(e.target.value);
															},
															className:
																'text-[.95rem] font-medium p-3.5',
														}}
													/>
												</div>
											</div>
											<div className="flex flex-col md:flex-row justify-between items-center">
												<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
													Email
												</h3>
												<TextField
													InputProps={{
														placeholder: 'Email address',
														type: 'email',
														required: true,
														value: email,
														onChange(e) {
															setEmail(e.target.value);
														},
														className:
															'text-[.95rem] font-medium p-3.5',
													}}
												/>
											</div>
											<div className="flex flex-col md:flex-row justify-between items-center">
												<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
													Phone{' '}
													<span className="text-gray-400">
														{' '}
														(Optional)
													</span>
												</h3>
												<TextField
													InputProps={{
														placeholder: 'Phone',
														type: 'tel',
														value: phone,
														onChange(e) {
															setPhone(e.target.value);
														},
														className:
															'text-[.95rem] font-medium p-3.5',
													}}
												/>
											</div>
											<div className="flex flex-col md:flex-row justify-between items-center">
												<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
													Location
												</h3>
												<div className="w-full flex flex-col gap-4">
													<SelectField
														value={country}
														onChange={(e) =>
															setCountry(e.target.value)
														}
														className="text-[1rem] font-medium p-3.5 text-gray-400"
													>
														<option value={'Select Country'}>
															Select Country
														</option>
														<option value={'Nigeria'}>
															Nigeria
														</option>
													</SelectField>
													<TextField
														InputProps={{
															placeholder: 'City',
															type: 'text',
															required: true,
															value: city,
															onChange(e) {
																setCity(e.target.value);
															},
															className:
																'text-[.95rem] font-medium p-3.5',
														}}
													/>
													<TextField
														InputProps={{
															placeholder: 'State',
															type: 'text',
															required: true,
															value: state,
															onChange(e) {
																setState(e.target.value);
															},
															className:
																'text-[.95rem] font-medium p-3.5',
														}}
													/>
												</div>
											</div>
											<div className="flex flex-col md:flex-row justify-between items-center">
												<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
													Address line 1
												</h3>
												<TextField
													InputProps={{
														placeholder: 'Address line 1',
														type: 'text',
														value: address1,
														required: true,
														onChange(e) {
															setAddress1(e.target.value);
														},
														className:
															'text-[.95rem] font-medium p-3.5',
													}}
												/>
											</div>
											<div className="flex flex-col md:flex-row justify-between items-center">
												<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
													Address line 2{' '}
													<span className="text-gray-400">
														{' '}
														(Optional)
													</span>
												</h3>
												<TextField
													InputProps={{
														placeholder: 'Address line 2',
														type: 'text',
														value: address2,
														onChange(e) {
															setAddress2(e.target.value);
														},
														className:
															'text-[.95rem] font-medium p-3.5',
													}}
												/>
											</div>
											<div className="flex flex-col md:flex-row justify-between items-center">
												<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
													Zip Code
												</h3>
												<TextField
													InputProps={{
														placeholder: 'Zip Code',
														type: 'text',
														value: zipcode,
														required: true,
														onChange(e) {
															setZipCode(e.target.value);
														},
														className:
															'text-[.95rem] font-medium p-3.5',
													}}
												/>
											</div>
										</div>
										<button
											type="submit"
											className="w-[50%] md:w-[15%] mx-auto mt-8 mb-2 bg-[#7EB693] text-[#fff] py-3 rounded-md shadow-sm text-[.95rem] font-semibold"
										>
											Save Changes
										</button>
									</div>
								</form>
							)}
							{activeId === '2' && (
								<form
									onSubmit={handleSubmit}
									className="flex flex-col gap-2.5"
								>
									<h1 className="text-[1.4rem] md:text-[1.8rem] text-[#222] font-bold ">
										Email
									</h1>
									<p className="text-[#444] font-semibold text-[1rem]">
										Your current primary email address is{' '}
										<span className="text-[#7EB693]">
											{user?.email}
										</span>
									</p>
									<div className="border-b-2 border-gray-100 pt-2"></div>
									<div className="flex flex-col md:flex-row justify-between items-center my-12">
										<h3 className="w-full md:w-[45%] text-[1.5rem] text-[#222] font-normal mb-4 md:mb-0">
											New email address
										</h3>
										<div className="w-full flex flex-col gap-6">
											<TextField
												InputProps={{
													placeholder: 'Enter your Email address',
													type: 'email',
													required: true,
													value: email,
													onChange(e) {
														setEmail(e.target.value);
													},
													className:
														'text-[.95rem] font-medium p-3.5',
												}}
											/>
											<button
												type="submit"
												className="w-[50%] md:w-[20%] mx-auto md:mx-0 bg-[#7EB693] text-[#fff] py-3 rounded-md shadow-sm text-[.95rem] font-semibold"
											>
												Save Changes
											</button>
										</div>
									</div>
								</form>
							)}
							{activeId === '3' && (
								<form
									onSubmit={handleSubmit}
									className="flex flex-col gap-2.5"
								>
									<h1 className="text-[1.4rem] md:text-[1.8rem] text-[#222] font-bold ">
										Change your password
									</h1>
									<p className="text-[#444] font-semibold text-[1rem]">
										Your current primary email address is{' '}
										<span className="text-[#7EB693]">
											{user?.email}
										</span>
									</p>
									<div className="border-b-2 border-gray-100 pt-2"></div>
									<div className="flex flex-col gap-4 mt-4">
										<div className="flex flex-col md:flex-row justify-between items-center">
											<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
												Current password
											</h3>
											<TextField
												InputProps={{
													placeholder:
														'Enter your current password',
													type: 'password',
													required: true,
													value: currentpassword,
													onChange(e) {
														setCurrentPassword(e.target.value);
													},
													className:
														'text-[.95rem] font-medium p-3.5',
												}}
											/>
										</div>
										<div className="flex flex-col md:flex-row justify-between items-center">
											<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
												New password
											</h3>
											<TextField
												InputProps={{
													placeholder: 'Enter your new password',
													type: 'password',
													required: true,
													value: newpassword,
													onChange(e) {
														setNewPassword(e.target.value);
													},
													className:
														'text-[.95rem] font-medium p-3.5',
												}}
											/>
										</div>
										<div className="flex flex-col md:flex-row justify-between items-center">
											<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
												Confirm new password
											</h3>
											<TextField
												InputProps={{
													placeholder: 'Confirm your new password',
													type: 'password',
													required: true,
													value: newpassword2,
													onChange(e) {
														setNewPassword2(e.target.value);
													},
													className:
														'text-[.95rem] font-medium p-3.5',
												}}
												helperText={
													newpassword !== newpassword2
														? 'Password does not match'
														: ''
												}
											/>
										</div>
										<div className="flex flex-col justify-start items-center md:ml-[3.5rem] mt-4">
											<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#222] font-bold">
												Password requirements:
											</h3>
											<p className="w-full md:w-[45%] text-[#444] font-medium text-[1rem] mb-4">
												Ensure that these requirements are met:
											</p>
											<ul className="w-full md:w-[45%] ml-[2.5rem]">
												<li className="list-disc text-[#444] text-[.95rem]">
													Minimum 8 characters long - the more, the
													better
												</li>
												<li className="list-disc text-[#444] text-[.95rem]">
													At least one lowercase character
												</li>
												<li className="list-disc text-[#444] text-[.95rem]">
													At least one uppercase character
												</li>
												<li className="list-disc text-[#444] text-[.95rem]">
													At least one number, symbol, or
													whitespace character
												</li>
											</ul>
										</div>
									</div>
									<button
										type="submit"
										className="w-[50%] md:w-[15%] mx-auto mt-8 mb-2 bg-[#7EB693] text-[#fff] py-3 rounded-md shadow-sm text-[.95rem] font-semibold"
									>
										Save Changes
									</button>
								</form>
							)}
							{activeId === '4' && (
								<form
									onSubmit={handleSubmit}
									className="flex flex-col gap-2.5"
								>
									<h1 className="text-[1.4rem] md:text-[1.8rem] text-[#222] font-bold ">
										Preferences
									</h1>
									<p className="text-[#444] font-semibold text-[1rem]">
										Preferences settings affects your view of the
										entire application
									</p>
									<div className="border-b-2 border-gray-100 pt-2"></div>
									<div className="flex flex-col gap-4 mt-4">
										<div className="flex flex-col md:flex-row justify-between items-center">
											<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
												Language
											</h3>
											<SelectField
												value={language}
												onChange={(e) =>
													setLanguage(e.target.value)
												}
												className="text-[1rem] font-medium p-3.5 text-gray-400"
											>
												<option value={'Select Language'} disabled>
													Select Language
												</option>
												<option value={Language.ENGLISH}>
													English
												</option>
											</SelectField>
										</div>
										<div className="flex flex-col md:flex-row justify-between items-center">
											<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
												Time Zone
											</h3>
											<SelectField
												value={timezone}
												LabelProps={{
													className: '!text-[.9rem] font-[500]',
												}}
												onChange={(e) =>
													setTimeZone(e.target.value)
												}
												className="text-[1rem] font-medium p-3.5 text-gray-400"
											>
												<option value={'Select Time Zone'} disabled>
													Select Time Zone
												</option>
												<option value={TimeZone.GMT_PLUS_5_30}>
													GMT +5.30
												</option>
											</SelectField>
										</div>
										<div className="flex flex-col md:flex-row justify-between items-center">
											<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
												Date Format
											</h3>
											<SelectField
												value={dateformat}
												LabelProps={{
													className: '!text-[.9rem] font-[500]',
												}}
												onChange={(e) =>
													setDateFormat(e.target.value)
												}
												className="text-[1rem] font-medium p-3.5 text-gray-400"
											>
												<option
													value={'Select Date Format'}
													disabled
												>
													Select Date Format
												</option>
												<option value={DateFormat.NO_PREFERENCE}>
													No Preferences
												</option>
											</SelectField>
										</div>
										<div className="flex flex-col md:flex-row justify-between items-center">
											<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
												Default
											</h3>
											<div className="w-full flex items-center gap-6">
												<div className="flex justify-center items-center gap-3">
													<input
														type="radio"
														name="on"
														id="on"
														className="accent-green-700 cursor-pointer w-4 h-4"
														checked={defaultOption === Default.ON}
														value={defaultOption}
													/>
													<p className="text-[1rem] text-[#333] font-medium">
														On
													</p>
												</div>
												<div className="flex justify-center items-center gap-3">
													<input
														type="radio"
														name="off"
														id="off"
														checked={
															defaultOption === Default.OFF
														}
														className="accent-green-700 cursor-pointer w-4 h-4"
														value={defaultOption}
													/>
													<p className="text-[1rem] text-[#333] font-medium">
														Off
													</p>
												</div>
											</div>
										</div>
										<div className="flex flex-col md:flex-row justify-between items-center">
											<h3 className="w-full md:w-[45%] text-[1.1rem] text-[#333] font-medium mb-4 md:mb-0">
												Choose option default
											</h3>
											<div className="w-full flex flex-col gap-6">
												<div className="flex items-center gap-3">
													<input
														type="checkbox"
														name="tell me"
														id="tell me"
														className="accent-green-700 w-4 h-4 cursor-pointer"
													/>
													<p className="text-[1rem] text-[#333] font-medium">
														Tell me
													</p>
												</div>
												<div className="flex items-center gap-3">
													<input
														type="checkbox"
														name="email"
														id="email"
														className="accent-green-700 w-4 h-4 cursor-pointer"
													/>
													<p className="text-[1rem] text-[#333] font-medium">
														Open e-mail
													</p>
												</div>
												<div className="flex items-center gap-3">
													<input
														type="checkbox"
														name="default"
														id="default"
														checked={true}
														className="accent-green-700 w-4 h-4 cursor-pointer"
													/>
													<p className="text-[1rem] text-[#333] font-medium">
														Show default
													</p>
												</div>
											</div>
										</div>
									</div>
									<button
										type="submit"
										className="w-[50%] md:w-[15%] mx-auto mt-8 mb-2 bg-green-700 text-[#fff] py-3 rounded-md shadow-sm text-[.95rem] font-semibold"
									>
										Save Changes
									</button>
								</form>
							)}
							{activeId === '5' && (
								<form
									className="flex flex-col gap-2.5"
									onSubmit={handleSubmit}
								>
									<h1 className="text-[1.4rem] md:text-[1.8rem] text-red-600 font-bold ">
										Danger Zone
									</h1>
									<p className="text-[#444] font-semibold text-[1rem]">
										Delete your profile, along with your
										authentication associations.
									</p>
									<div className="border-b-2 border-gray-100 pt-2"></div>
									<p className="text-[#555] font-semibold text-[1.1rem] mt-8">
										Delete any and all contents you have, such as
										articles, comments, your reading list or chat
										messages.
									</p>
									<p className="text-[#555] font-semibold text-[1.1rem]">
										Allow your username to become available to anyone
									</p>
									<button
										type="submit"
										className="w-[50%] md:w-[15%] bg-red-600 text-[#fff] py-3 my-4 rounded-xl shadow-sm text-[.95rem] font-semibold"
									>
										Delete Account
									</button>
									<p className="text-[#555] font-semibold text-[1.1rem]">
										Feel free to contact
										<span className="text-[#7EB693]">
											{' '}
											agricmetech@gmail.com{' '}
										</span>
										with any questions.
									</p>
								</form>
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default EditPage;
