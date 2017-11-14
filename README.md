# blindfold-em :sunglasses: :alarm_clock: :fire:

[![Commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/rockchalkwushock/how-to-open-source/pulls)
[![Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Equimper](https://img.shields.io/badge/code%20style-equimper-blue.svg?style=flat-square)](https://github.com/EQuimper/eslint-config-equimper)
[![nps](https://img.shields.io/badge/scripts%20run%20with-nps-blue.svg?style=flat-square)](https://github.com/kentcdodds/nps)
[![Now](https://img.shields.io/badge/deployed%20with-now--cli-orange.svg?style=flat-square)](https://github.com/zeit/now-cli)

Blindfold'em is a productivity management web-application.

## About

This was an idea I had back in March of 2017 when I began to change a lot about who I am and how I do things. The two major contributing factors to this project are Mel Robbins [The 5 Second Rule](https://www.amazon.com/Second-Rule-Transform-Confidence-Everyday/dp/1682612384/ref=sr_1_1?ie=UTF8&qid=1510691845&sr=8-1&keywords=mel+robbins) and some bars from Ces Cru's song [Recession Proof](https://open.spotify.com/user/deimos92/playlist/5xh6CHdYs6QTkQ2TxPk0Xs):

> _"I blindfolded my goals, now line'em up and execute."_

I soon began planning out my mornings with things called _Blindfold Sessions_ in which I had to state what the goal was I wanted to achieve in _x_ amount of time and would set out to execute it...in a very NWA _"Gangsta Gangsta"_ manner :joy:. Back then I would just grab my iPhone and tell Siri to set a timer for _x_ about of time and record things in my journal (like the real thing not online). I thought to myself it would be awesome to have an application in which I could set a timer and a cooldown period, declare what my goal was for that time, and upon completion of the timer be prompted to state if I executed or not and why. Taking the project a step further would be to integrate with third-party API's like [WakaTime](https://wakatime.com) and create a dashboard for the user to see and track their progress in executing what they have set out to accomplish.

The plan would be to turn this into an Electron application, but that will be down the road for now a simple web application that is nothing more than a Pomodoro will be what makes up Blindfold'em 1.0.0.

## Road Map :car:

### 2.0.0

1. Build simple API for the client to post _activities_, _time_, _break_, & _results_.
2. Setup 2FA with Github & Twitter.
3. Setup database & models.
4. Client-side Oauth-flow.
5. New Views: SignUp, SignIn, Dashboard.

### 3.0.0

1. Integration with [WakaTime](https://wakatime.com).
2. Update the Dashboard View.
3. Make use of D3.js or Charts.js to display data.
