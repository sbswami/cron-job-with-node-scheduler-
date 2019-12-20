# Cron Job with Node-Schedule Package
### Steps for Express :
1. Run `npm install node-schedule`
2. Create `route` path to Start Scheduler.
3. Import `node-schedule` by `const schedule = require('node-schedule');`
4. Schedule Job with `schedule.scheduleJob(name, rule, callback);`
	Rule Format is `'{Second} {Minute} {Hour} {Day of Month} {Month} {Day of Week}'`
	Use `*` for all.
	Example `'10, *, *, *, *, *'`.
5. Create `RecurrenceRule`.
