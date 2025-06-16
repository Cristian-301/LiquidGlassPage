import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import UserIconQuote from './UserIconQuote';

const reviews = [
  {
    name: "Luca B.",
    text: "Un approccio veramente umano. Finalmente qualcuno che ti ascolta davvero prima di proporti soluzioni.",
    image: "https://www.lorem-johnny.com/api/policeman",
  },
  {
    name: "Giulia R.",
    text: "Tutto chiaro e trasparente, senza sorprese. Mi sono sentita accompagnata passo dopo passo.",
    image: "https://www.lorem-johnny.com/api/pet_sitter",
  },
  {
    name: "Marco T.",
    text: "Non un prodotto da comprare, ma un vero percorso di protezione su misura per me.",
    image: "https://www.lorem-johnny.com/api/doctor",
  },
  {
    name: "Francesca M.",
    text: "Finalmente qualcuno che mette le persone al centro davvero. Consigliatissimi!",
    image: "https://www.lorem-johnny.com/api/astronaut",
  },
];

export default function ReviewsSlider() {
  return (
    <div className="">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        COSA DICONO DI NOI I NOSTRI CLIENTI
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-full mx-auto"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <UserIconQuote content={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
