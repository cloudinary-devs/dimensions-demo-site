const PRODUCTS = {
	"napkin-holder": {
		"image": "3d-Radici-15-3-2024$radici-napkin-holder-1713185475635-preset-image",
		"video": "3d-Radici-15-3-2024$radici-napkin-holder-1713185475635-preset-video",
		"spinset": "3d-Radici-15-3-2024$radici-napkin-holder-1713185475635-preset-spinset",
	},
	"gym-bike": {
		"image": "3d-Gym-Bike-20-10-2024$gym-bike-1732110858855-preset-image",
		"video": "3d-Gym-Bike-20-10-2024$gym-bike-1732110858855-preset-video",
		"spinset": "3d-Gym-Bike-20-10-2024$gym-bike-1732110858855-preset-spinset",
	},
	"purse": {
		"image": "3d-Purse-10-3-2024$purse-1712748673704-preset-image",
		"video": "3d-Purse-10-3-2024$purse-1712748673704-preset-video",
		"spinset": "3d-Purse-10-3-2024$purse-1712748673704-preset-spinset",
	}
};

function getQueryParam(param) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
}

window.addEventListener("load", () => {
	// Read product name from query string
	const productName = getQueryParam("product");

	// Get the product data
	const product = PRODUCTS[productName];

	if (!product) {
		console.error(`Product ${productName} not found`);
		return;
	}

	// Prepare media assets array based on available product properties
	const mediaAssets = [];

	if (product.image) {
		mediaAssets.push({
			tag: product.image,
		});
	}

	if (product.video) {
		mediaAssets.push({
			tag: product.video,
			mediaType: "video",
		});
	}

	if (product.spinset) {
		mediaAssets.push({
			tag: product.spinset,
			mediaType: "spin",
		});
	}

	// Initialize gallery widget
	const myGallery = cloudinary.galleryWidget({
		container: "#pgw-container",
		cloudName: "d8s-demo-site",
		mediaAssets,
	});

	// Render the gallery
	myGallery.render();
});

