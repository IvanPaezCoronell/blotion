import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default function Index() {
	return (
		<div>
			<div className="container mx-auto">
				<div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
					{/* Carousel for desktop and large size devices */}
					<CarouselProvider
						className="lg:block hidden"
						naturalSlideWidth={100}
						isIntrinsicHeight={true}
						totalSlides={12}
						visibleSlides={4}
						step={1}
						infinite={true}
					>
						<div className="w-full relative flex items-center justify-center">
							<ButtonBack
								role="button"
								aria-label="slide backward"
								className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
								id="prev"
							>
								<svg
									width={8}
									height={14}
									viewBox="0 0 8 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7 1L1 7L7 13"
										stroke="white"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</ButtonBack>
							<div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
								<Slider>
									<div
										id="slider"
										className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
									>
										<Slide index={0}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
													alt="black chair and white table"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Apple
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={1}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Sony
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={2}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lsbGF8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Hogar
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Muebles
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={3}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVjb3JhY2lvbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Hogar
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Florero
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={4}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1618478594486-c65b899c4936?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNlbHVsYXIlMjBzYW1zdW5nfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
													alt="black chair and white table"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Samsung
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={5}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVjb3JhY2klQzMlQjNuJTIwZGVsJTIwaG9nYXJ8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Hogar
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Jarrones
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={6}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGVzY3JpdG9yaW98ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Hogar
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Escritorio
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={7}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1549190179-646f048c6108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVsb2p8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Hogar
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Reloj
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={8}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvcGF8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="black chair and white table"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
														Ropa
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Camisetas
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={9}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1516575869513-3f418f8902ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY25vbG9naWF8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Marshall
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={10}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1595626218921-6ebd7d8686a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1vdXNlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														AirPods
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={11}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1602726428221-9af5b227ed5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91c2V8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														LogiTech
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
									</div>
								</Slider>
							</div>
							<ButtonNext
								role="button"
								aria-label="slide forward"
								className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
								id="next"
							>
								<svg
									width={8}
									height={14}
									viewBox="0 0 8 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1 1L7 7L1 13"
										stroke="white"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</ButtonNext>
						</div>
					</CarouselProvider>

					{/* Carousel for tablet and medium size devices */}
					<CarouselProvider
						className="lg:hidden md:block hidden"
						naturalSlideWidth={100}
						isIntrinsicHeight={true}
						totalSlides={12}
						visibleSlides={2}
						step={1}
						infinite={true}
					>
						<div className="w-full relative flex items-center justify-center">
							<ButtonBack
								role="button"
								aria-label="slide backward"
								className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
								id="prev"
							>
								<svg
									width={8}
									height={14}
									viewBox="0 0 8 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7 1L1 7L7 13"
										stroke="white"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</ButtonBack>
							<div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
								<Slider>
									<div
										id="slider"
										className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
									>
										<Slide index={0}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
													alt="black chair and white table"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Apple
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={1}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Sony
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={2}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lsbGF8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Hogar
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Muebles
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={3}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVjb3JhY2lvbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Hogar
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Florero
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={4}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1618478594486-c65b899c4936?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNlbHVsYXIlMjBzYW1zdW5nfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
													alt="black chair and white table"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Samsung
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={5}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVjb3JhY2klQzMlQjNuJTIwZGVsJTIwaG9nYXJ8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Hogar
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Jarrones
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={6}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGVzY3JpdG9yaW98ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Hogar
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Escritorio
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={7}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1549190179-646f048c6108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVsb2p8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Hogar
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Reloj
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={8}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvcGF8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="black chair and white table"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
														Ropa
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Camisetas
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={9}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1516575869513-3f418f8902ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY25vbG9naWF8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Marshall
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={10}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1595626218921-6ebd7d8686a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1vdXNlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														AirPods
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={11}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1602726428221-9af5b227ed5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91c2V8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														LogiTech
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
									</div>
								</Slider>
							</div>
							<ButtonNext
								role="button"
								aria-label="slide forward"
								className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
								id="next"
							>
								<svg
									width={8}
									height={14}
									viewBox="0 0 8 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1 1L7 7L1 13"
										stroke="white"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</ButtonNext>
						</div>
					</CarouselProvider>

					{/* Carousel for mobile and Small size Devices */}
					<CarouselProvider
						className="block md:hidden "
						naturalSlideWidth={100}
						isIntrinsicHeight={true}
						totalSlides={12}
						visibleSlides={1}
						step={1}
						infinite={true}
					>
						<div className="w-full relative flex items-center justify-center">
							<ButtonBack
								role="button"
								aria-label="slide backward"
								className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
								id="prev"
							>
								<svg
									width={8}
									height={14}
									viewBox="0 0 8 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7 1L1 7L7 13"
										stroke="white"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</ButtonBack>
							<div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
								<Slider>
									<div
										id="slider"
										className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
									>
										<Slide index={0}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
													alt="black chair and white table"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Apple
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={1}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Sony
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={2}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lsbGF8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Hogar
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Muebles
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={3}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVjb3JhY2lvbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Hogar
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Florero
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={4}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1618478594486-c65b899c4936?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNlbHVsYXIlMjBzYW1zdW5nfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
													alt="black chair and white table"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Samsung
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={5}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVjb3JhY2klQzMlQjNuJTIwZGVsJTIwaG9nYXJ8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Hogar
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Jarrones
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={6}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGVzY3JpdG9yaW98ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Hogar
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Escritorio
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={7}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1549190179-646f048c6108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVsb2p8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Hogar
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Reloj
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={8}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvcGF8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="black chair and white table"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
														Ropa
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Camisetas
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={9}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1516575869513-3f418f8902ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY25vbG9naWF8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														Marshall
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={10}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1595626218921-6ebd7d8686a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1vdXNlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														AirPods
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
										<Slide index={11}>
											<div className="flex flex-shrink-0 relative w-full sm:w-auto">
												<img
													src="https://images.unsplash.com/photo-1602726428221-9af5b227ed5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91c2V8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
													alt="sitting area"
													className="object-cover object-center w-full"
												/>
												<div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
													<h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
														LogiTech
													</h2>
													<div className="flex h-full items-end pb-6">
														<h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
															Tecnologia
														</h3>
													</div>
												</div>
											</div>
										</Slide>
									</div>
								</Slider>
							</div>
							<ButtonNext
								role="button"
								aria-label="slide forward"
								className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
								id="next"
							>
								<svg
									width={8}
									height={14}
									viewBox="0 0 8 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1 1L7 7L1 13"
										stroke="white"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</ButtonNext>
						</div>
					</CarouselProvider>
				</div>
			</div>

			<div className="container mx-auto p-12 bg-blue-400">
				<div className="flex flex-col lg:flex-row items-center justify-between">
					<h2 className="text-center text-6xl tracking-tighter font-bold">
						Todo a
						<br className="sm:hidden" /> 10% de descuento
					</h2>
					<div className="space-x-2 text-center py-2 lg:py-0">
						<span> Usando el codigo:</span>
						<span className="font-bold text-lg">Blotion</span>
					</div>
					<a
						href="#"
						rel="noreferrer noopener"
						className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
					>
						Ver productos
					</a>
				</div>
			</div>
		</div>
	);
}
