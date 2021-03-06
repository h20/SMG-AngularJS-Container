# SMG-AngularJS-Container

## Overview

This is a Social Multiplayer Gaming team project which mainly use AngularJS. <br/>
The design doc is [here] (https://docs.google.com/document/d/1Jm7VgALEnLfRTvEVG6FA1ln0SVqi2PgLCVbl-KRMgbE/edit?usp=sharing).

## Team members

- Youlong Li (Owner)
  - Write initial test for server V1
  - Set up the initial project and write the design doc
  - In charge of the lobby page
    - Set up the channel in sync mode
    - Handle the initial match insertion
  - Handle the layout of all pages
  - Deal with other trivial stuff (login, submit test players and games and etc.)
  - Improved the page to support mobile device (Not complete yet)

- Yuanyi Yang (Team member)
  - Write initial test for server V2
  - In charge of the match page with Long Yang
    - Mainly deal with the communication between game iFrame and container
      - Receive move from the game iFrame and send updateUI to the game iFrame
    - Handle the end of the game
    - Handle the disconnection of opponent in sync mode (Not complete yet)
    - Improved the game flow

- Long Yang (Team member)
  - Write initial test for server V3
  - In charge of the match page with Yuanyi Yang
    - Mainly deal with the communication between server and container
      - Receive game state from the server and send player's move to the server
      - Retrieve the players info and game info from the server
    - Display the match info, also player and opponents info
    - Added the feature related to facebook (Not complete yet)

## Versions

### [Version 1] (http://1.smg-angularjs-container.appspot.com/index.html#/)
- Can't play game...

### [Version 2] (http://2.smg-angularjs-container.appspot.com/index.html#/)
- Can't play game...

### [Version 3] (http://3.smg-angularjs-container.appspot.com/index.html#/)
- Playable

### [Version 4] (http://4.smg-angularjs-container.appspot.com/index.html#/)
- Playable
- Bugs
  - After one of the player wins, the other player will get two modals pop up... One is the game result info and another is the disconnection prompt of the winner...

## Initial server Tests
Since the API are not determined at that time, the tests can't pass...

## Thanks
- All server team members
- Ruixue Li (Server team, liaison between server team and container team)
- Pinji Zhao (AngularJS player page team, owner)
- Chong Lian (AngularJS developer page team, owner)
