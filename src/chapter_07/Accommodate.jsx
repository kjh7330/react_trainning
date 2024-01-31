import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate (props) {
    const [isFull, setIsFull] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("========================");
        console.log("useEffect is called");
        console.log(`isFull : ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        setIsEmpty(count === 0);
        console.log(`현재 카운트 값은 : ${count}`);
    }, [count]);

    return (
        <div>
            <p>{`총 ${count} 명이 입장하였습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount} disabled={isEmpty}>퇴장</button>

            {isFull && <p style={{color : "red"}}>정원이 가득찼습니다.</p>}
            {isEmpty && <p style={{color : "green"}}>입장 인원이 없습니다.</p>}
        </div>
    )
}

export default Accommodate;