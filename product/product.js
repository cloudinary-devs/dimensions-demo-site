let ZOOM_IMAGE_URL;
const PRODUCTS_INFO = {
	"w-123": {
		title: "Hand Watch",
		description: "Embrace timeless elegance with our leather band hand watch. The epitome of sophistication, it seamlessly combines classic design with modern functionality. A wrist essential for those who appreciate the art of precision and style.",
		price: "$250.00",
		preset: "p-watch1",
		templates: ["watch-front", "watch-right", "watch-front-right", "watch-front-left"], //, "watch-back"],
	},
	"p-667": {
		title: "Laptop Pro Model",
		description: "Elevate your productivity with our cutting-edge laptop, seamlessly blending power and portability. Crafted with precision, it boasts a sleek design, vibrant display, and lightning-fast performance to meet your every digital need.",
		price: "$590.00",
		preset: "p-laptop",
		templates: ["laptop-front", "laptop-right", "laptop-left", "laptop-top"], //, "laptop-back"],
	},
	"f-567-g": {
		title: "Gaming Chair 2024",
		description: "Immerse yourself in gaming nirvana with our ergonomic gaming chair. Designed for comfort and performance, it offers adjustable features, lumbar support, and a sleek aesthetic to enhance your gaming experience. Conquer virtual worlds in style and comfort.",
		price: "$150.00",
		preset: "p-chair",
		templates: ["chair-front", "chair-front-right", "chair-front-left", "chair-back"], //, "chair-zoom"],
	},
	"a-123cm": {
		title: "Automatic Coffee Machine",
		description: "Indulge in the art of coffee with our automatic coffee machine. Effortlessly brew barista-quality coffee at the touch of a button, bringing the cafe experience into the comfort of your home. Start your day with the perfect cup, every time.",
		price: "$340.00",
		preset: "p-appliance",
		templates: ["appliance-port-front", "appliance-port-front-right", "appliance-port-front-left", "appliance-port-back"], // "appliance-port-top"],
	},
	"f-123b": {
		title: "Lounge Armchair",
		description: "Transform your space into a haven of relaxation with our plush lounge armchair. Sink into luxury as the ergonomic design cradles you in comfort. Whether reading a book or unwinding after a long day, this armchair is the epitome of leisure.",
		price: "$450.00",
		preset: "furniture-portrait",
		templates: ["furniture-port-front", "furniture-port-front-right", "furniture-port-front-left", "furniture-port-left"], // "furniture-port-front-zoom"
	},
	"b-999": {
		title: "Luxury Bag",
		description: "Unleash your style with our exquisite luxury bag, a fusion of elegance and functionality. Meticulously crafted from premium materials, it's the perfect companion for the discerning individual who demands both fashion and practicality.",
		price: "$700.00",
		preset: "p-bag",
		templates: ["bag-front", "bag-front-right", "bag-front-left", "bag-back"], // "bag-zoom"],
	},
	"barber-2": {
		title: "Barber Chair",
		description: "A chair like no other",
		price: "$1100.00",
		preset: "barber-chair-2-1711971466758-preset",
		templates: ["furniture-port-front", "furniture-port-front-right", "furniture-port-left", "furniture-port-front-left"],
		config: {
			"Fabric": {
				mesh: "Scene_1.Barber_Chair002_Baked003",
				textures: [
					{
						name: "cream",
						preview: "#e0ddd5",
						texture: {
							reset: true,
						}
					},
					{
						name: "blue",
						preview: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto,w_100/v1711385643/demo-site-assets/barber-chair-textures/fabric/Blue/Barber_Chair_Blue_Map_dp5rbh.jpg",
						texture: {
							url: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/v1711385643/demo-site-assets/barber-chair-textures/fabric/Blue/Barber_Chair_Blue_Map_dp5rbh.jpg",
							roughnessUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/v1711385638/demo-site-assets/barber-chair-textures/fabric/Blue/Barber_Chair_Blue_Roughness_dynqki.jpg",
							textureParams: {
								repeat: 1,
								flipY: false,
							},
							materialParams: {
								roughness: 1,
							},
						},
					},
					{
						name: "beige",
						preview: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto,w_100/v1711385635/demo-site-assets/barber-chair-textures/fabric/Beige/Barber_Chair_Beige_Map_pglcaj.jpg",
						texture: {
							url: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/v1711970817/demo-site-assets/barber-chair-textures/fabric/Beige/Barber_Chair_Beige_Map_pglcaj.jpg",
							roughnessUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/v1711970835/demo-site-assets/barber-chair-textures/fabric/Beige/Barber_Chair_Beige_Roughness_bxgco9.jpg",
							textureParams: {
								repeat: 1,
								flipY: false,
							},
							materialParams: {
								roughness: 1,
							},
						},
					},
					{
						name: "brown",
						preview: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto,w_100/v1711385635/demo-site-assets/barber-chair-textures/fabric/Brown/Barber_Chair_Brown_Map_u2yj5q.jpg",
						texture: {
							url: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/v1711385635/demo-site-assets/barber-chair-textures/fabric/Brown/Barber_Chair_Brown_Map_u2yj5q.jpg",
							roughnessUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/v1711385642/demo-site-assets/barber-chair-textures/fabric/Brown/Barber_Chair_Brown_Roughness_zx9ket.jpg",
							textureParams: {
								repeat: 1,
								flipY: false,
							},
							materialParams: {
								roughness: 1,
							},
						},
					},
					{
						name: "grey",
						preview: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto,w_100/v1711385635/demo-site-assets/barber-chair-textures/fabric/Grey/Barber_Chair_Grey_Map_bivtvc.jpg",
						texture: {
							url: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/v1711385641/demo-site-assets/barber-chair-textures/fabric/Grey/Barber_Chair_Grey_Map_bivtvc.jpg",
							roughnessUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/v1711385636/demo-site-assets/barber-chair-textures/fabric/Grey/Barber_Chair_Grey_Roughness_hx2hwg.jpg",
							textureParams: {
								repeat: 1,
								flipY: false,
							},
							materialParams: {
								roughness: 1,
							},
						},
					},
				],
			},
			"Legs": {
				mesh: "Scene_1.Barber_Chair013_Baked001.Barber_Chair013",
				textures: [
					{
						name: "metal",
						preview: "#b6b5b4",
						texture: {
							reset: true,
						}
					},
					{
						name: "wood",
						preview: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto,w_100/v1711385643/demo-site-assets/barber-chair-textures/legs/Wood/Wood_Map_flth30.jpg",
						texture: {
							url: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/v1711972581/demo-site-assets/barber-chair-textures/legs/Wood/Wood_Map_flth30.jpg",
							roughnessUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/v1711972575/demo-site-assets/barber-chair-textures/legs/Wood/Wood_Roughness_ydsxzu.jpg",
							normalUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/v1711972587/demo-site-assets/barber-chair-textures/legs/Wood/Wood_Normal_e1ysmo.png",
							materialParams: {
								color: [""],
							}
						},
					},
					{
						name: "blue sand",
						preview: "#072048",
						texture: {
							url: "reset",
							normalUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/v1711972595/demo-site-assets/barber-chair-textures/legs/White%20Sand/White_Sand_Normal_lidn6a.jpg",
							roughnessUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/v1711972568/demo-site-assets/barber-chair-textures/legs/White%20Sand/White_Sand_Roughness_dsydib.jpg",
							materialParams: {
								color: ["rgb(87, 114, 157)"],
							}
						}
					},
					{
						name: "red sand",
						preview: "#c50c45",
						texture: {
							url: "reset",
							normalUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/v1711972595/demo-site-assets/barber-chair-textures/legs/White%20Sand/White_Sand_Normal_lidn6a.jpg",
							roughnessUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/v1711972568/demo-site-assets/barber-chair-textures/legs/White%20Sand/White_Sand_Roughness_dsydib.jpg",
							materialParams: {
								color: ["rgb(218,46,46)"],
							}
						}
					}
				],
			},
		},
	},
};

