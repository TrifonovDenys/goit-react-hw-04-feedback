import { Component } from 'react'
import { Statistics } from '../Statistics/Statistics'
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions'
import { Section } from '../Section/Section'
export class Feedback extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  hendleGoodClick = () => this.setState((prevStage) => ({ good: prevStage.good + 1 }))
  hendleNeutralClick = () => this.setState((prevStage) => ({ neutral: prevStage.neutral + 1 }))
  hendleBadClick = () => this.setState((prevStage) => ({ bad: prevStage.bad + 1 }))
  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad 
  countPositiveFeedbackPercentage = () => Number((this.state.good * 100) / (this.state.good + this.state.neutral + this.state.bad)).toFixed()

  render() {
    return (
      <> 
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={[this.hendleGoodClick, this.hendleNeutralClick, this.hendleBadClick]} />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    )
  }
}