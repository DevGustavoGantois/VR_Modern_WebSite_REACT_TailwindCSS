// Import images
import Headset1 from '../assets/img/headset-1.png';
import Headset2 from '../assets/img/headset-2.png';
import Headset3 from '../assets/img/headset-3.png';
import Headset4 from '../assets/img/headset-4.png';

export function HeadSets() {
    return (
        <section className='py-12 lg:py-24' id='Caracteristica'>
            <div className="container mx-auto">
                <h2 className='text-3xl font-bold mb-6' data-aos="fade-down" data-aos-offset="300">
                Fones de ouvido de realidade mista
                </h2>
                <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'>
                    <div className='relative' data-aos="zoom-in" data-aos-offset="300" data-aos-delay="1000">
                        <img src={Headset1} alt="Metaverse Headset" />
                        <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
                            <h4 className='font-semibold text-xl mb-2'>Metaverso</h4>
                            <p>O metaverso representa uma nova fronteira na interação digital, uma evolução do conceito de internet que vai além das páginas e redes sociais bidimensionais para criar um universo virtual tridimensional e interconectado.</p>
                        </div>
                    </div>
                    <div className='relative' data-aos="zoom-in" data-aos-offset="500" data-aos-delay="1300">
                        <img src={Headset2} alt="AIoT Headset" />
                        <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
                            <h4 className='font-semibold text-xl mb-2'>IAoT</h4>
                            <p>IAoT, ou "Internet das Coisas com Inteligência Artificial" (do inglês Artificial Intelligence of Things), é a convergência de duas das tecnologias mais transformadoras do século XXI: a Inteligência Artificial (IA) e a Internet das Coisas (IoT). </p>
                        </div>
                    </div>
                    <div className='relative' data-aos="zoom-in" data-aos-offset="500" data-aos-delay="1600">
                        <img src={Headset3} alt="Hololens Headset" />
                        <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
                            <h4 className='font-semibold text-xl mb-2'>Hololens</h4>
                            <p>O HoloLens é um dispositivo de realidade mista desenvolvido pela Microsoft, que combina elementos de realidade aumentada (AR) e realidade virtual (VR) para criar uma experiência de interação digital inovadora. </p>
                        </div>
                    </div>
                    <div className='relative' data-aos="zoom-in" data-aos-offset="500" data-aos-delay="1800">
                        <img src={Headset4} alt="TPCASTT Headset" />
                        <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
                            <h4 className='font-semibold text-xl mb-2'>TPCASTT</h4>
                            <p>
                            TPCASTT é uma estratégia de análise de poesia que ajuda os leitores a explorar e interpretar um poema de forma detalhada e sistemática. O acrônimo TPCASTT representa sete etapas distintas, cada uma com um foco específico, que juntas oferecem uma visão abrangente do poema.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