const sku = window.location.search
	.replace("?", "")
	.split("&")
	.map((pair) => pair.split("="))
	.filter(([key, value]) => key === "sku")?.[0]?.[1];

if (!sku) {
	console.error("No product SKU present in the URL!!!");
} else {
	setProductInfo(sku);
	prepareHTML(sku);
	runDimensions(sku);
	preloadProductZoomImage(sku);
	showConfigurator(sku);
}

function runDimensions(id) {
	if (!id) {
		return;
	}

	document.getElementById("three-d-viewer")?.setAttribute("data-d8s-id", id);
	document.querySelectorAll("div.product-image")
		?.forEach((img) => img.setAttribute("data-d8s-id", id));

	const d8sApi = window._d8sApi = window.initDimensions({
		account: "demo-site",
		// account: "cloudinary-dimensions",
		viewers: [
			window.initDimensions.VIEWERS.IMAGE,
			// window.initDimensions.VIEWERS.VIDEO,
			window.initDimensions.VIEWERS.THREE_D,
		],
		imageViewer: {
			params: {},
			className: "my-ecomm-image",
		},
		// videoViewer: {
		// 	params: {
		// 		autoplay: true,
		// 		volume: 0,
		// 		loop: true,
		// 	},
		// 	className: "my-ecomm-video",
		// },
		threeDViewer: {
			viewer: {
				controls: {
					position: "center",
				},

				showLoadingProgress: false,

				renderer: {
					debug: {
						// printStructure: true,
					},
				},

				// appUrl: "http://localhost:9000/",
			},
		},
		// baseUrl: "https://res.cloudinary.com/",
	});

	const unregister = d8sApi?.on((event, ...args) => {
		const data = args[0];
		if (data?.type === "MODEL_LOADED") {
			document.getElementById("three-d-container")?.classList.add("show");
		}
	});
	//unregister(); call to remove listener
}

