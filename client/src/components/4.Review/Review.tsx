import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Review.scss";


export interface Review {
  id: number;
  name: string;
  location: string;
  constructionType: string;
  rating: number;
  content: string;
  date: string;
}

interface ReviewSectionProps {
  id?: string;
}

const REVIEW_CONFIG = {
  reviews: [
    {
      id: 1,
      name: "김**",
      location: "서울시 강남구 역삼동",
      constructionType: "변기 막힘",
      rating: 5,
      content:
        "밤늦게 변기가 막혀서 당황했는데, 바로 출동해 주시고 깔끔하게 뚫어주셨어요. 악취까지 잡혀서 너무 좋습니다.",
      date: "2024.03"
    },
    {
      id: 2,
      name: "이**",
      location: "서울시 송파구 잠실동",
      constructionType: "싱크대 막힘",
      rating: 5,
      content:
        "싱크대가 전혀 안 내려가서 불편했는데, 음식물 찌꺼기까지 싹 제거해 주셨어요. 배수 속도가 확 좋아졌습니다.",
      date: "2024.03"
    },
    {
      id: 3,
      name: "박**",
      location: "서울시 마포구 서교동",
      constructionType: "해빙 / 수도 녹임",
      rating: 5,
      content:
        "겨울 새벽에 수도가 얼어버렸는데 안전하게 해빙 작업해 주셔서 큰 사고 없이 넘겼습니다. 설명도 친절했어요.",
      date: "2024.02"
    },
    {
      id: 4,
      name: "최**",
      location: "서울시 영등포구 여의동",
      constructionType: "누수 탐지 / 일반 설비",
      rating: 5,
      content:
        "화장실 쪽에서 계속 물 새는 소리가 났는데, 누수 위치를 정확히 찾아서 깔끔하게 수리해 주셨습니다.",
      date: "2024.02"
    },
    {
      id: 5,
      name: "정**",
      location: "서울시 서초구 반포동",
      constructionType: "변기 막힘",
      rating: 5,
      content:
        "여러 번 막히던 변기였는데 원인까지 자세히 설명해 주시고 재발 방지 방법도 알려주셔서 도움이 많이 됐어요.",
      date: "2024.01"
    },
    {
      id: 6,
      name: "강**",
      location: "서울시 강동구 천호동",
      constructionType: "싱크대 막힘",
      rating: 5,
      content:
        "기름때가 심해서 냄새도 많이 났는데, 배관 안쪽까지 장비로 정리해 주셔서 냄새가 확 줄었습니다.",
      date: "2024.01"
    },
    {
      id: 7,
      name: "조**",
      location: "서울시 노원구 상계동",
      constructionType: "누수 탐지 / 일반 설비",
      rating: 5,
      content:
        "천장에서 물이 떨어져서 걱정했는데, 누수 지점을 금방 찾아서 수리해 주셨어요. 추가 피해 없이 잘 넘어갔습니다.",
      date: "2024.01"
    },
    {
      id: 8,
      name: "윤**",
      location: "서울시 동작구 사당동",
      constructionType: "해빙 / 수도 녹임",
      rating: 5,
      content:
        "상가 수도 배관이 얼어서 장사를 못 할 뻔했는데 바로 와서 해빙해 주셔서 정말 감사했습니다.",
      date: "2023.12"
    },
    {
      id: 9,
      name: "장**",
      location: "서울시 성북구 길음동",
      constructionType: "싱크대 막힘",
      rating: 5,
      content:
        "설거지할 때마다 역류가 심했는데, 배관 구조까지 확인해 주시고 깔끔하게 뚫어주셨어요. 재문의 의사 있습니다.",
      date: "2023.12"
    },
    {
      id: 10,
      name: "한**",
      location: "서울시 광진구 자양동",
      constructionType: "변기 막힘",
      rating: 5,
      content:
        "아이들이 물티슈를 흘려보내서 완전히 막혔는데, 변기 탈착까지 안전하게 진행해 주셔서 안심됐습니다.",
      date: "2023.12"
    },
    {
      id: 11,
      name: "신**",
      location: "서울시 중랑구 면목동",
      constructionType: "누수 탐지 / 일반 설비",
      rating: 5,
      content:
        "보일러 배관 누수 의심으로 연락드렸는데, 점검 후 필요한 부분만 수리해서 비용도 합리적이었어요.",
      date: "2023.11"
    },
    {
      id: 12,
      name: "임**",
      location: "서울시 강서구 화곡동",
      constructionType: "싱크대 막힘",
      rating: 5,
      content:
        "주방 싱크대에서 계속 물이 새어나왔는데 배관 연결 상태까지 점검해 주셔서 확실히 해결됐습니다.",
      date: "2023.11"
    },
    {
      id: 13,
      name: "권**",
      location: "서울시 용산구 이태원동",
      constructionType: "해빙 / 수도 녹임",
      rating: 5,
      content:
        "빌라 전체 수도가 얼어서 난감했는데, 빠르게 와주셔서 해빙하고 동파 방지 방법까지 알려주셨어요.",
      date: "2023.11"
    },
    {
      id: 14,
      name: "황**",
      location: "서울시 동대문구 장안동",
      constructionType: "변기 막힘",
      rating: 5,
      content:
        "반복적으로 막히던 변기를 근본적으로 해결해 주셔서 이제는 마음이 편합니다. 정말 추천드려요.",
      date: "2023.10"
    },
    {
      id: 15,
      name: "백**",
      location: "서울시 은평구 불광동",
      constructionType: "누수 탐지 / 일반 설비",
      rating: 5,
      content:
        "집안 여기저기 습기가 올라와서 걱정이 많았는데, 누수 경로를 정확히 짚어주셔서 믿음이 갔습니다.",
      date: "2023.10"
    }
  ]
} as const;

export default function ReviewSection({ id }: ReviewSectionProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id={id} className="py-8 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          고객 후기
        </h2>

        <div className="relative px-4 sm:px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{
              clickable: true
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            breakpoints={{
              640: {
                slidesPerView: 3
              }
            }}
            className="w-full !px-16 [&_.swiper-button-next]:!text-blue-600 [&_.swiper-button-next]:!opacity-70 hover:[&_.swiper-button-next]:!opacity-100 [&_.swiper-button-prev]:!text-blue-600 [&_.swiper-button-prev]:!opacity-70 hover:[&_.swiper-button-prev]:!opacity-100 [&_.swiper-button-next]:!block [&_.swiper-button-prev]:!block [&_.swiper-button-next]:!right-2 [&_.swiper-button-prev]:!left-2"
          >
            {REVIEW_CONFIG.reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 h-full mx-auto max-w-lg">
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        {review.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {review.location}
                      </p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500">
                      {review.date}
                    </span>
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">
                      {review.constructionType}
                    </span>
                  </div>
                  <div className="flex mb-3 sm:mb-4">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">
                    {review.content}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
