import { useState } from "react";

// ✅ Apps Script 웹앱(or 원하는 API) URL로 바꿔 넣기
const SHEET_WEBAPP_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzV0QN-8or9pa7a7k0qObgiy1CveWJz29ayYnMvBX0M35PTSpl-ZBJTRbK4SBHvyWla/exec";
// ← 실제 URL로 교체

export default function ContactSection() {
  // 입력값 상태
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [situations, setSituations] = useState<string[]>([]);
  const [etc, setEtc] = useState("");
  const [message, setMessage] = useState("");

  // 서밋 상태
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // 데이터 전송
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || situations.length === 0) {
      setSubmitStatus({
        type: "error",
        message: "성함, 전화번호, 지금 상황은 필수 입력 항목입니다."
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const formData = new FormData();

      // 🔑 여기 키(name, phone, situations, etc, message)가
      // Apps Script 쪽 e.parameter.xxx 이름이 됨
      formData.append("name", name);
      formData.append("phone", phone);

      situations.forEach(s => {
        formData.append("situations", s);
      });

      if (etc.trim()) {
        formData.append("etc", etc.trim());
      }

      if (message.trim()) {
        formData.append("message", message.trim());
      }

      // 디버깅용: 실제로 어떤 값이 나가는지 보고 싶으면 콘솔 확인
      const debugObj: Record<string, any> = {};
      for (const [k, v] of formData.entries()) {
        if (debugObj[k]) {
          if (Array.isArray(debugObj[k])) debugObj[k].push(v);
          else debugObj[k] = [debugObj[k], v];
        } else {
          debugObj[k] = v;
        }
      }
      console.log("보내는 데이터:", debugObj);

      await fetch(SHEET_WEBAPP_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      setSubmitStatus({
        type: "success",
        message: "문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다."
      });

      // 폼 초기화
      setName("");
      setPhone("");
      setSituations([]);
      setEtc("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: "error",
        message: "전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // 체크박스 상태 변경 핸들러
  const handleSituationCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSituations(prev =>
      checked ? [...prev, value] : prev.filter(s => s !== value)
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 문의 폼 컨테이너 */}
        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8">
          {/* 문의 폼 제목 */}
          <h2 className="text-3xl font-bold mb-8 text-center">상담문의</h2>
          {/* 문의 폼 */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 성함 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                성함을 입력해주세요.
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            {/* 전화번호 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                전화번호를 입력해주세요.
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="010-0000-0000"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            {/* 지금 상황 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                지금 상황을 알려주세요.
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="소변기/대변기 막힘"
                    checked={situations.includes("소변기/대변기 막힘")}
                    onChange={handleSituationCheckBox}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <span>소변기/대변기 막힘</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="싱크대 막힘"
                    checked={situations.includes("싱크대 막힘")}
                    onChange={handleSituationCheckBox}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <span>싱크대 막힘</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="고압세척"
                    checked={situations.includes("고압세척")}
                    onChange={handleSituationCheckBox}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <span>고압세척</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="하수구 배관/공사"
                    checked={situations.includes("하수구 배관/공사")}
                    onChange={handleSituationCheckBox}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <span>하수구 배관/공사</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="해빙/수도녹임"
                    checked={situations.includes("해빙/수도녹임")}
                    onChange={handleSituationCheckBox}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <span>해빙/수도녹임</span>
                </label>

                {/* 기타 + 직접 입력 */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="기타"
                    checked={situations.includes("기타")}
                    onChange={handleSituationCheckBox}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <span>기타:</span>
                  <input
                    type="text"
                    value={etc}
                    onChange={e => setEtc(e.target.value)}
                    placeholder="직접입력"
                    className="flex-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm px-2 py-1"
                  />
                </div>
              </div>
            </div>

            {/* 문의사항 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                문의사항이 있다면 말씀해주세요.
              </label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={4}
                placeholder="문의내용을 입력해주세요. (선택)"
              />
            </div>

            {/* 상태 메시지 */}
            {submitStatus.type && (
              <div
                className={`p-3 rounded-md text-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* 버튼 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 bg-cyan-400 hover:bg-cyan-500 text-white font-medium rounded-md shadow-sm transition-colors ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "접수 중..." : "무료상담 신청하기"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
