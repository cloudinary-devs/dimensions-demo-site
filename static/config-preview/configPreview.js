const CAMERA_BASE_SETTINGS = {
	fov: 45,
	horizontalAngle: 0,
	verticalAngle: 10,
	zoom: 0,
};
const IMAGE_TEMPLATES = [
	{
		camera: {
			...CAMERA_BASE_SETTINGS,
		},
	},
	{
		camera: {
			...CAMERA_BASE_SETTINGS,
			horizontalAngle: 45,
		},
	},
	{
		camera: {
			...CAMERA_BASE_SETTINGS,
			horizontalAngle: 315,
		},
	},
	{
		camera: {
			...CAMERA_BASE_SETTINGS,
			horizontalAngle: 0,
			verticalAngle: 89,
		},
	},
	{
		camera: {
			...CAMERA_BASE_SETTINGS,
			horizontalAngle: 180,
		},
		lights: {
			envMap: {
				rotation: 3,
			}
		}
	},
	{
		camera: {
			...CAMERA_BASE_SETTINGS,
			horizontalAngle: 50,
			verticalAngle: 27,
			zoom: 6,
		},
	},

];

const PRODUCTS_INFO = {
	"12121-17-10-2024": {
		title: "Two seater sofa",
		description: "",
		price: "$1100.00",
		preset: "barber-chair-2-1711971466758-preset",
		config: {
			"fabric": {
				mesh: "fabric",
				productConfigs: [
					{
						name: "AT12",
						preview: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/w_200/demo-site-assets/kave-home-sofa-textures/fabric/MTK0366-AT12_60x60cm_2048px_D_qb7w6f.png",
						config: {
							url: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484673/demo-site-assets/kave-home-sofa-textures/fabric/MTK0366-AT12_60x60cm_2048px_D_qb7w6f.png",
							normalUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484662/demo-site-assets/kave-home-sofa-textures/fabric/MTK0366-AT12_60x60cm_2048px_N_ychb6b.png",
							textureParams: {
								repeat: 10,
								flipY: false,
							},
							materialParams: {
								"transmission": 0,
								"roughness": 1,
								"metallic": 0,
								"color": ["rgba(0.9,0.9,0.9,1)"],
							},
						}
					},
					{
						name: "AT39",
						preview: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/w_200/demo-site-assets/kave-home-sofa-textures/fabric/MTK0350-AT39_60x60cm_2048px_D_umxm3m.png",
						config: {
							url: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484612/demo-site-assets/kave-home-sofa-textures/fabric/MTK0350-AT39_60x60cm_2048px_D_umxm3m.png",
							normalUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484669/demo-site-assets/kave-home-sofa-textures/fabric/MTK0350-AT39_60x60cm_2048px_N_a0ogon.png",
							textureParams: {
								repeat: 10,
								flipY: false,
							},
							materialParams: {
								"transmission": 0,
								"roughness": 1,
								"metallic": 0,
								"color": ["rgba(0.9490196078431372,0.9490196078431372,0.9490196078431372,1)"],
							},
						}
					},
					{
						name: "AT10",
						preview: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/w_200/demo-site-assets/kave-home-sofa-textures/fabric/MTK0367-AT10_60x60cm_2048px_D_a0l10j.png",
						config: {
							url: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484674/demo-site-assets/kave-home-sofa-textures/fabric/MTK0367-AT10_60x60cm_2048px_D_a0l10j.png",
							normalUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484668/demo-site-assets/kave-home-sofa-textures/fabric/MTK0367-AT10_60x60cm_2048px_N_ybtpaa.png",
							textureParams: {
								repeat: 10,
								flipY: false,
							},
							materialParams: {
								"transmission": 0,
								"roughness": 1,
								"metallic": 0,
								"color": ["rgba(0.9,0.9,0.9,1)"],
							},
						}
					},
					{
						name: "AT34",
						preview: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/w_200/demo-site-assets/kave-home-sofa-textures/fabric/MTK0368-AT34_60x60cm_2048px_D_boates.png",
						config: {
							url: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484678/demo-site-assets/kave-home-sofa-textures/fabric/MTK0368-AT34_60x60cm_2048px_D_boates.png",
							normalUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484669/demo-site-assets/kave-home-sofa-textures/fabric/MTK0368-AT34_60x60cm_2048px_N_szukei.png",
							textureParams: {
								repeat: 10,
								flipY: false,
							},
							materialParams: {
								"transmission": 0,
								"roughness": 1,
								"metallic": 0,
								"color": ["rgba(0.9,0.9,0.9,1)"],
							},
						}
					},
					{
						name: "AT81",
						preview: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/w_200/demo-site-assets/kave-home-sofa-textures/fabric/MTK0369-AT81_60x60cm_2048px_D_ywbgca.png",
						config: {
							url: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484669/demo-site-assets/kave-home-sofa-textures/fabric/MTK0369-AT81_60x60cm_2048px_D_ywbgca.png",
							normalUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484675/demo-site-assets/kave-home-sofa-textures/fabric/MTK0369-AT81_60x60cm_2048px_N_ramyk5.png",
							textureParams: {
								repeat: 10,
								flipY: false,
							},
							materialParams: {
								"transmission": 0,
								"roughness": 1,
								"metallic": 0,
								"color": ["rgba(0.9,0.9,0.9,1)"],
							},
						}
					},
					{
						name: "AT19",
						preview: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/w_200/demo-site-assets/kave-home-sofa-textures/fabric/MTK0370-AT19_60x60cm_2048px_D_cgp14r.png",
						config: {
							url: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484655/demo-site-assets/kave-home-sofa-textures/fabric/MTK0370-AT19_60x60cm_2048px_D_cgp14r.png",
							normalUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484673/demo-site-assets/kave-home-sofa-textures/fabric/MTK0370-AT19_60x60cm_2048px_N_ddoo1d.png",
							textureParams: {
								repeat: 10,
								flipY: false,
							},
							materialParams: {
								"transmission": 0,
								"roughness": 1,
								"metallic": 0,
								"color": ["rgba(0.9,0.9,0.9,1)"],
							},
						}
					},
					{
						name: "AT25",
						preview: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/w_200/demo-site-assets/kave-home-sofa-textures/fabric/MTK0371-AT25_60x60cm_2048px_D_llcnpr.png",
						config: {
							url: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484673/demo-site-assets/kave-home-sofa-textures/fabric/MTK0371-AT25_60x60cm_2048px_D_llcnpr.png",
							normalUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484678/demo-site-assets/kave-home-sofa-textures/fabric/MTK0371-AT25_60x60cm_2048px_N_gwuqb9.png",
							textureParams: {
								repeat: 10,
								flipY: false,
							},
							materialParams: {
								"transmission": 0,
								"roughness": 1,
								"metallic": 0,
								"color": ["rgba(0.9,0.9,0.9,1)"],
							},
						}
					},
					{
						name: "AT14",
						preview: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/w_200/demo-site-assets/kave-home-sofa-textures/fabric/MTK0372-AT14_60x60cm_2048px_D_liwmnf.png",
						config: {
							url: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484678/demo-site-assets/kave-home-sofa-textures/fabric/MTK0372-AT14_60x60cm_2048px_D_liwmnf.png",
							normalUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484672/demo-site-assets/kave-home-sofa-textures/fabric/MTK0372-AT14_60x60cm_2048px_N_ekf8af.png",
							textureParams: {
								repeat: 10,
								flipY: false,
							},
							materialParams: {
								"transmission": 0,
								"roughness": 1,
								"metallic": 0,
								"color": ["rgba(0.9,0.9,0.9,1)"],
							},
						}
					},
					{
						name: "AT01",
						preview: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/w_200/demo-site-assets/kave-home-sofa-textures/fabric/MTK0373-AT01_60x60cm_2048px_D_oaxkdu.png",
						config: {
							url: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484677/demo-site-assets/kave-home-sofa-textures/fabric/MTK0373-AT01_60x60cm_2048px_D_oaxkdu.png",
							normalUrl: "https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/q_auto/v1731484673/demo-site-assets/kave-home-sofa-textures/fabric/MTK0373-AT01_60x60cm_2048px_N_uaq2nt.png",
							textureParams: {
								repeat: 10,
								flipY: false,
							},
							materialParams: {
								"transmission": 0,
								"roughness": 1,
								"metallic": 0,
								"color": ["rgba(0.9,0.9,0.9,1)"],
							},
						}
					},
				],
			},
		},
	},
};

