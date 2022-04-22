import React, { useRef, useState } from 'react'
import { add, format, sub, differenceInHours } from 'date-fns'
import { format as timezoneFormat } from 'date-fns-tz';
import { ko } from 'date-fns/locale'

export default function MomentExample() {
    const dateFnsDate = new Date();
    const newDateFnsDate = add(dateFnsDate, {days: 1});
    const newCloneDateFnsDate = add(newDateFnsDate, {weeks: 1});

    const [day, setDay] = useState("");
    const birthDayRef = useRef(null);
    const handleBirthDayChange = (event) => {
        setDay(format(new Date(event.target.value), "EEEE", {locale: ko}))
    }
    
    return (
        <div>
            <h1>
                Date-Fns
            </h1>
            <br />
            {format(dateFnsDate,'yyyy-MM-dd')}
            <br />
            {format(newDateFnsDate,'yyyy-MM-dd')}
            <br />
            {format(newCloneDateFnsDate,'yyyy-MM-dd')}
            <br />
            <h1>1일 추가</h1>
            {format(add(new Date("2022-04-22"), { days: 1 }),"yyyy-MM-dd")}
            <br />
            <h1>24시간 추가</h1>
            {format(add(new Date("2022-04-22"), { hours: 24 }),"yyyy-MM-dd")}
            <br />
            <h1>1년 삭제</h1>
            {format(sub(new Date("2022-04-22"), { years: 1 }),"yyyy-MM-dd")}
            <br />  
            <h1>365일 삭제</h1>
            {format(sub(new Date("2022-04-22"), { days: 365 }),"yyyy-MM-dd")}
            <h1>한국어로 표기</h1>
            {format(dateFnsDate, 'yyyy년 MM월 dd일')}
            <br />
            <h1>무슨 요일일까?</h1>
            <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
            <div>{day}</div>
            <br />
             <h1>날짜를 비교해보자!</h1>
            <div>
                <p>2022년 4월 21일 22시 09분과 2022년 4월 22일 12시 00분은 몇시간 차이가 있을까?</p>
                <div>{differenceInHours(new Date("2022-04-21 22:09:00"), new Date("2022-04-22 12:00:00"))}시간</div>
            </div>
            <br />
            <h1>타임존 표현</h1>
            <div>
                {format(newDateFnsDate, "yyyy-MM-dd HH:mm:ss", { timeZone : 'US/Central'})}
                <br />
            </div>
            <br />
            <h1>또 다른 타임존 표현</h1>
            <div>
                {timezoneFormat(add(new Date("2022-04-22 23:43:00"), {days: 2}), 'yyyy-MM-dd HH:mm:ssXXX', {timeZone: "America/New_York"})}
            </div>
        </div>
    )
}