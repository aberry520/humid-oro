# Humid-oro
Humid-oro is an app designed for the cigar afficianado. \
Here you will be able to track and rate your cigars that you have previuously smoked. You will also be able to browse for your next cigar by the orgin of tobacco, the type of wrapper leaf, or the flavor profile.

## Requirements
- Users can add a cigar by creating a new entry or searching for an exisisting one.
- When adding a cigar the user will have muliple options\
 to fill out such as:
        
        - Name
        - Rating System
        - Wrapper, Binder, Filler
        - Shade and Origin
        - Size: Ring Gauge, Length
        - Smoke Time
        - Price (optional)
- 
- 

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

### Relationships
Cigars (many) -> User's (many)