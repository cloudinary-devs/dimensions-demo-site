const searchParams = window.location.search
	.replace("?", "")
	.split("&")
	.map((pair) => pair.split("="));
const data = decodeObjectString(searchParams.filter(([key, value]) => key === "d")?.[0]?.[1] || "");
const { name, sku, preset, cloudName, imageTemplates, videoTemplates, hasThreeD, environment } = data;

document.addEventListener("error", handleAssetLoadError, true);

if (!sku || !preset || !cloudName) {
	!sku && console.error("No product SKU present!");
	!preset && console.error("No product preset present!");
	!cloudName && console.error("No cloudName present!");
} else {
	prepareHTML();
	setProductInfo();
	runDimensions();
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
		document.getElementById("three-d-container").classList.remove("hide");
		document.getElementById("three-d-viewer").setAttribute("data-d8s-id", sku);
		document.getElementById("three-d-viewer").classList.add("show");
	}

	window._d8sApi = window.initDimensions({
		cloudName: cloudName,
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
		apiUrl: `https://api${environment !== "production" ? "-staging" : ""}.dimensions.cloudinary.com/`,
		report: false,
	});
}

function createAssetElement(url, isVideo = false) {
	const assetElement = document.createElement("div");

	if (isVideo) {
		assetElement.classList.add("product-video", "vid");
		const videoElement = document.createElement("video");
		videoElement.setAttribute("width", "100%")
		videoElement.setAttribute("muted", "true")
		videoElement.setAttribute("autoplay", "true")
		videoElement.setAttribute("loop", "true")
		videoElement.setAttribute("controls", "true")
		videoElement.src = url;

		assetElement.appendChild(videoElement);

	} else {
		const imgElement = document.createElement("img");
		imgElement.src = url;

		assetElement.classList.add("product-image", "2d");
		assetElement.addEventListener("mousemove", zoom);
		assetElement.addEventListener("touchmove", zoom);
		assetElement.addEventListener("mouseleave", removeZoomImage);
		assetElement.addEventListener("touchend", removeZoomImage);
		assetElement.addEventListener("touchstart", setZoomImage(url));
		assetElement.addEventListener("mouseenter", setZoomImage(url));

		assetElement.appendChild(imgElement);
	}

	return assetElement;
}

function createErrorMessage(isVideo = false) {
	const errorElement = document.createElement("div");
	errorElement.classList.add("error-message");
	const p1 = document.createElement("p");
	const p2 = document.createElement("p");
	p1.innerText = `Generating ${isVideo ? "video" : "image"}...`;
	p1.classList.add("error-bold")
	p2.innerText = "Please refresh the page in a few seconds";

	errorElement.appendChild(p1);
	errorElement.appendChild(p2);

	return errorElement;
}

function prepareHTML() {
	const assetsContainer = document.getElementById("assets-container");

	imageTemplates?.forEach((artifactUrl) => {
		const container = document.createElement("div");
		container.classList.add("asset", "asset-img");
		container.appendChild(createAssetElement(artifactUrl));
		container.appendChild(createErrorMessage());
		assetsContainer.appendChild(container);
	});

	videoTemplates?.forEach((artifactsUrl) => {
		const container = document.createElement("div");
		container.classList.add("asset", "asset-video");
		container.appendChild(createAssetElement(artifactsUrl, true));
		container.appendChild(createErrorMessage(true));
		assetsContainer.appendChild(container);
	});

	const isEmptyProduct = !imageTemplates?.length && !videoTemplates?.length && !hasThreeD;
	if (isEmptyProduct) {
		document.getElementById("empty-message").classList.add("show");
	} else {
		document.getElementById("product-details").classList.add("show");
	}
}

function setProductInfo() {
	const desktopTitle = document.getElementById("title-desktop");
	desktopTitle.innerText = name;
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

function copyUrl() {
	const tooltip = document.getElementById("share-tooltip");
	navigator.clipboard.writeText(window.location.href)
		.then(() => {
			tooltip.innerText = "Copied!";
			setTimeout(() => {
				tooltip.innerText = "Copy page URL";
			}, 1000);
		})
		.catch(() => {
			console.warn('Could not copy url')
		});
}

function handleAssetLoadError(e){
	if (e.target.nodeName === 'IMG' || e.target.nodeName === 'VIDEO') {
		if (e.target.parentElement?.parentElement?.classList.contains('asset')) {
			e.target.parentElement.parentElement.classList.add('asset-error');
		}
	}
}
