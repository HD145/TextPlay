import React, { useState } from "react";

export default function About(props) {
    let myStyle = {
      color: props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'grey':'white'
      
    };
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   border: "1px solid black"
  // });

  // const [btnText, setBtnText] = useState("Enable Dark Mode");
  // const onClickHandler = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       border: "1px solid black"
  //     });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white"
  //     });
  //     setBtnText("Enable Light Mode");
  //   }
  // };
  return (
    <>
    {/* <div className="container">
        <h1>About Us</h1>
    </div> */}
      <div className="accordion container my-5" id="accordionExample" style={myStyle}>
          <h1>About Us</h1>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        
        {/* <div>
          <button type="button" className="btn btn-primary mx-2 my-4" onClick={onClickHandler}>{btnText}
          </button>
        </div> */}
      </div>
    </>
  );
}
