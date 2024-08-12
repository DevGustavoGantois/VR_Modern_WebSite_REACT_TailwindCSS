// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import required modules from swiper/modules
import { Pagination } from 'swiper/modules';
// Import data
import { slider } from '../data';

export function TestimonialSlider() {
    return (
        <Swiper
        breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }}
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
        >
            {slider.map((slide, index) => {
                // Destructure data
                const { message, image, name, email } = slide;
                return (
                    <SwiperSlide key={index} className='rounded-lg p-4 lg:p-6 min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2a1428] to-[#331a35]'>
                        <p className='mb-8 min-h-[100px] text-[15px]'>{message}</p>
                        <div className='flex flex-col gap-x-4 md:flex-row md:items-center'>
                        <div className='w-14'>
                            <img className='mb-3 md:mb-0' src={image} alt={name} />
                        </div>
                        <div>
                            <div className='font-medium text-base'>{name}</div>
                            <div className='font-medium text-rose-600'>{email}</div>
                        </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}