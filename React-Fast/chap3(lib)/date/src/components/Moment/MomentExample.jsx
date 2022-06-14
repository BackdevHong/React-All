import React, { useRef, useState } from 'react'
import moment from 'moment'
import "moment/locale/ko"

export default function MomentExample() {
    const momentDate = moment();
    const newMomentDate = momentDate.add(1, 'week');
    const newCloneMomentDate = momentDate.clone().add(1, 'week');

    const [day, setDay] = useState("");
    const birthDayRef = useRef(null);
    const handleBirthDayChange = (event) => {
        setDay(moment(event.target.value, "YYYY-MM-DD").format("dddd"))
    }
    
    return (
        <div>
            <h1>
                Moment
            </h1>
            <br />
            {momentDate.format()}
            <br />
            {newMomentDate.format()}
            <br />
            {newCloneMomentDate.format()}
            <br />
            <h1>1일 추가</h1>
            {moment("2022-04-21 15:00:00").add(1, "day").format()}
            <br />
            <h1>24시간 추가</h1>
            {moment("2022-04-21 15:00:00").add(24, "hour").format()}
            <br />
            <h1>1년 삭제</h1>
            {moment("2022-04-21 15:00:00").subtract(1, "year").format()}
            <br />
            <h1>365일 삭제</h1>
            {moment("2022-04-21 15:00:00").subtract(365, "day").format()}
            <h1>한국어로 표기</h1>
            {moment().format("YYYY년-M월-D일")}
            <br />
            <h1>무슨 요일일까?</h1>
            <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
            <div>{day}</div>
            <br />
            <h1>날짜를 비교해보자!</h1>
            <div>
                <p>2022년 4월 21일 22시 09분과 2022년 4월 22일 12시 00분은 몇시간 차이가 있을까?</p>
                <div>{`${moment("2022-04-21 22:09").diff(moment("2022-04-22 12:00"),"hours")}시간`}</div>
            </div>
        </div>
    )
}
