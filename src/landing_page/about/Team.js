import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/teamProfile.jpg" alt="profile"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Manjot Kaur</h4>
          <h6>A hands-on project in fintech</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            <p>
                <strong>StockSense</strong> is a personal project I built to explore how financial data can be presented in a clean, intuitive way.
                It’s designed to simplify stock market insights without overwhelming users with information.   
            </p>
          </p>
          <p>
                This platform was developed entirely by me, <strong>Manjot Kaur</strong>, as part of my learning journey in full-stack development using React, Node.js, and MongoDB.
                Every feature — from the UI to the backend — was implemented to deepen my understanding of real-world web applications.
            </p>

          <p>While it's not a commercial product, it reflects my passion for finance and web development, and showcasing my skills in building real-world web platforms from scratch.
          </p>
          <p>
            Connect on <a href="/">Homepage</a> / <a href="/trade">TradingQnA</a> /{" "}
            <a href="https://github.com/Manjot-git/StockSense">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;