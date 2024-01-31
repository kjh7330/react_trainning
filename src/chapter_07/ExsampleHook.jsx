import React, {useEffect, useState} from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        return () => {
            document.title = `End click Component`;
            }
    });

    return (
        <div>
            <p>총 {count} 번 클릭 했습니다.</p>
            <button onClick={()=> setCount(count + 1)}>Click</button>
        </div>
    )
}