function prepareHTML(sku) {
	const { preset, templates } = PRODUCTS_INFO[sku];
	const elements = document.getElementsByClassName("2d");
	const ZOOM_IMAGE_URL = `https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/f_auto,q_auto,dpr_2,w_1000/${sku}/${preset}/`;
	let idx = 0;

	for (const el of elements) {
		const zoomImageUrl = `${ZOOM_IMAGE_URL}${templates[idx]}`;
		el.setAttribute("data-d8s-preset", preset);
		el.setAttribute("data-d8s-name", templates[idx]);
		el.addEventListener("touchstart", setZoomImage(zoomImageUrl));
		el.addEventListener("mouseenter", setZoomImage(zoomImageUrl));
		idx++;
	}

	const previewImg = document.getElementById("three-d-preview");
	previewImg.setAttribute("data-d8s-preset", preset);
	previewImg.setAttribute("data-d8s-name", templates[0]);
}

function setProductInfo(id) {
	const desktopTitle = document.getElementById("title-desktop");
	const mobileTitle = document.getElementById("title-mobile");
	const description = document.getElementById("product-description");
	const price = document.getElementById("product-price");
	desktopTitle.innerHTML = PRODUCTS_INFO[id].title;
	mobileTitle.innerHTML = PRODUCTS_INFO[id].title;
	description.innerHTML = PRODUCTS_INFO[id].description;
	price.innerHTML = PRODUCTS_INFO[id].price;
}

function preloadProductZoomImage(id) {
	setTimeout(() => {
		const { preset, templates } = PRODUCTS_INFO[sku];
		const ZOOM_IMAGE_URL = `https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/f_auto,q_auto,dpr_2,w_1000/${id}/${preset}/`;
		templates.forEach((templateName) => {
			const image = new Image();
			image.src = ZOOM_IMAGE_URL + templateName;
		});
	}, 2000);
}

function zoom(e) {
	e.preventDefault();
	const container = e.currentTarget;
	let offsetX, offsetY;
	e.offsetX ? offsetX = e.offsetX : offsetX = e.touches?.[0].clientX - container.getBoundingClientRect().left;
	e.offsetY ? offsetY = e.offsetY : offsetY = e.touches?.[0].clientY - container.getBoundingClientRect().top;
	const x = Math.min(Math.max(offsetX / container.offsetWidth * 100, 0), 100);
	const y = Math.min(Math.max(offsetY / container.offsetHeight * 100, 0), 100);
	container.style.backgroundPosition = x + "% " + y + "%";
}

function setZoomImage(zoomImageUrl) {
	return function(e) {
		const container = e.currentTarget;
		container.style.backgroundImage = `url(${zoomImageUrl})`;
		container.classList.add("hide-img");
	};
}

function removeZoomImage(e) {
	const container = e.currentTarget;
	container.style.backgroundImage = "none";
	container.classList.remove("hide-img");
}

function showConfigurator (id){
	const { config } = PRODUCTS_INFO[sku];

	if (config) {
		const container = document.getElementById("config-container");

		container.classList.remove("hidden");

		const applyTexture = (button, areaId, area, texture) => {
			window._d8sApi.update3d(
				document.getElementById("three-d-viewer"),
				{
					textures: [texture],
					currentTexture: [
						{ name: area.mesh, texture: 0}
					]
				}
			);

			const currentActive = document.querySelector(`.${areaId} .active`);
			currentActive.classList.remove("active");
			button.classList.add("active");
		};

		Object.entries(config)
			.forEach(([title, area]) => {
				const areaId = `area-${title.replaceAll(" ", "-")}`;
				const areaElm = document.createElement("div");
				areaElm.classList.add("config-area", areaId);
				container.appendChild(areaElm);
				const areaTitleELm = document.createElement("label");
				areaTitleELm.innerText = title;
				areaElm.appendChild(areaTitleELm);
				const buttonsElm = document.createElement("div");
				buttonsElm.classList.add("area-buttons");
				areaElm.appendChild(buttonsElm);

				area.textures.forEach(({ name, preview, texture }, index) => {
					const textureElm = document.createElement("button");
					textureElm.classList.add("texture-btn");
					textureElm.title = name;
					textureElm.addEventListener("click", () => applyTexture(textureElm, areaId, area, texture))

					if (index === 0) {
						textureElm.classList.add("active");
					}

					if (preview.startsWith("http")) {
						const texturePreview = document.createElement("img");
						texturePreview.src = preview;
						textureElm.appendChild(texturePreview);
					} else {
						textureElm.style.setProperty("--bg-color", preview);
					}

					buttonsElm.appendChild(textureElm);
				});
			});
	}
}
