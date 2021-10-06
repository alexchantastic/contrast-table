# :rainbow: contrast-table

Generate a table to help you determine if your color palette is accessible as per [WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

![Screenshot](https://user-images.githubusercontent.com/604167/136125999-e7de377c-9885-479a-b2ff-6e5eeba90377.png)

## How to use

1. Navigate to [https://alexchantastic.github.io/contrast-table/](https://alexchantastic.github.io/contrast-table/)
2. When you first load the app, an example color palette will be loaded for you
3. To change the color palette used, append your comma separated color palette to the URL starting with a `?`

   e.g., [https://alexchantastic.github.io/contrast-table/?#000,#fff](https://alexchantastic.github.io/contrast-table/?#000,#fff)

4. Each cell represents the combination of the column header (foreground color) and the row header (background color) and displays:

   * :abcd: :white_check_mark: body text passes
   * :abcd: :x: body text fails
   * :capital_abcd: :white_check_mark: large-scale text passes
   * :capital_abcd: :x: large-scale text fails
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
