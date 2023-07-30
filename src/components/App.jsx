import React from 'react';

import Statistics from 'components/Statistics/Statistics';

import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

import css from './Section/Section.module.css';

import Notification from 'components/Notification/Notification';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //  //  один змінювач на 3x
  handleClick = event => {
    // console.log( event.target)
    const name = event.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  // всього
  countTotalFeedback = () => {
    return `${this.state.good + this.state.bad + this.state.neutral}`;
  };
  // відсоток гарних
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      `${(this.state.good * 100) / `${this.countTotalFeedback()}`}`
    );
  };

  render() {
    return (
      <div>
        <Section title="Ваші враження">
          {/* умова рендеру статистики */}
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification massage={'Поки відгуків немає'} />
          )}
        </Section>

        <Section>
          {/* кнопки */}
          <div className={css.feedBackWr}>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleClick}
            />
          </div>
        </Section>
      </div>
    );
  }
}

export { App };
