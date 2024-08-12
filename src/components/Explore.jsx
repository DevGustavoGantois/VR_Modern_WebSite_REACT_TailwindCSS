export function Explore() {
    return (
        <section className="min-h-[400px] mb-16 lg:mb-4" id="Explore">
            <div className="container mx-auto h-full">
                <div className="h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center">
                    <h3 className="text-3xl font-semibold mb-8" data-aos="fade-right" data-aos-offset="1100">Explore o produto de uma nova maneira</h3>
                    <p className="max-w-xs mb-12" data-aos="fade-right" >
                    Explorar óculos de realidade virtual (VR) oferece uma maneira inovadora de 
                    experimentar e interagir com o mundo digital, 
                    transformando a maneira como vivenciamos jogos, 
                    entretenimento, 
                    educação e até mesmo o trabalho.
                    </p>
                    <form data-aos="fade-up" data-aos-offset="300" data-aos-delay="1600" className="flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0">
                        <input className="bg-gradient-to-t from-[#341d38] to-[#271223] h-12 px-4 outline-none rounded-md" type="text" placeholder="Seu email" />
                        <button className="btn">Começar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}