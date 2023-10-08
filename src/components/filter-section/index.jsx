import FilterForm from './filter-form';

export default function FilterSection() {
  return (
    <section
      id="filter-section"
      className="bg-filter  w-full h-[749px] bg-cover  "
    >
      <div className=" container max-w-[1270px] mx-auto h-full flex flex-col justify-end pb-[109px] gap-y-[107px]">
        <h1 className="text-white text-[5rem] font-bold drop-shadow-xl">
          Find Your Dream <span className="text-primary-2">Apartment</span>
        </h1>

        <FilterForm />
      </div>
    </section>
  );
}
