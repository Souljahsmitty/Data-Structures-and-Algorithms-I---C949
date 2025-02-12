import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
						<Route path="/question5" element={<Question5 />} />
						<Route path="/question6" element={<Question6 />} />
						<Route path="/question7" element={<Question7 />} />
						<Route path="/question8" element={<Question8 />} />
						<Route path="/question9" element={<Question9 />} />
						<Route path="/question10" element={<Question10 />} />
						<Route path="/question11" element={<Question11 />} />
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
