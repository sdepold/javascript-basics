# Misc 03 | Open sourcing a project

In this session we will open source an amazing and unseen shape library which allows its user to calculate the are and perimeter of different geometric shapes.

## Bootstrapping

### Git(Hub) first!

Go to GitHub and create a (private) repository!

1. Go to: https://github.com/new
2. Init the README
3. Add a gitignore for Node
4. Select a license (e.g. MIT), See https://choosealicense.com for more info on the topic
5. Copy the repo url

```shell
git clone <repo url>
cd my-amazing-shape-lib
```

### Init the project

```
npm init
```

Now answer all questions properly. Here some hints:

```
package name: (my-amazing-shape-lib)
version: (1.0.0)
description: My amazing shape lib --> Is not picked up automatically. Make it sounds amazing
entry point: (index.js)
test command: --> leave it empty for now...
git repository: (https://github.com/sdepold/my-amazing-shape-lib.git)
keywords: geometry shapes --> The tags will appear e.g. here https://www.npmjs.com/search?q=keywords:shape
author: Sascha Depold <sascha@depold.com> (http://depold.com) --> You can also just mention your name or so
license: (ISC) MIT --> Should be the same as picked earlier on GitHub
```

Commit your changes and push

### Prepare the tests

As you are totally into TDD, you'll now add your tests first. Feel free to find inspiration from test.js.

Idea: Create a super class called Shape that contains a single method called `describe`. When called, it returns a string like this:

```
Area: ${area}, Perimeter: ${perimeter}
```

The library should support the shapes triangle, circle and rectangle. Each of the shapes should have methods for calculating the respective perimeter and the area. See index.js for inspiration.

### Update the package.json 

Let's go with the quite popular combination of mocha and chai (or choose your own approach):

```
npm install --save --dev mocha chai
```

In your package.json, go and change the scripts area to this:

```
"scripts": {
    "test": "mocha test.js"
}
```

You should now be able to do npm test.

### Implement the logic

As mentioned, the library should support the shapes triangle, circle and rectangle. Each of the shapes should have methods for calculating the respective perimeter and the area. See index.js for inspiration.

### Travis
- connecting
- badge

### Github PR validation

### Readmes

Readings
- https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3
- https://www.makeareadme.com

Aspects
- Title
- Teaser (short intro at the top)
- Logo / Banner 
- Badges (Tests, NPM, Code coverage, Code Style, )
- Features
- Installation
- Collaboration
- Authors
- Security issues / Responsible disclosure
- Documentation / API

Some Readmes:
- https://github.com/choojs/choo/blob/master/README.md
- https://github.com/sequelize/sequelize
- Minerva

### Changelogs
- https://keepachangelog.com/en/1.1.0/

### Versioning
- SemVer (https://semver.org)
- Semantic release (https://github.com/semantic-release/semantic-release)

### Publishing
- npm scopes
- how publishing works

### Spreading the news

- echojs
- stackoverflow
- twitter
