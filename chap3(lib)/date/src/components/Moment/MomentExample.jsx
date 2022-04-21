import React, { useState } from 'react'
import moment from 'moment'

export default function MomentExample() {
    const [day, setDay] = useState();
    const momentDate = moment();
    const newMomentDate = momentDate.add(1, 'week');
    const newCloneMomentDate = momentDate.clone().add(1, 'week');

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
            {moment().format("YYYY년-M월-D일 HH시 M분 S초")}
        </div>
    )
}
