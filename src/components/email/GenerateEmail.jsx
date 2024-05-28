/* eslint-disable no-mixed-spaces-and-tabs,react/prop-types */
// noinspection EqualityComparisonWithCoercionJS

import {Body, Column, Container, Head, Heading, Html, Img, Row, Section, Tailwind, Text} from '@react-email/components'

export const GenerateEmail = () => {
	return (
		<Html>
			<Tailwind>
				<Head><title>Verify your email address</title></Head>
				
				<Body className='bg-white font-sans'>
					<Container className='mx-auto max-w-3xl'>
						<Section>
							<Section className='bg-[#4EC184] h-20 sm:h-36'>
								<Row>
									<Column>
										<Img className='mx-auto h-8 w-auto sm:h-11'
										     src='https://sy-public-assets.s3.ap-south-1.amazonaws.com/logo.png' alt='Stockemy Logo'/>
									</Column>
								</Row>
							</Section>
							
							<Section className='bg-[#FDFDFD]'>
								<Heading className='mt-6 px-6 text-lg font-bold sm:mt-8 sm:px-8 sm:text-2xl text-[#272525]'>
									Verify Your Email Address with OTP
								</Heading>
								
								<Text className='mt-8 mb-0 px-6 text-base sm:mt-10 sm:px-8 sm:text-lg text-[#272525]'>Hey [name],</Text>
								<Text className='mt-4 mb-0 px-6 text-base sm:mt-4 sm:px-8 sm:text-lg text-[#272525]'>
									To complete your registration, please use the following OTP to verify your email address:
								</Text>
								
								<Text className='mt-10 sm:mt-14 mx-auto w-fit rounded-xl bg-[#EAF6F0] px-5 py-3 sm:py-4 text-center text-4xl sm:text-5xl tracking-widest font-semibold mb-0 text-[#272525]'>
									123456
								</Text>
								<Text className='mt-1 text-center text-xs sm:text-sm text-[#272525]'>Valid for 15 minutes</Text>
								
								<Text className='mt-10 text-[#7B7B7B] px-6 sm:px-8 mb-0 text-sm sm:text-base'>
									If you did not sign up for an account, please disregard this email.
								</Text>
								
								<Text className='mt-5 mb-0 px-6 text-xs sm:mt-4 sm:px-8 sm:text-base text-[#272525]'>Thank you,</Text>
								<Text className='mb-0 px-6 pb-8 text-xs font-semibold sm:px-8 sm:text-base mt-0 text-[#272525]'>Stockemy Team</Text>
							</Section>
							
							<Section className='bg-[#4EC184] h-6 sm:h-12'>
								<Row>
									<Column>
										<Text className='text-center text-[10px] sm:text-sm text-white m-0'>
											In case of any queries, please reach out to us at <a className='font-semibold underline underline-offset-2' href='mailto:support@stockemy.in'>support@stockemy.in</a>
										</Text>
									</Column>
								</Row>
							</Section>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	)
}
