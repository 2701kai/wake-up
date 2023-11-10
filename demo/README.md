# wake-up

### a pretty simple, no-fuzz alarm clock

Just a simple attempt at creating a web-based alarm clock in order to replace my phone as I managed to wreck it by slamming the hood - again.

![Alt text](display2.png)

## Features / Usage:

- Set alarm time using your keyboard number keys or arrow keys.
- Confirm alarm time by pressing **Enter** or cklicking the **Set Alarm** button.
- MARIO's gonna make you _"rise and shine"_ with a smooth lounge - tune, ready to embrace the new dawn. :)
- Hit **Snooze** on mobile or **Space** on desktop to enjoy sweet dreams for another 10 minutes.
- Press **Alarm** (mobile) or **Escape** (desktop) to stop the alarm and set a new one.
- If chosen time is _"before"_ current time, alarm will be set for another bright next day:

```javascript
if (alarmTime < currentTime) {
  alarmTime.setDate(alarmTime.getDate() + 1);
}
```

## Tools used:

- [GIMP](https://www.gimp.org/)
- [Audacity](https://www.audacityteam.org/)
- [VS Code](https://code.visualstudio.com/download)
- [Chrome DevTools](https://chromium.googlesource.com/chromium/src/+/main/docs/linux/build_instructions.md)

## Sincere gratitude for their never-ending patient support:

> in alphabetical order:

- ### **[Giaco](https://github.com/giacomotolari)**

- ### **[Rami](https://github.com/rami-mohamad)**

## Inspiration for this project:

- Hyster 8 to. forktruck
- a random Volvo
- a clumsy wanna-be mechanic

![Alt text](image-1.png)

## Metaphysical guidance:

```javascript
(function repeat() {
  eat();
  sleep();
  coffeeLoader();
  code();
  repeat();
})();
```

<!-- ## Theological approach:

```javascript
const alive = true;

while (alive) {
  eat();
  sleep();
  code();
  repeat();
}
``` -->

> [&copy; kai 2023](https://github.com/2701kai)
