const FOOTER_CONFIG = {
  companyName: "mz하수구119",
  ceoName: "백광일",
  address: "서울시 관악구 서림3길 50, 501호",
  phoneNumber: "010-7475-3948",
  businessNumber: "539-44-01118", // 사업자번호 동일하게 유지한다고 가정
  year: 2023, // 설립년도 고정
  businessHours: {
    weekday: "24시간",
    saturday: "24시간",
    holiday: "365일 연중무휴"
  }
} as const;

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* 회사 정보 */}
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold text-gray-300">상호명:</span>{" "}
              {FOOTER_CONFIG.companyName}
            </p>
            <p>
              <span className="font-semibold text-gray-300">대표자명:</span>{" "}
              {FOOTER_CONFIG.ceoName}
            </p>
            <p>
              <span className="font-semibold text-gray-300">주소:</span>{" "}
              {FOOTER_CONFIG.address}
            </p>
            <p>
              <span className="font-semibold text-gray-300">전화번호:</span>{" "}
              {FOOTER_CONFIG.phoneNumber}
            </p>
            <p>
              <span className="font-semibold text-gray-300">
                사업자등록번호:
              </span>{" "}
              {FOOTER_CONFIG.businessNumber}
            </p>
          </div>

          {/* 영업시간 */}
          <div className="text-sm">
            <p className="font-semibold text-gray-300 mb-2">영업시간</p>
            <div className="space-y-1">
              <p>평일: {FOOTER_CONFIG.businessHours.weekday}</p>
              <p>토요일: {FOOTER_CONFIG.businessHours.saturday}</p>
              <p>일요일/공휴일: {FOOTER_CONFIG.businessHours.holiday}</p>
            </div>
            <p className="mt-4 text-gray-500">
              24시간 365일 언제든 전화주세요. 빠르게 출동합니다.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800 text-sm text-center">
          © {FOOTER_CONFIG.year} {FOOTER_CONFIG.companyName}. All rights reserved
        </div>
      </div>
    </footer>
  );
}
