
News App
Overview
This is a simple React application that fetches news articles from the News API based on categories or search terms entered by the user. It allows users to browse news articles in various categories such as General, Business, Sports, Science, Technology, Health, and Entertainment. Users can also search for specific news articles using keywords.

Installation
Clone the repository:
bash
Copy code
git clone https://github.com/emeka007/news-app.git
Navigate into the project directory:
bash
Copy code
cd news-app
Install dependencies:
Copy code
npm install
Create a .env file in the root directory and add your News API key:
makefile
Copy code
REACT_APP_NEWS_API_KEY=api_key
Usage
Run the application:
sql
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to view the application.
Features
Browse news articles by category.
Search for news articles using keywords.
Filter news articles by language and sort them by date published, relevancy, or popularity.
Pagination to navigate through multiple pages of news articles.
Technologies Used
React
React Bootstrap
News API
JavaScript
CSS
File Structure
src/components: Contains React components for the application UI.
src/hooks: Contains custom hooks used in the application.
.env: Stores environment variables, including the News API key.
README.md: Documentation for the project.
Contributing
Contributions are welcome! Please open an issue or submit a pull request with any improvements or fixes.

License
This project is licensed under the MIT License.

Credits
This project was created by Chukwuemeka Obanya.

