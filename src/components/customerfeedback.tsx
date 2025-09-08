import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import image1 from "@/assets/pf-1.jpg";
import image2 from "@/assets/pf-2.jpg";
import image3 from "@/assets/pf-3.jpg";
import image4 from "@/assets/pf-4.jpg";

interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Naveen Bhatia",
    feedback: "TruliyoDigital transformed our online presence. Highly recommend!",
    rating: 5,
    image: image1,
  },
  {
    id: 2,
    name: "Kavita Sharma",
    feedback: "Professional team with amazing results. Our sales increased a lot!",
    rating: 4,
    image: image2,
  },
  {
    id: 3,
    name: "Raj Patel",
    feedback: "Great experience, they understood our needs perfectly.",
    rating: 5,
    image: image3,
  },
  {
    id: 4,
    name: "Anita Desai",
    feedback: "Outstanding service and very responsive support team!",
    rating: 5,
    image: image4,
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="relative flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute -left-6 z-10 rounded-full bg-white shadow-lg"
          >
            <ChevronLeft className="h-6 w-6 text-purple-600" />
          </Button>

          <div className="flex gap-6 overflow-hidden w-full justify-center">
            {visibleTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="w-80 flex-shrink-0 rounded-2xl shadow-md border border-gray-100 bg-white hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <img src={testimonial.image} alt="" width={70} height={70} className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-2 border-grey-500 shadow-lg"/>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <div className="flex justify-center my-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    {testimonial.feedback}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute -right-6 z-10 rounded-full bg-white shadow-lg"
          >
            <ChevronRight className="h-6 w-6 text-purple-600" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
