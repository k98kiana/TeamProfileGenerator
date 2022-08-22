const Intern = require("../lib/Intern");

test("Can set the school", () => {
    const testschool = "UCSD";
    const x = new Intern("Jim", 12345, "random@email.com", testschool);
    expect(x.school).toBe(testschool);
});

test("Intern class should be returned from getRole()", () => {
    const testRole = "Intern";
    const x = new Intern("Jim", 12345, "random@email.com", "UCSD");
    expect(x.getRole()).toBe(testRole);
});

test("Can get school using getSchool()", () => {
    const testgetschool = "UCSD";
    const x = new Intern("Jim", 12345, "random@email.com", testgetschool);
    expect(x.getSchool()).toBe(testgetschool);
});