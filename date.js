const fulldate = new Date();

const day = fulldate.getDay();

const time = fulldate.getTime();

const year = fulldate.getFullYear();

const month = fulldate.getMonth() + 1;

const date = fulldate.getDate() + 1;

const hour = fulldate.getHours();

const tomorrow = () => {
  console.log("Tomorrow is " + year + "/" + month + "/" + date);
};

const today = () => {
  console.log("Today is " + year + "/" + month + "/" + date);
};

const a = () => {
  console.log("this a funciton");
};
<<<<<<< HEAD
=======

spellName("Ray");

const b = () => {
  console.log("b");
};
>>>>>>> c5f7e852eb435b3ebae561dd25e0d9b03ddc19c4
