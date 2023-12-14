# Dimensions Demo Website

This repository contains the code to run the [Dimensions Demo website](https://demo.dimensions.cloudinary.com).

## Running

To run this website locally:

- Clone this repository

- Load index.html directly in your browser or serve it with a utility such as [http-server](https://www.npmjs.com/package/http-server):

```bash 
git clone https://github.com/cloudinary-devs/dimensions-demo-site.git

npm install -g http-server

http-server dimensions-demo-site
```

> any other equivalent util would work as well

### Assets

Note that the 3D Models and images are loaded from our demo account. 
If you'd like to test the site with your own assets, you'd need to:

1. Register your (free) account at: https://dimensions.cloudinary.com
2. Upload 1 or more models and [generate](https://www.welcome.dimensions.cloudinary.com/post/generating-artifacts) assets from them
3. Update the product IDs in the PRODUCTS_INFO array (product.js)
4. Update the template names in each of the product objects (product.js)
5. Change to your account name in the `initDimensions` call config (product.js)

More information on how to integrate Dimensions with your website can be found here: https://www.welcome.dimensions.cloudinary.com/post/set-website-integration 

## Dimensions by Cloudinary

[Dimensions](https://dimensions.cloudinary.com) is a turnkey product by [Cloudinary](https://cloudinary.com) for developers, designed to create and deliver engaging 3D immersive experiences while increasing content velocity.

With Dimensions, developers can implement the following functionalities at scale using an API:

Generate and serve product image and video creatives derived from the product's 3D model.
Enable consumers to explore products with an immersive 3D experience by generating and serving a 3D viewer widget.
Enable consumers to explore products using an augmented reality immersive experience.

