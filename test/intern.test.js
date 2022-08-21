const intern = require("../lib/intern");

test("Can set the school", () => {
    const testschool = "UCSD";
    const x = new intern("Jim", 12345, "random@email.com", testschool);
    expect(x.school).toBe(testschool);
});

test("Intern class should be returned from getRole()", () => {
    const testRole = "intern";
    const x = new intern("Jim", 12345, "random@email.com", "UCSD");
    expect(x.getRole()).toBe(testRole);
});

test("Can get school using getSchool()", () => {
    const testgetschool = "UCSD";
    const x = new intern("Jim", 12345, "random@email.com", testgetschool);
    expect(x.getSchool()).toBe(testgetschool);
});