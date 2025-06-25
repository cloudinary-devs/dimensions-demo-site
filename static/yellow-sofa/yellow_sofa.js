window._3dViewerParams = {
	renderer: {
		camera: {
			verticalAngle: 10,
		},
		lights: {
			intensity: 0.7,
			exposure: 1,
			envMap: {
				preset: "indoor_warm",
			}
		},
		shadows: {
			horizontalAngle: 315,
			verticalAngle: 90,
			opacity: 0.2,
			enabled: true,
		},
		postProcessing: {
			contrast: 0,
			hue: 0,
		},
		general: {
			toneMapping: "neutral"
		},
	}
};

window.getNewPipelineZoomUrl = (number) => `https://dimensions-art.cloudinary.net/d8s-demo-site/image/upload/f_auto/p-yellow-sofa/yellow_sofa_${number}`;
