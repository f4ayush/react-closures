import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function One() {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)
    countRef.current = count

    useEffect(() => {
        setTimeout(() => {
            alert("Button clicked " + countRef.current)
        }, 5000)
    }, [])
    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Closures!</h3>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Here!</button>
            <div>
                <button><Link to="/">Home</Link></button>
                <button><Link to="/one">One</Link></button>
            </div>
        </div>
    )
}
