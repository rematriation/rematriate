# Rematriate Theme

## Key Theme Components

### Project Lead Cards

![''](assets/images/theme/rema-theme-cards-project-leads.png)

Initial featured paragraph card to set up the page.

**Content files include**:

- themes/rematriate/content/about/[leads/**.md](./content/about/leads/)
  - Custom Parameters:
    - `name`: String. Name of the project lead.
    - `pronouns`: String. Pronouns of project lead.
    - `community`: String (optional). Note community of origin, if applicable or desired.
    - `jobtitle`: String. Title of the project lead.
    - `organization`: String. Name of the organization or company.
    - `url`: String (optional). URL to website. Omit the `https://`.
    - `urltext`: String (optional). Text to use in anchored/linked text.
    - `bio`: Long String. Paragraph of the lead's bio.
    - `img_src`: String. Source relative URL to the image in the project's `assets/images` folder. Always start with `/images/...`.

**Coded template files include**: 

- themes/rematriate/layouts/partials/cards/[cards__container_leads.html](themes/rematriate/layouts/partials/cards/cards__container_leads.html)

**Template used in**:

- layouts/_default/[about.html](layouts/_default/about.html)

### Introduction Card Paragraphs

![''](assets/images/theme/rema-theme-intro-para-card-demo.png)

Initial featured paragraph card to set up the page.

**Code files include**: 

- themes/rematriate/layouts/partials/[intro-section.html](themes/rematriate/layouts/partials/intro-section.html)
  - Custom Parameters:
    - `introheading`: H2 heading for the intro card
    - `Content`: Markdown paragraph in the section's `_index.md` file.

**Used in**:

- layouts/_default/[about.html](layouts/_default/about.html)

## Installation

## Configuration
