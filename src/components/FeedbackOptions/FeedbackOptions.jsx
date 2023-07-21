import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    options.map((option, i) => {
      return (
        <button key={i} className={css['button-' + option.toString()]} onClick={onLeaveFeedback[i]}>{option}</button>  
      )
    })
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func).isRequired,
}