import "./Services.scss";

const SERVICES_CONFIG = [
  {
    title: "변기 막힘",
    description:
      "막힌 변기를 장비로 신속하게 뚫습니다. 역류·악취까지 함께 점검합니다.",
    imagePath:
      "https://images.unsplash.com/photo-1617093727343-374d1aa58f5d?w=800&auto=format&fit=crop"
  },
  {
    title: "싱크대 막힘",
    description:
      "음식물·기름때로 막힌 싱크대를 깨끗하게 해결합니다. 배수 속도 개선.",
    imagePath:
      "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?w=800&auto=format&fit=crop"
  },
  {
    title: "고압 세척",
    description:
      "배관 내부 기름·찌꺼기를 고압세척으로 완전히 제거합니다.",
    imagePath:
      "https://images.unsplash.com/photo-1521207418485-99c705420785?w=800&auto=format&fit=crop"
  },
  {
    title: "관로 탐지",
    description:
      "CCTV로 배관 내부를 촬영해 막힘·파손 지점을 정확히 찾습니다.",
    imagePath:
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e49?w=800&auto=format&fit=crop"
  },
  {
    title: "해빙 / 수도 녹임",
    description:
      "동파된 수도관을 장비로 안전하게 해빙합니다. 추가 파손을 예방합니다.",
    imagePath:
      "https://images.unsplash.com/photo-1581578017426-cf42a2b7262f?w=800&auto=format&fit=crop"
  },
  {
    title: "누수 탐지 / 일반 설비",
    description:
      "수도 누수, 배관 문제를 장비로 진단·수리합니다.",
    imagePath:
      "https://images.unsplash.com/photo-1581578017426-cf42a2b7262f?w=800&auto=format&fit=crop"
  }
];

export default function ServicesSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-10 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          mz하수구119 서비스 소개
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES_CONFIG.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden md:transform md:hover:scale-105 md:transition-transform md:duration-300 flex flex-col h-full"
            >
              <div className="relative h-48">
                <img
                  src={service.imagePath}
                  alt={service.title}
                  className="absolute w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
