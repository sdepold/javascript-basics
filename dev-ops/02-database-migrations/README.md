# DevOps 02 | Database migrations

This lesson focusses on different approaches to change database **schemas**.

## What does it mean?

- Incremental and reversible changes to relational database schemas
- Ideally under version control
- Usually using a schema migration tool
- Preservation of data in general is not guaranteed

https://en.wikipedia.org/wiki/Schema_migration

## Why is it needed?

- Schema changes usually bound to product changes
- Can be either need for storing additional information or changing existing information formats

## Risks during migrations

- Migrations are sometimes not reversible due to data type adjustments or deletion of columns
- Conflicts in schema adjustments
- People directly changing the database without using the designated tools
- Downtime during migration (usually depending on size of database)

## Getting started

We are told to build a dating platform that allows people to find each other based on interests.
One day, the PM walks into the room and tells you to add a match making algorithm based on people's 
eye color.

### Manual migrations

During the initial development phase of smaller projects, schemas are usually migrated manually.
The moment more than one developer is involved, things become harder to maintain and communicate.
--> Every change to the schema needs to be discussed and synchronized with all developers.

