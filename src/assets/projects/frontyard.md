# Frontyard Design System

![Frontyard Design System](/projects/frontyard.png)

Frontyard is Last Yard's proprietary, accessible design system.

The original software was built in 2015, and like many long-standing systems, it hadn’t seen major design updates in several years. As a result, it no longer met modern accessibility standards—many UI elements had low contrast, and keyboard navigation was limited.

Recognizing the growing importance of accessibility in enterprise environments, I advocated for a modernization effort that would both enhance usability and align with current design and accessibility best practices. When the business identified accessibility as a strategic priority, I led the push to implement a new design system that significantly improved both the user experience and accessibility compliance.

From there, I was able to collaborate with a designer, and, given that we were a small team, select an existing design library to build our new design system from.
We picked Flowbite, which uses Tailwind, as well as Radix UI to handle accessibility controls.

Frontyard is now mature and in use by many of our customers, and opt-in for others. We achieved WCAG compliance from the Centre for Accessibility and users love the new and improved look and feel. It is fully implemented with Storybook and Chromatic for visual regression testing.

![Text Area Screenshot](/projects/text-area.png)

## Component highlight: Time picker

I added a unique time input after being dissatisfied with available options.

I'd recently read Adam Silver's excellent book, [Form Design Patterns](https://formdesignpatterns.com/) and saw a blog post where he stated the best time input is one that allows the user to type in a time and have the system intuitively figure out what the user intended, i.e. "12pm", "1:00", "13:30", "12". These should all work and be correctly evaluated when entered into the time input.

I implemented this and also added a customisable list of pre-defined time values with autocomplete selection as users type for maximum visibility.

![Time Picker](/projects/time-input.png)
