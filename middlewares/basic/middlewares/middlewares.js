function kidneyCheck(req, res, next) {
  const kidney = req.query.kidney;

  if (!(kidney == 1 || kidney == 2)) {
    res.send("invalid kidney ware sent");
    return;
  }
  next();
}
function userValidation(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (!(username == "jayesh" && password == "123")) {
    res.send("not the real user");
    return;
  }
  next();
}

function ticketCheck(req, res, next) {
  const age = req.query.age;
  if (age < 18) {
    res.send("you are not allow");
    return;
  }
  next();
}
let numberOfRequest = 0;
function calculateRequest(req, res, next) {
  numberOfRequest += 1;
  console.log(numberOfRequest);
  next();
}
let totalTime = 0;
let requestCount = 0;
function checkAvarageTime(req, res, next) {
  const startTime = Date.now(); // Record the start time

  res.on("finish", () => {
    // Event fired when the response is sent
    const endTime = Date.now(); // Record the end time
    const duration = endTime - startTime; // Calculate duration
    totalTime += duration;
    requestCount += 1;
    console.log(`Request took ${duration} ms`);
  });
  next();
}
export {
  kidneyCheck,
  userValidation,
  ticketCheck,
  calculateRequest,
  checkAvarageTime,
};
