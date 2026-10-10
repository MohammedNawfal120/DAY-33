# Day 33 - BrowserRouter Task

React Router project with Home, About, Users and dynamic user details pages.

## Run

```bash
npm install
npm run dev
```

## Verify

- Home, About and Users links change pages without reloading.
- Click View Profile on a user to visit `/users/1` (or another ID).
- Back to Users returns to `/users` using `useNavigate`.
- Invalid IDs show a User not found message.
- Run `npm run build` to build the project.
