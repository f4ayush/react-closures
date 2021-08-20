import React from 'react'
import { Link } from 'react-router-dom'

export default function Two() {
    let makeState = (initialValue) => {
        let current = initialValue
        let get = () => current
        let update = (newValue) => {
            current = newValue
        }

        return [get, update]
    }

    console.log("Welcome!")
    let [get, update] = makeState(0)
    console.log("Initial Value: " + get())

    update(15)
    console.log("Updated Value: " + get())
    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Closures!</h3>
            <p>Look into Console logs</p>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/one">One</Link></button>
        </div>
    )
}
