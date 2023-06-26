/* // toggle
const toggle = document.querySelector('#toggle');
const ul = document.querySelector('.menu');
toggle.addEventListener('click', () => {
  if (ul.style.display === 'none') {
    ul.style.display = 'block';
  } else {
    ul.style.display = 'none';
  }
});
 */

// 견학 체험

const exersises = document.querySelectorAll('#reserve .exersise');
const labels = document.querySelectorAll('#reserve label');
exersises.forEach((exersise) => {
  exersise.innerHTML = `
  <div class="header">
  <div class="btn prevDay"></div>
  <h2 class="dateTitle"></h2>
  <div class="btn nextDay"></div>
</div>
<div class="reservation-wrapper">
       <div class="rap">
         
          <div class="grid dateHead">
            <div>일</div>
            <div>월</div>
            <div>화</div>
            <div>수</div>
            <div>목</div>
            <div>금</div>
            <div>토</div>
          </div>
          <div class="grid dateBoard"></div>
        </div>

        <!-- resev box -->
        <div class="reservation_block">
          <h3><span class="currentDate"></span><span>예약현황 확인</span></h3>
          <div class="time">
            <button>
              <span><i class="fa-regular fa-clock"></i></span>9:00
            </button>
            <button>
              <span><i class="fa-regular fa-clock"></i></span>10:00
            </button>
            <button>
              <span><i class="fa-regular fa-clock"></i></span>11:00
            </button>
            <button>
              <span><i class="fa-regular fa-clock"></i></span>12:00
            </button>
            <button>
              <span><i class="fa-regular fa-clock"></i></span>13:00
            </button>
            <button>
              <span><i class="fa-regular fa-clock"></i></span>14:00
            </button>
            <button>
              <span><i class="fa-regular fa-clock"></i></span>15:00
            </button>
            <button>
              <span><i class="fa-regular fa-clock"></i></span>16:00
            </button>
          </div>
          <button>예약확인<i class="fa-solid fa-check"></i></button>
        </div>
        </div>

        <!-- 상세설명 -->
        <ul class="tap">
          <li><a href="#">상세설명</a></li>
          <li><a href="#">유의사항</a></li>
          <li><a href="#">위치정보</a></li>
        </ul>
        <div class="tap_container">
          <div class="tap_content">
            <h5>
              매월 1일 9:00 기준, 익월 말일까지 예약이 가능하도록 설정되어
              있습니다. (※1일이 토요일 및 공휴일이면 가장 빠른 평일 9:00 기준)
              예) 2023년 2월 1일 → 2023년 3월 31일까지 예약 가능 2023년 10월 1일
              → 2023년 11월 30일까지 예약 가능 10명 이상의 단체의 경우, 반드시
              견학신청을 해야 합니다.(최소 7일전까지)
            </h5>
            <div>
              숲해설을 원하실 경우에는 [견학신청 정보입력] - [구분] - [단체] -
              [해설자 유무] 체크 후 신청하셔야 합니다. ※ 선착순으로 운영됩니다
            </div>
            <div>
              *단체 해설 운영대상 : 10명 이상 단체 (초등학생이상, 200명 이내)
              운영방법 : 상시운영 (화요일~토요일 / 공휴일 제외) 운영시간 : 10시
              ~ 16시 소요시간 : 60분 내외 집결장소 : 산림문화전시관 야외 공터
              주요사항 : 방문 1주일 전까지 인터넷 (대구광역시
              통합예약시스템)예약, 관리자 승인이 필요함 , 선착순 운영됩니다 문의
              : ☎ 803-7288
            </div>
            <div>
              *개인해설 운영대상 : 방문객 누구나 운영시간 : 상시운영
              (화요일~토요일 / 공휴일 제외) 소요시간 : 60분 내외 신청장소 :
              산림문화전시관 1층 안내데스크 하루 3번 (10시, 13시, 15시)
              실시되며, 원하시는 시간에 맞추어 산림문화전시관 1층 안내데스크로
              오시면 됩니다
            </div>
            <div>
              개방시간 외에는 출입할 수 없습니다. 간단한 도시락 외 음식물
              반입이나 음주행위를 금합니다. 애완동물을 동반하고 관람할 수
              없습니다. 출입이 허용된 공간 이외의 장소에는 들어갈 수 없습니다.
              어린이를 동반한 경우, 식물 및 시설물이 훼손되지 않도록 어린이의
              행동에 주의를 기울여 주십시오. 관람질서를 해치는 행위는 하지
              맙시다. (도박, 음주, 공놀이, 자전거 및 인라인 스케이트 타기)
              전시공간 안으로 들어가서 식물 촬영을 하지 맙시다. 쓰레기통이
              비치되어 있지 않으므로 발생된 쓰레기는 반드시 되가져 갑시다.
            </div>
          </div>
          <div class="tap_content">
            <h5>
              개방시간 외에는 출입할 수 없습니다. 간단한 도시락 외 음식물
              반입이나 음주행위를 금합니다. 애완동물을 동반하고 관람할 수
              없습니다. 출입이 허용된 공간 이외의 장소에는 들어갈 수 없습니다.
              어린이를 동반한 경우, 식물 및 시설물이 훼손되지 않도록 어린이의
              행동에 주의를 기울여 주십시오. 관람질서를 해치는 행위는 하지
              맙시다. (도박, 음주, 공놀이, 자전거 및 인라인 스케이트 타기)
              전시공간 안으로 들어가서 식물 촬영을 하지 맙시다. 쓰레기통이
              비치되어 있지 않으므로 발생된 쓰레기는 반드시 되가져 갑시다.
            </h5>
          </div>
          <div class="tap_content">
            <h5>map</h5>
          </div>
        </div>
      `;
});

