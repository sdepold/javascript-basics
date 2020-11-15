const template = require('./template');

module.exports = ({user}) => {
    return template({}, () => `
        <p>Hey ${user.username}! 👋</p>
        <p>Glad to have you around! The registration was completed!</p>
        <p>You'll be redirected to the main home page now.</p>

        <script>
            setInterval(() => {
                document.location.href="/";
            }, 5000);
        </script>
    `);
};