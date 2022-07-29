# README

Rails 7 + CableReady 5 + StimulusReflex 3.5 + Vite

## Prerequisites

- Ruby 3+
- Docker (For redis / postgres)
- PNPM

## Installation

Either click `Use The Template` in Github, or clone the
repo.

```bash
git clone https://github.com/ParamagicDev/rails_starter
cd rails_starter
```

Then, to run installation steps do the following:

```bash
bundle install && npm run setup
```

## Getting Started

### Using Overmind

```bash
overmind start -f ./Procfile.dev
```

### Using seperate terminals

```bash
docker-compose up redis db
bundle exec rails server
./bin/vite dev
```

Then, run the following to setup the database:

```bash
bundle exec rails db:create
bundle exec rails db:migrate
```

Then navigate to `localhost:3000` and you should be good to
go.

