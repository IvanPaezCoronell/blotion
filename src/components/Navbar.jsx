import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();

	const navLink = [
		{
			name: 'Productos',
			link: '/products',
		},
		{
			name: 'Mis Compras',
			link: '/shopping',
		},
	];
	return (
		<Disclosure as="nav" className="bg-black-100">
			{({ open }) =>
				<div className="text-gray-900">
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open
										? <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										: <Bars3Icon
												className="block h-6 w-6"
												aria-hidden="true"
											/>}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center  sm:justify-start">
								<div className="flex flex-shrink-0 text-white items-center">
									<a onClick={() => navigate('/')} className='text-white hover:text-white cursor-pointer'>

									<strong className='cursor-pointer'>BLOTION </strong>
									</a>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navLink.map(({ link, name }) => {
											// const isActive = navigate.startsWith(link);
											return (
												<a
													key={name}
													href={link}
													onClick={() => navigate('/products')}
													className="rounded-sm text-sm font-medium flex items-center p-3 -mb-1  text-white hover:bg-blue-400  hover:text-white"
												>
													{name}
												</a>
											);
										})}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								{/* Profile dropdown */}
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="pb-3 bg-gray-700 text-center p-2">
							{navLink.map(({ link, name }) => {
								// const isActive = pathname.startsWith(link);
								return (
									<Disclosure.Button
										key={name}
										as="a"
										href={link}
										className="rounded-sm text-sm font-medium flex items-center p-3 -mb-1  text-white hover:bg-blue-400  hover:text-white"
										>
										{name}
									</Disclosure.Button>
								);
							})}
						</div>
					</Disclosure.Panel>
				</div>}
		</Disclosure>
	);
};

export default Navbar;
