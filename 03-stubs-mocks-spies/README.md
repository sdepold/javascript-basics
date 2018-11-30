# JavaScript Basic 03 | Stubs, Mocks, Spies

TBD

## Focus

- Mocking, Stubbing, Spying
- Sinon

## Notes

### Spies

A test spy is a *function* that records arguments, return value, the value of this and
exception thrown (if any) for all its calls. There are two types of spies: Some are
anonymous functions, while others wrap methods that already exist in the system under test.

### Stubs

Test stubs are functions (spies) with pre-programmed behavior. Behavior per stub call can be defined programmatically.

### Mocks

Mocks (and mock expectations) are fake methods (like spies) with pre-programmed behavior (like stubs) as well as pre-programmed expectations.

A mock will fail your test if it is not used as expected.

## Instructions

<details>
    <summary>Familiarize yourself with the provided source code</summary>
    <p>
<br>
Open the Node.js REPL by running the <code>node</code> program on the command line.<br>
You can now require the quotes module and play around with it:

```javascript
const quotes = require('./src/quotes');

quotes().steve().then(console.log) // Will eventually render a quote from Steve Jobs
quotes().fromPerson('Confucius').then(console.log) // Will render a quote related to Confucius
quotes().randomQuote().then(console.log) // Will render a random quote
```
    </p>
</details>

<details>
    <summary>Test that `quotes().steve()` returns a string</summary>
    <p>

```javascript
describe('quotes', () => {
    const quotesLib = require('./src/quotes');
    const quotes = quotesLib();

    it("returns a string", () => {
        return quotes().steve().then((quote) => expect(quote).to.be.a('string'))
    });
});

```

Note that this test will actually make an HTTP request
    </p>
</details>

<details>
    <summary>Prevent network request when calling `quotes().steve()` in tests</summary>
    <p>
<br>
The function <code>steve</code> is essentially just an alias for <code>fromPerson("steve jobs")</code>. Respectively, a network call can be prevented when the
method <code>fromPerson</code> is temporarily overridden with a function that returns a resolved Promise.

```javascript
describe('quotes', () => {
    const quotesLib = require('./src/quotes');
    const quotes = quotesLib();
    let originalFromPerson;

    beforeEach(() => {
        originalFromPerson = quotes.fromPerson;
    });

    afterEach(() => {
        quotes.fromPerson = originalFromPerson;
    });

    it("returns a string without network requests", () => {
        quotes.fromPerson = () => Promise.resolve("some quote");

        return quotes.steve().then((quote) => {
            expect(quote).to.equal("some quote");
        });
    });
});
```
    </p>
</details>

<details>
    <summary>Reducing the boilerplate code</summary>
    <p>
<br>
In the previous step, we were manually overriding fromPerson. Instead of that, we can use sinon's stub method: https://sinonjs.org/releases/v7.1.1/stubs/

```javascript
describe('quotes', () => {
    const sinon = require('sinon');
    const quotesLib = require('./src/quotes');
    const quotes = quotesLib();

    beforeEach(() => {
        sinon.stub(quotes, 'fromPerson').returns(Promise.resolve("some quote"));
    });

    afterEach(() => {
        quotes.fromPerson.restore();
    });

    it("returns a string without network requests", () => {
        return quotes.steve().then((quote) => {
            expect(quote).to.equal("some quote");
        });
    });
});
```
    </p>
</details>

<details>
    <summary>Ensure that quotes().steve() is just an alias for quotes().fromPerson("steve jobs")</summary>
    <p>
<br>
Instead of overriding fromPerson and asserting that the result is the expected string, we can also assert that the function is called correctly. That's what mocks are for: https://sinonjs.org/releases/v7.1.1/mocks/
<br>Mocks are used when you have certain expectations against an object which you want to verify. For that you describe the expected interactions with the mock, execute some action then and verify the expectations last.

```javascript
describe('quotes', () => {
    const sinon = require('sinon');
    const quotesLib = require('./src/quotes');
    const quotes = quotesLib();

    it("returns a string without network requests", () => {
        const mock = sinon.mock(quotes);

        mock.expects("fromPerson").withArgs("steve jobs").once().returns(Promise.resolved("some quote"));

        return quotes.steve().then(() => {
            mock.verify();
        });
    });
});
```
    </p>
</details>


<details>
    <summary>Recording method calls</summary>
    <p>
<br>
Sinon also allows you to record every call to a specific method. That concept is called a spy: https://sinonjs.org/releases/v7.1.1/spies/

```javascript
describe('quotes', () => {
    const sinon = require('sinon');
    const quotesLib = require('./src/quotes');
    const quotes = quotesLib();

    it("returns a string without network requests", () => {
        tbd
    });
});
```
    </p>
</details>
