import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { StartPage } from './components/StartPage/StartPage';
import { GamePage } from './components/GamePage/GamePage';
import { EndPage } from './components/EndPage/EndPage';

function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState(10);
  const [userAnswer, setUserAnswer] = useState(true);
  const selectedAnswer = (correct) => {
    if (correct) {
      setCurrentQuestionId(currentQuestionId + 1);
    } else {
      setUserAnswer(false);
    }
  };

  useEffect(() => {
  }, [currentQuestionId]);

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={StartPage} />
        <Route
          path="/game"
          exact
          render={() => (
            <GamePage
              currentQuestionId={currentQuestionId}
              userAnswer={userAnswer}
              setUserAnswer={setUserAnswer}
              selectedAnswer={selectedAnswer}
            />
          )}
        />
        <Route
          path="/end"
          exact
          render={() => (
            <EndPage
              setUserAnswer={setUserAnswer}
              currentQuestionId={currentQuestionId}
              setCurrentQuestionId={setCurrentQuestionId}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
