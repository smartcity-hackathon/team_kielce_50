var World = {
	loaded: false,
	rotating: false,

	init: function initFn() {
		this.createModelAtLocation();
	},

	createModelAtLocation: function createModelAtLocationFn() {

		/*
			First a location where the model should be displayed will be defined. This location will be relativ to the user.	
		*/
        var location = new AR.GeoLocation(50.900381, 20.584538, 1);

		/*
			Next the model object is loaded.
		*/
		var modelEarth = new AR.Model("assets/build.wt3", {
			onLoaded: this.worldLoaded,
			scale: {
				x: 0.006,
                y: 0.006,
                z: 0.006
            },
            transform: {
                x: 0,
                y: -1000,
                z: 0
            }
		});

        //var modelEarth = new AR.Model("assets/aaa.wt3", {
        //    onLoaded: this.worldLoaded,
        //    scale: {
        //        x: 0.014,
        //        y: 0.014,
        //        z: 0.014
        //    },
        //    transform: {
        //        x: 0,
        //        y: -1000,
        //        z: 0
        //    },
        //    rotate: {
        //        x: 0,
        //        y: 60,
        //        z: 0
        //    }
        //});

        var indicatorImage = new AR.ImageResource("assets/indi.png");

        var indicatorDrawable = new AR.ImageDrawable(indicatorImage, 0.1, {
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP
        });

		/*
			Putting it all together the location and 3D model is added to an AR.GeoObject.
		*/
		var obj = new AR.GeoObject(location, {
            drawables: {
               cam: [modelEarth],
               indicator: [indicatorDrawable]
            }
        });
	},

	worldLoaded: function worldLoadedFn() {
		World.loaded = true;
		var e = document.getElementById('loadingMessage');
		e.parentElement.removeChild(e);
	}
};

World.init();
