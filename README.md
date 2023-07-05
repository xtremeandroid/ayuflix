# Simple Movie Website Made using React (uses TMDB API)
The Simple Movie Website is a user-friendly application built using React, a popular JavaScript library for building user interfaces. The website utilizes the TMDB API, which provides access to a vast database of movies, including their details and posters.

The primary function of this movie website is to allow users to search for their favorite movies. Users can enter the title of a movie in the search bar, and the website will make a request to the TMDB API to retrieve relevant movie results. The results are then displayed in an organized manner, showing the movie title, year of release, and a poster thumbnail.

The design of the Simple Movie Website is clean and minimalistic, with a focus on providing a seamless user experience. The search bar is prominently placed at the top of the page, allowing users to quickly find the movies they are looking for. The movie results are presented in a visually appealing grid layout, making it easy for users to browse through the available options.

Overall, the Simple Movie Website is an efficient and straightforward application that leverages React and the TMDB API to provide users with a convenient platform for searching movies. Whether you're looking for information about a specific movie or want to explore new titles, this website offers a streamlined experience, ensuring that movie enthusiasts can find the information they need quickly and effortlessly.

## Try Yourself
https://ayuflix.netlify.app/

## Used Libraries
* React
* Axios
* styled-components

## Getting Started

### Prerequisites
To run this application, you will need to have Node.js and npm installed on your system.

### Installation

Clone the repository to your local machine:
```bash
git clone https://github.com/xtremeandroid/ayuflix.git
```
Navigate to the project directory:
```bash
cd ayuflix
```
Install the required packages:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```

## Docker Deployment
You can deploy Ayuflix using Docker to containerize the application. Follow the steps below to get started:

### Prerequisites
Make sure you have Docker installed on your system. You can download and install Docker from the official website: https://www.docker.com.

### Building the Docker Image
Clone the Ayuflix repository:

```bash
git clone https://github.com/xtremeandroid/ayuflix.git
```

Change into the project directory:

```bash
cd ayuflix
```

Build the Docker image using the provided Dockerfile:

```bash
docker build -t ayuflix-app .
```
This command will build the Docker image and tag it as ayuflix-app. The -t flag is used to specify the image name.

### Running the Docker Container
Once the Docker image is built, you can run the Ayuflix application in a Docker container:

```bash
docker run -p 5173:5173/tcp ayuflix-app
```
The -p flag maps port 5173 from the container to the same port on your local machine. You can access the Ayuflix application by visiting http://localhost:5173 in your web browser.

## Screenshots
![brave_DZgCRZRdhN](https://github.com/xtremeandroid/ayuflix/assets/62198074/ec888bba-71ff-4cfe-a451-07592a4173ee)
![brave_bHq9VtdNup](https://github.com/xtremeandroid/ayuflix/assets/62198074/da579266-4884-4d10-a296-0bf7063c8963)
![brave_nj74FGw18U](https://github.com/xtremeandroid/ayuflix/assets/62198074/0d1c38d0-a8ee-483a-8819-b025e0b57ced)
![brave_TTURQft6Yj](https://github.com/xtremeandroid/ayuflix/assets/62198074/84bc3a1d-8cf8-4637-872d-b9df5a5bfbfb)

