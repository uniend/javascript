const measage = [
  {
    number: 1,
    content:
      "쿠팡플레이와 함께하는 MLB 월드투어 서울 시리즈 2024’를 앞두고 열리는 평가전, ",
  },
  {
    number: 2,
    content: "‘MLB 월드투어 서울시리즈 스페셜 게임’ ",
  },
  {
    number: 3,
    content:
      "예비 명단 선발은 지난해 개최된 항저우 아시안게임과 APBC에 참가해 국제대회 경험을 쌓으며 성장한 젊은 선수들로 구성 ",
  },
  {
    number: 4,
    content:
      "2024 KBO리그 및 11월에 있을 프리미어12, 2026 WBC 등 국제대회에서 더욱 성장한 모습을 보여줄 것",
  },
  {
    number: 5,
    content:
      "예비 명단 35인은 투수 19명, 포수 3명, 내야수 8명, 외야수 5명으로 구성",
  },
  {
    number: 6,
    content:
      "팀 별로는 롯데가 가장 많은 5명, NC, KIA, 한화, 키움 각각 4명, LG, KT, 두산 3명, SSG, 삼성 2명, 상무에서 1명",
  },
  {
    number: 7,
    content:
      "이번 스페셜게임을 시작으로 대표팀을 지휘할 전임 감독은 이번 달 내에 선임할 예정",
  },
];

const Numbering = document.querySelector(".message span:first-child");
const ContentMsg = document.querySelector(".message span:last-child");

function RandomNum() {
  return measage[Math.floor(Math.random() * measage.length)];
}

Numbering.innerHTML = RandomNum().number;
ContentMsg.innerHTML = RandomNum().content;
