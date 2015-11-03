# Contributing

Please follow these guidelines for contributing to this repository.

## Branches

**Never commit directly into `master` or other long running branches.** Create small branches for *each* topic that you work on (individual features, bug fixes, and so on). When the branch is complete, [create a pull request](https://help.github.com/articles/using-pull-requests/) against `master`.

Branches should be per topic, and thus *small* and *short-lived*. The goal is to be able to merge back into `master` frequently, so that the team can access your changes, and so that you stay in closer sync with the trunk.

Remember to *frequently* [rebase](http://git-scm.com/book/ch3-6.html) your branch, to get the latest changes from `master`. This will give you access to any new features and utilities, plus make merging upstream (much) easier.

### Naming

Branch names should be:

- Descriptive and concise (pithy, even)
- All lowercase
- Separated by *hyphens*

| Bad       | Good                |
|-----------|---------------------|
| `pnx`     | `init-phoenix`      |
| `logo`    | `logo-v2`           |
| `linter`  | `ci-linter-task`    |
| `sockets` | `setup-web-sockets` |
| `#42`     | `switch-to-adga`    |

### Long-Running & Integration Branches

In the edge case that a series of features are tightly coupled, and it is impractical to decouple them:

1. Create a long-running "integration branch" from `master`
2. Branch sub-features from the integration branch
  - *Do not commit directly into the long-running branch directly*
3. Frequently rebase sub-branches from the integration branch, and the feature branch from `master`
4. When the sub-feature is complete, pull request against integration
5. When the all coupled features are complete and merged into the integration branch,
   pull request the integration branch against `master`

It may be helpful to create a checklist in the integration branch's description of the subtasks that belong to it.

#### Naming Sub-branches

To avoid a [Git path conflict](https://coderwall.com/p/qkofma/a-caution-about-git-branch-names-with-s), name of a sub-branch of a long-running branch should take this form: `feature-title/long-running-name`

Example: `pour-foundation/build-house`

### Commit Messages

Provide a summary message of fewer than 50 characters. If further detail is required, provide a bullet-point list (or paragraph) on the line(s) below.

## Pull Requests

Before a branch gets merged into `master`, it *must* be reviewed by another team member.
This has a number of benefits:

- Exposes the team to new code
  - Keeps everyone in the loop
  - Improves the project's [bus factor](https://en.wikipedia.org/wiki/Bus_factor)
- Catch bugs early on
- Lowers the risk of feature or utility duplication
- Style consistency

### Titles

When creating your Pull Request, provide a short and descriptive title (fewer than 50 characters). These will likely be close to the branch name. Format like a normal sentence.

| Bad         | Good                           |
|-------------|--------------------------------|
| `Quick fix` | `Add User model typespecs`     |
| `#42`       | `Reduce Sass deep nesting`     |
| `BUTTONS`   | `Update contact buttons to v3` |

#### Descriptions

To help the reviewer understand what they're reviewing, provide a description of what the code is expected to do. Link to any material, documentation, or resources that may be helpful for context.

As a preemptive measure, be sure to mention any gotchas, or areas that may need explanation.

#### Link Issues

In GitHub, when you mention an Issue in a comment or description, it creates a link to and from the PR.

This provides the reviewer with context on what the PR is for, and lets the team know that the Issue is near to being complete.

### Reviewing

As the reviewer of the code, your responsibilities include (but are not limited to):

- When possible, you have actually used the feature as a end-user
- The code does what it is intended to
- You *understand* the code (don't just skim it)
- All of the tests pass
- The test coverage is sufficient
- The style is consistent with the rest of the project
- Best practices have been followed
- The code would be clear to someone new to the project
- There are comments anywhere that is not immediately clear

#### Feedback

Be kind: someone has put a lot of effort into what you're reviewing! Being empathetic in your phrasing may take an extra few keystrokes, but will pay off. Assume that you don't have all of the context (you don't!)

Comment on the line *under* the line or section that you are talking about. Comments show up as a large box, and are clearer below the line. Only comment in the discussion section when you have general questions.

When the PR is approved, let them know in the discussion section, and add a hearty `:+1:`.

Let the requester do the upstream merge. They have greater context on the feature, and may still be adjusting something that you mentioned when you give approval.

## Forking
If you don't have push rights for the repo:

1. Fork the repo
2. Do your work
3. Create a pull request against the upstream repository

## Code of Conduct

As contributors and maintainers of this project, and in the interest of fostering an open and welcoming community, we pledge to respect all people who contribute through reporting issues, posting feature requests, updating documentation, submitting pull requests or patches, and other activities.

We are committed to making participation in this project a harassment-free experience for everyone, regardless of level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.

Examples of unacceptable behaviour by participants include:

 * The use of sexualized language or imagery,
 * Personal attacks,
 * Trolling or insulting/derogatory comments,
 * Public or private harassment,
 * Publishing other's private information, such as physical or electronic addresses, without explicit permission,
 * Other unethical or unprofessional conduct.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct. By adopting this Code of Conduct, project maintainers commit themselves to fairly and consistently applying these principles to every aspect of managing this project. Project maintainers who do not follow or enforce the Code of Conduct may be permanently removed from the project team.

This code of conduct applies both within project spaces and in public spaces when an individual is representing the project or its community.

Instances of abusive, harassing, or otherwise unacceptable behaviour may be reported by opening an issue or contacting one or more of the project maintainers.

This Code of Conduct is adapted from the [Contributor Covenant](http://contributor-covenant.org), version 1.2.0, available at [http://contributor-covenant.org/version/1/2/0/](http://contributor-covenant.org/version/1/2/0/)
