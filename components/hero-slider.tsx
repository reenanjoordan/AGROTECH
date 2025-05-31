"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Conectando Solidariedade",
    description:
      "Encontre organizações que ajudam pessoas em situação de vulnerabilidade",
    image:
      "https://st5.depositphotos.com/62628780/73185/i/600/depositphotos_731855856-stock-photo-team-hands-circle-support-strength.jpg",
  },
  {
    title: "Apoie quem precisa",
    description: "Doe roupas, alimentos e outros itens para quem mais precisa",
    image:
      "https://www.selecta-es.com.br/wp-content/uploads/2019/09/23.JornalMetro-Solidariedade-Site.png",
  },
  {
    title: "Transforme Vidas",
    description:
      "Ajude a transformar vidas com sua doação e faça a diferença na comunidade",
    image:
      "https://st5.depositphotos.com/46049982/69270/i/600/depositphotos_692702856-stock-photo-hand-putting-heart-donation-box.jpg",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center justify-center h-full px-4 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold sm:text-6xl">
              {slide.title}
            </h1>
            <p className="max-w-2xl mb-8 text-lg sm:text-xl">
              {slide.description}
            </p>
            <Button className="bg-[#FF5722] hover:bg-[#F4511E] text-white px-8 py-6 text-lg rounded-md">
              Quero Ajudar
            </Button>
          </div>
        </div>
      ))}

      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute p-2 text-white -translate-y-1/2 left-4 top-1/2"
      >
        <ChevronLeft size={40} />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute p-2 text-white -translate-y-1/2 right-4 top-1/2"
      >
        <ChevronRight size={40} />
      </button>

      <div className="absolute flex space-x-2 -translate-x-1/2 bottom-8 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
