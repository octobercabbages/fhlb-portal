"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var layout_service_1 = require("@app/core/services/layout.service");
var smartadmin_config_1 = require("@app/core/smartadmin.config");
//noinspection TypeScriptUnresolvedFunction
var $script = require('scriptjs');
var D3MapComponent = /** @class */ (function () {
    function D3MapComponent(el, layoutService) {
        var _this = this;
        this.el = el;
        this.layoutService = layoutService;
        this.data = [];
        this.initialized = false;
        this.layoutSub = this.layoutService.subscribe(function () {
            _this.initialized && _this.throttle();
        });
    }
    D3MapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $script(['https://d3js.org/d3.v4.min.js',
            'https://d3js.org/topojson.v1.min.js'], function () {
            _this.d3Init();
        });
    };
    D3MapComponent.prototype.d3Init = function () {
        var _this = this;
        d3.select(window).on("resize", this.throttle.bind(this));
        this.zoom = d3.zoom()
            //.extent([1,9])
            .scaleExtent([1, 20])
            .on("zoom", this.move.bind(this));
        this.container = d3.select(this.getContainer());
        this.width = this.getContainer().offsetWidth;
        this.height = Math.max(this.width / 2, 300);
        //offsets for tooltips
        this.offsetL = this.container.offsetLeft + 20;
        this.offsetT = this.container.offsetTop + 10;
        //var graticule = d3.geo.graticule();
        this.graticule = d3.geoGraticule();
        this.tooltip = this.container.append("div").attr("class", "tooltip hidden");
        this.setup(this.width, this.height);
        d3.json(smartadmin_config_1.config.API_URL + '/graphs/d3/world-topo-min.json', function (err, world) {
            world.objects.countries.geometries = world.objects.countries.geometries.map(function (it) {
                it.properties.value = _this.data[it.properties.name];
                return it;
            });
            _this.countries = topojson.feature(world, world.objects.countries).features;
            var maxVal = Object.keys(_this.data).reduce(function (current, next) {
                return current >= _this.data[next] ? current : _this.data[next];
            }, 0);
            _this.color = d3.scaleLinear().domain([0, maxVal])
                .range([0, 100])
                // .interpolate(d3.interpolateRgb.gamma(2.2)("purple", "orange"))
                .range([d3.color('rgba(0, 113, 164, 0.6)'), d3.color('rgba(0, 113, 164, 1)')])
                .nice(100);
            _this.draw();
            _this.initialized = true;
        });
    };
    D3MapComponent.prototype.setup = function (width, height) {
        //projection = d3.geo.mercator()
        this.projection = d3.geoMercator()
            .translate([(width / 2), (height / 2)])
            .scale(width / 2 / Math.PI);
        //path = d3.geo.path().projection(projection);
        this.path = d3.geoPath().projection(this.projection);
        this.svg = this.container.append("svg")
            .attr("width", width)
            .attr("height", height)
            .call(this.zoom)
            .on("click", this.click.bind(this));
        this.g = this.svg.append("g");
        this.zoom.scaleBy(this.svg.transition().duration(750), 0.9);
        this.zoom.translateBy(this.svg.transition().duration(750), 0, 20);
    };
    D3MapComponent.prototype.handleMouseOver = function (country) {
        var mouse = d3.mouse(this.svg.node()).map(function (d) {
            return parseInt(d);
        });
        this.tooltip.classed("hidden", false)
            .attr("style", "left:" + (mouse[0] + this.offsetL) + "px;top:" + (mouse[1] + this.offsetT) + "px")
            .html(country.properties.name);
    };
    D3MapComponent.prototype.handleMouseOut = function () {
        this.tooltip.classed("hidden", true);
    };
    D3MapComponent.prototype.isVisible = function () {
        var container = this.getContainer();
        return (container.clientHeight > 0 &&
            container.clientWidth > 0);
    };
    D3MapComponent.prototype.isInViewport = function () {
        var container = this.getContainer();
        var rect = container.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    D3MapComponent.prototype.draw = function () {
        var _this = this;
        if (!this.isVisible())
            return;
        // this.svg.append("path")
        //   .datum(this.graticule)
        //   .attr("class", "graticule")
        //   .attr("d", this.path);
        // this.g.append("path")
        //   .datum({ type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]] })
        //   .attr("class", "equator")
        //   .attr("d", this.path);
        var country = this.g.selectAll(".country").data(this.countries);
        country.enter().insert("path")
            .attr("class", "country")
            .attr("d", this.path)
            .attr("id", function (d, i) {
            return d.id;
        })
            .attr("title", function (d, i) {
            return d.properties.name;
        })
            .style("stroke", d3.color('white'))
            .style("fill", function (d, i) {
            return !d.properties.value ? d3.color('rgba(0, 113, 164, 0.0)') : _this.color(d.properties.value);
        })
            .style("stroke-width", '0.5')
            .on("mouseover", this.handleMouseOver.bind(this))
            .on("mouseout", this.handleMouseOut.bind(this));
        //tooltips
        /*
         d3.select("#container svg path")
         .on("mousemove", function(d,i) {
         console.log(d);
         var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );
    
         tooltip.classed("hidden", false)
         .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
         .html(d.properties.name);
    
         })
         .on("mouseout",  function(d,i) {
         tooltip.classed("hidden", true);
         }); */
    };
    D3MapComponent.prototype.redraw = function () {
        this.width = this.getContainer().offsetWidth;
        this.height = Math.max(this.width / 2, 300);
        d3.select('svg').remove();
        this.setup(this.width, this.height);
        this.draw();
    };
    D3MapComponent.prototype.move = function () {
        //const t = d3.event.translate;
        var t = [d3.event.transform.x, d3.event.transform.y];
        //const s = d3.event.scale;
        var s = d3.event.transform.k;
        var zscale = s;
        var h = this.height / 4;
        t[0] = Math.min((this.width / this.height) * (s - 1), Math.max(this.width * (1 - s), t[0]));
        t[1] = Math.min(h * (s - 1) + h * s, Math.max(this.height * (1 - s) - h * s, t[1]));
        //zoom.translateBy(t);
        this.g.attr("transform", "translate(" + t + ")scale(" + s + ")");
        //adjust the country hover stroke width based on zoom level
        // d3.selectAll(".country").style("stroke-width", 1.5 / s);
    };
    D3MapComponent.prototype.zoomIn = function () {
        this.zoom.scaleBy(this.svg.transition().duration(750), 1.3);
    };
    D3MapComponent.prototype.zoomOut = function () {
        this.zoom.scaleBy(this.svg.transition().duration(750), 0.7);
    };
    D3MapComponent.prototype.throttle = function () {
        var _this = this;
        window.clearTimeout(this.throttleTimer);
        this.throttleTimer = window.setTimeout(function () {
            _this.redraw();
        }, 200);
    };
    //geo translation on mouse click in map
    D3MapComponent.prototype.click = function () {
        var latlon = this.projection.invert(d3.mouse(this.svg.node()));
        console.log(latlon);
    };
    //function to add points and text to the map (used in plotting capitals)
    D3MapComponent.prototype.addpoint = function (lon, lat, text) {
        var gpoint = this.g.append("g").attr("class", "gpoint");
        var x = this.projection([lon, lat])[0];
        var y = this.projection([lon, lat])[1];
        gpoint.append("svg:circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("class", "point")
            .attr("r", 1.5);
        //conditional in case a point has no associated text
        if (text.length > 0) {
            gpoint.append("text")
                .attr("x", x + 2)
                .attr("y", y + 2)
                .attr("class", "text")
                .text(text);
        }
    };
    D3MapComponent.prototype.getContainer = function () {
        if (!this.cachedContainer) {
            this.cachedContainer = this.el.nativeElement.querySelector('.d3-map');
        }
        return this.cachedContainer;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], D3MapComponent.prototype, "data", void 0);
    D3MapComponent = __decorate([
        core_1.Component({
            selector: 'd3-map',
            template: "\n  <div class=\"d3-zoomin\" (click)=\"zoomIn()\"><i class=\"fa fa-plus\"></i></div>\n  <div class=\"d3-zoomout\" (click)=\"zoomOut()\"><i class=\"fa fa-minus\"></i></div>\n  <div ngNonBindable class=\"d3-map\"></div>",
            styleUrls: ['./d3-map.component.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, layout_service_1.LayoutService])
    ], D3MapComponent);
    return D3MapComponent;
}());
exports.D3MapComponent = D3MapComponent;
//# sourceMappingURL=d3-map.component.js.map