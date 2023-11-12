import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.btnContainer}>
            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={onLeaveFeedback}
                    type="button"
                    id={option}
                    className="btn btnFeedback"
                >
                    {option}
                </button>
            ))}
        </div>
    );
};