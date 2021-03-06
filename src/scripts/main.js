const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const createStudentComponent = (obj) => {
    return `
        <div class="student">
            ${element("h1", obj.name, "xx-large passing")}
            ${element("section", obj.subject, "bordered dashed section--padded")}
            ${element("aside", obj.info, "pushRight")}
        </div>
    `
}

// const h1 = (obj) => {
//     return `<h1 class="xx-large ${obj.score < 60 ? 'failing' : 'passing'}">${obj.name}</h1>`
// }

// const section = (obj) => {
//     return `<section class="bordered dashed section--padded">${obj.subject}</section>`
// }

// const aside = (obj) => {
//     return `<aside class="pushRight">${obj.info}</aside>`
// }

const element = (component, content, classVal) => {
    return `<${component} class="${classVal}">${content}</${component}>`
};

const studentContainer = document.querySelector("#container");

for (let i = 0; i < students.length; i++) {
    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(student);
}