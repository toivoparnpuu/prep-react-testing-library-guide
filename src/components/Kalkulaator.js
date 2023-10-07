import React, { useEffect } from "react";
import { useState } from "react";

function Nupp(props) {
    let symbolid = {
        "+": "pluss",
        "-": "miinus",
        X: "korrutus",
        "/": "jagamine",
        "=": "vordus",
    };
    let nimetus = "nupp";
    if (props.vaartus in symbolid) {
        nimetus += symbolid[props.vaartus];
    } else {
        nimetus += props.vaartus;
    }

    return (
        <input
            type="button"
            value={props.vaartus}
            style={{ width: "40px" }}
            onClick={(ise) => props.fn(ise.target.value)}
            data-testid={nimetus}
        />
    );
}

function Kalkulaator() {
    const [paneel, muudaPaneel] = useState("");
    const [arg1, muudaArg1] = useState("");
    const [arg2, muudaArg2] = useState("");
    const [tehe, muudaTehe] = useState("");

    function numbriVajutus(tekst) {
        muudaPaneel(paneel + tekst);
    }

    function tehteVajutus(tekst) {
        switch (tekst) {
            case "C":
                muudaPaneel("");
                muudaArg1("");
                muudaArg2("");
                muudaTehe("");
                break;
            case "+":
            case "-":
            case "X":
            case "/":
                muudaTehe(tekst);
                muudaArg1(paneel);
                muudaPaneel("");
                break;
            case "=":
                muudaArg2(paneel);
                console.log("arvutame arg1=", arg1, "arg2=", arg2, "tehe=", tehe);
                switch (tehe) {
                    case "+":
                        muudaPaneel(Number(arg1) + Number(arg2));
                        break;
                    case "-":
                        muudaPaneel(Number(arg1) - Number(arg2));
                        break;
                    case "X":
                        muudaPaneel(Number(arg1) * Number(arg2));
                        break;
                    case "/":
                        muudaPaneel(Number(arg1) / Number(arg2));
                        break;
                    default:
                        break;
                }
                muudaTehe("=");
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (tehe === "=" && arg1 !== "" && arg2 !== "") {
            console.log("arvutame arg1=", arg1, "arg2=", arg2, "tehe=", tehe);
            switch (tehe) {
                case "+":
                    muudaPaneel(Number(arg1) + Number(arg2));
                    break;
                case "-":
                    muudaPaneel(Number(arg1) - Number(arg2));
                    break;
                case "X":
                    muudaPaneel(Number(arg1) * Number(arg2));
                    break;
                case "/":
                    muudaPaneel(Number(arg1) / Number(arg2));
                    break;
                default:
                    break;
            }
        }
    }, [arg1, arg2, tehe]);

    return (
        <div style={{ width: "175px" }}>
            <div
                style={{ border: "1px solid black", width: "170px" }}
                data-testid="paneel1"
            >
                {paneel}
            </div>
            <Nupp vaartus="1" fn={numbriVajutus} />
            <Nupp vaartus="2" fn={numbriVajutus} />
            <Nupp vaartus="3" fn={numbriVajutus} />
            <Nupp vaartus="+" fn={tehteVajutus} />
            <br />
            <Nupp vaartus="4" fn={numbriVajutus} />
            <Nupp vaartus="5" fn={numbriVajutus} />
            <Nupp vaartus="6" fn={numbriVajutus} />
            <Nupp vaartus="-" fn={tehteVajutus} />
            <br />
            <Nupp vaartus="7" fn={numbriVajutus} />
            <Nupp vaartus="8" fn={numbriVajutus} />
            <Nupp vaartus="9" fn={numbriVajutus} />
            <Nupp vaartus="X" fn={tehteVajutus} />
            <br />
            <Nupp vaartus="C" fn={tehteVajutus} />
            <Nupp vaartus="0" fn={numbriVajutus} />
            <Nupp vaartus="=" fn={tehteVajutus} />
            <Nupp vaartus="/" fn={tehteVajutus} />
        </div>
    );
}
export default Kalkulaator;
