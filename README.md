# Bold Reports Documentation

## Pre-requisite

### Node.js Installation

Install stable NodeJS from https://nodejs.org and run the below command in command prompt to check whether it is installed properly or not (currently, we recommend `node 10` version).

```cmd
node -v
```

### Gatsby Installation

Install the [`gatsby-cli`](https://www.npmjs.com/package/gatsby-cli) package with global access by executing the below command.

**To Run:**

 ```cmd
    npm i gatsby-cli -g
 ```

  Now, run `gatsby -v` in command prompt to check whether it is installed properly or not.

### Gulp Installation

Install [`gulp`](https://www.npmjs.com/package/gulp/v/3.9.1) package with global access by executing the below command.

**To Run:**

 ```cmd
    npm i gulp@3.9.1 -g
 ```

 Now, run gulp -v to check whether it is installed properly or not.

## Setup the Application for local environment

### NPM Installation

Initially, run `npm install` command from your cloned root folder.

**To Run:**

  ```cmd
   npm install
  ```

## Gulp Tasks

### Build your application

Run the below command to build the application. 

**To Run:**

  ```cmd
    gulp build
  ```

### View the application in local

Run the below command to serve the application locally. After running the command, Navigate to [localhost:8000](http://localhost:8000).

**To Run:**

  ```cmd
    gulp serve
  ```

# Generate assets for production environment

To host the application other than root, we need to pass the `--prefix-paths` argument. If this argument is not passed, `Gatsby` will generate the site as it is, hosted from the root domain.

**To Run:** (for root application/domain)

  ```cmd
    gulp production-build
  ```

**To Run:** (for sub-application)

  ```cmd
    gulp production-build --prefix="/documentation"
  ```

  > Here the "/documentation" specifies the sub-application/directory relative to the domain.

# Test markdown lint

Run the below command to test markdown lint.

**To Run:**

 ```cmd
    gulp md-lint
 ```

## Test typo error

Run the below command to test typo error.

This task will throw an error on using custom words like ej, localhost. For that, we need to include these words (need to have a valid reason for using these custom names in `.spelling` file.

**To Run:**

 ```cmd
    gulp typo
 ```

## Test file name validation
Run the below command to test file name validation.

This task will throw an error on using custom file names. For that, we need to include these names(need to have a valid reason for using these custom names) in `.customnames` file.

**To Run:**

 ```cmd
    gulp file-validation
 ```

## Test markdown lint, typo error and file name validation

Run the below command to test markdown lint, typo error and file name validation.

**To Run:**

 ```cmd
    gulp test
 ```

## File Structure

Documents should have written in `markdown(.md)` format.

Refer the below document folder structure,

```cmd
    --> docs (1)
        --> overview.md (2)
        --> summary.json (3)
``` 

(1) ---> Document `.md` files should be placed in **docs** folder.

(2) ---> Each parent folder should have `overview.md` file that explains about the overview of child nodes.

(3) ---> `summary.json` file holds the title of each files presents in the parent folder. This will helps to show the titles in left pane of the documentation site. So, add the titles here with respect to each platform.

### Image Location

Image should be placed in this location `\static\assets\`.
> Image name and Alt text should be unique and meaningful.

### Notes Style

To add the notes of predefined blockquote use the below syntax,

**Syntax** : `> **NOTE:** [Content]` 

## Markdown Guidelines

* For more info, refer to the below links.

https://daringfireball.net/projects/markdown/syntax

https://guides.github.com/features/mastering-markdown/

Copyright © 2001 - 2020 Syncfusion Inc. All Rights Reserved