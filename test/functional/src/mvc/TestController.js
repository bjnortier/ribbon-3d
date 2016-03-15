const tripcore = require('trip.core');
const $ = require('trip.dom').$;
const trip3 = require('trip.three');

const lib = require('../../../..');

const Ribbon3View = require('./Ribbon3View');
const Path3View = require('./Path3View');

class TestController extends tripcore.Controller {

  constructor(path) {
    super(new tripcore.Model());
    this.model.path = path;
    this.model.ribbon = lib(path, {width: 1});

    const scene = new trip3.Scene($('#viewport'), {
      elevation: 1.08,
      azimuth: -Math.PI/2,
      distance: 50,
    });
    this.addView(scene, Ribbon3View);
    this.addView(scene, Path3View);
  }

}

module.exports = TestController;