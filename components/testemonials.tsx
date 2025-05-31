import userIcon from "../public/avatar.png";
import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      message:
        "Graças às doações, pude alimentar meus filhos durante uma semana difícil. Sou muito grata por essa rede de apoio que apareceu quando mais precisei.",
      name: "Ana Oliveira",
      role: "Mãe solo",
    },
    {
      message:
        "Estava desempregado há meses e as cestas básicas que recebi fizeram toda a diferença. Essa ajuda me deu forças para seguir em frente.",
      name: "José Carlos",
      role: "Trabalhador informal",
    },
    {
      message:
        "Com as doações, conseguimos manter o abrigo funcionando e acolher mais famílias em situação de rua. É emocionante ver tanta solidariedade.",
      name: "Maria da Conceição",
      role: "Voluntária",
    },
  ];

  return (
    <section className="bg-[#ffffff] py-20 px-10 text-center">
      <div className="text-[20px] text-gray-900 mb-2 font-sans">Testemunhos</div>
      <h2 className="text-[32px] font-bold text-gray-900 mb-10 font-sans">Como as doações transformam vidas?</h2>
      <div className="flex justify-center flex-wrap gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-[20px] p-8 max-w-[300px] text-left shadow-sm flex flex-col h-auto"
          >
            <p className="text-[16px] text-gray-600 mb-6 leading-relaxed font-sans flex-grow">
              {item.message}
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-[50px] h-[50px] rounded-full bg-gray-100 flex items-center justify-center">
                <Image
                  src={userIcon}
                  alt="Usuário"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900 font-sans">{item.name}</div>
                <div className="text-sm text-gray-500 font-sans">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
