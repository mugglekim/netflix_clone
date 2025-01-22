import { useState } from "react";
import { LuChevronRight } from "react-icons/lu";
const Membership = () => {
  const [isFocused,setIsfocused]=useState(false);
  return (
    <div className="membership">
      <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면<br/> 이메일 주소를 입력하세요.</p>
      <div className={`email-box ${isFocused? "focused":''}`}>
        <label>이메일 주소</label>
        <input
          type="email"
          onFocus={()=>{setIsfocused(true);}}
          onBlur={(e)=>{
            if(e.target.value===''){
              setIsfocused(false);
            }
          }}
        />
        <button>
          <span>시작하기</span>
          <LuChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Membership;