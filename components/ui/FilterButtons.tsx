'use client';

type FilterOption<T extends string> = {
	label: string;
	value: T;
};

type FilterButtonsProps<T extends string> = {
	filters: FilterOption<T>[];
	activeFilter: T;
	onFilterChange: (value: T) => void;
};

const FilterButtons = <T extends string>({
	filters,
	activeFilter,
	onFilterChange,
}: FilterButtonsProps<T>) => {
	return (
		<div className="flex flex-wrap justify-center gap-2">
			{filters.map((filter) => {
				const isActive = activeFilter === filter.value;

				return (
					<button
						key={filter.value}
						type="button"
						onClick={() => onFilterChange(filter.value)}
						className={`rounded-lg px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
							isActive
								? 'bg-linear-to-r from-primary to-primary-dark text-white shadow-md'
								: 'border border-border bg-background text-text hover:border-primary hover:text-primary'
						}`}
					>
						{filter.label}
					</button>
				);
			})}
		</div>
	);
};

export default FilterButtons;
