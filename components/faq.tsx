"use client";

import { useState } from "react";

export function FaqSection() {
  const faqs = [
    {
      question: "Como posso fazer uma doação?",
      answer:
        "Você pode doar alimentos, roupas ou valores em dinheiro diretamente pela nossa plataforma. Basta clicar no botão 'Doe agora' e seguir as instruções.",
    },
    {
      question: "Minhas doações realmente chegam às pessoas?",
      answer:
        "Sim. Trabalhamos com ONGs confiáveis e mostramos relatórios de impacto para garantir total transparência.",
    },
    {
      question: "Posso ajudar mesmo sem doar dinheiro?",
      answer:
        "Com certeza! Você pode se cadastrar como voluntário e participar de ações presenciais ou ajudar na divulgação das campanhas.",
    },
    {
      question: "As doações são dedutíveis do imposto de renda?",
      answer:
        "Algumas doações podem ser dedutíveis, dependendo do projeto e da legislação vigente. Consulte seu contador para detalhes.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-10 text-center">
      <div className="text-[20px] text-gray-900 mb-2 font-sans">Dúvidas frequentes</div>
      <h2 className="text-[32px] font-bold text-gray-900 mb-10 font-sans">FAQ - Perguntas e Respostas</h2>
      <div className="max-w-3xl mx-auto text-left space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-5 bg-gray-50 shadow-sm cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[18px] font-semibold text-gray-900 font-sans">{faq.question}</h3>
              <span className="text-gray-500 text-xl font-bold">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="text-[16px] text-gray-600 mt-4 leading-relaxed font-sans">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
