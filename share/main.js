const searchParams = window.location.search
	.replace("?", "")
	.split("&")
	.map((pair) => pair.split("="));
const data = decodeObjectString(searchParams.filter(([key, value]) => key === "d")?.[0]?.[1] || "");
const { name, sku, preset, account, imageTemplates, videoTemplates, hasThreeD } = data;
const ASSET_BASE_URL = `https://dimensions-art.cloudinary.net/d8s-${account}/`;

if (!sku || !preset || !account) {
	!sku && console.error("No product SKU present!");
	!preset && console.error("No product preset present!");
	!account && console.error("No account name present!");
} else {
	prepareHTML();
	setProductInfo();
	runDimensions();
	preloadProductZoomImage();
}

function runDimensions() {
	let VIEWERS = [];
	if (!!imageTemplates?.length) {
		VIEWERS.push(window.initDimensions.VIEWERS.IMAGE);
	}
	if (!!videoTemplates?.length) {
		VIEWERS.push(window.initDimensions.VIEWERS.VIDEO);
	}
	if (hasThreeD) {
		VIEWERS.push(window.initDimensions.VIEWERS.THREE_D);
		document.getElementById("three-d-viewer").setAttribute("data-d8s-id", sku);
		document.getElementById("three-d-viewer").classList.add("show");
	}

	window._d8sApi = window.initDimensions({
		account: account,
		viewers: VIEWERS,
		imageViewer: {
			params: {},
		},
		videoViewer: {
			params: {
				autoplay: true,
				volume: 0,
				loop: true,
			},
		},
		threeDViewer: {
			viewer: {
				controls: {
					position: "center",
				},

				rotation: {
					offOnInteraction: true,
				},

				rotation: {
					offOnInteraction: true,
				},
			},
		},
	});
}

function createAssetElement(templateName, isVideo = false) {
	const zoomImageUrl = `${getZoomImageUrl()}${templateName}`;
	const assetElement = document.createElement("div");

	assetElement.setAttribute("data-d8s-url-params", "f_auto,w_1000");
	assetElement.setAttribute("data-d8s-preset", preset);
	assetElement.setAttribute("data-d8s-name", templateName);
	assetElement.setAttribute("data-d8s-id", sku);

	if (isVideo) {
		assetElement.setAttribute("data-d8s-type", "video");
		assetElement.classList.add("product-video", "vid");
	} else {
		assetElement.classList.add("product-image", "2d");
		assetElement.addEventListener("mousemove", zoom);
		assetElement.addEventListener("touchmove", zoom);
		assetElement.addEventListener("mouseleave", removeZoomImage);
		assetElement.addEventListener("touchend", removeZoomImage);
		assetElement.addEventListener("touchstart", setZoomImage(zoomImageUrl));
		assetElement.addEventListener("mouseenter", setZoomImage(zoomImageUrl));
	}

	return assetElement;
}

function getZoomImageUrl() {
	return `${ASSET_BASE_URL}image/upload/f_auto,q_auto,dpr_2,w_1000/${sku}/${preset}/`;
}

function prepareHTML() {
	const assetsContainer = document.getElementById("assets-container");

	imageTemplates?.forEach((templateName) => {
		const container = document.createElement("div");
		container.classList.add("asset", "asset-img");
		container.appendChild(createAssetElement(templateName));
		assetsContainer.appendChild(container);
	});

	videoTemplates?.forEach((templateName) => {
		const container = document.createElement("div");
		container.classList.add("asset", "asset-video");
		container.appendChild(createAssetElement(templateName, true));
		assetsContainer.appendChild(container);
	});

	if (imageTemplates?.length || videoTemplates?.length || hasThreeD) {
		document.getElementById("empty-message").classList.add("hide");
		document.getElementById("product-details").classList.add("show");
		document.getElementById("title-mobile").classList.add("show");
	}
}

function setProductInfo() {
	const pageTitle = document.getElementById("site-header");
	const desktopTitle = document.getElementById("title-desktop");
	const mobileTitle = document.getElementById("title-mobile");
	pageTitle.innerHTML = name + " - Product Page Demo";
	desktopTitle.innerHTML = name;
	mobileTitle.innerHTML = name;
}

function preloadProductZoomImage() {
	setTimeout(() => {
		const ZOOM_IMAGE_URL = getZoomImageUrl();

		imageTemplates?.forEach((templateName) => {
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

function encodeObject(obj) {
	const str = JSON.stringify(obj, null, 0);
	const bytes = new TextEncoder().encode(str);

	const binString = Array.from(bytes, (byte) =>
		String.fromCodePoint(byte),
	).join("");

	return btoa(binString);
}

function decodeObjectString(str) {
	const binString = atob(str);
	const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0));
	return JSON.parse(new TextDecoder().decode(bytes) || "{}");
}
