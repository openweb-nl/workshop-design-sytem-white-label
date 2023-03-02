# Workshop Design System & Whitelabeling

This repo is used for the workshop with Design system and Whitelabeling. Where this readme is used to guide the participants to create an application which is able to change style depending on company but also themes like light and dark.

---

## Get started

Download the repo and create your own branch within. So everyone can use their favourite setup and at the end we can see each others implementation.

---

## Installation

Once you downloaded the repo you can start with a setup of your choosing.
Make sure you have installed `npm` or `yarn` to begin.

### Angular
To do the workshop with angular use following command:
##### 1. `npm install -g @angular/cli`
##### 2. `ng new [your name] --style=scss`

Start project with `ng serve`

### React

To do the workshop with react use following steps:
##### 1. `npm install -g npx`
##### 2. `npx create-react-app [your name] --template typescript`
##### 3. `npm install node-sass --save`
##### 4. Change the app.css to app.scss (and change import in tsx file)

Start project with: `npm start`

### Svelte or Vue or anything else
No easy setup codes for you but you might know it yourself.
It's recommended to have `typescript`, `scss` and `hot-reload` in your environment.

---

## Part 1
We will start out with a simple component: `Button`.
In your environment create a component which will output something similar as this in html:
#### `<button ...props>[This data should come from parent]</button>`
Add this button to your app so you can see it in the browser.

Next up in the main.scss file (styles.scss) we will add:
 ```
    :root {
        --primary-color: #95C23D;
    }
```

Now inside the newly created component `Button` we will use these colors to set the background color.
You can do this in the following way:
```
    button {
        background-color: var(--primary-color);
    }
```

This works for more than just colors try to create a nice button by using variables

---
## Part 2
Ok so now we have a nice button let's start making themes for this button. Without the need to provide this in your `Button` component.
This can be done in a few ways personally I like to use data-attributes for this. Inside your main component(app).
Do something like this:
```
    <div data-mode='light'>
        <Button>My light button</Button>
    </div>
    <div data-mode='dark'>
        <Button>My dark button</Button>
    </div>
```
When using this in your own project the value of data-mode should be provided depending on the selected theme of the browser. But for the workshop we will use both styles so you can easily see the difference.

Next-up is creating a way in your main scss to provide the right colors for the right button.
Within css you can set rules for data attributes by using `[data-mode='light']` by doing this we can appoint the variables we use for the button to a mode. e.g:
```
[data-mode='light'] {
    --primary-color: #95C23D;
}
[data-mode='dark'] {
    --primary-color: #ffffff;
}
```
Add this to your main scss file and see what happens to your button. Both buttons are the same component but they both have a different background color. By doing it in this way you can easily provide several themes for your application. Maybe you want to create a high-contract mode or even Christmas theme. And this without needing to provide logic to your components just setting some basic rules of things you want to use within your app.
e.g:
```
--color-NAMES (eg. primary, secondary, black-100, black-200, warning, info)
--breakpoint-SIZE (eg. small, medium, large, mobile, thablet, desktop)
--spacing-SIZE (eg. S, M, L, 4, 8, 12)
```

---

## Part 3
When you create lots of variables you might need to think of a way to be able to maintain your scss files. By creating an architecture you might be able to create some clear ability to your project. Off course naming is opinionated but for this workshop we will create something like this:

```
Project directory
    src
        components
            button
        theming
            styles
            themes
                openweb
                    light
                    dark
```
Inside the `styles` folder we can create a few `scss` files with basic colors which we can later use for out system. For now let's create one file called `colors.scss` and add this:
```
$colors: (
        openweb: #95C23D,
        pauwels: #FF5B00,
        white: #ffffff,
        // You can add more colours than just these
)
```
Inside the `theming` folder create a `generator.scss` in this file we add the following magic.
```
@import './styles/colors';

:root {
  @each $key, $value in $colors {
    --color-#{$key}: #{$value};
  }
}
```
When you created both files make sure that inside `styles.scss` you import the `generator.scss` file.

Now inside your browser inspect the `:root` and you can see that all colors are available. Note that al your color names will have a prefix call `--color-[name]`. Which is added within the for loop from the generator.scss.

