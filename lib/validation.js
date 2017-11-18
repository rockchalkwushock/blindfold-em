const activityRegex = /^[0-9A-Z.!,'\s]+$/i
const timeRegex = /^[0-9]+$/i
const userGuide = "lower & upper case characters, numbers, and (.!,')"

export default ({ form }) => {
  const errors = {}
  // use currentFrame of Wizard to check case.
  switch (form.currentFrame) {
    case 1:
      if (!form.activity) {
        errors.activity = 'You must submit an activity.'
      } else if (!activityRegex.test(form.activity)) {
        errors.activity = `${
          form.activity
        } is not a valid input. Please stick too: ${userGuide}.`
      }
      return errors
    case 2:
      if (!form.timer) {
        errors.timer = 'You must submit a timer for the activity.'
      } else if (!timeRegex.test(form.timer)) {
        errors.timer = `${
          form.timer
        } is not a valid input. Please only submit number values.`
      }
      return errors
    case 3:
      if (!form.cooldown) {
        errors.cooldown = 'You must submit a cooldown for the activity.'
      } else if (!timeRegex.test(form.cooldown)) {
        errors.cooldown = `${
          form.cooldown
        } is not a valid input. Please only submit number values.`
      }
      return errors
    default:
      return errors
  }
}
