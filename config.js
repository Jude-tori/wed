/**
 * Modern Minimal Wedding Invitation Configuration
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,

  // ── 메인 (히어로) ──
  groom: {
    name: "조승현",
    nameEn: "조 승 현",
    father: "조재철",
    mother: "이신경",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이은솔",
    nameEn: "이 은 솔",
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

  // ── STAGE 1. COVENANT ──
  invitation: {
    title: "COVENANT",
    message: "나를 허물어 우리를 세우는,\n단단한 약속.\n\n승현 그리고 은솔\n\n두 사람의 진실한 언약의 자리에\n소중한 분들을 모십니다."
  },

  // ── STAGE 2. INVITATION ──
  story: {
    title: "초청 (招請)",
    content: "어제까지의 견고했던 각자의 삶을 뒤로하고,\n부부라는 이름으로 하나의 길을 엽니다.\n\n나보다 서로를 먼저 묻고 보듬는 삶.\n나를 비우고 상대를 채워가는 낯선 걸음이겠지만,\n기꺼이 그 평화로운 수고를 감당하려 합니다.\n\n때로는 고요한 그늘이 되어 마음을 쉬게 하고,\n때로는 환한 빛으로 서로를 이끌며\n오직 둘이기에 가능한 맑은 화음을 빚어내겠습니다.\n\n두 사람이 흔들림 없이 이 언약을 지켜가도록,\n부부로서 첫 호흡을 맞추는 날\n부디 귀한 걸음으로 오시어 증인이 되어 주십시오."
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "조승현", bank: "신한은행", number: "110-523-547831" },
      { role: "아버지", name: "조재철", bank: "신협", number: "132-062-486076" },
      { role: "어머니", name: "이신경", bank: "씨티은행", number: "446-23540-267" }
    ],
    bride: [
      { role: "신부", name: "이은솔", bank: "하나은행", number: "333-910088-92607" },
      { role: "아버지", name: "이해진", bank: "OO은행", number: "333-910001-54307" }
    ]
  },

  kakaoShare: {
    jsKey: "",
    title: "조승현 ♥ 이은솔 결혼식에 초대합니다",
    description: "2026년 6월 20일 오후 2시, 덕수교회"
  }
};