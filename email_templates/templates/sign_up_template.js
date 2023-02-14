
module.exports.subject = `Welcom to QuestAns`;

module.exports.html = `
    <p>
        Hi {{first_name}} {{last_name}},
            <h2>Welcome to QuestAns</h2>    
            Click the button below to confirm your email address.
            <br>
            <a href="{{verify_email_link}}">
                Verify email
            </a>
            <br>
            If that doesn't work, copy and paste the following link in your browser:
            <a href="{{verify_email_link}}">
                {{verify_email_link}}
            </a>
    </p>
`;

module.exports.text = `Welcome to QuestAns, Please verify your email`;