const sku = "12121-17-10-2024";
const canvasContainer = document.getElementById("three-d-viewer");
const assetsContainer = document.getElementById("assets-container");

setProductInfo(sku);
runDimensions(sku);
showConfigurator(sku);

function runDimensions(id) {
	if (!id) {
		return;
	}

	//TODO: use the tag defaults config feature !!!! for product id & preset
	canvasContainer?.setAttribute("data-d8s-id", id);


	const d8sApi = window._d8sApi = window.initDimensions({
		account: "demo-site",
		viewers: [
			window.initDimensions.VIEWERS.THREE_D,
		],
		threeDViewer: {
			viewer: {
				productConfigs: [PRODUCTS_INFO[sku].config.fabric.productConfigs[0].config],
				activeConfigs: [
					{ mesh: "fabric", configIndex: 0}
				],
				takeScreenshot: true,
				controls: {
					position: "center",
				},

				rotation: {
					enabled: false,
					offOnInteraction: true,
				},

				showLoadingProgress: true,

				// appUrl: "http://localhost:9000/",
			},
		},
		// baseUrl: "https://res.cloudinary.com/",
		apiUrl: "https://api.dimensions.cloudinary.com/",
		report: false,
	});
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

function showConfigurator (){
	const { config } = PRODUCTS_INFO[sku];

	if (config) {
		const container = document.getElementById("config-container");

		container.classList.remove("hidden");

		const applyProductConfig = (button, areaId, area, config) => {
			window._d8sApi.update3d(
				canvasContainer,
				{
					productConfigs: [config],
					activeConfigs: [
						{ mesh: area.mesh, configIndex: 0}
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
				const buttonsElm = document.createElement("div");
				buttonsElm.classList.add("area-buttons");
				areaElm.appendChild(buttonsElm);

				area.productConfigs.forEach(({ name, preview, config }, index) => {
					const textureElm = document.createElement("button");
					textureElm.classList.add("texture-btn");
					textureElm.title = name;
					textureElm.addEventListener("click", () => applyProductConfig(textureElm, areaId, area, config))

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

const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

let imgIndex = 0;
let takePreviewScreenshot = true;
function onModalClose() {
	modal.style.zIndex = "-1";
	canvasContainer.style.width = "500px";
	canvasContainer.style.height = "500px";
	takePreviewScreenshot = true;
	renderPreviewImage(IMAGE_TEMPLATES[0]);
}

let unregisterListener;
function renderPreviewImage(template) {
	assetsContainer.classList.add("blur");
	if (!unregisterListener) {
		unregisterListener = window._d8sApi.on((event, ...args) => {
			const data = args[0];
			if (event === "tag-3d-viewer-screenshot" && data.base64Image && takePreviewScreenshot) {
				const imgElm = document.getElementById(`preview-${imgIndex}`);
				imgElm.src = data.base64Image;
				imgElm.style.width = "100%";
				imgElm.style.height = "100%";

				// render next preview
				imgIndex = imgIndex + 1;
				const nextImage = IMAGE_TEMPLATES[imgIndex];
				if (nextImage) {
					renderPreviewImage(nextImage);
				} else {
					assetsContainer.classList.remove("blur");
					resetModalCanvas();
				}
			}
		});
	}

	window._d8sApi?.update3d(canvasContainer, { renderer: template });
}

const RESET_TEMPLATE = {
	camera: {
		fov: 45,
		horizontalAngle: 0,
		verticalAngle: 18,
		zoom: -2,
	},
};
function resetModalCanvas() {
	imgIndex = 0;
	takePreviewScreenshot = false;
	window._d8sApi?.update3d(canvasContainer, { renderer: RESET_TEMPLATE });
	canvasContainer.style.opacity = "0";
}

let firstTimeOpen = true;
function onModalOpen (){
	// resetModalCanvas();
	const periodMs = firstTimeOpen ? 1_000 : 700;
	firstTimeOpen = false;
	canvasContainer.style.width = "100%";
	canvasContainer.style.height = "100%";
	canvasContainer.style.opacity = "0";
	modal.style.display = "flex";
	modal.style.zIndex = "10";
	setTimeout(() => {
	canvasContainer.style.opacity = "1";
	}, periodMs);
}

openModalBtn.addEventListener("click", onModalOpen);
closeModalBtn.addEventListener("click", onModalClose);
