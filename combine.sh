cat quattro-theme.css > output.css
cat quattro-fonts.css >> output.css
cat colors-quattro.css >> output.css
cat roam-css-system.css >> output.css
cat additional-fixes-quattro.css >> output.css


npx postcss output.css > output.min.css
