import Statistics from 'components/Statistics/Statistics';
import { useState } from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import css from './Section/Section.module.css';
import Notification from 'components/Notification/Notification';
import Section from './Section/Section';
// import useClicker from './hooks/cliker';
const  pp = [
"good",
"neutral", 
"bad",
];


export const  App = ()=> {

  // const [good, setGood  ] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);


  const [feedBack, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })
 
  //  оHOOKений змінювач на 3x
  const  clicker = event => {
    // console.log( event.target)
    const {name} = event.target;
    setFeedback(prevState => ({...prevState, [name]:  prevState[name] +1  }));
   };
 

  // всього
  const countTotalFeedback = () => {
    return `${feedBack.good + feedBack.bad + feedBack.neutral}`;
  };
  // // відсоток гарних
 const  countPositiveFeedbackPercentage = () => {
    return Math.round(
      `${(feedBack.good * 100) / `${countTotalFeedback()}`}`
    );
 }


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
            <FeedbackOptions
              options={pp}
              onLeaveFeedback={clicker}
            />
          </div>
        </Section>
      </div>
        );
          
        }
      


