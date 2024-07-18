import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [turn, setTurn] = useState("p1");
  const [clicked, setClicked] = useState([]);
  const [p1Clicked, setP1Clicked] = useState([]);
  const [p2Clicked, setP2Clicked] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (id) => {
    const sqr = document.getElementById(id);
    if (clicked.findIndex((num) => num == id) == -1 && !gameOver) {
      if (turn === "p1") {
        sqr.style.background = "#f02805";
        setTurn("p2");
        setClicked((prev) => [...prev, id]);
        setP1Clicked((prev) => [...prev, id]);
      } else {
        sqr.style.background = "#197aea";
        setTurn("p1");
        setClicked((prev) => [...prev, id]);
        setP2Clicked((prev) => [...prev, id]);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    const header = document.getElementById("headline");
    const player = turn === "p1" ? "Player 1" : "Player 2";
    header.textContent = `${player}'s turn`;
    //------------------------------------------------------------
    //---------------------------- p1 ---------------------------
    if (
      p1Clicked.includes("1") &&
      p1Clicked.includes("2") &&
      p1Clicked.includes("3")
    ) {
      header.textContent = `Player 1 wins`;
      header.style.color = "black";
      const winning_sqrs = ["1", "2", "3"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = "#08f362";
      });
      setGameOver(true);
    } else if (
      p1Clicked.includes("4") &&
      p1Clicked.includes("5") &&
      p1Clicked.includes("6")
    ) {
      header.textContent = `Player 1 wins`;
      header.style.color = "black";
      const winning_sqrs = ["4", "5", "6"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = "#08f362";
      });
      setGameOver(true);
    } else if (
      p1Clicked.includes("7") &&
      p1Clicked.includes("8") &&
      p1Clicked.includes("9")
    ) {
      header.textContent = `Player 1 wins`;
      header.style.color = "black";
      const winning_sqrs = ["7", "8", "9"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = "#08f362";
      });
      setGameOver(true);
    } else if (
      p1Clicked.includes("1") &&
      p1Clicked.includes("4") &&
      p1Clicked.includes("7")
    ) {
      header.textContent = `Player 1 wins`;
      header.style.color = "black";
      const winning_sqrs = ["1", "4", "7"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = "#08f362";
      });
      setGameOver(true);
    } else if (
      p1Clicked.includes("2") &&
      p1Clicked.includes("5") &&
      p1Clicked.includes("8")
    ) {
      header.textContent = `Player 1 wins`;
      header.style.color = "black";
      const winning_sqrs = ["2", "5", "8"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = "#08f362";
      });
      setGameOver(true);
    } else if (
      p1Clicked.includes("3") &&
      p1Clicked.includes("6") &&
      p1Clicked.includes("9")
    ) {
      header.textContent = `Player 1 wins`;
      header.style.color = "black";
      const winning_sqrs = ["3", "6", "9"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = "#08f362";
      });
      setGameOver(true);
    } else if (
      p1Clicked.includes("1") &&
      p1Clicked.includes("5") &&
      p1Clicked.includes("9")
    ) {
      header.textContent = `Player 1 wins`;
      header.style.color = "black";
      const winning_sqrs = ["1", "5", "9"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = "#08f362";
      });
      setGameOver(true);
    } else if (
      p1Clicked.includes("3") &&
      p1Clicked.includes("5") &&
      p1Clicked.includes("7")
    ) {
      header.textContent = `Player 1 wins`;
      header.style.color = "black";
      const winning_sqrs = ["3", "5", "7"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = "#08f362";
      });
      setGameOver(true);
    }
    //----------------------------------------------------------------
    //---------------------------p2--------------------------------
    if (
      p2Clicked.includes("1") &&
      p2Clicked.includes("2") &&
      p2Clicked.includes("3")
    ) {
      header.textContent = `Player 2 wins`;
      header.style.color = "black";
      const winning_sqrs = ["1", "2", "3"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = "#08f362";
      });
      setGameOver(true);
    } else if (
      p2Clicked.includes("4") &&
      p2Clicked.includes("5") &&
      p2Clicked.includes("6")
    ) {
      header.textContent = `Player 2 wins`;
      header.style.color = "black";
      const winning_sqrs = ["4", "5", "6"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = "#08f362";
      });
      setGameOver(true);
    } else if (
      p2Clicked.includes("7") &&
      p2Clicked.includes("8") &&
      p2Clicked.includes("9")
    ) {
      header.textContent = `Player 2 wins`;
      header.style.color = "black";
      const winning_sqrs = ["7", "8", "9"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = "#08f362";
      });
      setGameOver(true);
    } else if (
      p2Clicked.includes("1") &&
      p2Clicked.includes("4") &&
      p2Clicked.includes("7")
    ) {
      header.textContent = `Player 2 wins`;
      header.style.color = "black";
      const winning_sqrs = ["1", "4", "7"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = "#08f362";
      });
      setGameOver(true);
    } else if (
      p2Clicked.includes("2") &&
      p2Clicked.includes("5") &&
      p2Clicked.includes("8")
    ) {
      header.textContent = `Player 2 wins`;
      header.style.color = "black";
      const winning_sqrs = ["2", "5", "8"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = "#08f362";
      });
      setGameOver(true);
    } else if (
      p2Clicked.includes("3") &&
      p2Clicked.includes("6") &&
      p2Clicked.includes("9")
    ) {
      header.textContent = `Player 2 wins`;
      header.style.color = "black";
      const winning_sqrs = ["3", "6", "9"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = "#08f362";
      });
      setGameOver(true);
    } else if (
      p2Clicked.includes("1") &&
      p2Clicked.includes("5") &&
      p2Clicked.includes("9")
    ) {
      header.textContent = `Player 2 wins`;
      header.style.color = "black";
      const winning_sqrs = ["1", "5", "9"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = "#08f362";
      });
      setGameOver(true);
    } else if (
      p2Clicked.includes("3") &&
      p2Clicked.includes("5") &&
      p2Clicked.includes("7")
    ) {
      header.textContent = `Player 2 wins`;
      header.style.color = "black";
      const winning_sqrs = ["3", "5", "7"];
      winning_sqrs.forEach((id) => {
        const sqr = document.getElementById(id);
        sqr.style.background = '#08f362';
      });
      setGameOver(true);
    }
    //-----------------------------------------------------------
  }, [turn]);

  useEffect(() => {
    if (clicked.length > 0) {
      const reset = document.getElementById("pa");
      reset.style.display = "block";
    }
  }, [gameOver]);

  const reset = () => {
    const header = document.getElementById("headline");
    header.textContent = "Player 1's turn";
    // header.style.color = "white";
    setTurn("p1");
    clicked.forEach((id) => {
      const square = document.getElementById(id);
      square.style.background = "white";
    });
    setClicked([]);
    setP1Clicked([]);
    setP2Clicked([]);
    setGameOver(false);
    const reset = document.getElementById("pa");
    reset.style.display = "none";
  };

  return (
    <div id="outer">
      <div className="game-board">
        <div className="top" id="headline"></div>
        <div className="body">
          <div
            className="square"
            id="1"
            onClick={() => {
              handleClick("1");
            }}
          ></div>
          <div
            className="square"
            id="2"
            onClick={() => {
              handleClick("2");
            }}
          ></div>
          <div
            className="square"
            id="3"
            onClick={() => {
              handleClick("3");
            }}
          ></div>
          <div
            className="square"
            id="4"
            onClick={() => {
              handleClick("4");
            }}
          ></div>
          <div
            className="square"
            id="5"
            onClick={() => {
              handleClick("5");
            }}
          ></div>
          <div
            className="square"
            id="6"
            onClick={() => {
              handleClick("6");
            }}
          ></div>
          <div
            className="square"
            id="7"
            onClick={() => {
              handleClick("7");
            }}
          ></div>
          <div
            className="square"
            id="8"
            onClick={() => {
              handleClick("8");
            }}
          ></div>
          <div
            className="square"
            id="9"
            onClick={() => {
              handleClick("9");
            }}
          ></div>
        </div>
      </div>
      <h3 id="pa" onClick={reset}>
        Play Again
      </h3>
    </div>
  );
}

export default App;
