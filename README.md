# TestProj

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

1. It shows list of users and user details when a User card is clicked.
2. Clicking on email id redirects the customer to default mail.

List of Components:

1. AppComponent : Landing Component
2. UsersComponent : Component to show all users
3. PaginatorComponent : Pagination component
4. SpinnerComponent : Loading spinner component
5. UserCardComponent : Component to show individual user data in Card format
6. UserDetailComponent : Component to show user detail when clicked from `UserCardComponent`

Models:

1. IUserListResponse
2. IUser
3. IUserResponse

Services:

1. CachingService : Creates a `map` and maintain the caching request history and validates expiry
2. CachingInterceptor: Implements `HttpInterceptor` and uses `get` and `put` of `CachingService`
3. UserService: To get List of users and user details based on `id` using `http` requests.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

`ng test --code-coverage  --source-map`:

```
=============================== Coverage summary ===============================
Statements   : 94.05% ( 79/84 )
Branches     : 50% ( 3/6 )
Functions    : 85.29% ( 29/34 )
Lines        : 93.06% ( 67/72 )
================================================================================
```
## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
