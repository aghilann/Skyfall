<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Skyfall</h3>

  <p align="center">
    A way to record legacy videos to be sent to your loved ones AND send scheduled recoded video messages.
    <br />
    <br />
    <br />
    <a href="https://lucent-bubblegum-e9911a.netlify.app/">View Production Site</a>
    ·
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

 A dashboard to view your expenses, the value of your investments and the diversity of your portfolio.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Express.js](https://mantine.dev/)
* [Postgres](https://mantine.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Microsft Azure](https://mantine.dev/)
* [Mantine](https://mantine.dev/)
* [Redux Toolkit](https://supabase.com/)
* [Redux Toolkit Query](https://supabase.com/)
* [Framer Motion](https://supabase.com/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Ensure you have the latest version of NodeJS and npm installed. This project uses Vite so some of the commands you may be used to would be different.

### Installation

1. Clone the repo
   ```sh
   [git clone https://github.com/aghilann/Finance-Tracker.git](https://github.com/aghilann/Skyfall/)
   ```
2. Configure the Enviroment Variables for Postgres and the Azure Blob
   ```sh
   PROCESS.ENV = <yourKey>
   ```
3. Install the depencies `config.js`
   ```sh
   cd server
   npm install
   cd ..
   cd client
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap
- [x] Set Up Database
  - [x] Spent time researching how much info should really be in a user table and what should be relational
  - [x] Setup the Postgres server in Microsoft Azure along with it's resource group 

- [x] Set Up Server
  - [x] Set up TS for ExpressJS
  - [x] Setup ESLint and Prettier
  - [x] Created a Postgres DB on Azure and connected it to server
  - [x] Organized files into MVC design pattern - no views since backend functions as Restful JSON API
  - [x] Created Routes and Controllers for Sign-Up and Sign-in with Error Handling for every unqique sitation (eg. user with email exists) 
- [x] Setting up Client
  - [x] Created Vite Project and setup Mantine
  - [x] Established different Routes with React Router
  - [x] Set up Redux and RTK Query Boilerplate
  - [x] Used Framer Motion to animate these routers to add a transition between pages.
- [x] Hard Work Begins
  - [x] Got a prebuilt Navigation Bar from Mantine UI but heavily edited it to handle re-routing and added mobile responsiveness with Media Queries
  - [x] Set up the Sign-Up Sign-In Page, most of the work was connecting the UI to server. Done with native fetch and async await, not RTK Query
  - [x] Set up a singular routes for legacies, created a table for legacies with a foreign key constraint to users
  - [x] With the getLegacy route established, begun work on stateful table with fully mutable data - data fetched using RTK Query
   - [] This task is proving to be very difficult, multiple more routes most be created, decisions must be made on when to call the API 
   - [] Need to add the ability for users to add files and send it directly from the client to the Azure Blob   

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Aghilan Nathan - nathanaghilan@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
