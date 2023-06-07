'use client';
import React, { useId} from 'react';
import useFilters from '../hooks/useFilters';


export default function Filters() {
	const {filters, setFilters} = useFilters()



	const minPriceFilterId = useId()
	const categoryFilterId = useId()

	const handleChangeMinPrice = e => {
		
		setFilters(prevState => ({
			...prevState,
			minPrice: e.target.value,
		}));
	};

	const handleChangeCategory = e => {
		setFilters(prevState => ({
			...prevState,
			category: e.target.value,
		}));
	};



	return (
		<section className='text-black flex items-center justify-between content-center'>
			<div>
				
				<label htmlFor={minPriceFilterId} className="block mb-2 text-sm font-medium text-black-900 text-black">Precios a partir de:</label>
				<input id={minPriceFilterId} type="range" min='0' max='1000' value={filters.minPrice}  	onChange={handleChangeMinPrice} className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer bg-gray-700"></input>
				
				<span>
					${filters.minPrice}
				</span>
			</div>

			<div className="text-white-900">
				<label htmlFor={categoryFilterId}>Categoria</label>
				<select
					id={categoryFilterId}
					onChange={handleChangeCategory}
					className="text-gray-900"
				>
					<option value="all">Todas</option>
					<option value="laptops">Portatiles</option>
					<option value="smartphones">Celulares</option>
				</select>
			</div>
		</section>
	);
}
