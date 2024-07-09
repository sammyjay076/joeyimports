**JoeyImports App**
**Overview**
This is a fully functional shopping application built with React Native. The application allows users to browse a variety of products, view detailed information, and navigate seamlessly through different screens. The product data is dynamically fetched using the Timbu Cloud API.

**Features**
Home Screen: Displays a background image and a horizontal flatlist showcasing a selection of products.
View All Products Button: Navigates the user to the home screen where all products are displayed.
Product Listings: Each product is displayed with its name, price, and image.
Product Details: Clicking on a product navigates the user to a detailed view page with a description of the selected product.
Data Fetching: Products are pulled from the Timbu Cloud API, with all products created on the developer's account.
**Screens**
**First Page:**
Background image.
Horizontal flatlist of featured products.
"View All Products" button.
**Home Screen:**
Displays a comprehensive list of all products.
Each product shows a name, price, and image.
Products are clickable, leading to a detailed view.
**Product Details Page:**
Displays detailed information about the selected product, including its name, price, image, and description.
Technologies Used
React Native: Framework for building native apps using React.
Timbu Cloud API: Service used to fetch product data.

**Installation**
1. Clone repository
   git clone https://github.com/sammyjay076/joeyimports.git
2. Navigate to Project directory
   cd joeyimports
3. Install the dependencies
   npm install

**Usage**
1. Run the application
npm start
2. Open the project in your preferred emulator or connected device:
npm run android   # For Android
npm run ios       # For iOS

**API Integration**
Timbu Cloud API: All product data is fetched from Timbu Cloud. Ensure you have an account and products set up on Timbu.
**Contributions**
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.
