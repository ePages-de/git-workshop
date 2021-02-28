# Workshop Materials Template

## Getting started

```
PROJECT_NAME=your-project-here
git clone --recurse \
  https://github.com/experimental-software/workshop-materials-template.git \
  ${PROJECT_NAME}
```

To reset the branch history, run:

```
cd ${PROJECT_NAME}
git checkout --orphan main
git add .
git commit -m "Initial commit"
```

## TODO

After cloning the repository, you need to do the following steps:

- [ ] [Update dummy config](config.toml)
- [ ] [Update dummy home page text](content/_index.md)
- [ ] [Update dummy subject](content/subject-one)
- [ ] [Add legal text to imprint](content/imprint.html)

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

This template repository is licensed under the [CreativeCommons Zero](https://creativecommons.org/share-your-work/public-domain/cc0/) license.
