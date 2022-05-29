import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  const [...title] = "Secret Word";

  return (
    <div className="start">
      <div className="titleWrapper">
        {title.map((letter, i) => {
          if (letter === " ") {
            return <span key={i} className="letterSpace" />;
          } else {
            return (
              <div key={i} className="titleLetters">
                {letter}
              </div>
            );
          }
        })}
      </div>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
