cat modules/quattro-theme.css > theme.css
cat modules/colors-quattro.css >> theme.css
cat modules/roam-css-system.css >> theme.css
cat modules/additional-fixes-quattro.css >> theme.css
cat modules/quattro-fonts.css >> theme.css

cat modules/general.css >> theme.css
cat modules/text.css >> theme.css
cat modules/todos.css >> theme.css
cat modules/focus-mode.css >> theme.css
cat modules/top-bar.css >> theme.css
cat modules/sidebar.css >> theme.css
cat modules/links.css >> theme.css
cat modules/popups.css >> theme.css
cat modules/mobile.css >> theme.css

cat scripts/autofocus.js > script.js
echo '\n\n\n\n' >> script.js
cat scripts/scroll.js >> script.js

npx postcss theme.css > theme.min.css
