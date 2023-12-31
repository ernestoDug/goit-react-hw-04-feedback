import Statistics from 'components/Statistics/Statistics';
import { useState } from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import css from './Section/Section.module.css';
import Notification from 'components/Notification/Notification';
import Section from './Section/Section';
import titleBtn from '../data/titleBtn';

export const App = () => {
  const [feedBack, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // //   змінювач на 3x
  const clicker = event => {
    // console.log( event.target)
    const { name } = event.target;
    setFeedback(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  //   // всього
  const countTotalFeedback = () => {
    return `${feedBack.good + feedBack.bad + feedBack.neutral}`;
  };
  // // відсоток гарних
  const countPositiveFeedbackPercentage = () => {
    return Math.round(`${(feedBack.good * 100) / `${countTotalFeedback()}`}`);
  };

  return (
    <div>
      <Section title="Ваші враження">
        {/* умова рендеру статистики */}
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={feedBack.good}
            neutral={feedBack.neutral}
            bad={feedBack.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification massage={'Поки відгуків немає'} />
        )}
      </Section>

      <Section>
        {/* кнопки */}
        <div className={css.feedBackWr}>
          <FeedbackOptions options={titleBtn} onLeaveFeedback={clicker} />
        </div>
      </Section>
    </div>
  );
};

// АБО ЯК ВАРІАНТ змінювачі НА ЮС РЕДЬЮС

//   function reducer( prevState, action ){
// switch (action.type) {
//   case 'good':
//     return prevState + action.payload;
//     case 'neutral':
//       return prevState + action.payload;
//       case 'bad':
//         return prevState + action.payload;
//   default:
//     return {...prevState}
// }
//   }

// const [fedB, dispatch] = useReducer(reducer, 0);

// const clikerG = () => dispatch({type:'good',  payload: 1})
// const clikerN = () => dispatch({type:'neutral',  payload: 1})
// const clikerB = () => dispatch({type:'bad',  payload: 1})
