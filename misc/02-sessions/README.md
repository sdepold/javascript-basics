# Misc 02 | Sessions

## Idea

Session = Connection between consumer and server which is identified by shared (and ideally encrypted) value (aka sessionId)
Establishment:
- Consumer provides credentials
- Server verifies it
- Stores state on server side
- Sends (encrypted) sessionId back as cookie
- Every future request between consumer and server forwards cookie and respectively authenticates the user
- Session expires when cookie expires (or when logout is triggered)

## Steps

1. Run app
2. Login and verify the cookies, the logs, the database
3. Logout and check again
4. Implement user registration (You may ignore password hashing for now…)
5. Verify on login if user credentials are correct
6. Optional: Encrypt the user's password.
