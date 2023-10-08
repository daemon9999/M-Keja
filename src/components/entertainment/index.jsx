import Heading from './heading';

export default function Entertainment() {
  const pictures = [
    {
      id: 1,
      label: (
        <p className="text-white text-2xl font-semibold drop-shadow-lg uppercase text-center tracking-[4.8px]">
          city
          <br />
          centre
        </p>
      ),
    },
    {
      id: 2,
      label: 'winelands',
    },
    {
      id: 3,
      label: 'beach',
    },
    {
      id: 4,
      label: 'suburbian',
    },
  ];

  return (
    <section id="entertainment" className="mt-[47px] mb-[57px]">
      <Heading />

      <div className="container max-w-[1232px] mx-auto flex items-center gap-x-[1.875rem] mt-[42px]">
        {pictures.map((picture) => (
          <div
            key={picture.id}
            className="relative w-[285px] h-[479px] rounded-[30px] flex justify-center first:pt-[43px] pt-[59px]"
            style={{
              backgroundImage: `url('/images/entertainment/picture-${picture.id}.png')`,
            }}
          >
            
                {picture.id === 1 ? (
                    <>{picture.label}</>
                ) : (
    
                <p className="text-white text-2xl font-semibold drop-shadow-lg uppercase tracking-[4.8px]">
                  {picture.label}
                </p>
                )}
           
          </div>
        ))}
      </div>
    </section>
  );
}
