twitter-mocker
===============

An annoying person that follows you around and shouts at you

Input:
====

- keys: associated with a user an app to initialize Twit
  - See http://www.apcoder.com/2013/10/03/twitter-bot-20-minutes-node-js/ under 'Twitter API Access' for help
- annoyee: user you want to tweet at/about
  - @TimCook
- track: (twitter API lingo): tweets containing specific text
  - 'Steve Jobs'
- tweetOutputFormat
  - '@@TWEET@@ STEVE JOBS RULES'

Output:
====

- Tweets everytime the 'Annoyee' tweets something that meets the 'annoy requirements'


Todo:
====

- Add @@ANNOYEE@@ to tweet formatting to enable replys