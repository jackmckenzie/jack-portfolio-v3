# Frontyard Design System

![Frontyard Design System](/projects/frontyard.png)

Frontyard is Last Yard's proprietary, accessible design system.

Our original software was built around 2015, with no major design upgrades since then. It was an accessibility nightmare; most of the colours were far too low contrast and hardly anything could be used with just the keyboard.

I had long advocated for an upgrade to modernise our UI and make it accessible, and got the chance when the business realised that accessibility had become a requirement rather than a nice-to-have in the enterprise space.

From there, I was able to collaborate with a designer, and, given that we were a small team, select an existing design library to build our new design system from.
We picked Flowbite, which uses Tailwind, as well as Radix UI to handle accessibility controls.

Frontyard is now mature and in use by many of our customers, and opt-in for others. We achieved WCAG compliance from the Centre for Accessibility and users love the new and improved look and feel. It is fully implemented with Storybook and Chromatic for visual regression testing.

![Text Area Screenshot](/projects/text-area.png)

## Component highight: Time picker

I added a unique time input after being dissatisfied with available options.

I'd recently read Adam Silver's excellent book, [Form Design Patterns](https://formdesignpatterns.com/) and saw a blog post where he stated the best time input is one that allows the user to type in a time and have the system intuitively figure out what the user intended, i.e. "12pm", "1:00", "13:30", "12". These should all work and be correctly evaluated when entered into the time input.

I implemented this and also added a customisable list of pre-defined time values with autocomplete selection as users type for maximum visibility.

![Time Picker](/projects/time-input.png)
