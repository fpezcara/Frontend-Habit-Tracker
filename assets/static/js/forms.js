const main = document.querySelector("main");

const renderLoginForm = () => {
  const fields = [
    {
      tag: "input",
      attributes: {
        type: "email",
        name: "email",
        placeholder: "Enter your email address",
        id: "email",
      },
      label: "Email",
    },
    {
      tag: "input",
      attributes: {
        type: "password",
        name: "user_password",
        placeholder: "Enter your password",
        id: "password",
      },
      label: "Password",
    },
    {
      tag: "input",
      attributes: {
        type: "submit",
        value: "Login",
      },
    },
  ];

  const formContainer = document.createElement("div");
  formContainer.className = "signup-box";
  const form = document.createElement("form");
  const h2 = document.createElement("h2");
  h2.textContent = "Enter your details";
  formContainer.append(h2, form);

  fields.forEach(({ tag, attributes, label: labelText }) => {
    const field = document.createElement(tag);
    const label = document.createElement("label");
    label.textContent = labelText;
    const fieldContainer = document.createElement("div");
    fieldContainer.className = "user-box";
    Object.entries(attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      labelText
        ? fieldContainer.append(field, label)
        : fieldContainer.appendChild(field);

      if (v === "submit") {
        fieldContainer.innerHTML = `<span></span>
            <span></span>
            <span></span>
            <span></span>`;
      }
    });
    form.appendChild(fieldContainer);
  });

  form.addEventListener("submit", requestLogin);
  main.appendChild(formContainer);
};

const renderRegistrationForm = () => {
  const fields = [
    {
      tag: "input",
      attributes: {
        type: "email",
        name: "email",
        placeholder: "Enter your email",
      },
    },
    {
      tag: "input",
      attributes: {
        type: "text",
        name: "firstname",
        placeholder: "Enter your first name",
      },
    },
    {
      tag: "input",
      attributes: {
        type: "text",
        name: "lastname",
        placeholder: "Enter your last name",
      },
    },

    {
      tag: "input",
      attributes: {
        type: "password",
        name: "user_password",
        placeholder: "Password",
      },
    },
    // {
    //   tag: "input",
    //   attributes: {
    //     type: "password",
    //     name: "passwordConfirmation",
    //     placeholder: "Confirm Password",
    //   },
    // },
    { tag: "input", attributes: { type: "submit", value: "Register" } },
  ];
  const formContainer = document.createElement("div");
  formContainer.className = "signup-box registrationContainer";
  const form = document.createElement("form");
  const h2 = document.createElement("h2");
  h2.textContent = "Enter your details";
  formContainer.append(h2, form);

  fields.forEach(({ tag, attributes, label: labelText }) => {
    const field = document.createElement(tag);
    const label = document.createElement("label");
    label.textContent = labelText;
    const fieldContainer = document.createElement("div");
    fieldContainer.className = "user-box";
    Object.entries(attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      labelText
        ? fieldContainer.append(field, label)
        : fieldContainer.appendChild(field);

      if (v === "submit") {
        fieldContainer.innerHTML = `<span></span>
            <span></span>
            <span></span>
            <span></span>`;
      }
    });
    form.appendChild(fieldContainer);
  });

  form.addEventListener("submit", requestRegistration);
  main.appendChild(formContainer);
};

const renderHabitsForm = () => {
  const fields = [
    {
      tag: "input",
      attributes: {
        type: "text",
        name: "newHabit",
        placeholder: "Enter new habit",
        id: "newHabit",
      },
    },
    // { tag: "label", for: "newHabit" },
    {
      tag: "input",
      attributes: {
        type: "number",
        name: "nOfRepetitions",
        placeholder: "Enter number of repetitions",
        id: "nOfRepetitions",
      },
    },
    {
      tag: "input",
      attributes: {
        type: "date",
        id: "initialDate",
        name: "end_date",
        class: "datePicker",
      },
      label: { text: "Start Date", for: "initialDate" },
    },
    {
      tag: "input",
      attributes: {
        type: "date",
        id: "endDate",
        name: "end_date",
        class: "datePicker",
      },
      label: { text: "End Date", for: "endDate" },
    },
    {
      tag: "input",
      attributes: { type: "submit", value: "Add new habit", id: "submit" },
    },
  ];

  const formContainer = document.createElement("div");
  formContainer.className = "signup-box newHabitContainer";
  const form = document.createElement("form");
  const h2 = document.createElement("h2");
  h2.textContent = "Create a new habit";
  formContainer.append(h2, form);
  fields.forEach(({ tag, attributes, label }) => {
    const field = document.createElement(tag);
    const fieldContainer = document.createElement("div");
    const labelTag = document.createElement("label");

    fieldContainer.className = "user-box";
    Object.entries(attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      fieldContainer.appendChild(field);
      form.appendChild(fieldContainer);
      if (label) {
        labelTag.textContent = label.text;
        Object.entries(label).forEach(([a, v]) => {
          a === "for" && labelTag.setAttribute(a, v);
        });
      }
    });

    label && fieldContainer.appendChild(labelTag);
  });

  form.addEventListener("submit", createNewHabit);
  main.appendChild(formContainer);
};

const renderHabits = () => {
  main.innerHTML = `
  <div class="signup-box habits">
    <h2>Your Goals!</h2>

        <p>Habit:</p>
        <p class="habit-name">Water Intake</p><br>

        <p>Goal:</p>
        <p class="habit-goal">5 Cups Per Day</p><br>

        <p>How Long For:</p>
        <p class="habit-duration">A Week</p><br>

        <p>How's Today Looking?</p>
        <p class="habit-amount">3 Cups</p>
   </div>
 
   <a href="#new-habit" id="new-habit">new habit</a>
  
  `;
};

const render404 = () => {
  const error = document.createElement("h2");
  error.textContent = "Oops, we can't find that page sorry!";
  main.appendChild(error);
};

const renderProfile = () => {
  main.innerHTML = `
  <h2>Welcome to your profile!</h2>
  <p>Profile information</p>
  `;
};

const navBar = document.querySelector(".links");
function updateNav() {
  navBar.innerHTML = `
  <li><a href="#home" class="sign-up">Home</a></li>
  <li><a href="#profile" class="sign-up">Profile</a></li>
  <li><a href="#logout" class="logout">Logout</a></li>
  `;
}

const login = (data) => {
  console.log("adaaaa", data);
  // localStorage.setItem('username', data.user);
  // const payload = jwt_decode(data.token);
  // console.log(data);
  // console.log(payload);
  // localStorage.setItem("token", data.token);
  // localStorage.setItem("username", payload.username);
  // localStorage.setItem("email", payload.email);
  console.log(data);
  updateNav();
  location.hash = "#home";
};

const logout = () => {
  // localStorage.clear();
  location.hash = "#login";
  navBar.innerHTML = `
  <li><a href="#login" class="login">Login</a></li>
  <li><a href="#signup" class="sign-up">Sign Up</a></li>
  `;
};

const currentUser = () => {
  // const username = localStorage.getItem("username");
  //return username;
};
