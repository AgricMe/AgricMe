'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { Interests, RoleNames } from '@/schema/enums/user.enum';
import TextField from './textField';
import { useLogin, useSignInWithGoogle, useSignUp } from '@/services/auth.service';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

type formVariant = {
	page: string;
};
export default function Form({ page }: formVariant) {
	const [step, setStep] = useState<number>(0);
	const [firstName, setFirstName] = useState<string>();
	const [lastName, setLastName] = useState<string>();
	const [userName, setUserName] = useState<string>();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [bio, setBio] = useState<string>();
	const [phoneNumber, setPhoneNumber] = useState<string>('');
	const [location, setLocation] = useState<string>('');
	const [job, setJob] = useState<string>('');
	const [interests, setInterests] = useState<Interests[] | string[]>();
	const [roles, setRoles] = useState<RoleNames[] | string[]>();
	const [rememberMe, setRememberMe] = useState<boolean>(false);
	const signUpMutation = useSignUp();
	const logInMutation = useLogin();
	const googleAuth = useSignInWithGoogle;
	const { push } = useRouter();

	const handleInterestsChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = e.target;
		if (checked) {
			if (interests === undefined) {
				setInterests([value]);
			} else {
				setInterests([...interests, value]);
			}
		} else {
			setInterests(interests?.filter((interest) => interest !== value));
		}
	};

	const handleRolesChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = e.target;
		if (checked) {
			if (roles === undefined) {
				setRoles([value]);
			} else {
				setRoles([...roles, value]);
			}
		} else {
			setRoles(roles?.filter((role) => role !== value));
		}
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (page === 'Create Account') {
			await signUpMutation.mutateAsync({
				firstName,
				lastName,
				userName,
				email,
				password,
				bio,
				phoneNumber,
				location,
				job,
				interests,
				roles,
			});
			// navigate to home page;
			toast.success('Account Created Successfully', {
				duration: 3000,
				id: 'signUp',
			});
			push(`/login`);
		}

		if (page === 'Log In') {
			await logInMutation.mutateAsync({
				email,
				password,
				rememberMe,
			});
			// navigate to dashboard page;
			toast.success('Login Successful', {
				duration: 3000,
				id: 'logIn',
			});
			push(`/dashboard`);
		}
	};

	return (
		<>
			<div className="form-container">
				<div className="logo">
					{/* <Link href={'/'}><img src={'/logo/agricme-logo.png'} width={200} alt="" /></Link> */}
				</div>
				<div className="form-background">
					<h3 className="text-[white] flex justify-center font-bold text-xl lg::text-3xl">{page}</h3>
					<div className="oauth flex flex-col md:flex-row">
						<button
							className="auth text-sm md:text-base"
							onClick={() => {
								googleAuth();
							}}>
							<span>
								<FcGoogle />
							</span>{' '}
							Continue with Google
						</button>
						{/* <button className="auth text-sm md:text-base">
              <span>
                <FaFacebook />
              </span>{" "}
              Continue with facebook
            </button> */}
					</div>
					<form className="form" onSubmit={handleSubmit}>
						{page == 'Create Account' && step === 0 ? (
							<>
								<TextField
									label="UserName"
									id="UserName"
									InputProps={{
										placeholder: 'Enter your username',
										type: 'text',
										required: true,
										value: userName,
										onChange(e) {
											setUserName(e.target.value);
										},
									}}
									className="w-full"
									LabelProps={{
										className: 'text-[.8rem] text-[#fff] font-[500]',
									}}
								/>
								<TextField
									label="First Name"
									id="FirstName"
									InputProps={{
										placeholder: 'Enter your first name',
										type: 'text',
										required: true,
										value: firstName,
										onChange(e) {
											setFirstName(e.target.value);
										},
									}}
									className="w-full"
									LabelProps={{
										className: 'text-[.8rem] text-[#fff] font-[500]',
									}}
								/>
								<TextField
									label="Last Name"
									id="LastName"
									InputProps={{
										placeholder: 'Enter your last name',
										type: 'text',
										required: true,
										value: lastName,
										onChange(e) {
											setLastName(e.target.value);
										},
									}}
									className="w-full"
									LabelProps={{
										className: 'text-[.8rem] text-[#fff] font-[500]',
									}}
								/>
								<TextField
									label="Email"
									id="Email"
									InputProps={{
										placeholder: 'Enter your Email Address',
										type: 'email',
										required: true,
										value: email,
										onChange(e) {
											setEmail(e.target.value);
										},
									}}
									className="w-full"
									LabelProps={{
										className: 'text-[.8rem] text-[#fff] font-[500]',
									}}
								/>
								<TextField
									label="Password"
									id="Password"
									InputProps={{
										placeholder: 'Enter your Password',
										type: 'password',
										required: true,
										value: password,
										onChange(e) {
											setPassword(e.target.value);
										},
									}}
									className="w-full"
									LabelProps={{
										className: 'text-[.8rem] text-[#fff] font-[500]',
									}}
									helperText={password!.length < 8 ? 'password strength: weak' : ''}
								/>
							</>
						) : (
							page == 'Create Account' &&
							step === 1 && (
								<>
									<TextField
										label="Bio"
										id="Bio"
										InputProps={{
											placeholder: 'Enter your bio',
											type: 'text',
											required: true,
											value: bio,
											onChange(e) {
												setBio(e.target.value);
											},
										}}
										className="w-full"
										LabelProps={{
											className: 'text-[.8rem] text-[#fff] font-[500]',
										}}
										multiline
									/>
									<TextField
										label="Phone Number"
										id="PhoneNumber"
										InputProps={{
											placeholder: 'Enter your Phone Number',
											type: 'text',
											required: true,
											value: phoneNumber,
											onChange(e) {
												setPhoneNumber(e.target.value);
											},
										}}
										className="w-full"
										LabelProps={{
											className: 'text-[.8rem] text-[#fff] font-[500]',
										}}
										helperText={
											!phoneNumber.startsWith('+234')
												? 'Phone Number must start with +234'
												: phoneNumber.length !== 14
												? 'Incorrect phone number'
												: ''
										}
									/>
									<TextField
										label="Location"
										id="Location"
										InputProps={{
											placeholder: 'Enter your Location',
											type: 'text',
											required: true,
											value: location,
											onChange(e) {
												setLocation(e.target.value);
											},
										}}
										className="w-full"
										LabelProps={{
											className: 'text-[.8rem] text-[#fff] font-[500]',
										}}
									/>
									<TextField
										label="Job"
										id="Job"
										InputProps={{
											placeholder: 'Enter your Job',
											type: 'text',
											required: true,
											value: job,
											onChange(e) {
												setJob(e.target.value);
											},
										}}
										className="w-full"
										LabelProps={{
											className: 'text-[.8rem] text-[#fff] font-[500]',
										}}
									/>
									<label htmlFor="Interests" className="text-[#fff] mt-1 mb-4">
										What best describes you:
										<div className="flex flex-col gap-4 mt-3">
											<div className="flex gap-x-4">
												<input
													type="checkbox"
													name="buyer"
													id="buyer"
													value={RoleNames.BUYER}
													className="accent-green-800"
													onChange={handleRolesChange}
												/>
												<p className="text-white text-[.85rem]">Buyer</p>
											</div>
											<div className="flex gap-x-4">
												<input
													type="checkbox"
													name="seller"
													id="seller"
													value={RoleNames.SELLER}
													className="accent-green-800"
													onChange={handleRolesChange}
												/>
												<p className="text-white text-[.85rem]">Seller</p>
											</div>
											<div className="flex gap-x-4">
												<input
													type="checkbox"
													name="service_provider"
													id="service_provider"
													value={RoleNames.SERVICE_PROVIDER}
													className="accent-green-800"
													onChange={handleRolesChange}
												/>
												<p className="text-white text-[.85rem]">Service Provider</p>
											</div>
										</div>
									</label>
									<label htmlFor="Interests" className="text-[#fff] mb-4">
										Your core interests:
										<div className="flex flex-col gap-4 mt-3">
											<div className="flex gap-x-4">
												<input
													type="checkbox"
													name="animal_production"
													id="animal_production"
													value={Interests.ANIMAL_PRODUCTION}
													className="accent-green-800"
													onChange={handleInterestsChange}
												/>
												<p className="text-white text-[.85rem]">Animal Production</p>
											</div>
											<div className="flex gap-x-4">
												<input
													type="checkbox"
													name="farming"
													id="farming"
													value={Interests.FARMING}
													className="accent-green-800"
													onChange={handleInterestsChange}
												/>
												<p className="text-white text-[.85rem]">Farming</p>
											</div>
											<div className="flex gap-x-4">
												<input
													type="checkbox"
													name="agric_businesses"
													id="agric_businesses"
													value={Interests.AGRIC_BUSINESSES}
													className="accent-green-800"
													onChange={handleInterestsChange}
												/>
												<p className="text-white text-[.85rem]">Agric Businesses</p>
											</div>
											<div className="flex gap-x-4">
												<input
													type="checkbox"
													name="service_provider"
													id="service_provider"
													value={Interests.SERVICE_PROVIDER}
													className="accent-green-800"
													onChange={handleInterestsChange}
												/>
												<p className="text-white text-[.85rem]">Service Provider</p>
											</div>
										</div>
									</label>
								</>
							)
						)}
						{page === 'Log In' && (
							<>
								<TextField
									label="Email"
									InputProps={{
										placeholder: 'Enter your Email Address',
										type: 'email',
										required: true,
										value: email,
										onChange(e) {
											setEmail(e.target.value);
										},
									}}
									className="w-full"
									LabelProps={{
										className: 'text-[.8rem] text-[#fff] font-[500]',
									}}
								/>
								<TextField
									label="Password"
									InputProps={{
										placeholder: 'Enter your Password',
										type: 'password',
										required: true,
										value: password,
										onChange(e) {
											setPassword(e.target.value);
										},
									}}
									className="w-full"
									LabelProps={{
										className: 'text-[.8rem] text-[#fff] font-[500]',
									}}
								/>
							</>
						)}
						{page === 'Log In' && (
							<label className="remember" htmlFor="remember">
								<input
									className="text-white bg-white cursor-pointer"
									type="checkbox"
									name="remember"
									id="remember"
									checked={rememberMe}
									onClick={() => setRememberMe(!rememberMe)}
								/>
								<span className="checkmark"></span>
								Remember me
							</label>
						)}
						<button
							className="submit text-[.95rem]"
							onClick={() => {
								if (page === 'Create Account' && step === 0) {
									if (userName && firstName && lastName && email && password) {
										setStep(1);
									}
								}
							}}>
							{signUpMutation.isPending || logInMutation.isPending
								? 'submitting...'
								: page === 'Create Account'
								? step === 0
									? 'Continue'
									: 'Submit'
								: 'Submit'}
						</button>
					</form>
					{page == 'Log In' ? (
						<span className="label account text-sm flex flex-col md:flex-row">
							Don&#39;t have an account? <Link href={'/signup'}>Create Account</Link>
						</span>
					) : (
						<span className="label account text-sm">
							Already have an account? <Link href={'/login'}>Log In</Link>
						</span>
					)}
				</div>
			</div>
		</>
	);
}
