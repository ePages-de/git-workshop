# Git Workshop Materials

This prepository contains the source code for Git workshop materials.

## Development

### Run Hugo server

To a development server which always re-renders after every change, run the following command:

```
hugo server
```

### Build website

To generate the HTML for publication, run the following command:

```
hugo --destination docs/
```

## Content authoring

### Presentation

Run the following command to create a new presentation in Hugo's `content` directory:

```
hugo new --kind presentation subject-two/my-presentation
```

### Tutorial

Run the following command to create a new presentation in Hugo's `content` directory:

```
hugo new --kind tutorial subject-two/my-tutorial
```


## Credits

- The layout of the start page and the subject list pages is applied from a Bootstrap template by [Xiaoying Riley](https://themes.3rdwavemedia.com/) which is licensed under Creative Commons Attribution 3.0 License.
- The layout of the tutorial pages is inspired by [Google Codelabs](https://github.com/googlecodelabs/tools).
- The presentations are based on [RevealJS](https://revealjs.com/) which is licensed under the [MIT license](https://github.com/hakimel/reveal.js/blob/master/LICENSE).
- At various places of the website [Font Awesome](https://fontawesome.com/) icons are used.

## License

TBD
