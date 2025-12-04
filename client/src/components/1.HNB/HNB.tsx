import "./HNB.scss";

const HERO_CONFIG = {
  phoneNumber: "010-7475-3948",
  companyName: "바로하수구119",
  logoPath: "/assets/Logo.png",
  kakaoUrl: "https://open.kakao.com/o/sNB1dO4h",
  navigation: [
    { id: "about", title: "회사소개" },
    { id: "services", title: "서비스" },
    { id: "reviews", title: "고객후기" },
    { id: "contact", title: "상담문의" }
  ]
} as const;

export default function HNB() {
  return (
    <header className="HNB">
      <section className="HNB_TopContainer">
        <div className="TopContainer_ImageBox-Left">
          <img src={HERO_CONFIG.logoPath} alt={HERO_CONFIG.companyName} />
        </div>
        <div className="TopContainer_TextBox-Middle">
          <span className="TextBox-Middle_Logo">
            📞{HERO_CONFIG.phoneNumber}{" "}
          </span>
          <span className="TextBox-Middle_Text">지금 바로 문의주세요!</span>
        </div>
      </section>

      <section className="HNB_BottomContainer">
        <a
          className="BottomContainer_CallButtonBox-Left"
          href={`tel:${HERO_CONFIG.phoneNumber}`}
        >
          <span className="CallButtonBox-Left_svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="CallButtonBox-Left_text">전화 상담</span>
        </a>

        <a
          className="BottomContainer_KakaoButton-Right   hover:bg-yellow-500"
          href={HERO_CONFIG.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="KakaoButton-Right_text">💬 카카오톡 상담</span>
        </a>
      </section>
    </header>
  );
}
