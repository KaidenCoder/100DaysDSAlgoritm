var numUniqueEmails = function (emails) {
    return new Set(emails.map(a => {
        const [local, domain] = a.split('@')
        return `${local.split('.').join('').split('+')[0]}@${domain}`
    })).size
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]))