import { PropTypes } from 'prop-types';
export default function CityDetail({ cityDetail }) {
  const { cityName, sale, rent, agents } = cityDetail;
  return (
    <div className='inline-block'>
      <h4 className="text-[2.5rem] font-bold text-white">{cityName}</h4>
      <div className="flex gap-x-4 px-6 mt-2 h-20 bg-black/50">
        <div className="flex flex-col items-center gap-y-1">
          <span className="text-2xl text-white font-medium">{sale}</span>
          <p className="text-white">For Sale</p>
        </div>

        <span className="h-12 w-0.5 bg-[#D9D9D9] mr-2" />
        <div className="flex flex-col items-center gap-y-1">
          <span className="text-2xl text-white font-medium">{rent}</span>
          <p className="text-white">For Rent</p>
        </div>

        <span className="h-12 w-0.5 bg-[#D9D9D9] mr-2" />
        <div className="flex flex-col items-center gap-y-1">
          <span className="text-2xl text-white font-medium">{agents}</span>
          <p className="text-white">Agents</p>
        </div>
      </div>
    </div>
  );
}

CityDetail.propTypes = {
  cityDetail: PropTypes.object,
};
