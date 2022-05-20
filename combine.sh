cat modules/quattro-theme.css > output.css
cat modules/colors-quattro.css >> output.css
cat modules/roam-css-system.css >> output.css
cat modules/additional-fixes-quattro.css >> output.css
cat modules/quattro-fonts.css >> output.css

cat modules/general.css >> output.css
cat modules/todos.css >> output.css
cat modules/focus-mode.css >> output.css
cat modules/top-bar.css >> output.css
cat modules/sidebar.css >> output.css
cat modules/links.css >> output.css
cat modules/mobile.css >> output.css

npx postcss output.css > output.min.css