The next step is to setup our light and dark mode again. Cause the provided colors are not listening to the data-attribute just yet.
Inside the `openweb->light` folder create two files `button.scss` and `index.scss` so we can easily scale up our project in a later stadium.
```
button.scss

$button: (
        color: var(--color-openweb),
        background: var(--color-white),
)
```
Inside button we create names which we will use later on inside our project. The value for those names should point to the colors you created in the previous step.
```
index.scss

@import './button';

$light: (
        button: $button,
)
```
This file will be used to connect styling for multiple components into one so we can created proper theming in a later state. Now create these two files also for the dark folder but change the colors so you can see if it's working later on.

Once you created the files for the light and dark folder we will create another `index.scss` file within the openweb folder. And another inside the themes folder.
```
themes/openweb/index.scss

@import './light';
@import './dark';

$ow-theme: (
  light: $light,
  dark: $dark,
)
```
```
themes/index.scss

@import './openweb';

$themes: (
  openweb: $ow-theme,
)

```
Now we need to create some more magic to make sure we can use the tokens you just made available for your component(s). Inside your `generator.scss` file we will add some code:
```
// First loop trough themes
@each $theme, $modes in $themes {
// Now loop trough the modes within themes
  @each $mode, $variables in $modes {
    [data-mode='#{$mode}'] {
      // Now add all components with their specific styles
      @each $component, $styles in $variables {
        @each $key, $value in $styles {
          --#{$component}-#{$key}: #{$value};
        }
      }
    }
  }
}
```
The above code is created in a way so that you can add themes to openweb as you like. But in a later stage we will change this a bit to also support whitelabel. But for now we only support openweb as a theme.

Now inside your `Button` component we will need to change the scss variable to the new names we just created. Change `color: var(--primary-color)` to `color: var(--button-color)` and `background-color` should be set to `var(--button-background-color)`.
Inside your browser the two buttons should be working again. Now also apply this way of working to the other changes you made to the button.

---

## Part 4
Now we will add another brand to our application. Start by duplicating the `openweb` directory and call it `pauwels`.
Make some changes to the light and dark theme of button. And inside your main page (app) we will create another data-attribute. This one we will call `data-brand`.
Now your main html page should have 4 buttons. Something like:
```
<div>
    <div data-company={'openweb'} data-mode={'light'}>
        <Button>Open web light</Button>
    </div>
    <div data-company={'openweb'} data-mode={'dark'}>
        <Button>Open web dark</Button>
    </div>
    <div data-company={'pauwels'} data-mode={'light'}>
        <Button>Pauwels light</Button>
    </div>
    <div data-company={'pauwels'} data-mode={'dark'}>
        <Button>Pauwels dark</Button>
    </div>
<div>
```

Inside the generator we need to make a small change, so it can also recognize the data-brand attribute.
On the line were we first only used the data-mode we should now change it to this:
`[data-mode='#{$mode}'][data-company='#{$theme}'] {`

And that should be all to make it work. Now can you create the actual Openweb and Pauwels button by using the new system?

---

## Part 5
Next up using this new system we are going to create a FAQ section. Try to minimize the amount of js/ts you need to create this component. Try using the default html `<details>` and `<summary>` to make it all work.
Also add animations to the new system, so you can have different animations for your FAQ depending on the company. All css values could be part of the system to create components so styling each component can be very different depending on the brand.

The acceptance criteria for the FAQ you will create are as following:
```
Usage examples:
<FAQ title='My question'>My Answer</FAQ>
<FAQ title='Where can i login?'>You can login <a href='login'>here</a></FAQ>

Default behavior:
-Question is always a string value
-Answer can be anything from a plain text to a text with anchor's in it or even an image. (provided within tag)
-Component uses full width inside it's container

Openweb only:
-Has an icon on the left (use + for closed state and - for open)
-Has a border on top and bottom of the question

Pauwel only:
-Has an icon on the right (use + for closed state and - for open)
-Icon's are apart from text as in fully to the right.
-No border beteen questions
```
All other style options are up to you to create an easy to use component.

---

## Part 6
The biggest issue here is to keep a clean architecture the more components you create the more variables will be available to you. I hope with this current setup you can scale this enough, or maybe you can think of an even better way.

For this final part I want you to create a component of your own. Which uses the system we just created. Maybe think about something cool you are currently using within your own project and could be styled in this new way.

When you have no inspiration you could consider one of the following:
```
<Input> with the label inside for own brand and outside for another brand
<Checkbox> with different style for each brand and inverted for light/dark mode
<Typography> Setup a system to make sure the right font is used depending on the brand but also the variant (Header/p/caption)
```

---
