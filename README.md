# Ping Pong Project

#### _A Ping Pong form that returns information based on number input_

#### By _**Jesse McKay**_

_Created a PingPong program that asks the user to input a number between 1 and 200.  It returns a list of numbers starting from 1 and ending at the number the user entered.  Different messages are displayed if the number is divisible by 15, 5, or 3._

## Specifications

#### Step 1:
* gather numberInput value from form;
* check numberInput value no higher than 200;
* if numberInput 200 or less: proceed with loop;
* if numberInput 201 or more: alert "enter number between 1 and 200";

#### Step 2:
* declare empty array = numberArray;
* create loop starting at 1, ending at number;

* (1) if number is divisible by 15 and 5 and 3 push "ping-pong" as list item to numberArray;
* (2) if number is divisible by 5 or 3 push "pong" as list item to numberArray;
* (3) if number is divisible by 3 push "ping" as list item to numberArray;

####Example:
* 60 returns as "pong";
* 45 returns as "ping-pong";
* 33 returns as "ping";
* 25 returns as "pong";
* 15 returns as "ping-pong";
* 9 returns as "ping";
* 6 returns as "ping";

#### Step 3:
* use jquery to output answer into unordered list;
* give classes to each of the result types;

## Setup Instructions

* Download our files from Github Repository
* Open Index.HTML in local browser
* You may view our website directly at (https://jessemckay27.github.io/tracks/)

## Support and contact details

_Email rosecity27@comcast.net to contact the site creator._

_Text 971-533-2223 to contact the site creator._

### License

*Please distribute freely!*

Copyright (c) 2016 **_Jesse McKay at Epicodus_**
