# Atomic Design

Atomic Design is a methodology for creating design systems created by Brad Frost. [You can read his full post for a comprehensive overview.](https://bradfrost.com/blog/post/atomic-web-design/)

For the purposes of this article it's important to know that Atomic Design breaks design systems (and the components that make up an application) into a hierarchy with five levels.

It begins at the smallest component level (atoms) and combining those to create larger components (molecules) which themselves get combined into still larger components (organisms) which are then displayed in logical groups (templates) that make up the app (pages).

```
Atoms -> Molecules -> Organisms -> Templates -> Pages
```

## Atoms

The atom is the most basic component, as generic as can be.

### Rules of Atoms

- Should not compose other components/only uses native elements or framework-specific components similar to native elements
- Can have its own markup & styles
- Can maintain its own internal state
- Should not be tightly coupled to specific UI or Logic areas
- Should not access application (or higher level) state directly
- Should not have any non-ui/layout related side effects
- Should not implement any application-specific business logic

## Molecules

The molecule composes atoms to create a more complex component, with its own markup and styling added to the mix. Aside from that, the rules I use for molecules are virtually identical to those of atoms.

### Rules of Molecules

- A component made up of one or more Atoms
- Can have its own markup & styles
- Can maintain its own internal state
- Should not be tightly coupled to specific UI or Logic areas
- Should not access application (or higher level) state directly
- Should not have any non-ui/layout related side effects
- Should not implement any application-specific business logic

## Organisms

- Organisms are where the business logic of your application starts to come out. They might correspond to a specific feature or section of the app. They may also be generally applicable but tightly coupled with the application logic. Data fetching and reading/writing to application state should primarily happen here (or alternatively at the Page level).

### Rules of Organisms

- A complex component made up of multiple atoms and/or molecules and/or other organisms
- Can have its own markup & styles
- Can fetch application-specific data
- Can implement application-specific business logic
- Can be connected to application (or higher level) state
- Can be tightly coupled with a specific area (UI and/or Logic) of the app
- Can be organized into sub-folders by logical categorization (feature, page, etc...)

[READ MORE](https://benjaminwfox.com/blog/tech/atomic-design-for-developers)
