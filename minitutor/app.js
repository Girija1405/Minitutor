function startLesson() {
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const subject = document.getElementById("subject").value;
  const outputDiv = document.getElementById("output");

// Clear previous output
outputDiv.innerHTML = "";

// Validate input
if (!name.trim() || !/^[a-zA-Z\s]+$/.test(name) || isNaN(age) || age < 4 || age > 10) {
    outputDiv.innerHTML = `<p>Please enter a valid name and age between 4 and 10.</p>`;
    return;
}

  let lesson = "";
  let funFact = "";
  let quiz = "";

  switch (subject) {
    case "ABCs":
      lesson = `Hi ${name}! Let's learn the letter <b>B</b>. B is for <b>Ball</b>! 🎈`;
      funFact = "Did you know? The letter B comes second in the alphabet!";
      quiz = "Can you name another word that starts with B?";
      break;

    case "Math":
      lesson = `Hello ${name}! Let's practice counting: <b>1, 2, 3, 4, 5</b>`;
      funFact = "Fun fact: Zero (0) was invented in India!";
      quiz = "What comes after 5?";
      break;

    case "Animals":
      lesson = `Hi ${name}! Today's animal is the <b>Elephant</b> 🐘. It is the biggest land animal!`;
      funFact = "Elephants use their trunks to breathe, drink, and even say hello!";
      quiz = "Can you mimic an elephant sound?";
      break;

    case "Shapes":
      lesson = `Hey ${name}! This is a <b>Triangle</b> 🔺. It has 3 sides.`;
      funFact = "Pizza slices are often shaped like triangles!";
      quiz = "Can you find something triangular near you?";
      break;

    case "GK":
      lesson = `Hey ${name}! Let's learn: The Sun 🌞 is a big star that gives us light and heat.`;
      funFact = "The Sun is so big that about 1.3 million Earths could fit inside it!";
      quiz = "Can you draw the Sun with crayons?";
      break;

    default:
      lesson = "Please pick a subject!";
      break;
  }

  outputDiv.innerHTML = `
    <h3>📘 Lesson</h3>
    <p>${lesson}</p>
    <h3>🎉 Fun Fact</h3>
    <p>${funFact}</p>
    <h3>❓ Mini Quiz</h3>
    <p>${quiz}</p>
  `;
}
