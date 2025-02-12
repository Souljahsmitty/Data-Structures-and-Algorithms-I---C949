import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import TimerProvider from "./TimerContext";  // Import TimerProvider
import Introduction from "./Introduction";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question6 from "./Question6";
import Question7 from "./Question7";
import Question8 from "./Question8";
import Question9 from "./Question9";
import Question10 from "./Question10";
import Question11 from "./Question11";
import Question12 from "./Question12";
import Question13 from "./Question13";
import Question14 from "./Question14";
import Question15 from "./Question15";
import Question16 from "./Question16";
import Question17 from "./Question17";
import Question18 from "./Question18";
import Question19 from "./Question19";
import Question20 from "./Question20";
import Question21 from "./Question21";
import Question22 from "./Question22";
import Question23 from "./Question23";
import Question24 from "./Question24";
import Question25 from "./Question25";
import Question26 from "./Question26";
import Question27 from "./Question27";
import Question28 from "./Question28";

const App = () => {
    return (
        <TimerProvider>  {/* Wrap the entire Router with TimerProvider */}
            <Router>
                <div className="quiz-container">
                    <Routes>
                        <Route path="/" element={<Introduction />} />
                        <Route path="/question1" element={<Question1 />} />
                        <Route path="/question2" element={<Question2 />} />
                        <Route path="/question3" element={<Question3 />} />
                        <Route path="/question4" element={<Question4 />} />
						
                    </Routes>
                </div>
            </Router>
        </TimerProvider>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

