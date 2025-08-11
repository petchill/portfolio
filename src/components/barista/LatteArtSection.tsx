import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LatteArtCard from './LatteArtCard';

const LatteArtSection = () => {
    return (
        <section className="min-h-screen flex flex-col gap-8">
            <h1 className="text-4xl font-bold text-center text-[#F8F7F1]">Latte Art</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-[8px]'>
                <img className="object-cover w-full aspect-square rounded-[8px]" src="/portfolio/barista/art_20250613_105100.jpg" alt="art_20250613_105100" />
                <img className="object-cover w-full aspect-square rounded-[8px]" src="/portfolio/barista/art_20250606_105750.jpg" alt="art_20250606_105750" />
                <img className="object-cover w-full aspect-square rounded-[8px]" src="/portfolio/barista/art_20250610_094627.jpg" alt="art_20250610_094627" />
                <img className="object-cover w-full aspect-square rounded-[8px]" src="/portfolio/barista/art_20250610_100136.jpg" alt="art_20250610_100136" />
                <img className="object-cover w-full aspect-square rounded-[8px]" src="/portfolio/barista/art_20250610_110601.jpg" alt="art_20250610_110601" />
                <img className="object-cover w-full aspect-square rounded-[8px]" src="/portfolio/barista/art_20250610_125111.jpg" alt="art_20250610_125111" />
                <img className="object-cover w-full aspect-square rounded-[8px]" src="/portfolio/barista/art_20250613_103501.jpg" alt="art_20250613_103501" />
                <img className="object-cover w-full aspect-square rounded-[8px]" src="/portfolio/barista/art_20250613_105006.jpg" alt="art_20250613_105006" />
            </div>
            <div className="">
                <h4 className='text-[24px] font-bold text-[#EDB33C]'>Video</h4>
                <p className='mb-[8px] md:hidden text-gray-200 font-bold'>swipe left/right</p>
                <Carousel
                    interval={5000}
                    className="w-full max-w-[380px] block md:hidden"
                    showArrows={false}
                    renderItem={(item, props) => (
                        <div {...props} className="flex justify-center mx-[8px] mb-[36px]">
                            <div className="]">{item}</div>
                        </div>
                    )}

                >
                    <LatteArtCard video_url='/portfolio/barista/rosetta_20250610_105757_1.mp4' image_url='/portfolio/barista/rosetta_20250610_110347.jpg' label='ROSETTA' />
                    <LatteArtCard video_url='/portfolio/barista/tulip.mp4' image_url='/portfolio/barista/tulip.jpg' label='TULIP' />
                    <LatteArtCard video_url='/portfolio/barista/swan_20250613_102632.mp4' image_url='/portfolio/barista/swan_20250613_103515.jpg' label='SWAN' />
                </Carousel>
                <div className='flex-col gap-[16px] hidden md:flex'>
                    <LatteArtCard horizontal video_url='/portfolio/barista/rosetta_20250610_105757_1.mp4' image_url='/portfolio/barista/rosetta_20250610_110347.jpg' label='ROSETTA' />
                    <LatteArtCard horizontal video_url='/portfolio/barista/tulip.mp4' image_url='/portfolio/barista/tulip.jpg' label='TULIP' />
                    <LatteArtCard horizontal video_url='/portfolio/barista/swan_20250613_102632.mp4' image_url='/portfolio/barista/swan_20250613_103515.jpg' label='SWAN' />
                </div>
            </div>
        </section>
    );
};

export default LatteArtSection; 