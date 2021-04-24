# Git Workshop Materials

This repository contains the source code for Git workshop materials.

## Dependencies

- [git](https://github.com/ePages-de/git-workshop/wiki/Git): The version control system which is used for this project 
- [Hugo](https://github.com/ePages-de/git-workshop/wiki/Hugo): The static site generator used to build the website
- Any text editor (e.g. [VS Code](https://github.com/ePages-de/git-workshop/wiki/VS-Code), [Atom](https://github.com/ePages-de/git-workshop/wiki/Atom), or [Notepad++](https://notepad-plus-plus.org/))

## Content authoring

### Tutorials

The Git tutorials are authored with the help of [Markdown](https://www.markdownguide.org/basic-syntax) code.

#### Add a new tutorial

Run the following command to create a new presentation in Hugo's `content` directory:

```
hugo new --kind tutorial subject-two/my-tutorial
```

### Presentations

The presentations are authored with the help of plain HTML code for [reveal.js](https://revealjs.com/) content elements.

#### Add a new presentation

Run the following command to create a new presentation in Hugo's `content` directory:

```
hugo new --kind presentation subject-two/my-presentation
```

### Preview changes

To a development server that always re-renders after every change, run the following command:

```
hugo server
```

## Maintenance

This section is only relevant for project maintainers.

### Update theme

If you want to apply a new version of the [workshop-materials](https://github.com/experimental-software/workshop-materials) project where the layout of the website is defined, execute the following command:

```
cd themes/workshop-materials/
git pull origin master
cd -
git add themes/workshop-materials/
git commit -m "Update theme"
```

### Publish website

To publish the website, just do a new commit on the `main` branch of the upstream repository.
The GitHub Action [`hugo.yml`](.github/workflows/hugo.yml) will generate the HTML code and publish it on the `gh-pages` branch from which the website is hosted.


## Credits

- The layout of the start page and the subject list pages is applied from a Bootstrap template by [Xiaoying Riley](https://themes.3rdwavemedia.com/) which is licensed under Creative Commons Attribution 3.0 License.
- The layout of the tutorial pages is inspired by [Google Codelabs](https://github.com/ePages-de/git-workshop/wiki/Google-Codelabs).
- The presentations are based on [RevealJS](https://revealjs.com/) which is licensed under the [MIT license](https://github.com/hakimel/reveal.js/blob/master/LICENSE).
- At various places of the website [Font Awesome](https://fontawesome.com/icons?d=gallery&p=2&m=free) icons are used.

## Copyright

(c) ePages 2021 and [CONTRIBUTORS](CONTRIBUTORS).

Except as otherwise noted, the content of this repository is licensed under the [Creative Commons Attribution 3.0 License](http://creativecommons.org/licenses/by/3.0).
