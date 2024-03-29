<p align="center">
  <h1 align="center">Gamopedia Backend</h1>

  <p align="center">
    <h3 align="center">The Backend code of Gamopedia web app</h3>
    <p align="center" >
      <a href="https://gamopedia.siddhantkumarsingh.me/">Live Demo</a>
    </p>
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<p  align="center">
  <img align="center" src="https://github.com/Geralt-Of-Rivia-Witcher/Gamopedia_Backend/blob/master/images/screenshot.PNG">
</p>
<br />
<br />

This is the backend code for the Gamopedia Web app. It's like an encyclopedia for video games where you can get detailed information about any video game you want. Information includes Developer, Publisher, release date, Stores, Screenshots, etc.
<br />
<br />
The information is fetched from <a href="https://rawg.io/apidocs">RAWG Video Game Database</a> through an API request.

### Built With
[<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white">](https://nodejs.org/en/)
[<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">](https://expressjs.com/)
<br />


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm

### Installation

1. Get a free API Key at [RAWG Video Game Databse](https://rawg.io/login?forward=developer)

2. Clone the repo
   ```sh
   git clone https://github.com/Geralt-Of-Rivia-Witcher/Gamopedia_Backend
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Ceate a `.env` file and enter your API in it.
   ```JS
   API_KEY = 'ENTER YOUR API'
   ```
5. Start the server
   ```JS
   node app.js
   ```
   The server will listen on PORT `5000`.



<!-- USAGE EXAMPLES -->
## Usage

The Frontend code will send a `post` request to this backend to get the game info.



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b branch_name`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin branch_name`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact

[<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">](https://www.linkedin.com/in/siddhant-kumar-singh-/) [<img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></img>](mailto:singhsiddhantkumar@gmail.com)
