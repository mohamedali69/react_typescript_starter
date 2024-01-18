"use client";

import { useState } from "react";

const Hooks = () => {
    const [count, setCount] = useState<number | null>(0);

    const increment = () => {
        if (count !== null) {
            setCount(count + 1);
        }
    };

    return (
        <>
            <div style={{ marginBottom: "1rem" }}>Counter : {count}</div>
            <button style={{ backgroundColor: "violet" }} onClick={increment}>
                Increment
            </button>
        </>
    );
};

export default Hooks;
