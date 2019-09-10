# Misc 01 | Cookies

An HTTP cookie is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing.
Cookies were designed to be a reliable mechanism for websites to remember stateful information or to record the user's browsing activity. They can also
be used to remember arbitrary pieces of information that the user previously entered into form fields such as names, addresses, passwords, and credit card numbers.

## Working with cookies on the client

```javascript
// Converting cookie into an object
const cookies = document.cookie.split(";").reduce((acc, item)=>{const split = item.split("="); return {...acc, [split[0].trim()]: split[1]}}, {})

// Adding a cookie
document.cookie = "key=value; <attributes>"
```

## Setting cookies through HTTP

```
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: theme=light
Set-Cookie: sessionToken=abc123; Expires=Wed, 09 Jun 2021 10:18:14 GMT
```

## Types of cookies
--> https://en.wikipedia.org/wiki/HTTP_cookie#Terminology

## Misc
### Deleting a cookie

In order to remove a cookie, you can set its Expires attribute to 0.

## The exercise

1. Run the app and check how it works.
2. Review handle-form.js
3. Implement sync-form.js to store all type input in the cookie so that it is used after a refresh
4. The form shall not be restored once it was submitted

## More info

https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
https://en.wikipedia.org/wiki/HTTP_cookie
