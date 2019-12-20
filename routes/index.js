const express = require('express');
const router = express.Router();
const schedule = require('node-schedule');
const HttpStatus = require('http-status-codes');


router.get('/', function (req, res, next) {
  res.send('MESSAGE');
});

router.get('/run', (req, res) => {
  /**
   * @method shedule.scheuleJob
   * @param {string} Name - Name of the Job
   * @param {string | number | object} Rule - Rule for Executing Callback funtion
   * @param {function} Callback - function to be executed on schedule time
   * @returns {object} Job Object
   */
  let job = schedule.scheduleJob(
    'Write Message', // Job Name
    '10 * * * * *', // Schedule time in String Format '{Second} {Minute} {Hour} {Day of Month} {Month} {Day of Week}'
    () => {
      WriteMessageOnConsoleEachMinute('Hi! I am Online!');
    });
  res.status(HttpStatus.OK).json({ job_status: 'Job is ScheduledS' });
});

router.get('/send-birthday-message', (req, res) => {
  // Send Birthday Date Time with Request 
  let rule = schedule.RecurrenceRule();
  rule.month = 2; // Month of Birthday
  rule.dayOfMonth = 14 // Day of Month
  rule.hour = 0; // Hour of day to send message
  rule.minute = 0; // Minute of the Hour
  // Other Methods
  // rule.second
  // rule.dayOfWeek
  let job = schedule.scheduleJob('Birthday Message', rule, () => {
    SendBirthdayMessage('Bro'); // Wish Birthday
  });
});

/**
 * @function
 * @param {string} message - Message to Display on Console
 */
function WriteMessageOnConsoleEachMinute(message) {
  console.info(message); // Display Console
}

/**
 * @function
 * @param {string} name - Birthday Person Name
 */
function SendBirthdayMessage(name) {
  console.info(`Happy Birthday ${name}`); // Do anything to wish | Send Message | Send Mail
}

module.exports = router;
