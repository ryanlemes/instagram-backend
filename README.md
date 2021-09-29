# Instagram backend

[![build](https://github.com/ryanlemes/instagram-backend/actions/workflows/build.yml/badge.svg)](https://github.com/ryanlemes/instagram-backend/actions/workflows/build.yml)

## Explanation

Project inspired on instagram's backend, written in typescript.

## Content API

| method   | path                 |
|----------|----------------------|
| `GET`    | `/health`            |
| `GET`    | `/posts`             |
| `POST`   | `/posts`             |
| `DELETE` | `/posts/:id`         |
| `POST`   | `/posts/:id/like`    |
| `POST`   | `/posts/:id/dislike` |