//import components
import { TestimonialSlider } from './TestimonialSlider';

export function Testimonial() {
    return (
        <section className='mb-64 lg:mb-48'>
            <div className='container mx-auto'>
                <div className='bg-purple-400/10 max-h-[400px] p-12 rounded-lg'>
                    <div className='text-center'>
                        <h2 data-aos="fade-up" data-aos-offset="300" data-aos-delay="1600" className='text-3xl font-bold mb-6'>O que os clientes estão dizendo</h2>
                        <p data-aos="fade-up" data-aos-offset="400" data-aos-delay="1800" className='max-w-2xl mx-auto mb-12 lg:mb-24'>Veja o que nossos clientes estão dizendo sobre a experiência de utilizar um óculos de Realidade Virtual</p>
                    </div>
                    <div data-aos="fade-up" data-aos-offset="300" data-aos-delay="2000">
                        <TestimonialSlider/>
                    </div>
                </div>
            </div>
        </section>
    )
}