# Humid-oro

Humid-oro is designed with the cigar aficionado in mind.\
With Humid-oro you are able to rate and review cigars that you have previously enjoyed. And with the ability to search our collection of cigars you will have no issues finding your next one. But if we don’t have it, you can add your own that is then available to all other users to review as well.

## Requirements

- Users can add a cigar by creating a new entry or searching for an exisisting one.
- When adding a cigar the user will have muliple options\
  to fill out such as: - Name - Rating System - Wrapper, Binder, Filler - Shade and Origin - Size: Ring Gauge, Length - Smoke Time - Price (optional)

## Tech Stack

- PostgresSQL - Database
- Django + Django REST Framework + SimpleJWT - Backend
- Cigars API - Third Party API
- React - Frontend

## Data Models

### Tables

- Cigars
  - ID -> Primary Key (auto)
  - User ID - Foreign
  - Name
  - Origin
  - Wrapper
  - Filler
  - Binder
  - Avg Time Smoked
  - Avg Rating

### Relationships

Cigars (one) -> User's (many)
Profile (one) -> User (one)
Brand (one) -> Cigars (many)
Reviews (many) -> Cigar (one)
