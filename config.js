/**
 * Modern Minimal Wedding Invitation Configuration
 *
 * Edit the values below to customize your wedding invitation.
 * Image files should be placed in the corresponding images/ subfolders
 * using sequential filenames (1.jpg, 2.jpg, ...).
 * The code auto-detects images by trying sequential filenames.
 *
 * Image folder conventions:
 *   images/hero/1.jpg       - Main wedding photo (single file)
 *   images/story/1.jpg, ... - Story section photos (auto-detected)
 *   images/gallery/1.jpg, . - Gallery photos (auto-detected)
 *   images/location/1.jpg   - Venue/map image (single file)
 *   images/og/1.jpg         - Kakao share thumbnail (single file)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "조승현",
    nameEn: "SEUNGHYUN",
    father: "조재철",
    mother: "이신경",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이은솔",
    nameEn: "EUNSOL",
    father: "이해진",
    mother: "이순영",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-20",
    time: "14:00",
    venue: "덕수교회",
    hall: "본당",
    address: "서울특별시 성북구 성북로 127",
    tel: "02-741-5161",
    mapLinks: {
      kakao: "https://place.map.kakao.com/10325985",
      naver: "https://naver.me/FN74YpEH"
    }
  },

  // ── 인사말 ──
  invitation: {
    title: "소중한 분들을 초대합니다",
    message: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n바쁘시더라도 오셔서\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "조승현", bank: "OO은행", number: "000-000-000000" },
      { role: "아버지", name: "조재철", bank: "OO은행", number: "000-000-000000" },
      { role: "어머니", name: "이신경", bank: "OO은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "이은솔", bank: "OO은행", number: "000-000-000000" },
      { role: "아버지", name: "이해진", bank: "OO은행", number: "000-000-000000" },
      { role: "어머니", name: "이순영", bank: "OO은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    jsKey: "",
    title: "결혼식에 초대합니다",
    description: ""
  }
};
