const Engineer = require("../lib/Engineer");

test ("Can set github username", () => {
    const testgithub = "githubuser";
    const x = new Engineer("Jim", 12345, "random@email.com", testgithub);
    expect(x.github).toBe(testgithub);
});

test("Engineer info should be returned when using getRole()", () => {
    const testgetEngineer = "Engineer"
    const x = new Engineer("Jim", 12345, "random@email.com", "githubuser");
    expect(x.getRole()).toBe(testgetEngineer);
});

test("Can get github username by using getGitHub()", () => {
    const testGetGit = "githubuser";
    const x = new Engineer("Jim", 12345, "random@email.com", testGetGit);
    expect(x.getGithub()).toBe(testGetGit);
});