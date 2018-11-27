# :rainbow: contrast-table

Generate a table to help you determine if your color palette is accessible as per [WCAG 2.1](https://www.w3.org/TR/WCAG21/).

![Screenshot](https://user-images.githubusercontent.com/604167/48976255-13282400-f039-11e8-88d4-015eff77aa8b.png)

## How to use

1. Navigate to [https://alexchantastic.github.io/contrast-table/](https://alexchantastic.github.io/contrast-table/)
2. When you first load the app, an example color palette will be loaded for you
3. To change the color palette used, append your comma separated color palette to the URL starting with a `?`

   e.g., [https://alexchantastic.github.io/contrast-table/?#000,#fff](https://alexchantastic.github.io/contrast-table/?#000,#fff)

4. Each cell represents the combination of the column header (foreground color) and the row header (background color) and displays:

   * :white_check_mark: passes
   * :x: fails
   * Contrast ratio
   * Score (AA / AAA / F)

### Accepted color values

| Value type        | Example                        |
| ----------------- | ------------------------------ |
| Hex               | `#b4d455`                      |
| Named             | `rebeccapurple`                |
| rgb               | `rgb(255, 255, 255)`           |
| rgba              | `rgba(255, 255, 255, 0.5)`     |

## License

Code released under the [MIT License](https://github.com/alexchantastic/contrast-table/blob/master/LICENSE).
