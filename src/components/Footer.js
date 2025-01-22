const fmenus=[
  {id:1, title:'자주묻는질문', url:'#'},
  {id:2, title:'고객 센터', url:'#'},
  {id:3, title:'계정', url:'#'},
  {id:4, title:'미디어 센터', url:'#'},
  {id:5, title:'투자 정보(IR)', url:'#'},
  {id:6, title:'입사 정보', url:'#'},
  {id:7, title:'넷플릭스 지원 디바이스', url:'#'},
  {id:8, title:'이용 약관', url:'#'},
  {id:9, title:'개인정보 처리방침', url:'#'},
  {id:10, title:'쿠키 설정', url:'#'},
  {id:11, title:'회사 정보', url:'#'},
  {id:12, title:'문의하기', url:'#'},
  {id:13, title:'속도 테스트', url:'#'},
  {id:14, title:'법적 고지', url:'#'},
  {id:15, title:'오직 넷플릭스에서', url:'#'}
];
const Footer = () => {
  return (
    <footer>
      <p className="f-info">질문이 있으신가요? 문의 전화: <a href="tel:003083210161">00-308-321-0161 (수신자 부담)</a></p>
      <div>
        {
          fmenus.map((menu)=>{
            return <a href={menu.url} key={menu.id}>{menu.title}</a>
          })
        }
      </div>
      <select>
            <option>한국어</option>
            <option>English</option>
      </select>
      <p className="f-txt">넷플릭스 대한민국</p>
    </footer>
  );
};

export default Footer;