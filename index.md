---
title: "Documentation"
---

# Introduction

The Showcode API allows you to generate beautiful code screenshots for your projects programmatically over HTTP.

It uses the [Showcode](https://showcode.app) application under the hood, so you can expect the same quality and features.

The API is free to use with unlimited usage. However, you must create an API key by registering for an account:

[Register an Account](https://api.showcode.app)

::: warning
**This API is in a beta phase. You will encounter bugs and issues.**

Please report any issues on the Showcode GitHub repository:

[Create an API Issue](https://github.com/stevebauman/showcode/issues/new?title=(API))
:::

## Usage

The Showcode API can be used by sending an HTTP `POST` request to
`https://api.showcode.app/generate` with your API token inside the authentication header: 

```bash
POST /generate HTTP/1.1
Authorization: Bearer {token}
Host: https://api.showcode.app
```

Inside the response's body, you will receive the raw contents of the generated PNG image.

## Examples

::: code-group

```php [Laravel (PHP)]
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

$myApiToken = '...';

$response = Http::withToken($myApiToken)
    ->acceptJson()
    ->post('https://api.showcode.app/generate', [
        'settings' => [
            'width' => 600,
            'height' => 400,
            'background' => 'hyper-cotton-candy',
            'themeName' => 'github-dark',
            'title' => 'Hello from API!',
        ],
        'editors' => [
              [
                'language' => 'php', 
                'value' => <<<EOT
                class Foo extends Bar
                {
                    public function baz()
                    {
                        return 'zal';
                    }
                }
                EOT,
              ]
          ],
    ]);

Storage::disk('local')->put('screenshot.png', $response->body());
```

:::

## Parameters

### Settings

The settings configuration parameter must be an array with any of the below parameters.

#### `title` 

The text to display in the header of the code window.

- **Type**: `string`
- **Default**: `null`
- **Requires**: `max:250`

---

#### `width`

The width (in pixels) of the image to create.

- **Type**: `number`
- **Default**: `400`
- **Requires**: `number|min:0`

---

#### `height`

The height (in pixels) of the image to create.

- **Type**: `number`
- **Default**: `200`
- **Requires**: `number|min:0`

---

#### `position`

Where the code window should be positioned in the canvas.

- **Type**: `string`
- **Default**: `center`
- **Requires**: `center|top|bottom|left|right`

---

#### `landscape`

Whether to show the code window in landscape view when multiple editors are given.

- **Type**: `boolean`
- **Default**: `false` (portrait)
- **Requires**: `true|false`

---

#### `showHeader`

Whether to show the entire code window header.

- **Type**: `boolean`
- **Requires**: `true|false`

---

#### `showHeaderAccent`

Whether to show the code window theme accent.

- **Type**: `boolean`
- **Requires**: `true|false`

---

#### `showTitle`

Whether to show the title in the code window header.

- **Type**: `boolean`
- **Default**: `true`
- **Requires**: `true|false`

---

#### `showMenu`

Whether to display the 3 dot menu in the code window header.

- **Type**: `boolean`
- **Default**: `true`
- **Requires**: `true|false`

---

#### `showColorMenu`

Whether to display the 3 dot menu in MacOS colors in the code window header.

- **Type**: `boolean`
- **Default**: `false`
- **Requires**: `true|false`

---

#### `showLineNumbers`

Whether to display line numbers.

- **Type**: `boolean`
 - **Default**: `false`
- **Requires**: `true|false`

---

#### `showBorder`

Whether to display a border around the code window.

- **Type**: `boolean`
- **Default**: `false`
- **Requires**: `true|false`

---

#### `background`

The background to display in the canvas, behind the code window.

- **Type**: `string`
- **Requires**: One of:

```json
"transparent",
"teal",
"ocean",
"candy",
"sky",
"garden",
"midnight",
"sunset",
"lavender",
"pest-black",
"pest-white",
"mesh-1",
"mesh-2",
"mesh-3",
"mesh-4",
"mesh-5",
"mesh-6",
"conic-1",
"conic-2",
"conic-3",
"conic-4",
"conic-5",
"conic-6",
"conic-7",
"conic-8",
"conic-9",
"conic-10",
"conic-11",
"conic-12",
"conic-13",
"conic-14",
"conic-15",
"conic-16",
"conic-17",
"conic-18",
"conic-19",
"conic-20",
"conic-21",
"conic-22",
"conic-23",
"conic-24",
"conic-25",
"conic-26",
"conic-27",
"conic-28",
"conic-29",
"hyper-base",
"hyper-oceanic",
"hyper-cotton-candy",
"hyper-gotham",
"hyper-sunset",
"hyper-mojave",
"hyper-beachside",
"hyper-gunmetal",
"hyper-peachy",
"hyper-seafoam",
"hyper-pumpkin",
"hyper-pandora",
"hyper-valentine",
"hyper-hawaii",
"hyper-lavender",
"hyper-wintergreen",
"hyper-huckleberry",
"hyper-blue-steel",
"hyper-arendelle",
"hyper-spearmint",
"hyper-minnesota",
"hyper-bombpop",
"hyper-acadia",
"hyper-sonora",
"hyper-paradise",
"hyper-sierra-mist",
"hyper-creamsicle",
"hyper-midnight",
"hyper-borealis",
"hyper-strawberry",
"hyper-flamingo",
"hyper-burning sunrise",
"hyper-apple",
"hyper-watermelon",
"hyper-flare",
"hyper-rasta",
"hyper-lust",
"hyper-sublime",
"hyper-witch",
"hyper-powerpuff",
"hyper-solid-blue",
"hyper-ice",
"hyper-sky",
"hyper-horizon",
"hyper-morning",
"hyper-space",
"hyper-earth",
"hyper-picture",
"hyper-messenger",
"hyper-sea",
"hyper-payment",
"hyper-video",
"hyper-passion",
"hyper-flower",
"hyper-cool-sunset",
"hyper-pink-neon",
"hyper-blue-sand",
"hyper-emerald",
"hyper-relaxed-rose",
"hyper-purple-haze",
"hyper-silver",
"hyper-orange-coral",
"hyper-blue-coral",
"hyper-beam-of-light",
"hyper-safari-sunset",
"hyper-high-tide",
"hyper-hunniepop",
"hyper-soft-metal",
"hyper-coral-sun",
"hyper-power-pink",
"hyper-powder-blue",
"hyper-moody-sunset",
"hyper-burnt-sand",
"hyper-blue-white-split",
"hyper-purple-beam",
"hyper-sand-beam",
"hyper-island-waves",
"hyper-big-sur",
"hyper-oahu",
"hyper-peach-pie",
"hyper-salem",
"hyper-purple-burst",
"hyper-amber-sunrise",
"hyper-sky-sea",
"hyper-rocket-power",
"hyper-blue-flame",
"hyper-warm-glow"
```

---

#### `themeName`

The VSCode theme to use for highlighting the code in the code window. 

- **Type**: `boolean`
- **Default**: `github-light`
- **Requires**: One of:

```json
"brackets-light-pro",
"css-variables",
"dark-plus",
"dracula-soft",
"dracula",
"github-dark-dimmed",
"github-dark",
"github-light",
"hc_light",
"light-plus",
"material-darker",
"material-default",
"material-lighter",
"material-ocean",
"material-palenight",
"min-dark",
"min-light",
"monokai",
"nord",
"one-dark-pro",
"one-dark",
"one-light",
"poimandres",
"rose-pine-dawn",
"rose-pine-moon",
"rose-pine",
"slack-dark",
"slack-ochin",
"solarized-dark",
"solarized-light",
"synthwave-80s",
"synthwave-84",
"synthwave-x",
"vitesse-dark",
"vitesse-light"
```

---

#### `aspectRatio`

The aspect ratio to maintain for the generated image.

Cannot be used in conjunction with `lockWindowSize`.

- **Type**: `array|null`
- **Default**: `null`
- **Requires**: `array[number,number]`

Example Ratios: `[16,9] | [4,3] | [1,1]`

::: tip
When supplying an aspect ratio, the dimension you provide (`width` **or** `height`), will be used to calculate it's opposite value.

For example, if you supply a `height` value, then Showcode will calculate the `width`, in accordance with the aspect ratio provided.

If both `width` and `height` are given, `height` is taken as precedence, and your `width` value will be overwritten.
:::

---

#### `lockWindowSize`

Whether to lock the background canvas to the size of the code window.

- **Type**: `boolean`
- **Default**: `false`
- **Requires**: `true|false`

This feature allows you to omit a `width` and `height` parameter.

Showcode will autosize the canvas to the exact width and height
of the code window when using the `lockWindowSize` feature.

---

#### `lockWindowPaddingX`

The amount of padding (in pixels) to apply to both sides of the code window.

- **Type**: `number`
- **Default**: `0`
- **Requires**: `number|min:0`

---

#### `lockWindowPaddingY`

The amount of padding (in pixels) to apply to both top and bottom
of the code window when using the `lockWindowSize` feature.

- **Type**: `number`
- **Default**: `0`
- **Requires**: `number|min:0`

---

#### `fontSize`

The font size to apply to the code inside of the code window.

- **Type**: `number`
- **Default**: `16`
- **Requires**: `number|min:1`

---

#### `fontFamily`

The font to apply to the code inside of the code window.

- **Type**: `string`
- **Default**: `font-mono`
- **Requires**: `font-mono|font-mono-lisa|font-mono-jetbrains`

---

#### `lineHeight`

The line height to apply to the code inside of the code window.

- **Type**: `number`
- **Default**: `20`
- **Requires**: `number|min:0`

---

#### `exportPixelRatio`

The size/quality of the export to generate. Higher means larger export.

- **Type**: `number`
- **Default**: `1`
- **Requires**: `number|min:0.1|max:5`

---

#### `padding`

The padding (in pixels) to apply to all sides surrounding each `editors` code.

- **Type**: `number`
- **Default**: `16`
- **Requires**: `number|min:0`

---

#### `paddingLocked`

Whether to apply the `padding` value to all sides of the `editors` code.

If set to `false`, you may provide individual padding values using the `padding{Side}` parameters below.

- **Type**: `boolean`
- **Default**: `true`
- **Requires**: `true|false`

---

#### `paddingTop`

The padding (in pixels) to apply to the top of each `editors` code.

Only used when `paddingLocked` is `false`.

- **Type**: `number`
- **Default**: `16`
- **Requires**: `number|min:0`

---

#### `paddingBottom`

The padding (in pixels) to apply to the bottom of each `editors` code.

Only used when `paddingLocked` is `false`.

- **Type**: `number`
- **Default**: `16`
- **Requires**: `number|min:0`

---

#### `paddingLeft`

The padding (in pixels) to apply to the left side of each `editors` code.

Only used when `paddingLocked` is `false`.

- **Type**: `number`
- **Default**: `16`
- **Requires**: `number|min:0`

---

#### `paddingRight`

The padding (in pixels) to apply to the right side of each `editors` code.

Only used when `paddingLocked` is `false`.

- **Type**: `number`
- **Default**: `16`
- **Requires**: `number|min:0`

---

#### `marginTop`

The margin (in pixels) to apply to the top of the code window.

Negative values are allowed.

- **Type**: `number`
- **Default**: `0`
- **Requires**: `number`

---

#### `marginBottom`

The margin (in pixels) to apply to the bottom of the code window.

Negative values are allowed.

- **Type**: `number`
- **Default**: `0`
- **Requires**: `number`

---

#### `marginLeft`

The margin (in pixels) to apply to the left of the code window.

Negative values are allowed.

- **Type**: `number`
- **Default**: `0`
- **Requires**: `number`

---

#### `marginRight`

The margin (in pixels) to apply to the right of the code window.

Negative values are allowed.

- **Type**: `number`
- **Default**: `0`
- **Requires**: `number`

---

#### `scale`

The scale to apply to the code window.

- **Type**: `float|integer`
- **Default**: `1.0`
- **Requires**: `number|min:0`

Example:

- `1.01 => 101% scale`
- `1.1 => 110% scale`
- `2 => 200% scale`

---

#### `borderRadius`

The border radius (in pixels) to apply to all corners of the code window.

- **Type**: `number`
- **Default**: `12`
- **Requires**: `number|min:0`

---

#### `borderRadiusLocked`

Whether to apply the `borderRadius` value to all corners of the code window.

- **Type**: `boolean`
- **Default**: `true`
- **Requires**: `true|false`

---

#### `borderRadiusTopLeft`

The border radius to apply to the top left corner of the code window.

Only used when `borderRadiusLocked` is `false`.

- **Type**: `numeric`
- **Default**: `12`
- **Requires**: `number|min:0`

---

#### `borderRadiusTopRight`

The border radius to apply to the top right corner of the code window.

Only used when `borderRadiusLocked` is `false`.

- **Type**: `numeric`
- **Default**: `12`
- **Requires**: `number|min:0`

---

#### `borderRadiusBottomLeft`

The border radius to apply to the bottom left corner of the code window.

Only used when `borderRadiusLocked` is `false`.

- **Type**: `numeric`
- **Default**: `12`
- **Requires**: `number|min:0`

---

#### `borderRadiusBottomRight`

The border radius to apply to the bottom right corner of the code window.

Only used when `borderRadiusLocked` is `false`.

- **Type**: `numeric`
- **Default**: `12`
- **Requires**: `number|min:0`

---

#### `borderWidth`

The border width to apply to the code window.

Only used when `showBorder` is `true`.

- **Type**: `number`
- **Default**: `2`
- **Requires**: `number|min:0`

---

#### `borderColor`

The color (RGBA) to apply to the border.

Only used when `showBorder` is `true`.

- **Type**: `array`
- **Default**: `[red: 0, green: 0, blue: 0, alpha: 1]`
- **Requires**: `array`

Example:

```json
{
    red: 250,
    green: 100,
    blue: 155,
    alpha: 1
}
```

---

#### `showSocialBadge`

Whether to show the social badge below the code window.

- **Type**: `boolean`
- **Default**: `false`
- **Requires**: `true|false`

---

#### `socialType`

The social type to display in the social badge.

- **Type**: `string`
- **Default**: `null`
- **Requires**: `x|github|twitter|linkedin|facebook`

---

#### `socialUsername`

The social username to display in the social badge.

- **Type**: `string`
- **Default**: `null`
- **Requires**: `string|max:30`

---

#### `socialDisplayName`

The social display name to display in the social badge.

- **Type**: `string`
- **Default**: `null`
- **Requires**: `string|max:30`

---

#### `socialPosition`

The position to display the social badge.

- **Type**: `string`
- **Default**: `bottom-center`
- **Requires**: `bottom-left|bottom-center|bottom-right`

---

#### `showShadow`

Whether a shadow should be shown for the code window.

- **Type**: `boolean`
- **Default**: `true`
- **Requires**: `true|false`

---

#### `shadowX`

The offset X value to apply to the shadow of the code window.

Only used when `showShadow` is `true`.

- **Type**: `number`
- **Default**: `0`
- **Requires**: `number`

---

#### `shadowY`

The offset Y value to apply to the shadow of the code window.

Only used when `showShadow` is `true`.

- **Type**: `number`
- **Default**: `0`
- **Requires**: `number`

---

#### `shadowBlur`

The blur radius value to apply to the shadow of the code window.

- **Type**: `number`
- **Default**: `10`
- **Requires**: `number`

---

#### `shadowSpread`

The spread radius value to apply to the shadow of the code window.

- **Type**: `number`
- **Default**: `10`
- **Requires**: `number`

---

#### `shadowColor`

The color (RGBA) to apply to the shadow.

Only used when `showShadow` is `true`.

- **Type**: `array`
- **Default**: `[red: 0, green: 0, blue: 0, alpha: 0.3]`
- **Requires**: `array`

Example:

```json
{
    red: 250,
    green: 100,
    blue: 155,
    alpha: 1
}
```

---

### Editors

The code editors to render into the code window.

Example:

```js
editors: [
    {
        language: 'php',
        value: `<?php echo 'Hello world!' ?>`,
        added: [0], // Lines indexes to show green "git-add"
        removed: [0], // Lines indexes to show red "git-remove"
        focused: [0], // Lines indexes to focus (blur all remaining lines)
    },
    {
        language: 'javascript',
        value: `console.log('Hello world!')`
    }
]
```

---

#### `editors.*.value`

The code to render inside the code window. 

- **Type**: `string`
- **Default**: `null`
- **Requires**: `string`

---

#### `editors.*.language`

The language of the code supplied in the editor's `value`.

- **Type**: `string`
- **Default**: `php`
- **Requires**: One of:

```json
"abap",
"actionscript-3",
"ada",
"antlers",
"apache",
"apex",
"apl",
"applescript",
"asm",
"astro",
"awk",
"ballerina",
"bat",
"berry",
"bibtex",
"bicep",
"blade",
"c",
"cadence",
"clojure",
"cobol",
"codeql",
"coffee",
"cpp",
"crystal",
"csharp",
"css",
"cue",
"d",
"dart",
"diff",
"docker",
"dream-maker",
"elixir",
"elm",
"erb",
"erlang",
"fish",
"fsharp",
"gherkin",
"git-commit",
"git-rebase",
"glsl",
"gnuplot",
"go",
"graphql",
"groovy",
"hack",
"haml",
"handlebars",
"haskell",
"hcl",
"hlsl",
"html-derivative",
"html",
"ini",
"java",
"javascript",
"jinja-html",
"json",
"jsonc",
"jsonnet",
"jssm",
"jsx",
"julia",
"kotlin",
"latex",
"less",
"liquid",
"lisp",
"logo",
"lua",
"make",
"markdown",
"marko",
"matlab",
"mdx",
"mermaid",
"nginx",
"nim",
"nix",
"objective-c",
"objective-cpp",
"ocaml",
"pascal",
"perl",
"php-html",
"php",
"plsql",
"postcss",
"powershell",
"prisma",
"prolog",
"pug",
"puppet",
"purescript",
"python",
"r",
"raku",
"razor",
"rel",
"riscv",
"rst",
"ruby",
"rust",
"sas",
"sass",
"scala",
"scheme",
"scss",
"shaderlab",
"shellscript",
"smalltalk",
"solidity",
"sparql",
"sql",
"ssh-config",
"stata",
"stylus",
"svelte",
"swift",
"system-verilog",
"tasl",
"tcl",
"tex",
"toml",
"tsx",
"turtle",
"twig",
"typescript",
"vb",
"verilog",
"vhdl",
"viml",
"vue-html",
"vue",
"wasm",
"wenyan",
"xml",
"xsl",
"yaml",
"zenscript"
```

---

#### `editors.*.added`

The integer indexes of the code lines to show as an added (git-add) line.

- **Type**: `array`
- **Default**: `[]`
- **Requires**: `array`

Example: `[0,2,4]` (Highight line 0, 2 and 4).

---

#### `editors.*.removed`

The integer indexes of the code lines to show as a removed (git-remove) line.

- **Type**: `array`
- **Default**: `[]`
- **Requires**: `array`

Example: `[0,2,4]` (Highight line 0, 2 and 4).

---

#### `editors.*.focused`

The integer indexes of the code lines to show as a focused line.

- **Type**: `array`
- **Default**: `[]`
- **Requires**: `array`

Example: `[0,2,4]` (Focus line 0, 2 and 4).
