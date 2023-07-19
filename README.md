# README for Design Tokens

There have been quite a few variations of how variables are managed within the styles.

As of Jan 2022, the intention is to use a design tokens approach. This will be tricky as we are starting from existing code/naming conventions however we can work on it as we go.

`design-tokens/generated` is the output of running `npm run build-dictionary` which builds using Style Dictionary. It takes the input from `design-tokens/src/*` and outputs Sass variables to `design-tokens/generated/variables.scss`.

We have a file `src/legacy-variables.json` however this is not a valid schema for Style Dictionary and so it is skipped over, however it is used by various parts of the app particularly those in Styled Components which tend to be legacy.

For simplicities sake, all newer tokens are in `tokens.json` however going forward each section could be a separate file.
