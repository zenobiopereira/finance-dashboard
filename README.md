# Content

1. [How To](#how-to)
2. [Design Considerations](#design-considerations)

## How To

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

In the project directory, run

### `npm install`

If everything was installed correctly, run

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

---

## Design Considerations

The project follow some considerations not only because of time constraints but
also because de design was created as a way to represent an idea that would need
to be further improved.

The Design follows a couple of cues from different visualization tools like
`Grafana`, `DataDog` and other other ones for Cloud and different types of data
gathering tools. Went with this approach mostly because of the possibility to
start simple and grow as needed.

The folter architecture is:

- `src` - Entry Point.
  - `component` - Reusable Components.
  - `utils` - Utilities separated by usability.
  - `mocks` - Mocked information for UI to show something.
  - `views` - The views for a given route.
    - `Dashboard` - The Dashboard view with it's specific components.
    - `Error` - Error Route.
  - `types.d.ts` - Reusable types across the codebase.

It is implemented with Mobile first concerns and even though `I18n` and
`Accessibility` are not the main concerns, I did tried to follow closely a
semantically correct `HTML` in order to facilitate any further improvement.

With simplicity and interactivity in mind, the project design tries to show an
idea of how financial information can be added in small batches on the UI using
visual cues, graphs only for time based informations and a history of
transactions that can be searched from the user's perspective.

### Points to consider:

1. I'm not experienced enough on which kind of data would be better for a
   business to have in a visualization tool so I've used a mix of random data to
   generate the history of transactions and the _Cash Flow_ graph with the
   information I was given by the **BAGS** dev environment.
2. I've went with the assumption that stale information isn't really useful,
   that's why the filter and the history made sense to me.
3. Parts of the layout will not answer to filtering but it's only because I'm
   not really aware of which information to create that would be meaningful
   enough from a business perspective.
4. I have **`NOT`** implemented tests for a couple of reasons;
   - I'm using `Chakra UI` for componentization, `Chart.JS` for the Line Graph
     and `React Router` for SPA navigation, all of them battle tested libraries,
     I can be sure that for a project this size, component testing would be a
     wasted effort.
   - Component testing would be unecessary, the correct approach for something
     quite complex as a Dashboard with a multiplicity of behaviors and main
     business logic would be `E2E testing` + `Contract tests` with validations
     on server and client side with a `CI/CD` that would run the tests to
     prevent regressions on main features.
   - The time constraint would not allow me to implement neither of those.
5. There are multiple points that can be enhanced not only on performance but
   also on the UI/UX side where a Design System can be implemented, theme
   changes, enable the user to tweak the UI adding/removing parts of it to make
   it more meaningful for the user case and so on.
6. I've only used a _project architecture_ that was more convenient to me. I've
   been using `Next.JS` for the last couple of months, so parts of my decisions
   on naming, folder structure and componentization might be biased.
7. I've also opted out to not mock nor create instances of data to fetch because
   of the same afore mentioned lack of awareness about the business data.
8. The design is implemented with **Mobile First** in mind and it was tested on
   both the
9. I've added a limit of history from `01-01-2023` till the current day because
   of the afore mentioned lack of data.
10. I've opted for not using any kind of state management library and instead
    just use the URL as a state manager because I don't think it's necessary and
    I think the possibility to share the application in a specific state should
    not be tied to repetition of steps while the URL is a really good place to
    keep filters and deterministic states as JIRA does, for example.
