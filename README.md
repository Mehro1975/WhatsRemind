
# What is WhatsRemind?
WhatsRemind is a full-stack web application I built to solve a simple problem: creating reminders that are hard to ignore. Instead of relying on app notifications or emails, it sends reminders directly to a user's WhatsApp, a platform they use constantly.
WhatsRemind is a WhatsApp reminder bot that lets users schedule and receive reminders through Twilio's APIs. It uses ReactJS, ExpressJS, and MongoDB to create an intuitive interface, ensure reliable message delivery, and store reminder data. It simplifies staying organized and helps users remember important events.


## 📝 Usage

✔️ Message Reminder Received on WhatsApp <br>

✔️ Creating Different Reminders <br>


## 🔥 Features

- Schedule reminders for any time and date
- Receive reminders through WhatsApp
- Customize reminder messages

## 👨🏻‍💻 Tech Stack

WhatsRemind is built using the following technologies:

- [React.js](https://react.dev/) - front-end JavaScript library for building user interfaces
- [Node.js](https://nodejs.org/) - a cross-platform server environment
- [Express.js](https://expressjs.com/) - web application framework for building RESTful APIs
- [Twilio API]() - a programmable communication tools
- [MongoDB](https://www.mongodb.com/) - a NoSQL database
- [Bootstrap](https://getbootstrap.com//) - a CSS framework

## 🏁 Quickstart

### 🛠️ Starting Backend

1. Clone this repository.
2. Navigate to the ` WhatsRemind/backend` directory using the command line: `cd WhatsRemind/backend`
3. Rename the `.env-example` file to `.env` and fill it properly with the following environment variables:

   To fill in the `.env` file with the appropriate values, follow the instructions below:

   - `PORT=` : Set the value to the port number you want your application to run on. For example, you can use `PORT=3000` to run your application on port 3000.

   - `ACCOUNT_SID=` : Replace this with your Twilio Account SID. You can obtain this value from your Twilio account dashboard.

   - `AUTH_TOKEN=` : Provide your Twilio Account Auth Token. Similar to the Account SID, you can find this in your Twilio account dashboard.

   - `MY_PHONE_NUMBER=` : Insert your WhatsApp phone number here. This should be the phone number on which you want to recieve WhatsApp reminder messages.

   - `MONGOURI=` : Add the connection link to your MongoDB database.

   Remember to save the `.env` file after filling in the values.

4. Now Inside the `backend` directory, install the required dependencies by running the following command: `npm install`
5. Start the backend server by executing: `npm start`

### 🖥️ Starting Frontend

1. Clone this repository.
2. Navigate to the `WhatsRemind/frontend` directory using the command line: `cd WhatsRemind/frontend`
3. Inside the `frontend` directory, install the required dependencies by running the following command: `npm install`
4. Navigate to the `src` directory using the command line: `cd src`
5. Open the `config.js` file and replace the `API_URL` with the link where your backend server is running with out `/` on end.
6. Start the frontend application by executing the following command: `npm start`


Don't forget to leave a star ⭐️.
