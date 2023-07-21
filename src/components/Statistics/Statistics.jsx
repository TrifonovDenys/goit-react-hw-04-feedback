import { Notification } from "components/Notification/Notification"
import PropTypes from "prop-types";
import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

  return (
    <>
      {total ? (
        <div className={css.statistics}>
          <p className={css.good}>Good: {good}</p>
          <p className={css.neutral}>Neutral: {neutral}</p>
          <p className={css.bad}>Bad: {bad}</p>
          <p className={css.total}>Total: {total}</p>
          <p className={css.positive}>Positive: {positivePercentage}%</p>
        </div>
      ) : (
        <Notification message="There is no feedback"/>
      )}
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
}