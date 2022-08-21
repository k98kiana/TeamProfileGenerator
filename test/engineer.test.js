const engineer = require("../lib/engineer");

test ("Can set github username", () => {
    const testgithub = "githubuser";
    const x = new engineer("Jim", 12345, "random@email.com", testgithub);
    expect(x.github).toBe(testgithub);
});

test("Engineer info should be returned when using getRole()", () => {
    const testgetengineer = "engineer"
    const x = new engineer("Jim", 12345, "random@email.com", "githubuser");
    expect(x.getRole()).toBe(testgetengineer);
});

test("Can get github username by using getGitHub()", () => {
    const testGetGit = "githubuser";
    const x = new engineer("Jim", 12345, "random@email.com", testGetGit);
    expect(x.getGithub()).toBe(testGetGit);
});