labels.forEach((label, labelKey) => {
  label.addEventListener('click', () => {
    labels.forEach((label2) => {
      if (label !== label2) {
        label2.classList.remove('isGreen');
      } else {
        label2.classList.toggle('isGreen');
      }
    });

    exersises.forEach((exersise, exKey) => {
      if (labelKey !== exKey) {
        exersise.classList.remove('isBlock');
      } else {
        exersise.classList.toggle('isBlock');
      }
    });
  });
});

// calender
const makeCalendar = (date) => {
  const currentYear = new Date(date).getFullYear();
  const currentMonth = new Date(date).getMonth() + 1;

  const firstDay = new Date(date.setDate(1)).getDay();
  const lastDay = new Date(currentYear, currentMonth, 0).getDate();

  const limitDay = firstDay + lastDay;
  const nextDay = Math.ceil(limitDay / 7) * 7;

  let htmlDummy = '';
  // 한달 전 날짜 표시
  for (let i = 0; i < firstDay; i++) {
    htmlDummy += `<div class="noColor"></div>`;
  }

  // 이번달  날짜 표시
  for (let i = 1; i <= lastDay; i++) {
    htmlDummy += `<div class='color'>${i}</div>`;
  }

  for (let i = limitDay; i < nextDay; i++) {
    htmlDummy += `<div class="noColor"></div>`;
  }

  const dateBoards = document.querySelectorAll(`.dateBoard`);

  dateBoards.forEach((dateBoard) => {
    dateBoard.innerHTML = htmlDummy;
  });

  const dateTitles = document.querySelectorAll(`.dateTitle`);
  dateTitles.forEach((dateTitle) => {
    dateTitle.textContent = `${currentYear}년 ${currentMonth}월`;
  });
};
const date = new Date();
makeCalendar(date);
// prev month
const prevs = document.querySelectorAll(`.prevDay`);
prevs.forEach((prev) => {
  prev.onclick = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
  };
});

// next month
const nexts = document.querySelectorAll(`.nextDay`);
nexts.forEach((next) => {
  next.onclick = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
  };
});

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const todate = new Date().getDate();

const ymt = `${year}년 ${month}월 ${todate}일`;
const currentDate = document.querySelector('.currentDate');
const divs = document.querySelectorAll('.color');
divs.forEach((div) => {
  div.addEventListener('click', () => {
    divs.forEach((value) => {
      if (div !== value) {
        value.classList.remove('changeBg');
      } else {
        div.classList.toggle('changeBg');
        currentDate.textContent = ymt;
      }
    });
  });
});

// button

const buttons = document.querySelectorAll('.time button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((value) => {
      if (button !== value) {
        value.classList.remove('changeBg');
      } else {
        button.classList.toggle('changeBg');
      }
    });
  });
});

// 상세페이지 탭 구현
const tapLis = document.querySelectorAll('.tap li a');
const tapContents = document.querySelectorAll('.tap_container .tap_content');
tapLis.forEach((tapLi, key) => {
  tapLi.addEventListener('click', (e) => {
    console.log(key);
    e.preventDefault();
    tapContents.forEach((tapContent, tapkey) => {
      if (key === tapkey) {
        tapContent.style.display = 'block';
      } else {
        tapContent.style.display = 'none';
      }
    });
  });
});
