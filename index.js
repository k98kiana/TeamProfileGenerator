const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "result");
const outputPath = path.join(OUTPUT_DIR, "result.html");

const render = require("./lib/htmlrender");


let memberInfo = [];

const buildteam = [
    {
        type:"confirm",
        message:"Would you like to build a team?",
        name:"confirmTeam",
    },
];

inquirer.prompt(buildteam).then((answer) => {
    answer.confirmTeam
    ? buildTeamMember()
    : console.log("Nothing to input.")
})

const teamMember = [
    {
        type:"list",
        message:"What team member do you want to add?",
        choices: ["Manager", "Engineer", "Intern"],
        name:"member",
    },
];

const additionalMember = [
    {
        type: "list",
        message: "Do you want to add another member?",
        choices: ["Manager", "Engineer", "Intern", "I'm done adding members"],
        name: "additionalMember",
    },
];

const ManagerQuestions = [
    {
        type: "input",
        message: "Enter Manager's name.",
        name: "ManagerName",
    },
    {
        type: "input",
        message: "Enter Manager's ID number.",
        name: "ManagerId",
    },
    {
        type: "input",
        message: "Enter Manager's email address.",
        name: "ManagerEmail",

    },
    {
        type: "input",
        message: "Enter Manager's office number.",
        name: "ManagerNumber",
    },
];

const EngineerQuestions = [
    {
        type: "input",
        message: "Enter Engineer's name.",
        name: "EngineerName",
    },
    {
        type: "input",
        message: "Enter Engineer's ID number.",
        name: "EngineerId",
    },
    {
        type: "input",
        message: "Enter Engineer's email address.",
        name: "EngineerEmail",
    },
    {
        type: "input",
        message: "Enter Engineer's Github username.",
        name: "EngineerGithub",
    },
];

const InternQuestions = [
    {
        type: "input",
        message: "Enter Intern's name.",
        name: "InternName",
    },
    {
        type: "input",
        message: "Enter Intern's Id number.",
        name: "InternId",
    },
    {
        type: "input",
        message: "Enter Intern's email address.",
        name: "InternEmail",
    },
    {
        type: "input",
        message: "Enter Intern's School Name.",
        name: "InternSchool",
    },
];

const buildTeamMember = () => {
    inquirer.prompt(teamMember).then((answer) => {
        if(answer.member === "Manager") {
            buildManager();
        } else if (answer.member === "Engineer") {
            buildEngineer();
        }else if (answer.member === "Intern") {
            buildIntern();
        }
    });
};

const buildManager = () => {
    inquirer.prompt(ManagerQuestions).then((answer) => {
        memberInfo.push(
            new Manager(
                answer.ManagerName,
                answer.ManagerId,
                answer.ManagerEmail,
                answer.ManagerNumber
            )
        );

        addMember();
    });
};

const buildEngineer = () => {
    inquirer.prompt(EngineerQuestions).then((answer) => {
        memberInfo.push(
            new Engineer(
                answer.EngineerName,
                answer.EngineerId,
                answer.EngineerEmail,
                answer.EngineerGithub
            )
        );

        addMember();
    });
};

const buildIntern = () => {
    inquirer.prompt(InternQuestions).then((answer) => {
        memberInfo.push(
            new Intern(
                answer.InternName,
                answer.InternId,
                answer.InternEmail,
                answer.InternSchool
            )
        );
        
        addMember();
    });
};

const addMember = () => {
inquirer.prompt(additionalMember).then((answer) => {
    switch (answer.additionalMember) {
        case "Manager":
            buildManager();
            break;

        case "Engineer":
            buildEngineer();
            break;

        case "Intern":
            buildIntern();
            break;
            
        default:
            writeHTML();
    }
});
};

const writeHTML = () => {
    fs.writeFile(outputPath, render(memberInfo), (err) =>
    err ? console.error("error") : console.log("Success")
    );
};