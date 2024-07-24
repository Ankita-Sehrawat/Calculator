import React, { useState } from 'react';

const Ui = () => {
    let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "=", "C", "x"];


    let [data, setData] = useState("");


    function ans(e) {

        if (e.target.innerText == "=") {
            setData(eval(data));
        }
        else if (e.target.innerText == "C") {
            setData("")
        }
        else if (e.target.innerText == "x") {
            console.log(data)

            let data1 = data.slice(0, -1)

            console.log(data1)
            setData(data1)
        }

        else {
            setData(data + e.target.innerText)
        }
    }


    return (
        <div>

            <div className="box">
                <input type="text" value={data} />

                <div className='d-flex gap-2 flex-wrap mt-3'>
                    {arr.map((val, i) => {
                        return (
                            <div key={i}>
                                <button onClick={ans}> {val} </button>
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}

export default Ui
