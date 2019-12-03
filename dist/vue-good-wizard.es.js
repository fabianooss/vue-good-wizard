/**
 * vue-good-table v1.4.1
 * https://github.com/xaksis/vue-good-wizard
 * Released under the MIT License.
 */

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " /* Utilities *******************************/ .pull-left[data-v-70a677fb]{ float: left !important; } .pull-right[data-v-70a677fb]{ float: right !important; } .clearfix[data-v-70a677fb]::after { display: block; content: \"\"; clear: both; } /* Header Steps *******************************/ .wizard[data-v-70a677fb] { position: relative; width: 100%; } .wizard__steps[data-v-70a677fb]{ list-style-type: none; text-align: justify; -ms-text-justify: distribute-all-lines; text-justify: distribute-all-lines; padding: 0; height: 70px; position: relative; } .stretch[data-v-70a677fb] { width: 100%; display: inline-block; font-size: 0; line-height: 0 } .wizard__step[data-v-70a677fb]{ height: 70px; vertical-align: bottom; display: inline-block; text-align: center; position: relative; } .wizard__step:not(:first-child) .wizard__step__line[data-v-70a677fb]{ position: absolute; width: 100%; left: -50%; bottom: 12px; height: 3px; background-color: #b9c7d2; } .wizard__step__indicator[data-v-70a677fb]{ box-sizing: content-box; display: block; width: 16px; height: 16px; background-color: #51abe4; border-radius: 50%; border: 3px solid #fff; position: absolute; left: 50%; margin-left: -10px; bottom: 2px; z-index: 1; } .wizard__step.active .wizard__step__indicator[data-v-70a677fb]{ background-color: #6eb165; } .wizard__step.active:not(:first-child) .wizard__step__line[data-v-70a677fb]{ background-color: #6eb165; /* green */ } .wizard__step__label[data-v-70a677fb]{ color: #98a4af; font-weight: bold; } /* Wizard body *******************************/ .wizard__body[data-v-70a677fb]{ margin-top: 30px; min-height: 400px; margin-left: 50px; margin-right: 50px; border: 1px solid #aebac4; background-color: #fff; position: relative; border-radius: 5px; padding-bottom: 50px; } .wizard__body__step[data-v-70a677fb]{ padding: 20px; } .wizard__arrow[data-v-70a677fb]{ position: absolute; display: block; width: 30px; height: 30px; border: 1px solid #aebac4; top: 85px; /* height of step + body margin -15 */ border-top-right-radius: 5px; background-color: #fff; border-left: none; border-bottom: none; transform: rotate(-45deg); z-index: 2; -webkit-transition: left 0.3s; -o-transition: left 0.3s; transition: left 0.3s; } /* Wizard body *******************************/ .wizard__body__actions[data-v-70a677fb]{ position: absolute; bottom: 0px; height: 50px; width: 100%; border-top: 1px solid #aebac4; background-color: #b9c7d2; } .wizard__body__actions a[data-v-70a677fb]{ width: 120px; height: 100%; display: block; background-color: #51abe4; color: white; font-weight: bold; text-align: center; line-height: 48px; cursor: pointer; -webkit-transition: background-color 0.3s; -o-transition: background-color 0.3s; transition: background-color 0.3s; } .wizard__body__actions a.disabled[data-v-70a677fb]{ cursor: not-allowed; -webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; opacity: 0.5; } .wizard__body__actions a>.vgw-icon[data-v-70a677fb], .wizard__body__actions a>span[data-v-70a677fb]{ vertical-align: middle; position: relative; margin-right: 5px; } .wizard__body__actions .vgw-icon[data-v-70a677fb]::after{ position: absolute; content: \"\"; transform: rotate(-45deg); width: 8px; height: 8px; top: 50%; margin-top: -5px; } .vgw-icon.vgw-next[data-v-70a677fb]::after{ border-bottom: 2px solid white; border-right: 2px solid white; } .vgw-icon.vgw-prev[data-v-70a677fb]::after{ border-top: 2px solid white; border-left: 2px solid white; left: -10px; } .wizard__body__actions a[data-v-70a677fb]:hover{ background-color: #357fae; } .wizard__body__actions a.final-step[data-v-70a677fb]{ background-color: #6eb165; } .underlined_when_focused:focus > span[data-v-70a677fb] { text-decoration: underline } /* mobile */ .wizard__body.vgw-mobile[data-v-70a677fb]{ margin-left: 10px; margin-right: 10px; } .wizard__step.vgw-mobile[data-v-70a677fb]{ display: none; } .wizard__step .wizard__step__line.vgw-mobile[data-v-70a677fb]{ display: none; } .wizard__step.active.vgw-mobile[data-v-70a677fb]{ display: inline-block; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var GoodWizard = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "wizard" }, [_c('ul', { staticClass: "wizard__steps" }, _vm._l(_vm.steps, function (step, index) {
      return _c('li', { key: index, staticClass: "wizard__step", class: { 'active': _vm.isMobile ? _vm.currentStep === index : _vm.currentStep >= index, 'vgw-mobile': _vm.isMobile }, style: _vm.wizardStepStyle }, [_c('span', { staticClass: "wizard__step__line", class: { 'vgw-mobile': _vm.isMobile } }), _vm._v(" "), _c('span', { staticClass: "wizard__step__label" }, [_vm._v(_vm._s(step.label))]), _vm._v(" "), _c('span', { staticClass: "wizard__step__indicator" })]);
    })), _vm._v(" "), _c('span', { staticClass: "wizard__arrow", style: { left: _vm.arrowPosition } }), _vm._v(" "), _c('div', { ref: "wizard-body", staticClass: "wizard__body", class: { 'vgw-mobile': _vm.isMobile } }, [_c('div', { key: _vm.currentSlot, staticClass: "wizard__body__step" }, [_vm._t(_vm.currentSlot)], 2), _vm._v(" "), _c('div', { staticClass: "wizard__body__actions clearfix" }, [_vm.backEnabled ? _c('a', { staticClass: "wizard__back pull-left underlined_when_focused", attrs: { "tabindex": "0" }, on: { "keyup": function ($event) {
          _vm.handleKeyupBack($event);
        }, "click": function ($event) {
          _vm.goBack();
        } } }, [_c('i', { staticClass: "vgw-icon vgw-prev" }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.previousStepLabel))])]) : _vm._e(), _vm._v(" "), _vm.currentStep != _vm.steps.length - 1 ? _c('a', { staticClass: "wizard__next pull-right underlined_when_focused", class: { 'disabled': _vm.options[_vm.currentStep].nextDisabled }, attrs: { "tabindex": "0" }, on: { "keyup": function ($event) {
          _vm.handleKeyupNext($event);
        }, "click": function ($event) {
          _vm.goNext();
        } } }, [_c('span', [_vm._v(_vm._s(_vm.nextStepLabel))]), _vm._v(" "), _c('i', { staticClass: "vgw-icon vgw-next" })]) : _vm._e(), _vm._v(" "), _vm.currentStep == _vm.steps.length - 1 ? _c('a', { staticClass: "wizard__next pull-right final-step underlined_when_focused", class: { 'disabled': _vm.options[_vm.currentStep].nextDisabled }, attrs: { "tabindex": "0" }, on: { "keyup": function ($event) {
          _vm.handleKeyupNext($event);
        }, "click": function ($event) {
          _vm.goNext();
        } } }, [_c('span', [_vm._v(" " + _vm._s(_vm.finalStepLabel) + " ")])]) : _vm._e()])])]);
  }, staticRenderFns: [], _scopeId: 'data-v-70a677fb',

  name: 'vue-good-wizard',

  props: {
    steps: {},
    previousStepLabel: { default: 'Back' },
    nextStepLabel: { default: 'Next' },
    finalStepLabel: { default: 'Save' },
    onNext: {},
    onBack: {}
  },

  watch: {
    steps: {
      handler: function handler() {
        this.parseOptions();
      },
      immediate: true
    }
  },

  data: function data() {
    return {
      currentStep: 0,
      isMounted: false,
      resizer: null,
      isMobile: false,
      options: []
    };
  },
  computed: {
    wizardStepStyle: function wizardStepStyle() {
      if (this.isMobile) {
        return {
          width: '100%'
        };
      }

      return {
        width: ((100 / this.steps.length) + "%")
      };
    },
    mobileArrowPosition: function mobileArrowPosition() {
      return 'calc(50% - 14px)';
    },
    arrowPosition: function arrowPosition() {
      if (this.isMobile) {
        return this.mobileArrowPosition;
      }
      var stepSize = 100 / this.steps.length;
      var currentStepStart = stepSize * this.currentStep;
      var currentStepMiddle = currentStepStart + stepSize / 2;
      if (this.steps.length == 1) { return 'calc(' + currentStepMiddle + '%)'; }else { return 'calc(' + currentStepMiddle + '% - 14px)'; }
    },
    currentSlot: function currentSlot() {
      return this.steps[this.currentStep].slot;
    },
    backEnabled: function backEnabled() {
      return this.currentStep != 0;
    }
  },
  methods: {
    goNext: function goNext(skipFunction) {
      if (!skipFunction && typeof this.onNext == 'function') {
        if (!this.onNext(this.currentStep)) {
          //returned false. don't do anything
          return;
        }
      }
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },
    goBack: function goBack(skipFunction) {
      if (!skipFunction && typeof this.onBack == 'function') {
        if (!this.onBack(this.currentStep)) {
          //returned false. don't do anything
          return;
        }
      }
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },

    goTo: function goTo(step) {
      if (Number.isInteger(step) && step < this.steps.length && step >= 0) {
        this.currentStep = step;
      }
    },

    parseOptions: function parseOptions() {
      var this$1 = this;

      this.options = [];
      for (var i = 0; i < this.steps.length; i++) {
        this$1.options.push(this$1.steps[i].options ? this$1.steps[i].options : {});
      }
    },

    handleResize: function handleResize() {
      var this$1 = this;

      console.log('handle resize');
      if (this.resizer) {
        clearTimeout(this.resizer);
      }
      this.resizer = setTimeout(function () {
        console.log('resizing...');
        this$1.isMobile = this$1.$refs['wizard-body'].clientWidth < 620;
      }, 100);
    },

    handleKeyupBack: function handleKeyupBack(event) {
      if (this.isValidKey(event)) {
        this.goBack();
      }
    },

    handleKeyupNext: function handleKeyupNext(event) {
      if (this.isValidKey(event)) {
        this.goNext();
      }
    },

    isValidKey: function isValidKey(event) {
      return event.key == 'Enter' || event.key == ' ';
    }
  },
  mounted: function mounted() {
    this.isMobile = this.$refs['wizard-body'].clientWidth < 620;
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
};

var GoodWizardPlugin = {
  install: function (Vue, options) {
    Vue.component(GoodWizard.name, GoodWizard);
  }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(GoodWizardPlugin);
}

export { GoodWizard };
export default GoodWizardPlugin;
