import React, {useState}from "react"
export default function Forms () {
    const [inputValue, setInputValue] = useState("")

    function handleInput (event) {
        setInputValue(event.target.value)

    }
    return (
        <>
        <div>
            <input type="text" value={inputValue} onChange={handleInput}></input>
            <p>Entered value : {inputValue}</p>
        </div>
        </>
    )
}