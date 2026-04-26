<div align=center>

# [LIBRARY PHP TEMPLATE]

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Release](https://github.com/d3p1/lib-php-template/actions/workflows/release.yml/badge.svg)](https://github.com/d3p1/lib-php-template/actions/workflows/release.yml)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

</div> 

## Introduction

A template to build [PHP](https://www.php.net/) libraries.

The goal of this template is to simplify the process of creating, maintaining, and publishing libraries. It provides a ready-to-use setup with sensible defaults, including an [automated release workflow triggered on every push to the repository](./.github/workflows/release.yml).

## Usage

Using this library is straightforward:

---

### 1. Create a repository

Click the **[Use this template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)** button to create a new repository based on this template.

---

### 2. Update `composer.json`

Edit the [`composer.json`](./composer.json) file to reflect your library’s metadata:

- `name` – Your library name
- `description` – Short and meaningful description
- `authors` – Author information
- `require` - Library dependencies
- `autoload` - Autoload configuration

---

### 3. Install dependencies

Execute the following commands:

```bash
composer install
```

---

### 4. Develop your library

Start developing your library inside the [`src` folder](./src). 

Every commit must follow this [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format: 

```
<type>(<scope>): <description> [<issue-number>]
``` 

> [!NOTE]
> This is required by the [release workflow, which analyzes every commit to automatically generate the releases](./.github/workflows/release.yml).

---

### 5. Finalize documentation

Update the [`README.md`](./README.md) to describe your library’s purpose and usage.

> [!IMPORTANT]
> Don’t forget to update the release badge URL at the top of this file if you keep it — it currently points to this repository.

---

> [!NOTE]
> To gain a deeper understanding of how to use this library and how it works under the hood, visit the [wiki page](https://github.com/d3p1/lib-php-template/wiki) _(in progress)_.

> [!NOTE]
> There is a [ticket](https://github.com/d3p1/lib-php-template/issues/2) to add testing tools to improve the library's validation workflow.

## Changelog

Detailed changes for each release are documented in [`CHANGELOG.md`](./CHANGELOG.md).

## License

This work is published under [MIT License](./LICENSE).

## Author

Always happy to receive a greeting on:

- [LinkedIn](https://www.linkedin.com/in/cristian-marcelo-de-picciotto/)
- [Web](https://d3p1.dev/)