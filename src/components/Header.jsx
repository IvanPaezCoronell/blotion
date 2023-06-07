
export default function Header() {
	return (
		<section className="overflow-hidden">
			<div className="pt-16 lg:pt-32 pb-24 lg:pb-52 bg-white text-gray-900 overflow-hidden">
				<div className="container px-4 mx-auto">
					<div className="flex flex-wrap -m-8">
						<div className="w-full md:w-1/2 p-8">
							<div className="md:max-w-lg">
								<span className="inline-block mb-8 px-3 py-1 text-white font-semibold bg-gray-600 rounded-full">
									#1 Aprovecha las ofertas
								</span>
								<h1 className="font-heading mb-12 text-6xl md:text-7xl  tracking-tighter">
									Realiza tus compras en línea de manera rápida
								</h1>
								<div className="flex flex-wrap -m-2 mb-14">
									<div className="w-auto p-2">
										<a
											className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200"
											href="/products"
										>
											Explorar Productos
										</a>
									</div>
									<div className="w-auto p-2">
										<a
											className="inline-flex items-center px-5 py-4 bg-transparent hover:bg-indigo-600 hover:text-white border border-gray-600 hover:border-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
											href="#"
										>
											<div className="inline-block">
												<svg
													className="mr-2.5 hover:text-white"
													width="18"
													height="19"
													viewBox="0 0 18 19"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M3 12.5L3 13.25C3 14.4926 4.00736 15.5 5.25 15.5L12.75 15.5C13.9926 15.5 15 14.4926 15 13.25L15 12.5M12 9.5L9 12.5M9 12.5L6 9.5M9 12.5L9 3.5"
														stroke="black"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</div>
											<span className=" font-semibold tracking-tight">
												Descargar App (pronto)
											</span>
										</a>
									</div>
								</div>
								<div className="max-w-md">
									<div className="flex flex-wrap -m-1.5">
										<div className="flex-1 p-1.5">
											<p className="tracking-tight">
												Queremos que encuentres en nuestro sitio todos esos
												productos que necesitas en tu vida cotidiana, ya sean
												para ti, tu hogar, o incluso para regalar a otros.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 p-8">
							<img
								className="transform hover:-translate-y-2 transition duration-500"
								src="/iMac.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
