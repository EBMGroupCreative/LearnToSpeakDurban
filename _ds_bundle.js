/* @ds-bundle: {"format":4,"namespace":"LearnToSpeakDurbanDesignSystem_ec3271","components":[{"name":"FolderCard","sourcePath":"components/cards/FolderCard.jsx"},{"name":"SpecCard","sourcePath":"components/cards/SpecCard.jsx"},{"name":"Barcode","sourcePath":"components/core/Barcode.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"LabelChip","sourcePath":"components/core/LabelChip.jsx"},{"name":"RefCode","sourcePath":"components/core/RefCode.jsx"},{"name":"Stamp","sourcePath":"components/core/Stamp.jsx"},{"name":"StatusStrip","sourcePath":"components/feedback/StatusStrip.jsx"},{"name":"AnswerOption","sourcePath":"components/forms/AnswerOption.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"ProgressBar","sourcePath":"components/forms/ProgressBar.jsx"},{"name":"Halftone","sourcePath":"components/media/Halftone.jsx"},{"name":"Icon","sourcePath":"components/media/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/media/Icon.jsx"},{"name":"ICONS","sourcePath":"components/media/iconData.js"},{"name":"FolderTabs","sourcePath":"components/navigation/FolderTabs.jsx"},{"name":"IndexTab","sourcePath":"components/navigation/IndexTab.jsx"},{"name":"Dialog","sourcePath":"components/windows/Dialog.jsx"},{"name":"Window","sourcePath":"components/windows/Window.jsx"}],"sourceHashes":{"components/cards/FolderCard.jsx":"a608b9211328","components/cards/SpecCard.jsx":"d4f07f171ae7","components/core/Barcode.jsx":"75214f3abe32","components/core/Button.jsx":"47c65fa6b0f7","components/core/LabelChip.jsx":"97f6cbbf0342","components/core/RefCode.jsx":"ecd6751797a4","components/core/Stamp.jsx":"bbd0c8fa76f4","components/feedback/StatusStrip.jsx":"cbcfa352358b","components/forms/AnswerOption.jsx":"beecfa8a8b76","components/forms/Input.jsx":"52ec7ce6e4d8","components/forms/ProgressBar.jsx":"23ec2f632b94","components/media/Halftone.jsx":"62a372af8ef6","components/media/Icon.jsx":"49b90fd1dfd6","components/media/iconData.js":"4feb6f7e810e","components/navigation/FolderTabs.jsx":"baf5ec59b49f","components/navigation/IndexTab.jsx":"ca600bc3ce7e","components/windows/Dialog.jsx":"81b7898d8e70","components/windows/Window.jsx":"c5cb55ac11f9","site/js/activities.jsx":"c7488adbb1f0","site/js/data.js":"2481b922b29f","site/js/dictionary.jsx":"ba9b30beb41b","site/js/enrol.jsx":"e0f19dccc703","site/js/exam.jsx":"7343d201ac9f","site/js/flashcards.jsx":"7fe2f3584fb2","site/js/forms.jsx":"5747f183c1ba","site/js/games.jsx":"31ab66f22c1c","site/js/landing.jsx":"e4a3b1f907fe","site/js/lsd-components.js":"eaa533abece0","site/js/merch.jsx":"a908728de1cd","site/js/shell.jsx":"483baedd0206","site/js/student-card.jsx":"eaf4c1bb3d76","site/js/study.jsx":"a079dbdfe842","site/js/submit-word.jsx":"e0df64302cbb","ui_kits/microsite/Activities.jsx":"c7488adbb1f0","ui_kits/microsite/Dictionary.jsx":"ba9b30beb41b","ui_kits/microsite/Enrol.jsx":"e0f19dccc703","ui_kits/microsite/Exam.jsx":"7343d201ac9f","ui_kits/microsite/Flashcards.jsx":"7fe2f3584fb2","ui_kits/microsite/Forms.jsx":"5747f183c1ba","ui_kits/microsite/Games.jsx":"31ab66f22c1c","ui_kits/microsite/Landing.jsx":"e4a3b1f907fe","ui_kits/microsite/Merch.jsx":"a908728de1cd","ui_kits/microsite/Shell.jsx":"483baedd0206","ui_kits/microsite/StudentCard.jsx":"eaf4c1bb3d76","ui_kits/microsite/Study.jsx":"a079dbdfe842","ui_kits/microsite/SubmitWord.jsx":"e0df64302cbb","ui_kits/microsite/data.js":"2481b922b29f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LearnToSpeakDurbanDesignSystem_ec3271 = window.LearnToSpeakDurbanDesignSystem_ec3271 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Barcode.jsx
try { (() => {
// Deterministic decorative barcode generated from a string. Not scannable.
function Barcode({
  value = 'LSD-2026',
  height = 56,
  width = 240,
  showValue = false,
  color = 'var(--ink)',
  style
}) {
  const bars = React.useMemo(() => {
    let h = 2166136261;
    const out = [];
    const seed = value + value.split('').reverse().join('');
    for (let i = 0; i < 46; i++) {
      h ^= seed.charCodeAt(i % seed.length) + i;
      h = Math.imul(h, 16777619) >>> 0;
      out.push({
        w: 1 + h % 4,
        gap: 1 + (h >> 3) % 3
      });
    }
    return out;
  }, [value]);
  const total = bars.reduce((s, b) => s + b.w + b.gap, 0);
  let x = 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${total} 10`,
    width: width,
    height: height,
    preserveAspectRatio: "none",
    style: {
      display: 'block',
      shapeRendering: 'crispEdges'
    },
    "aria-hidden": "true"
  }, bars.map((b, i) => {
    const r = /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: x,
      y: "0",
      width: b.w,
      height: "10",
      fill: color
    });
    x += b.w + b.gap;
    return r;
  })), showValue && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.3em',
      textAlign: 'center',
      color: 'var(--ink)'
    }
  }, value));
}
Object.assign(__ds_scope, { Barcode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Barcode.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '6px 12px',
    fontSize: 11,
    minHeight: 30
  },
  md: {
    padding: '10px 18px',
    fontSize: 13,
    minHeight: 42
  },
  lg: {
    padding: '14px 26px',
    fontSize: 15,
    minHeight: 54
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--ink)',
    color: 'var(--paper-2)'
  },
  secondary: {
    background: 'var(--paper-2)',
    color: 'var(--ink)'
  },
  accent: {
    background: 'var(--yellow)',
    color: 'var(--ink)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ink)',
    borderColor: 'transparent'
  }
};
function Button({
  children,
  variant = 'secondary',
  size = 'md',
  brackets = false,
  icon,
  disabled = false,
  block = false,
  onClick,
  href,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const lift = !disabled && variant !== 'ghost';
  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-mono)',
    fontWeight: 700,
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    lineHeight: 1,
    border: '2px solid var(--ink)',
    borderRadius: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-snap) linear, box-shadow var(--dur-snap) linear, background var(--dur-snap) linear',
    ...SIZES[size],
    ...VARIANTS[variant],
    boxShadow: lift ? down ? '0 0 0 var(--ink)' : hover ? '4px 4px 0 var(--ink)' : '0 0 0 var(--ink)' : 'none',
    transform: lift ? down ? 'translate(0,0)' : hover ? 'translate(-2px,-2px)' : 'none' : 'none',
    opacity: disabled ? 0.4 : 1,
    ...(variant === 'ghost' && hover && !disabled ? {
      textDecoration: 'underline',
      textUnderlineOffset: 4
    } : null),
    ...(variant === 'secondary' && hover && !disabled ? {
      background: 'var(--yellow)'
    } : null),
    ...style
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon, brackets ? /*#__PURE__*/React.createElement("span", null, "[\xA0", children, "\xA0]") : /*#__PURE__*/React.createElement("span", null, children));
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false)
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: base,
    onClick: onClick
  }, handlers), content);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: base,
    onClick: onClick
  }, handlers), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/LabelChip.jsx
try { (() => {
function LabelChip({
  children,
  size = 'md',
  variant = 'outline',
  style
}) {
  const s = {
    sm: {
      fontSize: 14,
      padding: '3px 8px'
    },
    md: {
      fontSize: 22,
      padding: '4px 10px'
    },
    lg: {
      fontSize: 32,
      padding: '6px 14px'
    }
  }[size];
  const v = {
    outline: {
      background: 'var(--paper-2)',
      color: 'var(--ink)'
    },
    inverse: {
      background: 'var(--ink)',
      color: 'var(--paper-2)'
    },
    accent: {
      background: 'var(--yellow)',
      color: 'var(--ink)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      lineHeight: 1,
      border: '2px solid var(--ink)',
      ...s,
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { LabelChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LabelChip.jsx", error: String((e && e.message) || e) }); }

// components/cards/SpecCard.jsx
try { (() => {
function SpecCard({
  refCode = 'LSD-01',
  meta,
  label,
  chipVariant = 'outline',
  children,
  previewHeight = 240,
  crosshair = true,
  sourceLabel = 'SOURCE',
  sourceTag,
  source,
  footer,
  interactive = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const lifted = interactive && hover;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      display: 'flex',
      flexDirection: 'column',
      color: 'var(--ink)',
      cursor: onClick ? 'pointer' : undefined,
      boxShadow: lifted ? 'var(--shadow-hard)' : '0 0 0 var(--ink)',
      transform: lifted ? 'translate(-3px,-3px)' : 'none',
      transition: 'transform var(--dur-snap) linear, box-shadow var(--dur-snap) linear',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      borderBottom: '2px solid var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, refCode), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      textTransform: 'uppercase',
      fontSize: 10,
      letterSpacing: '0.08em'
    }
  }, meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: previewHeight,
      background: 'var(--bg-dots)',
      overflow: 'hidden'
    }
  }, crosshair && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 0,
      bottom: 0,
      width: 1,
      background: 'var(--paper-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      height: 1,
      background: 'var(--paper-4)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, children), label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.LabelChip, {
    variant: lifted ? 'accent' : chipVariant
  }, label))), (source || sourceTag) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '7px 12px',
      borderTop: '2px solid var(--ink)',
      borderBottom: '1px solid var(--ink)',
      background: 'var(--paper-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, sourceLabel), /*#__PURE__*/React.createElement("span", null, sourceTag)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.5,
      textWrap: 'pretty'
    }
  }, source)), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px',
      borderTop: '1px dashed var(--ink-3)'
    }
  }, footer));
}
Object.assign(__ds_scope, { SpecCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/SpecCard.jsx", error: String((e && e.message) || e) }); }

// components/core/RefCode.jsx
try { (() => {
function RefCode({
  code = 'LSD-2026',
  prefix = 'REF:',
  size = 'sm',
  style
}) {
  const fs = size === 'md' ? 12 : 10;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: fs,
      letterSpacing: '0.04em',
      color: 'var(--ink-3)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, prefix ? prefix + ' ' : '', code);
}
Object.assign(__ds_scope, { RefCode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RefCode.jsx", error: String((e && e.message) || e) }); }

// components/core/Stamp.jsx
try { (() => {
function Stamp({
  top = 'A public service by Gateway',
  middle = 'FLUENT',
  bottom = 'Certified · 2026',
  size = 150,
  rotate = -12,
  style
}) {
  const ring = {
    position: 'absolute',
    borderRadius: '50%',
    border: '2px solid var(--ink)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--yellow)',
      transform: `rotate(${rotate}deg)`,
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ring,
      inset: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...ring,
      inset: 12,
      borderWidth: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: size * 0.03,
      textAlign: 'center',
      color: 'var(--ink)',
      padding: size * 0.16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: Math.max(8, size * 0.058),
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      lineHeight: 1.15
    }
  }, top), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: size * 0.17,
      lineHeight: 1,
      borderTop: '2px solid var(--ink)',
      borderBottom: '2px solid var(--ink)',
      padding: '3px 2px 2px'
    }
  }, middle), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: Math.max(8, size * 0.058),
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }
  }, bottom)));
}
Object.assign(__ds_scope, { Stamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stamp.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusStrip.jsx
try { (() => {
function StatusStrip({
  items = [],
  label = 'STATUS',
  live = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.04em',
      color: 'var(--ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 12px',
      background: 'var(--ink)',
      color: 'var(--paper-2)',
      textTransform: 'uppercase',
      fontWeight: 700,
      letterSpacing: '0.1em',
      fontSize: 11,
      flex: 'none'
    }
  }, live && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: 'var(--yellow)'
    }
  }), label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '4px 0',
      padding: '8px 14px'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      whiteSpace: 'nowrap'
    }
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 12px',
      color: 'var(--ink-3)'
    }
  }, "\xB7"), it))));
}
Object.assign(__ds_scope, { StatusStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusStrip.jsx", error: String((e && e.message) || e) }); }

// components/forms/AnswerOption.jsx
try { (() => {
function AnswerOption({
  letter = 'a',
  children,
  state = 'idle',
  onClick,
  disabled,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const s = {
    idle: {
      bg: hover ? 'var(--paper-3)' : 'var(--paper-2)',
      fg: 'var(--ink)',
      mark: ''
    },
    selected: {
      bg: 'var(--yellow)',
      fg: 'var(--ink)',
      mark: '●'
    },
    correct: {
      bg: 'var(--yellow)',
      fg: 'var(--ink)',
      mark: '✓'
    },
    wrong: {
      bg: 'var(--ink)',
      fg: 'var(--paper-2)',
      mark: '✕'
    }
  }[state];
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'stretch',
      width: '100%',
      textAlign: 'left',
      padding: 0,
      border: '2px solid var(--ink)',
      borderRadius: 0,
      background: s.bg,
      color: s.fg,
      cursor: disabled ? 'default' : 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      lineHeight: 1.4,
      boxShadow: hover && state === 'idle' && !disabled ? 'var(--shadow-hard-sm)' : 'none',
      transform: hover && state === 'idle' && !disabled ? 'translate(-2px,-2px)' : 'none',
      transition: 'transform var(--dur-snap) linear, box-shadow var(--dur-snap) linear',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 48,
      display: 'grid',
      placeItems: 'center',
      borderRight: '2px solid currentColor',
      fontWeight: 700
    }
  }, "(", letter, ")"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      padding: '13px 16px',
      textWrap: 'pretty'
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 40,
      display: 'grid',
      placeItems: 'center',
      fontWeight: 700
    }
  }, s.mark));
}
Object.assign(__ds_scope, { AnswerOption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/AnswerOption.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  value,
  defaultValue,
  placeholder,
  onChange,
  hint,
  type = 'text',
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      boxShadow: focus ? 'var(--shadow-hard-sm)' : 'none',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '6px 10px',
      borderBottom: '1px solid var(--ink)',
      background: focus ? 'var(--yellow)' : 'var(--paper-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: '12px 12px',
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      color: 'var(--ink)',
      minWidth: 0
    }
  }), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 12px 8px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  max = 10,
  segments,
  label,
  showCount = true,
  style
}) {
  const n = segments || max;
  const filled = Math.round(value / max * n);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, (label || showCount) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showCount && /*#__PURE__*/React.createElement("span", null, String(value).padStart(2, '0'), "/", String(max).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      padding: 3,
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)'
    }
  }, Array.from({
    length: n
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: 12,
      background: i < filled ? 'var(--ink)' : 'transparent',
      outline: i < filled ? 'none' : '1px dotted var(--ink-3)',
      outlineOffset: -1
    }
  }))));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/media/Halftone.jsx
try { (() => {
// Halftone treatment: greyscale image (or tonal placeholder) under a dot screen, crushed by contrast.
function Halftone({
  src,
  alt = '',
  height = 220,
  dot = 6,
  caption,
  placeholder = 'beach',
  style
}) {
  const tones = {
    beach: 'radial-gradient(ellipse 60% 40% at 70% 18%, #fff 0, #fff 30%, transparent 70%), linear-gradient(180deg,#bbb 0,#ddd 38%,#555 40%,#8a8a8a 58%,#e8e8e8 62%,#cfcfcf 100%)',
    product: 'radial-gradient(ellipse 34% 40% at 50% 52%, #333 0, #555 50%, transparent 72%), linear-gradient(180deg,#eee,#c8c8c8)',
    portrait: 'radial-gradient(ellipse 22% 28% at 50% 38%, #444 0, #666 60%, transparent 75%), radial-gradient(ellipse 40% 30% at 50% 95%, #444 0, #666 60%, transparent 75%), linear-gradient(180deg,#eee,#bbb)'
  };
  const inner = {
    position: 'absolute',
    inset: -dot,
    background: src ? `center/cover no-repeat url(${src})` : tones[placeholder] || tones.beach,
    filter: `grayscale(1) blur(${Math.max(1, dot / 3)}px)`
  };
  const screen = {
    position: 'absolute',
    inset: 0,
    mixBlendMode: 'multiply',
    background: `radial-gradient(circle at center, #fff 0, #fff ${dot * 0.18}px, #000 ${dot * 0.62}px) 0 0/${dot}px ${dot}px`
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      overflow: 'hidden',
      background: '#fff',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      filter: 'contrast(18) grayscale(1)',
      background: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: inner,
    role: src ? 'img' : undefined,
    "aria-label": alt
  }), /*#__PURE__*/React.createElement("div", {
    style: screen
  })), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 8,
      bottom: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      background: 'var(--paper-2)',
      border: '1px solid var(--ink)',
      padding: '2px 6px',
      color: 'var(--ink)'
    }
  }, caption));
}
Object.assign(__ds_scope, { Halftone });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Halftone.jsx", error: String((e && e.message) || e) }); }

// components/media/iconData.js
try { (() => {
// Generated from pixelarticons@1.8.1 (MIT) + cooler-box (LSD addition)
const ICONS = {
  "alert": ["M13 1h-2v2H9v2H7v2H5v2H3v2H1v2h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5h-2V3h-2V1zm0 2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3v-2h2V9h2V7h2V5h2V3h2zm0 4h-2v6h2V7zm0 8h-2v2h2v-2z"],
  "arrow-left": ["M20 11v2H8v2H6v-2H4v-2h2V9h2v2h12zM10 7H8v2h2V7zm0 0h2V5h-2v2zm0 10H8v-2h2v2zm0 0h2v2h-2v-2z"],
  "arrow-right": ["M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2H4zm10-4h2v2h-2V7zm0 0h-2V5h2v2zm0 10h2v-2h-2v2zm0 0h-2v2h2v-2z"],
  "book-open": ["M3 3h8v2H3v12h8V5h2v12h8V5h-8V3h10v16H13v2h-2v-2H1V3h2zm16 7h-4v2h4v-2zm-4-3h4v2h-4V7zm2 6h-2v2h2v-2z"],
  "briefcase": ["M8 3h8v4h6v14H2V7h6V3zm2 4h4V5h-4v2zM4 9v10h16V9H4z"],
  "calendar": ["M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM5 8h14V6H5v2zm0 2v10h14V10H5z"],
  "card-text": ["M4 4H2v16h20V4H4zm0 2h16v12H4V6zm2 2h12v2H6V8zm0 4h10v2H6v-2z"],
  "check": ["M18 6h2v2h-2V6zm-2 4V8h2v2h-2zm-2 2v-2h2v2h-2zm-2 2h2v-2h-2v2zm-2 2h2v-2h-2v2zm-2 0v2h2v-2H8zm-2-2h2v2H6v-2zm0 0H4v-2h2v2z"],
  "chevron-down": ["M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7V8z"],
  "chevron-right": ["M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z"],
  "clock": ["M19 3H5v2H3v14h2v2h14v-2h2V5h-2V3zm0 2v14H5V5h14zm-8 2h2v6h4v2h-6V7z"],
  "close": ["M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z"],
  "downasaur": ["M6 4h14v2h2v6h-8v2h6v2h-4v2h-2v2H2V8h2V6h2V4zm2 6h2V8H8v2z"],
  "drag-and-drop": ["M5 3H3v2h2V3zm14 4h2v6h-2V9H9v10h4v2H7V7h12zM7 3h2v2H7V3zM5 7H3v2h2V7zm-2 4h2v2H3v-2zm2 4H3v2h2v-2zm6-12h2v2h-2V3zm6 0h-2v2h2V3zm-2 14v-2h6v2h-2v2h-2v2h-2v-4zm4 2v2h2v-2h-2z"],
  "file": ["M3 22h18V8h-2V6h-2v2h-2V6h2V4h-2V2H3v20zm2-2V4h8v6h6v10H5z"],
  "folder": ["M4 4h8v2h10v14H2V4h2zm16 4H10V6H4v12h16V8z"],
  "gamepad": ["M2 5h20v14H2V5zm18 12V7H4v10h16zM8 9h2v2h2v2h-2v2H8v-2H6v-2h2V9zm6 0h2v2h-2V9zm4 4h-2v2h2v-2z"],
  "headphone": ["M19 4H5v2H3v14h7v-8H5V6h14v6h-5v8h7V6h-2V4zm-3 10h3v4h-3v-4zm-8 0v4H5v-4h3z"],
  "human": ["M10 2h4v4h-4V2zM3 7h18v2h-6v13h-2v-6h-2v6H9V9H3V7z"],
  "label": ["M12 2H2v10h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h-2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v-2h-2v-2H8v-2H6v-2H4V4h8zM6 6h2v2H6V6z"],
  "lock": ["M15 2H9v2H7v4H4v14h16V8h-3V4h-2V2zm0 2v4H9V4h6zm-6 6h9v10H6V10h3zm4 3h-2v4h2v-4z"],
  "mail": ["M22 4H2v16h20V4zM4 18V6h16v12H4zM8 8H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8z"],
  "minus": ["M4 11h16v2H4z"],
  "mood-happy": ["M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm-5 6v-2H7v2h2zm6 0v2H9v-2h6zm0 0h2v-2h-2v2z"],
  "music": ["M8 4h12v16h-8v-8h6V8h-8v12H2v-8h6V4zm0 10H4v4h4v-4zm10 0h-4v4h4v-4z"],
  "notes": ["M5 2h16v20H3V2h2zm14 18V4H5v16h14zM7 6h10v2H7V6zm10 4H7v2h10v-2zM7 14h7v2H7v-2z"],
  "play": ["M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z"],
  "plus": ["M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4z"],
  "reload": ["M16 2h-2v2h2v2H4v2H2v5h2V8h12v2h-2v2h2v-2h2V8h2V6h-2V4h-2V2zM6 20h2v2h2v-2H8v-2h12v-2h2v-5h-2v5H8v-2h2v-2H8v2H6v2H4v2h2v2z"],
  "search": ["M6 2h8v2H6V2zM4 6V4h2v2H4zm0 8H2V6h2v8zm2 2H4v-2h2v2zm8 0v2H6v-2h8zm2-2h-2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm0-8h2v8h-2V6zm0 0V4h-2v2h2z"],
  "shopping-bag": ["M9 2h6v2H9V2zm6 4V4h2v2h4v16H3V6h4V4h2v2h6zm0 2H9v2H7V8H5v12h14V8h-2v2h-2V8z"],
  "sun": ["M13 3h-2v2h2V3zm4 2h2v2h-2V5zm-6 6h2v2h-2v-2zm-8 0h2v2H3v-2zm18 0h-2v2h2v-2zM5 5h2v2H5V5zm14 14h-2v-2h2v2zm-8 2h2v-2h-2v2zm-4-2H5v-2h2v2zM9 7h6v2H9V7zm0 8H7V9h2v6zm0 0v2h6v-2h2V9h-2v6H9z"],
  "trophy": ["M16 3H6v2H2v10h6V5h8v10h6V5h-4V3h-2zm4 4v6h-2V7h2zM6 13H4V7h2v6zm12 2H6v2h12v-2zm-7 2h2v2h3v2H8v-2h3v-2z"],
  "user": ["M15 2H9v2H7v6h2V4h6V2zm0 8H9v2h6v-2zm0-6h2v6h-2V4zM4 16h2v-2h12v2H6v4h12v-4h2v6H4v-6z"],
  "volume-3": ["M11 2H9v2H7v2H5v2H1v8h4v2h2v2h2v2h2V2zM7 18v-2H5v-2H3v-4h2V8h2V6h2v12H7zm6-8h2v4h-2v-4zm8-6h-2V2h-6v2h6v2h2v12h-2v2h-6v2h6v-2h2v-2h2V6h-2V4zm-2 4h-2V6h-4v2h4v8h-4v2h4v-2h2V8z"],
  "zap": ["M12 1h2v8h8v4h-2v-2h-8V5h-2V3h2V1zM8 7V5h2v2H8zM6 9V7h2v2H6zm-2 2V9h2v2H4zm10 8v2h-2v2h-2v-8H2v-4h2v2h8v6h2zm2-2v2h-2v-2h2zm2-2v2h-2v-2h2zm0 0h2v-2h-2v2z"],
  "cooler-box": ["M8 3h8v2H8zM6 5h2v2H6zM16 5h2v2h-2zM2 7h20v2H2zM2 9h2v11H2zM20 9h2v11h-2zM4 12h16v2H4zM4 20h16v2H4zM10 14h4v2h-4z"]
};
Object.assign(__ds_scope, { ICONS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/iconData.js", error: String((e && e.message) || e) }); }

// components/media/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  title,
  style
}) {
  const paths = __ds_scope.ICONS[name] || [];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    role: title ? 'img' : 'presentation',
    "aria-label": title,
    style: {
      display: 'block',
      flex: 'none',
      shapeRendering: 'crispEdges',
      ...style
    }
  }, paths.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d,
    fill: color
  })));
}
const ICON_NAMES = Object.keys(__ds_scope.ICONS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/FolderCard.jsx
try { (() => {
function FolderCard({
  index = '01',
  title,
  description,
  meta,
  active = false,
  tabOffset = 0,
  onClick,
  href,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const on = active || hover;
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      color: 'var(--ink)',
      cursor: 'pointer',
      transform: on ? 'translate(-3px,-3px)' : 'none',
      transition: 'transform var(--dur-snap) linear',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      paddingLeft: tabOffset
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '8px 16px',
      marginBottom: -2,
      border: '2px solid var(--ink)',
      borderBottom: 'none',
      borderRadius: '6px 6px 0 0',
      background: on ? 'var(--yellow)' : 'var(--paper-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.04em',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, index), /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'lowercase',
      whiteSpace: 'nowrap'
    }
  }, title))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 170,
      padding: '20px 20px 16px',
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      boxShadow: on ? 'var(--shadow-hard)' : '0 0 0 var(--ink)',
      transition: 'box-shadow var(--dur-snap) linear'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: 'clamp(26px, 2.4vw, 34px)',
      lineHeight: 0.95,
      letterSpacing: '-0.01em',
      textTransform: 'uppercase',
      textWrap: 'balance'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--ink-2)',
      textWrap: 'pretty'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, meta), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 28,
      height: 28,
      border: '2px solid var(--ink)',
      background: on ? 'var(--ink)' : 'transparent',
      color: on ? 'var(--yellow)' : 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 18
  })))));
}
Object.assign(__ds_scope, { FolderCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FolderCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FolderTabs.jsx
try { (() => {
// Site navigation as a row of file-folder tabs sitting on a rule. Active tab is yellow and joins the panel below.
function FolderTabs({
  items = [],
  active,
  onChange,
  style
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 4,
      borderBottom: '2px solid var(--ink)',
      paddingLeft: 12,
      overflowX: 'auto',
      scrollbarWidth: 'none',
      ...style
    }
  }, items.map(it => {
    const on = it.id === active;
    const hv = hover === it.id && !on;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => onChange && onChange(it.id),
      onMouseEnter: () => setHover(it.id),
      onMouseLeave: () => setHover(null),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: on ? '11px 16px 10px' : '8px 14px 7px',
        marginBottom: -2,
        border: '2px solid var(--ink)',
        borderBottom: on ? '2px solid var(--yellow)' : '2px solid var(--ink)',
        borderRadius: '6px 6px 0 0',
        background: on ? 'var(--yellow)' : hv ? 'var(--paper-3)' : 'var(--paper-2)',
        color: 'var(--ink)',
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
        transform: hv ? 'translateY(-3px)' : 'none',
        transition: 'transform var(--dur-snap) linear, background var(--dur-snap) linear'
      }
    }, it.index && /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, it.index), /*#__PURE__*/React.createElement("span", {
      style: {
        textTransform: 'lowercase'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { FolderTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FolderTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/IndexTab.jsx
try { (() => {
// One divider in the index-card drawer. The tab is a trapezoid sitting on a full-width card edge.
function IndexTab({
  number,
  word,
  letter,
  count,
  offset = 0,
  tabWidth = 220,
  active = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const isLetter = !!letter;
  const on = active || hover && !isLetter;
  const fill = isLetter ? 'var(--ink)' : on ? 'var(--yellow)' : 'var(--paper-2)';
  const fg = isLetter ? 'var(--paper-2)' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      height: 44,
      cursor: onClick ? 'pointer' : undefined,
      transform: on && !active ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-snap) linear',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 14,
      background: 'var(--paper-2)',
      border: '1.5px solid var(--ink)',
      borderBottom: 'none',
      borderRadius: '8px 8px 0 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: `min(${offset}%, calc(100% - ${typeof tabWidth === 'number' ? tabWidth + 'px' : tabWidth}))`,
      width: tabWidth,
      minWidth: 150,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 220 32",
    preserveAspectRatio: "none",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'visible'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 32 C 8 32 10 28 12 22 L 18 6 C 20 1 22 0 28 0 L 192 0 C 198 0 200 1 202 6 L 208 22 C 210 28 212 32 220 32",
    fill: fill,
    stroke: "var(--ink)",
    strokeWidth: "1.5",
    vectorEffect: "non-scaling-stroke"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      fontFamily: isLetter ? 'var(--font-mono)' : 'var(--font-grotesk)',
      fontSize: 15,
      fontWeight: isLetter ? 700 : 500,
      color: fg,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, isLetter ? letter : number), /*#__PURE__*/React.createElement("span", null, isLetter ? count : word))));
}
Object.assign(__ds_scope, { IndexTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/IndexTab.jsx", error: String((e && e.message) || e) }); }

// components/windows/Window.jsx
try { (() => {
function Ctrl({
  glyph,
  onClick,
  label,
  inverse
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    onClick: onClick,
    style: {
      width: 20,
      height: 20,
      padding: 0,
      display: 'grid',
      placeItems: 'center',
      border: '2px solid ' + (inverse ? 'var(--paper-2)' : 'var(--ink)'),
      background: 'transparent',
      color: 'inherit',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1,
      cursor: 'pointer',
      borderRadius: 0
    }
  }, glyph);
}
function Window({
  title = 'untitled.exe',
  meta,
  children,
  bar = 'plain',
  controls = ['min', 'close'],
  onClose,
  shadow = 'md',
  width,
  padding = 24,
  bodyStyle,
  style
}) {
  const inverse = bar === 'inverse';
  const barBg = {
    plain: 'var(--paper-2)',
    strip: 'var(--paper-3)',
    accent: 'var(--yellow)',
    inverse: 'var(--ink)',
    hatch: 'var(--paper-2)'
  }[bar];
  const shadows = {
    none: 'none',
    sm: 'var(--shadow-hard-sm)',
    md: 'var(--shadow-hard)',
    lg: 'var(--shadow-hard-lg)',
    grey: 'var(--shadow-grey)'
  };
  const glyphs = {
    min: '–',
    max: '□',
    close: '✕'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      boxShadow: shadows[shadow],
      color: 'var(--ink)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minHeight: 36,
      padding: '0 8px 0 12px',
      borderBottom: '2px solid var(--ink)',
      background: barBg,
      color: inverse ? 'var(--paper-2)' : 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
      background: bar === 'hatch' ? 'var(--paper-2)' : 'transparent',
      padding: bar === 'hatch' ? '0 8px' : 0
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      alignSelf: 'stretch',
      margin: '9px 0',
      background: bar === 'hatch' ? 'var(--bg-hatch)' : 'transparent'
    }
  }), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      opacity: 0.8
    }
  }, meta), controls.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, controls.map(c => /*#__PURE__*/React.createElement(Ctrl, {
    key: c,
    glyph: glyphs[c],
    label: c,
    inverse: inverse,
    onClick: c === 'close' ? onClose : undefined
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      flex: 1,
      ...bodyStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Window });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/windows/Window.jsx", error: String((e && e.message) || e) }); }

// components/windows/Dialog.jsx
try { (() => {
function Dialog({
  title = 'error.exe',
  kind = 'error',
  heading,
  children,
  actions,
  onClose,
  width = 420,
  style
}) {
  const icon = {
    error: 'alert',
    info: 'mood-happy',
    success: 'check',
    locked: 'lock'
  }[kind] || 'alert';
  const iconBox = kind === 'error' ? {
    background: 'var(--ink)',
    color: 'var(--yellow)'
  } : {
    background: 'var(--yellow)',
    color: 'var(--ink)'
  };
  return /*#__PURE__*/React.createElement(__ds_scope.Window, {
    title: title,
    bar: kind === 'error' ? 'inverse' : 'plain',
    controls: ['close'],
    onClose: onClose,
    width: width,
    shadow: "lg",
    padding: 0,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      padding: '22px 22px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      border: '2px solid var(--ink)',
      ...iconBox
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0
    }
  }, heading && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: 22,
      lineHeight: 1.05,
      textTransform: 'uppercase'
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      lineHeight: 1.5,
      textWrap: 'pretty'
    }
  }, children))), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      padding: '12px 22px 18px',
      borderTop: '1px dashed var(--ink-3)'
    }
  }, actions));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/windows/Dialog.jsx", error: String((e && e.message) || e) }); }

// site/js/activities.jsx
try { (() => {
const actNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function ClickOMeter() {
  const [v, setV] = React.useState(0.62);
  const stops = ['VAALIE', 'KOOK', 'LAATIE', 'BRU', 'FLUENT'];
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => setV(Math.random()),
    style: {
      width: '78%',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      justifyContent: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(actNS.Icon, {
    name: "headphone",
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 18
    }
  }, "\"GQ-!\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 22,
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      display: 'flex'
    }
  }, stops.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      flex: 1,
      borderLeft: i ? '1px solid var(--ink)' : 'none',
      background: i / stops.length < v ? 'var(--ink)' : 'transparent'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -8,
      left: `calc(${v * 100}% - 1px)`,
      width: 3,
      height: 34,
      background: 'var(--yellow)',
      outline: '1px solid var(--ink)',
      transition: 'left 200ms var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: '0.04em',
      gap: 4
    }
  }, stops.map(s => /*#__PURE__*/React.createElement("span", {
    key: s
  }, s))));
}
function SpotVaalie() {
  const marks = [[22, 40, 'flame shirt'], [64, 70, 'socks + slops'], [78, 28, 'gazebo']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(actNS.Halftone, {
    height: "100%",
    dot: 5,
    placeholder: "beach"
  }), marks.map(([x, y, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      position: 'absolute',
      left: x + '%',
      top: y + '%',
      transform: 'translate(-50%,-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      border: '2px dashed var(--ink)',
      background: 'rgba(255,90,46,.25)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      background: 'var(--paper-2)',
      border: '1px solid var(--ink)',
      padding: '1px 4px',
      whiteSpace: 'nowrap'
    }
  }, l))));
}
function JaNoLaka() {
  const {
    Button
  } = actNS;
  const [s, setS] = React.useState(3);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      width: '80%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      textAlign: 'center',
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      padding: '10px 14px'
    }
  }, "A robot is a traffic light."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setS(s + 1)
  }, "NO LAKA"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setS(Math.max(0, s - 1))
  }, "EISH, NO")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11
    }
  }, "Score: ", s, " soft-serves"));
}
function DurdleGrid() {
  const rows = [['K', 'O', 'O', 'K', ''], ['S', 'H', 'A', 'P', ''], ['', '', '', '', ''], ['', '', '', '', '']];
  const hit = {
    '0-0': 'y',
    '1-0': 'i',
    '1-1': 'i'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 32px)',
      gap: 5
    }
  }, rows.flatMap((r, ri) => r.map((c, ci) => {
    const h = hit[ri + '-' + ci];
    return /*#__PURE__*/React.createElement("span", {
      key: ri + '-' + ci,
      style: {
        width: 32,
        height: 32,
        display: 'grid',
        placeItems: 'center',
        border: '2px solid var(--ink)',
        background: h === 'y' ? 'var(--yellow)' : h === 'i' ? 'var(--ink)' : 'var(--paper-2)',
        color: h === 'i' ? 'var(--paper-2)' : 'var(--ink)',
        fontFamily: 'var(--font-pixel)',
        fontSize: 16
      }
    }, c);
  })));
}
function PackForDurban({
  onBad
}) {
  const items = [['Baggies', true], ['Sunscreen', true], ['Wetsuit', false], ['Fork', false]];
  const [packed, setPacked] = React.useState(['Baggies']);
  const add = (n, ok) => {
    if (!ok) return onBad(n);
    if (!packed.includes(n)) setPacked([...packed, n]);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, items.map(([n, ok]) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => add(n, ok),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      border: '2px solid var(--ink)',
      background: packed.includes(n) ? 'var(--paper-3)' : 'var(--paper-2)',
      padding: '4px 8px',
      cursor: 'grab',
      textAlign: 'left',
      textDecoration: packed.includes(n) ? 'line-through' : 'none'
    }
  }, n))), /*#__PURE__*/React.createElement(actNS.Icon, {
    name: "arrow-right",
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 96,
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      position: 'relative',
      padding: '18px 8px 6px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      fontFamily: 'var(--font-mono)',
      fontSize: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -10,
      left: 34,
      width: 40,
      height: 10,
      border: '2px solid var(--ink)',
      borderBottom: 'none'
    }
  }), packed.map(p => /*#__PURE__*/React.createElement("span", {
    key: p
  }, "\u2713 ", p))));
}
function Leaderboard() {
  const {
    Window,
    Icon
  } = actNS;
  return /*#__PURE__*/React.createElement(Window, {
    title: "top_students.txt",
    meta: "Live",
    controls: ['min', 'close'],
    shadow: "md",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trophy",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: 26,
      textTransform: 'uppercase'
    }
  }, "Top Students")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '28px 1fr auto auto',
      columnGap: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, ['#', 'Student', 'Exam', 'Games'].map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      padding: '6px 0',
      borderTop: '1px solid var(--ink)',
      borderBottom: '1px solid var(--ink)',
      background: 'var(--paper-3)',
      fontSize: 10,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      paddingLeft: h === '#' ? 16 : 0,
      paddingRight: h === 'Games' ? 16 : 0
    }
  }, h)), window.LSD_DATA.leaderboard.map(([n, e, g], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: n
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '9px 0 9px 16px',
      borderBottom: '1px dashed var(--paper-4)',
      fontWeight: 700
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '9px 0',
      borderBottom: '1px dashed var(--paper-4)'
    }
  }, i === 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--yellow)',
      padding: '0 4px'
    }
  }, n) : n), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '9px 0',
      borderBottom: '1px dashed var(--paper-4)'
    }
  }, e), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '9px 16px 9px 0',
      borderBottom: '1px dashed var(--paper-4)',
      textAlign: 'right'
    }
  }, g)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "Updated after every exam. Forks disqualify. Sand in the keyboard is fine."));
}
function Activities({
  initialError = 'Wetsuit',
  game
}) {
  const openGame = ref => {
    location.hash = 'act/' + ref.toLowerCase();
  };
  const {
    SpecCard,
    Button,
    Dialog,
    Icon
  } = actNS;
  const [err, setErr] = React.useState(initialError);
  const games = [{
    ref: 'GAME-01',
    label: 'Say Gqom',
    tag: 'MIC',
    src: 'Mic-based pronunciation test. The click-o-meter rates your gqom click from VAALIE to FLUENT.',
    body: /*#__PURE__*/React.createElement(ClickOMeter, null)
  }, {
    ref: 'GAME-02',
    label: 'Spot the Vaalie',
    tag: '3 TO FIND',
    src: 'Find the details in the beach scene: flame shirt, socks with slops, gazebo with cup holders.',
    body: /*#__PURE__*/React.createElement(SpotVaalie, null),
    nox: true
  }, {
    ref: 'GAME-03',
    label: 'Ja / No Laka',
    tag: '60 SEC',
    src: 'Rapid true-false. Agree? NO LAKA (it means yes, keep up). Disagree? EISH, NO. Score counted in soft-serves.',
    body: /*#__PURE__*/React.createElement(JaNoLaka, null)
  }, {
    ref: 'GAME-04',
    label: 'Durdle',
    tag: 'DAILY',
    src: 'Daily Durban-slang word game. Six tries. Today\u2019s word is in the Dictionary. So is tomorrow\u2019s. Hint hint.',
    body: /*#__PURE__*/React.createElement(DurdleGrid, null)
  }, {
    ref: 'GAME-05',
    label: 'Pack for Durban',
    tag: 'DRAG',
    src: 'Drag the essentials to the suitcase. The system will tell you if you are wrong. Loudly.',
    body: /*#__PURE__*/React.createElement(PackForDurban, {
      onBad: setErr
    })
  }, {
    ref: 'GAME-06',
    label: 'The 2pm Quiz',
    tag: 'LOCKED',
    src: 'Locked before 2pm. Come back after the beach.',
    locked: true,
    body: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        opacity: 0.9
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 48
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-pixel)',
        fontSize: 22
      }
    }, "14:00"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13
      }
    }, "Come back after the beach."))
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "02",
    kicker: "Practical study \xB7 six games",
    title: "Activities"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 640px), 1fr))',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: 28,
      position: 'relative'
    }
  }, games.map(g => /*#__PURE__*/React.createElement(SpecCard, {
    key: g.ref,
    refCode: g.ref,
    meta: g.locked ? 'Opens 14:00' : 'Play',
    label: g.label,
    chipVariant: g.locked ? 'inverse' : 'outline',
    crosshair: !g.nox,
    previewHeight: 230,
    sourceLabel: "SOURCE",
    sourceTag: g.tag,
    source: g.src,
    interactive: true,
    onClick: () => openGame(g.ref),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, g.locked ? 'Status: sunbathing' : 'Best: 9 soft-serves'), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: g.locked ? 'secondary' : 'primary',
      onClick: e => {
        e.stopPropagation();
        openGame(g.ref);
      }
    }, g.locked ? 'Peek' : 'Play full screen'))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'none',
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, g.body))), err && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '30%',
      top: '58%',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(Dialog, {
    title: "pack_for_durban.exe",
    kind: "error",
    heading: err === 'Fork' ? 'ABSOLUTELY NOT' : '\u26A0 Error: wetsuit detected.',
    width: 400,
    onClose: () => setErr(null),
    actions: err === 'Fork' ? /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => setErr(null)
    }, "Remove fork") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setErr(null)
    }, "OK"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => setErr(null)
    }, "OK, bru"))
  }, err === 'Fork' ? 'Forks are not permitted within 50km of a bunny.' : 'Baggies required.'))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 140,
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement(Leaderboard, null))), game && /*#__PURE__*/React.createElement(GameScreen, {
    id: game,
    onBack: () => {
      location.hash = 'act';
    }
  }));
}
Object.assign(window, {
  Activities
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/activities.jsx", error: String((e && e.message) || e) }); }

// site/js/data.js
try { (() => {
window.LSD_DATA = {
  words: [['01', 'Aweh', 'interj.', 'The standard greeting. Also: yes, agreed, understood, and I see you. One word, four meanings, zero effort.', 'Aweh, bru. Long time.'], ['02', 'Ekse', 'interj.', 'Used to open a sentence, or to request attention. Roughly "I say", but with better posture.', 'Ekse, is that your bunny?'], ['03', 'Kiff', 'adj.', 'Good. Excellent. Of acceptable quality to a person standing on a beach.', 'The water is kiff today.'], ['04', 'Chips!', 'interj.', 'A warning. Shouted to alert others that trouble — or a parent — is approaching. Not a snack.', 'Chips! Chips! Here comes the lifeguard.'], ['05', 'Baggies', 'n. pl.', 'Loose board shorts. The formal attire of the coast. Required at all lessons.', 'He wore baggies to the wedding. Nobody minded.'], ['06', 'Logging', 'v.', 'Longboarding. Rolling down the promenade on a long skateboard, slowly, with excellent posture. No trees are involved.', 'We\u2019re logging down to uShaka after lunch.'], ['07', 'One time', 'adv.', 'Truly. Honestly. Confirms that the preceding statement is not a joke.', 'That was the best bunny of my life, one time.'], ['08', 'Scheming', 'v.', 'Thinking, with conviction. Halfway between an opinion and a plan. Roughly \u201cI rate\u201d. No actual scheme required, although one is usually forming.', 'I scheme we go to the beach, bru.'], ['09', 'Choon', 'v.', 'To tell, to talk, to give your opinion whether or not anyone asked. Used before important information and also before unimportant information.', 'Let me choon you something about this bunny.'], ['10', 'Gqom', 'n.', 'Durban\u2019s own electronic dance music. Pronounced with a click. Practise the click in GAME-01.', 'The gqom was so loud the windows were dancing.'], ['11', 'Jol', 'n. / v.', 'A party, or the act of having one. Can describe an evening, a weekend or an attitude.', 'Big jol at the beach tonight.'], ['12', 'Larney', 'adj.', 'Fancy. Posh. Slightly too expensive for baggies.', 'Look at you in your larney shoes.'], ['13', 'Bunny', 'n.', 'A quarter loaf of bread, hollowed and filled with curry. Eaten with the hands. The bread is the plate. The bread is also the spoon.', 'Quarter mutton bunny, extra gravy. No fork.'], ['14', 'Shap', 'interj.', 'Fine. Good. Agreed. A complete conversation in one syllable.', 'Shap, see you at six.'], ['15', 'Shot', 'interj.', 'Thanks. Also: well done. Delivered with a nod.', 'Shot for the lift, bru.'], ['16', 'Ducking out', 'v. phr.', 'Leaving. Usually quietly, usually early, usually towards the beach.', 'I\u2019m ducking out before the traffic.'], ['17', 'The coast', 'n.', 'Durban and its surroundings, referred to as though there were no other coast.', 'We\u2019re going down the coast for the weekend.'], ['18', 'Chow', 'v. / n.', 'To eat; food. "Chow now" is also a farewell.', 'Let\u2019s chow, I\u2019m starving.'], ['19', 'Prawn', 'n.', 'An idiot. A fool. Someone who has done something only a prawn would do. Usually behind the wheel.', 'That prawn just parked across three bays.'], ['20', 'Kook', 'n.', 'A beginner surfer, or anyone who has bought more gear than they have used.', 'Brand new board, never been wet. Total kook.'], ['21', 'Robot', 'n.', 'A traffic light. Not a machine. Turn left at the second robot.', 'Turn left at the robot by the garage.'], ['22', 'Smaak', 'v.', 'To like, very much. Applies to people, food and weather.', 'I smaak this weather.'], ['23', 'Dala', 'v.', 'To do. To get on with it. "Dala what you must."', 'Just dala what you must, bru.'], ['24', 'Laatie', 'n.', 'A young person. A kid. Anyone younger than the speaker.', 'The laatie paddled out further than all of us.'], ['25', 'Bru', 'n.', 'Brother. Friend. Stranger at a robot. The most important word in this course.', 'Shot, bru.'], ['26', 'Vaalie', 'n.', 'A visitor from inland, identifiable by socks with slops and an umbrella with cup holders.', 'Spot the vaalie: he\u2019s the one with the gazebo.'], ['27', 'Pozi', 'n.', 'Home; one\u2019s place. Where you return after a long day of logging.', 'Come through to my pozi later.'], ['28', 'Vy', 'v.', 'To go. To leave. Also used to suggest that others go.', 'Let\u2019s vy, the bunnies are getting cold.'], ['29', 'Tops', 'adj.', 'The best. Excellent. Of the highest available quality. No higher rating exists.', 'This drink is tops!'], ['30', 'No laka', 'interj.', 'Yes. Enthusiastic agreement, despite starting with “no”. Related to “ja no” and “no ja”, which also mean yes. Visitors find this confusing. Locals find visitors confusing.', 'Another bunny? No laka, bru.'], ['31', 'Mfethu', 'n.', 'Brother; my guy. Warmer than bru, if that were possible.', 'Mfethu! Where have you been?'], ['32', 'Yano', 'n.', 'Amapiano, shortened. The log-drum-heavy dance music you hear from every car at the robot. Too good to need all four syllables.', 'They played yano until the sun came up.']],
  exam: [{
    "w": "01",
    "q": "A friend greets you on the promenade with \"Aweh.\" The correct reply is:",
    "a": ["Good afternoon.", "Aweh.", "Please state your business."],
    "c": 1
  }, {
    "w": "02",
    "q": "\"Ekse\" at the start of a sentence means:",
    "a": ["Excuse me, I am leaving.", "Attention, please — something important follows.", "Exactly."],
    "c": 1
  }, {
    "w": "03",
    "q": "\"The water is kiff today.\" The water is:",
    "a": ["Good.", "Cold.", "Closed."],
    "c": 0
  }, {
    "w": "04",
    "q": "Someone shouts \"Chips!\" across the beach. You should:",
    "a": ["Order a large portion.", "Look out — trouble is coming.", "Check the menu."],
    "c": 1
  }, {
    "w": "05",
    "q": "Which item is required at all lessons?",
    "a": ["A wetsuit.", "A fork.", "Baggies."],
    "c": 2
  }, {
    "w": "06",
    "q": "\"We're logging down to uShaka.\" You will need:",
    "a": ["An axe.", "A longboard.", "A sleeping bag."],
    "c": 1
  }, {
    "w": "07",
    "q": "\"That was the best bunny of my life, one time.\" The speaker:",
    "a": ["Means it. Truly.", "Has only eaten one bunny.", "Is joking."],
    "c": 0
  }, {
    "w": "08",
    "q": "\"I scheme we go to the beach.\" Your friend is:",
    "a": ["Plotting something illegal.", "Confidently suggesting the beach.", "Unsure."],
    "c": 1
  }, {
    "w": "09",
    "q": "\"Let me choon you something.\" Your friend is about to:",
    "a": ["Sing a song.", "Tell you something, at length.", "Tune a guitar."],
    "c": 1
  }, {
    "w": "10",
    "q": "Gqom is:",
    "a": ["Durban’s own electronic dance music.", "A type of curry.", "A beach umbrella."],
    "c": 0
  }, {
    "w": "11",
    "q": "\"Big jol at the beach tonight.\" You should bring:",
    "a": ["A gazebo with cup holders.", "Yourself, in baggies.", "A permit."],
    "c": 1
  }, {
    "w": "12",
    "q": "Your friend arrives in larney shoes. The shoes are:",
    "a": ["Fancy.", "Borrowed.", "Wet."],
    "c": 0
  }, {
    "w": "13",
    "q": "The bunny arrives with a side salad. You:",
    "a": ["Ask for a fork", "Call the police", "Both — this is a crime scene."],
    "c": 2
  }, {
    "w": "14",
    "q": "\"Shap, see you at six.\" This means:",
    "a": ["Agreed. See you at six.", "Hurry up.", "Bring snacks."],
    "c": 0
  }, {
    "w": "15",
    "q": "Someone gives you a lift home. The fluent thank-you is:",
    "a": ["Thank you kindly.", "Shot, bru.", "Please leave a review."],
    "c": 1
  }, {
    "w": "16",
    "q": "\"I’m ducking out before the traffic.\" The speaker is:",
    "a": ["Swimming.", "Hiding from a duck.", "Leaving."],
    "c": 2
  }, {
    "w": "17",
    "q": "\"We’re going down the coast.\" Which coast?",
    "a": ["The coast.", "The west coast.", "Please specify."],
    "c": 0
  }, {
    "w": "18",
    "q": "Complete the farewell: \"Chow ___\"",
    "a": ["later", "now", "never"],
    "c": 1
  }, {
    "w": "19",
    "q": "\"That prawn just parked across three bays.\" The prawn is:",
    "a": ["Seafood.", "An idiot.", "A valet."],
    "c": 1
  }, {
    "w": "20",
    "q": "Brand new board, never been wet. Its owner is a:",
    "a": ["Kook.", "Laatie.", "Lifeguard."],
    "c": 0
  }, {
    "w": "21",
    "q": "\"Turn left at the robot\" means turn left at the:",
    "a": ["Machine.", "Traffic light.", "Mall entrance."],
    "c": 1
  }, {
    "w": "22",
    "q": "\"I smaak this weather\" expresses:",
    "a": ["A complaint.", "A weather warning.", "Strong approval."],
    "c": 2
  }, {
    "w": "23",
    "q": "\"Just dala what you must.\" You should:",
    "a": ["Get on with it.", "Ask for a form.", "Wait for instructions."],
    "c": 0
  }, {
    "w": "24",
    "q": "The laatie paddled out further than everyone. The laatie is:",
    "a": ["The lifeguard.", "A young person.", "A dog."],
    "c": 1
  }, {
    "w": "25",
    "q": "The most important word in this course is:",
    "a": ["Bru.", "Fork.", "Wetsuit."],
    "c": 0
  }, {
    "w": "26",
    "q": "Socks with slops. Gazebo with cup holders. This is a:",
    "a": ["Laatie.", "Kook.", "Vaalie."],
    "c": 2
  }, {
    "w": "27",
    "q": "\"Come through to my pozi later.\" You are going to their:",
    "a": ["Office.", "Home.", "Pool."],
    "c": 1
  }, {
    "w": "28",
    "q": "\"Let’s vy, the bunnies are getting cold.\" You should:",
    "a": ["Go.", "Wait.", "Reheat."],
    "c": 0
  }, {
    "w": "29",
    "q": "\"This drink is tops!\" The drink is:",
    "a": ["The best.", "On top of the fridge.", "Finished."],
    "c": 0
  }, {
    "w": "30",
    "q": "You offer your bru another bunny. He says \"No laka.\" He has just:",
    "a": ["Declined politely.", "Agreed. Enthusiastically.", "Insulted the bunny."],
    "c": 1
  }, {
    "w": "31",
    "q": "You spot your oldest friend across the beachfront. You shout:",
    "a": ["Mfethu!", "Excuse me, sir!", "Chips!"],
    "c": 0
  }, {
    "w": "32",
    "q": "\"They played yano all night.\" They played:",
    "a": ["Piano lessons.", "Amapiano.", "Hide and seek."],
    "c": 1
  }],
  leaderboard: [['BunnyChowBrad', '10/10', '12'], ['NoLakaNelly', '10/10', '11'], ['ShapShapSipho', '9/10', '9'], ['VaalieInRecovery', '8/10', '7'], ['KiffKelly', '8/10', '6'], ['DalaDave', '7/10', '4']],
  merch: [{
    id: 'MERCH-01',
    name: 'AWEH.',
    kind: 'Tee',
    price: 'R 349',
    desc: 'One-word slang tee. Says hello so you don’t have to.',
    tee: true
  }, {
    id: 'MERCH-02',
    name: 'EKSE.',
    kind: 'Tee',
    price: 'R 349',
    desc: 'One-word slang tee. Starts conversations. Doesn’t finish them.',
    tee: true
  }, {
    id: 'MERCH-03',
    name: 'SHAP.',
    kind: 'Tee',
    price: 'R 349',
    desc: 'One-word slang tee. Ends conversations. An exit strategy in cotton.',
    tee: true
  }, {
    id: 'MERCH-04',
    name: 'Fluent in Durban',
    kind: 'Bumper sticker',
    price: 'R 59',
    desc: 'For the car. Visible from the robot.'
  }, {
    id: 'MERCH-05',
    name: 'Native Speaker',
    kind: 'Cap',
    price: 'R 279',
    desc: 'Embroidered. Worn backwards by graduates only.'
  }, {
    id: 'MERCH-06',
    name: 'Certificate of Fluency',
    kind: 'Framed',
    price: 'R 499',
    desc: 'Your certificate, framed. Hang it where the vaalies can see.'
  }, {
    id: 'MERCH-07',
    name: 'Beach Towel',
    kind: 'Towel',
    price: 'R 449',
    desc: 'All 32 words, edge to edge. Study while you tan.'
  }, {
    id: 'MERCH-08',
    name: 'Kook Starter Pack',
    kind: 'Bundle',
    price: 'R 399',
    desc: 'Just baggies and sunscreen. Everything you actually need.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/data.js", error: String((e && e.message) || e) }); }

// site/js/dictionary.jsx
try { (() => {
const dictNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function buildDrawer(words) {
  const sorted = [...words].sort((a, b) => a[1].replace(/^The /, 'T').localeCompare(b[1].replace(/^The /, 'T')));
  const rows = [];
  let cur = null;
  const counts = {};
  sorted.forEach(w => {
    const L = w[1].replace(/^The /, 'T')[0].toUpperCase();
    counts[L] = (counts[L] || 0) + 1;
  });
  const cols = [40, 60, 26, 52, 34, 64];
  sorted.forEach((w, i) => {
    const L = w[1].replace(/^The /, 'T')[0].toUpperCase();
    if (L !== cur) {
      rows.push({
        letter: L,
        count: String(counts[L]).padStart(3, '0'),
        offset: 4 + rows.length % 3 * 6
      });
      cur = L;
    }
    rows.push({
      w,
      offset: cols[i % cols.length]
    });
  });
  return rows;
}
function EntryCard({
  w,
  playing,
  setPlaying
}) {
  const {
    Button,
    RefCode,
    Barcode,
    ProgressBar,
    Icon
  } = dictNS;
  const [num, word, pos, def, ex] = w;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      padding: '9px 22px',
      marginBottom: -2,
      background: 'var(--yellow)',
      border: '2px solid var(--ink)',
      borderBottom: 'none',
      borderRadius: '8px 8px 0 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 700,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", null, num), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 600
    }
  }, word))), /*#__PURE__*/React.createElement("article", {
    style: {
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-hard-lg)',
      padding: '28px 32px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      transform: 'rotate(-0.6deg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    prefix: "",
    code: 'LSD-' + num + ' · Entry ' + num + ' of 32'
  }), /*#__PURE__*/React.createElement(RefCode, {
    code: "LSD-2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: 84,
      lineHeight: 0.9,
      letterSpacing: '-0.02em'
    }
  }, word), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--ink-2)'
    }
  }, pos)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 17,
      lineHeight: 1.55,
      textWrap: 'pretty'
    }
  }, def), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '5px 10px',
      background: 'var(--paper-3)',
      borderBottom: '1px solid var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.1em'
    }
  }, "EXAMPLE"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 12px',
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      fontStyle: 'italic'
    }
  }, "\u201C", ex, "\u201D")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: playing ? 'accent' : 'primary',
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: playing ? 'volume-3' : 'play',
      size: 18
    }),
    onClick: () => setPlaying(!playing)
  }, playing ? 'On air — Radio lesson ' + num : 'Hear it'), /*#__PURE__*/React.createElement(Barcode, {
    value: 'LSD-' + num + word,
    width: 130,
    height: 30
  })), playing && /*#__PURE__*/React.createElement(ProgressBar, {
    label: 'Radio lesson ' + num + ' · ' + word,
    value: 3,
    max: 10,
    showCount: false
  })));
}
function Dictionary() {
  const {
    IndexTab
  } = dictNS;
  const words = window.LSD_DATA.words;
  const rows = React.useMemo(() => buildDrawer(words), []);
  const [open, setOpen] = React.useState('13');
  const [playing, setPlaying] = React.useState(false);
  const w = words.find(x => x[0] === open);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "01",
    kicker: "Reference \xB7 do not remove from the drawer",
    title: "The Dictionary",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        maxWidth: 300,
        lineHeight: 1.5,
        textAlign: 'right'
      }
    }, "Filed alphabetically. Numbered by lesson. Dusted weekly. Pull any card to read the full entry.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-3)',
      border: '2px solid var(--ink)',
      borderBottom: 'none',
      padding: '18px 14px 0'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginTop: i ? -14 : 0,
      padding: `0 ${Math.max(0, (rows.length - i) * 0.35)}px`,
      position: 'relative',
      zIndex: i
    }
  }, r.letter ? /*#__PURE__*/React.createElement(IndexTab, {
    letter: r.letter,
    count: r.count,
    offset: r.offset,
    tabWidth: "28%"
  }) : /*#__PURE__*/React.createElement(IndexTab, {
    number: r.w[0],
    word: r.w[1],
    offset: r.offset,
    tabWidth: "34%",
    active: r.w[0] === open,
    onClick: () => {
      setOpen(r.w[0]);
      setPlaying(false);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22,
      background: 'var(--paper-2)',
      borderTop: '1.5px solid var(--ink)',
      margin: '0 -14px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 110,
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      boxShadow: 'var(--shadow-hard)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontSize: 20,
      fontWeight: 500,
      background: 'var(--yellow)',
      border: '1.5px solid var(--ink)',
      borderRadius: 6,
      padding: '6px 22px'
    }
  }, "the whole language, filed."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      bottom: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--ink-3)'
    }
  }, "DRAWER 01 / 01 \xB7 LSD-01 \u2013 LSD-32 \xB7 SAND INSIDE: LIKELY"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 140
    }
  }, /*#__PURE__*/React.createElement(EntryCard, {
    w: w,
    playing: playing,
    setPlaying: setPlaying
  }))));
}
Object.assign(window, {
  Dictionary
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/dictionary.jsx", error: String((e && e.message) || e) }); }

// site/js/enrol.jsx
try { (() => {
const enrolNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function EnrolTease({
  mobile
}) {
  const {
    Icon,
    RefCode,
    Button
  } = enrolNS;
  const toForm = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      const el = document.querySelector('input[autocomplete="given-name"]');
      if (el) el.focus({
        preventScroll: true
      });
    }, 400);
  };
  const items = [['01', 'The Dictionary', '32 words on index cards, each with a radio lesson.', 'B——y  n.  A quarter loaf of █████, hollowed and ██████ with curry.'], ['02', 'Activities', 'Six games, from Say Gqom to Spot the Vaalie, plus the leaderboard.', 'GAME-01 … GAME-06  ·  TOP STUDENTS: ████████'], ['03', 'Merch', 'Course materials. Mostly tees. One cooler box.', 'MERCH-01  ████.  Tee  ·  R ███'], ['04', 'Submit a Word', 'Know one we missed? File it with Gateway.', 'FORM W-05  ·  Review: 4 steps'], ['05', 'Study Pack', 'Download the course for the flight. Works offline.', 'PACK-01 … PACK-06  ·  51.0 MB'], ['06', 'Student Card', 'Upload a selfie. Get pixelated. Post it to your story.', 'STUDENT: █████  ·  FORKS ON PERSON: 0'], ['07', 'Flashcards', 'All 32 words on flip cards. Guess, flip, file as known.', 'LSD-13  ·  FRONT: B████  ·  BACK: ███████'], ['08', 'The Final Exam', '32 questions. Pass and your Certificate of Fluency prints itself.', 'Q13/32  The bunny arrives with a ████ █████. You:']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: mobile ? 44 : 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 20,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, "Enrolment unlocks"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: mobile ? 40 : 'clamp(44px, 5vw, 72px)',
      lineHeight: 0.9,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase'
    }
  }, "Eight files.", /*#__PURE__*/React.createElement("br", null), "Currently locked.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.5,
      maxWidth: 340
    }
  }, "Everything below opens the moment you enrol. Contents partially redacted by Gateway\u2019s legal team (one guy, Dave).")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
      gap: 22
    }
  }, items.map(([n, t, d, peek], i) => /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    onClick: toForm,
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      paddingLeft: [0, 24, 48, 12, 36, 60, 18, 42][i]
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '7px 14px',
      marginBottom: -2,
      border: '2px solid var(--ink)',
      borderBottom: 'none',
      borderRadius: '6px 6px 0 0',
      background: 'var(--paper-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("b", null, n), /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'lowercase'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '18px 18px 14px',
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: 28,
      lineHeight: 0.95,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 8px 3px 4px',
      background: 'var(--ink)',
      color: 'var(--paper-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.08em'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 16
  }), "LOCKED")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--ink-2)',
      textWrap: 'pretty'
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: '10px 10px',
      border: '1px dashed var(--ink-3)',
      background: 'var(--bg-dots)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      whiteSpace: 'pre-wrap',
      overflow: 'hidden',
      color: 'var(--ink-2)'
    }
  }, peek))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 28,
      padding: '16px 18px',
      border: '2px solid var(--ink)',
      background: 'var(--yellow)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 700
    }
  }, "Eight files. One form. Course fee: free."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    brackets: true,
    onClick: toForm
  }, "Unlock the course")));
}
function Enrol({
  onDone,
  mobile,
  initial
}) {
  const {
    Window,
    Button,
    Barcode,
    RefCode,
    Dialog,
    StatusStrip
  } = enrolNS;
  const [f, setF] = React.useState({
    name: '',
    email: '',
    consent: false,
    promise: false
  });
  const [err, setErr] = React.useState({});
  const [done, setDone] = React.useState(initial === 'done' ? {
    no: 'LSD-2026-04417',
    name: 'Thandi'
  } : null);
  const set = k => v => {
    setF({
      ...f,
      [k]: v
    });
    if (err[k]) setErr({
      ...err,
      [k]: null
    });
  };
  const submit = e => {
    e.preventDefault();
    const x = {};
    if (!f.name.trim()) x.name = 'Gateway needs this';
    if (!isEmail(f.email)) x.email = f.email ? 'That looks like a vaalie typed it' : 'Gateway needs this';
    if (!f.consent) x.consent = 'Tick it. It is free, bru';
    setErr(x);
    if (Object.keys(x).length) return;
    const no = 'LSD-2026-' + String(Math.floor(10000 + Math.random() * 89999));
    // Mock capture. In production, POST { name, email, consent, source: 'lsd-enrol' } to the CRM here.
    localStorage.setItem('lsd-enrolled', '1');
    localStorage.setItem('lsd-name', f.name.trim());
    localStorage.setItem('lsd-email', f.email.trim());
    localStorage.setItem('lsd-student', no);
    setDone({
      no,
      name: f.name.trim()
    });
  };
  const rows = [['Lessons', '32 · real Durban slang'], ['Final exam', '32 questions · written on site'], ['Games', '6 · plus the leaderboard'], ['Study Pack', 'Download for the flight · works offline'], ['Certificate', 'Your name on it · redeemable at Gateway, Durban'], ['Course fee', 'Free']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      maxWidth: 'var(--page-max)',
      width: '100%',
      margin: '0 auto',
      padding: mobile ? '14px 16px' : '20px 64px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      borderBottom: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: mobile ? 16 : 20,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em'
    }
  }, "Learn to Speak Durban"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: 'var(--yellow)',
      border: '1px solid var(--ink)'
    }
  }), "Enrolment desk \xB7 open")), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      maxWidth: 'var(--page-max)',
      width: '100%',
      margin: '0 auto',
      padding: mobile ? '28px 16px 0' : '64px 64px 0'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      gap: mobile ? 28 : 56,
      alignItems: 'flex-start',
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      boxShadow: mobile ? 'var(--shadow-hard)' : 'var(--shadow-hard-lg)',
      padding: mobile ? '36px 18px 22px' : '56px 56px 48px'
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    code: "LSD-2026 \xB7 FORM E-01",
    style: {
      position: 'absolute',
      top: 10,
      left: 12
    }
  }), !mobile && /*#__PURE__*/React.createElement(Barcode, {
    value: "LSD-ENROL",
    width: 160,
    height: 36,
    style: {
      position: 'absolute',
      top: 14,
      right: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '999 1 480px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: mobile ? 18 : 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: mobile ? 11 : 13,
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, "A public service by Gateway"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: mobile ? 54 : 'clamp(56px, 7.6vw, 124px)',
      lineHeight: 0.86,
      letterSpacing: '-0.03em',
      textTransform: 'uppercase'
    }
  }, "Learn to", /*#__PURE__*/React.createElement("br", null), "Speak ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontWeight: 400,
      fontSize: '0.86em',
      letterSpacing: '-0.02em',
      background: 'var(--yellow)',
      padding: '0 0.06em'
    }
  }, "Durban")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 540,
      fontFamily: 'var(--font-mono)',
      fontSize: mobile ? 14 : 16,
      lineHeight: 1.55,
      textWrap: 'pretty'
    }
  }, "The course the whole country is passing happily. Enrol to open all 32 lessons, write the final exam and receive your Certificate of Fluency."), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--ink)',
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '7px 12px',
      background: 'var(--paper-3)',
      borderBottom: '1px solid var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "ENROLMENT INCLUDES"), /*#__PURE__*/React.createElement("span", null, "2026 INTAKE")), rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '96px 1fr' : '130px 1fr',
      gap: 12,
      padding: '9px 12px',
      borderTop: i ? '1px dashed var(--ink-3)' : 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      textTransform: 'uppercase',
      fontSize: 11,
      letterSpacing: '0.06em',
      paddingTop: 2
    }
  }, k), /*#__PURE__*/React.createElement("span", null, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 360px',
      minWidth: 0,
      maxWidth: mobile ? undefined : 460
    }
  }, /*#__PURE__*/React.createElement(Window, {
    title: "enrolment_form.exe",
    bar: "accent",
    meta: "Step 1 of 1",
    controls: ['close'],
    shadow: "md",
    padding: 0
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: mobile ? 16 : 22
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "First name",
    value: f.name,
    onChange: set('name'),
    placeholder: "Your actual name. Not \u201CBru\u201D.",
    autoComplete: "given-name",
    error: err.name
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email address",
    type: "email",
    value: f.email,
    onChange: set('email'),
    placeholder: "you@example.co.za",
    autoComplete: "email",
    error: err.email
  }), /*#__PURE__*/React.createElement(Tick, {
    checked: f.consent,
    onChange: set('consent'),
    error: err.consent
  }, "Send me lessons, exam reminders and Gateway rewards. Unsubscribe any time \u2014 no hard feelings, bru."), /*#__PURE__*/React.createElement(Tick, {
    checked: f.promise,
    onChange: set('promise')
  }, "I promise not to bring a wetsuit. (Optional, but noted.)"), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    block: true,
    brackets: true
  }, "Enrol, bru"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      lineHeight: 1.5,
      color: 'var(--ink-3)'
    }
  }, "Your details are handled by Gateway in line with its ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--ink)'
    }
  }, "privacy policy"), ". One enrolment per student. Clones must enrol separately."))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onDone('home'),
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'block',
      marginTop: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textDecoration: 'underline',
      textUnderlineOffset: 4
    }
  }, "Already enrolled? Go to the course (we trust you)"))), /*#__PURE__*/React.createElement(EnrolTease, {
    mobile: mobile
  }), /*#__PURE__*/React.createElement(StatusStrip, {
    label: "Intake",
    items: ['Students enrolled today: 1,204', 'Forks confiscated: 37', 'Course fee: free', 'Fluency: guaranteed-ish'],
    style: {
      marginTop: mobile ? 28 : 40
    }
  })), /*#__PURE__*/React.createElement(Footer, {
    mobile: mobile
  }), done && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 40,
      display: 'grid',
      placeItems: 'center',
      padding: 16,
      background: 'rgba(242,241,236,.6)'
    }
  }, /*#__PURE__*/React.createElement(Dialog, {
    title: "enrolment.exe",
    kind: "success",
    heading: "Enrolment confirmed.",
    width: mobile ? '100%' : 440,
    onClose: () => onDone('home'),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onDone('home')
    }, "Go to the index"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => onDone('dict')
    }, "Begin Lesson 1"))
  }, "Welcome to the coast, ", done.name, ". Student no. ", /*#__PURE__*/React.createElement("b", null, done.no), ". Your first lesson is on its way to your inbox. Check spam. Gateway is new at email.")));
}
Object.assign(window, {
  Enrol
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/enrol.jsx", error: String((e && e.message) || e) }); }

// site/js/exam.jsx
try { (() => {
const examNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function ExamStack({
  children,
  title = 'final_exam.exe',
  meta
}) {
  const {
    Window
  } = examNS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: 72,
      paddingLeft: 72
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      top: i * 24,
      left: i * 24,
      right: 72 - i * 24,
      bottom: 72 - i * 24
    }
  }, /*#__PURE__*/React.createElement(Window, {
    title: title,
    controls: ['close'],
    shadow: "grey",
    style: {
      height: '100%'
    },
    bar: "strip"
  }, /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Window, {
    title: title,
    meta: meta,
    bar: "accent",
    controls: ['min', 'close'],
    shadow: "lg",
    padding: 0
  }, children)));
}
function Certificate({
  name,
  setName,
  score
}) {
  const {
    RefCode,
    Barcode,
    Stamp,
    Input,
    Button
  } = examNS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 40,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '999 1 520px',
      minWidth: 0,
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-hard-lg)',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--ink)',
      padding: '30px 40px 28px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    code: 'LSD-2026-CERT-' + String(score).padStart(2, '0') + '0417'
  }), /*#__PURE__*/React.createElement(RefCode, {
    prefix: "",
    code: "Issued as a public service by Gateway"
  })), /*#__PURE__*/React.createElement(Barcode, {
    value: 'CERT' + name,
    width: 140,
    height: 36,
    style: {
      maxWidth: '40%'
    },
    showValue: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      marginTop: 10
    }
  }, "This certifies that"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '2px solid var(--ink)',
      paddingBottom: 6,
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: 56,
      lineHeight: 1,
      minHeight: 56
    }
  }, name || '\u00a0'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      lineHeight: 1.55,
      maxWidth: 520
    }
  }, "has completed all 32 lessons and passed the Final Exam with a score of ", /*#__PURE__*/React.createElement("b", null, score, "/32"), ", and is hereby declared"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: 64,
      lineHeight: 0.9,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em'
    }
  }, "Fluent in Durban"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderTop: '1px solid var(--ink)',
      marginTop: 8
    }
  }, [['Course', 'LSD-01 – LSD-32'], ['Grade', score >= 30 ? 'Native-ish' : 'Fluent'], ['Valid', 'Up and down the coast']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: '8px 10px 0 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, k), v))), /*#__PURE__*/React.createElement(Stamp, {
    top: "A public service by Gateway",
    size: 150,
    style: {
      position: 'absolute',
      right: 34,
      bottom: 70
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 4px 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "Show this certificate at Gateway, Durban to claim your graduation reward."), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, "1 / 1"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 260px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name of graduate",
    value: name,
    onChange: e => setName(e.target.value),
    hint: "Printed exactly as typed. Choose wisely. Your gran will see this."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    block: true,
    brackets: true
  }, "Print certificate"), /*#__PURE__*/React.createElement(Button, {
    block: true
  }, "Download PDF (for the fridge)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--ink-2)'
    }
  }, "Redeemable once per graduate at Gateway, Durban. Baggies optional at collection.")));
}
function Exam({
  go,
  initial
}) {
  const {
    AnswerOption,
    Button,
    ProgressBar,
    Dialog
  } = examNS;
  const Q = window.LSD_DATA.exam;
  const N = Q.length,
    PASS = 24;
  const [i, setI] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [phase, setPhase] = React.useState(initial || 'q');
  const [name, setName] = React.useState(() => localStorage.getItem('lsd-name') || 'Thandi Mkhize');
  const score = Object.entries(answers).filter(([k, v]) => Q[k].c === v).length;
  const q = Q[i];
  const sel = answers[i];
  const answered = Object.keys(answers).length;
  const complete = answered === N;
  const shown = complete ? score : phase === 'fail' ? 13 : 29;
  const missed = complete ? Q.filter((x, k) => answers[k] !== x.c).map(x => window.LSD_DATA.words[+x.w - 1][1]) : ['Kiff', 'Robot', 'Pozi'];
  const next = () => {
    if (i < N - 1) setI(i + 1);else if (complete) setPhase(score >= PASS ? 'pass' : 'fail');
  };
  const reset = () => {
    setAnswers({});
    setI(0);
    setPhase('q');
  };
  const demo = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      letterSpacing: '0.08em'
    }
  }, "DEMO STATE"), [['q', 'Question'], ['pass', 'Pass'], ['fail', 'Fail']].map(([k, l]) => /*#__PURE__*/React.createElement(Button, {
    key: k,
    size: "sm",
    variant: phase === k ? 'primary' : 'secondary',
    onClick: () => setPhase(k)
  }, l)));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "08",
    kicker: "Assessment \xB7 pencils down, baggies on",
    title: phase === 'pass' ? 'Certificate of Fluency' : 'The Final Exam',
    right: demo
  }), phase === 'pass' ? /*#__PURE__*/React.createElement(Certificate, {
    name: name,
    setName: setName,
    score: shown
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(ExamStack, {
    meta: 'Question ' + String(i + 1).padStart(2, '0') + '/' + N
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 30
    }
  }, "QUESTION ", String(i + 1).padStart(2, '0'), "/", N), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "REF: LSD-", q.w, " \xB7 LESSON ", q.w, "/32")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 36,
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
      textWrap: 'balance'
    }
  }, q.q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, q.a.map((a, k) => /*#__PURE__*/React.createElement(AnswerOption, {
    key: k,
    letter: 'abc'[k],
    state: sel === k ? 'selected' : 'idle',
    onClick: () => {
      setAnswers({
        ...answers,
        [i]: k
      });
    }
  }, a))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.08em',
      color: 'var(--ink-3)'
    }
  }, "QUESTION MAP \xB7 JUMP AROUND, WE WON'T TELL"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(16, minmax(0,1fr))',
      gap: 4
    }
  }, Q.map((x, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    type: "button",
    onClick: () => setI(k),
    title: 'Question ' + (k + 1),
    style: {
      height: 26,
      padding: 0,
      border: '1.5px solid var(--ink)',
      borderRadius: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 700,
      background: k === i ? 'var(--yellow)' : answers[k] !== undefined ? 'var(--ink)' : 'var(--paper-2)',
      color: k !== i && answers[k] !== undefined ? 'var(--paper-2)' : 'var(--ink)'
    }
  }, String(k + 1).padStart(2, '0')))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      padding: '22px 32px 26px',
      marginTop: 24,
      borderTop: '1px dashed var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Answered",
    value: answered,
    max: N,
    segments: 16,
    style: {
      width: 300
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: i === 0,
    onClick: () => setI(i - 1)
  }, "Wait, go back"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: sel === undefined || i === N - 1 && !complete,
    onClick: next
  }, i === N - 1 ? complete ? 'Hand it in' : N - answered + ' to go, bru' : 'Next, bru')))), phase === 'fail' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(242,241,236,.55)'
    }
  }, /*#__PURE__*/React.createElement(Dialog, {
    title: "exam_result.exe",
    kind: "error",
    heading: 'Eish. ' + shown + '/32.',
    width: 460,
    onClose: () => setPhase('q'),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => go('dict')
    }, "Study the Dictionary"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: reset
    }, "Try again"))
  }, "Rewrite immediately \u2014 the ocean isn't going anywhere.", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 8,
      fontSize: 12,
      color: 'var(--ink-2)'
    }
  }, "Pass mark: ", PASS, "/32. Gateway suggests revising: ", missed.slice(0, 6).join(', '), missed.length > 6 ? ' and ' + (missed.length - 6) + ' more' : '', ".")))));
}
Object.assign(window, {
  Exam
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/exam.jsx", error: String((e && e.message) || e) }); }

// site/js/flashcards.jsx
try { (() => {
const flashNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function Flashcards() {
  const {
    Button,
    RefCode,
    Barcode,
    ProgressBar,
    StatusStrip,
    Icon
  } = flashNS;
  const all = window.LSD_DATA.words;
  const [order, setOrder] = React.useState(() => all.map((_, i) => i));
  const [pos, setPos] = React.useState(0);
  const [flip, setFlip] = React.useState(false);
  const [known, setKnown] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lsd-flash') || '[]');
    } catch (e) {
      return [];
    }
  });
  const [onlyNew, setOnlyNew] = React.useState(false);
  React.useEffect(() => {
    localStorage.setItem('lsd-flash', JSON.stringify(known));
  }, [known]);
  const deck = onlyNew ? order.filter(i => !known.includes(all[i][0])) : order;
  const idx = deck.length ? deck[Math.min(pos, deck.length - 1)] : null;
  const w = idx !== null ? all[idx] : null;
  const go = d => {
    setFlip(false);
    setTimeout(() => setPos(p => (p + d + deck.length) % deck.length), flip ? 120 : 0);
  };
  const mark = got => {
    if (!w) return;
    setKnown(k => got ? k.includes(w[0]) ? k : [...k, w[0]] : k.filter(x => x !== w[0]));
    if (onlyNew && got) {
      setFlip(false);
      setPos(p => Math.min(p, Math.max(0, deck.length - 2)));
    } else go(1);
  };
  const shuffle = () => {
    const o = [...order];
    for (let i = o.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [o[i], o[j]] = [o[j], o[i]];
    }
    setOrder(o);
    setPos(0);
    setFlip(false);
  };
  React.useEffect(() => {
    const f = e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === ' ') {
        e.preventDefault();
        setFlip(x => !x);
      } else if (e.key === 'ArrowRight') go(1);else if (e.key === 'ArrowLeft') go(-1);
    };
    addEventListener('keydown', f);
    return () => removeEventListener('keydown', f);
  });
  const face = {
    position: 'absolute',
    inset: 0,
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    background: 'var(--paper-2)',
    border: '2px solid var(--ink)',
    display: 'flex',
    flexDirection: 'column',
    padding: '22px 28px'
  };
  const allDone = known.length === all.length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "07",
    kicker: "Revision \xB7 one card at a time",
    title: "Flashcards",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        maxWidth: 320,
        lineHeight: 1.5
      }
    }, "Read the word. Guess the meaning. Flip the card. Be honest with yourself. The Institute is.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 48,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '999 1 560px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, w ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setFlip(!flip),
    style: {
      position: 'relative',
      height: 440,
      perspective: 1600,
      cursor: 'pointer'
    },
    role: "button",
    "aria-label": "Flip card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      transformStyle: 'preserve-3d',
      transition: 'transform 420ms var(--ease-out)',
      transform: flip ? 'rotateY(180deg)' : 'none',
      boxShadow: 'var(--shadow-hard-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: face
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    prefix: "",
    code: 'LSD-' + w[0] + ' · Card ' + (deck.indexOf(idx) + 1) + ' of ' + deck.length
  }), /*#__PURE__*/React.createElement(RefCode, {
    code: "LSD-2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 28
    }
  }, w[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: 'clamp(64px, 9vw, 120px)',
      lineHeight: 0.9,
      letterSpacing: '-0.02em'
    }
  }, w[1]), known.includes(w[0]) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em',
      background: 'var(--yellow)',
      border: '2px solid var(--ink)',
      padding: '3px 8px'
    }
  }, "FILED AS KNOWN"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-3)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Tap or press space to flip"), /*#__PURE__*/React.createElement(Barcode, {
    value: 'FLASH' + w[0],
    width: 100,
    height: 24
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...face,
      transform: 'rotateY(180deg)',
      gap: 16,
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    prefix: "",
    code: 'LSD-' + w[0] + ' · Reverse'
  }), /*#__PURE__*/React.createElement(RefCode, {
    code: "LSD-2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: 52,
      lineHeight: 0.95
    }
  }, w[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontStyle: 'italic',
      fontSize: 16,
      color: 'var(--ink-2)'
    }
  }, w[2])), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 17,
      lineHeight: 1.55,
      textWrap: 'pretty'
    }
  }, w[3]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      border: '1px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '5px 10px',
      background: 'var(--paper-3)',
      borderBottom: '1px solid var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.1em'
    }
  }, "EXAMPLE"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      fontStyle: 'italic'
    }
  }, "\u201C", w[4], "\u201D"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go(-1),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })
  }, "Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => mark(false)
  }, "Eish, again"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => mark(true)
  }, "Got it, shap")), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go(1)
  }, "Next ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 440,
      border: '2px solid var(--ink)',
      background: 'var(--yellow)',
      boxShadow: 'var(--shadow-hard-lg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      textAlign: 'center',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 40
    }
  }, "32/32"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: 56,
      lineHeight: 0.9,
      textTransform: 'uppercase'
    }
  }, "Deck cleared."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      maxWidth: 420
    }
  }, "Every card filed as known. The Final Exam is expecting you. So is the ocean."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => {
      setOnlyNew(false);
      setPos(0);
    }
  }, "Review the full deck"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 300px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Filed as known",
    value: known.length,
    max: all.length,
    segments: 16
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      gap: 4
    }
  }, all.map((x, i) => {
    const on = w && x[0] === w[0],
      k = known.includes(x[0]);
    return /*#__PURE__*/React.createElement("button", {
      key: x[0],
      type: "button",
      title: x[1],
      onClick: () => {
        if (onlyNew && k) setOnlyNew(false);
        const d = onlyNew && !k ? deck : order;
        setPos(d.indexOf(i));
        setFlip(false);
      },
      style: {
        height: 32,
        border: '2px solid var(--ink)',
        background: on ? 'var(--yellow)' : k ? 'var(--ink)' : 'var(--paper-2)',
        color: k && !on ? 'var(--paper-2)' : 'var(--ink)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 700,
        cursor: 'pointer',
        padding: 0
      }
    }, x[0]);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: shuffle
  }, "Shuffle the deck"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: onlyNew ? 'primary' : 'secondary',
    onClick: () => {
      setOnlyNew(!onlyNew);
      setPos(0);
      setFlip(false);
    }
  }, onlyNew ? 'Showing: still learning' : 'Only the ones I don\u2019t know'), known.length > 0 && /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "ghost",
    onClick: () => setKnown([])
  }, "Forget everything (start over)")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--ink-2)'
    }
  }, allDone ? 'All 32 filed. You are, technically, fluent.' : 'Black = filed as known. Orange = on the desk. Keys: space flips, arrows move.'))), /*#__PURE__*/React.createElement(StatusStrip, {
    label: "Deck",
    items: ['32 cards', 'Known: ' + known.length, 'Works offline', 'Cheating: impossible, you only cheat yourself'],
    style: {
      marginTop: 40
    }
  }));
}
Object.assign(window, {
  Flashcards
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/flashcards.jsx", error: String((e && e.message) || e) }); }

// site/js/forms.jsx
try { (() => {
const formNS = window.LearnToSpeakDurbanDesignSystem_ec3271;

// Kit-level form fields (multiline + error states, checkbox). Same visual language as DS Input.
function Field({
  label,
  value,
  onChange,
  placeholder,
  hint,
  error,
  multiline,
  rows = 3,
  type = 'text',
  autoComplete
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      boxShadow: focus ? 'var(--shadow-hard-sm)' : 'none',
      transition: 'box-shadow var(--dur-snap) linear'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      padding: '6px 10px',
      borderBottom: '1px solid var(--ink)',
      background: error ? 'var(--ink)' : focus ? 'var(--yellow)' : 'var(--paper-3)',
      color: error ? 'var(--paper-2)' : 'var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), error && /*#__PURE__*/React.createElement("span", null, "\u2715 ", error)), /*#__PURE__*/React.createElement(Tag, {
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    value: value,
    placeholder: placeholder,
    autoComplete: autoComplete,
    onChange: e => onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--ink)',
      minWidth: 0,
      resize: 'vertical'
    }
  }), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 12px 8px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, hint));
}
function Tick({
  checked,
  onChange,
  children,
  error
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: e => onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      marginTop: 1,
      display: 'grid',
      placeItems: 'center',
      border: '2px solid var(--ink)',
      background: checked ? 'var(--yellow)' : 'var(--paper-2)',
      outline: error ? '2px solid var(--ink)' : 'none',
      outlineOffset: 2,
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1
    }
  }, checked ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      textWrap: 'pretty'
    }
  }, children, error && /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontSize: 11,
      marginTop: 2
    }
  }, "\u2715 ", error)));
}
const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
Object.assign(window, {
  Field,
  Tick,
  isEmail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/forms.jsx", error: String((e && e.message) || e) }); }

// site/js/games.jsx
try { (() => {
const gameNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
const GAME_META = {
  'game-01': {
    title: 'Say Gqom',
    how: 'Press the button. Click your tongue like you mean it. The click-o-meter judges you from VAALIE to FLUENT.'
  },
  'game-02': {
    title: 'Spot the Vaalie',
    how: 'Find three vaalie details hidden in the beach scene. Click to report. False reports are noted.'
  },
  'game-03': {
    title: 'Ja / No Laka',
    how: 'A statement appears. Agree? Slam NO LAKA (J key) — yes, it means yes. Disagree? Slam EISH, NO (N key). 45 seconds. Score counted in soft-serves.'
  },
  'game-04': {
    title: 'Durdle',
    how: 'Guess the five-letter Durban word in six tries. Orange = right spot. Black = wrong spot. Grey = not in the word.'
  },
  'game-05': {
    title: 'Pack for Durban',
    how: 'Drag items into the suitcase, or click them. Pack only what you actually need. The system is watching.'
  },
  'game-06': {
    title: 'The 2pm Quiz',
    how: 'Five questions. Only after 2pm. Before that you should be at the beach.'
  }
};
function GameShell({
  id,
  score,
  onBack,
  children
}) {
  const {
    Button,
    Icon,
    StatusStrip,
    RefCode
  } = gameNS;
  const meta = GAME_META[id];
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const k = e => {
      if (e.key === 'Escape') onBack();
    };
    addEventListener('keydown', k);
    return () => {
      document.body.style.overflow = prev;
      removeEventListener('keydown', k);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": meta.title,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      overflowY: 'auto',
      background: 'var(--bg-graph)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px clamp(16px, 4vw, 40px)',
      background: 'var(--paper-2)',
      borderBottom: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }),
    onClick: onBack
  }, "Back to Activities"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    prefix: "",
    code: id.toUpperCase()
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: 22,
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, meta.title)), score != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      border: '2px solid var(--ink)',
      padding: '5px 10px',
      background: 'var(--yellow)',
      whiteSpace: 'nowrap'
    }
  }, score), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close game",
    onClick: onBack,
    style: {
      width: 32,
      height: 32,
      display: 'grid',
      placeItems: 'center',
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 14,
      borderRadius: 0
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      width: '100%',
      maxWidth: 1100,
      margin: '0 auto',
      padding: 'clamp(20px, 4vw, 48px) clamp(16px, 4vw, 40px)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 clamp(16px, 4vw, 40px) 28px',
      maxWidth: 1100,
      width: '100%',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(StatusStrip, {
    label: "How to play",
    live: false,
    items: [meta.how]
  })));
}
const bigHead = {
  fontFamily: 'var(--font-grotesk)',
  fontWeight: 800,
  fontSize: 'clamp(36px, 5vw, 64px)',
  lineHeight: 0.92,
  letterSpacing: '-0.02em',
  textTransform: 'uppercase',
  margin: 0,
  textWrap: 'balance'
};
const monoP = {
  fontFamily: 'var(--font-mono)',
  fontSize: 15,
  lineHeight: 1.55,
  margin: 0
};

/* GAME-01 */
function SayGqomGame({
  setScore
}) {
  const {
    Button
  } = gameNS;
  const stops = ['VAALIE', 'KOOK', 'LAATIE', 'BRU', 'FLUENT'];
  const lines = ['That was a cough. Try again, from the diaphragm.', 'A click was attempted. Gateway heard it, faintly.', 'Getting there. Your gran would nod politely.', 'Solid click. Taxi drivers would respect it.', 'Windows rattled. Gqom approved.'];
  const [phase, setPhase] = React.useState('idle');
  const [lvl, setLvl] = React.useState(0);
  const [live, setLive] = React.useState(0);
  const [note, setNote] = React.useState(null);
  const listen = async () => {
    setPhase('listening');
    setNote(null);
    setLive(0);
    let peak = 0;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
      });
      const ac = new (window.AudioContext || window.webkitAudioContext)();
      const an = ac.createAnalyser();
      an.fftSize = 1024;
      ac.createMediaStreamSource(stream).connect(an);
      const buf = new Uint8Array(an.fftSize);
      const t0 = performance.now();
      await new Promise(res => {
        const tick = () => {
          an.getByteTimeDomainData(buf);
          let m = 0;
          for (let i = 0; i < buf.length; i++) m = Math.max(m, Math.abs(buf[i] - 128) / 128);
          peak = Math.max(peak, m);
          setLive(m);
          if (performance.now() - t0 < 2000) requestAnimationFrame(tick);else res();
        };
        tick();
      });
      stream.getTracks().forEach(t => t.stop());
      ac.close();
      peak = Math.min(1, peak * 1.6);
    } catch (e) {
      setNote('Microphone unavailable. Gateway guessed, generously.');
      await new Promise(r => setTimeout(r, 1200));
      peak = 0.35 + Math.random() * 0.6;
    }
    setLvl(peak);
    setPhase('result');
    const idx = Math.min(4, Math.floor(peak * 5));
    setScore('Best: ' + stops[idx]);
  };
  const idx = Math.min(4, Math.floor(lvl * 5));
  const shown = phase === 'listening' ? live : phase === 'result' ? lvl : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: bigHead
  }, phase === 'result' ? 'Rating: ' + stops[idx] : phase === 'listening' ? 'Click now.' : 'Say it with a click.'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: phase === 'listening' ? undefined : listen,
    style: {
      width: 220,
      height: 220,
      borderRadius: '50%',
      border: '3px solid var(--ink)',
      background: phase === 'listening' ? 'var(--yellow)' : 'var(--paper-2)',
      boxShadow: 'var(--shadow-hard)',
      cursor: phase === 'listening' ? 'default' : 'pointer',
      fontFamily: 'var(--font-pixel)',
      fontSize: 34,
      color: 'var(--ink)'
    }
  }, phase === 'listening' ? 'GQ-!' : phase === 'result' ? 'AGAIN' : 'START'), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(640px, 100%)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 34,
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      display: 'flex'
    }
  }, stops.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      flex: 1,
      borderLeft: i ? '1px solid var(--ink)' : 'none',
      background: i / 5 < shown ? 'var(--ink)' : 'transparent',
      transition: 'background 80ms linear'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -10,
      left: `calc(${shown * 100}% - 2px)`,
      width: 4,
      height: 50,
      background: 'var(--yellow)',
      outline: '1px solid var(--ink)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700
    }
  }, stops.map(s => /*#__PURE__*/React.createElement("span", {
    key: s
  }, s)))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...monoP,
      maxWidth: 520
    }
  }, phase === 'result' ? lines[idx] : phase === 'listening' ? 'Listening for two seconds. Do not apologise.' : 'Press start, allow the microphone, and click your tongue once. Loudly. The neighbours will understand.'), note && /*#__PURE__*/React.createElement("p", {
    style: {
      ...monoP,
      fontSize: 12,
      color: 'var(--ink-2)'
    }
  }, note), phase === 'result' && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    brackets: true,
    onClick: listen
  }, "Try again"));
}

/* GAME-02 */
function SpotVaalieGame({
  setScore,
  onBack
}) {
  const {
    Halftone,
    Button,
    Dialog,
    Icon
  } = gameNS;
  const targets = [{
    k: 'Flame shirt',
    x: 22,
    y: 42
  }, {
    k: 'Socks with slops',
    x: 63,
    y: 78
  }, {
    k: 'Gazebo with cup holders',
    x: 80,
    y: 26
  }];
  const [found, setFound] = React.useState([]);
  const [misses, setMisses] = React.useState(0);
  const [toast, setToast] = React.useState(null);
  const [hint, setHint] = React.useState(false);
  React.useEffect(() => {
    setScore(found.length + '/3 found');
  }, [found]);
  const click = e => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width * 100,
      y = (e.clientY - r.top) / r.height * 100;
    const hit = targets.find(t => !found.includes(t.k) && Math.hypot(t.x - x, (t.y - y) * 0.6) < 7);
    if (hit) {
      setFound([...found, hit.k]);
      setToast('Reported: ' + hit.k.toLowerCase() + '.');
    } else {
      setMisses(misses + 1);
      setToast(['That is just a regular tourist.', 'That is a lifeguard. Leave him alone.', 'That is a seagull. Innocent.', 'False report. Gateway sighs.'][misses % 4]);
    }
  };
  const reset = () => {
    setFound([]);
    setMisses(0);
    setToast(null);
    setHint(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 28,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '999 1 560px',
      minWidth: 0,
      position: 'relative',
      border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-hard)',
      cursor: 'crosshair'
    },
    onClick: click
  }, /*#__PURE__*/React.createElement(Halftone, {
    height: 540,
    dot: 6,
    placeholder: "beach",
    caption: "FIG. 2 \u2014 North Beach (placeholder scene)"
  }), targets.map(t => (found.includes(t.k) || hint) && /*#__PURE__*/React.createElement("span", {
    key: t.k,
    style: {
      position: 'absolute',
      left: t.x + '%',
      top: t.y + '%',
      transform: 'translate(-50%,-50%)',
      width: 70,
      height: 70,
      borderRadius: '50%',
      border: found.includes(t.k) ? '3px solid var(--ink)' : '2px dashed var(--ink)',
      background: found.includes(t.k) ? 'rgba(255,90,46,.45)' : 'transparent',
      pointerEvents: 'none'
    }
  })), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      top: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 700,
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      padding: '6px 10px',
      pointerEvents: 'none'
    }
  }, toast)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 260px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...bigHead,
      fontSize: 40
    }
  }, "Find the vaalie."), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)'
    }
  }, targets.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.k,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      borderTop: i ? '1px dashed var(--ink-3)' : 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      textDecoration: found.includes(t.k) ? 'line-through' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      border: '2px solid var(--ink)',
      display: 'grid',
      placeItems: 'center',
      background: found.includes(t.k) ? 'var(--yellow)' : 'transparent',
      fontSize: 12,
      fontWeight: 700
    }
  }, found.includes(t.k) ? '✓' : ''), t.k))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ink-2)'
    }
  }, "False reports: ", misses), misses >= 3 && !hint && found.length < 3 && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => setHint(true)
  }, "Ask a lifeguard (hint)")), found.length === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 5,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(242,241,236,.6)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Dialog, {
    title: "spot_the_vaalie.exe",
    kind: "success",
    heading: "Vaalie confirmed.",
    onClose: reset,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onBack
    }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: reset
    }, "Play again"))
  }, "All three details reported with ", misses, " false alarm", misses === 1 ? '' : 's', ". The coast thanks you. Be gentle; they are on holiday.")));
}

/* GAME-03 */
const JA_STATEMENTS = [['A robot is a traffic light.', true], ['Baggies are formal attire on the coast.', true], ['A bunny is a small rabbit, served whole.', false], ['“Chips!” means the food has arrived.', false], ['Kiff means good.', true], ['Larney means cheap.', false], ['Shot means thanks.', true], ['Smaak means you like it a lot.', true], ['A laatie is an elderly gentleman.', false], ['Your pozi is your home.', true], ['Forks are required for bunny chow.', false], ['Vy means to go.', true], ['Gqom is dance music.', true], ['Ducking out means hiding from ducks.', false], ['A prawn is an idiot.', true], ['A kook has mastered surfing.', false], ['Yano is short for amapiano.', true], ['Logging means cutting down trees.', false], ['Logging is longboarding.', true], ['Mfethu is warmer than bru.', true], ['A vaalie wears socks with slops.', true], ['Tops means the worst.', false], ['Dala means to do.', true]];
function JaNoLakaGame({
  setScore,
  onBack
}) {
  const {
    Button
  } = gameNS;
  const [phase, setPhase] = React.useState('ready');
  const [deck, setDeck] = React.useState([]);
  const [i, setI] = React.useState(0);
  const [pts, setPts] = React.useState(0);
  const [left, setLeft] = React.useState(45);
  const [flash, setFlash] = React.useState(null);
  const start = () => {
    setDeck([...JA_STATEMENTS].sort(() => Math.random() - 0.5));
    setI(0);
    setPts(0);
    setLeft(45);
    setFlash(null);
    setPhase('play');
  };
  React.useEffect(() => {
    if (phase !== 'play') return;
    const t = setInterval(() => setLeft(l => {
      if (l <= 1) {
        clearInterval(t);
        setPhase('done');
        return 0;
      }
      return l - 1;
    }), 1000);
    return () => clearInterval(t);
  }, [phase]);
  React.useEffect(() => {
    setScore(pts + ' soft-serve' + (pts === 1 ? '' : 's'));
  }, [pts]);
  const answer = v => {
    if (phase !== 'play') return;
    const ok = deck[i][1] === v;
    if (ok) setPts(p => p + 1);
    setFlash(ok ? 'ok' : 'no');
    setTimeout(() => setFlash(null), 260);
    if (i + 1 >= deck.length) setPhase('done');else setI(i + 1);
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'j' || e.key === 'J') answer(true);
      if (e.key === 'n' || e.key === 'N') answer(false);
    };
    addEventListener('keydown', k);
    return () => removeEventListener('keydown', k);
  });
  const verdict = pts >= 18 ? 'Fluent. Possibly born on the beachfront.' : pts >= 12 ? 'Bru-level. Respectable.' : pts >= 6 ? 'Laatie-level. Keep practising.' : 'Vaalie-level. The Dictionary is right there.';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 28,
      textAlign: 'center'
    }
  }, phase === 'ready' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: bigHead
  }, "No laka or eish, no?"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...monoP,
      maxWidth: 520
    }
  }, "45 seconds. Reminder: no laka means yes. The Institute apologises for nothing. One point per correct answer, paid in soft-serves. J and N keys work too."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    brackets: true,
    onClick: start
  }, "Start the clock")), phase === 'play' && deck[i] && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      fontFamily: 'var(--font-pixel)',
      fontSize: 28
    }
  }, /*#__PURE__*/React.createElement("span", null, String(left).padStart(2, '0'), "s"), /*#__PURE__*/React.createElement("span", null, String(i + 1).padStart(2, '0'), "/", deck.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(760px, 100%)',
      minHeight: 220,
      display: 'grid',
      placeItems: 'center',
      padding: '28px 24px',
      border: '3px solid var(--ink)',
      boxShadow: 'var(--shadow-hard-lg)',
      background: flash === 'ok' ? 'var(--yellow)' : flash === 'no' ? 'var(--ink)' : 'var(--paper-2)',
      color: flash === 'no' ? 'var(--paper-2)' : 'var(--ink)',
      transition: 'background 80ms linear'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 'clamp(28px, 3.6vw, 44px)',
      lineHeight: 1.1,
      textWrap: 'balance'
    }
  }, deck[i][0])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => answer(true),
    style: {
      minWidth: 200
    }
  }, "NO LAKA (J)"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => answer(false),
    style: {
      minWidth: 200
    }
  }, "EISH, NO (N)"))), phase === 'done' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: bigHead
  }, pts, " soft-serve", pts === 1 ? '' : 's', "."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...monoP,
      maxWidth: 520
    }
  }, verdict), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onBack
  }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    brackets: true,
    onClick: start
  }, "Play again"))));
}

/* GAME-04 */
function DurdleGame({
  setScore
}) {
  const {
    Button
  } = gameNS;
  const ANSWERS = ['CHOON', 'BUNNY', 'SMAAK', 'CHIPS'];
  const answer = ANSWERS[Math.floor(Date.now() / 864e5) % ANSWERS.length];
  const [rows, setRows] = React.useState([]);
  const [cur, setCur] = React.useState('');
  const [msg, setMsg] = React.useState(null);
  const done = rows.includes(answer) || rows.length >= 6;
  const grade = g => {
    const res = Array(5).fill('x');
    const pool = answer.split('');
    g.split('').forEach((c, i) => {
      if (c === answer[i]) {
        res[i] = 'g';
        pool[i] = null;
      }
    });
    g.split('').forEach((c, i) => {
      if (res[i] !== 'g') {
        const j = pool.indexOf(c);
        if (j > -1) {
          res[i] = 'y';
          pool[j] = null;
        }
      }
    });
    return res;
  };
  const keyState = {};
  rows.forEach(r => {
    const g = grade(r);
    r.split('').forEach((c, i) => {
      const s = g[i];
      if (s === 'g' || s === 'y' && keyState[c] !== 'g' || !keyState[c]) keyState[c] = s;
    });
  });
  const press = k => {
    if (done) return;
    if (k === 'ENTER') {
      if (cur.length < 5) {
        setMsg('Five letters, bru.');
        return;
      }
      const n = [...rows, cur];
      setRows(n);
      setCur('');
      if (cur === answer) {
        setMsg(['Lekker first try. Suspicious.', 'Shap. Two tries.', 'Three tries. Solid.', 'Four. Fine.', 'Five. Close one.', 'Six. Just.'][n.length - 1]);
        setScore('Solved in ' + n.length);
      } else if (n.length >= 6) {
        setMsg('Eish. It was ' + answer + '. The Dictionary has it.');
        setScore('Unsolved');
      } else setMsg(null);
      return;
    }
    if (k === '⌫') {
      setCur(cur.slice(0, -1));
      return;
    }
    if (/^[A-Z]$/.test(k) && cur.length < 5) setCur(cur + k);
  };
  React.useEffect(() => {
    const h = e => {
      const k = e.key === 'Enter' ? 'ENTER' : e.key === 'Backspace' ? '⌫' : e.key.toUpperCase();
      press(k);
    };
    addEventListener('keydown', h);
    return () => removeEventListener('keydown', h);
  });
  React.useEffect(() => {
    setScore(Math.min(rows.length + 1, 6) + '/6');
  }, []);
  const cell = s => ({
    g: {
      background: 'var(--yellow)',
      color: 'var(--ink)'
    },
    y: {
      background: 'var(--ink)',
      color: 'var(--paper-2)'
    },
    x: {
      background: 'var(--paper-4)',
      color: 'var(--ink)'
    }
  })[s] || {
    background: 'var(--paper-2)',
    color: 'var(--ink)'
  };
  const grid = Array.from({
    length: 6
  }, (_, r) => rows[r] ? {
    t: rows[r],
    g: grade(rows[r])
  } : r === rows.length ? {
    t: cur.padEnd(5),
    g: []
  } : {
    t: '     ',
    g: []
  });
  const kb = ['QWERTYUIOP', 'ASDFGHJKL', 'ENTER ZXCVBNM ⌫'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.08em'
    }
  }, "DURDLE NO. ", Math.floor(Date.now() / 864e5) % 1000, " \xB7 TODAY\u2019S WORD IS IN THE DICTIONARY"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6
    }
  }, grid.map((row, r) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 58px)',
      gap: 6
    }
  }, row.t.split('').map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: 58,
      display: 'grid',
      placeItems: 'center',
      border: '2px solid var(--ink)',
      fontFamily: 'var(--font-pixel)',
      fontSize: 30,
      ...cell(row.g[i])
    }
  }, c.trim()))))), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 24,
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 700
    }
  }, msg), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: 'center',
      width: '100%'
    }
  }, kb.map((row, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: 'flex',
      gap: 5,
      justifyContent: 'center',
      width: '100%'
    }
  }, (ri === 2 ? row.split(' ').flatMap((p, j) => j === 1 ? p.split('') : [p]) : row.split('')).map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    type: "button",
    onClick: () => press(k),
    style: {
      minWidth: k.length > 1 ? 72 : 38,
      flex: k.length > 1 ? '0 0 auto' : '0 1 44px',
      height: 50,
      border: '2px solid var(--ink)',
      borderRadius: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: k.length > 1 ? 11 : 15,
      fontWeight: 700,
      ...cell(keyState[k])
    }
  }, k))))), done && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    brackets: true,
    onClick: () => {
      setRows([]);
      setCur('');
      setMsg(null);
    }
  }, "Practise again"));
}

/* GAME-05 */
const PACK_ITEMS = [{
  k: 'Baggies',
  ok: true
}, {
  k: 'Sunscreen',
  ok: true
}, {
  k: 'Slops',
  ok: true
}, {
  k: 'Towel',
  ok: true
}, {
  k: 'Wetsuit',
  ok: false,
  h: '⚠ Error: wetsuit detected.',
  b: 'Baggies required.',
  a: ['OK', 'OK, bru']
}, {
  k: 'Fork',
  ok: false,
  h: 'ABSOLUTELY NOT',
  b: 'Forks are not permitted within 50km of a bunny.',
  a: ['Remove fork']
}, {
  k: 'Socks',
  ok: false,
  h: 'Vaalie behaviour detected.',
  b: 'Socks with slops is a serious offence on the coast.',
  a: ['Sorry', 'It won’t happen again']
}, {
  k: 'Gazebo with cup holders',
  ok: false,
  h: 'Error: gazebo too larney.',
  b: 'The beach is free. So is the shade under someone else’s umbrella.',
  a: ['OK, fine']
}];
function PackGame({
  setScore,
  onBack
}) {
  const {
    Button,
    Dialog,
    Icon
  } = gameNS;
  const [packed, setPacked] = React.useState([]);
  const [err, setErr] = React.useState(null);
  const [over, setOver] = React.useState(false);
  const need = PACK_ITEMS.filter(i => i.ok).length;
  React.useEffect(() => {
    setScore(packed.length + '/' + need + ' packed');
  }, [packed]);
  const pack = k => {
    const it = PACK_ITEMS.find(i => i.k === k);
    if (!it) return;
    if (!it.ok) return setErr(it);
    if (!packed.includes(k)) setPacked([...packed, k]);
  };
  const won = packed.length === need;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 360px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...bigHead,
      fontSize: 44
    }
  }, "Pack for Durban."), /*#__PURE__*/React.createElement("p", {
    style: monoP
  }, "Drag to the suitcase or click to pack. Some items will be refused."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: 10
    }
  }, PACK_ITEMS.map(it => {
    const p = packed.includes(it.k);
    return /*#__PURE__*/React.createElement("button", {
      key: it.k,
      type: "button",
      draggable: !p,
      onDragStart: e => e.dataTransfer.setData('text/plain', it.k),
      onClick: () => pack(it.k),
      disabled: p,
      style: {
        minHeight: 64,
        padding: '10px 12px',
        border: '2px solid var(--ink)',
        borderRadius: 0,
        background: p ? 'var(--paper-3)' : 'var(--paper-2)',
        cursor: p ? 'default' : 'grab',
        fontFamily: 'var(--font-mono)',
        fontSize: 14,
        fontWeight: 700,
        textAlign: 'left',
        textDecoration: p ? 'line-through' : 'none',
        color: 'var(--ink)',
        boxShadow: p ? 'none' : 'var(--shadow-hard-sm)'
      }
    }, it.k);
  }))), /*#__PURE__*/React.createElement("div", {
    onDragOver: e => {
      e.preventDefault();
      setOver(true);
    },
    onDragLeave: () => setOver(false),
    onDrop: e => {
      e.preventDefault();
      setOver(false);
      pack(e.dataTransfer.getData('text/plain'));
    },
    style: {
      flex: '1 1 320px',
      position: 'relative',
      marginTop: 30,
      minHeight: 340,
      border: '3px solid var(--ink)',
      background: over ? 'var(--yellow)' : 'var(--paper-2)',
      boxShadow: 'var(--shadow-hard-lg)',
      padding: '40px 22px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -26,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 120,
      height: 24,
      border: '3px solid var(--ink)',
      borderBottom: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em'
    }
  }, "SUITCASE \xB7 ", packed.length, "/", need), packed.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      ...monoP,
      color: 'var(--ink-3)',
      marginTop: 40,
      textAlign: 'center'
    }
  }, "Drop items here."), packed.map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20
  }), k))), (err || won) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 5,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(242,241,236,.6)',
      padding: 16
    }
  }, err ? /*#__PURE__*/React.createElement(Dialog, {
    title: "pack_for_durban.exe",
    kind: "error",
    heading: err.h,
    onClose: () => setErr(null),
    actions: err.a.map((a, i) => /*#__PURE__*/React.createElement(Button, {
      key: a,
      size: "sm",
      variant: i === err.a.length - 1 ? 'primary' : 'secondary',
      onClick: () => setErr(null)
    }, a))
  }, err.b) : /*#__PURE__*/React.createElement(Dialog, {
    title: "pack_for_durban.exe",
    kind: "success",
    heading: "Packed. Vy.",
    onClose: () => setPacked([]),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onBack
    }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => setPacked([])
    }, "Pack again"))
  }, "Baggies, sunscreen, slops, towel. Everything you actually need.")));
}

/* GAME-06 */
function TwoPmGame({
  setScore,
  onBack
}) {
  const {
    Button,
    Icon,
    AnswerOption
  } = gameNS;
  const [now, setNow] = React.useState(new Date());
  const [force, setForce] = React.useState(false);
  const [qs] = React.useState(() => [...window.LSD_DATA.exam].sort(() => Math.random() - 0.5).slice(0, 5));
  const [i, setI] = React.useState(0);
  const [pick, setPick] = React.useState(null);
  const [pts, setPts] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const open = force || now.getHours() >= 14;
  React.useEffect(() => {
    setScore(open ? pts + '/5' : 'Locked');
  }, [open, pts]);
  if (!open) {
    const t = new Date(now);
    t.setHours(14, 0, 0, 0);
    const s = Math.max(0, Math.floor((t - now) / 1000));
    const hms = [Math.floor(s / 3600), Math.floor(s / 60) % 60, s % 60].map(n => String(n).padStart(2, '0')).join(':');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 120,
        height: 120,
        display: 'grid',
        placeItems: 'center',
        border: '3px solid var(--ink)',
        background: 'var(--ink)',
        color: 'var(--yellow)',
        boxShadow: 'var(--shadow-hard)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 72
    })), /*#__PURE__*/React.createElement("h2", {
      style: bigHead
    }, "Come back after the beach."), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-pixel)',
        fontSize: 'clamp(44px, 7vw, 80px)',
        lineHeight: 1
      }
    }, hms), /*#__PURE__*/React.createElement("p", {
      style: {
        ...monoP,
        maxWidth: 480
      }
    }, "The 2pm Quiz opens at 14:00 sharp. Until then Gateway recommends sunscreen, a swim and a quarter mutton."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: onBack
    }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setForce(true)
    }, "I\u2019m already at the beach (open anyway)")));
  }
  if (i >= qs.length) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: bigHead
  }, pts, "/5."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...monoP,
      maxWidth: 480
    }
  }, pts === 5 ? 'Perfect. Go back to the beach, you’ve earned it.' : pts >= 3 ? 'Decent. The afternoon is young.' : 'The sun got to you. Try again tomorrow at 2.'), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    brackets: true,
    onClick: onBack
  }, "Back to Activities"));
  const q = qs[i];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 26
    }
  }, "QUESTION ", i + 1, "/5"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 'clamp(26px, 3.4vw, 38px)',
      lineHeight: 1.1,
      textWrap: 'balance'
    }
  }, q.q), q.a.map((a, k) => /*#__PURE__*/React.createElement(AnswerOption, {
    key: k,
    letter: 'abc'[k],
    state: pick === null ? 'idle' : k === q.c ? 'correct' : k === pick ? 'wrong' : 'idle',
    disabled: pick !== null,
    onClick: () => {
      setPick(k);
      if (k === q.c) setPts(pts + 1);
    }
  }, a)), pick !== null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => {
      setPick(null);
      setI(i + 1);
    }
  }, i === 4 ? 'See score' : 'Next, bru')));
}
function GameScreen({
  id,
  onBack
}) {
  const [score, setScore] = React.useState(null);
  const C = {
    'game-01': SayGqomGame,
    'game-02': SpotVaalieGame,
    'game-03': JaNoLakaGame,
    'game-04': DurdleGame,
    'game-05': PackGame,
    'game-06': TwoPmGame
  }[id];
  if (!C) return null;
  return /*#__PURE__*/React.createElement(GameShell, {
    id: id,
    score: score,
    onBack: onBack
  }, /*#__PURE__*/React.createElement(C, {
    setScore: setScore,
    onBack: onBack
  }));
}
Object.assign(window, {
  GameScreen,
  GAME_META
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/games.jsx", error: String((e && e.message) || e) }); }

// site/js/landing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const landNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function HeroCard({
  go,
  mobile
}) {
  const {
    Button,
    Barcode,
    RefCode
  } = landNS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      boxShadow: mobile ? 'var(--shadow-hard)' : '10px 10px 0 var(--ink)',
      padding: mobile ? '36px 20px 24px' : '56px 56px 48px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: mobile ? 28 : 48
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    code: "LSD-2026",
    style: {
      position: 'absolute',
      top: 10,
      left: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: mobile ? 20 : 28,
      minWidth: 0,
      flex: '1 1 560px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: mobile ? 11 : 13,
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, "A public service by Gateway"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: mobile ? 62 : 'clamp(56px, 8.6vw, 140px)',
      lineHeight: 0.84,
      letterSpacing: '-0.025em',
      textTransform: 'uppercase'
    }
  }, "Learn to", /*#__PURE__*/React.createElement("br", null), "Speak ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontWeight: 400,
      fontStretch: '100%',
      fontSize: '0.86em',
      letterSpacing: '-0.04em',
      background: 'var(--yellow)',
      padding: '0 0.06em'
    }
  }, "Durban")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontFamily: 'var(--font-mono)',
      fontSize: mobile ? 14 : 16,
      lineHeight: 1.55,
      textWrap: 'pretty'
    }
  }, "32 lessons of real Durban slang. A final exam you can write right here. A certificate of fluency with your name on it \u2014 redeemable at Gateway, Durban."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    brackets: true,
    onClick: () => go('dict')
  }, "Begin Lesson 1"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('exam')
  }, "Skip to exam (brave)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: mobile ? 'column-reverse' : 'column',
      justifyContent: 'space-between',
      gap: 24,
      flex: mobile ? '1 1 100%' : '0 1 340px',
      minWidth: mobile ? 0 : 280,
      borderLeft: mobile ? 'none' : '2px solid var(--ink)',
      paddingLeft: mobile ? 0 : 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: mobile ? 'flex-start' : 'flex-end',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Barcode, {
    value: "LSD-2026-DBN",
    width: mobile ? 200 : 300,
    height: mobile ? 44 : 72
  }), /*#__PURE__*/React.createElement(RefCode, {
    prefix: "",
    code: "Course No. 4001 \xB7 Coastal dialect \xB7 Humidity: 87%"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '7px 12px',
      background: 'var(--paper-3)',
      borderBottom: '1px solid var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "ENROLMENT"), /*#__PURE__*/React.createElement("span", null, "OPEN")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 12px',
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      fontWeight: 700,
      lineHeight: 1.45
    }
  }, "Course fee: free.", /*#__PURE__*/React.createElement("br", null), "Fluency: guaranteed-ish."))), !mobile && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 10,
      bottom: 10,
      width: 28,
      height: 28,
      borderRight: '2px solid var(--ink)',
      borderBottom: '2px solid var(--ink)'
    }
  }));
}
function Landing({
  go,
  mobile
}) {
  const {
    FolderCard,
    StatusStrip
  } = landNS;
  const sections = [{
    id: 'dict',
    index: '01',
    title: 'The Dictionary',
    description: '32 words, filed by an intern who has since gone surfing. Pull a card. Hear it on the radio.',
    meta: '32 entries'
  }, {
    id: 'act',
    index: '02',
    title: 'Activities',
    description: 'Six games for practical study. Some require a microphone. One requires 2pm.',
    meta: '6 games'
  }, {
    id: 'merch',
    index: '03',
    title: 'Merch',
    description: 'Course materials. Mostly tees. One cooler box, metaphorically.',
    meta: '8 items'
  }, {
    id: 'submit',
    index: '04',
    title: 'Submit a Word',
    description: 'Heard a word at the taxi rank we don’t know? Report it. Gateway will investigate.',
    meta: 'Open to the public'
  }, {
    id: 'study',
    index: '05',
    title: 'Study Pack',
    description: 'Download the course before take-off. Study at 10,000 metres. Practise on seat 14B.',
    meta: 'Works offline'
  }, {
    id: 'card',
    index: '06',
    title: 'Student Card',
    description: 'Upload a selfie. Gateway pixelates it. Your ex sees it on your story.',
    meta: '1080 × 1920'
  }, {
    id: 'flash',
    index: '07',
    title: 'Flashcards',
    description: 'All 32 words on flip cards. Guess, flip, file as known. Honesty encouraged.',
    meta: '32 cards'
  }, {
    id: 'exam',
    index: '08',
    title: 'The Final Exam',
    description: '32 questions, one per lesson. Pass and the certificate prints itself. Fail and the ocean waits.',
    meta: '32 questions'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: mobile ? 36 : 56,
      paddingTop: mobile ? 20 : 48
    }
  }, /*#__PURE__*/React.createElement(HeroCard, {
    go: go,
    mobile: mobile
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : 'repeat(auto-fill, minmax(270px, 1fr))',
      gap: mobile ? 22 : 24
    }
  }, sections.map((s, i) => /*#__PURE__*/React.createElement(FolderCard, _extends({
    key: s.id
  }, s, {
    active: !mobile && i === 1 ? undefined : undefined,
    tabOffset: mobile ? 0 : [0, 24, 48, 12, 36, 60, 18, 42][i],
    onClick: () => go(s.id)
  })))), /*#__PURE__*/React.createElement(StatusStrip, {
    items: ['Current ocean temperature: 24°C', 'Lessons: 32', 'Forks required: 0']
  }));
}
Object.assign(window, {
  Landing,
  HeroCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/landing.jsx", error: String((e && e.message) || e) }); }

// site/js/lsd-components.js
try { (() => {
/* @ds-bundle: {"format":4,"namespace":"LearnToSpeakDurbanDesignSystem_ec3271","components":[{"name":"FolderCard","sourcePath":"components/cards/FolderCard.jsx"},{"name":"SpecCard","sourcePath":"components/cards/SpecCard.jsx"},{"name":"Barcode","sourcePath":"components/core/Barcode.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"LabelChip","sourcePath":"components/core/LabelChip.jsx"},{"name":"RefCode","sourcePath":"components/core/RefCode.jsx"},{"name":"Stamp","sourcePath":"components/core/Stamp.jsx"},{"name":"StatusStrip","sourcePath":"components/feedback/StatusStrip.jsx"},{"name":"AnswerOption","sourcePath":"components/forms/AnswerOption.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"ProgressBar","sourcePath":"components/forms/ProgressBar.jsx"},{"name":"Halftone","sourcePath":"components/media/Halftone.jsx"},{"name":"Icon","sourcePath":"components/media/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/media/Icon.jsx"},{"name":"ICONS","sourcePath":"components/media/iconData.js"},{"name":"FolderTabs","sourcePath":"components/navigation/FolderTabs.jsx"},{"name":"IndexTab","sourcePath":"components/navigation/IndexTab.jsx"},{"name":"Dialog","sourcePath":"components/windows/Dialog.jsx"},{"name":"Window","sourcePath":"components/windows/Window.jsx"}],"sourceHashes":{"components/cards/FolderCard.jsx":"a608b9211328","components/cards/SpecCard.jsx":"d4f07f171ae7","components/core/Barcode.jsx":"75214f3abe32","components/core/Button.jsx":"47c65fa6b0f7","components/core/LabelChip.jsx":"97f6cbbf0342","components/core/RefCode.jsx":"ecd6751797a4","components/core/Stamp.jsx":"bbd0c8fa76f4","components/feedback/StatusStrip.jsx":"cbcfa352358b","components/forms/AnswerOption.jsx":"beecfa8a8b76","components/forms/Input.jsx":"52ec7ce6e4d8","components/forms/ProgressBar.jsx":"23ec2f632b94","components/media/Halftone.jsx":"62a372af8ef6","components/media/Icon.jsx":"49b90fd1dfd6","components/media/iconData.js":"4feb6f7e810e","components/navigation/FolderTabs.jsx":"baf5ec59b49f","components/navigation/IndexTab.jsx":"ca600bc3ce7e","components/windows/Dialog.jsx":"81b7898d8e70","components/windows/Window.jsx":"c5cb55ac11f9","site/js/activities.jsx":"0c9e45e322d5","site/js/data.js":"f80427c803ab","site/js/dictionary.jsx":"ba9b30beb41b","site/js/enrol.jsx":"8d41c2bd5ad8","site/js/exam.jsx":"dc7307614549","site/js/forms.jsx":"5747f183c1ba","site/js/games.jsx":"c77dc3ff897b","site/js/landing.jsx":"749368f14ac8","site/js/lsd-components.js":"d71c327803ca","site/js/merch.jsx":"a908728de1cd","site/js/shell.jsx":"3a130dbbfac5","site/js/student-card.jsx":"eaf4c1bb3d76","site/js/study.jsx":"5bce6e1a7371","site/js/submit-word.jsx":"e0df64302cbb","ui_kits/microsite/Activities.jsx":"0c9e45e322d5","ui_kits/microsite/Dictionary.jsx":"ba9b30beb41b","ui_kits/microsite/Enrol.jsx":"8d41c2bd5ad8","ui_kits/microsite/Exam.jsx":"dc7307614549","ui_kits/microsite/Forms.jsx":"5747f183c1ba","ui_kits/microsite/Games.jsx":"c77dc3ff897b","ui_kits/microsite/Landing.jsx":"749368f14ac8","ui_kits/microsite/Merch.jsx":"a908728de1cd","ui_kits/microsite/Shell.jsx":"3a130dbbfac5","ui_kits/microsite/StudentCard.jsx":"eaf4c1bb3d76","ui_kits/microsite/Study.jsx":"5bce6e1a7371","ui_kits/microsite/SubmitWord.jsx":"e0df64302cbb","ui_kits/microsite/data.js":"f80427c803ab"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {
  const __ds_ns = window.LearnToSpeakDurbanDesignSystem_ec3271 = window.LearnToSpeakDurbanDesignSystem_ec3271 || {};
  const __ds_scope = {};
  __ds_ns.__errors = __ds_ns.__errors || [];

  // components/core/Barcode.jsx
  try {
    (() => {
      // Deterministic decorative barcode generated from a string. Not scannable.
      function Barcode({
        value = 'LSD-2026',
        height = 56,
        width = 240,
        showValue = false,
        color = 'var(--ink)',
        style
      }) {
        const bars = React.useMemo(() => {
          let h = 2166136261;
          const out = [];
          const seed = value + value.split('').reverse().join('');
          for (let i = 0; i < 46; i++) {
            h ^= seed.charCodeAt(i % seed.length) + i;
            h = Math.imul(h, 16777619) >>> 0;
            out.push({
              w: 1 + h % 4,
              gap: 1 + (h >> 3) % 3
            });
          }
          return out;
        }, [value]);
        const total = bars.reduce((s, b) => s + b.w + b.gap, 0);
        let x = 0;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'inline-flex',
            flexDirection: 'column',
            gap: 4,
            ...style
          }
        }, /*#__PURE__*/React.createElement("svg", {
          viewBox: `0 0 ${total} 10`,
          width: width,
          height: height,
          preserveAspectRatio: "none",
          style: {
            display: 'block',
            shapeRendering: 'crispEdges'
          },
          "aria-hidden": "true"
        }, bars.map((b, i) => {
          const r = /*#__PURE__*/React.createElement("rect", {
            key: i,
            x: x,
            y: "0",
            width: b.w,
            height: "10",
            fill: color
          });
          x += b.w + b.gap;
          return r;
        })), showValue && /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.3em',
            textAlign: 'center',
            color: 'var(--ink)'
          }
        }, value));
      }
      Object.assign(__ds_scope, {
        Barcode
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Barcode.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Button.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const SIZES = {
        sm: {
          padding: '6px 12px',
          fontSize: 11,
          minHeight: 30
        },
        md: {
          padding: '10px 18px',
          fontSize: 13,
          minHeight: 42
        },
        lg: {
          padding: '14px 26px',
          fontSize: 15,
          minHeight: 54
        }
      };
      const VARIANTS = {
        primary: {
          background: 'var(--ink)',
          color: 'var(--paper-2)'
        },
        secondary: {
          background: 'var(--paper-2)',
          color: 'var(--ink)'
        },
        accent: {
          background: 'var(--yellow)',
          color: 'var(--ink)'
        },
        ghost: {
          background: 'transparent',
          color: 'var(--ink)',
          borderColor: 'transparent'
        }
      };
      function Button({
        children,
        variant = 'secondary',
        size = 'md',
        brackets = false,
        icon,
        disabled = false,
        block = false,
        onClick,
        href,
        type = 'button',
        style
      }) {
        const [hover, setHover] = React.useState(false);
        const [down, setDown] = React.useState(false);
        const lift = !disabled && variant !== 'ghost';
        const base = {
          display: block ? 'flex' : 'inline-flex',
          width: block ? '100%' : undefined,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          letterSpacing: 'var(--tracking-label)',
          textTransform: 'uppercase',
          lineHeight: 1,
          border: '2px solid var(--ink)',
          borderRadius: 0,
          cursor: disabled ? 'not-allowed' : 'pointer',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          transition: 'transform var(--dur-snap) linear, box-shadow var(--dur-snap) linear, background var(--dur-snap) linear',
          ...SIZES[size],
          ...VARIANTS[variant],
          boxShadow: lift ? down ? '0 0 0 var(--ink)' : hover ? '4px 4px 0 var(--ink)' : '0 0 0 var(--ink)' : 'none',
          transform: lift ? down ? 'translate(0,0)' : hover ? 'translate(-2px,-2px)' : 'none' : 'none',
          opacity: disabled ? 0.4 : 1,
          ...(variant === 'ghost' && hover && !disabled ? {
            textDecoration: 'underline',
            textUnderlineOffset: 4
          } : null),
          ...(variant === 'secondary' && hover && !disabled ? {
            background: 'var(--yellow)'
          } : null),
          ...style
        };
        const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon, brackets ? /*#__PURE__*/React.createElement("span", null, "[\xA0", children, "\xA0]") : /*#__PURE__*/React.createElement("span", null, children));
        const handlers = {
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => {
            setHover(false);
            setDown(false);
          },
          onMouseDown: () => setDown(true),
          onMouseUp: () => setDown(false)
        };
        if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
          href: href,
          style: base,
          onClick: onClick
        }, handlers), content);
        return /*#__PURE__*/React.createElement("button", _extends({
          type: type,
          disabled: disabled,
          style: base,
          onClick: onClick
        }, handlers), content);
      }
      Object.assign(__ds_scope, {
        Button
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Button.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/LabelChip.jsx
  try {
    (() => {
      function LabelChip({
        children,
        size = 'md',
        variant = 'outline',
        style
      }) {
        const s = {
          sm: {
            fontSize: 14,
            padding: '3px 8px'
          },
          md: {
            fontSize: 22,
            padding: '4px 10px'
          },
          lg: {
            fontSize: 32,
            padding: '6px 14px'
          }
        }[size];
        const v = {
          outline: {
            background: 'var(--paper-2)',
            color: 'var(--ink)'
          },
          inverse: {
            background: 'var(--ink)',
            color: 'var(--paper-2)'
          },
          accent: {
            background: 'var(--yellow)',
            color: 'var(--ink)'
          }
        }[variant];
        return /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-block',
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            textTransform: 'uppercase',
            letterSpacing: '0.01em',
            lineHeight: 1,
            border: '2px solid var(--ink)',
            ...s,
            ...v,
            ...style
          }
        }, children);
      }
      Object.assign(__ds_scope, {
        LabelChip
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/LabelChip.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/cards/SpecCard.jsx
  try {
    (() => {
      function SpecCard({
        refCode = 'LSD-01',
        meta,
        label,
        chipVariant = 'outline',
        children,
        previewHeight = 240,
        crosshair = true,
        sourceLabel = 'SOURCE',
        sourceTag,
        source,
        footer,
        interactive = false,
        onClick,
        style
      }) {
        const [hover, setHover] = React.useState(false);
        const lifted = interactive && hover;
        return /*#__PURE__*/React.createElement("div", {
          onClick: onClick,
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => setHover(false),
          style: {
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            display: 'flex',
            flexDirection: 'column',
            color: 'var(--ink)',
            cursor: onClick ? 'pointer' : undefined,
            boxShadow: lifted ? 'var(--shadow-hard)' : '0 0 0 var(--ink)',
            transform: lifted ? 'translate(-3px,-3px)' : 'none',
            transition: 'transform var(--dur-snap) linear, box-shadow var(--dur-snap) linear',
            ...style
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
            padding: '12px 16px',
            borderBottom: '2px solid var(--ink)',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.04em'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 700
          }
        }, refCode), meta && /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--ink-3)',
            textTransform: 'uppercase',
            fontSize: 10,
            letterSpacing: '0.08em'
          }
        }, meta)), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            height: previewHeight,
            background: 'var(--bg-dots)',
            overflow: 'hidden'
          }
        }, crosshair && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 1,
            background: 'var(--paper-4)'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: 1,
            background: 'var(--paper-4)'
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center'
          }
        }, children), label && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            left: 16,
            bottom: 14
          }
        }, /*#__PURE__*/React.createElement(__ds_scope.LabelChip, {
          variant: lifted ? 'accent' : chipVariant
        }, label))), (source || sourceTag) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '7px 12px',
            borderTop: '2px solid var(--ink)',
            borderBottom: '1px solid var(--ink)',
            background: 'var(--paper-3)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }
        }, /*#__PURE__*/React.createElement("span", null, sourceLabel), /*#__PURE__*/React.createElement("span", null, sourceTag)), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '12px 16px',
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            lineHeight: 1.5,
            textWrap: 'pretty'
          }
        }, source)), footer && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            borderTop: '1px dashed var(--ink-3)'
          }
        }, footer));
      }
      Object.assign(__ds_scope, {
        SpecCard
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/cards/SpecCard.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/RefCode.jsx
  try {
    (() => {
      function RefCode({
        code = 'LSD-2026',
        prefix = 'REF:',
        size = 'sm',
        style
      }) {
        const fs = size === 'md' ? 12 : 10;
        return /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: fs,
            letterSpacing: '0.04em',
            color: 'var(--ink-3)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            ...style
          }
        }, prefix ? prefix + ' ' : '', code);
      }
      Object.assign(__ds_scope, {
        RefCode
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/RefCode.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Stamp.jsx
  try {
    (() => {
      function Stamp({
        top = 'A public service by Gateway',
        middle = 'FLUENT',
        bottom = 'Certified · 2026',
        size = 150,
        rotate = -12,
        style
      }) {
        const ring = {
          position: 'absolute',
          borderRadius: '50%',
          border: '2px solid var(--ink)'
        };
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            width: size,
            height: size,
            borderRadius: '50%',
            background: 'var(--yellow)',
            transform: `rotate(${rotate}deg)`,
            flex: 'none',
            ...style
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            ...ring,
            inset: 4
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            ...ring,
            inset: 12,
            borderWidth: 1
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: size * 0.03,
            textAlign: 'center',
            color: 'var(--ink)',
            padding: size * 0.16
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: Math.max(8, size * 0.058),
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            lineHeight: 1.15
          }
        }, top), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-pixel)',
            fontSize: size * 0.17,
            lineHeight: 1,
            borderTop: '2px solid var(--ink)',
            borderBottom: '2px solid var(--ink)',
            padding: '3px 2px 2px'
          }
        }, middle), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: Math.max(8, size * 0.058),
            letterSpacing: '0.12em',
            textTransform: 'uppercase'
          }
        }, bottom)));
      }
      Object.assign(__ds_scope, {
        Stamp
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Stamp.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/feedback/StatusStrip.jsx
  try {
    (() => {
      function StatusStrip({
        items = [],
        label = 'STATUS',
        live = true,
        style
      }) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'stretch',
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.04em',
            color: 'var(--ink)',
            ...style
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 12px',
            background: 'var(--ink)',
            color: 'var(--paper-2)',
            textTransform: 'uppercase',
            fontWeight: 700,
            letterSpacing: '0.1em',
            fontSize: 11,
            flex: 'none'
          }
        }, live && /*#__PURE__*/React.createElement("span", {
          style: {
            width: 8,
            height: 8,
            background: 'var(--yellow)'
          }
        }), label), /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '4px 0',
            padding: '8px 14px'
          }
        }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
          key: i,
          style: {
            whiteSpace: 'nowrap'
          }
        }, i > 0 && /*#__PURE__*/React.createElement("span", {
          style: {
            padding: '0 12px',
            color: 'var(--ink-3)'
          }
        }, "\xB7"), it))));
      }
      Object.assign(__ds_scope, {
        StatusStrip
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/feedback/StatusStrip.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/AnswerOption.jsx
  try {
    (() => {
      function AnswerOption({
        letter = 'a',
        children,
        state = 'idle',
        onClick,
        disabled,
        style
      }) {
        const [hover, setHover] = React.useState(false);
        const s = {
          idle: {
            bg: hover ? 'var(--paper-3)' : 'var(--paper-2)',
            fg: 'var(--ink)',
            mark: ''
          },
          selected: {
            bg: 'var(--yellow)',
            fg: 'var(--ink)',
            mark: '●'
          },
          correct: {
            bg: 'var(--yellow)',
            fg: 'var(--ink)',
            mark: '✓'
          },
          wrong: {
            bg: 'var(--ink)',
            fg: 'var(--paper-2)',
            mark: '✕'
          }
        }[state];
        return /*#__PURE__*/React.createElement("button", {
          type: "button",
          disabled: disabled,
          onClick: onClick,
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => setHover(false),
          style: {
            display: 'flex',
            alignItems: 'stretch',
            width: '100%',
            textAlign: 'left',
            padding: 0,
            border: '2px solid var(--ink)',
            borderRadius: 0,
            background: s.bg,
            color: s.fg,
            cursor: disabled ? 'default' : 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: 15,
            lineHeight: 1.4,
            boxShadow: hover && state === 'idle' && !disabled ? 'var(--shadow-hard-sm)' : 'none',
            transform: hover && state === 'idle' && !disabled ? 'translate(-2px,-2px)' : 'none',
            transition: 'transform var(--dur-snap) linear, box-shadow var(--dur-snap) linear',
            ...style
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 'none',
            width: 48,
            display: 'grid',
            placeItems: 'center',
            borderRight: '2px solid currentColor',
            fontWeight: 700
          }
        }, "(", letter, ")"), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1,
            padding: '13px 16px',
            textWrap: 'pretty'
          }
        }, children), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 'none',
            width: 40,
            display: 'grid',
            placeItems: 'center',
            fontWeight: 700
          }
        }, s.mark));
      }
      Object.assign(__ds_scope, {
        AnswerOption
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/AnswerOption.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Input.jsx
  try {
    (() => {
      function Input({
        label,
        value,
        defaultValue,
        placeholder,
        onChange,
        hint,
        type = 'text',
        style
      }) {
        const [focus, setFocus] = React.useState(false);
        return /*#__PURE__*/React.createElement("label", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            boxShadow: focus ? 'var(--shadow-hard-sm)' : 'none',
            ...style
          }
        }, label && /*#__PURE__*/React.createElement("span", {
          style: {
            padding: '6px 10px',
            borderBottom: '1px solid var(--ink)',
            background: focus ? 'var(--yellow)' : 'var(--paper-3)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }
        }, label), /*#__PURE__*/React.createElement("input", {
          type: type,
          value: value,
          defaultValue: defaultValue,
          placeholder: placeholder,
          onChange: onChange,
          onFocus: () => setFocus(true),
          onBlur: () => setFocus(false),
          style: {
            border: 'none',
            outline: 'none',
            background: 'transparent',
            padding: '12px 12px',
            fontFamily: 'var(--font-mono)',
            fontSize: 16,
            color: 'var(--ink)',
            minWidth: 0
          }
        }), hint && /*#__PURE__*/React.createElement("span", {
          style: {
            padding: '0 12px 8px',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--ink-3)'
          }
        }, hint));
      }
      Object.assign(__ds_scope, {
        Input
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Input.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/ProgressBar.jsx
  try {
    (() => {
      function ProgressBar({
        value = 0,
        max = 10,
        segments,
        label,
        showCount = true,
        style
      }) {
        const n = segments || max;
        const filled = Math.round(value / max * n);
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            ...style
          }
        }, (label || showCount) && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }
        }, /*#__PURE__*/React.createElement("span", null, label), showCount && /*#__PURE__*/React.createElement("span", null, String(value).padStart(2, '0'), "/", String(max).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 3,
            padding: 3,
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)'
          }
        }, Array.from({
          length: n
        }).map((_, i) => /*#__PURE__*/React.createElement("span", {
          key: i,
          style: {
            flex: 1,
            height: 12,
            background: i < filled ? 'var(--ink)' : 'transparent',
            outline: i < filled ? 'none' : '1px dotted var(--ink-3)',
            outlineOffset: -1
          }
        }))));
      }
      Object.assign(__ds_scope, {
        ProgressBar
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/ProgressBar.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/media/Halftone.jsx
  try {
    (() => {
      // Halftone treatment: greyscale image (or tonal placeholder) under a dot screen, crushed by contrast.
      function Halftone({
        src,
        alt = '',
        height = 220,
        dot = 6,
        caption,
        placeholder = 'beach',
        style
      }) {
        const tones = {
          beach: 'radial-gradient(ellipse 60% 40% at 70% 18%, #fff 0, #fff 30%, transparent 70%), linear-gradient(180deg,#bbb 0,#ddd 38%,#555 40%,#8a8a8a 58%,#e8e8e8 62%,#cfcfcf 100%)',
          product: 'radial-gradient(ellipse 34% 40% at 50% 52%, #333 0, #555 50%, transparent 72%), linear-gradient(180deg,#eee,#c8c8c8)',
          portrait: 'radial-gradient(ellipse 22% 28% at 50% 38%, #444 0, #666 60%, transparent 75%), radial-gradient(ellipse 40% 30% at 50% 95%, #444 0, #666 60%, transparent 75%), linear-gradient(180deg,#eee,#bbb)'
        };
        const inner = {
          position: 'absolute',
          inset: -dot,
          background: src ? `center/cover no-repeat url(${src})` : tones[placeholder] || tones.beach,
          filter: `grayscale(1) blur(${Math.max(1, dot / 3)}px)`
        };
        const screen = {
          position: 'absolute',
          inset: 0,
          mixBlendMode: 'multiply',
          background: `radial-gradient(circle at center, #fff 0, #fff ${dot * 0.18}px, #000 ${dot * 0.62}px) 0 0/${dot}px ${dot}px`
        };
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            height,
            overflow: 'hidden',
            background: '#fff',
            ...style
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            filter: 'contrast(18) grayscale(1)',
            background: '#fff',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: inner,
          role: src ? 'img' : undefined,
          "aria-label": alt
        }), /*#__PURE__*/React.createElement("div", {
          style: screen
        })), caption && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            right: 8,
            bottom: 8,
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '.06em',
            textTransform: 'uppercase',
            background: 'var(--paper-2)',
            border: '1px solid var(--ink)',
            padding: '2px 6px',
            color: 'var(--ink)'
          }
        }, caption));
      }
      Object.assign(__ds_scope, {
        Halftone
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/media/Halftone.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/media/iconData.js
  try {
    (() => {
      // Generated from pixelarticons@1.8.1 (MIT) + cooler-box (LSD addition)
      const ICONS = {
        "alert": ["M13 1h-2v2H9v2H7v2H5v2H3v2H1v2h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5h-2V3h-2V1zm0 2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3v-2h2V9h2V7h2V5h2V3h2zm0 4h-2v6h2V7zm0 8h-2v2h2v-2z"],
        "arrow-left": ["M20 11v2H8v2H6v-2H4v-2h2V9h2v2h12zM10 7H8v2h2V7zm0 0h2V5h-2v2zm0 10H8v-2h2v2zm0 0h2v2h-2v-2z"],
        "arrow-right": ["M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2H4zm10-4h2v2h-2V7zm0 0h-2V5h2v2zm0 10h2v-2h-2v2zm0 0h-2v2h2v-2z"],
        "book-open": ["M3 3h8v2H3v12h8V5h2v12h8V5h-8V3h10v16H13v2h-2v-2H1V3h2zm16 7h-4v2h4v-2zm-4-3h4v2h-4V7zm2 6h-2v2h2v-2z"],
        "briefcase": ["M8 3h8v4h6v14H2V7h6V3zm2 4h4V5h-4v2zM4 9v10h16V9H4z"],
        "calendar": ["M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM5 8h14V6H5v2zm0 2v10h14V10H5z"],
        "card-text": ["M4 4H2v16h20V4H4zm0 2h16v12H4V6zm2 2h12v2H6V8zm0 4h10v2H6v-2z"],
        "check": ["M18 6h2v2h-2V6zm-2 4V8h2v2h-2zm-2 2v-2h2v2h-2zm-2 2h2v-2h-2v2zm-2 2h2v-2h-2v2zm-2 0v2h2v-2H8zm-2-2h2v2H6v-2zm0 0H4v-2h2v2z"],
        "chevron-down": ["M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7V8z"],
        "chevron-right": ["M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z"],
        "clock": ["M19 3H5v2H3v14h2v2h14v-2h2V5h-2V3zm0 2v14H5V5h14zm-8 2h2v6h4v2h-6V7z"],
        "close": ["M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z"],
        "downasaur": ["M6 4h14v2h2v6h-8v2h6v2h-4v2h-2v2H2V8h2V6h2V4zm2 6h2V8H8v2z"],
        "drag-and-drop": ["M5 3H3v2h2V3zm14 4h2v6h-2V9H9v10h4v2H7V7h12zM7 3h2v2H7V3zM5 7H3v2h2V7zm-2 4h2v2H3v-2zm2 4H3v2h2v-2zm6-12h2v2h-2V3zm6 0h-2v2h2V3zm-2 14v-2h6v2h-2v2h-2v2h-2v-4zm4 2v2h2v-2h-2z"],
        "file": ["M3 22h18V8h-2V6h-2v2h-2V6h2V4h-2V2H3v20zm2-2V4h8v6h6v10H5z"],
        "folder": ["M4 4h8v2h10v14H2V4h2zm16 4H10V6H4v12h16V8z"],
        "gamepad": ["M2 5h20v14H2V5zm18 12V7H4v10h16zM8 9h2v2h2v2h-2v2H8v-2H6v-2h2V9zm6 0h2v2h-2V9zm4 4h-2v2h2v-2z"],
        "headphone": ["M19 4H5v2H3v14h7v-8H5V6h14v6h-5v8h7V6h-2V4zm-3 10h3v4h-3v-4zm-8 0v4H5v-4h3z"],
        "human": ["M10 2h4v4h-4V2zM3 7h18v2h-6v13h-2v-6h-2v6H9V9H3V7z"],
        "label": ["M12 2H2v10h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h-2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v-2h-2v-2H8v-2H6v-2H4V4h8zM6 6h2v2H6V6z"],
        "lock": ["M15 2H9v2H7v4H4v14h16V8h-3V4h-2V2zm0 2v4H9V4h6zm-6 6h9v10H6V10h3zm4 3h-2v4h2v-4z"],
        "mail": ["M22 4H2v16h20V4zM4 18V6h16v12H4zM8 8H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8z"],
        "minus": ["M4 11h16v2H4z"],
        "mood-happy": ["M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm-5 6v-2H7v2h2zm6 0v2H9v-2h6zm0 0h2v-2h-2v2z"],
        "music": ["M8 4h12v16h-8v-8h6V8h-8v12H2v-8h6V4zm0 10H4v4h4v-4zm10 0h-4v4h4v-4z"],
        "notes": ["M5 2h16v20H3V2h2zm14 18V4H5v16h14zM7 6h10v2H7V6zm10 4H7v2h10v-2zM7 14h7v2H7v-2z"],
        "play": ["M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z"],
        "plus": ["M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4z"],
        "reload": ["M16 2h-2v2h2v2H4v2H2v5h2V8h12v2h-2v2h2v-2h2V8h2V6h-2V4h-2V2zM6 20h2v2h2v-2H8v-2h12v-2h2v-5h-2v5H8v-2h2v-2H8v2H6v2H4v2h2v2z"],
        "search": ["M6 2h8v2H6V2zM4 6V4h2v2H4zm0 8H2V6h2v8zm2 2H4v-2h2v2zm8 0v2H6v-2h8zm2-2h-2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm0-8h2v8h-2V6zm0 0V4h-2v2h2z"],
        "shopping-bag": ["M9 2h6v2H9V2zm6 4V4h2v2h4v16H3V6h4V4h2v2h6zm0 2H9v2H7V8H5v12h14V8h-2v2h-2V8z"],
        "sun": ["M13 3h-2v2h2V3zm4 2h2v2h-2V5zm-6 6h2v2h-2v-2zm-8 0h2v2H3v-2zm18 0h-2v2h2v-2zM5 5h2v2H5V5zm14 14h-2v-2h2v2zm-8 2h2v-2h-2v2zm-4-2H5v-2h2v2zM9 7h6v2H9V7zm0 8H7V9h2v6zm0 0v2h6v-2h2V9h-2v6H9z"],
        "trophy": ["M16 3H6v2H2v10h6V5h8v10h6V5h-4V3h-2zm4 4v6h-2V7h2zM6 13H4V7h2v6zm12 2H6v2h12v-2zm-7 2h2v2h3v2H8v-2h3v-2z"],
        "user": ["M15 2H9v2H7v6h2V4h6V2zm0 8H9v2h6v-2zm0-6h2v6h-2V4zM4 16h2v-2h12v2H6v4h12v-4h2v6H4v-6z"],
        "volume-3": ["M11 2H9v2H7v2H5v2H1v8h4v2h2v2h2v2h2V2zM7 18v-2H5v-2H3v-4h2V8h2V6h2v12H7zm6-8h2v4h-2v-4zm8-6h-2V2h-6v2h6v2h2v12h-2v2h-6v2h6v-2h2v-2h2V6h-2V4zm-2 4h-2V6h-4v2h4v8h-4v2h4v-2h2V8z"],
        "zap": ["M12 1h2v8h8v4h-2v-2h-8V5h-2V3h2V1zM8 7V5h2v2H8zM6 9V7h2v2H6zm-2 2V9h2v2H4zm10 8v2h-2v2h-2v-8H2v-4h2v2h8v6h2zm2-2v2h-2v-2h2zm2-2v2h-2v-2h2zm0 0h2v-2h-2v2z"],
        "cooler-box": ["M8 3h8v2H8zM6 5h2v2H6zM16 5h2v2h-2zM2 7h20v2H2zM2 9h2v11H2zM20 9h2v11h-2zM4 12h16v2H4zM4 20h16v2H4zM10 14h4v2h-4z"]
      };
      Object.assign(__ds_scope, {
        ICONS
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/media/iconData.js",
      error: String(e && e.message || e)
    });
  }

  // components/media/Icon.jsx
  try {
    (() => {
      function Icon({
        name,
        size = 24,
        color = 'currentColor',
        title,
        style
      }) {
        const paths = __ds_scope.ICONS[name] || [];
        return /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 24 24",
          width: size,
          height: size,
          fill: "none",
          role: title ? 'img' : 'presentation',
          "aria-label": title,
          style: {
            display: 'block',
            flex: 'none',
            shapeRendering: 'crispEdges',
            ...style
          }
        }, paths.map((d, i) => /*#__PURE__*/React.createElement("path", {
          key: i,
          d: d,
          fill: color
        })));
      }
      const ICON_NAMES = Object.keys(__ds_scope.ICONS);
      Object.assign(__ds_scope, {
        Icon,
        ICON_NAMES
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/media/Icon.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/cards/FolderCard.jsx
  try {
    (() => {
      function FolderCard({
        index = '01',
        title,
        description,
        meta,
        active = false,
        tabOffset = 0,
        onClick,
        href,
        style
      }) {
        const [hover, setHover] = React.useState(false);
        const on = active || hover;
        const Tag = href ? 'a' : 'div';
        return /*#__PURE__*/React.createElement(Tag, {
          href: href,
          onClick: onClick,
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => setHover(false),
          style: {
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
            color: 'var(--ink)',
            cursor: 'pointer',
            transform: on ? 'translate(-3px,-3px)' : 'none',
            transition: 'transform var(--dur-snap) linear',
            ...style
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            paddingLeft: tabOffset
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            padding: '8px 16px',
            marginBottom: -2,
            border: '2px solid var(--ink)',
            borderBottom: 'none',
            borderRadius: '6px 6px 0 0',
            background: on ? 'var(--yellow)' : 'var(--paper-2)',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.04em',
            position: 'relative',
            zIndex: 1
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 700
          }
        }, index), /*#__PURE__*/React.createElement("span", {
          style: {
            textTransform: 'lowercase',
            whiteSpace: 'nowrap'
          }
        }, title))), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            minHeight: 170,
            padding: '20px 20px 16px',
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            boxShadow: on ? 'var(--shadow-hard)' : '0 0 0 var(--ink)',
            transition: 'box-shadow var(--dur-snap) linear'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: 'clamp(26px, 2.4vw, 34px)',
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            textWrap: 'balance'
          }
        }, title), description && /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            lineHeight: 1.5,
            color: 'var(--ink-2)',
            textWrap: 'pretty'
          }
        }, description), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)'
          }
        }, /*#__PURE__*/React.createElement("span", null, meta), /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'grid',
            placeItems: 'center',
            width: 28,
            height: 28,
            border: '2px solid var(--ink)',
            background: on ? 'var(--ink)' : 'transparent',
            color: on ? 'var(--yellow)' : 'var(--ink)'
          }
        }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
          name: "arrow-right",
          size: 18
        })))));
      }
      Object.assign(__ds_scope, {
        FolderCard
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/cards/FolderCard.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/navigation/FolderTabs.jsx
  try {
    (() => {
      // Site navigation as a row of file-folder tabs sitting on a rule. Active tab is yellow and joins the panel below.
      function FolderTabs({
        items = [],
        active,
        onChange,
        style
      }) {
        const [hover, setHover] = React.useState(null);
        return /*#__PURE__*/React.createElement("nav", {
          style: {
            display: 'flex',
            alignItems: 'flex-end',
            gap: 4,
            borderBottom: '2px solid var(--ink)',
            paddingLeft: 12,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            ...style
          }
        }, items.map(it => {
          const on = it.id === active;
          const hv = hover === it.id && !on;
          return /*#__PURE__*/React.createElement("button", {
            key: it.id,
            type: "button",
            onClick: () => onChange && onChange(it.id),
            onMouseEnter: () => setHover(it.id),
            onMouseLeave: () => setHover(null),
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: on ? '11px 16px 10px' : '8px 14px 7px',
              marginBottom: -2,
              border: '2px solid var(--ink)',
              borderBottom: on ? '2px solid var(--yellow)' : '2px solid var(--ink)',
              borderRadius: '6px 6px 0 0',
              background: on ? 'var(--yellow)' : hv ? 'var(--paper-3)' : 'var(--paper-2)',
              color: 'var(--ink)',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
              transform: hv ? 'translateY(-3px)' : 'none',
              transition: 'transform var(--dur-snap) linear, background var(--dur-snap) linear'
            }
          }, it.index && /*#__PURE__*/React.createElement("span", {
            style: {
              fontWeight: 700
            }
          }, it.index), /*#__PURE__*/React.createElement("span", {
            style: {
              textTransform: 'lowercase'
            }
          }, it.label));
        }));
      }
      Object.assign(__ds_scope, {
        FolderTabs
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/navigation/FolderTabs.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/navigation/IndexTab.jsx
  try {
    (() => {
      // One divider in the index-card drawer. The tab is a trapezoid sitting on a full-width card edge.
      function IndexTab({
        number,
        word,
        letter,
        count,
        offset = 0,
        tabWidth = 220,
        active = false,
        onClick,
        style
      }) {
        const [hover, setHover] = React.useState(false);
        const isLetter = !!letter;
        const on = active || hover && !isLetter;
        const fill = isLetter ? 'var(--ink)' : on ? 'var(--yellow)' : 'var(--paper-2)';
        const fg = isLetter ? 'var(--paper-2)' : 'var(--ink)';
        return /*#__PURE__*/React.createElement("div", {
          onClick: onClick,
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => setHover(false),
          style: {
            position: 'relative',
            height: 44,
            cursor: onClick ? 'pointer' : undefined,
            transform: on && !active ? 'translateY(-4px)' : 'none',
            transition: 'transform var(--dur-snap) linear',
            ...style
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 14,
            background: 'var(--paper-2)',
            border: '1.5px solid var(--ink)',
            borderBottom: 'none',
            borderRadius: '8px 8px 0 0'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            bottom: 12,
            left: `min(${offset}%, calc(100% - ${typeof tabWidth === 'number' ? tabWidth + 'px' : tabWidth}))`,
            width: tabWidth,
            minWidth: 150,
            height: 32
          }
        }, /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 220 32",
          preserveAspectRatio: "none",
          width: "100%",
          height: "100%",
          style: {
            position: 'absolute',
            inset: 0,
            overflow: 'visible'
          },
          "aria-hidden": "true"
        }, /*#__PURE__*/React.createElement("path", {
          d: "M0 32 C 8 32 10 28 12 22 L 18 6 C 20 1 22 0 28 0 L 192 0 C 198 0 200 1 202 6 L 208 22 C 210 28 212 32 220 32",
          fill: fill,
          stroke: "var(--ink)",
          strokeWidth: "1.5",
          vectorEffect: "non-scaling-stroke"
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: '0 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            fontFamily: isLetter ? 'var(--font-mono)' : 'var(--font-grotesk)',
            fontSize: 15,
            fontWeight: isLetter ? 700 : 500,
            color: fg,
            whiteSpace: 'nowrap'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 13
          }
        }, isLetter ? letter : number), /*#__PURE__*/React.createElement("span", null, isLetter ? count : word))));
      }
      Object.assign(__ds_scope, {
        IndexTab
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/navigation/IndexTab.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/windows/Window.jsx
  try {
    (() => {
      function Ctrl({
        glyph,
        onClick,
        label,
        inverse
      }) {
        return /*#__PURE__*/React.createElement("button", {
          type: "button",
          "aria-label": label,
          onClick: onClick,
          style: {
            width: 20,
            height: 20,
            padding: 0,
            display: 'grid',
            placeItems: 'center',
            border: '2px solid ' + (inverse ? 'var(--paper-2)' : 'var(--ink)'),
            background: 'transparent',
            color: 'inherit',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            fontWeight: 700,
            lineHeight: 1,
            cursor: 'pointer',
            borderRadius: 0
          }
        }, glyph);
      }
      function Window({
        title = 'untitled.exe',
        meta,
        children,
        bar = 'plain',
        controls = ['min', 'close'],
        onClose,
        shadow = 'md',
        width,
        padding = 24,
        bodyStyle,
        style
      }) {
        const inverse = bar === 'inverse';
        const barBg = {
          plain: 'var(--paper-2)',
          strip: 'var(--paper-3)',
          accent: 'var(--yellow)',
          inverse: 'var(--ink)',
          hatch: 'var(--paper-2)'
        }[bar];
        const shadows = {
          none: 'none',
          sm: 'var(--shadow-hard-sm)',
          md: 'var(--shadow-hard)',
          lg: 'var(--shadow-hard-lg)',
          grey: 'var(--shadow-grey)'
        };
        const glyphs = {
          min: '–',
          max: '□',
          close: '✕'
        };
        return /*#__PURE__*/React.createElement("div", {
          style: {
            width,
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            boxShadow: shadows[shadow],
            color: 'var(--ink)',
            display: 'flex',
            flexDirection: 'column',
            ...style
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            minHeight: 36,
            padding: '0 8px 0 12px',
            borderBottom: '2px solid var(--ink)',
            background: barBg,
            color: inverse ? 'var(--paper-2)' : 'var(--ink)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            letterSpacing: '0.02em',
            whiteSpace: 'nowrap',
            background: bar === 'hatch' ? 'var(--paper-2)' : 'transparent',
            padding: bar === 'hatch' ? '0 8px' : 0
          }
        }, title), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1,
            alignSelf: 'stretch',
            margin: '9px 0',
            background: bar === 'hatch' ? 'var(--bg-hatch)' : 'transparent'
          }
        }), meta && /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            opacity: 0.8
          }
        }, meta), controls.length > 0 && /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            gap: 4
          }
        }, controls.map(c => /*#__PURE__*/React.createElement(Ctrl, {
          key: c,
          glyph: glyphs[c],
          label: c,
          inverse: inverse,
          onClick: c === 'close' ? onClose : undefined
        })))), /*#__PURE__*/React.createElement("div", {
          style: {
            padding,
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-body)',
            lineHeight: 'var(--lh-body)',
            flex: 1,
            ...bodyStyle
          }
        }, children));
      }
      Object.assign(__ds_scope, {
        Window
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/windows/Window.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/windows/Dialog.jsx
  try {
    (() => {
      function Dialog({
        title = 'error.exe',
        kind = 'error',
        heading,
        children,
        actions,
        onClose,
        width = 420,
        style
      }) {
        const icon = {
          error: 'alert',
          info: 'mood-happy',
          success: 'check',
          locked: 'lock'
        }[kind] || 'alert';
        const iconBox = kind === 'error' ? {
          background: 'var(--ink)',
          color: 'var(--yellow)'
        } : {
          background: 'var(--yellow)',
          color: 'var(--ink)'
        };
        return /*#__PURE__*/React.createElement(__ds_scope.Window, {
          title: title,
          bar: kind === 'error' ? 'inverse' : 'plain',
          controls: ['close'],
          onClose: onClose,
          width: width,
          shadow: "lg",
          padding: 0,
          style: style
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 16,
            padding: '22px 22px 18px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 44,
            height: 44,
            flex: 'none',
            display: 'grid',
            placeItems: 'center',
            border: '2px solid var(--ink)',
            ...iconBox
          }
        }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
          name: icon,
          size: 28,
          color: "currentColor"
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            minWidth: 0
          }
        }, heading && /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: 22,
            lineHeight: 1.05,
            textTransform: 'uppercase'
          }
        }, heading), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            lineHeight: 1.5,
            textWrap: 'pretty'
          }
        }, children))), actions && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10,
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
            padding: '12px 22px 18px',
            borderTop: '1px dashed var(--ink-3)'
          }
        }, actions));
      }
      Object.assign(__ds_scope, {
        Dialog
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/windows/Dialog.jsx",
      error: String(e && e.message || e)
    });
  }

  // site/js/activities.jsx
  try {
    (() => {
      const actNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      function ClickOMeter() {
        const [v, setV] = React.useState(0.62);
        const stops = ['VAALIE', 'KOOK', 'LAATIE', 'BRU', 'FLUENT'];
        return /*#__PURE__*/React.createElement("div", {
          onClick: () => setV(Math.random()),
          style: {
            width: '78%',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'center',
            marginBottom: 6
          }
        }, /*#__PURE__*/React.createElement(actNS.Icon, {
          name: "headphone",
          size: 32
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-pixel)',
            fontSize: 18
          }
        }, "\"GQ-!\"")), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            height: 22,
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            display: 'flex'
          }
        }, stops.map((s, i) => /*#__PURE__*/React.createElement("span", {
          key: s,
          style: {
            flex: 1,
            borderLeft: i ? '1px solid var(--ink)' : 'none',
            background: i / stops.length < v ? 'var(--ink)' : 'transparent'
          }
        })), /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            top: -8,
            left: `calc(${v * 100}% - 1px)`,
            width: 3,
            height: 34,
            background: 'var(--yellow)',
            outline: '1px solid var(--ink)',
            transition: 'left 200ms var(--ease-out)'
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            letterSpacing: '0.04em',
            gap: 4
          }
        }, stops.map(s => /*#__PURE__*/React.createElement("span", {
          key: s
        }, s))));
      }
      function SpotVaalie() {
        const marks = [[22, 40, 'flame shirt'], [64, 70, 'socks + slops'], [78, 28, 'gazebo']];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0
          }
        }, /*#__PURE__*/React.createElement(actNS.Halftone, {
          height: "100%",
          dot: 5,
          placeholder: "beach"
        }), marks.map(([x, y, l]) => /*#__PURE__*/React.createElement("div", {
          key: l,
          style: {
            position: 'absolute',
            left: x + '%',
            top: y + '%',
            transform: 'translate(-50%,-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: '2px dashed var(--ink)',
            background: 'rgba(255,90,46,.25)'
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            background: 'var(--paper-2)',
            border: '1px solid var(--ink)',
            padding: '1px 4px',
            whiteSpace: 'nowrap'
          }
        }, l))));
      }
      function JaNoLaka() {
        const {
          Button
        } = actNS;
        const [s, setS] = React.useState(3);
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 14,
            width: '80%'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            textAlign: 'center',
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            padding: '10px 14px'
          }
        }, "A robot is a traffic light."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          onClick: () => setS(s + 1)
        }, "JA"), /*#__PURE__*/React.createElement(Button, {
          onClick: () => setS(Math.max(0, s - 1))
        }, "NO LAKA")), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11
          }
        }, "Score: ", s, " soft-serves"));
      }
      function DurdleGrid() {
        const rows = [['K', 'O', 'O', 'K', ''], ['S', 'H', 'A', 'P', ''], ['', '', '', '', ''], ['', '', '', '', '']];
        const hit = {
          '0-0': 'y',
          '1-0': 'i',
          '1-1': 'i'
        };
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 32px)',
            gap: 5
          }
        }, rows.flatMap((r, ri) => r.map((c, ci) => {
          const h = hit[ri + '-' + ci];
          return /*#__PURE__*/React.createElement("span", {
            key: ri + '-' + ci,
            style: {
              width: 32,
              height: 32,
              display: 'grid',
              placeItems: 'center',
              border: '2px solid var(--ink)',
              background: h === 'y' ? 'var(--yellow)' : h === 'i' ? 'var(--ink)' : 'var(--paper-2)',
              color: h === 'i' ? 'var(--paper-2)' : 'var(--ink)',
              fontFamily: 'var(--font-pixel)',
              fontSize: 16
            }
          }, c);
        })));
      }
      function PackForDurban({
        onBad
      }) {
        const items = [['Baggies', true], ['Sunscreen', true], ['Wetsuit', false], ['Fork', false]];
        const [packed, setPacked] = React.useState(['Baggies']);
        const add = (n, ok) => {
          if (!ok) return onBad(n);
          if (!packed.includes(n)) setPacked([...packed, n]);
        };
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 18,
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6
          }
        }, items.map(([n, ok]) => /*#__PURE__*/React.createElement("button", {
          key: n,
          onClick: () => add(n, ok),
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            border: '2px solid var(--ink)',
            background: packed.includes(n) ? 'var(--paper-3)' : 'var(--paper-2)',
            padding: '4px 8px',
            cursor: 'grab',
            textAlign: 'left',
            textDecoration: packed.includes(n) ? 'line-through' : 'none'
          }
        }, n))), /*#__PURE__*/React.createElement(actNS.Icon, {
          name: "arrow-right",
          size: 20
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            width: 110,
            height: 96,
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            position: 'relative',
            padding: '18px 8px 6px',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            fontFamily: 'var(--font-mono)',
            fontSize: 10
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            top: -10,
            left: 34,
            width: 40,
            height: 10,
            border: '2px solid var(--ink)',
            borderBottom: 'none'
          }
        }), packed.map(p => /*#__PURE__*/React.createElement("span", {
          key: p
        }, "\u2713 ", p))));
      }
      function Leaderboard() {
        const {
          Window,
          Icon
        } = actNS;
        return /*#__PURE__*/React.createElement(Window, {
          title: "top_students.txt",
          meta: "Live",
          controls: ['min', 'close'],
          shadow: "md",
          padding: 0
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '14px 16px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "trophy",
          size: 24
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: 26,
            textTransform: 'uppercase'
          }
        }, "Top Students")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '28px 1fr auto auto',
            columnGap: 12,
            fontFamily: 'var(--font-mono)',
            fontSize: 13
          }
        }, ['#', 'Student', 'Exam', 'Games'].map(h => /*#__PURE__*/React.createElement("span", {
          key: h,
          style: {
            padding: '6px 0',
            borderTop: '1px solid var(--ink)',
            borderBottom: '1px solid var(--ink)',
            background: 'var(--paper-3)',
            fontSize: 10,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            paddingLeft: h === '#' ? 16 : 0,
            paddingRight: h === 'Games' ? 16 : 0
          }
        }, h)), window.LSD_DATA.leaderboard.map(([n, e, g], i) => /*#__PURE__*/React.createElement(React.Fragment, {
          key: n
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            padding: '9px 0 9px 16px',
            borderBottom: '1px dashed var(--paper-4)',
            fontWeight: 700
          }
        }, i + 1), /*#__PURE__*/React.createElement("span", {
          style: {
            padding: '9px 0',
            borderBottom: '1px dashed var(--paper-4)'
          }
        }, i === 0 ? /*#__PURE__*/React.createElement("span", {
          style: {
            background: 'var(--yellow)',
            padding: '0 4px'
          }
        }, n) : n), /*#__PURE__*/React.createElement("span", {
          style: {
            padding: '9px 0',
            borderBottom: '1px dashed var(--paper-4)'
          }
        }, e), /*#__PURE__*/React.createElement("span", {
          style: {
            padding: '9px 16px 9px 0',
            borderBottom: '1px dashed var(--paper-4)',
            textAlign: 'right'
          }
        }, g)))), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '10px 16px',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--ink-3)'
          }
        }, "Updated after every exam. Forks disqualify. Sand in the keyboard is fine."));
      }
      function Activities({
        initialError = 'Wetsuit',
        game
      }) {
        const openGame = ref => {
          location.hash = 'act/' + ref.toLowerCase();
        };
        const {
          SpecCard,
          Button,
          Dialog,
          Icon
        } = actNS;
        const [err, setErr] = React.useState(initialError);
        const games = [{
          ref: 'GAME-01',
          label: 'Say Gqom',
          tag: 'MIC',
          src: 'Mic-based pronunciation test. The click-o-meter rates your gqom click from VAALIE to FLUENT.',
          body: /*#__PURE__*/React.createElement(ClickOMeter, null)
        }, {
          ref: 'GAME-02',
          label: 'Spot the Vaalie',
          tag: '3 TO FIND',
          src: 'Find the details in the beach scene: flame shirt, socks with slops, gazebo with cup holders.',
          body: /*#__PURE__*/React.createElement(SpotVaalie, null),
          nox: true
        }, {
          ref: 'GAME-03',
          label: 'Ja / No Laka',
          tag: '60 SEC',
          src: 'Rapid true-false. Statements flash, you slam JA or NO LAKA. Score counted in soft-serves.',
          body: /*#__PURE__*/React.createElement(JaNoLaka, null)
        }, {
          ref: 'GAME-04',
          label: 'Durdle',
          tag: 'DAILY',
          src: 'Daily Durban-slang word game. Six tries. Today\u2019s word is in the Dictionary. So is tomorrow\u2019s. Hint hint.',
          body: /*#__PURE__*/React.createElement(DurdleGrid, null)
        }, {
          ref: 'GAME-05',
          label: 'Pack for Durban',
          tag: 'DRAG',
          src: 'Drag the essentials to the suitcase. The system will tell you if you are wrong. Loudly.',
          body: /*#__PURE__*/React.createElement(PackForDurban, {
            onBad: setErr
          })
        }, {
          ref: 'GAME-06',
          label: 'The 2pm Quiz',
          tag: 'LOCKED',
          src: 'Locked before 2pm. Come back after the beach.',
          locked: true,
          body: /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
              opacity: 0.9
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "lock",
            size: 48
          }), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-pixel)',
              fontSize: 22
            }
          }, "14:00"), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 13
            }
          }, "Come back after the beach."))
        }];
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
          index: "02",
          kicker: "Practical study \xB7 six games",
          title: "Activities"
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 640px), 1fr))',
            gap: 40,
            alignItems: 'start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 28,
            position: 'relative'
          }
        }, games.map(g => /*#__PURE__*/React.createElement(SpecCard, {
          key: g.ref,
          refCode: g.ref,
          meta: g.locked ? 'Opens 14:00' : 'Play',
          label: g.label,
          chipVariant: g.locked ? 'inverse' : 'outline',
          crosshair: !g.nox,
          previewHeight: 230,
          sourceLabel: "SOURCE",
          sourceTag: g.tag,
          source: g.src,
          interactive: true,
          onClick: () => openGame(g.ref),
          footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--ink-3)'
            }
          }, g.locked ? 'Status: sunbathing' : 'Best: 9 soft-serves'), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: g.locked ? 'secondary' : 'primary',
            onClick: e => {
              e.stopPropagation();
              openGame(g.ref);
            }
          }, g.locked ? 'Peek' : 'Play full screen'))
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            pointerEvents: 'none',
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center'
          }
        }, g.body))), err && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            left: '30%',
            top: '58%',
            zIndex: 5
          }
        }, /*#__PURE__*/React.createElement(Dialog, {
          title: "pack_for_durban.exe",
          kind: "error",
          heading: err === 'Fork' ? 'ABSOLUTELY NOT' : '\u26A0 Error: wetsuit detected.',
          width: 400,
          onClose: () => setErr(null),
          actions: err === 'Fork' ? /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            onClick: () => setErr(null)
          }, "Remove fork") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            onClick: () => setErr(null)
          }, "OK"), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            onClick: () => setErr(null)
          }, "OK, bru"))
        }, err === 'Fork' ? 'Forks are not permitted within 50km of a bunny.' : 'Baggies required.'))), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'sticky',
            top: 140,
            maxWidth: 460
          }
        }, /*#__PURE__*/React.createElement(Leaderboard, null))), game && /*#__PURE__*/React.createElement(GameScreen, {
          id: game,
          onBack: () => {
            location.hash = 'act';
          }
        }));
      }
      Object.assign(window, {
        Activities
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "site/js/activities.jsx",
      error: String(e && e.message || e)
    });
  }

  // site/js/data.js
  try {
    (() => {
      window.LSD_DATA = {
        words: [['01', 'Aweh', 'interj.', 'The standard greeting. Also: yes, agreed, understood, and I see you. One word, four meanings, zero effort.', 'Aweh, bru. Long time.'], ['02', 'Ekse', 'interj.', 'Used to open a sentence, or to request attention. Roughly "I say", but with better posture.', 'Ekse, is that your bunny?'], ['03', 'Kiff', 'adj.', 'Good. Excellent. Of acceptable quality to a person standing on a beach.', 'The water is kiff today.'], ['04', 'Chips!', 'interj.', 'A warning. Shouted to alert others that trouble — or a parent — is approaching. Not a snack.', 'Chips! Chips! Here comes the lifeguard.'], ['05', 'Baggies', 'n. pl.', 'Loose board shorts. The formal attire of the coast. Required at all lessons.', 'He wore baggies to the wedding. Nobody minded.'], ['06', 'Logging', 'v.', 'Staying over at someone\u2019s place, usually for longer than discussed.', 'I\u2019m logging by my cousin until Sunday. Or March.'], ['07', 'One time', 'adv.', 'Truly. Honestly. Confirms that the preceding statement is not a joke.', 'That was the best bunny of my life, one time.'], ['08', 'Scheming', 'v.', 'Thinking; reckoning; forming an opinion. No actual scheme required.', 'I\u2019m scheming it\u2019s going to rain.'], ['09', 'Choon', 'v.', 'To tell or say something to someone. Often used before important information.', 'I\u2019m choon you, the surf is pumping.'], ['10', 'Gqom', 'n.', 'Durban\u2019s own electronic dance music. Pronounced with a click. Practise the click in GAME-01.', 'The gqom was so loud the windows were dancing.'], ['11', 'Jol', 'n. / v.', 'A party, or the act of having one. Can describe an evening, a weekend or an attitude.', 'Big jol at the beach tonight.'], ['12', 'Larney', 'adj.', 'Fancy. Posh. Slightly too expensive for baggies.', 'Look at you in your larney shoes.'], ['13', 'Bunny', 'n.', 'A quarter loaf of bread, hollowed and filled with curry. Eaten with the hands. The bread is the plate. The bread is also the spoon.', 'Quarter mutton bunny, extra gravy. No fork.'], ['14', 'Shap', 'interj.', 'Fine. Good. Agreed. A complete conversation in one syllable.', 'Shap, see you at six.'], ['15', 'Shot', 'interj.', 'Thanks. Also: well done. Delivered with a nod.', 'Shot for the lift, bru.'], ['16', 'Ducking out', 'v. phr.', 'Leaving. Usually quietly, usually early, usually towards the beach.', 'I\u2019m ducking out before the traffic.'], ['17', 'The coast', 'n.', 'Durban and its surroundings, referred to as though there were no other coast.', 'We\u2019re going down the coast for the weekend.'], ['18', 'Chow', 'v. / n.', 'To eat; food. "Chow now" is also a farewell.', 'Let\u2019s chow, I\u2019m starving.'], ['19', 'Prawn', 'n.', 'A person. Applied with mild affection and moderate suspicion.', 'That prawn took my parking.'], ['20', 'Kook', 'n.', 'A beginner surfer, or anyone who has bought more gear than they have used.', 'Brand new board, never been wet. Total kook.'], ['21', 'Robot', 'n.', 'A traffic light. Not a machine. Turn left at the second robot.', 'Turn left at the robot by the garage.'], ['22', 'Smaak', 'v.', 'To like, very much. Applies to people, food and weather.', 'I smaak this weather.'], ['23', 'Dala', 'v.', 'To do. To get on with it. "Dala what you must."', 'Just dala what you must, bru.'], ['24', 'Laatie', 'n.', 'A young person. A kid. Anyone younger than the speaker.', 'The laatie paddled out further than all of us.'], ['25', 'Bru', 'n.', 'Brother. Friend. Stranger at a robot. The most important word in this course.', 'Shot, bru.'], ['26', 'Vaalie', 'n.', 'A visitor from inland, identifiable by socks with slops and an umbrella with cup holders.', 'Spot the vaalie: he\u2019s the one with the gazebo.'], ['27', 'Pozi', 'n.', 'Home; one\u2019s place. Where you are logging tonight.', 'Come through to my pozi later.'], ['28', 'Vy', 'v.', 'To go. To leave. Also used to suggest that others go.', 'Let\u2019s vy, the bunnies are getting cold.'], ['29', 'Tops', 'adj.', 'The best available. Also: at most.', 'The swell was tops this morning.'], ['30', 'No laka', 'interj.', 'No. A firm no. Pairs well with forks and side salads.', 'A fork? No laka.'], ['31', 'Mfethu', 'n.', 'Brother; my guy. Warmer than bru, if that were possible.', 'Mfethu! Where have you been?'], ['32', 'Yano', 'interj.', '"You know." Placed anywhere in a sentence for rhythm.', 'It\u2019s hot, yano, so we went swimming.']],
        exam: [{
          "w": "01",
          "q": "A friend greets you on the promenade with \"Aweh.\" The correct reply is:",
          "a": ["Good afternoon.", "Aweh.", "Please state your business."],
          "c": 1
        }, {
          "w": "02",
          "q": "\"Ekse\" at the start of a sentence means:",
          "a": ["Excuse me, I am leaving.", "Attention, please — something important follows.", "Exactly."],
          "c": 1
        }, {
          "w": "03",
          "q": "\"The water is kiff today.\" The water is:",
          "a": ["Good.", "Cold.", "Closed."],
          "c": 0
        }, {
          "w": "04",
          "q": "Someone shouts \"Chips!\" across the beach. You should:",
          "a": ["Order a large portion.", "Look out — trouble is coming.", "Check the menu."],
          "c": 1
        }, {
          "w": "05",
          "q": "Which item is required at all lessons?",
          "a": ["A wetsuit.", "A fork.", "Baggies."],
          "c": 2
        }, {
          "w": "06",
          "q": "Your cousin has been logging at your place since December. It is now March. This is:",
          "a": ["A legal matter.", "Normal.", "Unusual."],
          "c": 1
        }, {
          "w": "07",
          "q": "\"That was the best bunny of my life, one time.\" The speaker:",
          "a": ["Means it. Truly.", "Has only eaten one bunny.", "Is joking."],
          "c": 0
        }, {
          "w": "08",
          "q": "\"I’m scheming it’s going to rain.\" The speaker is:",
          "a": ["Planning a crime.", "Controlling the weather.", "Giving an opinion."],
          "c": 2
        }, {
          "w": "09",
          "q": "\"I’m choon you, the surf is pumping.\" The speaker is:",
          "a": ["Singing.", "Telling you something.", "Tuning a radio."],
          "c": 1
        }, {
          "w": "10",
          "q": "Gqom is:",
          "a": ["Durban’s own electronic dance music.", "A type of curry.", "A beach umbrella."],
          "c": 0
        }, {
          "w": "11",
          "q": "\"Big jol at the beach tonight.\" You should bring:",
          "a": ["A gazebo with cup holders.", "Yourself, in baggies.", "A permit."],
          "c": 1
        }, {
          "w": "12",
          "q": "Your friend arrives in larney shoes. The shoes are:",
          "a": ["Fancy.", "Borrowed.", "Wet."],
          "c": 0
        }, {
          "w": "13",
          "q": "The bunny arrives with a side salad. You:",
          "a": ["Ask for a fork", "Call the police", "Both — this is a crime scene."],
          "c": 2
        }, {
          "w": "14",
          "q": "\"Shap, see you at six.\" This means:",
          "a": ["Agreed. See you at six.", "Hurry up.", "Bring snacks."],
          "c": 0
        }, {
          "w": "15",
          "q": "Someone gives you a lift home. The fluent thank-you is:",
          "a": ["Thank you kindly.", "Shot, bru.", "Please leave a review."],
          "c": 1
        }, {
          "w": "16",
          "q": "\"I’m ducking out before the traffic.\" The speaker is:",
          "a": ["Swimming.", "Hiding from a duck.", "Leaving."],
          "c": 2
        }, {
          "w": "17",
          "q": "\"We’re going down the coast.\" Which coast?",
          "a": ["The coast.", "The west coast.", "Please specify."],
          "c": 0
        }, {
          "w": "18",
          "q": "Complete the farewell: \"Chow ___\"",
          "a": ["later", "now", "never"],
          "c": 1
        }, {
          "w": "19",
          "q": "\"That prawn took my parking.\" The prawn is:",
          "a": ["Seafood.", "A person.", "A small car."],
          "c": 1
        }, {
          "w": "20",
          "q": "Brand new board, never been wet. Its owner is a:",
          "a": ["Kook.", "Laatie.", "Lifeguard."],
          "c": 0
        }, {
          "w": "21",
          "q": "\"Turn left at the robot\" means turn left at the:",
          "a": ["Machine.", "Traffic light.", "Mall entrance."],
          "c": 1
        }, {
          "w": "22",
          "q": "\"I smaak this weather\" expresses:",
          "a": ["A complaint.", "A weather warning.", "Strong approval."],
          "c": 2
        }, {
          "w": "23",
          "q": "\"Just dala what you must.\" You should:",
          "a": ["Get on with it.", "Ask for a form.", "Wait for instructions."],
          "c": 0
        }, {
          "w": "24",
          "q": "The laatie paddled out further than everyone. The laatie is:",
          "a": ["The lifeguard.", "A young person.", "A dog."],
          "c": 1
        }, {
          "w": "25",
          "q": "The most important word in this course is:",
          "a": ["Bru.", "Fork.", "Wetsuit."],
          "c": 0
        }, {
          "w": "26",
          "q": "Socks with slops. Gazebo with cup holders. This is a:",
          "a": ["Laatie.", "Kook.", "Vaalie."],
          "c": 2
        }, {
          "w": "27",
          "q": "\"Come through to my pozi later.\" You are going to their:",
          "a": ["Office.", "Home.", "Pool."],
          "c": 1
        }, {
          "w": "28",
          "q": "\"Let’s vy, the bunnies are getting cold.\" You should:",
          "a": ["Go.", "Wait.", "Reheat."],
          "c": 0
        }, {
          "w": "29",
          "q": "\"The swell was tops this morning.\" The swell was:",
          "a": ["Flat.", "The best.", "Over the pier."],
          "c": 1
        }, {
          "w": "30",
          "q": "The waiter offers you a fork with your bunny. You reply:",
          "a": ["Yes, please.", "Two, please.", "No laka."],
          "c": 2
        }, {
          "w": "31",
          "q": "You spot your oldest friend across the beachfront. You shout:",
          "a": ["Mfethu!", "Excuse me, sir!", "Chips!"],
          "c": 0
        }, {
          "w": "32",
          "q": "\"It’s hot, yano, so we went swimming.\" \"Yano\" means:",
          "a": ["You know.", "Yes and no.", "Year nought."],
          "c": 0
        }],
        leaderboard: [['BunnyChowBrad', '10/10', '12'], ['NoLakaNelly', '10/10', '11'], ['ShapShapSipho', '9/10', '9'], ['VaalieInRecovery', '8/10', '7'], ['KiffKelly', '8/10', '6'], ['DalaDave', '7/10', '4']],
        merch: [{
          id: 'MERCH-01',
          name: 'AWEH.',
          kind: 'Tee',
          price: 'R 349',
          desc: 'One-word slang tee. Says hello so you don’t have to.',
          tee: true
        }, {
          id: 'MERCH-02',
          name: 'EKSE.',
          kind: 'Tee',
          price: 'R 349',
          desc: 'One-word slang tee. Starts conversations. Doesn’t finish them.',
          tee: true
        }, {
          id: 'MERCH-03',
          name: 'SHAP.',
          kind: 'Tee',
          price: 'R 349',
          desc: 'One-word slang tee. Ends conversations. An exit strategy in cotton.',
          tee: true
        }, {
          id: 'MERCH-04',
          name: 'Fluent in Durban',
          kind: 'Bumper sticker',
          price: 'R 59',
          desc: 'For the car. Visible from the robot.'
        }, {
          id: 'MERCH-05',
          name: 'Native Speaker',
          kind: 'Cap',
          price: 'R 279',
          desc: 'Embroidered. Worn backwards by graduates only.'
        }, {
          id: 'MERCH-06',
          name: 'Certificate of Fluency',
          kind: 'Framed',
          price: 'R 499',
          desc: 'Your certificate, framed. Hang it where the vaalies can see.'
        }, {
          id: 'MERCH-07',
          name: 'Beach Towel',
          kind: 'Towel',
          price: 'R 449',
          desc: 'All 32 words, edge to edge. Study while you tan.'
        }, {
          id: 'MERCH-08',
          name: 'Kook Starter Pack',
          kind: 'Bundle',
          price: 'R 399',
          desc: 'Just baggies and sunscreen. Everything you actually need.'
        }]
      };
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "site/js/data.js",
      error: String(e && e.message || e)
    });
  }

  // site/js/dictionary.jsx
  try {
    (() => {
      const dictNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      function buildDrawer(words) {
        const sorted = [...words].sort((a, b) => a[1].replace(/^The /, 'T').localeCompare(b[1].replace(/^The /, 'T')));
        const rows = [];
        let cur = null;
        const counts = {};
        sorted.forEach(w => {
          const L = w[1].replace(/^The /, 'T')[0].toUpperCase();
          counts[L] = (counts[L] || 0) + 1;
        });
        const cols = [40, 60, 26, 52, 34, 64];
        sorted.forEach((w, i) => {
          const L = w[1].replace(/^The /, 'T')[0].toUpperCase();
          if (L !== cur) {
            rows.push({
              letter: L,
              count: String(counts[L]).padStart(3, '0'),
              offset: 4 + rows.length % 3 * 6
            });
            cur = L;
          }
          rows.push({
            w,
            offset: cols[i % cols.length]
          });
        });
        return rows;
      }
      function EntryCard({
        w,
        playing,
        setPlaying
      }) {
        const {
          Button,
          RefCode,
          Barcode,
          ProgressBar,
          Icon
        } = dictNS;
        const [num, word, pos, def, ex] = w;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 40,
            padding: '9px 22px',
            marginBottom: -2,
            background: 'var(--yellow)',
            border: '2px solid var(--ink)',
            borderBottom: 'none',
            borderRadius: '8px 8px 0 0',
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            fontWeight: 700,
            position: 'relative'
          }
        }, /*#__PURE__*/React.createElement("span", null, num), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 600
          }
        }, word))), /*#__PURE__*/React.createElement("article", {
          style: {
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            boxShadow: 'var(--shadow-hard-lg)',
            padding: '28px 32px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            transform: 'rotate(-0.6deg)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between'
          }
        }, /*#__PURE__*/React.createElement(RefCode, {
          prefix: "",
          code: 'LSD-' + num + ' · Entry ' + num + ' of 32'
        }), /*#__PURE__*/React.createElement(RefCode, {
          code: "LSD-2026"
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'baseline',
            gap: 16,
            flexWrap: 'wrap'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: 84,
            lineHeight: 0.9,
            letterSpacing: '-0.02em'
          }
        }, word), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontStyle: 'italic',
            fontSize: 18,
            color: 'var(--ink-2)'
          }
        }, pos)), /*#__PURE__*/React.createElement("div", {
          style: {
            height: 2,
            background: 'var(--ink)'
          }
        }), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-mono)',
            fontSize: 17,
            lineHeight: 1.55,
            textWrap: 'pretty'
          }
        }, def), /*#__PURE__*/React.createElement("div", {
          style: {
            border: '1px solid var(--ink)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '5px 10px',
            background: 'var(--paper-3)',
            borderBottom: '1px solid var(--ink)',
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.1em'
          }
        }, "EXAMPLE"), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '12px 12px',
            fontFamily: 'var(--font-mono)',
            fontSize: 15,
            fontStyle: 'italic'
          }
        }, "\u201C", ex, "\u201D")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: playing ? 'accent' : 'primary',
          icon: /*#__PURE__*/React.createElement(Icon, {
            name: playing ? 'volume-3' : 'play',
            size: 18
          }),
          onClick: () => setPlaying(!playing)
        }, playing ? 'On air — Radio lesson ' + num : 'Hear it'), /*#__PURE__*/React.createElement(Barcode, {
          value: 'LSD-' + num + word,
          width: 130,
          height: 30
        })), playing && /*#__PURE__*/React.createElement(ProgressBar, {
          label: 'Radio lesson ' + num + ' · ' + word,
          value: 3,
          max: 10,
          showCount: false
        })));
      }
      function Dictionary() {
        const {
          IndexTab
        } = dictNS;
        const words = window.LSD_DATA.words;
        const rows = React.useMemo(() => buildDrawer(words), []);
        const [open, setOpen] = React.useState('13');
        const [playing, setPlaying] = React.useState(false);
        const w = words.find(x => x[0] === open);
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
          index: "01",
          kicker: "Reference \xB7 do not remove from the drawer",
          title: "The Dictionary",
          right: /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              maxWidth: 300,
              lineHeight: 1.5,
              textAlign: 'right'
            }
          }, "Filed alphabetically. Numbered by lesson. Dusted weekly. Pull any card to read the full entry.")
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 56,
            alignItems: 'start'
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--paper-3)',
            border: '2px solid var(--ink)',
            borderBottom: 'none',
            padding: '18px 14px 0'
          }
        }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            marginTop: i ? -14 : 0,
            padding: `0 ${Math.max(0, (rows.length - i) * 0.35)}px`,
            position: 'relative',
            zIndex: i
          }
        }, r.letter ? /*#__PURE__*/React.createElement(IndexTab, {
          letter: r.letter,
          count: r.count,
          offset: r.offset,
          tabWidth: "28%"
        }) : /*#__PURE__*/React.createElement(IndexTab, {
          number: r.w[0],
          word: r.w[1],
          offset: r.offset,
          tabWidth: "34%",
          active: r.w[0] === open,
          onClick: () => {
            setOpen(r.w[0]);
            setPlaying(false);
          }
        }))), /*#__PURE__*/React.createElement("div", {
          style: {
            height: 22,
            background: 'var(--paper-2)',
            borderTop: '1.5px solid var(--ink)',
            margin: '0 -14px'
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            height: 110,
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            boxShadow: 'var(--shadow-hard)',
            display: 'grid',
            placeItems: 'center'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontSize: 20,
            fontWeight: 500,
            background: 'var(--yellow)',
            border: '1.5px solid var(--ink)',
            borderRadius: 6,
            padding: '6px 22px'
          }
        }, "the whole language, filed."), /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            left: 12,
            bottom: 8,
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--ink-3)'
          }
        }, "DRAWER 01 / 01 \xB7 LSD-01 \u2013 LSD-32 \xB7 SAND INSIDE: LIKELY"))), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'sticky',
            top: 140
          }
        }, /*#__PURE__*/React.createElement(EntryCard, {
          w: w,
          playing: playing,
          setPlaying: setPlaying
        }))));
      }
      Object.assign(window, {
        Dictionary
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "site/js/dictionary.jsx",
      error: String(e && e.message || e)
    });
  }

  // site/js/enrol.jsx
  try {
    (() => {
      const enrolNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      function EnrolTease({
        mobile
      }) {
        const {
          Icon,
          RefCode,
          Button
        } = enrolNS;
        const toForm = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          setTimeout(() => {
            const el = document.querySelector('input[autocomplete="given-name"]');
            if (el) el.focus({
              preventScroll: true
            });
          }, 400);
        };
        const items = [['01', 'The Dictionary', '32 words on index cards, each with a radio lesson.', 'B——y  n.  A quarter loaf of █████, hollowed and ██████ with curry.'], ['02', 'Activities', 'Six games, from Say Gqom to Spot the Vaalie, plus the leaderboard.', 'GAME-01 … GAME-06  ·  TOP STUDENTS: ████████'], ['03', 'Merch', 'Course materials. Mostly tees. One cooler box.', 'MERCH-01  ████.  Tee  ·  R ███'], ['04', 'Submit a Word', 'Know one we missed? File it with Gateway.', 'FORM W-05  ·  Review: 4 steps'], ['05', 'Study Pack', 'Download the course for the flight. Works offline.', 'PACK-01 … PACK-06  ·  51.0 MB'], ['06', 'Student Card', 'Upload a selfie. Get pixelated. Post it to your story.', 'STUDENT: █████  ·  FORKS ON PERSON: 0'], ['07', 'The Final Exam', '32 questions. Pass and your Certificate of Fluency prints itself.', 'Q13/32  The bunny arrives with a ████ █████. You:']];
        return /*#__PURE__*/React.createElement("section", {
          style: {
            marginTop: mobile ? 44 : 72
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 20,
            marginBottom: 26
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase'
          }
        }, "Enrolment unlocks"), /*#__PURE__*/React.createElement("h2", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontSize: mobile ? 40 : 'clamp(44px, 5vw, 72px)',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase'
          }
        }, "Seven files.", /*#__PURE__*/React.createElement("br", null), "Currently locked.")), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            lineHeight: 1.5,
            maxWidth: 340
          }
        }, "Everything below opens the moment you enrol. Contents partially redacted by Gateway\u2019s legal team (one guy, Dave).")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: 22
          }
        }, items.map(([n, t, d, peek], i) => /*#__PURE__*/React.createElement("button", {
          key: n,
          type: "button",
          onClick: toForm,
          style: {
            all: 'unset',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            paddingLeft: [0, 24, 48, 12, 36, 60, 18][i]
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '7px 14px',
            marginBottom: -2,
            border: '2px solid var(--ink)',
            borderBottom: 'none',
            borderRadius: '6px 6px 0 0',
            background: 'var(--paper-2)',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            position: 'relative'
          }
        }, /*#__PURE__*/React.createElement("b", null, n), /*#__PURE__*/React.createElement("span", {
          style: {
            textTransform: 'lowercase'
          }
        }, t))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            padding: '18px 18px 14px',
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            flex: 1
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontSize: 28,
            lineHeight: 0.95,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em'
          }
        }, t), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '3px 8px 3px 4px',
            background: 'var(--ink)',
            color: 'var(--paper-2)',
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.08em'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "lock",
          size: 16
        }), "LOCKED")), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            lineHeight: 1.5,
            color: 'var(--ink-2)',
            textWrap: 'pretty'
          }
        }, d), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 'auto',
            padding: '10px 10px',
            border: '1px dashed var(--ink-3)',
            background: 'var(--bg-dots)',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            color: 'var(--ink-2)'
          }
        }, peek))))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 28,
            padding: '16px 18px',
            border: '2px solid var(--ink)',
            background: 'var(--yellow)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            fontWeight: 700
          }
        }, "Seven files. One form. Course fee: free."), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          brackets: true,
          onClick: toForm
        }, "Unlock the course")));
      }
      function Enrol({
        onDone,
        mobile,
        initial
      }) {
        const {
          Window,
          Button,
          Barcode,
          RefCode,
          Dialog,
          StatusStrip
        } = enrolNS;
        const [f, setF] = React.useState({
          name: '',
          email: '',
          consent: false,
          promise: false
        });
        const [err, setErr] = React.useState({});
        const [done, setDone] = React.useState(initial === 'done' ? {
          no: 'LSD-2026-04417',
          name: 'Thandi'
        } : null);
        const set = k => v => {
          setF({
            ...f,
            [k]: v
          });
          if (err[k]) setErr({
            ...err,
            [k]: null
          });
        };
        const submit = e => {
          e.preventDefault();
          const x = {};
          if (!f.name.trim()) x.name = 'Gateway needs this';
          if (!isEmail(f.email)) x.email = f.email ? 'That looks like a vaalie typed it' : 'Gateway needs this';
          if (!f.consent) x.consent = 'Tick it. It is free, bru';
          setErr(x);
          if (Object.keys(x).length) return;
          const no = 'LSD-2026-' + String(Math.floor(10000 + Math.random() * 89999));
          // Mock capture. In production, POST { name, email, consent, source: 'lsd-enrol' } to the CRM here.
          localStorage.setItem('lsd-enrolled', '1');
          localStorage.setItem('lsd-name', f.name.trim());
          localStorage.setItem('lsd-email', f.email.trim());
          localStorage.setItem('lsd-student', no);
          setDone({
            no,
            name: f.name.trim()
          });
        };
        const rows = [['Lessons', '32 · real Durban slang'], ['Final exam', '32 questions · written on site'], ['Games', '6 · plus the leaderboard'], ['Study Pack', 'Download for the flight · works offline'], ['Certificate', 'Your name on it · redeemable at Gateway, Durban'], ['Course fee', 'Free']];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
          }
        }, /*#__PURE__*/React.createElement("header", {
          style: {
            maxWidth: 'var(--page-max)',
            width: '100%',
            margin: '0 auto',
            padding: mobile ? '14px 16px' : '20px 64px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            borderBottom: '2px solid var(--ink)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontSize: mobile ? 16 : 20,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em'
          }
        }, "Learn to Speak Durban"), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 8,
            height: 8,
            background: 'var(--yellow)',
            border: '1px solid var(--ink)'
          }
        }), "Enrolment desk \xB7 open")), /*#__PURE__*/React.createElement("main", {
          style: {
            flex: 1,
            maxWidth: 'var(--page-max)',
            width: '100%',
            margin: '0 auto',
            padding: mobile ? '28px 16px 0' : '64px 64px 0'
          }
        }, /*#__PURE__*/React.createElement("section", {
          style: {
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            gap: mobile ? 28 : 56,
            alignItems: 'flex-start',
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            boxShadow: mobile ? 'var(--shadow-hard)' : 'var(--shadow-hard-lg)',
            padding: mobile ? '36px 18px 22px' : '56px 56px 48px'
          }
        }, /*#__PURE__*/React.createElement(RefCode, {
          code: "LSD-2026 \xB7 FORM E-01",
          style: {
            position: 'absolute',
            top: 10,
            left: 12
          }
        }), !mobile && /*#__PURE__*/React.createElement(Barcode, {
          value: "LSD-ENROL",
          width: 160,
          height: 36,
          style: {
            position: 'absolute',
            top: 14,
            right: 16
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '999 1 480px',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: mobile ? 18 : 26
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: mobile ? 11 : 13,
            letterSpacing: '0.16em',
            textTransform: 'uppercase'
          }
        }, "A public service by Gateway"), /*#__PURE__*/React.createElement("h1", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontSize: mobile ? 54 : 'clamp(56px, 7.6vw, 124px)',
            lineHeight: 0.86,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase'
          }
        }, "Learn to", /*#__PURE__*/React.createElement("br", null), "Speak ", /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-pixel)',
            fontWeight: 400,
            fontSize: '0.86em',
            letterSpacing: '-0.02em',
            background: 'var(--yellow)',
            padding: '0 0.06em'
          }
        }, "Durban")), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            maxWidth: 540,
            fontFamily: 'var(--font-mono)',
            fontSize: mobile ? 14 : 16,
            lineHeight: 1.55,
            textWrap: 'pretty'
          }
        }, "The course the whole country is passing happily. Enrol to open all 32 lessons, write the final exam and receive your Certificate of Fluency."), /*#__PURE__*/React.createElement("div", {
          style: {
            border: '2px solid var(--ink)',
            maxWidth: 560
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '7px 12px',
            background: 'var(--paper-3)',
            borderBottom: '1px solid var(--ink)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.08em'
          }
        }, /*#__PURE__*/React.createElement("span", null, "ENROLMENT INCLUDES"), /*#__PURE__*/React.createElement("span", null, "2026 INTAKE")), rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
          key: k,
          style: {
            display: 'grid',
            gridTemplateColumns: mobile ? '96px 1fr' : '130px 1fr',
            gap: 12,
            padding: '9px 12px',
            borderTop: i ? '1px dashed var(--ink-3)' : 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: 13
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--ink-3)',
            textTransform: 'uppercase',
            fontSize: 11,
            letterSpacing: '0.06em',
            paddingTop: 2
          }
        }, k), /*#__PURE__*/React.createElement("span", null, v))))), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 360px',
            minWidth: 0,
            maxWidth: mobile ? undefined : 460
          }
        }, /*#__PURE__*/React.createElement(Window, {
          title: "enrolment_form.exe",
          bar: "accent",
          meta: "Step 1 of 1",
          controls: ['close'],
          shadow: "md",
          padding: 0
        }, /*#__PURE__*/React.createElement("form", {
          onSubmit: submit,
          noValidate: true,
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            padding: mobile ? 16 : 22
          }
        }, /*#__PURE__*/React.createElement(Field, {
          label: "First name",
          value: f.name,
          onChange: set('name'),
          placeholder: "Your actual name. Not \u201CBru\u201D.",
          autoComplete: "given-name",
          error: err.name
        }), /*#__PURE__*/React.createElement(Field, {
          label: "Email address",
          type: "email",
          value: f.email,
          onChange: set('email'),
          placeholder: "you@example.co.za",
          autoComplete: "email",
          error: err.email
        }), /*#__PURE__*/React.createElement(Tick, {
          checked: f.consent,
          onChange: set('consent'),
          error: err.consent
        }, "Send me lessons, exam reminders and Gateway rewards. Unsubscribe any time \u2014 no hard feelings, bru."), /*#__PURE__*/React.createElement(Tick, {
          checked: f.promise,
          onChange: set('promise')
        }, "I promise not to bring a wetsuit. (Optional, but noted.)"), /*#__PURE__*/React.createElement(Button, {
          type: "submit",
          variant: "primary",
          size: "lg",
          block: true,
          brackets: true
        }, "Enrol, bru"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            lineHeight: 1.5,
            color: 'var(--ink-3)'
          }
        }, "Your details are handled by Gateway in line with its ", /*#__PURE__*/React.createElement("a", {
          href: "#",
          style: {
            color: 'var(--ink)'
          }
        }, "privacy policy"), ". One enrolment per student. Clones must enrol separately."))), /*#__PURE__*/React.createElement("button", {
          type: "button",
          onClick: () => onDone('home'),
          style: {
            all: 'unset',
            cursor: 'pointer',
            display: 'block',
            marginTop: 16,
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            textDecoration: 'underline',
            textUnderlineOffset: 4
          }
        }, "Already enrolled? Go to the course (we trust you)"))), /*#__PURE__*/React.createElement(EnrolTease, {
          mobile: mobile
        }), /*#__PURE__*/React.createElement(StatusStrip, {
          label: "Intake",
          items: ['Students enrolled today: 1,204', 'Forks confiscated: 37', 'Course fee: free', 'Fluency: guaranteed-ish'],
          style: {
            marginTop: mobile ? 28 : 40
          }
        })), /*#__PURE__*/React.createElement(Footer, {
          mobile: mobile
        }), done && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            display: 'grid',
            placeItems: 'center',
            padding: 16,
            background: 'rgba(242,241,236,.6)'
          }
        }, /*#__PURE__*/React.createElement(Dialog, {
          title: "enrolment.exe",
          kind: "success",
          heading: "Enrolment confirmed.",
          width: mobile ? '100%' : 440,
          onClose: () => onDone('home'),
          actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            onClick: () => onDone('home')
          }, "Go to the index"), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            onClick: () => onDone('dict')
          }, "Begin Lesson 1"))
        }, "Welcome to the coast, ", done.name, ". Student no. ", /*#__PURE__*/React.createElement("b", null, done.no), ". Your first lesson is on its way to your inbox. Check spam. Gateway is new at email.")));
      }
      Object.assign(window, {
        Enrol
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "site/js/enrol.jsx",
      error: String(e && e.message || e)
    });
  }

  // site/js/exam.jsx
  try {
    (() => {
      const examNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      function ExamStack({
        children,
        title = 'final_exam.exe',
        meta
      }) {
        const {
          Window
        } = examNS;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            paddingTop: 72,
            paddingLeft: 72
          }
        }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            position: 'absolute',
            top: i * 24,
            left: i * 24,
            right: 72 - i * 24,
            bottom: 72 - i * 24
          }
        }, /*#__PURE__*/React.createElement(Window, {
          title: title,
          controls: ['close'],
          shadow: "grey",
          style: {
            height: '100%'
          },
          bar: "strip"
        }, /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative'
          }
        }, /*#__PURE__*/React.createElement(Window, {
          title: title,
          meta: meta,
          bar: "accent",
          controls: ['min', 'close'],
          shadow: "lg",
          padding: 0
        }, children)));
      }
      function Certificate({
        name,
        setName,
        score
      }) {
        const {
          RefCode,
          Barcode,
          Stamp,
          Input,
          Button
        } = examNS;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 40,
            alignItems: 'flex-start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '999 1 520px',
            minWidth: 0,
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            boxShadow: 'var(--shadow-hard-lg)',
            padding: 14
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            border: '1px solid var(--ink)',
            padding: '30px 40px 28px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 18
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }
        }, /*#__PURE__*/React.createElement(RefCode, {
          code: 'LSD-2026-CERT-' + String(score).padStart(2, '0') + '0417'
        }), /*#__PURE__*/React.createElement(RefCode, {
          prefix: "",
          code: "Issued as a public service by Gateway"
        })), /*#__PURE__*/React.createElement(Barcode, {
          value: 'CERT' + name,
          width: 140,
          height: 36,
          style: {
            maxWidth: '40%'
          },
          showValue: false
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginTop: 10
          }
        }, "This certifies that"), /*#__PURE__*/React.createElement("div", {
          style: {
            borderBottom: '2px solid var(--ink)',
            paddingBottom: 6,
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: 56,
            lineHeight: 1,
            minHeight: 56
          }
        }, name || '\u00a0'), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 15,
            lineHeight: 1.55,
            maxWidth: 520
          }
        }, "has completed all 32 lessons and passed the Final Exam with a score of ", /*#__PURE__*/React.createElement("b", null, score, "/32"), ", and is hereby declared"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: 64,
            lineHeight: 0.9,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em'
          }
        }, "Fluent in Durban"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid var(--ink)',
            marginTop: 8
          }
        }, [['Course', 'LSD-01 – LSD-32'], ['Grade', score >= 30 ? 'Native-ish' : 'Fluent'], ['Valid', 'Up and down the coast']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
          key: k,
          style: {
            padding: '8px 10px 0 0',
            fontFamily: 'var(--font-mono)',
            fontSize: 12
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 10,
            color: 'var(--ink-3)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }
        }, k), v))), /*#__PURE__*/React.createElement(Stamp, {
          top: "A public service by Gateway",
          size: 150,
          style: {
            position: 'absolute',
            right: 34,
            bottom: 70
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 4px 0',
            fontFamily: 'var(--font-mono)',
            fontSize: 12
          }
        }, /*#__PURE__*/React.createElement("span", null, "Show this certificate at Gateway, Durban to claim your graduation reward."), /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--ink-3)'
          }
        }, "1 / 1"))), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 260px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Input, {
          label: "Name of graduate",
          value: name,
          onChange: e => setName(e.target.value),
          hint: "Printed exactly as typed. Choose wisely. Your gran will see this."
        }), /*#__PURE__*/React.createElement(Button, {
          variant: "accent",
          size: "lg",
          block: true,
          brackets: true
        }, "Print certificate"), /*#__PURE__*/React.createElement(Button, {
          block: true
        }, "Download PDF (for the fridge)"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            lineHeight: 1.5,
            color: 'var(--ink-2)'
          }
        }, "Redeemable once per graduate at Gateway, Durban. Baggies optional at collection.")));
      }
      function Exam({
        go,
        initial
      }) {
        const {
          AnswerOption,
          Button,
          ProgressBar,
          Dialog
        } = examNS;
        const Q = window.LSD_DATA.exam;
        const N = Q.length,
          PASS = 24;
        const [i, setI] = React.useState(0);
        const [answers, setAnswers] = React.useState({});
        const [phase, setPhase] = React.useState(initial || 'q');
        const [name, setName] = React.useState(() => localStorage.getItem('lsd-name') || 'Thandi Mkhize');
        const score = Object.entries(answers).filter(([k, v]) => Q[k].c === v).length;
        const q = Q[i];
        const sel = answers[i];
        const answered = Object.keys(answers).length;
        const complete = answered === N;
        const shown = complete ? score : phase === 'fail' ? 13 : 29;
        const missed = complete ? Q.filter((x, k) => answers[k] !== x.c).map(x => window.LSD_DATA.words[+x.w - 1][1]) : ['Kiff', 'Robot', 'Pozi'];
        const next = () => {
          if (i < N - 1) setI(i + 1);else if (complete) setPhase(score >= PASS ? 'pass' : 'fail');
        };
        const reset = () => {
          setAnswers({});
          setI(0);
          setPhase('q');
        };
        const demo = /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'var(--font-mono)',
            fontSize: 11
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--ink-3)',
            letterSpacing: '0.08em'
          }
        }, "DEMO STATE"), [['q', 'Question'], ['pass', 'Pass'], ['fail', 'Fail']].map(([k, l]) => /*#__PURE__*/React.createElement(Button, {
          key: k,
          size: "sm",
          variant: phase === k ? 'primary' : 'secondary',
          onClick: () => setPhase(k)
        }, l)));
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
          index: "07",
          kicker: "Assessment \xB7 pencils down, baggies on",
          title: phase === 'pass' ? 'Certificate of Fluency' : 'The Final Exam',
          right: demo
        }), phase === 'pass' ? /*#__PURE__*/React.createElement(Certificate, {
          name: name,
          setName: setName,
          score: shown
        }) : /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            maxWidth: 900
          }
        }, /*#__PURE__*/React.createElement(ExamStack, {
          meta: 'Question ' + String(i + 1).padStart(2, '0') + '/' + N
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '28px 32px 0',
            display: 'flex',
            flexDirection: 'column',
            gap: 22
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-pixel)',
            fontSize: 30
          }
        }, "QUESTION ", String(i + 1).padStart(2, '0'), "/", N), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--ink-3)'
          }
        }, "REF: LSD-", q.w, " \xB7 LESSON ", q.w, "/32")), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 700,
            fontSize: 36,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            textWrap: 'balance'
          }
        }, q.q), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }
        }, q.a.map((a, k) => /*#__PURE__*/React.createElement(AnswerOption, {
          key: k,
          letter: 'abc'[k],
          state: sel === k ? 'selected' : 'idle',
          onClick: () => {
            setAnswers({
              ...answers,
              [i]: k
            });
          }
        }, a))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.08em',
            color: 'var(--ink-3)'
          }
        }, "QUESTION MAP \xB7 JUMP AROUND, WE WON'T TELL"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(16, minmax(0,1fr))',
            gap: 4
          }
        }, Q.map((x, k) => /*#__PURE__*/React.createElement("button", {
          key: k,
          type: "button",
          onClick: () => setI(k),
          title: 'Question ' + (k + 1),
          style: {
            height: 26,
            padding: 0,
            border: '1.5px solid var(--ink)',
            borderRadius: 0,
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            fontWeight: 700,
            background: k === i ? 'var(--yellow)' : answers[k] !== undefined ? 'var(--ink)' : 'var(--paper-2)',
            color: k !== i && answers[k] !== undefined ? 'var(--paper-2)' : 'var(--ink)'
          }
        }, String(k + 1).padStart(2, '0')))))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 24,
            padding: '22px 32px 26px',
            marginTop: 24,
            borderTop: '1px dashed var(--ink-3)'
          }
        }, /*#__PURE__*/React.createElement(ProgressBar, {
          label: "Answered",
          value: answered,
          max: N,
          segments: 16,
          style: {
            width: 300
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Button, {
          disabled: i === 0,
          onClick: () => setI(i - 1)
        }, "Wait, go back"), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          disabled: sel === undefined || i === N - 1 && !complete,
          onClick: next
        }, i === N - 1 ? complete ? 'Hand it in' : N - answered + ' to go, bru' : 'Next, bru')))), phase === 'fail' && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            background: 'rgba(242,241,236,.55)'
          }
        }, /*#__PURE__*/React.createElement(Dialog, {
          title: "exam_result.exe",
          kind: "error",
          heading: 'Eish. ' + shown + '/32.',
          width: 460,
          onClose: () => setPhase('q'),
          actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            onClick: () => go('dict')
          }, "Study the Dictionary"), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            onClick: reset
          }, "Try again"))
        }, "Rewrite immediately \u2014 the ocean isn't going anywhere.", /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'block',
            marginTop: 8,
            fontSize: 12,
            color: 'var(--ink-2)'
          }
        }, "Pass mark: ", PASS, "/32. Gateway suggests revising: ", missed.slice(0, 6).join(', '), missed.length > 6 ? ' and ' + (missed.length - 6) + ' more' : '', ".")))));
      }
      Object.assign(window, {
        Exam
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "site/js/exam.jsx",
      error: String(e && e.message || e)
    });
  }

  // site/js/forms.jsx
  try {
    (() => {
      const formNS = window.LearnToSpeakDurbanDesignSystem_ec3271;

      // Kit-level form fields (multiline + error states, checkbox). Same visual language as DS Input.
      function Field({
        label,
        value,
        onChange,
        placeholder,
        hint,
        error,
        multiline,
        rows = 3,
        type = 'text',
        autoComplete
      }) {
        const [focus, setFocus] = React.useState(false);
        const Tag = multiline ? 'textarea' : 'input';
        return /*#__PURE__*/React.createElement("label", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            boxShadow: focus ? 'var(--shadow-hard-sm)' : 'none',
            transition: 'box-shadow var(--dur-snap) linear'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: 12,
            padding: '6px 10px',
            borderBottom: '1px solid var(--ink)',
            background: error ? 'var(--ink)' : focus ? 'var(--yellow)' : 'var(--paper-3)',
            color: error ? 'var(--paper-2)' : 'var(--ink)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }
        }, /*#__PURE__*/React.createElement("span", null, label), error && /*#__PURE__*/React.createElement("span", null, "\u2715 ", error)), /*#__PURE__*/React.createElement(Tag, {
          type: multiline ? undefined : type,
          rows: multiline ? rows : undefined,
          value: value,
          placeholder: placeholder,
          autoComplete: autoComplete,
          onChange: e => onChange(e.target.value),
          onFocus: () => setFocus(true),
          onBlur: () => setFocus(false),
          style: {
            border: 'none',
            outline: 'none',
            background: 'transparent',
            padding: 12,
            fontFamily: 'var(--font-mono)',
            fontSize: 16,
            lineHeight: 1.5,
            color: 'var(--ink)',
            minWidth: 0,
            resize: 'vertical'
          }
        }), hint && /*#__PURE__*/React.createElement("span", {
          style: {
            padding: '0 12px 8px',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--ink-3)'
          }
        }, hint));
      }
      function Tick({
        checked,
        onChange,
        children,
        error
      }) {
        return /*#__PURE__*/React.createElement("label", {
          style: {
            display: 'flex',
            gap: 12,
            alignItems: 'flex-start',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            lineHeight: 1.5
          }
        }, /*#__PURE__*/React.createElement("input", {
          type: "checkbox",
          checked: checked,
          onChange: e => onChange(e.target.checked),
          style: {
            position: 'absolute',
            opacity: 0,
            width: 1,
            height: 1
          }
        }), /*#__PURE__*/React.createElement("span", {
          "aria-hidden": "true",
          style: {
            flex: 'none',
            width: 22,
            height: 22,
            marginTop: 1,
            display: 'grid',
            placeItems: 'center',
            border: '2px solid var(--ink)',
            background: checked ? 'var(--yellow)' : 'var(--paper-2)',
            outline: error ? '2px solid var(--ink)' : 'none',
            outlineOffset: 2,
            fontWeight: 700,
            fontSize: 14,
            lineHeight: 1
          }
        }, checked ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
          style: {
            textWrap: 'pretty'
          }
        }, children, error && /*#__PURE__*/React.createElement("b", {
          style: {
            display: 'block',
            fontSize: 11,
            marginTop: 2
          }
        }, "\u2715 ", error)));
      }
      const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
      Object.assign(window, {
        Field,
        Tick,
        isEmail
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "site/js/forms.jsx",
      error: String(e && e.message || e)
    });
  }

  // site/js/games.jsx
  try {
    (() => {
      const gameNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      const GAME_META = {
        'game-01': {
          title: 'Say Gqom',
          how: 'Press the button. Click your tongue like you mean it. The click-o-meter judges you from VAALIE to FLUENT.'
        },
        'game-02': {
          title: 'Spot the Vaalie',
          how: 'Find three vaalie details hidden in the beach scene. Click to report. False reports are noted.'
        },
        'game-03': {
          title: 'Ja / No Laka',
          how: 'A statement appears. Slam JA (J key) or NO LAKA (N key). 45 seconds. Score counted in soft-serves.'
        },
        'game-04': {
          title: 'Durdle',
          how: 'Guess the five-letter Durban word in six tries. Orange = right spot. Black = wrong spot. Grey = not in the word.'
        },
        'game-05': {
          title: 'Pack for Durban',
          how: 'Drag items into the suitcase, or click them. Pack only what you actually need. The system is watching.'
        },
        'game-06': {
          title: 'The 2pm Quiz',
          how: 'Five questions. Only after 2pm. Before that you should be at the beach.'
        }
      };
      function GameShell({
        id,
        score,
        onBack,
        children
      }) {
        const {
          Button,
          Icon,
          StatusStrip,
          RefCode
        } = gameNS;
        const meta = GAME_META[id];
        React.useEffect(() => {
          const prev = document.body.style.overflow;
          document.body.style.overflow = 'hidden';
          const k = e => {
            if (e.key === 'Escape') onBack();
          };
          addEventListener('keydown', k);
          return () => {
            document.body.style.overflow = prev;
            removeEventListener('keydown', k);
          };
        }, []);
        return /*#__PURE__*/React.createElement("div", {
          role: "dialog",
          "aria-label": meta.title,
          style: {
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            overflowY: 'auto',
            background: 'var(--bg-graph)',
            display: 'flex',
            flexDirection: 'column'
          }
        }, /*#__PURE__*/React.createElement("header", {
          style: {
            position: 'sticky',
            top: 0,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '12px clamp(16px, 4vw, 40px)',
            background: 'var(--paper-2)',
            borderBottom: '2px solid var(--ink)'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          size: "sm",
          icon: /*#__PURE__*/React.createElement(Icon, {
            name: "arrow-left",
            size: 16
          }),
          onClick: onBack
        }, "Back to Activities"), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            minWidth: 0,
            display: 'flex',
            alignItems: 'baseline',
            gap: 12,
            justifyContent: 'center'
          }
        }, /*#__PURE__*/React.createElement(RefCode, {
          prefix: "",
          code: id.toUpperCase()
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontSize: 22,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        }, meta.title)), score != null && /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            fontWeight: 700,
            border: '2px solid var(--ink)',
            padding: '5px 10px',
            background: 'var(--yellow)',
            whiteSpace: 'nowrap'
          }
        }, score), /*#__PURE__*/React.createElement("button", {
          type: "button",
          "aria-label": "Close game",
          onClick: onBack,
          style: {
            width: 32,
            height: 32,
            display: 'grid',
            placeItems: 'center',
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: 14,
            borderRadius: 0
          }
        }, "\u2715")), /*#__PURE__*/React.createElement("main", {
          style: {
            flex: 1,
            width: '100%',
            maxWidth: 1100,
            margin: '0 auto',
            padding: 'clamp(20px, 4vw, 48px) clamp(16px, 4vw, 40px)'
          }
        }, children), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '0 clamp(16px, 4vw, 40px) 28px',
            maxWidth: 1100,
            width: '100%',
            margin: '0 auto'
          }
        }, /*#__PURE__*/React.createElement(StatusStrip, {
          label: "How to play",
          live: false,
          items: [meta.how]
        })));
      }
      const bigHead = {
        fontFamily: 'var(--font-grotesk)',
        fontWeight: 800,
        fontSize: 'clamp(36px, 5vw, 64px)',
        lineHeight: 0.92,
        letterSpacing: '-0.02em',
        textTransform: 'uppercase',
        margin: 0,
        textWrap: 'balance'
      };
      const monoP = {
        fontFamily: 'var(--font-mono)',
        fontSize: 15,
        lineHeight: 1.55,
        margin: 0
      };

      /* GAME-01 */
      function SayGqomGame({
        setScore
      }) {
        const {
          Button
        } = gameNS;
        const stops = ['VAALIE', 'KOOK', 'LAATIE', 'BRU', 'FLUENT'];
        const lines = ['That was a cough. Try again, from the diaphragm.', 'A click was attempted. Gateway heard it, faintly.', 'Getting there. Your gran would nod politely.', 'Solid click. Taxi drivers would respect it.', 'Windows rattled. Gqom approved.'];
        const [phase, setPhase] = React.useState('idle');
        const [lvl, setLvl] = React.useState(0);
        const [live, setLive] = React.useState(0);
        const [note, setNote] = React.useState(null);
        const listen = async () => {
          setPhase('listening');
          setNote(null);
          setLive(0);
          let peak = 0;
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              audio: true
            });
            const ac = new (window.AudioContext || window.webkitAudioContext)();
            const an = ac.createAnalyser();
            an.fftSize = 1024;
            ac.createMediaStreamSource(stream).connect(an);
            const buf = new Uint8Array(an.fftSize);
            const t0 = performance.now();
            await new Promise(res => {
              const tick = () => {
                an.getByteTimeDomainData(buf);
                let m = 0;
                for (let i = 0; i < buf.length; i++) m = Math.max(m, Math.abs(buf[i] - 128) / 128);
                peak = Math.max(peak, m);
                setLive(m);
                if (performance.now() - t0 < 2000) requestAnimationFrame(tick);else res();
              };
              tick();
            });
            stream.getTracks().forEach(t => t.stop());
            ac.close();
            peak = Math.min(1, peak * 1.6);
          } catch (e) {
            setNote('Microphone unavailable. Gateway guessed, generously.');
            await new Promise(r => setTimeout(r, 1200));
            peak = 0.35 + Math.random() * 0.6;
          }
          setLvl(peak);
          setPhase('result');
          const idx = Math.min(4, Math.floor(peak * 5));
          setScore('Best: ' + stops[idx]);
        };
        const idx = Math.min(4, Math.floor(lvl * 5));
        const shown = phase === 'listening' ? live : phase === 'result' ? lvl : 0;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 32,
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: bigHead
        }, phase === 'result' ? 'Rating: ' + stops[idx] : phase === 'listening' ? 'Click now.' : 'Say it with a click.'), /*#__PURE__*/React.createElement("button", {
          type: "button",
          onClick: phase === 'listening' ? undefined : listen,
          style: {
            width: 220,
            height: 220,
            borderRadius: '50%',
            border: '3px solid var(--ink)',
            background: phase === 'listening' ? 'var(--yellow)' : 'var(--paper-2)',
            boxShadow: 'var(--shadow-hard)',
            cursor: phase === 'listening' ? 'default' : 'pointer',
            fontFamily: 'var(--font-pixel)',
            fontSize: 34,
            color: 'var(--ink)'
          }
        }, phase === 'listening' ? 'GQ-!' : phase === 'result' ? 'AGAIN' : 'START'), /*#__PURE__*/React.createElement("div", {
          style: {
            width: 'min(640px, 100%)',
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            height: 34,
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            display: 'flex'
          }
        }, stops.map((s, i) => /*#__PURE__*/React.createElement("span", {
          key: s,
          style: {
            flex: 1,
            borderLeft: i ? '1px solid var(--ink)' : 'none',
            background: i / 5 < shown ? 'var(--ink)' : 'transparent',
            transition: 'background 80ms linear'
          }
        })), /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            top: -10,
            left: `calc(${shown * 100}% - 2px)`,
            width: 4,
            height: 50,
            background: 'var(--yellow)',
            outline: '1px solid var(--ink)'
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 700
          }
        }, stops.map(s => /*#__PURE__*/React.createElement("span", {
          key: s
        }, s)))), /*#__PURE__*/React.createElement("p", {
          style: {
            ...monoP,
            maxWidth: 520
          }
        }, phase === 'result' ? lines[idx] : phase === 'listening' ? 'Listening for two seconds. Do not apologise.' : 'Press start, allow the microphone, and click your tongue once. Loudly. The neighbours will understand.'), note && /*#__PURE__*/React.createElement("p", {
          style: {
            ...monoP,
            fontSize: 12,
            color: 'var(--ink-2)'
          }
        }, note), phase === 'result' && /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          brackets: true,
          onClick: listen
        }, "Try again"));
      }

      /* GAME-02 */
      function SpotVaalieGame({
        setScore,
        onBack
      }) {
        const {
          Halftone,
          Button,
          Dialog,
          Icon
        } = gameNS;
        const targets = [{
          k: 'Flame shirt',
          x: 22,
          y: 42
        }, {
          k: 'Socks with slops',
          x: 63,
          y: 78
        }, {
          k: 'Gazebo with cup holders',
          x: 80,
          y: 26
        }];
        const [found, setFound] = React.useState([]);
        const [misses, setMisses] = React.useState(0);
        const [toast, setToast] = React.useState(null);
        const [hint, setHint] = React.useState(false);
        React.useEffect(() => {
          setScore(found.length + '/3 found');
        }, [found]);
        const click = e => {
          const r = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width * 100,
            y = (e.clientY - r.top) / r.height * 100;
          const hit = targets.find(t => !found.includes(t.k) && Math.hypot(t.x - x, (t.y - y) * 0.6) < 7);
          if (hit) {
            setFound([...found, hit.k]);
            setToast('Reported: ' + hit.k.toLowerCase() + '.');
          } else {
            setMisses(misses + 1);
            setToast(['That is just a regular tourist.', 'That is a lifeguard. Leave him alone.', 'That is a seagull. Innocent.', 'False report. Gateway sighs.'][misses % 4]);
          }
        };
        const reset = () => {
          setFound([]);
          setMisses(0);
          setToast(null);
          setHint(false);
        };
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 28,
            alignItems: 'flex-start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '999 1 560px',
            minWidth: 0,
            position: 'relative',
            border: '2px solid var(--ink)',
            boxShadow: 'var(--shadow-hard)',
            cursor: 'crosshair'
          },
          onClick: click
        }, /*#__PURE__*/React.createElement(Halftone, {
          height: 540,
          dot: 6,
          placeholder: "beach",
          caption: "FIG. 2 \u2014 North Beach (placeholder scene)"
        }), targets.map(t => (found.includes(t.k) || hint) && /*#__PURE__*/React.createElement("span", {
          key: t.k,
          style: {
            position: 'absolute',
            left: t.x + '%',
            top: t.y + '%',
            transform: 'translate(-50%,-50%)',
            width: 70,
            height: 70,
            borderRadius: '50%',
            border: found.includes(t.k) ? '3px solid var(--ink)' : '2px dashed var(--ink)',
            background: found.includes(t.k) ? 'rgba(255,90,46,.45)' : 'transparent',
            pointerEvents: 'none'
          }
        })), toast && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            left: 12,
            top: 12,
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            fontWeight: 700,
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            padding: '6px 10px',
            pointerEvents: 'none'
          }
        }, toast)), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 260px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            ...bigHead,
            fontSize: 40
          }
        }, "Find the vaalie."), /*#__PURE__*/React.createElement("div", {
          style: {
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)'
          }
        }, targets.map((t, i) => /*#__PURE__*/React.createElement("div", {
          key: t.k,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 12px',
            borderTop: i ? '1px dashed var(--ink-3)' : 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            textDecoration: found.includes(t.k) ? 'line-through' : 'none'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 20,
            height: 20,
            border: '2px solid var(--ink)',
            display: 'grid',
            placeItems: 'center',
            background: found.includes(t.k) ? 'var(--yellow)' : 'transparent',
            fontSize: 12,
            fontWeight: 700
          }
        }, found.includes(t.k) ? '✓' : ''), t.k))), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--ink-2)'
          }
        }, "False reports: ", misses), misses >= 3 && !hint && found.length < 3 && /*#__PURE__*/React.createElement(Button, {
          size: "sm",
          onClick: () => setHint(true)
        }, "Ask a lifeguard (hint)")), found.length === 3 && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'fixed',
            inset: 0,
            zIndex: 5,
            display: 'grid',
            placeItems: 'center',
            background: 'rgba(242,241,236,.6)',
            padding: 16
          }
        }, /*#__PURE__*/React.createElement(Dialog, {
          title: "spot_the_vaalie.exe",
          kind: "success",
          heading: "Vaalie confirmed.",
          onClose: reset,
          actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            onClick: onBack
          }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            onClick: reset
          }, "Play again"))
        }, "All three details reported with ", misses, " false alarm", misses === 1 ? '' : 's', ". The coast thanks you. Be gentle; they are on holiday.")));
      }

      /* GAME-03 */
      const JA_STATEMENTS = [['A robot is a traffic light.', true], ['Baggies are formal attire on the coast.', true], ['A bunny is a small rabbit, served whole.', false], ['“Chips!” means the food has arrived.', false], ['Kiff means good.', true], ['Larney means cheap.', false], ['Shot means thanks.', true], ['Smaak means you like it a lot.', true], ['A laatie is an elderly gentleman.', false], ['Your pozi is your home.', true], ['Forks are required for bunny chow.', false], ['Vy means to go.', true], ['Gqom is dance music.', true], ['Ducking out means hiding from ducks.', false], ['A prawn can be a person.', true], ['A kook has mastered surfing.', false], ['Yano means “you know”.', true], ['Logging means cutting down trees.', false], ['Mfethu is warmer than bru.', true], ['A vaalie wears socks with slops.', true], ['Tops means the worst.', false], ['Dala means to do.', true]];
      function JaNoLakaGame({
        setScore,
        onBack
      }) {
        const {
          Button
        } = gameNS;
        const [phase, setPhase] = React.useState('ready');
        const [deck, setDeck] = React.useState([]);
        const [i, setI] = React.useState(0);
        const [pts, setPts] = React.useState(0);
        const [left, setLeft] = React.useState(45);
        const [flash, setFlash] = React.useState(null);
        const start = () => {
          setDeck([...JA_STATEMENTS].sort(() => Math.random() - 0.5));
          setI(0);
          setPts(0);
          setLeft(45);
          setFlash(null);
          setPhase('play');
        };
        React.useEffect(() => {
          if (phase !== 'play') return;
          const t = setInterval(() => setLeft(l => {
            if (l <= 1) {
              clearInterval(t);
              setPhase('done');
              return 0;
            }
            return l - 1;
          }), 1000);
          return () => clearInterval(t);
        }, [phase]);
        React.useEffect(() => {
          setScore(pts + ' soft-serve' + (pts === 1 ? '' : 's'));
        }, [pts]);
        const answer = v => {
          if (phase !== 'play') return;
          const ok = deck[i][1] === v;
          if (ok) setPts(p => p + 1);
          setFlash(ok ? 'ok' : 'no');
          setTimeout(() => setFlash(null), 260);
          if (i + 1 >= deck.length) setPhase('done');else setI(i + 1);
        };
        React.useEffect(() => {
          const k = e => {
            if (e.key === 'j' || e.key === 'J') answer(true);
            if (e.key === 'n' || e.key === 'N') answer(false);
          };
          addEventListener('keydown', k);
          return () => removeEventListener('keydown', k);
        });
        const verdict = pts >= 18 ? 'Fluent. Possibly born on the beachfront.' : pts >= 12 ? 'Bru-level. Respectable.' : pts >= 6 ? 'Laatie-level. Keep practising.' : 'Vaalie-level. The Dictionary is right there.';
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 28,
            textAlign: 'center'
          }
        }, phase === 'ready' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
          style: bigHead
        }, "Ja or no laka?"), /*#__PURE__*/React.createElement("p", {
          style: {
            ...monoP,
            maxWidth: 520
          }
        }, "45 seconds. One point per correct answer, paid in soft-serves. Use the buttons or your J and N keys."), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "lg",
          brackets: true,
          onClick: start
        }, "Start the clock")), phase === 'play' && deck[i] && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 24,
            fontFamily: 'var(--font-pixel)',
            fontSize: 28
          }
        }, /*#__PURE__*/React.createElement("span", null, String(left).padStart(2, '0'), "s"), /*#__PURE__*/React.createElement("span", null, String(i + 1).padStart(2, '0'), "/", deck.length)), /*#__PURE__*/React.createElement("div", {
          style: {
            width: 'min(760px, 100%)',
            minHeight: 220,
            display: 'grid',
            placeItems: 'center',
            padding: '28px 24px',
            border: '3px solid var(--ink)',
            boxShadow: 'var(--shadow-hard-lg)',
            background: flash === 'ok' ? 'var(--yellow)' : flash === 'no' ? 'var(--ink)' : 'var(--paper-2)',
            color: flash === 'no' ? 'var(--paper-2)' : 'var(--ink)',
            transition: 'background 80ms linear'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.6vw, 44px)',
            lineHeight: 1.1,
            textWrap: 'balance'
          }
        }, deck[i][0])), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
            justifyContent: 'center'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "lg",
          onClick: () => answer(true),
          style: {
            minWidth: 200
          }
        }, "JA (J)"), /*#__PURE__*/React.createElement(Button, {
          size: "lg",
          onClick: () => answer(false),
          style: {
            minWidth: 200
          }
        }, "NO LAKA (N)"))), phase === 'done' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
          style: bigHead
        }, pts, " soft-serve", pts === 1 ? '' : 's', "."), /*#__PURE__*/React.createElement("p", {
          style: {
            ...monoP,
            maxWidth: 520
          }
        }, verdict), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement(Button, {
          onClick: onBack
        }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          brackets: true,
          onClick: start
        }, "Play again"))));
      }

      /* GAME-04 */
      function DurdleGame({
        setScore
      }) {
        const {
          Button
        } = gameNS;
        const ANSWERS = ['CHOON', 'BUNNY', 'SMAAK', 'CHIPS'];
        const answer = ANSWERS[Math.floor(Date.now() / 864e5) % ANSWERS.length];
        const [rows, setRows] = React.useState([]);
        const [cur, setCur] = React.useState('');
        const [msg, setMsg] = React.useState(null);
        const done = rows.includes(answer) || rows.length >= 6;
        const grade = g => {
          const res = Array(5).fill('x');
          const pool = answer.split('');
          g.split('').forEach((c, i) => {
            if (c === answer[i]) {
              res[i] = 'g';
              pool[i] = null;
            }
          });
          g.split('').forEach((c, i) => {
            if (res[i] !== 'g') {
              const j = pool.indexOf(c);
              if (j > -1) {
                res[i] = 'y';
                pool[j] = null;
              }
            }
          });
          return res;
        };
        const keyState = {};
        rows.forEach(r => {
          const g = grade(r);
          r.split('').forEach((c, i) => {
            const s = g[i];
            if (s === 'g' || s === 'y' && keyState[c] !== 'g' || !keyState[c]) keyState[c] = s;
          });
        });
        const press = k => {
          if (done) return;
          if (k === 'ENTER') {
            if (cur.length < 5) {
              setMsg('Five letters, bru.');
              return;
            }
            const n = [...rows, cur];
            setRows(n);
            setCur('');
            if (cur === answer) {
              setMsg(['Lekker first try. Suspicious.', 'Shap. Two tries.', 'Three tries. Solid.', 'Four. Fine.', 'Five. Close one.', 'Six. Just.'][n.length - 1]);
              setScore('Solved in ' + n.length);
            } else if (n.length >= 6) {
              setMsg('Eish. It was ' + answer + '. The Dictionary has it.');
              setScore('Unsolved');
            } else setMsg(null);
            return;
          }
          if (k === '⌫') {
            setCur(cur.slice(0, -1));
            return;
          }
          if (/^[A-Z]$/.test(k) && cur.length < 5) setCur(cur + k);
        };
        React.useEffect(() => {
          const h = e => {
            const k = e.key === 'Enter' ? 'ENTER' : e.key === 'Backspace' ? '⌫' : e.key.toUpperCase();
            press(k);
          };
          addEventListener('keydown', h);
          return () => removeEventListener('keydown', h);
        });
        React.useEffect(() => {
          setScore(Math.min(rows.length + 1, 6) + '/6');
        }, []);
        const cell = s => ({
          g: {
            background: 'var(--yellow)',
            color: 'var(--ink)'
          },
          y: {
            background: 'var(--ink)',
            color: 'var(--paper-2)'
          },
          x: {
            background: 'var(--paper-4)',
            color: 'var(--ink)'
          }
        })[s] || {
          background: 'var(--paper-2)',
          color: 'var(--ink)'
        };
        const grid = Array.from({
          length: 6
        }, (_, r) => rows[r] ? {
          t: rows[r],
          g: grade(rows[r])
        } : r === rows.length ? {
          t: cur.padEnd(5),
          g: []
        } : {
          t: '     ',
          g: []
        });
        const kb = ['QWERTYUIOP', 'ASDFGHJKL', 'ENTER ZXCVBNM ⌫'];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 22
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.08em'
          }
        }, "DURDLE NO. ", Math.floor(Date.now() / 864e5) % 1000, " \xB7 TODAY\u2019S WORD IS IN THE DICTIONARY"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gap: 6
          }
        }, grid.map((row, r) => /*#__PURE__*/React.createElement("div", {
          key: r,
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 58px)',
            gap: 6
          }
        }, row.t.split('').map((c, i) => /*#__PURE__*/React.createElement("span", {
          key: i,
          style: {
            height: 58,
            display: 'grid',
            placeItems: 'center',
            border: '2px solid var(--ink)',
            fontFamily: 'var(--font-pixel)',
            fontSize: 30,
            ...cell(row.g[i])
          }
        }, c.trim()))))), /*#__PURE__*/React.createElement("div", {
          style: {
            minHeight: 24,
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            fontWeight: 700
          }
        }, msg), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            alignItems: 'center',
            width: '100%'
          }
        }, kb.map((row, ri) => /*#__PURE__*/React.createElement("div", {
          key: ri,
          style: {
            display: 'flex',
            gap: 5,
            justifyContent: 'center',
            width: '100%'
          }
        }, (ri === 2 ? row.split(' ').flatMap((p, j) => j === 1 ? p.split('') : [p]) : row.split('')).map(k => /*#__PURE__*/React.createElement("button", {
          key: k,
          type: "button",
          onClick: () => press(k),
          style: {
            minWidth: k.length > 1 ? 72 : 38,
            flex: k.length > 1 ? '0 0 auto' : '0 1 44px',
            height: 50,
            border: '2px solid var(--ink)',
            borderRadius: 0,
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: k.length > 1 ? 11 : 15,
            fontWeight: 700,
            ...cell(keyState[k])
          }
        }, k))))), done && /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          brackets: true,
          onClick: () => {
            setRows([]);
            setCur('');
            setMsg(null);
          }
        }, "Practise again"));
      }

      /* GAME-05 */
      const PACK_ITEMS = [{
        k: 'Baggies',
        ok: true
      }, {
        k: 'Sunscreen',
        ok: true
      }, {
        k: 'Slops',
        ok: true
      }, {
        k: 'Towel',
        ok: true
      }, {
        k: 'Wetsuit',
        ok: false,
        h: '⚠ Error: wetsuit detected.',
        b: 'Baggies required.',
        a: ['OK', 'OK, bru']
      }, {
        k: 'Fork',
        ok: false,
        h: 'ABSOLUTELY NOT',
        b: 'Forks are not permitted within 50km of a bunny.',
        a: ['Remove fork']
      }, {
        k: 'Socks',
        ok: false,
        h: 'Vaalie behaviour detected.',
        b: 'Socks with slops is a serious offence on the coast.',
        a: ['Sorry', 'It won’t happen again']
      }, {
        k: 'Gazebo with cup holders',
        ok: false,
        h: 'Error: gazebo too larney.',
        b: 'The beach is free. So is the shade under someone else’s umbrella.',
        a: ['OK, fine']
      }];
      function PackGame({
        setScore,
        onBack
      }) {
        const {
          Button,
          Dialog,
          Icon
        } = gameNS;
        const [packed, setPacked] = React.useState([]);
        const [err, setErr] = React.useState(null);
        const [over, setOver] = React.useState(false);
        const need = PACK_ITEMS.filter(i => i.ok).length;
        React.useEffect(() => {
          setScore(packed.length + '/' + need + ' packed');
        }, [packed]);
        const pack = k => {
          const it = PACK_ITEMS.find(i => i.k === k);
          if (!it) return;
          if (!it.ok) return setErr(it);
          if (!packed.includes(k)) setPacked([...packed, k]);
        };
        const won = packed.length === need;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            alignItems: 'flex-start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 360px',
            display: 'flex',
            flexDirection: 'column',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            ...bigHead,
            fontSize: 44
          }
        }, "Pack for Durban."), /*#__PURE__*/React.createElement("p", {
          style: monoP
        }, "Drag to the suitcase or click to pack. Some items will be refused."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: 10
          }
        }, PACK_ITEMS.map(it => {
          const p = packed.includes(it.k);
          return /*#__PURE__*/React.createElement("button", {
            key: it.k,
            type: "button",
            draggable: !p,
            onDragStart: e => e.dataTransfer.setData('text/plain', it.k),
            onClick: () => pack(it.k),
            disabled: p,
            style: {
              minHeight: 64,
              padding: '10px 12px',
              border: '2px solid var(--ink)',
              borderRadius: 0,
              background: p ? 'var(--paper-3)' : 'var(--paper-2)',
              cursor: p ? 'default' : 'grab',
              fontFamily: 'var(--font-mono)',
              fontSize: 14,
              fontWeight: 700,
              textAlign: 'left',
              textDecoration: p ? 'line-through' : 'none',
              color: 'var(--ink)',
              boxShadow: p ? 'none' : 'var(--shadow-hard-sm)'
            }
          }, it.k);
        }))), /*#__PURE__*/React.createElement("div", {
          onDragOver: e => {
            e.preventDefault();
            setOver(true);
          },
          onDragLeave: () => setOver(false),
          onDrop: e => {
            e.preventDefault();
            setOver(false);
            pack(e.dataTransfer.getData('text/plain'));
          },
          style: {
            flex: '1 1 320px',
            position: 'relative',
            marginTop: 30,
            minHeight: 340,
            border: '3px solid var(--ink)',
            background: over ? 'var(--yellow)' : 'var(--paper-2)',
            boxShadow: 'var(--shadow-hard-lg)',
            padding: '40px 22px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            top: -26,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 120,
            height: 24,
            border: '3px solid var(--ink)',
            borderBottom: 'none'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.1em'
          }
        }, "SUITCASE \xB7 ", packed.length, "/", need), packed.length === 0 && /*#__PURE__*/React.createElement("div", {
          style: {
            ...monoP,
            color: 'var(--ink-3)',
            marginTop: 40,
            textAlign: 'center'
          }
        }, "Drop items here."), packed.map(k => /*#__PURE__*/React.createElement("div", {
          key: k,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: 'var(--font-mono)',
            fontSize: 16,
            fontWeight: 700
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "check",
          size: 20
        }), k))), (err || won) && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'fixed',
            inset: 0,
            zIndex: 5,
            display: 'grid',
            placeItems: 'center',
            background: 'rgba(242,241,236,.6)',
            padding: 16
          }
        }, err ? /*#__PURE__*/React.createElement(Dialog, {
          title: "pack_for_durban.exe",
          kind: "error",
          heading: err.h,
          onClose: () => setErr(null),
          actions: err.a.map((a, i) => /*#__PURE__*/React.createElement(Button, {
            key: a,
            size: "sm",
            variant: i === err.a.length - 1 ? 'primary' : 'secondary',
            onClick: () => setErr(null)
          }, a))
        }, err.b) : /*#__PURE__*/React.createElement(Dialog, {
          title: "pack_for_durban.exe",
          kind: "success",
          heading: "Packed. Vy.",
          onClose: () => setPacked([]),
          actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            onClick: onBack
          }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            onClick: () => setPacked([])
          }, "Pack again"))
        }, "Baggies, sunscreen, slops, towel. Everything you actually need.")));
      }

      /* GAME-06 */
      function TwoPmGame({
        setScore,
        onBack
      }) {
        const {
          Button,
          Icon,
          AnswerOption
        } = gameNS;
        const [now, setNow] = React.useState(new Date());
        const [force, setForce] = React.useState(false);
        const [qs] = React.useState(() => [...window.LSD_DATA.exam].sort(() => Math.random() - 0.5).slice(0, 5));
        const [i, setI] = React.useState(0);
        const [pick, setPick] = React.useState(null);
        const [pts, setPts] = React.useState(0);
        React.useEffect(() => {
          const t = setInterval(() => setNow(new Date()), 1000);
          return () => clearInterval(t);
        }, []);
        const open = force || now.getHours() >= 14;
        React.useEffect(() => {
          setScore(open ? pts + '/5' : 'Locked');
        }, [open, pts]);
        if (!open) {
          const t = new Date(now);
          t.setHours(14, 0, 0, 0);
          const s = Math.max(0, Math.floor((t - now) / 1000));
          const hms = [Math.floor(s / 3600), Math.floor(s / 60) % 60, s % 60].map(n => String(n).padStart(2, '0')).join(':');
          return /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 24,
              textAlign: 'center'
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              width: 120,
              height: 120,
              display: 'grid',
              placeItems: 'center',
              border: '3px solid var(--ink)',
              background: 'var(--ink)',
              color: 'var(--yellow)',
              boxShadow: 'var(--shadow-hard)'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "lock",
            size: 72
          })), /*#__PURE__*/React.createElement("h2", {
            style: bigHead
          }, "Come back after the beach."), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-pixel)',
              fontSize: 'clamp(44px, 7vw, 80px)',
              lineHeight: 1
            }
          }, hms), /*#__PURE__*/React.createElement("p", {
            style: {
              ...monoP,
              maxWidth: 480
            }
          }, "The 2pm Quiz opens at 14:00 sharp. Until then Gateway recommends sunscreen, a swim and a quarter mutton."), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }
          }, /*#__PURE__*/React.createElement(Button, {
            onClick: onBack
          }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
            variant: "ghost",
            onClick: () => setForce(true)
          }, "I\u2019m already at the beach (open anyway)")));
        }
        if (i >= qs.length) return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 22,
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: bigHead
        }, pts, "/5."), /*#__PURE__*/React.createElement("p", {
          style: {
            ...monoP,
            maxWidth: 480
          }
        }, pts === 5 ? 'Perfect. Go back to the beach, you’ve earned it.' : pts >= 3 ? 'Decent. The afternoon is young.' : 'The sun got to you. Try again tomorrow at 2.'), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          brackets: true,
          onClick: onBack
        }, "Back to Activities"));
        const q = qs[i];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 760,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 18
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-pixel)',
            fontSize: 26
          }
        }, "QUESTION ", i + 1, "/5"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 700,
            fontSize: 'clamp(26px, 3.4vw, 38px)',
            lineHeight: 1.1,
            textWrap: 'balance'
          }
        }, q.q), q.a.map((a, k) => /*#__PURE__*/React.createElement(AnswerOption, {
          key: k,
          letter: 'abc'[k],
          state: pick === null ? 'idle' : k === q.c ? 'correct' : k === pick ? 'wrong' : 'idle',
          disabled: pick !== null,
          onClick: () => {
            setPick(k);
            if (k === q.c) setPts(pts + 1);
          }
        }, a)), pick !== null && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'flex-end'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          onClick: () => {
            setPick(null);
            setI(i + 1);
          }
        }, i === 4 ? 'See score' : 'Next, bru')));
      }
      function GameScreen({
        id,
        onBack
      }) {
        const [score, setScore] = React.useState(null);
        const C = {
          'game-01': SayGqomGame,
          'game-02': SpotVaalieGame,
          'game-03': JaNoLakaGame,
          'game-04': DurdleGame,
          'game-05': PackGame,
          'game-06': TwoPmGame
        }[id];
        if (!C) return null;
        return /*#__PURE__*/React.createElement(GameShell, {
          id: id,
          score: score,
          onBack: onBack
        }, /*#__PURE__*/React.createElement(C, {
          setScore: setScore,
          onBack: onBack
        }));
      }
      Object.assign(window, {
        GameScreen,
        GAME_META
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "site/js/games.jsx",
      error: String(e && e.message || e)
    });
  }

  // site/js/landing.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const landNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      function HeroCard({
        go,
        mobile
      }) {
        const {
          Button,
          Barcode,
          RefCode
        } = landNS;
        return /*#__PURE__*/React.createElement("section", {
          style: {
            position: 'relative',
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            boxShadow: mobile ? 'var(--shadow-hard)' : '10px 10px 0 var(--ink)',
            padding: mobile ? '36px 20px 24px' : '56px 56px 48px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: mobile ? 28 : 48
          }
        }, /*#__PURE__*/React.createElement(RefCode, {
          code: "LSD-2026",
          style: {
            position: 'absolute',
            top: 10,
            left: 12
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: mobile ? 20 : 28,
            minWidth: 0,
            flex: '1 1 560px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: mobile ? 11 : 13,
            letterSpacing: '0.16em',
            textTransform: 'uppercase'
          }
        }, "A public service by Gateway"), /*#__PURE__*/React.createElement("h1", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: mobile ? 62 : 'clamp(56px, 8.6vw, 140px)',
            lineHeight: 0.84,
            letterSpacing: '-0.025em',
            textTransform: 'uppercase'
          }
        }, "Learn to", /*#__PURE__*/React.createElement("br", null), "Speak ", /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-pixel)',
            fontWeight: 400,
            fontStretch: '100%',
            fontSize: '0.86em',
            letterSpacing: '-0.04em',
            background: 'var(--yellow)',
            padding: '0 0.06em'
          }
        }, "Durban")), /*#__PURE__*/React.createElement("div", {
          style: {
            height: 2,
            background: 'var(--ink)'
          }
        }), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            maxWidth: 560,
            fontFamily: 'var(--font-mono)',
            fontSize: mobile ? 14 : 16,
            lineHeight: 1.55,
            textWrap: 'pretty'
          }
        }, "32 lessons of real Durban slang. A final exam you can write right here. A certificate of fluency with your name on it \u2014 redeemable at Gateway, Durban."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "lg",
          brackets: true,
          onClick: () => go('dict')
        }, "Begin Lesson 1"), /*#__PURE__*/React.createElement(Button, {
          size: "lg",
          onClick: () => go('exam')
        }, "Skip to exam (brave)"))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: mobile ? 'column-reverse' : 'column',
            justifyContent: 'space-between',
            gap: 24,
            flex: mobile ? '1 1 100%' : '0 1 340px',
            minWidth: mobile ? 0 : 280,
            borderLeft: mobile ? 'none' : '2px solid var(--ink)',
            paddingLeft: mobile ? 0 : 40
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: mobile ? 'flex-start' : 'flex-end',
            gap: 6
          }
        }, /*#__PURE__*/React.createElement(Barcode, {
          value: "LSD-2026-DBN",
          width: mobile ? 200 : 300,
          height: mobile ? 44 : 72
        }), /*#__PURE__*/React.createElement(RefCode, {
          prefix: "",
          code: "Course No. 4001 \xB7 Coastal dialect \xB7 Humidity: 87%"
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            border: '2px solid var(--ink)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '7px 12px',
            background: 'var(--paper-3)',
            borderBottom: '1px solid var(--ink)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.08em'
          }
        }, /*#__PURE__*/React.createElement("span", null, "ENROLMENT"), /*#__PURE__*/React.createElement("span", null, "OPEN")), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '14px 12px',
            fontFamily: 'var(--font-mono)',
            fontSize: 15,
            fontWeight: 700,
            lineHeight: 1.45
          }
        }, "Course fee: free.", /*#__PURE__*/React.createElement("br", null), "Fluency: guaranteed-ish."))), !mobile && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            right: 10,
            bottom: 10,
            width: 28,
            height: 28,
            borderRight: '2px solid var(--ink)',
            borderBottom: '2px solid var(--ink)'
          }
        }));
      }
      function Landing({
        go,
        mobile
      }) {
        const {
          FolderCard,
          StatusStrip
        } = landNS;
        const sections = [{
          id: 'dict',
          index: '01',
          title: 'The Dictionary',
          description: '32 words, filed by an intern who has since gone surfing. Pull a card. Hear it on the radio.',
          meta: '32 entries'
        }, {
          id: 'act',
          index: '02',
          title: 'Activities',
          description: 'Six games for practical study. Some require a microphone. One requires 2pm.',
          meta: '6 games'
        }, {
          id: 'merch',
          index: '03',
          title: 'Merch',
          description: 'Course materials. Mostly tees. One cooler box, metaphorically.',
          meta: '8 items'
        }, {
          id: 'submit',
          index: '04',
          title: 'Submit a Word',
          description: 'Heard a word at the taxi rank we don’t know? Report it. Gateway will investigate.',
          meta: 'Open to the public'
        }, {
          id: 'study',
          index: '05',
          title: 'Study Pack',
          description: 'Download the course before take-off. Study at 10,000 metres. Practise on seat 14B.',
          meta: 'Works offline'
        }, {
          id: 'card',
          index: '06',
          title: 'Student Card',
          description: 'Upload a selfie. Gateway pixelates it. Your ex sees it on your story.',
          meta: '1080 × 1920'
        }, {
          id: 'exam',
          index: '07',
          title: 'The Final Exam',
          description: '32 questions, one per lesson. Pass and the certificate prints itself. Fail and the ocean waits.',
          meta: '32 questions'
        }];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: mobile ? 36 : 56,
            paddingTop: mobile ? 20 : 48
          }
        }, /*#__PURE__*/React.createElement(HeroCard, {
          go: go,
          mobile: mobile
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: mobile ? '1fr' : 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: mobile ? 22 : 24
          }
        }, sections.map((s, i) => /*#__PURE__*/React.createElement(FolderCard, _extends({
          key: s.id
        }, s, {
          active: !mobile && i === 1 ? undefined : undefined,
          tabOffset: mobile ? 0 : [0, 24, 48, 12, 36, 60, 18][i],
          onClick: () => go(s.id)
        })))), /*#__PURE__*/React.createElement(StatusStrip, {
          items: ['Current ocean temperature: 24°C', 'Lessons: 32', 'Forks required: 0']
        }));
      }
      Object.assign(window, {
        Landing,
        HeroCard
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "site/js/landing.jsx",
      error: String(e && e.message || e)
    });
  }

  // site/js/lsd-components.js
  try {
    (() => {
      /* @ds-bundle: {"format":4,"namespace":"LearnToSpeakDurbanDesignSystem_ec3271","components":[{"name":"FolderCard","sourcePath":"components/cards/FolderCard.jsx"},{"name":"SpecCard","sourcePath":"components/cards/SpecCard.jsx"},{"name":"Barcode","sourcePath":"components/core/Barcode.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"LabelChip","sourcePath":"components/core/LabelChip.jsx"},{"name":"RefCode","sourcePath":"components/core/RefCode.jsx"},{"name":"Stamp","sourcePath":"components/core/Stamp.jsx"},{"name":"StatusStrip","sourcePath":"components/feedback/StatusStrip.jsx"},{"name":"AnswerOption","sourcePath":"components/forms/AnswerOption.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"ProgressBar","sourcePath":"components/forms/ProgressBar.jsx"},{"name":"Halftone","sourcePath":"components/media/Halftone.jsx"},{"name":"Icon","sourcePath":"components/media/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/media/Icon.jsx"},{"name":"ICONS","sourcePath":"components/media/iconData.js"},{"name":"FolderTabs","sourcePath":"components/navigation/FolderTabs.jsx"},{"name":"IndexTab","sourcePath":"components/navigation/IndexTab.jsx"},{"name":"Dialog","sourcePath":"components/windows/Dialog.jsx"},{"name":"Window","sourcePath":"components/windows/Window.jsx"}],"sourceHashes":{"components/cards/FolderCard.jsx":"a608b9211328","components/cards/SpecCard.jsx":"d4f07f171ae7","components/core/Barcode.jsx":"75214f3abe32","components/core/Button.jsx":"47c65fa6b0f7","components/core/LabelChip.jsx":"97f6cbbf0342","components/core/RefCode.jsx":"ecd6751797a4","components/core/Stamp.jsx":"b3551fa26e29","components/feedback/StatusStrip.jsx":"cbcfa352358b","components/forms/AnswerOption.jsx":"beecfa8a8b76","components/forms/Input.jsx":"52ec7ce6e4d8","components/forms/ProgressBar.jsx":"23ec2f632b94","components/media/Halftone.jsx":"62a372af8ef6","components/media/Icon.jsx":"49b90fd1dfd6","components/media/iconData.js":"4feb6f7e810e","components/navigation/FolderTabs.jsx":"baf5ec59b49f","components/navigation/IndexTab.jsx":"ca600bc3ce7e","components/windows/Dialog.jsx":"81b7898d8e70","components/windows/Window.jsx":"c5cb55ac11f9","ui_kits/microsite/Activities.jsx":"55c3b2c8c7c1","ui_kits/microsite/Dictionary.jsx":"131875f53b00","ui_kits/microsite/Exam.jsx":"f72149c11600","ui_kits/microsite/Landing.jsx":"998f40c51e3d","ui_kits/microsite/Merch.jsx":"ec481e54ddc7","ui_kits/microsite/Shell.jsx":"a113bf11f78f","ui_kits/microsite/data.js":"56ae8fe7c278"},"inlinedExternals":[],"unexposedExports":[]} */

      (() => {
        const __ds_ns = window.LearnToSpeakDurbanDesignSystem_ec3271 = window.LearnToSpeakDurbanDesignSystem_ec3271 || {};
        const __ds_scope = {};
        __ds_ns.__errors = __ds_ns.__errors || [];

        // components/core/Barcode.jsx
        try {
          (() => {
            // Deterministic decorative barcode generated from a string. Not scannable.
            function Barcode({
              value = 'LSD-2026',
              height = 56,
              width = 240,
              showValue = false,
              color = 'var(--ink)',
              style
            }) {
              const bars = React.useMemo(() => {
                let h = 2166136261;
                const out = [];
                const seed = value + value.split('').reverse().join('');
                for (let i = 0; i < 46; i++) {
                  h ^= seed.charCodeAt(i % seed.length) + i;
                  h = Math.imul(h, 16777619) >>> 0;
                  out.push({
                    w: 1 + h % 4,
                    gap: 1 + (h >> 3) % 3
                  });
                }
                return out;
              }, [value]);
              const total = bars.reduce((s, b) => s + b.w + b.gap, 0);
              let x = 0;
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'inline-flex',
                  flexDirection: 'column',
                  gap: 4,
                  ...style
                }
              }, /*#__PURE__*/React.createElement("svg", {
                viewBox: `0 0 ${total} 10`,
                width: width,
                height: height,
                preserveAspectRatio: "none",
                style: {
                  display: 'block',
                  shapeRendering: 'crispEdges'
                },
                "aria-hidden": "true"
              }, bars.map((b, i) => {
                const r = /*#__PURE__*/React.createElement("rect", {
                  key: i,
                  x: x,
                  y: "0",
                  width: b.w,
                  height: "10",
                  fill: color
                });
                x += b.w + b.gap;
                return r;
              })), showValue && /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.3em',
                  textAlign: 'center',
                  color: 'var(--ink)'
                }
              }, value));
            }
            Object.assign(__ds_scope, {
              Barcode
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/core/Barcode.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/core/Button.jsx
        try {
          (() => {
            function _extends() {
              return _extends = Object.assign ? Object.assign.bind() : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }, _extends.apply(null, arguments);
            }
            const SIZES = {
              sm: {
                padding: '6px 12px',
                fontSize: 11,
                minHeight: 30
              },
              md: {
                padding: '10px 18px',
                fontSize: 13,
                minHeight: 42
              },
              lg: {
                padding: '14px 26px',
                fontSize: 15,
                minHeight: 54
              }
            };
            const VARIANTS = {
              primary: {
                background: 'var(--ink)',
                color: 'var(--paper-2)'
              },
              secondary: {
                background: 'var(--paper-2)',
                color: 'var(--ink)'
              },
              accent: {
                background: 'var(--yellow)',
                color: 'var(--ink)'
              },
              ghost: {
                background: 'transparent',
                color: 'var(--ink)',
                borderColor: 'transparent'
              }
            };
            function Button({
              children,
              variant = 'secondary',
              size = 'md',
              brackets = false,
              icon,
              disabled = false,
              block = false,
              onClick,
              href,
              type = 'button',
              style
            }) {
              const [hover, setHover] = React.useState(false);
              const [down, setDown] = React.useState(false);
              const lift = !disabled && variant !== 'ghost';
              const base = {
                display: block ? 'flex' : 'inline-flex',
                width: block ? '100%' : undefined,
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                letterSpacing: 'var(--tracking-label)',
                textTransform: 'uppercase',
                lineHeight: 1,
                border: '2px solid var(--ink)',
                borderRadius: 0,
                cursor: disabled ? 'not-allowed' : 'pointer',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'transform var(--dur-snap) linear, box-shadow var(--dur-snap) linear, background var(--dur-snap) linear',
                ...SIZES[size],
                ...VARIANTS[variant],
                boxShadow: lift ? down ? '0 0 0 var(--ink)' : hover ? '4px 4px 0 var(--ink)' : '0 0 0 var(--ink)' : 'none',
                transform: lift ? down ? 'translate(0,0)' : hover ? 'translate(-2px,-2px)' : 'none' : 'none',
                opacity: disabled ? 0.4 : 1,
                ...(variant === 'ghost' && hover && !disabled ? {
                  textDecoration: 'underline',
                  textUnderlineOffset: 4
                } : null),
                ...(variant === 'secondary' && hover && !disabled ? {
                  background: 'var(--yellow)'
                } : null),
                ...style
              };
              const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon, brackets ? /*#__PURE__*/React.createElement("span", null, "[\xA0", children, "\xA0]") : /*#__PURE__*/React.createElement("span", null, children));
              const handlers = {
                onMouseEnter: () => setHover(true),
                onMouseLeave: () => {
                  setHover(false);
                  setDown(false);
                },
                onMouseDown: () => setDown(true),
                onMouseUp: () => setDown(false)
              };
              if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
                href: href,
                style: base,
                onClick: onClick
              }, handlers), content);
              return /*#__PURE__*/React.createElement("button", _extends({
                type: type,
                disabled: disabled,
                style: base,
                onClick: onClick
              }, handlers), content);
            }
            Object.assign(__ds_scope, {
              Button
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/core/Button.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/core/LabelChip.jsx
        try {
          (() => {
            function LabelChip({
              children,
              size = 'md',
              variant = 'outline',
              style
            }) {
              const s = {
                sm: {
                  fontSize: 14,
                  padding: '3px 8px'
                },
                md: {
                  fontSize: 22,
                  padding: '4px 10px'
                },
                lg: {
                  fontSize: 32,
                  padding: '6px 14px'
                }
              }[size];
              const v = {
                outline: {
                  background: 'var(--paper-2)',
                  color: 'var(--ink)'
                },
                inverse: {
                  background: 'var(--ink)',
                  color: 'var(--paper-2)'
                },
                accent: {
                  background: 'var(--yellow)',
                  color: 'var(--ink)'
                }
              }[variant];
              return /*#__PURE__*/React.createElement("span", {
                style: {
                  display: 'inline-block',
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 800,
                  fontStretch: '88%',
                  textTransform: 'uppercase',
                  letterSpacing: '0.01em',
                  lineHeight: 1,
                  border: '2px solid var(--ink)',
                  ...s,
                  ...v,
                  ...style
                }
              }, children);
            }
            Object.assign(__ds_scope, {
              LabelChip
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/core/LabelChip.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/cards/SpecCard.jsx
        try {
          (() => {
            function SpecCard({
              refCode = 'LSD-01',
              meta,
              label,
              chipVariant = 'outline',
              children,
              previewHeight = 240,
              crosshair = true,
              sourceLabel = 'SOURCE',
              sourceTag,
              source,
              footer,
              interactive = false,
              onClick,
              style
            }) {
              const [hover, setHover] = React.useState(false);
              const lifted = interactive && hover;
              return /*#__PURE__*/React.createElement("div", {
                onClick: onClick,
                onMouseEnter: () => setHover(true),
                onMouseLeave: () => setHover(false),
                style: {
                  background: 'var(--paper-2)',
                  border: '2px solid var(--ink)',
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'var(--ink)',
                  cursor: onClick ? 'pointer' : undefined,
                  boxShadow: lifted ? 'var(--shadow-hard)' : '0 0 0 var(--ink)',
                  transform: lifted ? 'translate(-3px,-3px)' : 'none',
                  transition: 'transform var(--dur-snap) linear, box-shadow var(--dur-snap) linear',
                  ...style
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 12,
                  padding: '12px 16px',
                  borderBottom: '2px solid var(--ink)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  letterSpacing: '0.04em'
                }
              }, /*#__PURE__*/React.createElement("span", {
                style: {
                  fontWeight: 700
                }
              }, refCode), meta && /*#__PURE__*/React.createElement("span", {
                style: {
                  color: 'var(--ink-3)',
                  textTransform: 'uppercase',
                  fontSize: 10,
                  letterSpacing: '0.08em'
                }
              }, meta)), /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'relative',
                  height: previewHeight,
                  background: 'var(--bg-dots)',
                  overflow: 'hidden'
                }
              }, crosshair && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  bottom: 0,
                  width: 1,
                  background: 'var(--paper-4)'
                }
              }), /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  right: 0,
                  height: 1,
                  background: 'var(--paper-4)'
                }
              })), /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  inset: 0,
                  display: 'grid',
                  placeItems: 'center'
                }
              }, children), label && /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  left: 16,
                  bottom: 14
                }
              }, /*#__PURE__*/React.createElement(__ds_scope.LabelChip, {
                variant: lifted ? 'accent' : chipVariant
              }, label))), (source || sourceTag) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '7px 12px',
                  borderTop: '2px solid var(--ink)',
                  borderBottom: '1px solid var(--ink)',
                  background: 'var(--paper-3)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase'
                }
              }, /*#__PURE__*/React.createElement("span", null, sourceLabel), /*#__PURE__*/React.createElement("span", null, sourceTag)), /*#__PURE__*/React.createElement("div", {
                style: {
                  padding: '12px 16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13,
                  lineHeight: 1.5,
                  textWrap: 'pretty'
                }
              }, source)), footer && /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  gap: 10,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderTop: '1px dashed var(--ink-3)'
                }
              }, footer));
            }
            Object.assign(__ds_scope, {
              SpecCard
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/cards/SpecCard.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/core/RefCode.jsx
        try {
          (() => {
            function RefCode({
              code = 'LSD-2026',
              prefix = 'REF:',
              size = 'sm',
              style
            }) {
              const fs = size === 'md' ? 12 : 10;
              return /*#__PURE__*/React.createElement("span", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: fs,
                  letterSpacing: '0.04em',
                  color: 'var(--ink-3)',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  ...style
                }
              }, prefix ? prefix + ' ' : '', code);
            }
            Object.assign(__ds_scope, {
              RefCode
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/core/RefCode.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/core/Stamp.jsx
        try {
          (() => {
            function Stamp({
              top = 'A public service by Gateway',
              middle = 'FLUENT',
              bottom = 'Certified · 2026',
              size = 150,
              rotate = -12,
              style
            }) {
              const ring = {
                position: 'absolute',
                borderRadius: '50%',
                border: '2px solid var(--ink)'
              };
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'relative',
                  width: size,
                  height: size,
                  borderRadius: '50%',
                  background: 'var(--yellow)',
                  transform: `rotate(${rotate}deg)`,
                  flex: 'none',
                  ...style
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  ...ring,
                  inset: 4
                }
              }), /*#__PURE__*/React.createElement("div", {
                style: {
                  ...ring,
                  inset: 12,
                  borderWidth: 1
                }
              }), /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: size * 0.03,
                  textAlign: 'center',
                  color: 'var(--ink)',
                  padding: size * 0.16
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: Math.max(8, size * 0.058),
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  lineHeight: 1.15
                }
              }, top), /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-pixel)',
                  fontSize: size * 0.17,
                  lineHeight: 1,
                  borderTop: '2px solid var(--ink)',
                  borderBottom: '2px solid var(--ink)',
                  padding: '3px 2px 2px'
                }
              }, middle), /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: Math.max(8, size * 0.058),
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase'
                }
              }, bottom)));
            }
            Object.assign(__ds_scope, {
              Stamp
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/core/Stamp.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/feedback/StatusStrip.jsx
        try {
          (() => {
            function StatusStrip({
              items = [],
              label = 'STATUS',
              live = true,
              style
            }) {
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  alignItems: 'stretch',
                  border: '2px solid var(--ink)',
                  background: 'var(--paper-2)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  letterSpacing: '0.04em',
                  color: 'var(--ink)',
                  ...style
                }
              }, /*#__PURE__*/React.createElement("span", {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 12px',
                  background: 'var(--ink)',
                  color: 'var(--paper-2)',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  fontSize: 11,
                  flex: 'none'
                }
              }, live && /*#__PURE__*/React.createElement("span", {
                style: {
                  width: 8,
                  height: 8,
                  background: 'var(--yellow)'
                }
              }), label), /*#__PURE__*/React.createElement("span", {
                style: {
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '4px 0',
                  padding: '8px 14px'
                }
              }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
                key: i,
                style: {
                  whiteSpace: 'nowrap'
                }
              }, i > 0 && /*#__PURE__*/React.createElement("span", {
                style: {
                  padding: '0 12px',
                  color: 'var(--ink-3)'
                }
              }, "\xB7"), it))));
            }
            Object.assign(__ds_scope, {
              StatusStrip
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/feedback/StatusStrip.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/forms/AnswerOption.jsx
        try {
          (() => {
            function AnswerOption({
              letter = 'a',
              children,
              state = 'idle',
              onClick,
              disabled,
              style
            }) {
              const [hover, setHover] = React.useState(false);
              const s = {
                idle: {
                  bg: hover ? 'var(--paper-3)' : 'var(--paper-2)',
                  fg: 'var(--ink)',
                  mark: ''
                },
                selected: {
                  bg: 'var(--yellow)',
                  fg: 'var(--ink)',
                  mark: '●'
                },
                correct: {
                  bg: 'var(--yellow)',
                  fg: 'var(--ink)',
                  mark: '✓'
                },
                wrong: {
                  bg: 'var(--ink)',
                  fg: 'var(--paper-2)',
                  mark: '✕'
                }
              }[state];
              return /*#__PURE__*/React.createElement("button", {
                type: "button",
                disabled: disabled,
                onClick: onClick,
                onMouseEnter: () => setHover(true),
                onMouseLeave: () => setHover(false),
                style: {
                  display: 'flex',
                  alignItems: 'stretch',
                  width: '100%',
                  textAlign: 'left',
                  padding: 0,
                  border: '2px solid var(--ink)',
                  borderRadius: 0,
                  background: s.bg,
                  color: s.fg,
                  cursor: disabled ? 'default' : 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 15,
                  lineHeight: 1.4,
                  boxShadow: hover && state === 'idle' && !disabled ? 'var(--shadow-hard-sm)' : 'none',
                  transform: hover && state === 'idle' && !disabled ? 'translate(-2px,-2px)' : 'none',
                  transition: 'transform var(--dur-snap) linear, box-shadow var(--dur-snap) linear',
                  ...style
                }
              }, /*#__PURE__*/React.createElement("span", {
                style: {
                  flex: 'none',
                  width: 48,
                  display: 'grid',
                  placeItems: 'center',
                  borderRight: '2px solid currentColor',
                  fontWeight: 700
                }
              }, "(", letter, ")"), /*#__PURE__*/React.createElement("span", {
                style: {
                  flex: 1,
                  padding: '13px 16px',
                  textWrap: 'pretty'
                }
              }, children), /*#__PURE__*/React.createElement("span", {
                style: {
                  flex: 'none',
                  width: 40,
                  display: 'grid',
                  placeItems: 'center',
                  fontWeight: 700
                }
              }, s.mark));
            }
            Object.assign(__ds_scope, {
              AnswerOption
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/forms/AnswerOption.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/forms/Input.jsx
        try {
          (() => {
            function Input({
              label,
              value,
              defaultValue,
              placeholder,
              onChange,
              hint,
              type = 'text',
              style
            }) {
              const [focus, setFocus] = React.useState(false);
              return /*#__PURE__*/React.createElement("label", {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  border: '2px solid var(--ink)',
                  background: 'var(--paper-2)',
                  boxShadow: focus ? 'var(--shadow-hard-sm)' : 'none',
                  ...style
                }
              }, label && /*#__PURE__*/React.createElement("span", {
                style: {
                  padding: '6px 10px',
                  borderBottom: '1px solid var(--ink)',
                  background: focus ? 'var(--yellow)' : 'var(--paper-3)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }
              }, label), /*#__PURE__*/React.createElement("input", {
                type: type,
                value: value,
                defaultValue: defaultValue,
                placeholder: placeholder,
                onChange: onChange,
                onFocus: () => setFocus(true),
                onBlur: () => setFocus(false),
                style: {
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  padding: '12px 12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 16,
                  color: 'var(--ink)',
                  minWidth: 0
                }
              }), hint && /*#__PURE__*/React.createElement("span", {
                style: {
                  padding: '0 12px 8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--ink-3)'
                }
              }, hint));
            }
            Object.assign(__ds_scope, {
              Input
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/forms/Input.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/forms/ProgressBar.jsx
        try {
          (() => {
            function ProgressBar({
              value = 0,
              max = 10,
              segments,
              label,
              showCount = true,
              style
            }) {
              const n = segments || max;
              const filled = Math.round(value / max * n);
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  ...style
                }
              }, (label || showCount) && /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }
              }, /*#__PURE__*/React.createElement("span", null, label), showCount && /*#__PURE__*/React.createElement("span", null, String(value).padStart(2, '0'), "/", String(max).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  gap: 3,
                  padding: 3,
                  border: '2px solid var(--ink)',
                  background: 'var(--paper-2)'
                }
              }, Array.from({
                length: n
              }).map((_, i) => /*#__PURE__*/React.createElement("span", {
                key: i,
                style: {
                  flex: 1,
                  height: 12,
                  background: i < filled ? 'var(--ink)' : 'transparent',
                  outline: i < filled ? 'none' : '1px dotted var(--ink-3)',
                  outlineOffset: -1
                }
              }))));
            }
            Object.assign(__ds_scope, {
              ProgressBar
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/forms/ProgressBar.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/media/Halftone.jsx
        try {
          (() => {
            // Halftone treatment: greyscale image (or tonal placeholder) under a dot screen, crushed by contrast.
            function Halftone({
              src,
              alt = '',
              height = 220,
              dot = 6,
              caption,
              placeholder = 'beach',
              style
            }) {
              const tones = {
                beach: 'radial-gradient(ellipse 60% 40% at 70% 18%, #fff 0, #fff 30%, transparent 70%), linear-gradient(180deg,#bbb 0,#ddd 38%,#555 40%,#8a8a8a 58%,#e8e8e8 62%,#cfcfcf 100%)',
                product: 'radial-gradient(ellipse 34% 40% at 50% 52%, #333 0, #555 50%, transparent 72%), linear-gradient(180deg,#eee,#c8c8c8)',
                portrait: 'radial-gradient(ellipse 22% 28% at 50% 38%, #444 0, #666 60%, transparent 75%), radial-gradient(ellipse 40% 30% at 50% 95%, #444 0, #666 60%, transparent 75%), linear-gradient(180deg,#eee,#bbb)'
              };
              const inner = {
                position: 'absolute',
                inset: -dot,
                background: src ? `center/cover no-repeat url(${src})` : tones[placeholder] || tones.beach,
                filter: `grayscale(1) blur(${Math.max(1, dot / 3)}px)`
              };
              const screen = {
                position: 'absolute',
                inset: 0,
                mixBlendMode: 'multiply',
                background: `radial-gradient(circle at center, #fff 0, #fff ${dot * 0.18}px, #000 ${dot * 0.62}px) 0 0/${dot}px ${dot}px`
              };
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'relative',
                  height,
                  overflow: 'hidden',
                  background: '#fff',
                  ...style
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  inset: 0,
                  filter: 'contrast(18) grayscale(1)',
                  background: '#fff',
                  overflow: 'hidden'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: inner,
                role: src ? 'img' : undefined,
                "aria-label": alt
              }), /*#__PURE__*/React.createElement("div", {
                style: screen
              })), caption && /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  right: 8,
                  bottom: 8,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '.06em',
                  textTransform: 'uppercase',
                  background: 'var(--paper-2)',
                  border: '1px solid var(--ink)',
                  padding: '2px 6px',
                  color: 'var(--ink)'
                }
              }, caption));
            }
            Object.assign(__ds_scope, {
              Halftone
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/media/Halftone.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/media/iconData.js
        try {
          (() => {
            // Generated from pixelarticons@1.8.1 (MIT) + cooler-box (LSD addition)
            const ICONS = {
              "alert": ["M13 1h-2v2H9v2H7v2H5v2H3v2H1v2h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5h-2V3h-2V1zm0 2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3v-2h2V9h2V7h2V5h2V3h2zm0 4h-2v6h2V7zm0 8h-2v2h2v-2z"],
              "arrow-left": ["M20 11v2H8v2H6v-2H4v-2h2V9h2v2h12zM10 7H8v2h2V7zm0 0h2V5h-2v2zm0 10H8v-2h2v2zm0 0h2v2h-2v-2z"],
              "arrow-right": ["M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2H4zm10-4h2v2h-2V7zm0 0h-2V5h2v2zm0 10h2v-2h-2v2zm0 0h-2v2h2v-2z"],
              "book-open": ["M3 3h8v2H3v12h8V5h2v12h8V5h-8V3h10v16H13v2h-2v-2H1V3h2zm16 7h-4v2h4v-2zm-4-3h4v2h-4V7zm2 6h-2v2h2v-2z"],
              "briefcase": ["M8 3h8v4h6v14H2V7h6V3zm2 4h4V5h-4v2zM4 9v10h16V9H4z"],
              "calendar": ["M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM5 8h14V6H5v2zm0 2v10h14V10H5z"],
              "card-text": ["M4 4H2v16h20V4H4zm0 2h16v12H4V6zm2 2h12v2H6V8zm0 4h10v2H6v-2z"],
              "check": ["M18 6h2v2h-2V6zm-2 4V8h2v2h-2zm-2 2v-2h2v2h-2zm-2 2h2v-2h-2v2zm-2 2h2v-2h-2v2zm-2 0v2h2v-2H8zm-2-2h2v2H6v-2zm0 0H4v-2h2v2z"],
              "chevron-down": ["M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7V8z"],
              "chevron-right": ["M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z"],
              "clock": ["M19 3H5v2H3v14h2v2h14v-2h2V5h-2V3zm0 2v14H5V5h14zm-8 2h2v6h4v2h-6V7z"],
              "close": ["M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z"],
              "downasaur": ["M6 4h14v2h2v6h-8v2h6v2h-4v2h-2v2H2V8h2V6h2V4zm2 6h2V8H8v2z"],
              "drag-and-drop": ["M5 3H3v2h2V3zm14 4h2v6h-2V9H9v10h4v2H7V7h12zM7 3h2v2H7V3zM5 7H3v2h2V7zm-2 4h2v2H3v-2zm2 4H3v2h2v-2zm6-12h2v2h-2V3zm6 0h-2v2h2V3zm-2 14v-2h6v2h-2v2h-2v2h-2v-4zm4 2v2h2v-2h-2z"],
              "file": ["M3 22h18V8h-2V6h-2v2h-2V6h2V4h-2V2H3v20zm2-2V4h8v6h6v10H5z"],
              "folder": ["M4 4h8v2h10v14H2V4h2zm16 4H10V6H4v12h16V8z"],
              "gamepad": ["M2 5h20v14H2V5zm18 12V7H4v10h16zM8 9h2v2h2v2h-2v2H8v-2H6v-2h2V9zm6 0h2v2h-2V9zm4 4h-2v2h2v-2z"],
              "headphone": ["M19 4H5v2H3v14h7v-8H5V6h14v6h-5v8h7V6h-2V4zm-3 10h3v4h-3v-4zm-8 0v4H5v-4h3z"],
              "human": ["M10 2h4v4h-4V2zM3 7h18v2h-6v13h-2v-6h-2v6H9V9H3V7z"],
              "label": ["M12 2H2v10h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h-2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v-2h-2v-2H8v-2H6v-2H4V4h8zM6 6h2v2H6V6z"],
              "lock": ["M15 2H9v2H7v4H4v14h16V8h-3V4h-2V2zm0 2v4H9V4h6zm-6 6h9v10H6V10h3zm4 3h-2v4h2v-4z"],
              "mail": ["M22 4H2v16h20V4zM4 18V6h16v12H4zM8 8H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8z"],
              "minus": ["M4 11h16v2H4z"],
              "mood-happy": ["M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm-5 6v-2H7v2h2zm6 0v2H9v-2h6zm0 0h2v-2h-2v2z"],
              "music": ["M8 4h12v16h-8v-8h6V8h-8v12H2v-8h6V4zm0 10H4v4h4v-4zm10 0h-4v4h4v-4z"],
              "notes": ["M5 2h16v20H3V2h2zm14 18V4H5v16h14zM7 6h10v2H7V6zm10 4H7v2h10v-2zM7 14h7v2H7v-2z"],
              "play": ["M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z"],
              "plus": ["M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4z"],
              "reload": ["M16 2h-2v2h2v2H4v2H2v5h2V8h12v2h-2v2h2v-2h2V8h2V6h-2V4h-2V2zM6 20h2v2h2v-2H8v-2h12v-2h2v-5h-2v5H8v-2h2v-2H8v2H6v2H4v2h2v2z"],
              "search": ["M6 2h8v2H6V2zM4 6V4h2v2H4zm0 8H2V6h2v8zm2 2H4v-2h2v2zm8 0v2H6v-2h8zm2-2h-2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm0-8h2v8h-2V6zm0 0V4h-2v2h2z"],
              "shopping-bag": ["M9 2h6v2H9V2zm6 4V4h2v2h4v16H3V6h4V4h2v2h6zm0 2H9v2H7V8H5v12h14V8h-2v2h-2V8z"],
              "sun": ["M13 3h-2v2h2V3zm4 2h2v2h-2V5zm-6 6h2v2h-2v-2zm-8 0h2v2H3v-2zm18 0h-2v2h2v-2zM5 5h2v2H5V5zm14 14h-2v-2h2v2zm-8 2h2v-2h-2v2zm-4-2H5v-2h2v2zM9 7h6v2H9V7zm0 8H7V9h2v6zm0 0v2h6v-2h2V9h-2v6H9z"],
              "trophy": ["M16 3H6v2H2v10h6V5h8v10h6V5h-4V3h-2zm4 4v6h-2V7h2zM6 13H4V7h2v6zm12 2H6v2h12v-2zm-7 2h2v2h3v2H8v-2h3v-2z"],
              "user": ["M15 2H9v2H7v6h2V4h6V2zm0 8H9v2h6v-2zm0-6h2v6h-2V4zM4 16h2v-2h12v2H6v4h12v-4h2v6H4v-6z"],
              "volume-3": ["M11 2H9v2H7v2H5v2H1v8h4v2h2v2h2v2h2V2zM7 18v-2H5v-2H3v-4h2V8h2V6h2v12H7zm6-8h2v4h-2v-4zm8-6h-2V2h-6v2h6v2h2v12h-2v2h-6v2h6v-2h2v-2h2V6h-2V4zm-2 4h-2V6h-4v2h4v8h-4v2h4v-2h2V8z"],
              "zap": ["M12 1h2v8h8v4h-2v-2h-8V5h-2V3h2V1zM8 7V5h2v2H8zM6 9V7h2v2H6zm-2 2V9h2v2H4zm10 8v2h-2v2h-2v-8H2v-4h2v2h8v6h2zm2-2v2h-2v-2h2zm2-2v2h-2v-2h2zm0 0h2v-2h-2v2z"],
              "cooler-box": ["M8 3h8v2H8zM6 5h2v2H6zM16 5h2v2h-2zM2 7h20v2H2zM2 9h2v11H2zM20 9h2v11h-2zM4 12h16v2H4zM4 20h16v2H4zM10 14h4v2h-4z"]
            };
            Object.assign(__ds_scope, {
              ICONS
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/media/iconData.js",
            error: String(e && e.message || e)
          });
        }

        // components/media/Icon.jsx
        try {
          (() => {
            function Icon({
              name,
              size = 24,
              color = 'currentColor',
              title,
              style
            }) {
              const paths = __ds_scope.ICONS[name] || [];
              return /*#__PURE__*/React.createElement("svg", {
                viewBox: "0 0 24 24",
                width: size,
                height: size,
                fill: "none",
                role: title ? 'img' : 'presentation',
                "aria-label": title,
                style: {
                  display: 'block',
                  flex: 'none',
                  shapeRendering: 'crispEdges',
                  ...style
                }
              }, paths.map((d, i) => /*#__PURE__*/React.createElement("path", {
                key: i,
                d: d,
                fill: color
              })));
            }
            const ICON_NAMES = Object.keys(__ds_scope.ICONS);
            Object.assign(__ds_scope, {
              Icon,
              ICON_NAMES
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/media/Icon.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/cards/FolderCard.jsx
        try {
          (() => {
            function FolderCard({
              index = '01',
              title,
              description,
              meta,
              active = false,
              tabOffset = 0,
              onClick,
              href,
              style
            }) {
              const [hover, setHover] = React.useState(false);
              const on = active || hover;
              const Tag = href ? 'a' : 'div';
              return /*#__PURE__*/React.createElement(Tag, {
                href: href,
                onClick: onClick,
                onMouseEnter: () => setHover(true),
                onMouseLeave: () => setHover(false),
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  color: 'var(--ink)',
                  cursor: 'pointer',
                  transform: on ? 'translate(-3px,-3px)' : 'none',
                  transition: 'transform var(--dur-snap) linear',
                  ...style
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  paddingLeft: tabOffset
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 18,
                  padding: '8px 16px',
                  marginBottom: -2,
                  border: '2px solid var(--ink)',
                  borderBottom: 'none',
                  borderRadius: '6px 6px 0 0',
                  background: on ? 'var(--yellow)' : 'var(--paper-2)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  letterSpacing: '0.04em',
                  position: 'relative',
                  zIndex: 1
                }
              }, /*#__PURE__*/React.createElement("span", {
                style: {
                  fontWeight: 700
                }
              }, index), /*#__PURE__*/React.createElement("span", {
                style: {
                  textTransform: 'lowercase',
                  whiteSpace: 'nowrap'
                }
              }, title))), /*#__PURE__*/React.createElement("div", {
                style: {
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                  minHeight: 170,
                  padding: '20px 20px 16px',
                  border: '2px solid var(--ink)',
                  background: 'var(--paper-2)',
                  boxShadow: on ? 'var(--shadow-hard)' : '0 0 0 var(--ink)',
                  transition: 'box-shadow var(--dur-snap) linear'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 800,
                  fontStretch: '88%',
                  fontSize: 'clamp(26px, 2.4vw, 34px)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  textWrap: 'balance'
                }
              }, title), description && /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: 'var(--ink-2)',
                  textWrap: 'pretty'
                }
              }, description), /*#__PURE__*/React.createElement("div", {
                style: {
                  marginTop: 'auto',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-3)'
                }
              }, /*#__PURE__*/React.createElement("span", null, meta), /*#__PURE__*/React.createElement("span", {
                style: {
                  display: 'grid',
                  placeItems: 'center',
                  width: 28,
                  height: 28,
                  border: '2px solid var(--ink)',
                  background: on ? 'var(--ink)' : 'transparent',
                  color: on ? 'var(--yellow)' : 'var(--ink)'
                }
              }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
                name: "arrow-right",
                size: 18
              })))));
            }
            Object.assign(__ds_scope, {
              FolderCard
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/cards/FolderCard.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/navigation/FolderTabs.jsx
        try {
          (() => {
            // Site navigation as a row of file-folder tabs sitting on a rule. Active tab is yellow and joins the panel below.
            function FolderTabs({
              items = [],
              active,
              onChange,
              style
            }) {
              const [hover, setHover] = React.useState(null);
              return /*#__PURE__*/React.createElement("nav", {
                style: {
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: 4,
                  borderBottom: '2px solid var(--ink)',
                  paddingLeft: 12,
                  overflowX: 'auto',
                  scrollbarWidth: 'none',
                  ...style
                }
              }, items.map(it => {
                const on = it.id === active;
                const hv = hover === it.id && !on;
                return /*#__PURE__*/React.createElement("button", {
                  key: it.id,
                  type: "button",
                  onClick: () => onChange && onChange(it.id),
                  onMouseEnter: () => setHover(it.id),
                  onMouseLeave: () => setHover(null),
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: on ? '11px 16px 10px' : '8px 14px 7px',
                    marginBottom: -2,
                    border: '2px solid var(--ink)',
                    borderBottom: on ? '2px solid var(--yellow)' : '2px solid var(--ink)',
                    borderRadius: '6px 6px 0 0',
                    background: on ? 'var(--yellow)' : hv ? 'var(--paper-3)' : 'var(--paper-2)',
                    color: 'var(--ink)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    letterSpacing: '0.04em',
                    whiteSpace: 'nowrap',
                    transform: hv ? 'translateY(-3px)' : 'none',
                    transition: 'transform var(--dur-snap) linear, background var(--dur-snap) linear'
                  }
                }, it.index && /*#__PURE__*/React.createElement("span", {
                  style: {
                    fontWeight: 700
                  }
                }, it.index), /*#__PURE__*/React.createElement("span", {
                  style: {
                    textTransform: 'lowercase'
                  }
                }, it.label));
              }));
            }
            Object.assign(__ds_scope, {
              FolderTabs
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/navigation/FolderTabs.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/navigation/IndexTab.jsx
        try {
          (() => {
            // One divider in the index-card drawer. The tab is a trapezoid sitting on a full-width card edge.
            function IndexTab({
              number,
              word,
              letter,
              count,
              offset = 0,
              tabWidth = 220,
              active = false,
              onClick,
              style
            }) {
              const [hover, setHover] = React.useState(false);
              const isLetter = !!letter;
              const on = active || hover && !isLetter;
              const fill = isLetter ? 'var(--ink)' : on ? 'var(--yellow)' : 'var(--paper-2)';
              const fg = isLetter ? 'var(--paper-2)' : 'var(--ink)';
              return /*#__PURE__*/React.createElement("div", {
                onClick: onClick,
                onMouseEnter: () => setHover(true),
                onMouseLeave: () => setHover(false),
                style: {
                  position: 'relative',
                  height: 44,
                  cursor: onClick ? 'pointer' : undefined,
                  transform: on && !active ? 'translateY(-4px)' : 'none',
                  transition: 'transform var(--dur-snap) linear',
                  ...style
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 14,
                  background: 'var(--paper-2)',
                  border: '1.5px solid var(--ink)',
                  borderBottom: 'none',
                  borderRadius: '8px 8px 0 0'
                }
              }), /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  bottom: 12,
                  left: `min(${offset}%, calc(100% - ${typeof tabWidth === 'number' ? tabWidth + 'px' : tabWidth}))`,
                  width: tabWidth,
                  minWidth: 150,
                  height: 32
                }
              }, /*#__PURE__*/React.createElement("svg", {
                viewBox: "0 0 220 32",
                preserveAspectRatio: "none",
                width: "100%",
                height: "100%",
                style: {
                  position: 'absolute',
                  inset: 0,
                  overflow: 'visible'
                },
                "aria-hidden": "true"
              }, /*#__PURE__*/React.createElement("path", {
                d: "M0 32 C 8 32 10 28 12 22 L 18 6 C 20 1 22 0 28 0 L 192 0 C 198 0 200 1 202 6 L 208 22 C 210 28 212 32 220 32",
                fill: fill,
                stroke: "var(--ink)",
                strokeWidth: "1.5",
                vectorEffect: "non-scaling-stroke"
              })), /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  inset: '0 30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                  fontFamily: isLetter ? 'var(--font-mono)' : 'var(--font-grotesk)',
                  fontSize: 15,
                  fontWeight: isLetter ? 700 : 500,
                  color: fg,
                  whiteSpace: 'nowrap'
                }
              }, /*#__PURE__*/React.createElement("span", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13
                }
              }, isLetter ? letter : number), /*#__PURE__*/React.createElement("span", null, isLetter ? count : word))));
            }
            Object.assign(__ds_scope, {
              IndexTab
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/navigation/IndexTab.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/windows/Window.jsx
        try {
          (() => {
            function Ctrl({
              glyph,
              onClick,
              label,
              inverse
            }) {
              return /*#__PURE__*/React.createElement("button", {
                type: "button",
                "aria-label": label,
                onClick: onClick,
                style: {
                  width: 20,
                  height: 20,
                  padding: 0,
                  display: 'grid',
                  placeItems: 'center',
                  border: '2px solid ' + (inverse ? 'var(--paper-2)' : 'var(--ink)'),
                  background: 'transparent',
                  color: 'inherit',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  fontWeight: 700,
                  lineHeight: 1,
                  cursor: 'pointer',
                  borderRadius: 0
                }
              }, glyph);
            }
            function Window({
              title = 'untitled.exe',
              meta,
              children,
              bar = 'plain',
              controls = ['min', 'close'],
              onClose,
              shadow = 'md',
              width,
              padding = 24,
              bodyStyle,
              style
            }) {
              const inverse = bar === 'inverse';
              const barBg = {
                plain: 'var(--paper-2)',
                strip: 'var(--paper-3)',
                accent: 'var(--yellow)',
                inverse: 'var(--ink)',
                hatch: 'var(--paper-2)'
              }[bar];
              const shadows = {
                none: 'none',
                sm: 'var(--shadow-hard-sm)',
                md: 'var(--shadow-hard)',
                lg: 'var(--shadow-hard-lg)',
                grey: 'var(--shadow-grey)'
              };
              const glyphs = {
                min: '–',
                max: '□',
                close: '✕'
              };
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  width,
                  background: 'var(--paper-2)',
                  border: '2px solid var(--ink)',
                  boxShadow: shadows[shadow],
                  color: 'var(--ink)',
                  display: 'flex',
                  flexDirection: 'column',
                  ...style
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  minHeight: 36,
                  padding: '0 8px 0 12px',
                  borderBottom: '2px solid var(--ink)',
                  background: barBg,
                  color: inverse ? 'var(--paper-2)' : 'var(--ink)'
                }
              }, /*#__PURE__*/React.createElement("span", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13,
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap',
                  background: bar === 'hatch' ? 'var(--paper-2)' : 'transparent',
                  padding: bar === 'hatch' ? '0 8px' : 0
                }
              }, title), /*#__PURE__*/React.createElement("span", {
                style: {
                  flex: 1,
                  alignSelf: 'stretch',
                  margin: '9px 0',
                  background: bar === 'hatch' ? 'var(--bg-hatch)' : 'transparent'
                }
              }), meta && /*#__PURE__*/React.createElement("span", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  opacity: 0.8
                }
              }, meta), controls.length > 0 && /*#__PURE__*/React.createElement("span", {
                style: {
                  display: 'flex',
                  gap: 4
                }
              }, controls.map(c => /*#__PURE__*/React.createElement(Ctrl, {
                key: c,
                glyph: glyphs[c],
                label: c,
                inverse: inverse,
                onClick: c === 'close' ? onClose : undefined
              })))), /*#__PURE__*/React.createElement("div", {
                style: {
                  padding,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fs-body)',
                  lineHeight: 'var(--lh-body)',
                  flex: 1,
                  ...bodyStyle
                }
              }, children));
            }
            Object.assign(__ds_scope, {
              Window
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/windows/Window.jsx",
            error: String(e && e.message || e)
          });
        }

        // components/windows/Dialog.jsx
        try {
          (() => {
            function Dialog({
              title = 'error.exe',
              kind = 'error',
              heading,
              children,
              actions,
              onClose,
              width = 420,
              style
            }) {
              const icon = {
                error: 'alert',
                info: 'mood-happy',
                success: 'check',
                locked: 'lock'
              }[kind] || 'alert';
              const iconBox = kind === 'error' ? {
                background: 'var(--ink)',
                color: 'var(--yellow)'
              } : {
                background: 'var(--yellow)',
                color: 'var(--ink)'
              };
              return /*#__PURE__*/React.createElement(__ds_scope.Window, {
                title: title,
                bar: kind === 'error' ? 'inverse' : 'plain',
                controls: ['close'],
                onClose: onClose,
                width: width,
                shadow: "lg",
                padding: 0,
                style: style
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  gap: 16,
                  padding: '22px 22px 18px'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  width: 44,
                  height: 44,
                  flex: 'none',
                  display: 'grid',
                  placeItems: 'center',
                  border: '2px solid var(--ink)',
                  ...iconBox
                }
              }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
                name: icon,
                size: 28,
                color: "currentColor"
              })), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  minWidth: 0
                }
              }, heading && /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 800,
                  fontStretch: '88%',
                  fontSize: 22,
                  lineHeight: 1.05,
                  textTransform: 'uppercase'
                }
              }, heading), /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 14,
                  lineHeight: 1.5,
                  textWrap: 'pretty'
                }
              }, children))), actions && /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  gap: 10,
                  justifyContent: 'flex-end',
                  flexWrap: 'wrap',
                  padding: '12px 22px 18px',
                  borderTop: '1px dashed var(--ink-3)'
                }
              }, actions));
            }
            Object.assign(__ds_scope, {
              Dialog
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "components/windows/Dialog.jsx",
            error: String(e && e.message || e)
          });
        }

        // ui_kits/microsite/Activities.jsx
        try {
          (() => {
            const actNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
            function ClickOMeter() {
              const [v, setV] = React.useState(0.62);
              const stops = ['VAALIE', 'KOOK', 'LAATIE', 'BRU', 'FLUENT'];
              return /*#__PURE__*/React.createElement("div", {
                onClick: () => setV(Math.random()),
                style: {
                  width: '78%',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  justifyContent: 'center',
                  marginBottom: 6
                }
              }, /*#__PURE__*/React.createElement(actNS.Icon, {
                name: "headphone",
                size: 32
              }), /*#__PURE__*/React.createElement("span", {
                style: {
                  fontFamily: 'var(--font-pixel)',
                  fontSize: 18
                }
              }, "\"GQ-!\"")), /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'relative',
                  height: 22,
                  border: '2px solid var(--ink)',
                  background: 'var(--paper-2)',
                  display: 'flex'
                }
              }, stops.map((s, i) => /*#__PURE__*/React.createElement("span", {
                key: s,
                style: {
                  flex: 1,
                  borderLeft: i ? '1px solid var(--ink)' : 'none',
                  background: i / stops.length < v ? 'var(--ink)' : 'transparent'
                }
              })), /*#__PURE__*/React.createElement("span", {
                style: {
                  position: 'absolute',
                  top: -8,
                  left: `calc(${v * 100}% - 1px)`,
                  width: 3,
                  height: 34,
                  background: 'var(--yellow)',
                  outline: '1px solid var(--ink)',
                  transition: 'left 200ms var(--ease-out)'
                }
              })), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  letterSpacing: '0.04em',
                  gap: 4
                }
              }, stops.map(s => /*#__PURE__*/React.createElement("span", {
                key: s
              }, s))));
            }
            function SpotVaalie() {
              const marks = [[22, 40, 'flame shirt'], [64, 70, 'socks + slops'], [78, 28, 'gazebo']];
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  inset: 0
                }
              }, /*#__PURE__*/React.createElement(actNS.Halftone, {
                height: "100%",
                dot: 5,
                placeholder: "beach"
              }), marks.map(([x, y, l]) => /*#__PURE__*/React.createElement("div", {
                key: l,
                style: {
                  position: 'absolute',
                  left: x + '%',
                  top: y + '%',
                  transform: 'translate(-50%,-50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4
                }
              }, /*#__PURE__*/React.createElement("span", {
                style: {
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  border: '2px dashed var(--ink)',
                  background: 'rgba(246,58,5,.25)'
                }
              }), /*#__PURE__*/React.createElement("span", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  background: 'var(--paper-2)',
                  border: '1px solid var(--ink)',
                  padding: '1px 4px',
                  whiteSpace: 'nowrap'
                }
              }, l))));
            }
            function JaNoLaka() {
              const {
                Button
              } = actNS;
              const [s, setS] = React.useState(3);
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 14,
                  width: '80%'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 14,
                  textAlign: 'center',
                  background: 'var(--paper-2)',
                  border: '2px solid var(--ink)',
                  padding: '10px 14px'
                }
              }, "A robot is a traffic light."), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  gap: 10
                }
              }, /*#__PURE__*/React.createElement(Button, {
                variant: "primary",
                onClick: () => setS(s + 1)
              }, "JA"), /*#__PURE__*/React.createElement(Button, {
                onClick: () => setS(Math.max(0, s - 1))
              }, "NO LAKA")), /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11
                }
              }, "Score: ", s, " soft-serves"));
            }
            function DurdleGrid() {
              const rows = [['K', 'O', 'O', 'K', ''], ['S', 'H', 'A', 'P', ''], ['', '', '', '', ''], ['', '', '', '', '']];
              const hit = {
                '0-0': 'y',
                '1-0': 'i',
                '1-1': 'i'
              };
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 32px)',
                  gap: 5
                }
              }, rows.flatMap((r, ri) => r.map((c, ci) => {
                const h = hit[ri + '-' + ci];
                return /*#__PURE__*/React.createElement("span", {
                  key: ri + '-' + ci,
                  style: {
                    width: 32,
                    height: 32,
                    display: 'grid',
                    placeItems: 'center',
                    border: '2px solid var(--ink)',
                    background: h === 'y' ? 'var(--yellow)' : h === 'i' ? 'var(--ink)' : 'var(--paper-2)',
                    color: h === 'i' ? 'var(--paper-2)' : 'var(--ink)',
                    fontFamily: 'var(--font-pixel)',
                    fontSize: 16
                  }
                }, c);
              })));
            }
            function PackForDurban({
              onBad
            }) {
              const items = [['Baggies', true], ['Sunscreen', true], ['Wetsuit', false], ['Fork', false]];
              const [packed, setPacked] = React.useState(['Baggies']);
              const add = (n, ok) => {
                if (!ok) return onBad(n);
                if (!packed.includes(n)) setPacked([...packed, n]);
              };
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  gap: 18,
                  alignItems: 'center'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6
                }
              }, items.map(([n, ok]) => /*#__PURE__*/React.createElement("button", {
                key: n,
                onClick: () => add(n, ok),
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  border: '2px solid var(--ink)',
                  background: packed.includes(n) ? 'var(--paper-3)' : 'var(--paper-2)',
                  padding: '4px 8px',
                  cursor: 'grab',
                  textAlign: 'left',
                  textDecoration: packed.includes(n) ? 'line-through' : 'none'
                }
              }, n))), /*#__PURE__*/React.createElement(actNS.Icon, {
                name: "arrow-right",
                size: 20
              }), /*#__PURE__*/React.createElement("div", {
                style: {
                  width: 110,
                  height: 96,
                  border: '2px solid var(--ink)',
                  background: 'var(--paper-2)',
                  position: 'relative',
                  padding: '18px 8px 6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10
                }
              }, /*#__PURE__*/React.createElement("span", {
                style: {
                  position: 'absolute',
                  top: -10,
                  left: 34,
                  width: 40,
                  height: 10,
                  border: '2px solid var(--ink)',
                  borderBottom: 'none'
                }
              }), packed.map(p => /*#__PURE__*/React.createElement("span", {
                key: p
              }, "\u2713 ", p))));
            }
            function Leaderboard() {
              const {
                Window,
                Icon
              } = actNS;
              return /*#__PURE__*/React.createElement(Window, {
                title: "top_students.txt",
                meta: "Live",
                controls: ['min', 'close'],
                shadow: "md",
                padding: 0
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  padding: '14px 16px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10
                }
              }, /*#__PURE__*/React.createElement(Icon, {
                name: "trophy",
                size: 24
              }), /*#__PURE__*/React.createElement("span", {
                style: {
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 800,
                  fontStretch: '88%',
                  fontSize: 26,
                  textTransform: 'uppercase'
                }
              }, "Top Students")), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'grid',
                  gridTemplateColumns: '28px 1fr auto auto',
                  columnGap: 12,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13
                }
              }, ['#', 'Student', 'Exam', 'Games'].map(h => /*#__PURE__*/React.createElement("span", {
                key: h,
                style: {
                  padding: '6px 0',
                  borderTop: '1px solid var(--ink)',
                  borderBottom: '1px solid var(--ink)',
                  background: 'var(--paper-3)',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  paddingLeft: h === '#' ? 16 : 0,
                  paddingRight: h === 'Games' ? 16 : 0
                }
              }, h)), window.LSD_DATA.leaderboard.map(([n, e, g], i) => /*#__PURE__*/React.createElement(React.Fragment, {
                key: n
              }, /*#__PURE__*/React.createElement("span", {
                style: {
                  padding: '9px 0 9px 16px',
                  borderBottom: '1px dashed var(--paper-4)',
                  fontWeight: 700
                }
              }, i + 1), /*#__PURE__*/React.createElement("span", {
                style: {
                  padding: '9px 0',
                  borderBottom: '1px dashed var(--paper-4)'
                }
              }, i === 0 ? /*#__PURE__*/React.createElement("span", {
                style: {
                  background: 'var(--yellow)',
                  padding: '0 4px'
                }
              }, n) : n), /*#__PURE__*/React.createElement("span", {
                style: {
                  padding: '9px 0',
                  borderBottom: '1px dashed var(--paper-4)'
                }
              }, e), /*#__PURE__*/React.createElement("span", {
                style: {
                  padding: '9px 16px 9px 0',
                  borderBottom: '1px dashed var(--paper-4)',
                  textAlign: 'right'
                }
              }, g)))), /*#__PURE__*/React.createElement("div", {
                style: {
                  padding: '10px 16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--ink-3)'
                }
              }, "Updated after every exam. Forks disqualify."));
            }
            function Activities({
              initialError = 'Wetsuit'
            }) {
              const {
                SpecCard,
                Button,
                Dialog,
                Icon
              } = actNS;
              const [err, setErr] = React.useState(initialError);
              const games = [{
                ref: 'GAME-01',
                label: 'Say Gqom',
                tag: 'MIC',
                src: 'Mic-based pronunciation test. The click-o-meter rates your gqom click from VAALIE to FLUENT.',
                body: /*#__PURE__*/React.createElement(ClickOMeter, null)
              }, {
                ref: 'GAME-02',
                label: 'Spot the Vaalie',
                tag: '3 TO FIND',
                src: 'Find the details in the beach scene: flame shirt, socks with slops, gazebo with cup holders.',
                body: /*#__PURE__*/React.createElement(SpotVaalie, null),
                nox: true
              }, {
                ref: 'GAME-03',
                label: 'Ja / No Laka',
                tag: '60 SEC',
                src: 'Rapid true-false. Statements flash, you slam JA or NO LAKA. Score counted in soft-serves.',
                body: /*#__PURE__*/React.createElement(JaNoLaka, null)
              }, {
                ref: 'GAME-04',
                label: 'Durdle',
                tag: 'DAILY',
                src: 'Daily Durban-slang word game. Six tries. Today\u2019s word is in the Dictionary.',
                body: /*#__PURE__*/React.createElement(DurdleGrid, null)
              }, {
                ref: 'GAME-05',
                label: 'Pack for Durban',
                tag: 'DRAG',
                src: 'Drag the essentials to the suitcase. The system will tell you if you are wrong.',
                body: /*#__PURE__*/React.createElement(PackForDurban, {
                  onBad: setErr
                })
              }, {
                ref: 'GAME-06',
                label: 'The 2pm Quiz',
                tag: 'LOCKED',
                src: 'Locked before 2pm. Come back after the beach.',
                locked: true,
                body: /*#__PURE__*/React.createElement("div", {
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 10,
                    opacity: 0.9
                  }
                }, /*#__PURE__*/React.createElement(Icon, {
                  name: "lock",
                  size: 48
                }), /*#__PURE__*/React.createElement("span", {
                  style: {
                    fontFamily: 'var(--font-pixel)',
                    fontSize: 22
                  }
                }, "14:00"), /*#__PURE__*/React.createElement("span", {
                  style: {
                    fontFamily: 'var(--font-mono)',
                    fontSize: 13
                  }
                }, "Come back after the beach."))
              }];
              return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
                index: "03",
                kicker: "Practical study \xB7 six games",
                title: "Activities"
              }), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 640px), 1fr))',
                  gap: 40,
                  alignItems: 'start'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: 28,
                  position: 'relative'
                }
              }, games.map(g => /*#__PURE__*/React.createElement(SpecCard, {
                key: g.ref,
                refCode: g.ref,
                meta: g.locked ? 'Opens 14:00' : 'Play',
                label: g.label,
                chipVariant: g.locked ? 'inverse' : 'outline',
                crosshair: !g.nox,
                previewHeight: 230,
                sourceLabel: "SOURCE",
                sourceTag: g.tag,
                source: g.src,
                interactive: !g.locked,
                footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
                  style: {
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--ink-3)'
                  }
                }, g.locked ? 'Status: sunbathing' : 'Best: 9 soft-serves'), /*#__PURE__*/React.createElement(Button, {
                  size: "sm",
                  variant: g.locked ? 'secondary' : 'primary',
                  disabled: g.locked
                }, g.locked ? 'Locked' : 'Play'))
              }, g.body)), err && /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  left: '30%',
                  top: '58%',
                  zIndex: 5
                }
              }, /*#__PURE__*/React.createElement(Dialog, {
                title: "pack_for_durban.exe",
                kind: "error",
                heading: err === 'Fork' ? 'ABSOLUTELY NOT' : '\u26A0 Error: wetsuit detected.',
                width: 400,
                onClose: () => setErr(null),
                actions: err === 'Fork' ? /*#__PURE__*/React.createElement(Button, {
                  size: "sm",
                  variant: "primary",
                  onClick: () => setErr(null)
                }, "Remove fork") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
                  size: "sm",
                  onClick: () => setErr(null)
                }, "OK"), /*#__PURE__*/React.createElement(Button, {
                  size: "sm",
                  variant: "primary",
                  onClick: () => setErr(null)
                }, "OK, bru"))
              }, err === 'Fork' ? 'Forks are not permitted within 50km of a bunny.' : 'Baggies required.'))), /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'sticky',
                  top: 140,
                  maxWidth: 460
                }
              }, /*#__PURE__*/React.createElement(Leaderboard, null))));
            }
            Object.assign(window, {
              Activities
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "ui_kits/microsite/Activities.jsx",
            error: String(e && e.message || e)
          });
        }

        // ui_kits/microsite/Dictionary.jsx
        try {
          (() => {
            const dictNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
            function buildDrawer(words) {
              const sorted = [...words].sort((a, b) => a[1].replace(/^The /, 'T').localeCompare(b[1].replace(/^The /, 'T')));
              const rows = [];
              let cur = null;
              const counts = {};
              sorted.forEach(w => {
                const L = w[1].replace(/^The /, 'T')[0].toUpperCase();
                counts[L] = (counts[L] || 0) + 1;
              });
              const cols = [40, 60, 26, 52, 34, 64];
              sorted.forEach((w, i) => {
                const L = w[1].replace(/^The /, 'T')[0].toUpperCase();
                if (L !== cur) {
                  rows.push({
                    letter: L,
                    count: String(counts[L]).padStart(3, '0'),
                    offset: 4 + rows.length % 3 * 6
                  });
                  cur = L;
                }
                rows.push({
                  w,
                  offset: cols[i % cols.length]
                });
              });
              return rows;
            }
            function EntryCard({
              w,
              playing,
              setPlaying
            }) {
              const {
                Button,
                RefCode,
                Barcode,
                ProgressBar,
                Icon
              } = dictNS;
              const [num, word, pos, def, ex] = w;
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'relative'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  gap: 40,
                  padding: '9px 22px',
                  marginBottom: -2,
                  background: 'var(--yellow)',
                  border: '2px solid var(--ink)',
                  borderBottom: 'none',
                  borderRadius: '8px 8px 0 0',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 14,
                  fontWeight: 700,
                  position: 'relative'
                }
              }, /*#__PURE__*/React.createElement("span", null, num), /*#__PURE__*/React.createElement("span", {
                style: {
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 600
                }
              }, word))), /*#__PURE__*/React.createElement("article", {
                style: {
                  background: 'var(--paper-2)',
                  border: '2px solid var(--ink)',
                  boxShadow: 'var(--shadow-hard-lg)',
                  padding: '28px 32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                  transform: 'rotate(-0.6deg)'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between'
                }
              }, /*#__PURE__*/React.createElement(RefCode, {
                prefix: "",
                code: 'LSD-' + num + ' · Entry ' + num + ' of 32'
              }), /*#__PURE__*/React.createElement(RefCode, {
                code: "LSD-2026"
              })), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 16,
                  flexWrap: 'wrap'
                }
              }, /*#__PURE__*/React.createElement("h2", {
                style: {
                  margin: 0,
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 800,
                  fontStretch: '88%',
                  fontSize: 84,
                  lineHeight: 0.9,
                  letterSpacing: '-0.02em'
                }
              }, word), /*#__PURE__*/React.createElement("span", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontStyle: 'italic',
                  fontSize: 18,
                  color: 'var(--ink-2)'
                }
              }, pos)), /*#__PURE__*/React.createElement("div", {
                style: {
                  height: 2,
                  background: 'var(--ink)'
                }
              }), /*#__PURE__*/React.createElement("p", {
                style: {
                  margin: 0,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 17,
                  lineHeight: 1.55,
                  textWrap: 'pretty'
                }
              }, def), /*#__PURE__*/React.createElement("div", {
                style: {
                  border: '1px solid var(--ink)'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  padding: '5px 10px',
                  background: 'var(--paper-3)',
                  borderBottom: '1px solid var(--ink)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.1em'
                }
              }, "EXAMPLE"), /*#__PURE__*/React.createElement("div", {
                style: {
                  padding: '12px 12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 15,
                  fontStyle: 'italic'
                }
              }, "\u201C", ex, "\u201D")), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  flexWrap: 'wrap'
                }
              }, /*#__PURE__*/React.createElement(Button, {
                variant: playing ? 'accent' : 'primary',
                icon: /*#__PURE__*/React.createElement(Icon, {
                  name: playing ? 'volume-3' : 'play',
                  size: 18
                }),
                onClick: () => setPlaying(!playing)
              }, playing ? 'On air — Radio lesson ' + num : 'Hear it'), /*#__PURE__*/React.createElement(Barcode, {
                value: 'LSD-' + num + word,
                width: 130,
                height: 30
              })), playing && /*#__PURE__*/React.createElement(ProgressBar, {
                label: 'Radio lesson ' + num + ' · ' + word,
                value: 3,
                max: 10,
                showCount: false
              })));
            }
            function Dictionary() {
              const {
                IndexTab
              } = dictNS;
              const words = window.LSD_DATA.words;
              const rows = React.useMemo(() => buildDrawer(words), []);
              const [open, setOpen] = React.useState('13');
              const [playing, setPlaying] = React.useState(false);
              const w = words.find(x => x[0] === open);
              return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
                index: "01",
                kicker: "Reference \xB7 all lessons",
                title: "The Dictionary",
                right: /*#__PURE__*/React.createElement("div", {
                  style: {
                    fontFamily: 'var(--font-mono)',
                    fontSize: 13,
                    maxWidth: 300,
                    lineHeight: 1.5,
                    textAlign: 'right'
                  }
                }, "Filed alphabetically. Numbered by lesson. Pull any card to read the full entry.")
              }), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
                  gap: 56,
                  alignItems: 'start'
                }
              }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
                style: {
                  background: 'var(--paper-3)',
                  border: '2px solid var(--ink)',
                  borderBottom: 'none',
                  padding: '18px 14px 0'
                }
              }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
                key: i,
                style: {
                  marginTop: i ? -14 : 0,
                  padding: `0 ${Math.max(0, (rows.length - i) * 0.35)}px`,
                  position: 'relative',
                  zIndex: i
                }
              }, r.letter ? /*#__PURE__*/React.createElement(IndexTab, {
                letter: r.letter,
                count: r.count,
                offset: r.offset,
                tabWidth: "28%"
              }) : /*#__PURE__*/React.createElement(IndexTab, {
                number: r.w[0],
                word: r.w[1],
                offset: r.offset,
                tabWidth: "34%",
                active: r.w[0] === open,
                onClick: () => {
                  setOpen(r.w[0]);
                  setPlaying(false);
                }
              }))), /*#__PURE__*/React.createElement("div", {
                style: {
                  height: 22,
                  background: 'var(--paper-2)',
                  borderTop: '1.5px solid var(--ink)',
                  margin: '0 -14px'
                }
              })), /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'relative',
                  height: 110,
                  border: '2px solid var(--ink)',
                  background: 'var(--paper-2)',
                  boxShadow: 'var(--shadow-hard)',
                  display: 'grid',
                  placeItems: 'center'
                }
              }, /*#__PURE__*/React.createElement("span", {
                style: {
                  fontFamily: 'var(--font-grotesk)',
                  fontSize: 20,
                  fontWeight: 500,
                  background: 'var(--yellow)',
                  border: '1.5px solid var(--ink)',
                  borderRadius: 6,
                  padding: '6px 22px'
                }
              }, "the whole language, filed."), /*#__PURE__*/React.createElement("span", {
                style: {
                  position: 'absolute',
                  left: 12,
                  bottom: 8,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--ink-3)'
                }
              }, "DRAWER 01 / 01 \xB7 LSD-01 \u2013 LSD-32"))), /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'sticky',
                  top: 140
                }
              }, /*#__PURE__*/React.createElement(EntryCard, {
                w: w,
                playing: playing,
                setPlaying: setPlaying
              }))));
            }
            Object.assign(window, {
              Dictionary
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "ui_kits/microsite/Dictionary.jsx",
            error: String(e && e.message || e)
          });
        }

        // ui_kits/microsite/Exam.jsx
        try {
          (() => {
            const examNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
            function ExamStack({
              children,
              title = 'final_exam.exe',
              meta
            }) {
              const {
                Window
              } = examNS;
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'relative',
                  paddingTop: 72,
                  paddingLeft: 72
                }
              }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
                key: i,
                style: {
                  position: 'absolute',
                  top: i * 24,
                  left: i * 24,
                  right: 72 - i * 24,
                  bottom: 72 - i * 24
                }
              }, /*#__PURE__*/React.createElement(Window, {
                title: title,
                controls: ['close'],
                shadow: "grey",
                style: {
                  height: '100%'
                },
                bar: "strip"
              }, /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'relative'
                }
              }, /*#__PURE__*/React.createElement(Window, {
                title: title,
                meta: meta,
                bar: "accent",
                controls: ['min', 'close'],
                shadow: "lg",
                padding: 0
              }, children)));
            }
            function Certificate({
              name,
              setName,
              score
            }) {
              const {
                RefCode,
                Barcode,
                Stamp,
                Input,
                Button
              } = examNS;
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 40,
                  alignItems: 'flex-start'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  flex: '999 1 520px',
                  minWidth: 0,
                  background: 'var(--paper-2)',
                  border: '2px solid var(--ink)',
                  boxShadow: 'var(--shadow-hard-lg)',
                  padding: 14
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  border: '1px solid var(--ink)',
                  padding: '30px 40px 28px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 12,
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4
                }
              }, /*#__PURE__*/React.createElement(RefCode, {
                code: 'LSD-2026-CERT-' + String(score).padStart(2, '0') + '0417'
              }), /*#__PURE__*/React.createElement(RefCode, {
                prefix: "",
                code: "Issued as a public service by Gateway"
              })), /*#__PURE__*/React.createElement(Barcode, {
                value: 'CERT' + name,
                width: 140,
                height: 36,
                style: {
                  maxWidth: '40%'
                },
                showValue: false
              })), /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  marginTop: 10
                }
              }, "This certifies that"), /*#__PURE__*/React.createElement("div", {
                style: {
                  borderBottom: '2px solid var(--ink)',
                  paddingBottom: 6,
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 800,
                  fontStretch: '88%',
                  fontSize: 56,
                  lineHeight: 1,
                  minHeight: 56
                }
              }, name || '\u00a0'), /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 15,
                  lineHeight: 1.55,
                  maxWidth: 520
                }
              }, "has completed all 32 lessons and passed the Final Exam with a score of ", /*#__PURE__*/React.createElement("b", null, score, "/10"), ", and is hereby declared"), /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 800,
                  fontStretch: '88%',
                  fontSize: 64,
                  lineHeight: 0.9,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em'
                }
              }, "Fluent in Durban"), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  borderTop: '1px solid var(--ink)',
                  marginTop: 8
                }
              }, [['Course', 'LSD-01 – LSD-32'], ['Grade', score >= 9 ? 'Native-ish' : 'Fluent'], ['Valid', 'Up and down the coast']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
                key: k,
                style: {
                  padding: '8px 10px 0 0',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  fontSize: 10,
                  color: 'var(--ink-3)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }
              }, k), v))), /*#__PURE__*/React.createElement(Stamp, {
                size: 150,
                style: {
                  position: 'absolute',
                  right: 34,
                  bottom: 70
                }
              })), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 4px 0',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12
                }
              }, /*#__PURE__*/React.createElement("span", null, "Show this certificate at Gateway, Durban to claim your graduation reward."), /*#__PURE__*/React.createElement("span", {
                style: {
                  color: 'var(--ink-3)'
                }
              }, "1 / 1"))), /*#__PURE__*/React.createElement("div", {
                style: {
                  flex: '1 1 260px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16
                }
              }, /*#__PURE__*/React.createElement(Input, {
                label: "Name of graduate",
                value: name,
                onChange: e => setName(e.target.value),
                hint: "Printed exactly as typed. Choose wisely."
              }), /*#__PURE__*/React.createElement(Button, {
                variant: "accent",
                size: "lg",
                block: true,
                brackets: true
              }, "Print certificate"), /*#__PURE__*/React.createElement(Button, {
                block: true
              }, "Download PDF"), /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  lineHeight: 1.5,
                  color: 'var(--ink-2)'
                }
              }, "Redeemable once per graduate at Gateway, Durban. Baggies optional at collection.")));
            }
            function Exam({
              go,
              initial
            }) {
              const {
                AnswerOption,
                Button,
                ProgressBar,
                Dialog
              } = examNS;
              const Q = window.LSD_DATA.exam;
              const [i, setI] = React.useState(3);
              const [answers, setAnswers] = React.useState({
                0: 1,
                1: 0,
                2: 1
              });
              const [phase, setPhase] = React.useState(initial || 'q');
              const [name, setName] = React.useState('Thandi Mkhize');
              const score = Object.entries(answers).filter(([k, v]) => Q[k].c === v).length;
              const q = Q[i];
              const sel = answers[i];
              const next = () => {
                if (i < Q.length - 1) setI(i + 1);else setPhase(score >= 7 ? 'pass' : 'fail');
              };
              const reset = () => {
                setAnswers({});
                setI(0);
                setPhase('q');
              };
              const demo = /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11
                }
              }, /*#__PURE__*/React.createElement("span", {
                style: {
                  color: 'var(--ink-3)',
                  letterSpacing: '0.08em'
                }
              }, "DEMO STATE"), [['q', 'Question'], ['pass', 'Pass'], ['fail', 'Fail']].map(([k, l]) => /*#__PURE__*/React.createElement(Button, {
                key: k,
                size: "sm",
                variant: phase === k ? 'primary' : 'secondary',
                onClick: () => setPhase(k)
              }, l)));
              return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
                index: "02",
                kicker: "Assessment \xB7 written on site",
                title: phase === 'pass' ? 'Certificate of Fluency' : 'The Final Exam',
                right: demo
              }), phase === 'pass' ? /*#__PURE__*/React.createElement(Certificate, {
                name: name,
                setName: setName,
                score: Math.max(score, 8)
              }) : /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'relative',
                  maxWidth: 900
                }
              }, /*#__PURE__*/React.createElement(ExamStack, {
                meta: 'Question ' + String(i + 1).padStart(2, '0') + '/10'
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  padding: '28px 32px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 22
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline'
                }
              }, /*#__PURE__*/React.createElement("span", {
                style: {
                  fontFamily: 'var(--font-pixel)',
                  fontSize: 30
                }
              }, "QUESTION ", String(i + 1).padStart(2, '0'), "/10"), /*#__PURE__*/React.createElement("span", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--ink-3)'
                }
              }, "REF: LSD-EXAM-", String(i + 1).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 700,
                  fontSize: 36,
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  textWrap: 'balance'
                }
              }, q.q), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10
                }
              }, q.a.map((a, k) => /*#__PURE__*/React.createElement(AnswerOption, {
                key: k,
                letter: 'abc'[k],
                state: sel === k ? 'selected' : 'idle',
                onClick: () => setAnswers({
                  ...answers,
                  [i]: k
                })
              }, a)))), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  gap: 24,
                  padding: '22px 32px 26px',
                  marginTop: 24,
                  borderTop: '1px dashed var(--ink-3)'
                }
              }, /*#__PURE__*/React.createElement(ProgressBar, {
                label: "Progress",
                value: i + 1,
                max: 10,
                style: {
                  width: 300
                }
              }), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  gap: 10
                }
              }, /*#__PURE__*/React.createElement(Button, {
                disabled: i === 0,
                onClick: () => setI(i - 1)
              }, "Back"), /*#__PURE__*/React.createElement(Button, {
                variant: "primary",
                disabled: sel === undefined,
                onClick: next
              }, i === Q.length - 1 ? 'Hand it in' : 'Next, bru')))), phase === 'fail' && /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  inset: 0,
                  display: 'grid',
                  placeItems: 'center',
                  background: 'rgba(242,241,236,.55)'
                }
              }, /*#__PURE__*/React.createElement(Dialog, {
                title: "exam_result.exe",
                kind: "error",
                heading: "Eish. 4/10.",
                width: 460,
                onClose: () => setPhase('q'),
                actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
                  size: "sm",
                  onClick: () => go('dict')
                }, "Study the Dictionary"), /*#__PURE__*/React.createElement(Button, {
                  size: "sm",
                  variant: "primary",
                  onClick: reset
                }, "Try again"))
              }, "Rewrite immediately \u2014 the ocean isn't going anywhere."))));
            }
            Object.assign(window, {
              Exam
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "ui_kits/microsite/Exam.jsx",
            error: String(e && e.message || e)
          });
        }

        // ui_kits/microsite/Landing.jsx
        try {
          (() => {
            function _extends() {
              return _extends = Object.assign ? Object.assign.bind() : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }, _extends.apply(null, arguments);
            }
            const landNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
            function HeroCard({
              go,
              mobile
            }) {
              const {
                Button,
                Barcode,
                RefCode
              } = landNS;
              return /*#__PURE__*/React.createElement("section", {
                style: {
                  position: 'relative',
                  background: 'var(--paper-2)',
                  border: '2px solid var(--ink)',
                  boxShadow: mobile ? 'var(--shadow-hard)' : '10px 10px 0 var(--ink)',
                  padding: mobile ? '36px 20px 24px' : '56px 56px 48px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: mobile ? 28 : 48
                }
              }, /*#__PURE__*/React.createElement(RefCode, {
                code: "LSD-2026",
                style: {
                  position: 'absolute',
                  top: 10,
                  left: 12
                }
              }), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: mobile ? 20 : 28,
                  minWidth: 0,
                  flex: '1 1 560px'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: mobile ? 11 : 13,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase'
                }
              }, "A public service by Gateway"), /*#__PURE__*/React.createElement("h1", {
                style: {
                  margin: 0,
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 800,
                  fontStretch: '88%',
                  fontSize: mobile ? 62 : 'clamp(56px, 8.6vw, 140px)',
                  lineHeight: 0.84,
                  letterSpacing: '-0.025em',
                  textTransform: 'uppercase'
                }
              }, "Learn to", /*#__PURE__*/React.createElement("br", null), "Speak ", /*#__PURE__*/React.createElement("span", {
                style: {
                  fontFamily: 'var(--font-pixel)',
                  fontWeight: 400,
                  fontStretch: '100%',
                  fontSize: '0.86em',
                  letterSpacing: '-0.04em',
                  background: 'var(--yellow)',
                  padding: '0 0.06em'
                }
              }, "Durban")), /*#__PURE__*/React.createElement("div", {
                style: {
                  height: 2,
                  background: 'var(--ink)'
                }
              }), /*#__PURE__*/React.createElement("p", {
                style: {
                  margin: 0,
                  maxWidth: 560,
                  fontFamily: 'var(--font-mono)',
                  fontSize: mobile ? 14 : 16,
                  lineHeight: 1.55,
                  textWrap: 'pretty'
                }
              }, "32 lessons of real Durban slang. A final exam you can write right here. A certificate of fluency with your name on it \u2014 redeemable at Gateway, Durban."), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  gap: 12,
                  flexWrap: 'wrap'
                }
              }, /*#__PURE__*/React.createElement(Button, {
                variant: "primary",
                size: "lg",
                brackets: true,
                onClick: () => go('dict')
              }, "Begin Lesson 1"), /*#__PURE__*/React.createElement(Button, {
                size: "lg",
                onClick: () => go('exam')
              }, "Skip to exam"))), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  flexDirection: mobile ? 'column-reverse' : 'column',
                  justifyContent: 'space-between',
                  gap: 24,
                  flex: mobile ? '1 1 100%' : '0 1 340px',
                  minWidth: mobile ? 0 : 280,
                  borderLeft: mobile ? 'none' : '2px solid var(--ink)',
                  paddingLeft: mobile ? 0 : 40
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: mobile ? 'flex-start' : 'flex-end',
                  gap: 6
                }
              }, /*#__PURE__*/React.createElement(Barcode, {
                value: "LSD-2026-DBN",
                width: mobile ? 200 : 300,
                height: mobile ? 44 : 72
              }), /*#__PURE__*/React.createElement(RefCode, {
                prefix: "",
                code: "Course No. 4001 \xB7 Coastal dialect"
              })), /*#__PURE__*/React.createElement("div", {
                style: {
                  border: '2px solid var(--ink)'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '7px 12px',
                  background: 'var(--paper-3)',
                  borderBottom: '1px solid var(--ink)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.08em'
                }
              }, /*#__PURE__*/React.createElement("span", null, "ENROLMENT"), /*#__PURE__*/React.createElement("span", null, "OPEN")), /*#__PURE__*/React.createElement("div", {
                style: {
                  padding: '14px 12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 15,
                  fontWeight: 700,
                  lineHeight: 1.45
                }
              }, "Course fee: free.", /*#__PURE__*/React.createElement("br", null), "Fluency: guaranteed-ish."))), !mobile && /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  right: 10,
                  bottom: 10,
                  width: 28,
                  height: 28,
                  borderRight: '2px solid var(--ink)',
                  borderBottom: '2px solid var(--ink)'
                }
              }));
            }
            function Landing({
              go,
              mobile
            }) {
              const {
                FolderCard,
                StatusStrip
              } = landNS;
              const sections = [{
                id: 'dict',
                index: '01',
                title: 'The Dictionary',
                description: 'All 32 lessons, filed in one drawer. Pull a card. Hear it on the radio.',
                meta: '32 entries'
              }, {
                id: 'exam',
                index: '02',
                title: 'The Final Exam',
                description: 'Ten questions, written on site. Pass and the certificate prints itself.',
                meta: '10 questions'
              }, {
                id: 'act',
                index: '03',
                title: 'Activities',
                description: 'Six games for practical study. Some require a microphone. One requires 2pm.',
                meta: '6 games'
              }, {
                id: 'merch',
                index: '04',
                title: 'Merch',
                description: 'Course materials. Mostly tees. One cooler box, metaphorically.',
                meta: '8 items'
              }];
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: mobile ? 36 : 56,
                  paddingTop: mobile ? 20 : 48
                }
              }, /*#__PURE__*/React.createElement(HeroCard, {
                go: go,
                mobile: mobile
              }), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'grid',
                  gridTemplateColumns: mobile ? '1fr' : 'repeat(auto-fill, minmax(270px, 1fr))',
                  gap: mobile ? 22 : 24
                }
              }, sections.map((s, i) => /*#__PURE__*/React.createElement(FolderCard, _extends({
                key: s.id
              }, s, {
                active: !mobile && i === 1 ? undefined : undefined,
                tabOffset: mobile ? 0 : [0, 24, 48, 12][i],
                onClick: () => go(s.id)
              })))), /*#__PURE__*/React.createElement(StatusStrip, {
                items: ['Current ocean temperature: 24°C', 'Lessons: 32', 'Forks required: 0']
              }));
            }
            Object.assign(window, {
              Landing,
              HeroCard
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "ui_kits/microsite/Landing.jsx",
            error: String(e && e.message || e)
          });
        }

        // ui_kits/microsite/Merch.jsx
        try {
          (() => {
            const merchNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
            function MerchPreview({
              m
            }) {
              const {
                Halftone
              } = merchNS;
              const overlay = m.tee ? m.name : m.kind === 'Bumper sticker' ? 'FLUENT IN DURBAN' : m.kind === 'Cap' ? 'NATIVE SPEAKER' : null;
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  inset: 0
                }
              }, /*#__PURE__*/React.createElement(Halftone, {
                height: "100%",
                dot: 5,
                placeholder: m.kind === 'Bundle' || m.kind === 'Towel' ? 'beach' : 'product'
              }), overlay && /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'absolute',
                  left: '50%',
                  top: '44%',
                  transform: 'translate(-50%,-50%)',
                  background: 'var(--paper-2)',
                  border: '2px solid var(--ink)',
                  padding: '6px 10px',
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 800,
                  fontStretch: '88%',
                  fontSize: m.tee ? 34 : 15,
                  lineHeight: 1,
                  whiteSpace: 'nowrap'
                }
              }, overlay));
            }
            function Merch({
              cart,
              setCart
            }) {
              const {
                SpecCard,
                Button,
                Dialog,
                Icon
              } = merchNS;
              const [added, setAdded] = React.useState(null);
              const items = window.LSD_DATA.merch;
              return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
                index: "04",
                kicker: "Course materials",
                title: "Merch",
                right: /*#__PURE__*/React.createElement("div", {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    border: '2px solid var(--ink)',
                    background: 'var(--paper-2)',
                    padding: '10px 14px',
                    boxShadow: 'var(--shadow-hard-sm)'
                  }
                }, /*#__PURE__*/React.createElement(Icon, {
                  name: "cooler-box",
                  size: 40
                }), /*#__PURE__*/React.createElement("div", {
                  style: {
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    lineHeight: 1.4
                  }
                }, /*#__PURE__*/React.createElement("b", null, "Cooler box"), /*#__PURE__*/React.createElement("br", null), cart, " item", cart === 1 ? '' : 's', " \xB7 kept cold"))
              }), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
                  gap: 24
                }
              }, items.map(m => /*#__PURE__*/React.createElement(SpecCard, {
                key: m.id,
                refCode: m.id,
                meta: m.kind,
                label: m.tee ? 'Tee' : m.name,
                crosshair: false,
                previewHeight: 250,
                sourceLabel: "PRICE",
                sourceTag: m.price,
                source: m.desc,
                interactive: true,
                footer: /*#__PURE__*/React.createElement(Button, {
                  size: "sm",
                  variant: "accent",
                  block: true,
                  onClick: () => {
                    setCart(cart + 1);
                    setAdded(m);
                  }
                }, "Vy to checkout")
              }, /*#__PURE__*/React.createElement(MerchPreview, {
                m: m
              })))), added && /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'fixed',
                  right: 40,
                  bottom: 40,
                  zIndex: 30
                }
              }, /*#__PURE__*/React.createElement(Dialog, {
                title: "cooler_box.exe",
                kind: "success",
                heading: "Packed in the cooler.",
                width: 360,
                onClose: () => setAdded(null),
                actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
                  size: "sm",
                  onClick: () => setAdded(null)
                }, "Keep shopping"), /*#__PURE__*/React.createElement(Button, {
                  size: "sm",
                  variant: "primary",
                  onClick: () => setAdded(null)
                }, "Chow now"))
              }, added.name, " (", added.kind, ") \u2014 ", added.price, ". Kept cold until checkout.")));
            }
            Object.assign(window, {
              Merch
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "ui_kits/microsite/Merch.jsx",
            error: String(e && e.message || e)
          });
        }

        // ui_kits/microsite/Shell.jsx
        try {
          (() => {
            const shellNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
            const NAV_ITEMS = [{
              id: 'home',
              index: '00',
              label: 'Index'
            }, {
              id: 'dict',
              index: '01',
              label: 'The Dictionary'
            }, {
              id: 'exam',
              index: '02',
              label: 'The Final Exam'
            }, {
              id: 'act',
              index: '03',
              label: 'Activities'
            }, {
              id: 'merch',
              index: '04',
              label: 'Merch'
            }];
            function Masthead({
              page,
              go,
              cart = 0,
              mobile
            }) {
              const {
                FolderTabs,
                Icon,
                RefCode
              } = shellNS;
              return /*#__PURE__*/React.createElement("header", {
                style: {
                  position: 'sticky',
                  top: 0,
                  zIndex: 20,
                  background: 'var(--paper)',
                  paddingTop: mobile ? 12 : 18
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  maxWidth: 'var(--page-max)',
                  margin: '0 auto',
                  padding: mobile ? '0 16px' : '0 64px'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  paddingBottom: 12
                }
              }, /*#__PURE__*/React.createElement("button", {
                onClick: () => go('home'),
                style: {
                  all: 'unset',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 14
                }
              }, /*#__PURE__*/React.createElement("span", {
                style: {
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 800,
                  fontStretch: '88%',
                  fontSize: mobile ? 17 : 20,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em'
                }
              }, "Learn to Speak Durban"), !mobile && /*#__PURE__*/React.createElement(RefCode, {
                code: "LSD-2026"
              })), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12
                }
              }, !mobile && /*#__PURE__*/React.createElement("span", {
                style: {
                  color: 'var(--ink-3)'
                }
              }, "Ocean 24\xB0C \xB7 Tide: going out"), /*#__PURE__*/React.createElement("button", {
                onClick: () => go('merch'),
                "aria-label": "Cooler box",
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  border: '2px solid var(--ink)',
                  background: cart ? 'var(--yellow)' : 'var(--paper-2)',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  fontWeight: 700
                }
              }, /*#__PURE__*/React.createElement(shellNS.Icon, {
                name: "cooler-box",
                size: 20
              }), String(cart).padStart(2, '0')))), !mobile && /*#__PURE__*/React.createElement(FolderTabs, {
                items: NAV_ITEMS,
                active: page,
                onChange: go
              })));
            }
            function Footer({
              mobile
            }) {
              const {
                Barcode,
                RefCode
              } = shellNS;
              return /*#__PURE__*/React.createElement("footer", {
                style: {
                  marginTop: 96,
                  borderTop: '2px solid var(--ink)',
                  background: 'var(--paper-2)'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  maxWidth: 'var(--page-max)',
                  margin: '0 auto',
                  padding: mobile ? '24px 16px 32px' : '28px 64px 36px',
                  display: 'flex',
                  flexDirection: mobile ? 'column' : 'row',
                  gap: 24,
                  alignItems: mobile ? 'flex-start' : 'center',
                  justifyContent: 'space-between'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 14
                }
              }, "Learn to Speak Durban. A public service by Gateway."), /*#__PURE__*/React.createElement(RefCode, {
                code: "LSD-2026 \xB7 All lessons filed"
              })), /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20
                }
              }, !mobile && /*#__PURE__*/React.createElement(Barcode, {
                value: "GATEWAY-DBN",
                width: 120,
                height: 34
              }), /*#__PURE__*/React.createElement("div", {
                style: {
                  width: 150,
                  height: 52,
                  border: '2px dashed var(--ink-3)',
                  display: 'grid',
                  placeItems: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-3)'
                }
              }, "Gateway logo"))));
            }
            function PageHead({
              index,
              title,
              kicker,
              right
            }) {
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  gap: 32,
                  margin: '48px 0 32px'
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase'
                }
              }, index, " \u2014 ", kicker), /*#__PURE__*/React.createElement("h1", {
                style: {
                  margin: 0,
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 800,
                  fontStretch: '88%',
                  fontSize: 'clamp(48px, 6.2vw, 88px)',
                  lineHeight: 0.88,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase'
                }
              }, title)), right);
            }
            Object.assign(window, {
              Masthead,
              Footer,
              PageHead,
              NAV_ITEMS
            });
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "ui_kits/microsite/Shell.jsx",
            error: String(e && e.message || e)
          });
        }

        // ui_kits/microsite/data.js
        try {
          (() => {
            window.LSD_DATA = {
              words: [['01', 'Aweh', 'interj.', 'The standard greeting. Also: yes, agreed, understood, and I see you. One word, four meanings, zero effort.', 'Aweh, bru. Long time.'], ['02', 'Ekse', 'interj.', 'Used to open a sentence, or to request attention. Roughly "I say", but with better posture.', 'Ekse, is that your bunny?'], ['03', 'Kiff', 'adj.', 'Good. Excellent. Of acceptable quality to a person standing on a beach.', 'The water is kiff today.'], ['04', 'Chips!', 'interj.', 'A warning. Shouted to alert others that trouble — or a parent — is approaching. Not a snack.', 'Chips! Chips! Here comes the lifeguard.'], ['05', 'Baggies', 'n. pl.', 'Loose board shorts. The formal attire of the coast. Required at all lessons.', 'He wore baggies to the wedding. Nobody minded.'], ['06', 'Logging', 'v.', 'Staying over at someone\u2019s place, usually for longer than discussed.', 'I\u2019m logging by my cousin until Sunday. Or March.'], ['07', 'One time', 'adv.', 'Truly. Honestly. Confirms that the preceding statement is not a joke.', 'That was the best bunny of my life, one time.'], ['08', 'Scheming', 'v.', 'Thinking; reckoning; forming an opinion. No actual scheme required.', 'I\u2019m scheming it\u2019s going to rain.'], ['09', 'Choon', 'v.', 'To tell or say something to someone. Often used before important information.', 'I\u2019m choon you, the surf is pumping.'], ['10', 'Gqom', 'n.', 'Durban\u2019s own electronic dance music. Pronounced with a click. Practise the click in GAME-01.', 'The gqom was so loud the windows were dancing.'], ['11', 'Jol', 'n. / v.', 'A party, or the act of having one. Can describe an evening, a weekend or an attitude.', 'Big jol at the beach tonight.'], ['12', 'Larney', 'adj.', 'Fancy. Posh. Slightly too expensive for baggies.', 'Look at you in your larney shoes.'], ['13', 'Bunny', 'n.', 'A quarter loaf of bread, hollowed and filled with curry. Eaten with the hands. The bread is the plate. The bread is also the spoon.', 'Quarter mutton bunny, extra gravy. No fork.'], ['14', 'Shap', 'interj.', 'Fine. Good. Agreed. A complete conversation in one syllable.', 'Shap, see you at six.'], ['15', 'Shot', 'interj.', 'Thanks. Also: well done. Delivered with a nod.', 'Shot for the lift, bru.'], ['16', 'Ducking out', 'v. phr.', 'Leaving. Usually quietly, usually early, usually towards the beach.', 'I\u2019m ducking out before the traffic.'], ['17', 'The coast', 'n.', 'Durban and its surroundings, referred to as though there were no other coast.', 'We\u2019re going down the coast for the weekend.'], ['18', 'Chow', 'v. / n.', 'To eat; food. "Chow now" is also a farewell.', 'Let\u2019s chow, I\u2019m starving.'], ['19', 'Prawn', 'n.', 'A person. Applied with mild affection and moderate suspicion.', 'That prawn took my parking.'], ['20', 'Kook', 'n.', 'A beginner surfer, or anyone who has bought more gear than they have used.', 'Brand new board, never been wet. Total kook.'], ['21', 'Robot', 'n.', 'A traffic light. Not a machine. Turn left at the second robot.', 'Turn left at the robot by the garage.'], ['22', 'Smaak', 'v.', 'To like, very much. Applies to people, food and weather.', 'I smaak this weather.'], ['23', 'Dala', 'v.', 'To do. To get on with it. "Dala what you must."', 'Just dala what you must, bru.'], ['24', 'Laatie', 'n.', 'A young person. A kid. Anyone younger than the speaker.', 'The laatie paddled out further than all of us.'], ['25', 'Bru', 'n.', 'Brother. Friend. Stranger at a robot. The most important word in this course.', 'Shot, bru.'], ['26', 'Vaalie', 'n.', 'A visitor from inland, identifiable by socks with slops and an umbrella with cup holders.', 'Spot the vaalie: he\u2019s the one with the gazebo.'], ['27', 'Pozi', 'n.', 'Home; one\u2019s place. Where you are logging tonight.', 'Come through to my pozi later.'], ['28', 'Vy', 'v.', 'To go. To leave. Also used to suggest that others go.', 'Let\u2019s vy, the bunnies are getting cold.'], ['29', 'Tops', 'adj.', 'The best available. Also: at most.', 'The swell was tops this morning.'], ['30', 'No laka', 'interj.', 'No. A firm no. Pairs well with forks and side salads.', 'A fork? No laka.'], ['31', 'Mfethu', 'n.', 'Brother; my guy. Warmer than bru, if that were possible.', 'Mfethu! Where have you been?'], ['32', 'Yano', 'interj.', '"You know." Placed anywhere in a sentence for rhythm.', 'It\u2019s hot, yano, so we went swimming.']],
              exam: [{
                q: 'A friend greets you on the promenade. The correct response is:',
                a: ['Good afternoon, sir.', 'Aweh.', 'Please state your business.'],
                c: 1
              }, {
                q: 'Someone shouts "Chips!" You should:',
                a: ['Look out. Something is coming.', 'Order a large portion.', 'Check the menu.'],
                c: 0
              }, {
                q: 'Which item is required at all lessons?',
                a: ['A wetsuit.', 'Baggies.', 'A fork.'],
                c: 1
              }, {
                q: 'The bunny arrives with a side salad. You:',
                a: ['Ask for a fork', 'Call the police', 'Both — this is a crime scene.'],
                c: 2
              }, {
                q: '"Turn left at the robot" means:',
                a: ['Turn left at the traffic light.', 'Follow the machine.', 'Turn around immediately.'],
                c: 0
              }, {
                q: 'Your cousin has been logging at your pozi since December. It is now March. This is:',
                a: ['Unusual.', 'Normal.', 'A legal matter.'],
                c: 1
              }, {
                q: 'A visitor arrives with socks, slops and a gazebo with cup holders. This is a:',
                a: ['Laatie.', 'Kook.', 'Vaalie.'],
                c: 2
              }, {
                q: '"I smaak this weather" expresses:',
                a: ['Strong approval.', 'A complaint.', 'A weather warning.'],
                c: 0
              }, {
                q: 'Complete the farewell: "Chow ___"',
                a: ['later', 'now', 'never'],
                c: 1
              }, {
                q: 'Someone thanks you for a lift. The fluent reply is:',
                a: ['You are welcome.', 'Shap.', 'Please leave a review.'],
                c: 1
              }],
              leaderboard: [['BunnyChowBrad', '10/10', '12'], ['NoLakaNelly', '10/10', '11'], ['ShapShapSipho', '9/10', '9'], ['VaalieInRecovery', '8/10', '7'], ['KiffKelly', '8/10', '6'], ['DalaDave', '7/10', '4']],
              merch: [{
                id: 'MERCH-01',
                name: 'AWEH.',
                kind: 'Tee',
                price: 'R 349',
                desc: 'One-word slang tee. Heavyweight cotton.',
                tee: true
              }, {
                id: 'MERCH-02',
                name: 'EKSE.',
                kind: 'Tee',
                price: 'R 349',
                desc: 'One-word slang tee. Opens conversations.',
                tee: true
              }, {
                id: 'MERCH-03',
                name: 'SHAP.',
                kind: 'Tee',
                price: 'R 349',
                desc: 'One-word slang tee. Closes them.',
                tee: true
              }, {
                id: 'MERCH-04',
                name: 'Fluent in Durban',
                kind: 'Bumper sticker',
                price: 'R 59',
                desc: 'For the car. Visible from the robot.'
              }, {
                id: 'MERCH-05',
                name: 'Native Speaker',
                kind: 'Cap',
                price: 'R 279',
                desc: 'Embroidered. Worn backwards by graduates only.'
              }, {
                id: 'MERCH-06',
                name: 'Certificate of Fluency',
                kind: 'Framed',
                price: 'R 499',
                desc: 'Your certificate, framed. Name included.'
              }, {
                id: 'MERCH-07',
                name: 'Beach Towel',
                kind: 'Towel',
                price: 'R 449',
                desc: 'Full glossary printed edge to edge.'
              }, {
                id: 'MERCH-08',
                name: 'Kook Starter Pack',
                kind: 'Bundle',
                price: 'R 399',
                desc: 'Just baggies and sunscreen. Everything you actually need.'
              }]
            };
          })();
        } catch (e) {
          __ds_ns.__errors.push({
            path: "ui_kits/microsite/data.js",
            error: String(e && e.message || e)
          });
        }
        __ds_ns.FolderCard = __ds_scope.FolderCard;
        __ds_ns.SpecCard = __ds_scope.SpecCard;
        __ds_ns.Barcode = __ds_scope.Barcode;
        __ds_ns.Button = __ds_scope.Button;
        __ds_ns.LabelChip = __ds_scope.LabelChip;
        __ds_ns.RefCode = __ds_scope.RefCode;
        __ds_ns.Stamp = __ds_scope.Stamp;
        __ds_ns.StatusStrip = __ds_scope.StatusStrip;
        __ds_ns.AnswerOption = __ds_scope.AnswerOption;
        __ds_ns.Input = __ds_scope.Input;
        __ds_ns.ProgressBar = __ds_scope.ProgressBar;
        __ds_ns.Halftone = __ds_scope.Halftone;
        __ds_ns.Icon = __ds_scope.Icon;
        __ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;
        __ds_ns.ICONS = __ds_scope.ICONS;
        __ds_ns.FolderTabs = __ds_scope.FolderTabs;
        __ds_ns.IndexTab = __ds_scope.IndexTab;
        __ds_ns.Dialog = __ds_scope.Dialog;
        __ds_ns.Window = __ds_scope.Window;
      })();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "site/js/lsd-components.js",
      error: String(e && e.message || e)
    });
  }

  // site/js/merch.jsx
  try {
    (() => {
      const merchNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      function MerchPreview({
        m
      }) {
        const {
          Halftone
        } = merchNS;
        const overlay = m.tee ? m.name : m.kind === 'Bumper sticker' ? 'FLUENT IN DURBAN' : m.kind === 'Cap' ? 'NATIVE SPEAKER' : null;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0
          }
        }, /*#__PURE__*/React.createElement(Halftone, {
          height: "100%",
          dot: 5,
          placeholder: m.kind === 'Bundle' || m.kind === 'Towel' ? 'beach' : 'product'
        }), overlay && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            left: '50%',
            top: '44%',
            transform: 'translate(-50%,-50%)',
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            padding: '6px 10px',
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: m.tee ? 34 : 15,
            lineHeight: 1,
            whiteSpace: 'nowrap'
          }
        }, overlay));
      }
      function Merch({
        cart,
        setCart
      }) {
        const {
          SpecCard,
          Button,
          Dialog,
          Icon
        } = merchNS;
        const [added, setAdded] = React.useState(null);
        const items = window.LSD_DATA.merch;
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
          index: "03",
          kicker: "Course materials \xB7 compulsory-ish",
          title: "Merch",
          right: /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              border: '2px solid var(--ink)',
              background: 'var(--paper-2)',
              padding: '10px 14px',
              boxShadow: 'var(--shadow-hard-sm)'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "cooler-box",
            size: 40
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              lineHeight: 1.4
            }
          }, /*#__PURE__*/React.createElement("b", null, "Cooler box"), /*#__PURE__*/React.createElement("br", null), cart, " item", cart === 1 ? '' : 's', " \xB7 kept cold"))
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: 24
          }
        }, items.map(m => /*#__PURE__*/React.createElement(SpecCard, {
          key: m.id,
          refCode: m.id,
          meta: m.kind,
          label: m.tee ? 'Tee' : m.name,
          crosshair: false,
          previewHeight: 250,
          sourceLabel: "PRICE",
          sourceTag: m.price,
          source: m.desc,
          interactive: true,
          footer: /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "accent",
            block: true,
            onClick: () => {
              setCart(cart + 1);
              setAdded(m);
            }
          }, "Vy to checkout")
        }, /*#__PURE__*/React.createElement(MerchPreview, {
          m: m
        })))), added && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'fixed',
            right: 40,
            bottom: 40,
            zIndex: 30
          }
        }, /*#__PURE__*/React.createElement(Dialog, {
          title: "cooler_box.exe",
          kind: "success",
          heading: "Packed in the cooler.",
          width: 360,
          onClose: () => setAdded(null),
          actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            onClick: () => setAdded(null)
          }, "Keep shopping"), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            onClick: () => setAdded(null)
          }, "Chow now"))
        }, added.name, " (", added.kind, ") \u2014 ", added.price, ". Kept cold until checkout. Like a good cooler box should.")));
      }
      Object.assign(window, {
        Merch
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "site/js/merch.jsx",
      error: String(e && e.message || e)
    });
  }

  // site/js/shell.jsx
  try {
    (() => {
      const shellNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      const NAV_ITEMS = [{
        id: 'home',
        index: '00',
        label: 'Index'
      }, {
        id: 'dict',
        index: '01',
        label: 'Dictionary'
      }, {
        id: 'act',
        index: '02',
        label: 'Activities'
      }, {
        id: 'merch',
        index: '03',
        label: 'Merch'
      }, {
        id: 'submit',
        index: '04',
        label: 'Submit'
      }, {
        id: 'study',
        index: '05',
        label: 'Study'
      }, {
        id: 'card',
        index: '06',
        label: 'ID Card'
      }, {
        id: 'exam',
        index: '07',
        label: 'Final Exam'
      }];
      function Masthead({
        page,
        go,
        cart = 0,
        mobile,
        compactNav
      }) {
        const {
          FolderTabs,
          Icon,
          RefCode
        } = shellNS;
        return /*#__PURE__*/React.createElement("header", {
          style: {
            position: 'sticky',
            top: 0,
            zIndex: 20,
            background: 'var(--paper)',
            paddingTop: mobile ? 12 : 18
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--page-max)',
            margin: '0 auto',
            padding: mobile ? '0 16px' : '0 64px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            paddingBottom: 12
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => go('home'),
          style: {
            all: 'unset',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'baseline',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: mobile ? 17 : 20,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em'
          }
        }, "Learn to Speak Durban"), !mobile && /*#__PURE__*/React.createElement(RefCode, {
          code: "LSD-2026"
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontFamily: 'var(--font-mono)',
            fontSize: 12
          }
        }, !mobile && /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--ink-3)'
          }
        }, "Ocean 24\xB0C \xB7 Tide: going out \xB7 Vibes: tops"), /*#__PURE__*/React.createElement("button", {
          onClick: () => go('merch'),
          "aria-label": "Cooler box",
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            border: '2px solid var(--ink)',
            background: cart ? 'var(--yellow)' : 'var(--paper-2)',
            padding: '5px 10px',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            fontWeight: 700
          }
        }, /*#__PURE__*/React.createElement(shellNS.Icon, {
          name: "cooler-box",
          size: 20
        }), String(cart).padStart(2, '0')))), !mobile && !compactNav && /*#__PURE__*/React.createElement(FolderTabs, {
          items: NAV_ITEMS,
          active: page,
          onChange: go
        })));
      }
      function Footer({
        mobile
      }) {
        const {
          Barcode,
          RefCode
        } = shellNS;
        return /*#__PURE__*/React.createElement("footer", {
          style: {
            marginTop: 96,
            borderTop: '2px solid var(--ink)',
            background: 'var(--paper-2)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--page-max)',
            margin: '0 auto',
            padding: mobile ? '24px 16px 32px' : '28px 64px 36px',
            display: 'flex',
            flexDirection: mobile ? 'column' : 'row',
            gap: 24,
            alignItems: mobile ? 'flex-start' : 'center',
            justifyContent: 'space-between'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 14
          }
        }, "Learn to Speak Durban. A public service by Gateway."), /*#__PURE__*/React.createElement(RefCode, {
          code: "LSD-2026 \xB7 No forks were harmed in the making of this website"
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 20
          }
        }, !mobile && /*#__PURE__*/React.createElement(Barcode, {
          value: "GATEWAY-DBN",
          width: 120,
          height: 34
        }), /*#__PURE__*/React.createElement("img", {
          src: window.__resources && window.__resources.gatewayLogo || (window.LSD_ASSETS || 'assets/') + 'logos/gateway-logo.png',
          alt: "Gateway",
          style: {
            width: mobile ? 64 : 76,
            height: 'auto',
            display: 'block'
          }
        }))));
      }
      function PageHead({
        index,
        title,
        kicker,
        right
      }) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 32,
            margin: '48px 0 32px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase'
          }
        }, index, " \u2014 ", kicker), /*#__PURE__*/React.createElement("h1", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: 'clamp(48px, 6.2vw, 88px)',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase'
          }
        }, title)), right);
      }
      Object.assign(window, {
        Masthead,
        Footer,
        PageHead,
        NAV_ITEMS
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "site/js/shell.jsx",
      error: String(e && e.message || e)
    });
  }

  // site/js/student-card.jsx
  try {
    (() => {
      const cardNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      const CARD_W = 1080,
        CARD_H = 1920;
      const LEVELS = [['VAALIE', 'Still wearing socks with slops'], ['KOOK', 'Owns a wetsuit. Working on it'], ['LAATIE', 'Young, keen, slightly sunburnt'], ['BRU', 'Says "shot" at robots'], ['FLUENT', 'Has never once asked for a fork']];
      const BAYER = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];
      function seeded(str) {
        let h = 2166136261;
        for (let i = 0; i < str.length; i++) {
          h ^= str.charCodeAt(i);
          h = Math.imul(h, 16777619);
        }
        return () => {
          h ^= h << 13;
          h ^= h >>> 17;
          h ^= h << 5;
          return (h >>> 0) % 10000 / 10000;
        };
      }
      function rrect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
      }
      function ditherPhoto(ctx, img, x, y, w, h, {
        cell,
        style,
        zoom,
        ink
      }) {
        const cols = Math.floor(w / cell),
          rows = Math.floor(h / cell);
        const off = document.createElement('canvas');
        off.width = cols;
        off.height = rows;
        const o = off.getContext('2d');
        const scale = Math.max(cols / img.width, rows / img.height) * zoom;
        const dw = img.width * scale,
          dh = img.height * scale;
        o.fillStyle = '#fff';
        o.fillRect(0, 0, cols, rows);
        o.drawImage(img, (cols - dw) / 2, (rows - dh) * 0.3, dw, dh);
        const d = o.getImageData(0, 0, cols, rows).data;
        const lum = new Float32Array(cols * rows);
        let mn = 1,
          mx = 0;
        for (let i = 0; i < cols * rows; i++) {
          const l = (0.299 * d[i * 4] + 0.587 * d[i * 4 + 1] + 0.114 * d[i * 4 + 2]) / 255;
          lum[i] = l;
          if (l < mn) mn = l;
          if (l > mx) mx = l;
        }
        const span = Math.max(0.2, mx - mn);
        ctx.fillStyle = ink;
        for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
          let l = (lum[r * cols + c] - mn) / span;
          l = Math.min(1, Math.max(0, (l - 0.5) * 1.25 + 0.5));
          const px = x + c * cell,
            py = y + r * cell;
          if (style === 'halftone') {
            const rad = cell * 0.66 * Math.sqrt(1 - l);
            if (rad > 0.4) {
              ctx.beginPath();
              ctx.arc(px + cell / 2, py + cell / 2, rad, 0, Math.PI * 2);
              ctx.fill();
            }
          } else if (l < (BAYER[r % 4][c % 4] + 0.5) / 16) ctx.fillRect(px, py, cell, cell);
        }
      }
      function drawStudentCard(canvas, o) {
        const ctx = canvas.getContext('2d');
        const css = getComputedStyle(document.documentElement);
        const ACC = css.getPropertyValue('--yellow').trim() || '#ff5a2e';
        const INK = '#111111',
          PAPER = '#ecebe4';
        const G = "'Switzer', 'Helvetica Neue', Arial, sans-serif",
          M = "'IBM Plex Mono', monospace",
          P = "'Geist Pixel', monospace";
        ctx.clearRect(0, 0, CARD_W, CARD_H);
        ctx.fillStyle = '#0b0b0b';
        ctx.fillRect(0, 0, CARD_W, CARD_H);
        const rnd = seeded('grain');
        for (let i = 0; i < 9000; i++) {
          ctx.fillStyle = `rgba(255,255,255,${0.02 + rnd() * 0.05})`;
          ctx.fillRect(rnd() * CARD_W, rnd() * CARD_H, 2, 2);
        }
        // badge holder
        ctx.fillStyle = 'rgba(255,255,255,0.045)';
        rrect(ctx, 90, 140, 900, 1700, 60);
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.7)';
        ctx.lineWidth = 4;
        rrect(ctx, 90, 140, 900, 1700, 60);
        ctx.stroke();
        ctx.strokeStyle = 'rgba(255,255,255,0.28)';
        ctx.lineWidth = 2;
        rrect(ctx, 106, 156, 868, 1668, 48);
        ctx.stroke();
        ctx.strokeStyle = 'rgba(255,255,255,0.75)';
        ctx.lineWidth = 5;
        rrect(ctx, 420, 210, 240, 64, 32);
        ctx.stroke();
        [[260, 242], [820, 242]].forEach(([cx, cy]) => {
          ctx.beginPath();
          ctx.arc(cx, cy, 30, 0, Math.PI * 2);
          ctx.stroke();
        });
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'rgba(255,255,255,0.45)';
        [322, 338, 362].forEach(yy => {
          ctx.beginPath();
          ctx.moveTo(106, yy);
          ctx.lineTo(974, yy);
          ctx.stroke();
        });
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        for (let xx = 120; xx < 962; xx += 9) ctx.fillRect(xx, 384, 4, 22);
        // paper insert
        const X0 = 150,
          Y0 = 440,
          PW = 780,
          PH = 1340,
          L = 200,
          R = 880;
        ctx.fillStyle = PAPER;
        ctx.fillRect(X0, Y0, PW, PH);
        const rule = (yy, w = 3) => {
          ctx.fillStyle = INK;
          ctx.fillRect(L, yy, R - L, w);
        };
        ctx.fillStyle = INK;
        ctx.textBaseline = 'alphabetic';
        ctx.font = `500 30px ${M}`;
        ctx.fillText('STUDENT:', L, 520);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#6b6a66';
        ctx.fillText('REF: LSD-2026', R, 520);
        ctx.textAlign = 'left';
        rule(544, 2);
        // name, fitted
        const words = (o.name || 'Your Name').trim().split(/\s+/);
        const lines = words.length > 1 ? [words[0], words.slice(1).join(' ')] : [words[0]];
        let fs = lines.length > 1 ? 112 : 124;
        ctx.font = `800 ${fs}px ${G}`;
        while (fs > 56 && Math.max(...lines.map(t => ctx.measureText(t).width)) > R - L) {
          fs -= 4;
          ctx.font = `800 ${fs}px ${G}`;
        }
        ctx.fillStyle = INK;
        const nameTop = 544 + 22 + fs * 0.74;
        lines.forEach((t, i) => ctx.fillText(t, L - 4, nameTop + i * fs * 0.92));
        const ruleY = Math.round(nameTop + (lines.length - 1) * fs * 0.92 + 30);
        rule(ruleY, 2);
        // photo + vertical barcode
        const PY = ruleY + 36,
          PHt = 1376 - PY,
          PWd = 540;
        if (o.img) ditherPhoto(ctx, o.img, L, PY, PWd, PHt, {
          cell: o.cell,
          style: o.style,
          zoom: o.zoom,
          ink: INK
        });else {
          ctx.strokeStyle = INK;
          ctx.lineWidth = 3;
          ctx.setLineDash([14, 10]);
          ctx.strokeRect(L + 2, PY + 2, PWd - 4, PHt - 4);
          ctx.setLineDash([]);
          ctx.font = `400 56px ${P}`;
          ctx.textAlign = 'center';
          ctx.fillText('FACE', L + PWd / 2, PY + PHt / 2 - 10);
          ctx.font = `500 24px ${M}`;
          ctx.fillText('GOES HERE. ANY FACE.', L + PWd / 2, PY + PHt / 2 + 34);
          ctx.fillText('YOURS IS RECOMMENDED.', L + PWd / 2, PY + PHt / 2 + 66);
          ctx.textAlign = 'left';
        }
        const br = seeded(o.no + o.name);
        let by = PY;
        ctx.fillStyle = INK;
        while (by < PY + PHt) {
          const t = 2 + Math.floor(br() * 9);
          if (br() > 0.35) ctx.fillRect(R - 96, by, 96, t);
          by += t + 2 + Math.floor(br() * 5);
        }
        // pixel stamp on photo corner
        ctx.save();
        ctx.translate(L + PWd - 70, PY + PHt - 40);
        ctx.rotate(-0.16);
        ctx.fillStyle = ACC;
        ctx.beginPath();
        ctx.arc(0, 0, 78, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = INK;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, 70, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = INK;
        ctx.textAlign = 'center';
        ctx.font = `500 15px ${M}`;
        ctx.fillText('ENROLLED', 0, -26);
        ctx.font = `400 34px ${P}`;
        ctx.fillText(o.level, 0, 12);
        ctx.font = `500 15px ${M}`;
        ctx.fillText('2026', 0, 40);
        ctx.restore();
        ctx.textAlign = 'left';
        // spec rows
        ctx.font = `600 30px ${M}`;
        ctx.fillStyle = INK;
        ctx.fillText('ID: ' + o.no, L, 1420);
        const rows = [['FLUENCY LEVEL', o.level], ['FAVOURITE WORD', o.word.toUpperCase()], ['FORKS ON PERSON', '0'], ['VALID UNTIL', 'LOW TIDE']];
        ctx.font = `400 24px ${M}`;
        rows.forEach(([k, v], i) => {
          const yy = 1474 + i * 38;
          ctx.fillStyle = '#3a3a38';
          ctx.textAlign = 'left';
          ctx.fillText(k, L, yy);
          ctx.fillStyle = INK;
          ctx.textAlign = 'right';
          ctx.font = `700 24px ${M}`;
          ctx.fillText(v, R, yy);
          ctx.font = `400 24px ${M}`;
          ctx.fillStyle = '#9a9993';
          ctx.fillRect(L, yy + 12, R - L, 1);
        });
        ctx.textAlign = 'left';
        rule(1636, 2);
        ctx.fillStyle = INK;
        ctx.font = `800 58px ${G}`;
        ctx.fillText('A public service', L - 2, 1706);
        ctx.fillText('by Gateway.', L - 2, 1758);
        if (o.logo) ctx.drawImage(o.logo, R - 112, 1652, 112, 112);
        // outside footer
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.font = `500 22px ${M}`;
        ctx.textAlign = 'center';
        ctx.fillText('LEARN TO SPEAK DURBAN · A PUBLIC SERVICE BY GATEWAY', CARD_W / 2, 1888);
        ctx.textAlign = 'left';
      }
      function StudentCard({
        mobile
      }) {
        const {
          Window,
          Button,
          Icon,
          StatusStrip
        } = cardNS;
        const canvasRef = React.useRef(null);
        const fileRef = React.useRef(null);
        const [img, setImg] = React.useState(null);
        const [name, setName] = React.useState(() => localStorage.getItem('lsd-name') || 'Thandi Mkhize');
        const [level, setLevel] = React.useState('BRU');
        const [word, setWord] = React.useState('Shap');
        const [style, setStyle] = React.useState('pixel');
        const [cell, setCell] = React.useState(8);
        const [zoom, setZoom] = React.useState(1);
        const [ready, setReady] = React.useState(false);
        const [drag, setDrag] = React.useState(false);
        const [note, setNote] = React.useState(null);
        const [logo, setLogo] = React.useState(null);
        React.useEffect(() => {
          const im = new Image();
          im.onload = () => setLogo(im);
          im.src = window.__resources && window.__resources.gatewayLogo || (window.LSD_ASSETS || 'assets/') + 'logos/gateway-logo.png';
        }, []);
        const no = React.useMemo(() => localStorage.getItem('lsd-student') || 'LSD-2026-04417', []);
        const words = window.LSD_DATA.words.map(w => w[1]);
        React.useEffect(() => {
          Promise.all(["800 120px Switzer", "400 24px 'IBM Plex Mono'", "500 24px 'IBM Plex Mono'", "700 24px 'IBM Plex Mono'", "400 40px 'Geist Pixel'"].map(f => document.fonts.load(f))).catch(() => {}).then(() => setReady(true));
        }, []);
        React.useEffect(() => {
          if (canvasRef.current) drawStudentCard(canvasRef.current, {
            img,
            name,
            level,
            word,
            style,
            cell,
            zoom,
            no,
            logo
          });
        }, [img, name, level, word, style, cell, zoom, ready, logo]);
        const load = file => {
          if (!file || !file.type.startsWith('image/')) {
            setNote('That is not a photo. Gateway checked.');
            return;
          }
          const im = new Image();
          im.onload = () => {
            setImg(im);
            setNote(null);
          };
          im.src = URL.createObjectURL(file);
        };
        const blob = () => new Promise(res => canvasRef.current.toBlob(res, 'image/png'));
        const save = async () => {
          const b = await blob();
          const a = document.createElement('a');
          a.href = URL.createObjectURL(b);
          a.download = 'lsd-student-card.png';
          a.click();
          setNote('Saved. Post it to your story. Wait for the DMs.');
        };
        const canShare = typeof navigator !== 'undefined' && navigator.canShare && navigator.canShare({
          files: [new File([''], 'x.png', {
            type: 'image/png'
          })]
        });
        const share = async () => {
          const b = await blob();
          try {
            await navigator.share({
              files: [new File([b], 'lsd-student-card.png', {
                type: 'image/png'
              })],
              text: CAPTION
            });
          } catch (e) {}
        };
        const CAPTION = 'Officially enrolled in Learn to Speak Durban, a public service by Gateway. Fluency: guaranteed-ish. Forks: 0. #LearnToSpeakDurban';
        const copy = () => {
          navigator.clipboard && navigator.clipboard.writeText(CAPTION);
          setNote('Caption copied. Paste responsibly.');
        };
        const lab = {
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '6px 10px',
          background: 'var(--paper-3)',
          borderBottom: '1px solid var(--ink)'
        };
        const box = {
          display: 'flex',
          flexDirection: 'column',
          border: '2px solid var(--ink)',
          background: 'var(--paper-2)'
        };
        const sel = {
          border: 'none',
          outline: 'none',
          background: 'transparent',
          padding: 12,
          fontFamily: 'var(--font-mono)',
          fontSize: 15,
          color: 'var(--ink)',
          borderRadius: 0,
          appearance: 'none',
          cursor: 'pointer'
        };
        const seg = (opts, val, set) => /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            borderTop: 'none'
          }
        }, opts.map(([v, l], i) => /*#__PURE__*/React.createElement("button", {
          key: v,
          type: "button",
          onClick: () => set(v),
          style: {
            flex: 1,
            padding: '10px 8px',
            border: 'none',
            borderLeft: i ? '1px solid var(--ink)' : 'none',
            background: val === v ? 'var(--ink)' : 'transparent',
            color: val === v ? 'var(--paper-2)' : 'var(--ink)',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            fontWeight: 700,
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }
        }, l)));
        const previewH = mobile ? 560 : 760;
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
          index: "06",
          kicker: "Identification \xB7 for the gram",
          title: "Student Card",
          right: /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              maxWidth: 330,
              lineHeight: 1.5
            }
          }, "Proof of enrolment. Upload a photo and Gateway pixelates it, for privacy and for style. Post it to your story. Wait for the DMs.")
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 48,
            alignItems: 'flex-start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 380px',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 20
          }
        }, /*#__PURE__*/React.createElement(Window, {
          title: "student_card.exe",
          bar: "accent",
          meta: "Form ID-07",
          controls: ['min', 'close'],
          shadow: "lg",
          padding: 0
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            padding: mobile ? 16 : 22
          }
        }, /*#__PURE__*/React.createElement("div", {
          onDragOver: e => {
            e.preventDefault();
            setDrag(true);
          },
          onDragLeave: () => setDrag(false),
          onDrop: e => {
            e.preventDefault();
            setDrag(false);
            load(e.dataTransfer.files[0]);
          },
          onClick: () => fileRef.current.click(),
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: 16,
            border: '2px dashed var(--ink)',
            background: drag ? 'var(--yellow)' : 'var(--bg-dots)',
            cursor: 'pointer'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 'none',
            width: 56,
            height: 56,
            display: 'grid',
            placeItems: 'center',
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: img ? 'check' : 'human',
          size: 32
        })), /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            fontFamily: 'var(--font-mono)'
          }
        }, /*#__PURE__*/React.createElement("b", {
          style: {
            fontSize: 14,
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }
        }, img ? 'Face received' : 'Upload a face'), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            color: 'var(--ink-2)'
          }
        }, img ? 'Click to swap it for a better angle.' : 'Drop a selfie or click. Gateway does not judge. The pixels might.')), /*#__PURE__*/React.createElement("input", {
          ref: fileRef,
          type: "file",
          accept: "image/*",
          style: {
            display: 'none'
          },
          onChange: e => load(e.target.files[0])
        })), /*#__PURE__*/React.createElement(Field, {
          label: "Name on card",
          value: name,
          onChange: setName,
          placeholder: "First and last. Or just first, like a legend.",
          autoComplete: "name"
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement("label", {
          style: box
        }, /*#__PURE__*/React.createElement("span", {
          style: lab
        }, "Fluency level"), /*#__PURE__*/React.createElement("select", {
          value: level,
          onChange: e => setLevel(e.target.value),
          style: sel
        }, LEVELS.map(([v]) => /*#__PURE__*/React.createElement("option", {
          key: v,
          value: v
        }, v)))), /*#__PURE__*/React.createElement("label", {
          style: box
        }, /*#__PURE__*/React.createElement("span", {
          style: lab
        }, "Favourite word"), /*#__PURE__*/React.createElement("select", {
          value: word,
          onChange: e => setWord(e.target.value),
          style: sel
        }, words.map(w => /*#__PURE__*/React.createElement("option", {
          key: w,
          value: w
        }, w))))), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--ink-2)',
            marginTop: -4
          }
        }, level, ": ", LEVELS.find(l => l[0] === level)[1], "."), /*#__PURE__*/React.createElement("div", {
          style: box
        }, /*#__PURE__*/React.createElement("span", {
          style: lab
        }, "Pixel treatment"), seg([['pixel', 'Pixel'], ['halftone', 'Halftone']], style, setStyle)), /*#__PURE__*/React.createElement("div", {
          style: box
        }, /*#__PURE__*/React.createElement("span", {
          style: lab
        }, "Resolution"), seg([[14, 'Chunky'], [8, 'Classic'], [5, 'Fine']], cell, setCell)), /*#__PURE__*/React.createElement("label", {
          style: {
            ...box,
            padding: 0
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            ...lab,
            display: 'flex',
            justifyContent: 'space-between'
          }
        }, /*#__PURE__*/React.createElement("span", null, "Zoom"), /*#__PURE__*/React.createElement("span", null, Math.round(zoom * 100), "%")), /*#__PURE__*/React.createElement("input", {
          type: "range",
          min: "1",
          max: "2.2",
          step: "0.05",
          value: zoom,
          onChange: e => setZoom(+e.target.value),
          style: {
            margin: 14,
            accentColor: 'var(--ink)'
          }
        })))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "lg",
          block: true,
          brackets: true,
          onClick: save
        }, "Save for the story"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10
          }
        }, canShare && /*#__PURE__*/React.createElement(Button, {
          block: true,
          onClick: share
        }, "Share"), /*#__PURE__*/React.createElement(Button, {
          block: true,
          onClick: copy
        }, "Copy caption")), note && /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            fontWeight: 700,
            padding: '8px 10px',
            border: '2px solid var(--ink)',
            background: 'var(--yellow)'
          }
        }, note))), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '0 0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            alignItems: 'flex-start',
            maxWidth: '100%'
          }
        }, /*#__PURE__*/React.createElement("canvas", {
          ref: canvasRef,
          width: CARD_W,
          height: CARD_H,
          style: {
            display: 'block',
            height: previewH,
            width: previewH * 9 / 16,
            maxWidth: '100%',
            border: '2px solid var(--ink)',
            boxShadow: 'var(--shadow-hard-lg)',
            background: '#0b0b0b'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--ink-3)',
            letterSpacing: '0.04em'
          }
        }, "FIG. 7 \u2014 Preview at ", Math.round(previewH / CARD_H * 100), "%. Exports at 1080 \xD7 1920."))), /*#__PURE__*/React.createElement(StatusStrip, {
          label: "Format",
          items: ['1080 × 1920', 'Ready for stories', 'Filter: not required', 'Forks on person: 0'],
          style: {
            marginTop: 40
          }
        }));
      }
      Object.assign(window, {
        StudentCard,
        drawStudentCard
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "site/js/student-card.jsx",
      error: String(e && e.message || e)
    });
  }

  // site/js/study.jsx
  try {
    (() => {
      const studyNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      const STUDY_PACKS = [{
        id: 'PACK-01',
        icon: 'book-open',
        name: 'The Dictionary',
        fmt: 'PDF · 32 entries',
        mb: 2.1,
        desc: 'Every lesson, every example line. Printable. Works at 10,000 metres.'
      }, {
        id: 'PACK-02',
        icon: 'headphone',
        name: 'Radio lessons',
        fmt: 'MP3 · 32 tracks',
        mb: 46.2,
        desc: 'Hear each word said properly. Recommended for the flight in.'
      }, {
        id: 'PACK-03',
        icon: 'card-text',
        name: 'Flashcards',
        fmt: 'PDF · 32 cards',
        mb: 1.4,
        desc: 'Cut along the dotted line. Test the person in seat 14B.'
      }, {
        id: 'PACK-04',
        icon: 'notes',
        name: 'Final exam, offline',
        fmt: 'App data',
        mb: 0.3,
        desc: 'Write the exam in flight mode. It hands itself in when you land.'
      }, {
        id: 'PACK-05',
        icon: 'gamepad',
        name: 'Ja / No Laka',
        fmt: 'App data',
        mb: 0.8,
        desc: 'The true-false game, offline. Soft-serves still counted.'
      }, {
        id: 'PACK-06',
        icon: 'calendar',
        name: 'Durdle, 30 days',
        fmt: 'App data',
        mb: 0.2,
        desc: 'A month of daily words, preloaded. No signal required.'
      }];
      function useDownloads() {
        const [prog, setProg] = React.useState(() => {
          try {
            return JSON.parse(localStorage.getItem('lsd-offline') || '{}');
          } catch (e) {
            return {};
          }
        });
        const timers = React.useRef({});
        React.useEffect(() => {
          localStorage.setItem('lsd-offline', JSON.stringify(Object.fromEntries(Object.entries(prog).filter(([, v]) => v >= 100))));
        }, [prog]);
        React.useEffect(() => () => Object.values(timers.current).forEach(clearInterval), []);
        const start = id => {
          if (timers.current[id]) return;
          setProg(p => ({
            ...p,
            [id]: 0
          }));
          timers.current[id] = setInterval(() => {
            setProg(p => {
              const v = Math.min(100, (p[id] || 0) + 9 + Math.random() * 14);
              if (v >= 100) {
                clearInterval(timers.current[id]);
                delete timers.current[id];
              }
              return {
                ...p,
                [id]: v
              };
            });
          }, 160);
        };
        const remove = id => setProg(p => {
          const n = {
            ...p
          };
          delete n[id];
          return n;
        });
        return {
          prog,
          start,
          remove
        };
      }
      function Study() {
        const {
          Window,
          Button,
          Icon,
          ProgressBar,
          StatusStrip
        } = studyNS;
        const {
          prog,
          start,
          remove
        } = useDownloads();
        const saved = STUDY_PACKS.filter(p => prog[p.id] >= 100);
        const busy = STUDY_PACKS.some(p => prog[p.id] !== undefined && prog[p.id] < 100);
        const total = STUDY_PACKS.reduce((s, p) => s + p.mb, 0);
        const savedMb = saved.reduce((s, p) => s + p.mb, 0);
        const all = saved.length === STUDY_PACKS.length;
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
          index: "05",
          kicker: "Self-study \xB7 works offline",
          title: "Study Pack",
          right: /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              maxWidth: 320,
              lineHeight: 1.5
            }
          }, "For when you're flying in. Download the course before take-off. The lessons work in flight mode. The ocean does not.")
        }), /*#__PURE__*/React.createElement(Window, {
          title: "flight_mode.exe",
          bar: "accent",
          meta: all ? 'Ready' : saved.length + '/' + STUDY_PACKS.length + ' saved',
          controls: ['min', 'close'],
          shadow: "lg",
          padding: 0
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 28,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '26px 28px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '999 1 420px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontSize: 'clamp(30px, 3.4vw, 46px)',
            lineHeight: 0.95,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em'
          }
        }, all ? 'Ready for flight mode.' : 'Save the whole course for the flight.'), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            lineHeight: 1.5,
            color: 'var(--ink-2)'
          }
        }, all ? `${savedMb.toFixed(1)} MB saved to this device. Lessons, games and the exam all work without signal.` : `Six packs, ${total.toFixed(1)} MB. Everything you need to keep studying between Joburg and the coast.`)), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 300px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement(ProgressBar, {
          label: "Saved for offline",
          value: Math.round(savedMb * 10) / 10,
          max: Math.round(total * 10) / 10,
          segments: 16,
          showCount: false
        }), all ? /*#__PURE__*/React.createElement(Button, {
          block: true,
          onClick: () => STUDY_PACKS.forEach(p => remove(p.id))
        }, "Clear downloads") : /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "lg",
          block: true,
          brackets: true,
          disabled: busy,
          onClick: () => STUDY_PACKS.forEach(p => prog[p.id] >= 100 || start(p.id))
        }, busy ? 'Packing…' : 'Save everything')))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 24,
            marginTop: 40
          }
        }, STUDY_PACKS.map(p => {
          const v = prog[p.id];
          const done = v >= 100,
            going = v !== undefined && !done;
          return /*#__PURE__*/React.createElement("div", {
            key: p.id,
            style: {
              display: 'flex',
              flexDirection: 'column',
              border: '2px solid var(--ink)',
              background: 'var(--paper-2)'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 14px',
              borderBottom: '2px solid var(--ink)',
              fontFamily: 'var(--font-mono)',
              fontSize: 12
            }
          }, /*#__PURE__*/React.createElement("b", null, p.id), /*#__PURE__*/React.createElement("span", {
            style: {
              color: 'var(--ink-3)',
              fontSize: 10,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }
          }, p.fmt)), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 16,
              alignItems: 'flex-start',
              padding: '18px 14px',
              flex: 1
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              flex: 'none',
              width: 56,
              height: 56,
              display: 'grid',
              placeItems: 'center',
              border: '2px solid var(--ink)',
              background: done ? 'var(--yellow)' : 'var(--bg-dots)'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: p.icon,
            size: 32
          })), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              minWidth: 0
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-grotesk)',
              fontWeight: 800,
              fontSize: 24,
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '-0.01em'
            }
          }, p.name), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              lineHeight: 1.5,
              color: 'var(--ink-2)',
              textWrap: 'pretty'
            }
          }, p.desc))), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              padding: '7px 12px',
              borderTop: '2px solid var(--ink)',
              background: 'var(--paper-3)',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }
          }, /*#__PURE__*/React.createElement("span", null, "SIZE"), /*#__PURE__*/React.createElement("span", null, p.mb.toFixed(1), " MB")), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 14px',
              minHeight: 58
            }
          }, going ? /*#__PURE__*/React.createElement(ProgressBar, {
            value: Math.round(v),
            max: 100,
            segments: 12,
            showCount: false,
            style: {
              flex: 1
            }
          }) : done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
            style: {
              flex: 1,
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "check",
            size: 18
          }), "Saved for offline"), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "ghost",
            onClick: () => remove(p.id)
          }, "Remove")) : /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            block: true,
            onClick: () => start(p.id)
          }, "\u2193 Download")));
        })), /*#__PURE__*/React.createElement(StatusStrip, {
          label: "Cabin",
          items: ['Seatbelt sign: on', 'Wi-Fi: optional', 'Fluency: continuing'],
          style: {
            marginTop: 40
          }
        }));
      }
      Object.assign(window, {
        Study,
        STUDY_PACKS
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "site/js/study.jsx",
      error: String(e && e.message || e)
    });
  }

  // site/js/submit-word.jsx
  try {
    (() => {
      const subNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      function SubmitWord({
        initial,
        mobile
      }) {
        const {
          Window,
          Button,
          Stamp,
          RefCode
        } = subNS;
        const blank = {
          word: '',
          meaning: '',
          example: '',
          where: '',
          name: localStorage.getItem('lsd-name') || '',
          email: localStorage.getItem('lsd-email') || '',
          real: false
        };
        const [f, setF] = React.useState(blank);
        const [err, setErr] = React.useState({});
        const [done, setDone] = React.useState(initial === 'done' ? {
          ref: 'LSD-SUB-0388',
          word: 'your word'
        } : null);
        const set = k => v => {
          setF({
            ...f,
            [k]: v
          });
          if (err[k]) setErr({
            ...err,
            [k]: null
          });
        };
        const submit = e => {
          e.preventDefault();
          const x = {};
          if (!f.word.trim()) x.word = 'A word is required. It is in the name';
          if (!f.meaning.trim()) x.meaning = 'Explain yourself';
          if (!isEmail(f.email)) x.email = f.email ? 'That looks like a vaalie typed it' : 'Gateway needs this';
          if (!f.real) x.real = 'Gateway checks';
          setErr(x);
          if (Object.keys(x).length) return;
          // Mock submission. In production, POST the form to the review inbox here.
          setDone({
            ref: 'LSD-SUB-' + String(Math.floor(1000 + Math.random() * 8999)),
            word: f.word.trim()
          });
        };
        const steps = [['01', 'Received', 'Filed with a submission number.'], ['02', 'Read aloud', 'By Gateway, to Gateway.'], ['03', 'Field-tested', 'Said to a lifeguard. Reaction noted.'], ['04', 'Filed', 'Or returned with a polite note.']];
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
          index: "04",
          kicker: "Contributions \xB7 open to the public",
          title: "Submit a Word",
          right: /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              maxWidth: 320,
              lineHeight: 1.5
            }
          }, "The dictionary holds 32 words. The coast holds more. Send yours to Gateway for review.")
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 40,
            alignItems: 'flex-start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '999 1 560px',
            minWidth: 0
          }
        }, /*#__PURE__*/React.createElement(Window, {
          title: "submit_word.exe",
          bar: "accent",
          meta: done ? 'Sent' : 'Form W-05',
          controls: ['min', 'close'],
          shadow: "lg",
          padding: 0
        }, done ? /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            alignItems: 'center',
            padding: mobile ? 20 : '40px 36px'
          }
        }, /*#__PURE__*/React.createElement(Stamp, {
          top: "A public service by Gateway",
          middle: "FILED",
          bottom: "For review",
          size: 150
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 260px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement(RefCode, {
          code: done.ref,
          size: "md"
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontSize: 40,
            lineHeight: 0.95,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em'
          }
        }, "Filed for review."), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            lineHeight: 1.55
          }
        }, "Shot. \"", done.word, "\" is with Gateway. If it passes the lifeguard test, you'll hear from us by email."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            marginTop: 6
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          onClick: () => {
            setF({
              ...blank,
              name: f.name,
              email: f.email
            });
            setDone(null);
          }
        }, "Submit another")))) : /*#__PURE__*/React.createElement("form", {
          onSubmit: submit,
          noValidate: true,
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            padding: mobile ? 16 : 26
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement(Field, {
          label: "The word",
          value: f.word,
          onChange: set('word'),
          placeholder: "One word or phrase",
          error: err.word
        }), /*#__PURE__*/React.createElement(Field, {
          label: "Where you heard it",
          value: f.where,
          onChange: set('where'),
          placeholder: "e.g. North Beach, the taxi rank, my gran"
        })), /*#__PURE__*/React.createElement(Field, {
          label: "What it means",
          multiline: true,
          rows: 3,
          value: f.meaning,
          onChange: set('meaning'),
          placeholder: "Explain it like you would to a vaalie.",
          error: err.meaning
        }), /*#__PURE__*/React.createElement(Field, {
          label: "Use it in a sentence",
          multiline: true,
          rows: 2,
          value: f.example,
          onChange: set('example'),
          placeholder: "Optional. Gateway likes examples."
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement(Field, {
          label: "Your name",
          value: f.name,
          onChange: set('name'),
          placeholder: "For the credits",
          autoComplete: "given-name"
        }), /*#__PURE__*/React.createElement(Field, {
          label: "Email address",
          type: "email",
          value: f.email,
          onChange: set('email'),
          placeholder: "you@example.co.za",
          autoComplete: "email",
          error: err.email
        })), /*#__PURE__*/React.createElement(Tick, {
          checked: f.real,
          onChange: set('real'),
          error: err.real
        }, "I confirm this word is real and someone in Durban actually says it."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 14,
            borderTop: '1px dashed var(--ink-3)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--ink-3)'
          }
        }, "One word per form. Reviewed in order received, or by vibes."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Button, {
          onClick: () => {
            setF(blank);
            setErr({});
          }
        }, "Clear"), /*#__PURE__*/React.createElement(Button, {
          type: "submit",
          variant: "primary",
          brackets: true
        }, "Send to Gateway")))))), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 300px',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 24
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '7px 12px',
            background: 'var(--paper-3)',
            borderBottom: '1px solid var(--ink)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.08em'
          }
        }, /*#__PURE__*/React.createElement("span", null, "REVIEW PROCESS"), /*#__PURE__*/React.createElement("span", null, "4 STEPS")), steps.map(([n, t, d], i) => /*#__PURE__*/React.createElement("div", {
          key: n,
          style: {
            display: 'grid',
            gridTemplateColumns: '36px 1fr',
            gap: 10,
            padding: '12px',
            borderTop: i ? '1px dashed var(--ink-3)' : 'none',
            fontFamily: 'var(--font-mono)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 700,
            fontSize: 13
          }
        }, n), /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }
        }, /*#__PURE__*/React.createElement("b", {
          style: {
            fontSize: 13,
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }
        }, t), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            color: 'var(--ink-2)'
          }
        }, d))))), /*#__PURE__*/React.createElement("div", {
          style: {
            border: '2px solid var(--ink)',
            background: 'var(--ink)',
            color: 'var(--paper-2)',
            padding: '14px 14px',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            lineHeight: 1.6
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 10,
            letterSpacing: '0.1em',
            marginBottom: 6,
            color: 'var(--yellow)'
          }
        }, "SUBMISSION RULES"), "Real words only. No forks. Words already in the 32 lessons will be returned with a copy of the Dictionary."))));
      }
      Object.assign(window, {
        SubmitWord
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "site/js/submit-word.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/microsite/Activities.jsx
  try {
    (() => {
      const actNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      function ClickOMeter() {
        const [v, setV] = React.useState(0.62);
        const stops = ['VAALIE', 'KOOK', 'LAATIE', 'BRU', 'FLUENT'];
        return /*#__PURE__*/React.createElement("div", {
          onClick: () => setV(Math.random()),
          style: {
            width: '78%',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'center',
            marginBottom: 6
          }
        }, /*#__PURE__*/React.createElement(actNS.Icon, {
          name: "headphone",
          size: 32
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-pixel)',
            fontSize: 18
          }
        }, "\"GQ-!\"")), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            height: 22,
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            display: 'flex'
          }
        }, stops.map((s, i) => /*#__PURE__*/React.createElement("span", {
          key: s,
          style: {
            flex: 1,
            borderLeft: i ? '1px solid var(--ink)' : 'none',
            background: i / stops.length < v ? 'var(--ink)' : 'transparent'
          }
        })), /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            top: -8,
            left: `calc(${v * 100}% - 1px)`,
            width: 3,
            height: 34,
            background: 'var(--yellow)',
            outline: '1px solid var(--ink)',
            transition: 'left 200ms var(--ease-out)'
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            letterSpacing: '0.04em',
            gap: 4
          }
        }, stops.map(s => /*#__PURE__*/React.createElement("span", {
          key: s
        }, s))));
      }
      function SpotVaalie() {
        const marks = [[22, 40, 'flame shirt'], [64, 70, 'socks + slops'], [78, 28, 'gazebo']];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0
          }
        }, /*#__PURE__*/React.createElement(actNS.Halftone, {
          height: "100%",
          dot: 5,
          placeholder: "beach"
        }), marks.map(([x, y, l]) => /*#__PURE__*/React.createElement("div", {
          key: l,
          style: {
            position: 'absolute',
            left: x + '%',
            top: y + '%',
            transform: 'translate(-50%,-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: '2px dashed var(--ink)',
            background: 'rgba(255,90,46,.25)'
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            background: 'var(--paper-2)',
            border: '1px solid var(--ink)',
            padding: '1px 4px',
            whiteSpace: 'nowrap'
          }
        }, l))));
      }
      function JaNoLaka() {
        const {
          Button
        } = actNS;
        const [s, setS] = React.useState(3);
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 14,
            width: '80%'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            textAlign: 'center',
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            padding: '10px 14px'
          }
        }, "A robot is a traffic light."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          onClick: () => setS(s + 1)
        }, "JA"), /*#__PURE__*/React.createElement(Button, {
          onClick: () => setS(Math.max(0, s - 1))
        }, "NO LAKA")), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11
          }
        }, "Score: ", s, " soft-serves"));
      }
      function DurdleGrid() {
        const rows = [['K', 'O', 'O', 'K', ''], ['S', 'H', 'A', 'P', ''], ['', '', '', '', ''], ['', '', '', '', '']];
        const hit = {
          '0-0': 'y',
          '1-0': 'i',
          '1-1': 'i'
        };
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 32px)',
            gap: 5
          }
        }, rows.flatMap((r, ri) => r.map((c, ci) => {
          const h = hit[ri + '-' + ci];
          return /*#__PURE__*/React.createElement("span", {
            key: ri + '-' + ci,
            style: {
              width: 32,
              height: 32,
              display: 'grid',
              placeItems: 'center',
              border: '2px solid var(--ink)',
              background: h === 'y' ? 'var(--yellow)' : h === 'i' ? 'var(--ink)' : 'var(--paper-2)',
              color: h === 'i' ? 'var(--paper-2)' : 'var(--ink)',
              fontFamily: 'var(--font-pixel)',
              fontSize: 16
            }
          }, c);
        })));
      }
      function PackForDurban({
        onBad
      }) {
        const items = [['Baggies', true], ['Sunscreen', true], ['Wetsuit', false], ['Fork', false]];
        const [packed, setPacked] = React.useState(['Baggies']);
        const add = (n, ok) => {
          if (!ok) return onBad(n);
          if (!packed.includes(n)) setPacked([...packed, n]);
        };
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 18,
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6
          }
        }, items.map(([n, ok]) => /*#__PURE__*/React.createElement("button", {
          key: n,
          onClick: () => add(n, ok),
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            border: '2px solid var(--ink)',
            background: packed.includes(n) ? 'var(--paper-3)' : 'var(--paper-2)',
            padding: '4px 8px',
            cursor: 'grab',
            textAlign: 'left',
            textDecoration: packed.includes(n) ? 'line-through' : 'none'
          }
        }, n))), /*#__PURE__*/React.createElement(actNS.Icon, {
          name: "arrow-right",
          size: 20
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            width: 110,
            height: 96,
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            position: 'relative',
            padding: '18px 8px 6px',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            fontFamily: 'var(--font-mono)',
            fontSize: 10
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            top: -10,
            left: 34,
            width: 40,
            height: 10,
            border: '2px solid var(--ink)',
            borderBottom: 'none'
          }
        }), packed.map(p => /*#__PURE__*/React.createElement("span", {
          key: p
        }, "\u2713 ", p))));
      }
      function Leaderboard() {
        const {
          Window,
          Icon
        } = actNS;
        return /*#__PURE__*/React.createElement(Window, {
          title: "top_students.txt",
          meta: "Live",
          controls: ['min', 'close'],
          shadow: "md",
          padding: 0
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '14px 16px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "trophy",
          size: 24
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: 26,
            textTransform: 'uppercase'
          }
        }, "Top Students")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '28px 1fr auto auto',
            columnGap: 12,
            fontFamily: 'var(--font-mono)',
            fontSize: 13
          }
        }, ['#', 'Student', 'Exam', 'Games'].map(h => /*#__PURE__*/React.createElement("span", {
          key: h,
          style: {
            padding: '6px 0',
            borderTop: '1px solid var(--ink)',
            borderBottom: '1px solid var(--ink)',
            background: 'var(--paper-3)',
            fontSize: 10,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            paddingLeft: h === '#' ? 16 : 0,
            paddingRight: h === 'Games' ? 16 : 0
          }
        }, h)), window.LSD_DATA.leaderboard.map(([n, e, g], i) => /*#__PURE__*/React.createElement(React.Fragment, {
          key: n
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            padding: '9px 0 9px 16px',
            borderBottom: '1px dashed var(--paper-4)',
            fontWeight: 700
          }
        }, i + 1), /*#__PURE__*/React.createElement("span", {
          style: {
            padding: '9px 0',
            borderBottom: '1px dashed var(--paper-4)'
          }
        }, i === 0 ? /*#__PURE__*/React.createElement("span", {
          style: {
            background: 'var(--yellow)',
            padding: '0 4px'
          }
        }, n) : n), /*#__PURE__*/React.createElement("span", {
          style: {
            padding: '9px 0',
            borderBottom: '1px dashed var(--paper-4)'
          }
        }, e), /*#__PURE__*/React.createElement("span", {
          style: {
            padding: '9px 16px 9px 0',
            borderBottom: '1px dashed var(--paper-4)',
            textAlign: 'right'
          }
        }, g)))), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '10px 16px',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--ink-3)'
          }
        }, "Updated after every exam. Forks disqualify. Sand in the keyboard is fine."));
      }
      function Activities({
        initialError = 'Wetsuit',
        game
      }) {
        const openGame = ref => {
          location.hash = 'act/' + ref.toLowerCase();
        };
        const {
          SpecCard,
          Button,
          Dialog,
          Icon
        } = actNS;
        const [err, setErr] = React.useState(initialError);
        const games = [{
          ref: 'GAME-01',
          label: 'Say Gqom',
          tag: 'MIC',
          src: 'Mic-based pronunciation test. The click-o-meter rates your gqom click from VAALIE to FLUENT.',
          body: /*#__PURE__*/React.createElement(ClickOMeter, null)
        }, {
          ref: 'GAME-02',
          label: 'Spot the Vaalie',
          tag: '3 TO FIND',
          src: 'Find the details in the beach scene: flame shirt, socks with slops, gazebo with cup holders.',
          body: /*#__PURE__*/React.createElement(SpotVaalie, null),
          nox: true
        }, {
          ref: 'GAME-03',
          label: 'Ja / No Laka',
          tag: '60 SEC',
          src: 'Rapid true-false. Statements flash, you slam JA or NO LAKA. Score counted in soft-serves.',
          body: /*#__PURE__*/React.createElement(JaNoLaka, null)
        }, {
          ref: 'GAME-04',
          label: 'Durdle',
          tag: 'DAILY',
          src: 'Daily Durban-slang word game. Six tries. Today\u2019s word is in the Dictionary. So is tomorrow\u2019s. Hint hint.',
          body: /*#__PURE__*/React.createElement(DurdleGrid, null)
        }, {
          ref: 'GAME-05',
          label: 'Pack for Durban',
          tag: 'DRAG',
          src: 'Drag the essentials to the suitcase. The system will tell you if you are wrong. Loudly.',
          body: /*#__PURE__*/React.createElement(PackForDurban, {
            onBad: setErr
          })
        }, {
          ref: 'GAME-06',
          label: 'The 2pm Quiz',
          tag: 'LOCKED',
          src: 'Locked before 2pm. Come back after the beach.',
          locked: true,
          body: /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
              opacity: 0.9
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "lock",
            size: 48
          }), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-pixel)',
              fontSize: 22
            }
          }, "14:00"), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 13
            }
          }, "Come back after the beach."))
        }];
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
          index: "02",
          kicker: "Practical study \xB7 six games",
          title: "Activities"
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 640px), 1fr))',
            gap: 40,
            alignItems: 'start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 28,
            position: 'relative'
          }
        }, games.map(g => /*#__PURE__*/React.createElement(SpecCard, {
          key: g.ref,
          refCode: g.ref,
          meta: g.locked ? 'Opens 14:00' : 'Play',
          label: g.label,
          chipVariant: g.locked ? 'inverse' : 'outline',
          crosshair: !g.nox,
          previewHeight: 230,
          sourceLabel: "SOURCE",
          sourceTag: g.tag,
          source: g.src,
          interactive: true,
          onClick: () => openGame(g.ref),
          footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--ink-3)'
            }
          }, g.locked ? 'Status: sunbathing' : 'Best: 9 soft-serves'), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: g.locked ? 'secondary' : 'primary',
            onClick: e => {
              e.stopPropagation();
              openGame(g.ref);
            }
          }, g.locked ? 'Peek' : 'Play full screen'))
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            pointerEvents: 'none',
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center'
          }
        }, g.body))), err && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            left: '30%',
            top: '58%',
            zIndex: 5
          }
        }, /*#__PURE__*/React.createElement(Dialog, {
          title: "pack_for_durban.exe",
          kind: "error",
          heading: err === 'Fork' ? 'ABSOLUTELY NOT' : '\u26A0 Error: wetsuit detected.',
          width: 400,
          onClose: () => setErr(null),
          actions: err === 'Fork' ? /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            onClick: () => setErr(null)
          }, "Remove fork") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            onClick: () => setErr(null)
          }, "OK"), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            onClick: () => setErr(null)
          }, "OK, bru"))
        }, err === 'Fork' ? 'Forks are not permitted within 50km of a bunny.' : 'Baggies required.'))), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'sticky',
            top: 140,
            maxWidth: 460
          }
        }, /*#__PURE__*/React.createElement(Leaderboard, null))), game && /*#__PURE__*/React.createElement(GameScreen, {
          id: game,
          onBack: () => {
            location.hash = 'act';
          }
        }));
      }
      Object.assign(window, {
        Activities
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/microsite/Activities.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/microsite/Dictionary.jsx
  try {
    (() => {
      const dictNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      function buildDrawer(words) {
        const sorted = [...words].sort((a, b) => a[1].replace(/^The /, 'T').localeCompare(b[1].replace(/^The /, 'T')));
        const rows = [];
        let cur = null;
        const counts = {};
        sorted.forEach(w => {
          const L = w[1].replace(/^The /, 'T')[0].toUpperCase();
          counts[L] = (counts[L] || 0) + 1;
        });
        const cols = [40, 60, 26, 52, 34, 64];
        sorted.forEach((w, i) => {
          const L = w[1].replace(/^The /, 'T')[0].toUpperCase();
          if (L !== cur) {
            rows.push({
              letter: L,
              count: String(counts[L]).padStart(3, '0'),
              offset: 4 + rows.length % 3 * 6
            });
            cur = L;
          }
          rows.push({
            w,
            offset: cols[i % cols.length]
          });
        });
        return rows;
      }
      function EntryCard({
        w,
        playing,
        setPlaying
      }) {
        const {
          Button,
          RefCode,
          Barcode,
          ProgressBar,
          Icon
        } = dictNS;
        const [num, word, pos, def, ex] = w;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 40,
            padding: '9px 22px',
            marginBottom: -2,
            background: 'var(--yellow)',
            border: '2px solid var(--ink)',
            borderBottom: 'none',
            borderRadius: '8px 8px 0 0',
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            fontWeight: 700,
            position: 'relative'
          }
        }, /*#__PURE__*/React.createElement("span", null, num), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 600
          }
        }, word))), /*#__PURE__*/React.createElement("article", {
          style: {
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            boxShadow: 'var(--shadow-hard-lg)',
            padding: '28px 32px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            transform: 'rotate(-0.6deg)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between'
          }
        }, /*#__PURE__*/React.createElement(RefCode, {
          prefix: "",
          code: 'LSD-' + num + ' · Entry ' + num + ' of 32'
        }), /*#__PURE__*/React.createElement(RefCode, {
          code: "LSD-2026"
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'baseline',
            gap: 16,
            flexWrap: 'wrap'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: 84,
            lineHeight: 0.9,
            letterSpacing: '-0.02em'
          }
        }, word), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontStyle: 'italic',
            fontSize: 18,
            color: 'var(--ink-2)'
          }
        }, pos)), /*#__PURE__*/React.createElement("div", {
          style: {
            height: 2,
            background: 'var(--ink)'
          }
        }), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-mono)',
            fontSize: 17,
            lineHeight: 1.55,
            textWrap: 'pretty'
          }
        }, def), /*#__PURE__*/React.createElement("div", {
          style: {
            border: '1px solid var(--ink)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '5px 10px',
            background: 'var(--paper-3)',
            borderBottom: '1px solid var(--ink)',
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.1em'
          }
        }, "EXAMPLE"), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '12px 12px',
            fontFamily: 'var(--font-mono)',
            fontSize: 15,
            fontStyle: 'italic'
          }
        }, "\u201C", ex, "\u201D")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: playing ? 'accent' : 'primary',
          icon: /*#__PURE__*/React.createElement(Icon, {
            name: playing ? 'volume-3' : 'play',
            size: 18
          }),
          onClick: () => setPlaying(!playing)
        }, playing ? 'On air — Radio lesson ' + num : 'Hear it'), /*#__PURE__*/React.createElement(Barcode, {
          value: 'LSD-' + num + word,
          width: 130,
          height: 30
        })), playing && /*#__PURE__*/React.createElement(ProgressBar, {
          label: 'Radio lesson ' + num + ' · ' + word,
          value: 3,
          max: 10,
          showCount: false
        })));
      }
      function Dictionary() {
        const {
          IndexTab
        } = dictNS;
        const words = window.LSD_DATA.words;
        const rows = React.useMemo(() => buildDrawer(words), []);
        const [open, setOpen] = React.useState('13');
        const [playing, setPlaying] = React.useState(false);
        const w = words.find(x => x[0] === open);
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
          index: "01",
          kicker: "Reference \xB7 do not remove from the drawer",
          title: "The Dictionary",
          right: /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              maxWidth: 300,
              lineHeight: 1.5,
              textAlign: 'right'
            }
          }, "Filed alphabetically. Numbered by lesson. Dusted weekly. Pull any card to read the full entry.")
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 56,
            alignItems: 'start'
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--paper-3)',
            border: '2px solid var(--ink)',
            borderBottom: 'none',
            padding: '18px 14px 0'
          }
        }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            marginTop: i ? -14 : 0,
            padding: `0 ${Math.max(0, (rows.length - i) * 0.35)}px`,
            position: 'relative',
            zIndex: i
          }
        }, r.letter ? /*#__PURE__*/React.createElement(IndexTab, {
          letter: r.letter,
          count: r.count,
          offset: r.offset,
          tabWidth: "28%"
        }) : /*#__PURE__*/React.createElement(IndexTab, {
          number: r.w[0],
          word: r.w[1],
          offset: r.offset,
          tabWidth: "34%",
          active: r.w[0] === open,
          onClick: () => {
            setOpen(r.w[0]);
            setPlaying(false);
          }
        }))), /*#__PURE__*/React.createElement("div", {
          style: {
            height: 22,
            background: 'var(--paper-2)',
            borderTop: '1.5px solid var(--ink)',
            margin: '0 -14px'
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            height: 110,
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            boxShadow: 'var(--shadow-hard)',
            display: 'grid',
            placeItems: 'center'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontSize: 20,
            fontWeight: 500,
            background: 'var(--yellow)',
            border: '1.5px solid var(--ink)',
            borderRadius: 6,
            padding: '6px 22px'
          }
        }, "the whole language, filed."), /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            left: 12,
            bottom: 8,
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--ink-3)'
          }
        }, "DRAWER 01 / 01 \xB7 LSD-01 \u2013 LSD-32 \xB7 SAND INSIDE: LIKELY"))), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'sticky',
            top: 140
          }
        }, /*#__PURE__*/React.createElement(EntryCard, {
          w: w,
          playing: playing,
          setPlaying: setPlaying
        }))));
      }
      Object.assign(window, {
        Dictionary
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/microsite/Dictionary.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/microsite/Enrol.jsx
  try {
    (() => {
      const enrolNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      function EnrolTease({
        mobile
      }) {
        const {
          Icon,
          RefCode,
          Button
        } = enrolNS;
        const toForm = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          setTimeout(() => {
            const el = document.querySelector('input[autocomplete="given-name"]');
            if (el) el.focus({
              preventScroll: true
            });
          }, 400);
        };
        const items = [['01', 'The Dictionary', '32 words on index cards, each with a radio lesson.', 'B——y  n.  A quarter loaf of █████, hollowed and ██████ with curry.'], ['02', 'Activities', 'Six games, from Say Gqom to Spot the Vaalie, plus the leaderboard.', 'GAME-01 … GAME-06  ·  TOP STUDENTS: ████████'], ['03', 'Merch', 'Course materials. Mostly tees. One cooler box.', 'MERCH-01  ████.  Tee  ·  R ███'], ['04', 'Submit a Word', 'Know one we missed? File it with Gateway.', 'FORM W-05  ·  Review: 4 steps'], ['05', 'Study Pack', 'Download the course for the flight. Works offline.', 'PACK-01 … PACK-06  ·  51.0 MB'], ['06', 'Student Card', 'Upload a selfie. Get pixelated. Post it to your story.', 'STUDENT: █████  ·  FORKS ON PERSON: 0'], ['07', 'The Final Exam', '32 questions. Pass and your Certificate of Fluency prints itself.', 'Q13/32  The bunny arrives with a ████ █████. You:']];
        return /*#__PURE__*/React.createElement("section", {
          style: {
            marginTop: mobile ? 44 : 72
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 20,
            marginBottom: 26
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase'
          }
        }, "Enrolment unlocks"), /*#__PURE__*/React.createElement("h2", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontSize: mobile ? 40 : 'clamp(44px, 5vw, 72px)',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase'
          }
        }, "Seven files.", /*#__PURE__*/React.createElement("br", null), "Currently locked.")), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            lineHeight: 1.5,
            maxWidth: 340
          }
        }, "Everything below opens the moment you enrol. Contents partially redacted by Gateway\u2019s legal team (one guy, Dave).")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: 22
          }
        }, items.map(([n, t, d, peek], i) => /*#__PURE__*/React.createElement("button", {
          key: n,
          type: "button",
          onClick: toForm,
          style: {
            all: 'unset',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            paddingLeft: [0, 24, 48, 12, 36, 60, 18][i]
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '7px 14px',
            marginBottom: -2,
            border: '2px solid var(--ink)',
            borderBottom: 'none',
            borderRadius: '6px 6px 0 0',
            background: 'var(--paper-2)',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            position: 'relative'
          }
        }, /*#__PURE__*/React.createElement("b", null, n), /*#__PURE__*/React.createElement("span", {
          style: {
            textTransform: 'lowercase'
          }
        }, t))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            padding: '18px 18px 14px',
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            flex: 1
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontSize: 28,
            lineHeight: 0.95,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em'
          }
        }, t), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '3px 8px 3px 4px',
            background: 'var(--ink)',
            color: 'var(--paper-2)',
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.08em'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "lock",
          size: 16
        }), "LOCKED")), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            lineHeight: 1.5,
            color: 'var(--ink-2)',
            textWrap: 'pretty'
          }
        }, d), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 'auto',
            padding: '10px 10px',
            border: '1px dashed var(--ink-3)',
            background: 'var(--bg-dots)',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            color: 'var(--ink-2)'
          }
        }, peek))))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 28,
            padding: '16px 18px',
            border: '2px solid var(--ink)',
            background: 'var(--yellow)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            fontWeight: 700
          }
        }, "Seven files. One form. Course fee: free."), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          brackets: true,
          onClick: toForm
        }, "Unlock the course")));
      }
      function Enrol({
        onDone,
        mobile,
        initial
      }) {
        const {
          Window,
          Button,
          Barcode,
          RefCode,
          Dialog,
          StatusStrip
        } = enrolNS;
        const [f, setF] = React.useState({
          name: '',
          email: '',
          consent: false,
          promise: false
        });
        const [err, setErr] = React.useState({});
        const [done, setDone] = React.useState(initial === 'done' ? {
          no: 'LSD-2026-04417',
          name: 'Thandi'
        } : null);
        const set = k => v => {
          setF({
            ...f,
            [k]: v
          });
          if (err[k]) setErr({
            ...err,
            [k]: null
          });
        };
        const submit = e => {
          e.preventDefault();
          const x = {};
          if (!f.name.trim()) x.name = 'Gateway needs this';
          if (!isEmail(f.email)) x.email = f.email ? 'That looks like a vaalie typed it' : 'Gateway needs this';
          if (!f.consent) x.consent = 'Tick it. It is free, bru';
          setErr(x);
          if (Object.keys(x).length) return;
          const no = 'LSD-2026-' + String(Math.floor(10000 + Math.random() * 89999));
          // Mock capture. In production, POST { name, email, consent, source: 'lsd-enrol' } to the CRM here.
          localStorage.setItem('lsd-enrolled', '1');
          localStorage.setItem('lsd-name', f.name.trim());
          localStorage.setItem('lsd-email', f.email.trim());
          localStorage.setItem('lsd-student', no);
          setDone({
            no,
            name: f.name.trim()
          });
        };
        const rows = [['Lessons', '32 · real Durban slang'], ['Final exam', '32 questions · written on site'], ['Games', '6 · plus the leaderboard'], ['Study Pack', 'Download for the flight · works offline'], ['Certificate', 'Your name on it · redeemable at Gateway, Durban'], ['Course fee', 'Free']];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
          }
        }, /*#__PURE__*/React.createElement("header", {
          style: {
            maxWidth: 'var(--page-max)',
            width: '100%',
            margin: '0 auto',
            padding: mobile ? '14px 16px' : '20px 64px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            borderBottom: '2px solid var(--ink)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontSize: mobile ? 16 : 20,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em'
          }
        }, "Learn to Speak Durban"), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 8,
            height: 8,
            background: 'var(--yellow)',
            border: '1px solid var(--ink)'
          }
        }), "Enrolment desk \xB7 open")), /*#__PURE__*/React.createElement("main", {
          style: {
            flex: 1,
            maxWidth: 'var(--page-max)',
            width: '100%',
            margin: '0 auto',
            padding: mobile ? '28px 16px 0' : '64px 64px 0'
          }
        }, /*#__PURE__*/React.createElement("section", {
          style: {
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            gap: mobile ? 28 : 56,
            alignItems: 'flex-start',
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            boxShadow: mobile ? 'var(--shadow-hard)' : 'var(--shadow-hard-lg)',
            padding: mobile ? '36px 18px 22px' : '56px 56px 48px'
          }
        }, /*#__PURE__*/React.createElement(RefCode, {
          code: "LSD-2026 \xB7 FORM E-01",
          style: {
            position: 'absolute',
            top: 10,
            left: 12
          }
        }), !mobile && /*#__PURE__*/React.createElement(Barcode, {
          value: "LSD-ENROL",
          width: 160,
          height: 36,
          style: {
            position: 'absolute',
            top: 14,
            right: 16
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '999 1 480px',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: mobile ? 18 : 26
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: mobile ? 11 : 13,
            letterSpacing: '0.16em',
            textTransform: 'uppercase'
          }
        }, "A public service by Gateway"), /*#__PURE__*/React.createElement("h1", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontSize: mobile ? 54 : 'clamp(56px, 7.6vw, 124px)',
            lineHeight: 0.86,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase'
          }
        }, "Learn to", /*#__PURE__*/React.createElement("br", null), "Speak ", /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-pixel)',
            fontWeight: 400,
            fontSize: '0.86em',
            letterSpacing: '-0.02em',
            background: 'var(--yellow)',
            padding: '0 0.06em'
          }
        }, "Durban")), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            maxWidth: 540,
            fontFamily: 'var(--font-mono)',
            fontSize: mobile ? 14 : 16,
            lineHeight: 1.55,
            textWrap: 'pretty'
          }
        }, "The course the whole country is passing happily. Enrol to open all 32 lessons, write the final exam and receive your Certificate of Fluency."), /*#__PURE__*/React.createElement("div", {
          style: {
            border: '2px solid var(--ink)',
            maxWidth: 560
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '7px 12px',
            background: 'var(--paper-3)',
            borderBottom: '1px solid var(--ink)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.08em'
          }
        }, /*#__PURE__*/React.createElement("span", null, "ENROLMENT INCLUDES"), /*#__PURE__*/React.createElement("span", null, "2026 INTAKE")), rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
          key: k,
          style: {
            display: 'grid',
            gridTemplateColumns: mobile ? '96px 1fr' : '130px 1fr',
            gap: 12,
            padding: '9px 12px',
            borderTop: i ? '1px dashed var(--ink-3)' : 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: 13
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--ink-3)',
            textTransform: 'uppercase',
            fontSize: 11,
            letterSpacing: '0.06em',
            paddingTop: 2
          }
        }, k), /*#__PURE__*/React.createElement("span", null, v))))), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 360px',
            minWidth: 0,
            maxWidth: mobile ? undefined : 460
          }
        }, /*#__PURE__*/React.createElement(Window, {
          title: "enrolment_form.exe",
          bar: "accent",
          meta: "Step 1 of 1",
          controls: ['close'],
          shadow: "md",
          padding: 0
        }, /*#__PURE__*/React.createElement("form", {
          onSubmit: submit,
          noValidate: true,
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            padding: mobile ? 16 : 22
          }
        }, /*#__PURE__*/React.createElement(Field, {
          label: "First name",
          value: f.name,
          onChange: set('name'),
          placeholder: "Your actual name. Not \u201CBru\u201D.",
          autoComplete: "given-name",
          error: err.name
        }), /*#__PURE__*/React.createElement(Field, {
          label: "Email address",
          type: "email",
          value: f.email,
          onChange: set('email'),
          placeholder: "you@example.co.za",
          autoComplete: "email",
          error: err.email
        }), /*#__PURE__*/React.createElement(Tick, {
          checked: f.consent,
          onChange: set('consent'),
          error: err.consent
        }, "Send me lessons, exam reminders and Gateway rewards. Unsubscribe any time \u2014 no hard feelings, bru."), /*#__PURE__*/React.createElement(Tick, {
          checked: f.promise,
          onChange: set('promise')
        }, "I promise not to bring a wetsuit. (Optional, but noted.)"), /*#__PURE__*/React.createElement(Button, {
          type: "submit",
          variant: "primary",
          size: "lg",
          block: true,
          brackets: true
        }, "Enrol, bru"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            lineHeight: 1.5,
            color: 'var(--ink-3)'
          }
        }, "Your details are handled by Gateway in line with its ", /*#__PURE__*/React.createElement("a", {
          href: "#",
          style: {
            color: 'var(--ink)'
          }
        }, "privacy policy"), ". One enrolment per student. Clones must enrol separately."))), /*#__PURE__*/React.createElement("button", {
          type: "button",
          onClick: () => onDone('home'),
          style: {
            all: 'unset',
            cursor: 'pointer',
            display: 'block',
            marginTop: 16,
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            textDecoration: 'underline',
            textUnderlineOffset: 4
          }
        }, "Already enrolled? Go to the course (we trust you)"))), /*#__PURE__*/React.createElement(EnrolTease, {
          mobile: mobile
        }), /*#__PURE__*/React.createElement(StatusStrip, {
          label: "Intake",
          items: ['Students enrolled today: 1,204', 'Forks confiscated: 37', 'Course fee: free', 'Fluency: guaranteed-ish'],
          style: {
            marginTop: mobile ? 28 : 40
          }
        })), /*#__PURE__*/React.createElement(Footer, {
          mobile: mobile
        }), done && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            display: 'grid',
            placeItems: 'center',
            padding: 16,
            background: 'rgba(242,241,236,.6)'
          }
        }, /*#__PURE__*/React.createElement(Dialog, {
          title: "enrolment.exe",
          kind: "success",
          heading: "Enrolment confirmed.",
          width: mobile ? '100%' : 440,
          onClose: () => onDone('home'),
          actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            onClick: () => onDone('home')
          }, "Go to the index"), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            onClick: () => onDone('dict')
          }, "Begin Lesson 1"))
        }, "Welcome to the coast, ", done.name, ". Student no. ", /*#__PURE__*/React.createElement("b", null, done.no), ". Your first lesson is on its way to your inbox. Check spam. Gateway is new at email.")));
      }
      Object.assign(window, {
        Enrol
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/microsite/Enrol.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/microsite/Exam.jsx
  try {
    (() => {
      const examNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      function ExamStack({
        children,
        title = 'final_exam.exe',
        meta
      }) {
        const {
          Window
        } = examNS;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            paddingTop: 72,
            paddingLeft: 72
          }
        }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            position: 'absolute',
            top: i * 24,
            left: i * 24,
            right: 72 - i * 24,
            bottom: 72 - i * 24
          }
        }, /*#__PURE__*/React.createElement(Window, {
          title: title,
          controls: ['close'],
          shadow: "grey",
          style: {
            height: '100%'
          },
          bar: "strip"
        }, /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative'
          }
        }, /*#__PURE__*/React.createElement(Window, {
          title: title,
          meta: meta,
          bar: "accent",
          controls: ['min', 'close'],
          shadow: "lg",
          padding: 0
        }, children)));
      }
      function Certificate({
        name,
        setName,
        score
      }) {
        const {
          RefCode,
          Barcode,
          Stamp,
          Input,
          Button
        } = examNS;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 40,
            alignItems: 'flex-start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '999 1 520px',
            minWidth: 0,
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            boxShadow: 'var(--shadow-hard-lg)',
            padding: 14
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            border: '1px solid var(--ink)',
            padding: '30px 40px 28px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 18
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }
        }, /*#__PURE__*/React.createElement(RefCode, {
          code: 'LSD-2026-CERT-' + String(score).padStart(2, '0') + '0417'
        }), /*#__PURE__*/React.createElement(RefCode, {
          prefix: "",
          code: "Issued as a public service by Gateway"
        })), /*#__PURE__*/React.createElement(Barcode, {
          value: 'CERT' + name,
          width: 140,
          height: 36,
          style: {
            maxWidth: '40%'
          },
          showValue: false
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginTop: 10
          }
        }, "This certifies that"), /*#__PURE__*/React.createElement("div", {
          style: {
            borderBottom: '2px solid var(--ink)',
            paddingBottom: 6,
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: 56,
            lineHeight: 1,
            minHeight: 56
          }
        }, name || '\u00a0'), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 15,
            lineHeight: 1.55,
            maxWidth: 520
          }
        }, "has completed all 32 lessons and passed the Final Exam with a score of ", /*#__PURE__*/React.createElement("b", null, score, "/32"), ", and is hereby declared"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: 64,
            lineHeight: 0.9,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em'
          }
        }, "Fluent in Durban"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid var(--ink)',
            marginTop: 8
          }
        }, [['Course', 'LSD-01 – LSD-32'], ['Grade', score >= 30 ? 'Native-ish' : 'Fluent'], ['Valid', 'Up and down the coast']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
          key: k,
          style: {
            padding: '8px 10px 0 0',
            fontFamily: 'var(--font-mono)',
            fontSize: 12
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 10,
            color: 'var(--ink-3)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }
        }, k), v))), /*#__PURE__*/React.createElement(Stamp, {
          top: "A public service by Gateway",
          size: 150,
          style: {
            position: 'absolute',
            right: 34,
            bottom: 70
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 4px 0',
            fontFamily: 'var(--font-mono)',
            fontSize: 12
          }
        }, /*#__PURE__*/React.createElement("span", null, "Show this certificate at Gateway, Durban to claim your graduation reward."), /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--ink-3)'
          }
        }, "1 / 1"))), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 260px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Input, {
          label: "Name of graduate",
          value: name,
          onChange: e => setName(e.target.value),
          hint: "Printed exactly as typed. Choose wisely. Your gran will see this."
        }), /*#__PURE__*/React.createElement(Button, {
          variant: "accent",
          size: "lg",
          block: true,
          brackets: true
        }, "Print certificate"), /*#__PURE__*/React.createElement(Button, {
          block: true
        }, "Download PDF (for the fridge)"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            lineHeight: 1.5,
            color: 'var(--ink-2)'
          }
        }, "Redeemable once per graduate at Gateway, Durban. Baggies optional at collection.")));
      }
      function Exam({
        go,
        initial
      }) {
        const {
          AnswerOption,
          Button,
          ProgressBar,
          Dialog
        } = examNS;
        const Q = window.LSD_DATA.exam;
        const N = Q.length,
          PASS = 24;
        const [i, setI] = React.useState(0);
        const [answers, setAnswers] = React.useState({});
        const [phase, setPhase] = React.useState(initial || 'q');
        const [name, setName] = React.useState(() => localStorage.getItem('lsd-name') || 'Thandi Mkhize');
        const score = Object.entries(answers).filter(([k, v]) => Q[k].c === v).length;
        const q = Q[i];
        const sel = answers[i];
        const answered = Object.keys(answers).length;
        const complete = answered === N;
        const shown = complete ? score : phase === 'fail' ? 13 : 29;
        const missed = complete ? Q.filter((x, k) => answers[k] !== x.c).map(x => window.LSD_DATA.words[+x.w - 1][1]) : ['Kiff', 'Robot', 'Pozi'];
        const next = () => {
          if (i < N - 1) setI(i + 1);else if (complete) setPhase(score >= PASS ? 'pass' : 'fail');
        };
        const reset = () => {
          setAnswers({});
          setI(0);
          setPhase('q');
        };
        const demo = /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'var(--font-mono)',
            fontSize: 11
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--ink-3)',
            letterSpacing: '0.08em'
          }
        }, "DEMO STATE"), [['q', 'Question'], ['pass', 'Pass'], ['fail', 'Fail']].map(([k, l]) => /*#__PURE__*/React.createElement(Button, {
          key: k,
          size: "sm",
          variant: phase === k ? 'primary' : 'secondary',
          onClick: () => setPhase(k)
        }, l)));
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
          index: "07",
          kicker: "Assessment \xB7 pencils down, baggies on",
          title: phase === 'pass' ? 'Certificate of Fluency' : 'The Final Exam',
          right: demo
        }), phase === 'pass' ? /*#__PURE__*/React.createElement(Certificate, {
          name: name,
          setName: setName,
          score: shown
        }) : /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            maxWidth: 900
          }
        }, /*#__PURE__*/React.createElement(ExamStack, {
          meta: 'Question ' + String(i + 1).padStart(2, '0') + '/' + N
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '28px 32px 0',
            display: 'flex',
            flexDirection: 'column',
            gap: 22
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-pixel)',
            fontSize: 30
          }
        }, "QUESTION ", String(i + 1).padStart(2, '0'), "/", N), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--ink-3)'
          }
        }, "REF: LSD-", q.w, " \xB7 LESSON ", q.w, "/32")), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 700,
            fontSize: 36,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            textWrap: 'balance'
          }
        }, q.q), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }
        }, q.a.map((a, k) => /*#__PURE__*/React.createElement(AnswerOption, {
          key: k,
          letter: 'abc'[k],
          state: sel === k ? 'selected' : 'idle',
          onClick: () => {
            setAnswers({
              ...answers,
              [i]: k
            });
          }
        }, a))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.08em',
            color: 'var(--ink-3)'
          }
        }, "QUESTION MAP \xB7 JUMP AROUND, WE WON'T TELL"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(16, minmax(0,1fr))',
            gap: 4
          }
        }, Q.map((x, k) => /*#__PURE__*/React.createElement("button", {
          key: k,
          type: "button",
          onClick: () => setI(k),
          title: 'Question ' + (k + 1),
          style: {
            height: 26,
            padding: 0,
            border: '1.5px solid var(--ink)',
            borderRadius: 0,
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            fontWeight: 700,
            background: k === i ? 'var(--yellow)' : answers[k] !== undefined ? 'var(--ink)' : 'var(--paper-2)',
            color: k !== i && answers[k] !== undefined ? 'var(--paper-2)' : 'var(--ink)'
          }
        }, String(k + 1).padStart(2, '0')))))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 24,
            padding: '22px 32px 26px',
            marginTop: 24,
            borderTop: '1px dashed var(--ink-3)'
          }
        }, /*#__PURE__*/React.createElement(ProgressBar, {
          label: "Answered",
          value: answered,
          max: N,
          segments: 16,
          style: {
            width: 300
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Button, {
          disabled: i === 0,
          onClick: () => setI(i - 1)
        }, "Wait, go back"), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          disabled: sel === undefined || i === N - 1 && !complete,
          onClick: next
        }, i === N - 1 ? complete ? 'Hand it in' : N - answered + ' to go, bru' : 'Next, bru')))), phase === 'fail' && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            background: 'rgba(242,241,236,.55)'
          }
        }, /*#__PURE__*/React.createElement(Dialog, {
          title: "exam_result.exe",
          kind: "error",
          heading: 'Eish. ' + shown + '/32.',
          width: 460,
          onClose: () => setPhase('q'),
          actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            onClick: () => go('dict')
          }, "Study the Dictionary"), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            onClick: reset
          }, "Try again"))
        }, "Rewrite immediately \u2014 the ocean isn't going anywhere.", /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'block',
            marginTop: 8,
            fontSize: 12,
            color: 'var(--ink-2)'
          }
        }, "Pass mark: ", PASS, "/32. Gateway suggests revising: ", missed.slice(0, 6).join(', '), missed.length > 6 ? ' and ' + (missed.length - 6) + ' more' : '', ".")))));
      }
      Object.assign(window, {
        Exam
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/microsite/Exam.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/microsite/Forms.jsx
  try {
    (() => {
      const formNS = window.LearnToSpeakDurbanDesignSystem_ec3271;

      // Kit-level form fields (multiline + error states, checkbox). Same visual language as DS Input.
      function Field({
        label,
        value,
        onChange,
        placeholder,
        hint,
        error,
        multiline,
        rows = 3,
        type = 'text',
        autoComplete
      }) {
        const [focus, setFocus] = React.useState(false);
        const Tag = multiline ? 'textarea' : 'input';
        return /*#__PURE__*/React.createElement("label", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            boxShadow: focus ? 'var(--shadow-hard-sm)' : 'none',
            transition: 'box-shadow var(--dur-snap) linear'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: 12,
            padding: '6px 10px',
            borderBottom: '1px solid var(--ink)',
            background: error ? 'var(--ink)' : focus ? 'var(--yellow)' : 'var(--paper-3)',
            color: error ? 'var(--paper-2)' : 'var(--ink)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }
        }, /*#__PURE__*/React.createElement("span", null, label), error && /*#__PURE__*/React.createElement("span", null, "\u2715 ", error)), /*#__PURE__*/React.createElement(Tag, {
          type: multiline ? undefined : type,
          rows: multiline ? rows : undefined,
          value: value,
          placeholder: placeholder,
          autoComplete: autoComplete,
          onChange: e => onChange(e.target.value),
          onFocus: () => setFocus(true),
          onBlur: () => setFocus(false),
          style: {
            border: 'none',
            outline: 'none',
            background: 'transparent',
            padding: 12,
            fontFamily: 'var(--font-mono)',
            fontSize: 16,
            lineHeight: 1.5,
            color: 'var(--ink)',
            minWidth: 0,
            resize: 'vertical'
          }
        }), hint && /*#__PURE__*/React.createElement("span", {
          style: {
            padding: '0 12px 8px',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--ink-3)'
          }
        }, hint));
      }
      function Tick({
        checked,
        onChange,
        children,
        error
      }) {
        return /*#__PURE__*/React.createElement("label", {
          style: {
            display: 'flex',
            gap: 12,
            alignItems: 'flex-start',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            lineHeight: 1.5
          }
        }, /*#__PURE__*/React.createElement("input", {
          type: "checkbox",
          checked: checked,
          onChange: e => onChange(e.target.checked),
          style: {
            position: 'absolute',
            opacity: 0,
            width: 1,
            height: 1
          }
        }), /*#__PURE__*/React.createElement("span", {
          "aria-hidden": "true",
          style: {
            flex: 'none',
            width: 22,
            height: 22,
            marginTop: 1,
            display: 'grid',
            placeItems: 'center',
            border: '2px solid var(--ink)',
            background: checked ? 'var(--yellow)' : 'var(--paper-2)',
            outline: error ? '2px solid var(--ink)' : 'none',
            outlineOffset: 2,
            fontWeight: 700,
            fontSize: 14,
            lineHeight: 1
          }
        }, checked ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
          style: {
            textWrap: 'pretty'
          }
        }, children, error && /*#__PURE__*/React.createElement("b", {
          style: {
            display: 'block',
            fontSize: 11,
            marginTop: 2
          }
        }, "\u2715 ", error)));
      }
      const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
      Object.assign(window, {
        Field,
        Tick,
        isEmail
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/microsite/Forms.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/microsite/Games.jsx
  try {
    (() => {
      const gameNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      const GAME_META = {
        'game-01': {
          title: 'Say Gqom',
          how: 'Press the button. Click your tongue like you mean it. The click-o-meter judges you from VAALIE to FLUENT.'
        },
        'game-02': {
          title: 'Spot the Vaalie',
          how: 'Find three vaalie details hidden in the beach scene. Click to report. False reports are noted.'
        },
        'game-03': {
          title: 'Ja / No Laka',
          how: 'A statement appears. Slam JA (J key) or NO LAKA (N key). 45 seconds. Score counted in soft-serves.'
        },
        'game-04': {
          title: 'Durdle',
          how: 'Guess the five-letter Durban word in six tries. Orange = right spot. Black = wrong spot. Grey = not in the word.'
        },
        'game-05': {
          title: 'Pack for Durban',
          how: 'Drag items into the suitcase, or click them. Pack only what you actually need. The system is watching.'
        },
        'game-06': {
          title: 'The 2pm Quiz',
          how: 'Five questions. Only after 2pm. Before that you should be at the beach.'
        }
      };
      function GameShell({
        id,
        score,
        onBack,
        children
      }) {
        const {
          Button,
          Icon,
          StatusStrip,
          RefCode
        } = gameNS;
        const meta = GAME_META[id];
        React.useEffect(() => {
          const prev = document.body.style.overflow;
          document.body.style.overflow = 'hidden';
          const k = e => {
            if (e.key === 'Escape') onBack();
          };
          addEventListener('keydown', k);
          return () => {
            document.body.style.overflow = prev;
            removeEventListener('keydown', k);
          };
        }, []);
        return /*#__PURE__*/React.createElement("div", {
          role: "dialog",
          "aria-label": meta.title,
          style: {
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            overflowY: 'auto',
            background: 'var(--bg-graph)',
            display: 'flex',
            flexDirection: 'column'
          }
        }, /*#__PURE__*/React.createElement("header", {
          style: {
            position: 'sticky',
            top: 0,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '12px clamp(16px, 4vw, 40px)',
            background: 'var(--paper-2)',
            borderBottom: '2px solid var(--ink)'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          size: "sm",
          icon: /*#__PURE__*/React.createElement(Icon, {
            name: "arrow-left",
            size: 16
          }),
          onClick: onBack
        }, "Back to Activities"), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            minWidth: 0,
            display: 'flex',
            alignItems: 'baseline',
            gap: 12,
            justifyContent: 'center'
          }
        }, /*#__PURE__*/React.createElement(RefCode, {
          prefix: "",
          code: id.toUpperCase()
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontSize: 22,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        }, meta.title)), score != null && /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            fontWeight: 700,
            border: '2px solid var(--ink)',
            padding: '5px 10px',
            background: 'var(--yellow)',
            whiteSpace: 'nowrap'
          }
        }, score), /*#__PURE__*/React.createElement("button", {
          type: "button",
          "aria-label": "Close game",
          onClick: onBack,
          style: {
            width: 32,
            height: 32,
            display: 'grid',
            placeItems: 'center',
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: 14,
            borderRadius: 0
          }
        }, "\u2715")), /*#__PURE__*/React.createElement("main", {
          style: {
            flex: 1,
            width: '100%',
            maxWidth: 1100,
            margin: '0 auto',
            padding: 'clamp(20px, 4vw, 48px) clamp(16px, 4vw, 40px)'
          }
        }, children), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '0 clamp(16px, 4vw, 40px) 28px',
            maxWidth: 1100,
            width: '100%',
            margin: '0 auto'
          }
        }, /*#__PURE__*/React.createElement(StatusStrip, {
          label: "How to play",
          live: false,
          items: [meta.how]
        })));
      }
      const bigHead = {
        fontFamily: 'var(--font-grotesk)',
        fontWeight: 800,
        fontSize: 'clamp(36px, 5vw, 64px)',
        lineHeight: 0.92,
        letterSpacing: '-0.02em',
        textTransform: 'uppercase',
        margin: 0,
        textWrap: 'balance'
      };
      const monoP = {
        fontFamily: 'var(--font-mono)',
        fontSize: 15,
        lineHeight: 1.55,
        margin: 0
      };

      /* GAME-01 */
      function SayGqomGame({
        setScore
      }) {
        const {
          Button
        } = gameNS;
        const stops = ['VAALIE', 'KOOK', 'LAATIE', 'BRU', 'FLUENT'];
        const lines = ['That was a cough. Try again, from the diaphragm.', 'A click was attempted. Gateway heard it, faintly.', 'Getting there. Your gran would nod politely.', 'Solid click. Taxi drivers would respect it.', 'Windows rattled. Gqom approved.'];
        const [phase, setPhase] = React.useState('idle');
        const [lvl, setLvl] = React.useState(0);
        const [live, setLive] = React.useState(0);
        const [note, setNote] = React.useState(null);
        const listen = async () => {
          setPhase('listening');
          setNote(null);
          setLive(0);
          let peak = 0;
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              audio: true
            });
            const ac = new (window.AudioContext || window.webkitAudioContext)();
            const an = ac.createAnalyser();
            an.fftSize = 1024;
            ac.createMediaStreamSource(stream).connect(an);
            const buf = new Uint8Array(an.fftSize);
            const t0 = performance.now();
            await new Promise(res => {
              const tick = () => {
                an.getByteTimeDomainData(buf);
                let m = 0;
                for (let i = 0; i < buf.length; i++) m = Math.max(m, Math.abs(buf[i] - 128) / 128);
                peak = Math.max(peak, m);
                setLive(m);
                if (performance.now() - t0 < 2000) requestAnimationFrame(tick);else res();
              };
              tick();
            });
            stream.getTracks().forEach(t => t.stop());
            ac.close();
            peak = Math.min(1, peak * 1.6);
          } catch (e) {
            setNote('Microphone unavailable. Gateway guessed, generously.');
            await new Promise(r => setTimeout(r, 1200));
            peak = 0.35 + Math.random() * 0.6;
          }
          setLvl(peak);
          setPhase('result');
          const idx = Math.min(4, Math.floor(peak * 5));
          setScore('Best: ' + stops[idx]);
        };
        const idx = Math.min(4, Math.floor(lvl * 5));
        const shown = phase === 'listening' ? live : phase === 'result' ? lvl : 0;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 32,
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: bigHead
        }, phase === 'result' ? 'Rating: ' + stops[idx] : phase === 'listening' ? 'Click now.' : 'Say it with a click.'), /*#__PURE__*/React.createElement("button", {
          type: "button",
          onClick: phase === 'listening' ? undefined : listen,
          style: {
            width: 220,
            height: 220,
            borderRadius: '50%',
            border: '3px solid var(--ink)',
            background: phase === 'listening' ? 'var(--yellow)' : 'var(--paper-2)',
            boxShadow: 'var(--shadow-hard)',
            cursor: phase === 'listening' ? 'default' : 'pointer',
            fontFamily: 'var(--font-pixel)',
            fontSize: 34,
            color: 'var(--ink)'
          }
        }, phase === 'listening' ? 'GQ-!' : phase === 'result' ? 'AGAIN' : 'START'), /*#__PURE__*/React.createElement("div", {
          style: {
            width: 'min(640px, 100%)',
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            height: 34,
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)',
            display: 'flex'
          }
        }, stops.map((s, i) => /*#__PURE__*/React.createElement("span", {
          key: s,
          style: {
            flex: 1,
            borderLeft: i ? '1px solid var(--ink)' : 'none',
            background: i / 5 < shown ? 'var(--ink)' : 'transparent',
            transition: 'background 80ms linear'
          }
        })), /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            top: -10,
            left: `calc(${shown * 100}% - 2px)`,
            width: 4,
            height: 50,
            background: 'var(--yellow)',
            outline: '1px solid var(--ink)'
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 700
          }
        }, stops.map(s => /*#__PURE__*/React.createElement("span", {
          key: s
        }, s)))), /*#__PURE__*/React.createElement("p", {
          style: {
            ...monoP,
            maxWidth: 520
          }
        }, phase === 'result' ? lines[idx] : phase === 'listening' ? 'Listening for two seconds. Do not apologise.' : 'Press start, allow the microphone, and click your tongue once. Loudly. The neighbours will understand.'), note && /*#__PURE__*/React.createElement("p", {
          style: {
            ...monoP,
            fontSize: 12,
            color: 'var(--ink-2)'
          }
        }, note), phase === 'result' && /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          brackets: true,
          onClick: listen
        }, "Try again"));
      }

      /* GAME-02 */
      function SpotVaalieGame({
        setScore,
        onBack
      }) {
        const {
          Halftone,
          Button,
          Dialog,
          Icon
        } = gameNS;
        const targets = [{
          k: 'Flame shirt',
          x: 22,
          y: 42
        }, {
          k: 'Socks with slops',
          x: 63,
          y: 78
        }, {
          k: 'Gazebo with cup holders',
          x: 80,
          y: 26
        }];
        const [found, setFound] = React.useState([]);
        const [misses, setMisses] = React.useState(0);
        const [toast, setToast] = React.useState(null);
        const [hint, setHint] = React.useState(false);
        React.useEffect(() => {
          setScore(found.length + '/3 found');
        }, [found]);
        const click = e => {
          const r = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width * 100,
            y = (e.clientY - r.top) / r.height * 100;
          const hit = targets.find(t => !found.includes(t.k) && Math.hypot(t.x - x, (t.y - y) * 0.6) < 7);
          if (hit) {
            setFound([...found, hit.k]);
            setToast('Reported: ' + hit.k.toLowerCase() + '.');
          } else {
            setMisses(misses + 1);
            setToast(['That is just a regular tourist.', 'That is a lifeguard. Leave him alone.', 'That is a seagull. Innocent.', 'False report. Gateway sighs.'][misses % 4]);
          }
        };
        const reset = () => {
          setFound([]);
          setMisses(0);
          setToast(null);
          setHint(false);
        };
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 28,
            alignItems: 'flex-start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '999 1 560px',
            minWidth: 0,
            position: 'relative',
            border: '2px solid var(--ink)',
            boxShadow: 'var(--shadow-hard)',
            cursor: 'crosshair'
          },
          onClick: click
        }, /*#__PURE__*/React.createElement(Halftone, {
          height: 540,
          dot: 6,
          placeholder: "beach",
          caption: "FIG. 2 \u2014 North Beach (placeholder scene)"
        }), targets.map(t => (found.includes(t.k) || hint) && /*#__PURE__*/React.createElement("span", {
          key: t.k,
          style: {
            position: 'absolute',
            left: t.x + '%',
            top: t.y + '%',
            transform: 'translate(-50%,-50%)',
            width: 70,
            height: 70,
            borderRadius: '50%',
            border: found.includes(t.k) ? '3px solid var(--ink)' : '2px dashed var(--ink)',
            background: found.includes(t.k) ? 'rgba(255,90,46,.45)' : 'transparent',
            pointerEvents: 'none'
          }
        })), toast && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            left: 12,
            top: 12,
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            fontWeight: 700,
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            padding: '6px 10px',
            pointerEvents: 'none'
          }
        }, toast)), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 260px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            ...bigHead,
            fontSize: 40
          }
        }, "Find the vaalie."), /*#__PURE__*/React.createElement("div", {
          style: {
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)'
          }
        }, targets.map((t, i) => /*#__PURE__*/React.createElement("div", {
          key: t.k,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 12px',
            borderTop: i ? '1px dashed var(--ink-3)' : 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            textDecoration: found.includes(t.k) ? 'line-through' : 'none'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 20,
            height: 20,
            border: '2px solid var(--ink)',
            display: 'grid',
            placeItems: 'center',
            background: found.includes(t.k) ? 'var(--yellow)' : 'transparent',
            fontSize: 12,
            fontWeight: 700
          }
        }, found.includes(t.k) ? '✓' : ''), t.k))), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--ink-2)'
          }
        }, "False reports: ", misses), misses >= 3 && !hint && found.length < 3 && /*#__PURE__*/React.createElement(Button, {
          size: "sm",
          onClick: () => setHint(true)
        }, "Ask a lifeguard (hint)")), found.length === 3 && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'fixed',
            inset: 0,
            zIndex: 5,
            display: 'grid',
            placeItems: 'center',
            background: 'rgba(242,241,236,.6)',
            padding: 16
          }
        }, /*#__PURE__*/React.createElement(Dialog, {
          title: "spot_the_vaalie.exe",
          kind: "success",
          heading: "Vaalie confirmed.",
          onClose: reset,
          actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            onClick: onBack
          }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            onClick: reset
          }, "Play again"))
        }, "All three details reported with ", misses, " false alarm", misses === 1 ? '' : 's', ". The coast thanks you. Be gentle; they are on holiday.")));
      }

      /* GAME-03 */
      const JA_STATEMENTS = [['A robot is a traffic light.', true], ['Baggies are formal attire on the coast.', true], ['A bunny is a small rabbit, served whole.', false], ['“Chips!” means the food has arrived.', false], ['Kiff means good.', true], ['Larney means cheap.', false], ['Shot means thanks.', true], ['Smaak means you like it a lot.', true], ['A laatie is an elderly gentleman.', false], ['Your pozi is your home.', true], ['Forks are required for bunny chow.', false], ['Vy means to go.', true], ['Gqom is dance music.', true], ['Ducking out means hiding from ducks.', false], ['A prawn can be a person.', true], ['A kook has mastered surfing.', false], ['Yano means “you know”.', true], ['Logging means cutting down trees.', false], ['Mfethu is warmer than bru.', true], ['A vaalie wears socks with slops.', true], ['Tops means the worst.', false], ['Dala means to do.', true]];
      function JaNoLakaGame({
        setScore,
        onBack
      }) {
        const {
          Button
        } = gameNS;
        const [phase, setPhase] = React.useState('ready');
        const [deck, setDeck] = React.useState([]);
        const [i, setI] = React.useState(0);
        const [pts, setPts] = React.useState(0);
        const [left, setLeft] = React.useState(45);
        const [flash, setFlash] = React.useState(null);
        const start = () => {
          setDeck([...JA_STATEMENTS].sort(() => Math.random() - 0.5));
          setI(0);
          setPts(0);
          setLeft(45);
          setFlash(null);
          setPhase('play');
        };
        React.useEffect(() => {
          if (phase !== 'play') return;
          const t = setInterval(() => setLeft(l => {
            if (l <= 1) {
              clearInterval(t);
              setPhase('done');
              return 0;
            }
            return l - 1;
          }), 1000);
          return () => clearInterval(t);
        }, [phase]);
        React.useEffect(() => {
          setScore(pts + ' soft-serve' + (pts === 1 ? '' : 's'));
        }, [pts]);
        const answer = v => {
          if (phase !== 'play') return;
          const ok = deck[i][1] === v;
          if (ok) setPts(p => p + 1);
          setFlash(ok ? 'ok' : 'no');
          setTimeout(() => setFlash(null), 260);
          if (i + 1 >= deck.length) setPhase('done');else setI(i + 1);
        };
        React.useEffect(() => {
          const k = e => {
            if (e.key === 'j' || e.key === 'J') answer(true);
            if (e.key === 'n' || e.key === 'N') answer(false);
          };
          addEventListener('keydown', k);
          return () => removeEventListener('keydown', k);
        });
        const verdict = pts >= 18 ? 'Fluent. Possibly born on the beachfront.' : pts >= 12 ? 'Bru-level. Respectable.' : pts >= 6 ? 'Laatie-level. Keep practising.' : 'Vaalie-level. The Dictionary is right there.';
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 28,
            textAlign: 'center'
          }
        }, phase === 'ready' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
          style: bigHead
        }, "Ja or no laka?"), /*#__PURE__*/React.createElement("p", {
          style: {
            ...monoP,
            maxWidth: 520
          }
        }, "45 seconds. One point per correct answer, paid in soft-serves. Use the buttons or your J and N keys."), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "lg",
          brackets: true,
          onClick: start
        }, "Start the clock")), phase === 'play' && deck[i] && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 24,
            fontFamily: 'var(--font-pixel)',
            fontSize: 28
          }
        }, /*#__PURE__*/React.createElement("span", null, String(left).padStart(2, '0'), "s"), /*#__PURE__*/React.createElement("span", null, String(i + 1).padStart(2, '0'), "/", deck.length)), /*#__PURE__*/React.createElement("div", {
          style: {
            width: 'min(760px, 100%)',
            minHeight: 220,
            display: 'grid',
            placeItems: 'center',
            padding: '28px 24px',
            border: '3px solid var(--ink)',
            boxShadow: 'var(--shadow-hard-lg)',
            background: flash === 'ok' ? 'var(--yellow)' : flash === 'no' ? 'var(--ink)' : 'var(--paper-2)',
            color: flash === 'no' ? 'var(--paper-2)' : 'var(--ink)',
            transition: 'background 80ms linear'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.6vw, 44px)',
            lineHeight: 1.1,
            textWrap: 'balance'
          }
        }, deck[i][0])), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
            justifyContent: 'center'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "lg",
          onClick: () => answer(true),
          style: {
            minWidth: 200
          }
        }, "JA (J)"), /*#__PURE__*/React.createElement(Button, {
          size: "lg",
          onClick: () => answer(false),
          style: {
            minWidth: 200
          }
        }, "NO LAKA (N)"))), phase === 'done' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
          style: bigHead
        }, pts, " soft-serve", pts === 1 ? '' : 's', "."), /*#__PURE__*/React.createElement("p", {
          style: {
            ...monoP,
            maxWidth: 520
          }
        }, verdict), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement(Button, {
          onClick: onBack
        }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          brackets: true,
          onClick: start
        }, "Play again"))));
      }

      /* GAME-04 */
      function DurdleGame({
        setScore
      }) {
        const {
          Button
        } = gameNS;
        const ANSWERS = ['CHOON', 'BUNNY', 'SMAAK', 'CHIPS'];
        const answer = ANSWERS[Math.floor(Date.now() / 864e5) % ANSWERS.length];
        const [rows, setRows] = React.useState([]);
        const [cur, setCur] = React.useState('');
        const [msg, setMsg] = React.useState(null);
        const done = rows.includes(answer) || rows.length >= 6;
        const grade = g => {
          const res = Array(5).fill('x');
          const pool = answer.split('');
          g.split('').forEach((c, i) => {
            if (c === answer[i]) {
              res[i] = 'g';
              pool[i] = null;
            }
          });
          g.split('').forEach((c, i) => {
            if (res[i] !== 'g') {
              const j = pool.indexOf(c);
              if (j > -1) {
                res[i] = 'y';
                pool[j] = null;
              }
            }
          });
          return res;
        };
        const keyState = {};
        rows.forEach(r => {
          const g = grade(r);
          r.split('').forEach((c, i) => {
            const s = g[i];
            if (s === 'g' || s === 'y' && keyState[c] !== 'g' || !keyState[c]) keyState[c] = s;
          });
        });
        const press = k => {
          if (done) return;
          if (k === 'ENTER') {
            if (cur.length < 5) {
              setMsg('Five letters, bru.');
              return;
            }
            const n = [...rows, cur];
            setRows(n);
            setCur('');
            if (cur === answer) {
              setMsg(['Lekker first try. Suspicious.', 'Shap. Two tries.', 'Three tries. Solid.', 'Four. Fine.', 'Five. Close one.', 'Six. Just.'][n.length - 1]);
              setScore('Solved in ' + n.length);
            } else if (n.length >= 6) {
              setMsg('Eish. It was ' + answer + '. The Dictionary has it.');
              setScore('Unsolved');
            } else setMsg(null);
            return;
          }
          if (k === '⌫') {
            setCur(cur.slice(0, -1));
            return;
          }
          if (/^[A-Z]$/.test(k) && cur.length < 5) setCur(cur + k);
        };
        React.useEffect(() => {
          const h = e => {
            const k = e.key === 'Enter' ? 'ENTER' : e.key === 'Backspace' ? '⌫' : e.key.toUpperCase();
            press(k);
          };
          addEventListener('keydown', h);
          return () => removeEventListener('keydown', h);
        });
        React.useEffect(() => {
          setScore(Math.min(rows.length + 1, 6) + '/6');
        }, []);
        const cell = s => ({
          g: {
            background: 'var(--yellow)',
            color: 'var(--ink)'
          },
          y: {
            background: 'var(--ink)',
            color: 'var(--paper-2)'
          },
          x: {
            background: 'var(--paper-4)',
            color: 'var(--ink)'
          }
        })[s] || {
          background: 'var(--paper-2)',
          color: 'var(--ink)'
        };
        const grid = Array.from({
          length: 6
        }, (_, r) => rows[r] ? {
          t: rows[r],
          g: grade(rows[r])
        } : r === rows.length ? {
          t: cur.padEnd(5),
          g: []
        } : {
          t: '     ',
          g: []
        });
        const kb = ['QWERTYUIOP', 'ASDFGHJKL', 'ENTER ZXCVBNM ⌫'];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 22
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.08em'
          }
        }, "DURDLE NO. ", Math.floor(Date.now() / 864e5) % 1000, " \xB7 TODAY\u2019S WORD IS IN THE DICTIONARY"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gap: 6
          }
        }, grid.map((row, r) => /*#__PURE__*/React.createElement("div", {
          key: r,
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 58px)',
            gap: 6
          }
        }, row.t.split('').map((c, i) => /*#__PURE__*/React.createElement("span", {
          key: i,
          style: {
            height: 58,
            display: 'grid',
            placeItems: 'center',
            border: '2px solid var(--ink)',
            fontFamily: 'var(--font-pixel)',
            fontSize: 30,
            ...cell(row.g[i])
          }
        }, c.trim()))))), /*#__PURE__*/React.createElement("div", {
          style: {
            minHeight: 24,
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            fontWeight: 700
          }
        }, msg), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            alignItems: 'center',
            width: '100%'
          }
        }, kb.map((row, ri) => /*#__PURE__*/React.createElement("div", {
          key: ri,
          style: {
            display: 'flex',
            gap: 5,
            justifyContent: 'center',
            width: '100%'
          }
        }, (ri === 2 ? row.split(' ').flatMap((p, j) => j === 1 ? p.split('') : [p]) : row.split('')).map(k => /*#__PURE__*/React.createElement("button", {
          key: k,
          type: "button",
          onClick: () => press(k),
          style: {
            minWidth: k.length > 1 ? 72 : 38,
            flex: k.length > 1 ? '0 0 auto' : '0 1 44px',
            height: 50,
            border: '2px solid var(--ink)',
            borderRadius: 0,
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: k.length > 1 ? 11 : 15,
            fontWeight: 700,
            ...cell(keyState[k])
          }
        }, k))))), done && /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          brackets: true,
          onClick: () => {
            setRows([]);
            setCur('');
            setMsg(null);
          }
        }, "Practise again"));
      }

      /* GAME-05 */
      const PACK_ITEMS = [{
        k: 'Baggies',
        ok: true
      }, {
        k: 'Sunscreen',
        ok: true
      }, {
        k: 'Slops',
        ok: true
      }, {
        k: 'Towel',
        ok: true
      }, {
        k: 'Wetsuit',
        ok: false,
        h: '⚠ Error: wetsuit detected.',
        b: 'Baggies required.',
        a: ['OK', 'OK, bru']
      }, {
        k: 'Fork',
        ok: false,
        h: 'ABSOLUTELY NOT',
        b: 'Forks are not permitted within 50km of a bunny.',
        a: ['Remove fork']
      }, {
        k: 'Socks',
        ok: false,
        h: 'Vaalie behaviour detected.',
        b: 'Socks with slops is a serious offence on the coast.',
        a: ['Sorry', 'It won’t happen again']
      }, {
        k: 'Gazebo with cup holders',
        ok: false,
        h: 'Error: gazebo too larney.',
        b: 'The beach is free. So is the shade under someone else’s umbrella.',
        a: ['OK, fine']
      }];
      function PackGame({
        setScore,
        onBack
      }) {
        const {
          Button,
          Dialog,
          Icon
        } = gameNS;
        const [packed, setPacked] = React.useState([]);
        const [err, setErr] = React.useState(null);
        const [over, setOver] = React.useState(false);
        const need = PACK_ITEMS.filter(i => i.ok).length;
        React.useEffect(() => {
          setScore(packed.length + '/' + need + ' packed');
        }, [packed]);
        const pack = k => {
          const it = PACK_ITEMS.find(i => i.k === k);
          if (!it) return;
          if (!it.ok) return setErr(it);
          if (!packed.includes(k)) setPacked([...packed, k]);
        };
        const won = packed.length === need;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            alignItems: 'flex-start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 360px',
            display: 'flex',
            flexDirection: 'column',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            ...bigHead,
            fontSize: 44
          }
        }, "Pack for Durban."), /*#__PURE__*/React.createElement("p", {
          style: monoP
        }, "Drag to the suitcase or click to pack. Some items will be refused."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: 10
          }
        }, PACK_ITEMS.map(it => {
          const p = packed.includes(it.k);
          return /*#__PURE__*/React.createElement("button", {
            key: it.k,
            type: "button",
            draggable: !p,
            onDragStart: e => e.dataTransfer.setData('text/plain', it.k),
            onClick: () => pack(it.k),
            disabled: p,
            style: {
              minHeight: 64,
              padding: '10px 12px',
              border: '2px solid var(--ink)',
              borderRadius: 0,
              background: p ? 'var(--paper-3)' : 'var(--paper-2)',
              cursor: p ? 'default' : 'grab',
              fontFamily: 'var(--font-mono)',
              fontSize: 14,
              fontWeight: 700,
              textAlign: 'left',
              textDecoration: p ? 'line-through' : 'none',
              color: 'var(--ink)',
              boxShadow: p ? 'none' : 'var(--shadow-hard-sm)'
            }
          }, it.k);
        }))), /*#__PURE__*/React.createElement("div", {
          onDragOver: e => {
            e.preventDefault();
            setOver(true);
          },
          onDragLeave: () => setOver(false),
          onDrop: e => {
            e.preventDefault();
            setOver(false);
            pack(e.dataTransfer.getData('text/plain'));
          },
          style: {
            flex: '1 1 320px',
            position: 'relative',
            marginTop: 30,
            minHeight: 340,
            border: '3px solid var(--ink)',
            background: over ? 'var(--yellow)' : 'var(--paper-2)',
            boxShadow: 'var(--shadow-hard-lg)',
            padding: '40px 22px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            top: -26,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 120,
            height: 24,
            border: '3px solid var(--ink)',
            borderBottom: 'none'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.1em'
          }
        }, "SUITCASE \xB7 ", packed.length, "/", need), packed.length === 0 && /*#__PURE__*/React.createElement("div", {
          style: {
            ...monoP,
            color: 'var(--ink-3)',
            marginTop: 40,
            textAlign: 'center'
          }
        }, "Drop items here."), packed.map(k => /*#__PURE__*/React.createElement("div", {
          key: k,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: 'var(--font-mono)',
            fontSize: 16,
            fontWeight: 700
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "check",
          size: 20
        }), k))), (err || won) && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'fixed',
            inset: 0,
            zIndex: 5,
            display: 'grid',
            placeItems: 'center',
            background: 'rgba(242,241,236,.6)',
            padding: 16
          }
        }, err ? /*#__PURE__*/React.createElement(Dialog, {
          title: "pack_for_durban.exe",
          kind: "error",
          heading: err.h,
          onClose: () => setErr(null),
          actions: err.a.map((a, i) => /*#__PURE__*/React.createElement(Button, {
            key: a,
            size: "sm",
            variant: i === err.a.length - 1 ? 'primary' : 'secondary',
            onClick: () => setErr(null)
          }, a))
        }, err.b) : /*#__PURE__*/React.createElement(Dialog, {
          title: "pack_for_durban.exe",
          kind: "success",
          heading: "Packed. Vy.",
          onClose: () => setPacked([]),
          actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            onClick: onBack
          }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            onClick: () => setPacked([])
          }, "Pack again"))
        }, "Baggies, sunscreen, slops, towel. Everything you actually need.")));
      }

      /* GAME-06 */
      function TwoPmGame({
        setScore,
        onBack
      }) {
        const {
          Button,
          Icon,
          AnswerOption
        } = gameNS;
        const [now, setNow] = React.useState(new Date());
        const [force, setForce] = React.useState(false);
        const [qs] = React.useState(() => [...window.LSD_DATA.exam].sort(() => Math.random() - 0.5).slice(0, 5));
        const [i, setI] = React.useState(0);
        const [pick, setPick] = React.useState(null);
        const [pts, setPts] = React.useState(0);
        React.useEffect(() => {
          const t = setInterval(() => setNow(new Date()), 1000);
          return () => clearInterval(t);
        }, []);
        const open = force || now.getHours() >= 14;
        React.useEffect(() => {
          setScore(open ? pts + '/5' : 'Locked');
        }, [open, pts]);
        if (!open) {
          const t = new Date(now);
          t.setHours(14, 0, 0, 0);
          const s = Math.max(0, Math.floor((t - now) / 1000));
          const hms = [Math.floor(s / 3600), Math.floor(s / 60) % 60, s % 60].map(n => String(n).padStart(2, '0')).join(':');
          return /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 24,
              textAlign: 'center'
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              width: 120,
              height: 120,
              display: 'grid',
              placeItems: 'center',
              border: '3px solid var(--ink)',
              background: 'var(--ink)',
              color: 'var(--yellow)',
              boxShadow: 'var(--shadow-hard)'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "lock",
            size: 72
          })), /*#__PURE__*/React.createElement("h2", {
            style: bigHead
          }, "Come back after the beach."), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-pixel)',
              fontSize: 'clamp(44px, 7vw, 80px)',
              lineHeight: 1
            }
          }, hms), /*#__PURE__*/React.createElement("p", {
            style: {
              ...monoP,
              maxWidth: 480
            }
          }, "The 2pm Quiz opens at 14:00 sharp. Until then Gateway recommends sunscreen, a swim and a quarter mutton."), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }
          }, /*#__PURE__*/React.createElement(Button, {
            onClick: onBack
          }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
            variant: "ghost",
            onClick: () => setForce(true)
          }, "I\u2019m already at the beach (open anyway)")));
        }
        if (i >= qs.length) return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 22,
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: bigHead
        }, pts, "/5."), /*#__PURE__*/React.createElement("p", {
          style: {
            ...monoP,
            maxWidth: 480
          }
        }, pts === 5 ? 'Perfect. Go back to the beach, you’ve earned it.' : pts >= 3 ? 'Decent. The afternoon is young.' : 'The sun got to you. Try again tomorrow at 2.'), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          brackets: true,
          onClick: onBack
        }, "Back to Activities"));
        const q = qs[i];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 760,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 18
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-pixel)',
            fontSize: 26
          }
        }, "QUESTION ", i + 1, "/5"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 700,
            fontSize: 'clamp(26px, 3.4vw, 38px)',
            lineHeight: 1.1,
            textWrap: 'balance'
          }
        }, q.q), q.a.map((a, k) => /*#__PURE__*/React.createElement(AnswerOption, {
          key: k,
          letter: 'abc'[k],
          state: pick === null ? 'idle' : k === q.c ? 'correct' : k === pick ? 'wrong' : 'idle',
          disabled: pick !== null,
          onClick: () => {
            setPick(k);
            if (k === q.c) setPts(pts + 1);
          }
        }, a)), pick !== null && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'flex-end'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          onClick: () => {
            setPick(null);
            setI(i + 1);
          }
        }, i === 4 ? 'See score' : 'Next, bru')));
      }
      function GameScreen({
        id,
        onBack
      }) {
        const [score, setScore] = React.useState(null);
        const C = {
          'game-01': SayGqomGame,
          'game-02': SpotVaalieGame,
          'game-03': JaNoLakaGame,
          'game-04': DurdleGame,
          'game-05': PackGame,
          'game-06': TwoPmGame
        }[id];
        if (!C) return null;
        return /*#__PURE__*/React.createElement(GameShell, {
          id: id,
          score: score,
          onBack: onBack
        }, /*#__PURE__*/React.createElement(C, {
          setScore: setScore,
          onBack: onBack
        }));
      }
      Object.assign(window, {
        GameScreen,
        GAME_META
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/microsite/Games.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/microsite/Landing.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const landNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      function HeroCard({
        go,
        mobile
      }) {
        const {
          Button,
          Barcode,
          RefCode
        } = landNS;
        return /*#__PURE__*/React.createElement("section", {
          style: {
            position: 'relative',
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            boxShadow: mobile ? 'var(--shadow-hard)' : '10px 10px 0 var(--ink)',
            padding: mobile ? '36px 20px 24px' : '56px 56px 48px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: mobile ? 28 : 48
          }
        }, /*#__PURE__*/React.createElement(RefCode, {
          code: "LSD-2026",
          style: {
            position: 'absolute',
            top: 10,
            left: 12
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: mobile ? 20 : 28,
            minWidth: 0,
            flex: '1 1 560px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: mobile ? 11 : 13,
            letterSpacing: '0.16em',
            textTransform: 'uppercase'
          }
        }, "A public service by Gateway"), /*#__PURE__*/React.createElement("h1", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: mobile ? 62 : 'clamp(56px, 8.6vw, 140px)',
            lineHeight: 0.84,
            letterSpacing: '-0.025em',
            textTransform: 'uppercase'
          }
        }, "Learn to", /*#__PURE__*/React.createElement("br", null), "Speak ", /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-pixel)',
            fontWeight: 400,
            fontStretch: '100%',
            fontSize: '0.86em',
            letterSpacing: '-0.04em',
            background: 'var(--yellow)',
            padding: '0 0.06em'
          }
        }, "Durban")), /*#__PURE__*/React.createElement("div", {
          style: {
            height: 2,
            background: 'var(--ink)'
          }
        }), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            maxWidth: 560,
            fontFamily: 'var(--font-mono)',
            fontSize: mobile ? 14 : 16,
            lineHeight: 1.55,
            textWrap: 'pretty'
          }
        }, "32 lessons of real Durban slang. A final exam you can write right here. A certificate of fluency with your name on it \u2014 redeemable at Gateway, Durban."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "lg",
          brackets: true,
          onClick: () => go('dict')
        }, "Begin Lesson 1"), /*#__PURE__*/React.createElement(Button, {
          size: "lg",
          onClick: () => go('exam')
        }, "Skip to exam (brave)"))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: mobile ? 'column-reverse' : 'column',
            justifyContent: 'space-between',
            gap: 24,
            flex: mobile ? '1 1 100%' : '0 1 340px',
            minWidth: mobile ? 0 : 280,
            borderLeft: mobile ? 'none' : '2px solid var(--ink)',
            paddingLeft: mobile ? 0 : 40
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: mobile ? 'flex-start' : 'flex-end',
            gap: 6
          }
        }, /*#__PURE__*/React.createElement(Barcode, {
          value: "LSD-2026-DBN",
          width: mobile ? 200 : 300,
          height: mobile ? 44 : 72
        }), /*#__PURE__*/React.createElement(RefCode, {
          prefix: "",
          code: "Course No. 4001 \xB7 Coastal dialect \xB7 Humidity: 87%"
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            border: '2px solid var(--ink)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '7px 12px',
            background: 'var(--paper-3)',
            borderBottom: '1px solid var(--ink)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.08em'
          }
        }, /*#__PURE__*/React.createElement("span", null, "ENROLMENT"), /*#__PURE__*/React.createElement("span", null, "OPEN")), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '14px 12px',
            fontFamily: 'var(--font-mono)',
            fontSize: 15,
            fontWeight: 700,
            lineHeight: 1.45
          }
        }, "Course fee: free.", /*#__PURE__*/React.createElement("br", null), "Fluency: guaranteed-ish."))), !mobile && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            right: 10,
            bottom: 10,
            width: 28,
            height: 28,
            borderRight: '2px solid var(--ink)',
            borderBottom: '2px solid var(--ink)'
          }
        }));
      }
      function Landing({
        go,
        mobile
      }) {
        const {
          FolderCard,
          StatusStrip
        } = landNS;
        const sections = [{
          id: 'dict',
          index: '01',
          title: 'The Dictionary',
          description: '32 words, filed by an intern who has since gone surfing. Pull a card. Hear it on the radio.',
          meta: '32 entries'
        }, {
          id: 'act',
          index: '02',
          title: 'Activities',
          description: 'Six games for practical study. Some require a microphone. One requires 2pm.',
          meta: '6 games'
        }, {
          id: 'merch',
          index: '03',
          title: 'Merch',
          description: 'Course materials. Mostly tees. One cooler box, metaphorically.',
          meta: '8 items'
        }, {
          id: 'submit',
          index: '04',
          title: 'Submit a Word',
          description: 'Heard a word at the taxi rank we don’t know? Report it. Gateway will investigate.',
          meta: 'Open to the public'
        }, {
          id: 'study',
          index: '05',
          title: 'Study Pack',
          description: 'Download the course before take-off. Study at 10,000 metres. Practise on seat 14B.',
          meta: 'Works offline'
        }, {
          id: 'card',
          index: '06',
          title: 'Student Card',
          description: 'Upload a selfie. Gateway pixelates it. Your ex sees it on your story.',
          meta: '1080 × 1920'
        }, {
          id: 'exam',
          index: '07',
          title: 'The Final Exam',
          description: '32 questions, one per lesson. Pass and the certificate prints itself. Fail and the ocean waits.',
          meta: '32 questions'
        }];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: mobile ? 36 : 56,
            paddingTop: mobile ? 20 : 48
          }
        }, /*#__PURE__*/React.createElement(HeroCard, {
          go: go,
          mobile: mobile
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: mobile ? '1fr' : 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: mobile ? 22 : 24
          }
        }, sections.map((s, i) => /*#__PURE__*/React.createElement(FolderCard, _extends({
          key: s.id
        }, s, {
          active: !mobile && i === 1 ? undefined : undefined,
          tabOffset: mobile ? 0 : [0, 24, 48, 12, 36, 60, 18][i],
          onClick: () => go(s.id)
        })))), /*#__PURE__*/React.createElement(StatusStrip, {
          items: ['Current ocean temperature: 24°C', 'Lessons: 32', 'Forks required: 0']
        }));
      }
      Object.assign(window, {
        Landing,
        HeroCard
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/microsite/Landing.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/microsite/Merch.jsx
  try {
    (() => {
      const merchNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      function MerchPreview({
        m
      }) {
        const {
          Halftone
        } = merchNS;
        const overlay = m.tee ? m.name : m.kind === 'Bumper sticker' ? 'FLUENT IN DURBAN' : m.kind === 'Cap' ? 'NATIVE SPEAKER' : null;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0
          }
        }, /*#__PURE__*/React.createElement(Halftone, {
          height: "100%",
          dot: 5,
          placeholder: m.kind === 'Bundle' || m.kind === 'Towel' ? 'beach' : 'product'
        }), overlay && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            left: '50%',
            top: '44%',
            transform: 'translate(-50%,-50%)',
            background: 'var(--paper-2)',
            border: '2px solid var(--ink)',
            padding: '6px 10px',
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: m.tee ? 34 : 15,
            lineHeight: 1,
            whiteSpace: 'nowrap'
          }
        }, overlay));
      }
      function Merch({
        cart,
        setCart
      }) {
        const {
          SpecCard,
          Button,
          Dialog,
          Icon
        } = merchNS;
        const [added, setAdded] = React.useState(null);
        const items = window.LSD_DATA.merch;
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
          index: "03",
          kicker: "Course materials \xB7 compulsory-ish",
          title: "Merch",
          right: /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              border: '2px solid var(--ink)',
              background: 'var(--paper-2)',
              padding: '10px 14px',
              boxShadow: 'var(--shadow-hard-sm)'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "cooler-box",
            size: 40
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              lineHeight: 1.4
            }
          }, /*#__PURE__*/React.createElement("b", null, "Cooler box"), /*#__PURE__*/React.createElement("br", null), cart, " item", cart === 1 ? '' : 's', " \xB7 kept cold"))
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: 24
          }
        }, items.map(m => /*#__PURE__*/React.createElement(SpecCard, {
          key: m.id,
          refCode: m.id,
          meta: m.kind,
          label: m.tee ? 'Tee' : m.name,
          crosshair: false,
          previewHeight: 250,
          sourceLabel: "PRICE",
          sourceTag: m.price,
          source: m.desc,
          interactive: true,
          footer: /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "accent",
            block: true,
            onClick: () => {
              setCart(cart + 1);
              setAdded(m);
            }
          }, "Vy to checkout")
        }, /*#__PURE__*/React.createElement(MerchPreview, {
          m: m
        })))), added && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'fixed',
            right: 40,
            bottom: 40,
            zIndex: 30
          }
        }, /*#__PURE__*/React.createElement(Dialog, {
          title: "cooler_box.exe",
          kind: "success",
          heading: "Packed in the cooler.",
          width: 360,
          onClose: () => setAdded(null),
          actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            onClick: () => setAdded(null)
          }, "Keep shopping"), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            onClick: () => setAdded(null)
          }, "Chow now"))
        }, added.name, " (", added.kind, ") \u2014 ", added.price, ". Kept cold until checkout. Like a good cooler box should.")));
      }
      Object.assign(window, {
        Merch
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/microsite/Merch.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/microsite/Shell.jsx
  try {
    (() => {
      const shellNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      const NAV_ITEMS = [{
        id: 'home',
        index: '00',
        label: 'Index'
      }, {
        id: 'dict',
        index: '01',
        label: 'Dictionary'
      }, {
        id: 'act',
        index: '02',
        label: 'Activities'
      }, {
        id: 'merch',
        index: '03',
        label: 'Merch'
      }, {
        id: 'submit',
        index: '04',
        label: 'Submit'
      }, {
        id: 'study',
        index: '05',
        label: 'Study'
      }, {
        id: 'card',
        index: '06',
        label: 'ID Card'
      }, {
        id: 'exam',
        index: '07',
        label: 'Final Exam'
      }];
      function Masthead({
        page,
        go,
        cart = 0,
        mobile,
        compactNav
      }) {
        const {
          FolderTabs,
          Icon,
          RefCode
        } = shellNS;
        return /*#__PURE__*/React.createElement("header", {
          style: {
            position: 'sticky',
            top: 0,
            zIndex: 20,
            background: 'var(--paper)',
            paddingTop: mobile ? 12 : 18
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--page-max)',
            margin: '0 auto',
            padding: mobile ? '0 16px' : '0 64px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            paddingBottom: 12
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => go('home'),
          style: {
            all: 'unset',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'baseline',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: mobile ? 17 : 20,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em'
          }
        }, "Learn to Speak Durban"), !mobile && /*#__PURE__*/React.createElement(RefCode, {
          code: "LSD-2026"
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontFamily: 'var(--font-mono)',
            fontSize: 12
          }
        }, !mobile && /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--ink-3)'
          }
        }, "Ocean 24\xB0C \xB7 Tide: going out \xB7 Vibes: tops"), /*#__PURE__*/React.createElement("button", {
          onClick: () => go('merch'),
          "aria-label": "Cooler box",
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            border: '2px solid var(--ink)',
            background: cart ? 'var(--yellow)' : 'var(--paper-2)',
            padding: '5px 10px',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            fontWeight: 700
          }
        }, /*#__PURE__*/React.createElement(shellNS.Icon, {
          name: "cooler-box",
          size: 20
        }), String(cart).padStart(2, '0')))), !mobile && !compactNav && /*#__PURE__*/React.createElement(FolderTabs, {
          items: NAV_ITEMS,
          active: page,
          onChange: go
        })));
      }
      function Footer({
        mobile
      }) {
        const {
          Barcode,
          RefCode
        } = shellNS;
        return /*#__PURE__*/React.createElement("footer", {
          style: {
            marginTop: 96,
            borderTop: '2px solid var(--ink)',
            background: 'var(--paper-2)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--page-max)',
            margin: '0 auto',
            padding: mobile ? '24px 16px 32px' : '28px 64px 36px',
            display: 'flex',
            flexDirection: mobile ? 'column' : 'row',
            gap: 24,
            alignItems: mobile ? 'flex-start' : 'center',
            justifyContent: 'space-between'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 14
          }
        }, "Learn to Speak Durban. A public service by Gateway."), /*#__PURE__*/React.createElement(RefCode, {
          code: "LSD-2026 \xB7 No forks were harmed in the making of this website"
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 20
          }
        }, !mobile && /*#__PURE__*/React.createElement(Barcode, {
          value: "GATEWAY-DBN",
          width: 120,
          height: 34
        }), /*#__PURE__*/React.createElement("img", {
          src: window.__resources && window.__resources.gatewayLogo || (window.LSD_ASSETS || 'assets/') + 'logos/gateway-logo.png',
          alt: "Gateway",
          style: {
            width: mobile ? 64 : 76,
            height: 'auto',
            display: 'block'
          }
        }))));
      }
      function PageHead({
        index,
        title,
        kicker,
        right
      }) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 32,
            margin: '48px 0 32px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase'
          }
        }, index, " \u2014 ", kicker), /*#__PURE__*/React.createElement("h1", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontStretch: '88%',
            fontSize: 'clamp(48px, 6.2vw, 88px)',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase'
          }
        }, title)), right);
      }
      Object.assign(window, {
        Masthead,
        Footer,
        PageHead,
        NAV_ITEMS
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/microsite/Shell.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/microsite/StudentCard.jsx
  try {
    (() => {
      const cardNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      const CARD_W = 1080,
        CARD_H = 1920;
      const LEVELS = [['VAALIE', 'Still wearing socks with slops'], ['KOOK', 'Owns a wetsuit. Working on it'], ['LAATIE', 'Young, keen, slightly sunburnt'], ['BRU', 'Says "shot" at robots'], ['FLUENT', 'Has never once asked for a fork']];
      const BAYER = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];
      function seeded(str) {
        let h = 2166136261;
        for (let i = 0; i < str.length; i++) {
          h ^= str.charCodeAt(i);
          h = Math.imul(h, 16777619);
        }
        return () => {
          h ^= h << 13;
          h ^= h >>> 17;
          h ^= h << 5;
          return (h >>> 0) % 10000 / 10000;
        };
      }
      function rrect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
      }
      function ditherPhoto(ctx, img, x, y, w, h, {
        cell,
        style,
        zoom,
        ink
      }) {
        const cols = Math.floor(w / cell),
          rows = Math.floor(h / cell);
        const off = document.createElement('canvas');
        off.width = cols;
        off.height = rows;
        const o = off.getContext('2d');
        const scale = Math.max(cols / img.width, rows / img.height) * zoom;
        const dw = img.width * scale,
          dh = img.height * scale;
        o.fillStyle = '#fff';
        o.fillRect(0, 0, cols, rows);
        o.drawImage(img, (cols - dw) / 2, (rows - dh) * 0.3, dw, dh);
        const d = o.getImageData(0, 0, cols, rows).data;
        const lum = new Float32Array(cols * rows);
        let mn = 1,
          mx = 0;
        for (let i = 0; i < cols * rows; i++) {
          const l = (0.299 * d[i * 4] + 0.587 * d[i * 4 + 1] + 0.114 * d[i * 4 + 2]) / 255;
          lum[i] = l;
          if (l < mn) mn = l;
          if (l > mx) mx = l;
        }
        const span = Math.max(0.2, mx - mn);
        ctx.fillStyle = ink;
        for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
          let l = (lum[r * cols + c] - mn) / span;
          l = Math.min(1, Math.max(0, (l - 0.5) * 1.25 + 0.5));
          const px = x + c * cell,
            py = y + r * cell;
          if (style === 'halftone') {
            const rad = cell * 0.66 * Math.sqrt(1 - l);
            if (rad > 0.4) {
              ctx.beginPath();
              ctx.arc(px + cell / 2, py + cell / 2, rad, 0, Math.PI * 2);
              ctx.fill();
            }
          } else if (l < (BAYER[r % 4][c % 4] + 0.5) / 16) ctx.fillRect(px, py, cell, cell);
        }
      }
      function drawStudentCard(canvas, o) {
        const ctx = canvas.getContext('2d');
        const css = getComputedStyle(document.documentElement);
        const ACC = css.getPropertyValue('--yellow').trim() || '#ff5a2e';
        const INK = '#111111',
          PAPER = '#ecebe4';
        const G = "'Switzer', 'Helvetica Neue', Arial, sans-serif",
          M = "'IBM Plex Mono', monospace",
          P = "'Geist Pixel', monospace";
        ctx.clearRect(0, 0, CARD_W, CARD_H);
        ctx.fillStyle = '#0b0b0b';
        ctx.fillRect(0, 0, CARD_W, CARD_H);
        const rnd = seeded('grain');
        for (let i = 0; i < 9000; i++) {
          ctx.fillStyle = `rgba(255,255,255,${0.02 + rnd() * 0.05})`;
          ctx.fillRect(rnd() * CARD_W, rnd() * CARD_H, 2, 2);
        }
        // badge holder
        ctx.fillStyle = 'rgba(255,255,255,0.045)';
        rrect(ctx, 90, 140, 900, 1700, 60);
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.7)';
        ctx.lineWidth = 4;
        rrect(ctx, 90, 140, 900, 1700, 60);
        ctx.stroke();
        ctx.strokeStyle = 'rgba(255,255,255,0.28)';
        ctx.lineWidth = 2;
        rrect(ctx, 106, 156, 868, 1668, 48);
        ctx.stroke();
        ctx.strokeStyle = 'rgba(255,255,255,0.75)';
        ctx.lineWidth = 5;
        rrect(ctx, 420, 210, 240, 64, 32);
        ctx.stroke();
        [[260, 242], [820, 242]].forEach(([cx, cy]) => {
          ctx.beginPath();
          ctx.arc(cx, cy, 30, 0, Math.PI * 2);
          ctx.stroke();
        });
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'rgba(255,255,255,0.45)';
        [322, 338, 362].forEach(yy => {
          ctx.beginPath();
          ctx.moveTo(106, yy);
          ctx.lineTo(974, yy);
          ctx.stroke();
        });
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        for (let xx = 120; xx < 962; xx += 9) ctx.fillRect(xx, 384, 4, 22);
        // paper insert
        const X0 = 150,
          Y0 = 440,
          PW = 780,
          PH = 1340,
          L = 200,
          R = 880;
        ctx.fillStyle = PAPER;
        ctx.fillRect(X0, Y0, PW, PH);
        const rule = (yy, w = 3) => {
          ctx.fillStyle = INK;
          ctx.fillRect(L, yy, R - L, w);
        };
        ctx.fillStyle = INK;
        ctx.textBaseline = 'alphabetic';
        ctx.font = `500 30px ${M}`;
        ctx.fillText('STUDENT:', L, 520);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#6b6a66';
        ctx.fillText('REF: LSD-2026', R, 520);
        ctx.textAlign = 'left';
        rule(544, 2);
        // name, fitted
        const words = (o.name || 'Your Name').trim().split(/\s+/);
        const lines = words.length > 1 ? [words[0], words.slice(1).join(' ')] : [words[0]];
        let fs = lines.length > 1 ? 112 : 124;
        ctx.font = `800 ${fs}px ${G}`;
        while (fs > 56 && Math.max(...lines.map(t => ctx.measureText(t).width)) > R - L) {
          fs -= 4;
          ctx.font = `800 ${fs}px ${G}`;
        }
        ctx.fillStyle = INK;
        const nameTop = 544 + 22 + fs * 0.74;
        lines.forEach((t, i) => ctx.fillText(t, L - 4, nameTop + i * fs * 0.92));
        const ruleY = Math.round(nameTop + (lines.length - 1) * fs * 0.92 + 30);
        rule(ruleY, 2);
        // photo + vertical barcode
        const PY = ruleY + 36,
          PHt = 1376 - PY,
          PWd = 540;
        if (o.img) ditherPhoto(ctx, o.img, L, PY, PWd, PHt, {
          cell: o.cell,
          style: o.style,
          zoom: o.zoom,
          ink: INK
        });else {
          ctx.strokeStyle = INK;
          ctx.lineWidth = 3;
          ctx.setLineDash([14, 10]);
          ctx.strokeRect(L + 2, PY + 2, PWd - 4, PHt - 4);
          ctx.setLineDash([]);
          ctx.font = `400 56px ${P}`;
          ctx.textAlign = 'center';
          ctx.fillText('FACE', L + PWd / 2, PY + PHt / 2 - 10);
          ctx.font = `500 24px ${M}`;
          ctx.fillText('GOES HERE. ANY FACE.', L + PWd / 2, PY + PHt / 2 + 34);
          ctx.fillText('YOURS IS RECOMMENDED.', L + PWd / 2, PY + PHt / 2 + 66);
          ctx.textAlign = 'left';
        }
        const br = seeded(o.no + o.name);
        let by = PY;
        ctx.fillStyle = INK;
        while (by < PY + PHt) {
          const t = 2 + Math.floor(br() * 9);
          if (br() > 0.35) ctx.fillRect(R - 96, by, 96, t);
          by += t + 2 + Math.floor(br() * 5);
        }
        // pixel stamp on photo corner
        ctx.save();
        ctx.translate(L + PWd - 70, PY + PHt - 40);
        ctx.rotate(-0.16);
        ctx.fillStyle = ACC;
        ctx.beginPath();
        ctx.arc(0, 0, 78, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = INK;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, 70, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = INK;
        ctx.textAlign = 'center';
        ctx.font = `500 15px ${M}`;
        ctx.fillText('ENROLLED', 0, -26);
        ctx.font = `400 34px ${P}`;
        ctx.fillText(o.level, 0, 12);
        ctx.font = `500 15px ${M}`;
        ctx.fillText('2026', 0, 40);
        ctx.restore();
        ctx.textAlign = 'left';
        // spec rows
        ctx.font = `600 30px ${M}`;
        ctx.fillStyle = INK;
        ctx.fillText('ID: ' + o.no, L, 1420);
        const rows = [['FLUENCY LEVEL', o.level], ['FAVOURITE WORD', o.word.toUpperCase()], ['FORKS ON PERSON', '0'], ['VALID UNTIL', 'LOW TIDE']];
        ctx.font = `400 24px ${M}`;
        rows.forEach(([k, v], i) => {
          const yy = 1474 + i * 38;
          ctx.fillStyle = '#3a3a38';
          ctx.textAlign = 'left';
          ctx.fillText(k, L, yy);
          ctx.fillStyle = INK;
          ctx.textAlign = 'right';
          ctx.font = `700 24px ${M}`;
          ctx.fillText(v, R, yy);
          ctx.font = `400 24px ${M}`;
          ctx.fillStyle = '#9a9993';
          ctx.fillRect(L, yy + 12, R - L, 1);
        });
        ctx.textAlign = 'left';
        rule(1636, 2);
        ctx.fillStyle = INK;
        ctx.font = `800 58px ${G}`;
        ctx.fillText('A public service', L - 2, 1706);
        ctx.fillText('by Gateway.', L - 2, 1758);
        if (o.logo) ctx.drawImage(o.logo, R - 112, 1652, 112, 112);
        // outside footer
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.font = `500 22px ${M}`;
        ctx.textAlign = 'center';
        ctx.fillText('LEARN TO SPEAK DURBAN · A PUBLIC SERVICE BY GATEWAY', CARD_W / 2, 1888);
        ctx.textAlign = 'left';
      }
      function StudentCard({
        mobile
      }) {
        const {
          Window,
          Button,
          Icon,
          StatusStrip
        } = cardNS;
        const canvasRef = React.useRef(null);
        const fileRef = React.useRef(null);
        const [img, setImg] = React.useState(null);
        const [name, setName] = React.useState(() => localStorage.getItem('lsd-name') || 'Thandi Mkhize');
        const [level, setLevel] = React.useState('BRU');
        const [word, setWord] = React.useState('Shap');
        const [style, setStyle] = React.useState('pixel');
        const [cell, setCell] = React.useState(8);
        const [zoom, setZoom] = React.useState(1);
        const [ready, setReady] = React.useState(false);
        const [drag, setDrag] = React.useState(false);
        const [note, setNote] = React.useState(null);
        const [logo, setLogo] = React.useState(null);
        React.useEffect(() => {
          const im = new Image();
          im.onload = () => setLogo(im);
          im.src = window.__resources && window.__resources.gatewayLogo || (window.LSD_ASSETS || 'assets/') + 'logos/gateway-logo.png';
        }, []);
        const no = React.useMemo(() => localStorage.getItem('lsd-student') || 'LSD-2026-04417', []);
        const words = window.LSD_DATA.words.map(w => w[1]);
        React.useEffect(() => {
          Promise.all(["800 120px Switzer", "400 24px 'IBM Plex Mono'", "500 24px 'IBM Plex Mono'", "700 24px 'IBM Plex Mono'", "400 40px 'Geist Pixel'"].map(f => document.fonts.load(f))).catch(() => {}).then(() => setReady(true));
        }, []);
        React.useEffect(() => {
          if (canvasRef.current) drawStudentCard(canvasRef.current, {
            img,
            name,
            level,
            word,
            style,
            cell,
            zoom,
            no,
            logo
          });
        }, [img, name, level, word, style, cell, zoom, ready, logo]);
        const load = file => {
          if (!file || !file.type.startsWith('image/')) {
            setNote('That is not a photo. Gateway checked.');
            return;
          }
          const im = new Image();
          im.onload = () => {
            setImg(im);
            setNote(null);
          };
          im.src = URL.createObjectURL(file);
        };
        const blob = () => new Promise(res => canvasRef.current.toBlob(res, 'image/png'));
        const save = async () => {
          const b = await blob();
          const a = document.createElement('a');
          a.href = URL.createObjectURL(b);
          a.download = 'lsd-student-card.png';
          a.click();
          setNote('Saved. Post it to your story. Wait for the DMs.');
        };
        const canShare = typeof navigator !== 'undefined' && navigator.canShare && navigator.canShare({
          files: [new File([''], 'x.png', {
            type: 'image/png'
          })]
        });
        const share = async () => {
          const b = await blob();
          try {
            await navigator.share({
              files: [new File([b], 'lsd-student-card.png', {
                type: 'image/png'
              })],
              text: CAPTION
            });
          } catch (e) {}
        };
        const CAPTION = 'Officially enrolled in Learn to Speak Durban, a public service by Gateway. Fluency: guaranteed-ish. Forks: 0. #LearnToSpeakDurban';
        const copy = () => {
          navigator.clipboard && navigator.clipboard.writeText(CAPTION);
          setNote('Caption copied. Paste responsibly.');
        };
        const lab = {
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '6px 10px',
          background: 'var(--paper-3)',
          borderBottom: '1px solid var(--ink)'
        };
        const box = {
          display: 'flex',
          flexDirection: 'column',
          border: '2px solid var(--ink)',
          background: 'var(--paper-2)'
        };
        const sel = {
          border: 'none',
          outline: 'none',
          background: 'transparent',
          padding: 12,
          fontFamily: 'var(--font-mono)',
          fontSize: 15,
          color: 'var(--ink)',
          borderRadius: 0,
          appearance: 'none',
          cursor: 'pointer'
        };
        const seg = (opts, val, set) => /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            borderTop: 'none'
          }
        }, opts.map(([v, l], i) => /*#__PURE__*/React.createElement("button", {
          key: v,
          type: "button",
          onClick: () => set(v),
          style: {
            flex: 1,
            padding: '10px 8px',
            border: 'none',
            borderLeft: i ? '1px solid var(--ink)' : 'none',
            background: val === v ? 'var(--ink)' : 'transparent',
            color: val === v ? 'var(--paper-2)' : 'var(--ink)',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            fontWeight: 700,
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }
        }, l)));
        const previewH = mobile ? 560 : 760;
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
          index: "06",
          kicker: "Identification \xB7 for the gram",
          title: "Student Card",
          right: /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              maxWidth: 330,
              lineHeight: 1.5
            }
          }, "Proof of enrolment. Upload a photo and Gateway pixelates it, for privacy and for style. Post it to your story. Wait for the DMs.")
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 48,
            alignItems: 'flex-start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 380px',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 20
          }
        }, /*#__PURE__*/React.createElement(Window, {
          title: "student_card.exe",
          bar: "accent",
          meta: "Form ID-07",
          controls: ['min', 'close'],
          shadow: "lg",
          padding: 0
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            padding: mobile ? 16 : 22
          }
        }, /*#__PURE__*/React.createElement("div", {
          onDragOver: e => {
            e.preventDefault();
            setDrag(true);
          },
          onDragLeave: () => setDrag(false),
          onDrop: e => {
            e.preventDefault();
            setDrag(false);
            load(e.dataTransfer.files[0]);
          },
          onClick: () => fileRef.current.click(),
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: 16,
            border: '2px dashed var(--ink)',
            background: drag ? 'var(--yellow)' : 'var(--bg-dots)',
            cursor: 'pointer'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 'none',
            width: 56,
            height: 56,
            display: 'grid',
            placeItems: 'center',
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: img ? 'check' : 'human',
          size: 32
        })), /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            fontFamily: 'var(--font-mono)'
          }
        }, /*#__PURE__*/React.createElement("b", {
          style: {
            fontSize: 14,
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }
        }, img ? 'Face received' : 'Upload a face'), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            color: 'var(--ink-2)'
          }
        }, img ? 'Click to swap it for a better angle.' : 'Drop a selfie or click. Gateway does not judge. The pixels might.')), /*#__PURE__*/React.createElement("input", {
          ref: fileRef,
          type: "file",
          accept: "image/*",
          style: {
            display: 'none'
          },
          onChange: e => load(e.target.files[0])
        })), /*#__PURE__*/React.createElement(Field, {
          label: "Name on card",
          value: name,
          onChange: setName,
          placeholder: "First and last. Or just first, like a legend.",
          autoComplete: "name"
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement("label", {
          style: box
        }, /*#__PURE__*/React.createElement("span", {
          style: lab
        }, "Fluency level"), /*#__PURE__*/React.createElement("select", {
          value: level,
          onChange: e => setLevel(e.target.value),
          style: sel
        }, LEVELS.map(([v]) => /*#__PURE__*/React.createElement("option", {
          key: v,
          value: v
        }, v)))), /*#__PURE__*/React.createElement("label", {
          style: box
        }, /*#__PURE__*/React.createElement("span", {
          style: lab
        }, "Favourite word"), /*#__PURE__*/React.createElement("select", {
          value: word,
          onChange: e => setWord(e.target.value),
          style: sel
        }, words.map(w => /*#__PURE__*/React.createElement("option", {
          key: w,
          value: w
        }, w))))), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--ink-2)',
            marginTop: -4
          }
        }, level, ": ", LEVELS.find(l => l[0] === level)[1], "."), /*#__PURE__*/React.createElement("div", {
          style: box
        }, /*#__PURE__*/React.createElement("span", {
          style: lab
        }, "Pixel treatment"), seg([['pixel', 'Pixel'], ['halftone', 'Halftone']], style, setStyle)), /*#__PURE__*/React.createElement("div", {
          style: box
        }, /*#__PURE__*/React.createElement("span", {
          style: lab
        }, "Resolution"), seg([[14, 'Chunky'], [8, 'Classic'], [5, 'Fine']], cell, setCell)), /*#__PURE__*/React.createElement("label", {
          style: {
            ...box,
            padding: 0
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            ...lab,
            display: 'flex',
            justifyContent: 'space-between'
          }
        }, /*#__PURE__*/React.createElement("span", null, "Zoom"), /*#__PURE__*/React.createElement("span", null, Math.round(zoom * 100), "%")), /*#__PURE__*/React.createElement("input", {
          type: "range",
          min: "1",
          max: "2.2",
          step: "0.05",
          value: zoom,
          onChange: e => setZoom(+e.target.value),
          style: {
            margin: 14,
            accentColor: 'var(--ink)'
          }
        })))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "lg",
          block: true,
          brackets: true,
          onClick: save
        }, "Save for the story"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10
          }
        }, canShare && /*#__PURE__*/React.createElement(Button, {
          block: true,
          onClick: share
        }, "Share"), /*#__PURE__*/React.createElement(Button, {
          block: true,
          onClick: copy
        }, "Copy caption")), note && /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            fontWeight: 700,
            padding: '8px 10px',
            border: '2px solid var(--ink)',
            background: 'var(--yellow)'
          }
        }, note))), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '0 0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            alignItems: 'flex-start',
            maxWidth: '100%'
          }
        }, /*#__PURE__*/React.createElement("canvas", {
          ref: canvasRef,
          width: CARD_W,
          height: CARD_H,
          style: {
            display: 'block',
            height: previewH,
            width: previewH * 9 / 16,
            maxWidth: '100%',
            border: '2px solid var(--ink)',
            boxShadow: 'var(--shadow-hard-lg)',
            background: '#0b0b0b'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--ink-3)',
            letterSpacing: '0.04em'
          }
        }, "FIG. 7 \u2014 Preview at ", Math.round(previewH / CARD_H * 100), "%. Exports at 1080 \xD7 1920."))), /*#__PURE__*/React.createElement(StatusStrip, {
          label: "Format",
          items: ['1080 × 1920', 'Ready for stories', 'Filter: not required', 'Forks on person: 0'],
          style: {
            marginTop: 40
          }
        }));
      }
      Object.assign(window, {
        StudentCard,
        drawStudentCard
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/microsite/StudentCard.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/microsite/Study.jsx
  try {
    (() => {
      const studyNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      const STUDY_PACKS = [{
        id: 'PACK-01',
        icon: 'book-open',
        name: 'The Dictionary',
        fmt: 'PDF · 32 entries',
        mb: 2.1,
        desc: 'Every lesson, every example line. Printable. Works at 10,000 metres.'
      }, {
        id: 'PACK-02',
        icon: 'headphone',
        name: 'Radio lessons',
        fmt: 'MP3 · 32 tracks',
        mb: 46.2,
        desc: 'Hear each word said properly. Recommended for the flight in.'
      }, {
        id: 'PACK-03',
        icon: 'card-text',
        name: 'Flashcards',
        fmt: 'PDF · 32 cards',
        mb: 1.4,
        desc: 'Cut along the dotted line. Test the person in seat 14B.'
      }, {
        id: 'PACK-04',
        icon: 'notes',
        name: 'Final exam, offline',
        fmt: 'App data',
        mb: 0.3,
        desc: 'Write the exam in flight mode. It hands itself in when you land.'
      }, {
        id: 'PACK-05',
        icon: 'gamepad',
        name: 'Ja / No Laka',
        fmt: 'App data',
        mb: 0.8,
        desc: 'The true-false game, offline. Soft-serves still counted.'
      }, {
        id: 'PACK-06',
        icon: 'calendar',
        name: 'Durdle, 30 days',
        fmt: 'App data',
        mb: 0.2,
        desc: 'A month of daily words, preloaded. No signal required.'
      }];
      function useDownloads() {
        const [prog, setProg] = React.useState(() => {
          try {
            return JSON.parse(localStorage.getItem('lsd-offline') || '{}');
          } catch (e) {
            return {};
          }
        });
        const timers = React.useRef({});
        React.useEffect(() => {
          localStorage.setItem('lsd-offline', JSON.stringify(Object.fromEntries(Object.entries(prog).filter(([, v]) => v >= 100))));
        }, [prog]);
        React.useEffect(() => () => Object.values(timers.current).forEach(clearInterval), []);
        const start = id => {
          if (timers.current[id]) return;
          setProg(p => ({
            ...p,
            [id]: 0
          }));
          timers.current[id] = setInterval(() => {
            setProg(p => {
              const v = Math.min(100, (p[id] || 0) + 9 + Math.random() * 14);
              if (v >= 100) {
                clearInterval(timers.current[id]);
                delete timers.current[id];
              }
              return {
                ...p,
                [id]: v
              };
            });
          }, 160);
        };
        const remove = id => setProg(p => {
          const n = {
            ...p
          };
          delete n[id];
          return n;
        });
        return {
          prog,
          start,
          remove
        };
      }
      function Study() {
        const {
          Window,
          Button,
          Icon,
          ProgressBar,
          StatusStrip
        } = studyNS;
        const {
          prog,
          start,
          remove
        } = useDownloads();
        const saved = STUDY_PACKS.filter(p => prog[p.id] >= 100);
        const busy = STUDY_PACKS.some(p => prog[p.id] !== undefined && prog[p.id] < 100);
        const total = STUDY_PACKS.reduce((s, p) => s + p.mb, 0);
        const savedMb = saved.reduce((s, p) => s + p.mb, 0);
        const all = saved.length === STUDY_PACKS.length;
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
          index: "05",
          kicker: "Self-study \xB7 works offline",
          title: "Study Pack",
          right: /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              maxWidth: 320,
              lineHeight: 1.5
            }
          }, "For when you're flying in. Download the course before take-off. The lessons work in flight mode. The ocean does not.")
        }), /*#__PURE__*/React.createElement(Window, {
          title: "flight_mode.exe",
          bar: "accent",
          meta: all ? 'Ready' : saved.length + '/' + STUDY_PACKS.length + ' saved',
          controls: ['min', 'close'],
          shadow: "lg",
          padding: 0
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 28,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '26px 28px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '999 1 420px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontSize: 'clamp(30px, 3.4vw, 46px)',
            lineHeight: 0.95,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em'
          }
        }, all ? 'Ready for flight mode.' : 'Save the whole course for the flight.'), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            lineHeight: 1.5,
            color: 'var(--ink-2)'
          }
        }, all ? `${savedMb.toFixed(1)} MB saved to this device. Lessons, games and the exam all work without signal.` : `Six packs, ${total.toFixed(1)} MB. Everything you need to keep studying between Joburg and the coast.`)), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 300px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement(ProgressBar, {
          label: "Saved for offline",
          value: Math.round(savedMb * 10) / 10,
          max: Math.round(total * 10) / 10,
          segments: 16,
          showCount: false
        }), all ? /*#__PURE__*/React.createElement(Button, {
          block: true,
          onClick: () => STUDY_PACKS.forEach(p => remove(p.id))
        }, "Clear downloads") : /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "lg",
          block: true,
          brackets: true,
          disabled: busy,
          onClick: () => STUDY_PACKS.forEach(p => prog[p.id] >= 100 || start(p.id))
        }, busy ? 'Packing…' : 'Save everything')))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 24,
            marginTop: 40
          }
        }, STUDY_PACKS.map(p => {
          const v = prog[p.id];
          const done = v >= 100,
            going = v !== undefined && !done;
          return /*#__PURE__*/React.createElement("div", {
            key: p.id,
            style: {
              display: 'flex',
              flexDirection: 'column',
              border: '2px solid var(--ink)',
              background: 'var(--paper-2)'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 14px',
              borderBottom: '2px solid var(--ink)',
              fontFamily: 'var(--font-mono)',
              fontSize: 12
            }
          }, /*#__PURE__*/React.createElement("b", null, p.id), /*#__PURE__*/React.createElement("span", {
            style: {
              color: 'var(--ink-3)',
              fontSize: 10,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }
          }, p.fmt)), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 16,
              alignItems: 'flex-start',
              padding: '18px 14px',
              flex: 1
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              flex: 'none',
              width: 56,
              height: 56,
              display: 'grid',
              placeItems: 'center',
              border: '2px solid var(--ink)',
              background: done ? 'var(--yellow)' : 'var(--bg-dots)'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: p.icon,
            size: 32
          })), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              minWidth: 0
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-grotesk)',
              fontWeight: 800,
              fontSize: 24,
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '-0.01em'
            }
          }, p.name), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              lineHeight: 1.5,
              color: 'var(--ink-2)',
              textWrap: 'pretty'
            }
          }, p.desc))), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              padding: '7px 12px',
              borderTop: '2px solid var(--ink)',
              background: 'var(--paper-3)',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }
          }, /*#__PURE__*/React.createElement("span", null, "SIZE"), /*#__PURE__*/React.createElement("span", null, p.mb.toFixed(1), " MB")), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 14px',
              minHeight: 58
            }
          }, going ? /*#__PURE__*/React.createElement(ProgressBar, {
            value: Math.round(v),
            max: 100,
            segments: 12,
            showCount: false,
            style: {
              flex: 1
            }
          }) : done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
            style: {
              flex: 1,
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "check",
            size: 18
          }), "Saved for offline"), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "ghost",
            onClick: () => remove(p.id)
          }, "Remove")) : /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "primary",
            block: true,
            onClick: () => start(p.id)
          }, "\u2193 Download")));
        })), /*#__PURE__*/React.createElement(StatusStrip, {
          label: "Cabin",
          items: ['Seatbelt sign: on', 'Wi-Fi: optional', 'Fluency: continuing'],
          style: {
            marginTop: 40
          }
        }));
      }
      Object.assign(window, {
        Study,
        STUDY_PACKS
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/microsite/Study.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/microsite/SubmitWord.jsx
  try {
    (() => {
      const subNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
      function SubmitWord({
        initial,
        mobile
      }) {
        const {
          Window,
          Button,
          Stamp,
          RefCode
        } = subNS;
        const blank = {
          word: '',
          meaning: '',
          example: '',
          where: '',
          name: localStorage.getItem('lsd-name') || '',
          email: localStorage.getItem('lsd-email') || '',
          real: false
        };
        const [f, setF] = React.useState(blank);
        const [err, setErr] = React.useState({});
        const [done, setDone] = React.useState(initial === 'done' ? {
          ref: 'LSD-SUB-0388',
          word: 'your word'
        } : null);
        const set = k => v => {
          setF({
            ...f,
            [k]: v
          });
          if (err[k]) setErr({
            ...err,
            [k]: null
          });
        };
        const submit = e => {
          e.preventDefault();
          const x = {};
          if (!f.word.trim()) x.word = 'A word is required. It is in the name';
          if (!f.meaning.trim()) x.meaning = 'Explain yourself';
          if (!isEmail(f.email)) x.email = f.email ? 'That looks like a vaalie typed it' : 'Gateway needs this';
          if (!f.real) x.real = 'Gateway checks';
          setErr(x);
          if (Object.keys(x).length) return;
          // Mock submission. In production, POST the form to the review inbox here.
          setDone({
            ref: 'LSD-SUB-' + String(Math.floor(1000 + Math.random() * 8999)),
            word: f.word.trim()
          });
        };
        const steps = [['01', 'Received', 'Filed with a submission number.'], ['02', 'Read aloud', 'By Gateway, to Gateway.'], ['03', 'Field-tested', 'Said to a lifeguard. Reaction noted.'], ['04', 'Filed', 'Or returned with a polite note.']];
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
          index: "04",
          kicker: "Contributions \xB7 open to the public",
          title: "Submit a Word",
          right: /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              maxWidth: 320,
              lineHeight: 1.5
            }
          }, "The dictionary holds 32 words. The coast holds more. Send yours to Gateway for review.")
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 40,
            alignItems: 'flex-start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '999 1 560px',
            minWidth: 0
          }
        }, /*#__PURE__*/React.createElement(Window, {
          title: "submit_word.exe",
          bar: "accent",
          meta: done ? 'Sent' : 'Form W-05',
          controls: ['min', 'close'],
          shadow: "lg",
          padding: 0
        }, done ? /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            alignItems: 'center',
            padding: mobile ? 20 : '40px 36px'
          }
        }, /*#__PURE__*/React.createElement(Stamp, {
          top: "A public service by Gateway",
          middle: "FILED",
          bottom: "For review",
          size: 150
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 260px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement(RefCode, {
          code: done.ref,
          size: "md"
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 800,
            fontSize: 40,
            lineHeight: 0.95,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em'
          }
        }, "Filed for review."), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            lineHeight: 1.55
          }
        }, "Shot. \"", done.word, "\" is with Gateway. If it passes the lifeguard test, you'll hear from us by email."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            marginTop: 6
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          onClick: () => {
            setF({
              ...blank,
              name: f.name,
              email: f.email
            });
            setDone(null);
          }
        }, "Submit another")))) : /*#__PURE__*/React.createElement("form", {
          onSubmit: submit,
          noValidate: true,
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            padding: mobile ? 16 : 26
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement(Field, {
          label: "The word",
          value: f.word,
          onChange: set('word'),
          placeholder: "One word or phrase",
          error: err.word
        }), /*#__PURE__*/React.createElement(Field, {
          label: "Where you heard it",
          value: f.where,
          onChange: set('where'),
          placeholder: "e.g. North Beach, the taxi rank, my gran"
        })), /*#__PURE__*/React.createElement(Field, {
          label: "What it means",
          multiline: true,
          rows: 3,
          value: f.meaning,
          onChange: set('meaning'),
          placeholder: "Explain it like you would to a vaalie.",
          error: err.meaning
        }), /*#__PURE__*/React.createElement(Field, {
          label: "Use it in a sentence",
          multiline: true,
          rows: 2,
          value: f.example,
          onChange: set('example'),
          placeholder: "Optional. Gateway likes examples."
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement(Field, {
          label: "Your name",
          value: f.name,
          onChange: set('name'),
          placeholder: "For the credits",
          autoComplete: "given-name"
        }), /*#__PURE__*/React.createElement(Field, {
          label: "Email address",
          type: "email",
          value: f.email,
          onChange: set('email'),
          placeholder: "you@example.co.za",
          autoComplete: "email",
          error: err.email
        })), /*#__PURE__*/React.createElement(Tick, {
          checked: f.real,
          onChange: set('real'),
          error: err.real
        }, "I confirm this word is real and someone in Durban actually says it."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 14,
            borderTop: '1px dashed var(--ink-3)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--ink-3)'
          }
        }, "One word per form. Reviewed in order received, or by vibes."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Button, {
          onClick: () => {
            setF(blank);
            setErr({});
          }
        }, "Clear"), /*#__PURE__*/React.createElement(Button, {
          type: "submit",
          variant: "primary",
          brackets: true
        }, "Send to Gateway")))))), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: '1 1 300px',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 24
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            border: '2px solid var(--ink)',
            background: 'var(--paper-2)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '7px 12px',
            background: 'var(--paper-3)',
            borderBottom: '1px solid var(--ink)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.08em'
          }
        }, /*#__PURE__*/React.createElement("span", null, "REVIEW PROCESS"), /*#__PURE__*/React.createElement("span", null, "4 STEPS")), steps.map(([n, t, d], i) => /*#__PURE__*/React.createElement("div", {
          key: n,
          style: {
            display: 'grid',
            gridTemplateColumns: '36px 1fr',
            gap: 10,
            padding: '12px',
            borderTop: i ? '1px dashed var(--ink-3)' : 'none',
            fontFamily: 'var(--font-mono)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 700,
            fontSize: 13
          }
        }, n), /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }
        }, /*#__PURE__*/React.createElement("b", {
          style: {
            fontSize: 13,
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }
        }, t), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            color: 'var(--ink-2)'
          }
        }, d))))), /*#__PURE__*/React.createElement("div", {
          style: {
            border: '2px solid var(--ink)',
            background: 'var(--ink)',
            color: 'var(--paper-2)',
            padding: '14px 14px',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            lineHeight: 1.6
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 10,
            letterSpacing: '0.1em',
            marginBottom: 6,
            color: 'var(--yellow)'
          }
        }, "SUBMISSION RULES"), "Real words only. No forks. Words already in the 32 lessons will be returned with a copy of the Dictionary."))));
      }
      Object.assign(window, {
        SubmitWord
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/microsite/SubmitWord.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/microsite/data.js
  try {
    (() => {
      window.LSD_DATA = {
        words: [['01', 'Aweh', 'interj.', 'The standard greeting. Also: yes, agreed, understood, and I see you. One word, four meanings, zero effort.', 'Aweh, bru. Long time.'], ['02', 'Ekse', 'interj.', 'Used to open a sentence, or to request attention. Roughly "I say", but with better posture.', 'Ekse, is that your bunny?'], ['03', 'Kiff', 'adj.', 'Good. Excellent. Of acceptable quality to a person standing on a beach.', 'The water is kiff today.'], ['04', 'Chips!', 'interj.', 'A warning. Shouted to alert others that trouble — or a parent — is approaching. Not a snack.', 'Chips! Chips! Here comes the lifeguard.'], ['05', 'Baggies', 'n. pl.', 'Loose board shorts. The formal attire of the coast. Required at all lessons.', 'He wore baggies to the wedding. Nobody minded.'], ['06', 'Logging', 'v.', 'Staying over at someone\u2019s place, usually for longer than discussed.', 'I\u2019m logging by my cousin until Sunday. Or March.'], ['07', 'One time', 'adv.', 'Truly. Honestly. Confirms that the preceding statement is not a joke.', 'That was the best bunny of my life, one time.'], ['08', 'Scheming', 'v.', 'Thinking; reckoning; forming an opinion. No actual scheme required.', 'I\u2019m scheming it\u2019s going to rain.'], ['09', 'Choon', 'v.', 'To tell or say something to someone. Often used before important information.', 'I\u2019m choon you, the surf is pumping.'], ['10', 'Gqom', 'n.', 'Durban\u2019s own electronic dance music. Pronounced with a click. Practise the click in GAME-01.', 'The gqom was so loud the windows were dancing.'], ['11', 'Jol', 'n. / v.', 'A party, or the act of having one. Can describe an evening, a weekend or an attitude.', 'Big jol at the beach tonight.'], ['12', 'Larney', 'adj.', 'Fancy. Posh. Slightly too expensive for baggies.', 'Look at you in your larney shoes.'], ['13', 'Bunny', 'n.', 'A quarter loaf of bread, hollowed and filled with curry. Eaten with the hands. The bread is the plate. The bread is also the spoon.', 'Quarter mutton bunny, extra gravy. No fork.'], ['14', 'Shap', 'interj.', 'Fine. Good. Agreed. A complete conversation in one syllable.', 'Shap, see you at six.'], ['15', 'Shot', 'interj.', 'Thanks. Also: well done. Delivered with a nod.', 'Shot for the lift, bru.'], ['16', 'Ducking out', 'v. phr.', 'Leaving. Usually quietly, usually early, usually towards the beach.', 'I\u2019m ducking out before the traffic.'], ['17', 'The coast', 'n.', 'Durban and its surroundings, referred to as though there were no other coast.', 'We\u2019re going down the coast for the weekend.'], ['18', 'Chow', 'v. / n.', 'To eat; food. "Chow now" is also a farewell.', 'Let\u2019s chow, I\u2019m starving.'], ['19', 'Prawn', 'n.', 'A person. Applied with mild affection and moderate suspicion.', 'That prawn took my parking.'], ['20', 'Kook', 'n.', 'A beginner surfer, or anyone who has bought more gear than they have used.', 'Brand new board, never been wet. Total kook.'], ['21', 'Robot', 'n.', 'A traffic light. Not a machine. Turn left at the second robot.', 'Turn left at the robot by the garage.'], ['22', 'Smaak', 'v.', 'To like, very much. Applies to people, food and weather.', 'I smaak this weather.'], ['23', 'Dala', 'v.', 'To do. To get on with it. "Dala what you must."', 'Just dala what you must, bru.'], ['24', 'Laatie', 'n.', 'A young person. A kid. Anyone younger than the speaker.', 'The laatie paddled out further than all of us.'], ['25', 'Bru', 'n.', 'Brother. Friend. Stranger at a robot. The most important word in this course.', 'Shot, bru.'], ['26', 'Vaalie', 'n.', 'A visitor from inland, identifiable by socks with slops and an umbrella with cup holders.', 'Spot the vaalie: he\u2019s the one with the gazebo.'], ['27', 'Pozi', 'n.', 'Home; one\u2019s place. Where you are logging tonight.', 'Come through to my pozi later.'], ['28', 'Vy', 'v.', 'To go. To leave. Also used to suggest that others go.', 'Let\u2019s vy, the bunnies are getting cold.'], ['29', 'Tops', 'adj.', 'The best available. Also: at most.', 'The swell was tops this morning.'], ['30', 'No laka', 'interj.', 'No. A firm no. Pairs well with forks and side salads.', 'A fork? No laka.'], ['31', 'Mfethu', 'n.', 'Brother; my guy. Warmer than bru, if that were possible.', 'Mfethu! Where have you been?'], ['32', 'Yano', 'interj.', '"You know." Placed anywhere in a sentence for rhythm.', 'It\u2019s hot, yano, so we went swimming.']],
        exam: [{
          "w": "01",
          "q": "A friend greets you on the promenade with \"Aweh.\" The correct reply is:",
          "a": ["Good afternoon.", "Aweh.", "Please state your business."],
          "c": 1
        }, {
          "w": "02",
          "q": "\"Ekse\" at the start of a sentence means:",
          "a": ["Excuse me, I am leaving.", "Attention, please — something important follows.", "Exactly."],
          "c": 1
        }, {
          "w": "03",
          "q": "\"The water is kiff today.\" The water is:",
          "a": ["Good.", "Cold.", "Closed."],
          "c": 0
        }, {
          "w": "04",
          "q": "Someone shouts \"Chips!\" across the beach. You should:",
          "a": ["Order a large portion.", "Look out — trouble is coming.", "Check the menu."],
          "c": 1
        }, {
          "w": "05",
          "q": "Which item is required at all lessons?",
          "a": ["A wetsuit.", "A fork.", "Baggies."],
          "c": 2
        }, {
          "w": "06",
          "q": "Your cousin has been logging at your place since December. It is now March. This is:",
          "a": ["A legal matter.", "Normal.", "Unusual."],
          "c": 1
        }, {
          "w": "07",
          "q": "\"That was the best bunny of my life, one time.\" The speaker:",
          "a": ["Means it. Truly.", "Has only eaten one bunny.", "Is joking."],
          "c": 0
        }, {
          "w": "08",
          "q": "\"I’m scheming it’s going to rain.\" The speaker is:",
          "a": ["Planning a crime.", "Controlling the weather.", "Giving an opinion."],
          "c": 2
        }, {
          "w": "09",
          "q": "\"I’m choon you, the surf is pumping.\" The speaker is:",
          "a": ["Singing.", "Telling you something.", "Tuning a radio."],
          "c": 1
        }, {
          "w": "10",
          "q": "Gqom is:",
          "a": ["Durban’s own electronic dance music.", "A type of curry.", "A beach umbrella."],
          "c": 0
        }, {
          "w": "11",
          "q": "\"Big jol at the beach tonight.\" You should bring:",
          "a": ["A gazebo with cup holders.", "Yourself, in baggies.", "A permit."],
          "c": 1
        }, {
          "w": "12",
          "q": "Your friend arrives in larney shoes. The shoes are:",
          "a": ["Fancy.", "Borrowed.", "Wet."],
          "c": 0
        }, {
          "w": "13",
          "q": "The bunny arrives with a side salad. You:",
          "a": ["Ask for a fork", "Call the police", "Both — this is a crime scene."],
          "c": 2
        }, {
          "w": "14",
          "q": "\"Shap, see you at six.\" This means:",
          "a": ["Agreed. See you at six.", "Hurry up.", "Bring snacks."],
          "c": 0
        }, {
          "w": "15",
          "q": "Someone gives you a lift home. The fluent thank-you is:",
          "a": ["Thank you kindly.", "Shot, bru.", "Please leave a review."],
          "c": 1
        }, {
          "w": "16",
          "q": "\"I’m ducking out before the traffic.\" The speaker is:",
          "a": ["Swimming.", "Hiding from a duck.", "Leaving."],
          "c": 2
        }, {
          "w": "17",
          "q": "\"We’re going down the coast.\" Which coast?",
          "a": ["The coast.", "The west coast.", "Please specify."],
          "c": 0
        }, {
          "w": "18",
          "q": "Complete the farewell: \"Chow ___\"",
          "a": ["later", "now", "never"],
          "c": 1
        }, {
          "w": "19",
          "q": "\"That prawn took my parking.\" The prawn is:",
          "a": ["Seafood.", "A person.", "A small car."],
          "c": 1
        }, {
          "w": "20",
          "q": "Brand new board, never been wet. Its owner is a:",
          "a": ["Kook.", "Laatie.", "Lifeguard."],
          "c": 0
        }, {
          "w": "21",
          "q": "\"Turn left at the robot\" means turn left at the:",
          "a": ["Machine.", "Traffic light.", "Mall entrance."],
          "c": 1
        }, {
          "w": "22",
          "q": "\"I smaak this weather\" expresses:",
          "a": ["A complaint.", "A weather warning.", "Strong approval."],
          "c": 2
        }, {
          "w": "23",
          "q": "\"Just dala what you must.\" You should:",
          "a": ["Get on with it.", "Ask for a form.", "Wait for instructions."],
          "c": 0
        }, {
          "w": "24",
          "q": "The laatie paddled out further than everyone. The laatie is:",
          "a": ["The lifeguard.", "A young person.", "A dog."],
          "c": 1
        }, {
          "w": "25",
          "q": "The most important word in this course is:",
          "a": ["Bru.", "Fork.", "Wetsuit."],
          "c": 0
        }, {
          "w": "26",
          "q": "Socks with slops. Gazebo with cup holders. This is a:",
          "a": ["Laatie.", "Kook.", "Vaalie."],
          "c": 2
        }, {
          "w": "27",
          "q": "\"Come through to my pozi later.\" You are going to their:",
          "a": ["Office.", "Home.", "Pool."],
          "c": 1
        }, {
          "w": "28",
          "q": "\"Let’s vy, the bunnies are getting cold.\" You should:",
          "a": ["Go.", "Wait.", "Reheat."],
          "c": 0
        }, {
          "w": "29",
          "q": "\"The swell was tops this morning.\" The swell was:",
          "a": ["Flat.", "The best.", "Over the pier."],
          "c": 1
        }, {
          "w": "30",
          "q": "The waiter offers you a fork with your bunny. You reply:",
          "a": ["Yes, please.", "Two, please.", "No laka."],
          "c": 2
        }, {
          "w": "31",
          "q": "You spot your oldest friend across the beachfront. You shout:",
          "a": ["Mfethu!", "Excuse me, sir!", "Chips!"],
          "c": 0
        }, {
          "w": "32",
          "q": "\"It’s hot, yano, so we went swimming.\" \"Yano\" means:",
          "a": ["You know.", "Yes and no.", "Year nought."],
          "c": 0
        }],
        leaderboard: [['BunnyChowBrad', '10/10', '12'], ['NoLakaNelly', '10/10', '11'], ['ShapShapSipho', '9/10', '9'], ['VaalieInRecovery', '8/10', '7'], ['KiffKelly', '8/10', '6'], ['DalaDave', '7/10', '4']],
        merch: [{
          id: 'MERCH-01',
          name: 'AWEH.',
          kind: 'Tee',
          price: 'R 349',
          desc: 'One-word slang tee. Says hello so you don’t have to.',
          tee: true
        }, {
          id: 'MERCH-02',
          name: 'EKSE.',
          kind: 'Tee',
          price: 'R 349',
          desc: 'One-word slang tee. Starts conversations. Doesn’t finish them.',
          tee: true
        }, {
          id: 'MERCH-03',
          name: 'SHAP.',
          kind: 'Tee',
          price: 'R 349',
          desc: 'One-word slang tee. Ends conversations. An exit strategy in cotton.',
          tee: true
        }, {
          id: 'MERCH-04',
          name: 'Fluent in Durban',
          kind: 'Bumper sticker',
          price: 'R 59',
          desc: 'For the car. Visible from the robot.'
        }, {
          id: 'MERCH-05',
          name: 'Native Speaker',
          kind: 'Cap',
          price: 'R 279',
          desc: 'Embroidered. Worn backwards by graduates only.'
        }, {
          id: 'MERCH-06',
          name: 'Certificate of Fluency',
          kind: 'Framed',
          price: 'R 499',
          desc: 'Your certificate, framed. Hang it where the vaalies can see.'
        }, {
          id: 'MERCH-07',
          name: 'Beach Towel',
          kind: 'Towel',
          price: 'R 449',
          desc: 'All 32 words, edge to edge. Study while you tan.'
        }, {
          id: 'MERCH-08',
          name: 'Kook Starter Pack',
          kind: 'Bundle',
          price: 'R 399',
          desc: 'Just baggies and sunscreen. Everything you actually need.'
        }]
      };
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/microsite/data.js",
      error: String(e && e.message || e)
    });
  }
  __ds_ns.FolderCard = __ds_scope.FolderCard;
  __ds_ns.SpecCard = __ds_scope.SpecCard;
  __ds_ns.Barcode = __ds_scope.Barcode;
  __ds_ns.Button = __ds_scope.Button;
  __ds_ns.LabelChip = __ds_scope.LabelChip;
  __ds_ns.RefCode = __ds_scope.RefCode;
  __ds_ns.Stamp = __ds_scope.Stamp;
  __ds_ns.StatusStrip = __ds_scope.StatusStrip;
  __ds_ns.AnswerOption = __ds_scope.AnswerOption;
  __ds_ns.Input = __ds_scope.Input;
  __ds_ns.ProgressBar = __ds_scope.ProgressBar;
  __ds_ns.Halftone = __ds_scope.Halftone;
  __ds_ns.Icon = __ds_scope.Icon;
  __ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;
  __ds_ns.ICONS = __ds_scope.ICONS;
  __ds_ns.FolderTabs = __ds_scope.FolderTabs;
  __ds_ns.IndexTab = __ds_scope.IndexTab;
  __ds_ns.Dialog = __ds_scope.Dialog;
  __ds_ns.Window = __ds_scope.Window;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/lsd-components.js", error: String((e && e.message) || e) }); }

// site/js/merch.jsx
try { (() => {
const merchNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function MerchPreview({
  m
}) {
  const {
    Halftone
  } = merchNS;
  const overlay = m.tee ? m.name : m.kind === 'Bumper sticker' ? 'FLUENT IN DURBAN' : m.kind === 'Cap' ? 'NATIVE SPEAKER' : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(Halftone, {
    height: "100%",
    dot: 5,
    placeholder: m.kind === 'Bundle' || m.kind === 'Towel' ? 'beach' : 'product'
  }), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '44%',
      transform: 'translate(-50%,-50%)',
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      padding: '6px 10px',
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: m.tee ? 34 : 15,
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, overlay));
}
function Merch({
  cart,
  setCart
}) {
  const {
    SpecCard,
    Button,
    Dialog,
    Icon
  } = merchNS;
  const [added, setAdded] = React.useState(null);
  const items = window.LSD_DATA.merch;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "03",
    kicker: "Course materials \xB7 compulsory-ish",
    title: "Merch",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        border: '2px solid var(--ink)',
        background: 'var(--paper-2)',
        padding: '10px 14px',
        boxShadow: 'var(--shadow-hard-sm)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "cooler-box",
      size: 40
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        lineHeight: 1.4
      }
    }, /*#__PURE__*/React.createElement("b", null, "Cooler box"), /*#__PURE__*/React.createElement("br", null), cart, " item", cart === 1 ? '' : 's', " \xB7 kept cold"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
      gap: 24
    }
  }, items.map(m => /*#__PURE__*/React.createElement(SpecCard, {
    key: m.id,
    refCode: m.id,
    meta: m.kind,
    label: m.tee ? 'Tee' : m.name,
    crosshair: false,
    previewHeight: 250,
    sourceLabel: "PRICE",
    sourceTag: m.price,
    source: m.desc,
    interactive: true,
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "accent",
      block: true,
      onClick: () => {
        setCart(cart + 1);
        setAdded(m);
      }
    }, "Vy to checkout")
  }, /*#__PURE__*/React.createElement(MerchPreview, {
    m: m
  })))), added && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 40,
      bottom: 40,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(Dialog, {
    title: "cooler_box.exe",
    kind: "success",
    heading: "Packed in the cooler.",
    width: 360,
    onClose: () => setAdded(null),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setAdded(null)
    }, "Keep shopping"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => setAdded(null)
    }, "Chow now"))
  }, added.name, " (", added.kind, ") \u2014 ", added.price, ". Kept cold until checkout. Like a good cooler box should.")));
}
Object.assign(window, {
  Merch
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/merch.jsx", error: String((e && e.message) || e) }); }

// site/js/shell.jsx
try { (() => {
const shellNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
const NAV_ITEMS = [{
  id: 'home',
  index: '00',
  label: 'Index'
}, {
  id: 'dict',
  index: '01',
  label: 'Dictionary'
}, {
  id: 'act',
  index: '02',
  label: 'Activities'
}, {
  id: 'merch',
  index: '03',
  label: 'Merch'
}, {
  id: 'submit',
  index: '04',
  label: 'Submit'
}, {
  id: 'study',
  index: '05',
  label: 'Study'
}, {
  id: 'card',
  index: '06',
  label: 'ID Card'
}, {
  id: 'flash',
  index: '07',
  label: 'Flashcards'
}, {
  id: 'exam',
  index: '08',
  label: 'Final Exam'
}];
function Masthead({
  page,
  go,
  cart = 0,
  mobile,
  compactNav
}) {
  const {
    FolderTabs,
    Icon,
    RefCode
  } = shellNS;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--paper)',
      paddingTop: mobile ? 12 : 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: mobile ? '0 16px' : '0 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'baseline',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: mobile ? 17 : 20,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em'
    }
  }, "Learn to Speak Durban"), !mobile && /*#__PURE__*/React.createElement(RefCode, {
    code: "LSD-2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, !mobile && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, "Ocean 24\xB0C \xB7 Tide: going out \xB7 Vibes: tops"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('merch'),
    "aria-label": "Cooler box",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: '2px solid var(--ink)',
      background: cart ? 'var(--yellow)' : 'var(--paper-2)',
      padding: '5px 10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(shellNS.Icon, {
    name: "cooler-box",
    size: 20
  }), String(cart).padStart(2, '0')))), !mobile && !compactNav && /*#__PURE__*/React.createElement(FolderTabs, {
    items: NAV_ITEMS,
    active: page,
    onChange: go
  })));
}
function Footer({
  mobile
}) {
  const {
    Barcode,
    RefCode
  } = shellNS;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 96,
      borderTop: '2px solid var(--ink)',
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: mobile ? '24px 16px 32px' : '28px 64px 36px',
      display: 'flex',
      flexDirection: mobile ? 'column' : 'row',
      gap: 24,
      alignItems: mobile ? 'flex-start' : 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14
    }
  }, "Learn to Speak Durban. A public service by Gateway."), /*#__PURE__*/React.createElement(RefCode, {
    code: "LSD-2026 \xB7 No forks were harmed in the making of this website"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, !mobile && /*#__PURE__*/React.createElement(Barcode, {
    value: "GATEWAY-DBN",
    width: 120,
    height: 34
  }), /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.gatewayLogo || (window.LSD_ASSETS || 'assets/') + 'logos/gateway-logo.png',
    alt: "Gateway",
    style: {
      width: mobile ? 64 : 76,
      height: 'auto',
      display: 'block'
    }
  }))));
}
function PageHead({
  index,
  title,
  kicker,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32,
      margin: '48px 0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, index, " \u2014 ", kicker), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: 'clamp(48px, 6.2vw, 88px)',
      lineHeight: 0.88,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase'
    }
  }, title)), right);
}
Object.assign(window, {
  Masthead,
  Footer,
  PageHead,
  NAV_ITEMS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/shell.jsx", error: String((e && e.message) || e) }); }

// site/js/student-card.jsx
try { (() => {
const cardNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
const CARD_W = 1080,
  CARD_H = 1920;
const LEVELS = [['VAALIE', 'Still wearing socks with slops'], ['KOOK', 'Owns a wetsuit. Working on it'], ['LAATIE', 'Young, keen, slightly sunburnt'], ['BRU', 'Says "shot" at robots'], ['FLUENT', 'Has never once asked for a fork']];
const BAYER = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];
function seeded(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return (h >>> 0) % 10000 / 10000;
  };
}
function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function ditherPhoto(ctx, img, x, y, w, h, {
  cell,
  style,
  zoom,
  ink
}) {
  const cols = Math.floor(w / cell),
    rows = Math.floor(h / cell);
  const off = document.createElement('canvas');
  off.width = cols;
  off.height = rows;
  const o = off.getContext('2d');
  const scale = Math.max(cols / img.width, rows / img.height) * zoom;
  const dw = img.width * scale,
    dh = img.height * scale;
  o.fillStyle = '#fff';
  o.fillRect(0, 0, cols, rows);
  o.drawImage(img, (cols - dw) / 2, (rows - dh) * 0.3, dw, dh);
  const d = o.getImageData(0, 0, cols, rows).data;
  const lum = new Float32Array(cols * rows);
  let mn = 1,
    mx = 0;
  for (let i = 0; i < cols * rows; i++) {
    const l = (0.299 * d[i * 4] + 0.587 * d[i * 4 + 1] + 0.114 * d[i * 4 + 2]) / 255;
    lum[i] = l;
    if (l < mn) mn = l;
    if (l > mx) mx = l;
  }
  const span = Math.max(0.2, mx - mn);
  ctx.fillStyle = ink;
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    let l = (lum[r * cols + c] - mn) / span;
    l = Math.min(1, Math.max(0, (l - 0.5) * 1.25 + 0.5));
    const px = x + c * cell,
      py = y + r * cell;
    if (style === 'halftone') {
      const rad = cell * 0.66 * Math.sqrt(1 - l);
      if (rad > 0.4) {
        ctx.beginPath();
        ctx.arc(px + cell / 2, py + cell / 2, rad, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (l < (BAYER[r % 4][c % 4] + 0.5) / 16) ctx.fillRect(px, py, cell, cell);
  }
}
function drawStudentCard(canvas, o) {
  const ctx = canvas.getContext('2d');
  const css = getComputedStyle(document.documentElement);
  const ACC = css.getPropertyValue('--yellow').trim() || '#ff5a2e';
  const INK = '#111111',
    PAPER = '#ecebe4';
  const G = "'Switzer', 'Helvetica Neue', Arial, sans-serif",
    M = "'IBM Plex Mono', monospace",
    P = "'Geist Pixel', monospace";
  ctx.clearRect(0, 0, CARD_W, CARD_H);
  ctx.fillStyle = '#0b0b0b';
  ctx.fillRect(0, 0, CARD_W, CARD_H);
  const rnd = seeded('grain');
  for (let i = 0; i < 9000; i++) {
    ctx.fillStyle = `rgba(255,255,255,${0.02 + rnd() * 0.05})`;
    ctx.fillRect(rnd() * CARD_W, rnd() * CARD_H, 2, 2);
  }
  // badge holder
  ctx.fillStyle = 'rgba(255,255,255,0.045)';
  rrect(ctx, 90, 140, 900, 1700, 60);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.7)';
  ctx.lineWidth = 4;
  rrect(ctx, 90, 140, 900, 1700, 60);
  ctx.stroke();
  ctx.strokeStyle = 'rgba(255,255,255,0.28)';
  ctx.lineWidth = 2;
  rrect(ctx, 106, 156, 868, 1668, 48);
  ctx.stroke();
  ctx.strokeStyle = 'rgba(255,255,255,0.75)';
  ctx.lineWidth = 5;
  rrect(ctx, 420, 210, 240, 64, 32);
  ctx.stroke();
  [[260, 242], [820, 242]].forEach(([cx, cy]) => {
    ctx.beginPath();
    ctx.arc(cx, cy, 30, 0, Math.PI * 2);
    ctx.stroke();
  });
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'rgba(255,255,255,0.45)';
  [322, 338, 362].forEach(yy => {
    ctx.beginPath();
    ctx.moveTo(106, yy);
    ctx.lineTo(974, yy);
    ctx.stroke();
  });
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  for (let xx = 120; xx < 962; xx += 9) ctx.fillRect(xx, 384, 4, 22);
  // paper insert
  const X0 = 150,
    Y0 = 440,
    PW = 780,
    PH = 1340,
    L = 200,
    R = 880;
  ctx.fillStyle = PAPER;
  ctx.fillRect(X0, Y0, PW, PH);
  const rule = (yy, w = 3) => {
    ctx.fillStyle = INK;
    ctx.fillRect(L, yy, R - L, w);
  };
  ctx.fillStyle = INK;
  ctx.textBaseline = 'alphabetic';
  ctx.font = `500 30px ${M}`;
  ctx.fillText('STUDENT:', L, 520);
  ctx.textAlign = 'right';
  ctx.fillStyle = '#6b6a66';
  ctx.fillText('REF: LSD-2026', R, 520);
  ctx.textAlign = 'left';
  rule(544, 2);
  // name, fitted
  const words = (o.name || 'Your Name').trim().split(/\s+/);
  const lines = words.length > 1 ? [words[0], words.slice(1).join(' ')] : [words[0]];
  let fs = lines.length > 1 ? 112 : 124;
  ctx.font = `800 ${fs}px ${G}`;
  while (fs > 56 && Math.max(...lines.map(t => ctx.measureText(t).width)) > R - L) {
    fs -= 4;
    ctx.font = `800 ${fs}px ${G}`;
  }
  ctx.fillStyle = INK;
  const nameTop = 544 + 22 + fs * 0.74;
  lines.forEach((t, i) => ctx.fillText(t, L - 4, nameTop + i * fs * 0.92));
  const ruleY = Math.round(nameTop + (lines.length - 1) * fs * 0.92 + 30);
  rule(ruleY, 2);
  // photo + vertical barcode
  const PY = ruleY + 36,
    PHt = 1376 - PY,
    PWd = 540;
  if (o.img) ditherPhoto(ctx, o.img, L, PY, PWd, PHt, {
    cell: o.cell,
    style: o.style,
    zoom: o.zoom,
    ink: INK
  });else {
    ctx.strokeStyle = INK;
    ctx.lineWidth = 3;
    ctx.setLineDash([14, 10]);
    ctx.strokeRect(L + 2, PY + 2, PWd - 4, PHt - 4);
    ctx.setLineDash([]);
    ctx.font = `400 56px ${P}`;
    ctx.textAlign = 'center';
    ctx.fillText('FACE', L + PWd / 2, PY + PHt / 2 - 10);
    ctx.font = `500 24px ${M}`;
    ctx.fillText('GOES HERE. ANY FACE.', L + PWd / 2, PY + PHt / 2 + 34);
    ctx.fillText('YOURS IS RECOMMENDED.', L + PWd / 2, PY + PHt / 2 + 66);
    ctx.textAlign = 'left';
  }
  const br = seeded(o.no + o.name);
  let by = PY;
  ctx.fillStyle = INK;
  while (by < PY + PHt) {
    const t = 2 + Math.floor(br() * 9);
    if (br() > 0.35) ctx.fillRect(R - 96, by, 96, t);
    by += t + 2 + Math.floor(br() * 5);
  }
  // pixel stamp on photo corner
  ctx.save();
  ctx.translate(L + PWd - 70, PY + PHt - 40);
  ctx.rotate(-0.16);
  ctx.fillStyle = ACC;
  ctx.beginPath();
  ctx.arc(0, 0, 78, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = INK;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, 70, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = INK;
  ctx.textAlign = 'center';
  ctx.font = `500 15px ${M}`;
  ctx.fillText('ENROLLED', 0, -26);
  ctx.font = `400 34px ${P}`;
  ctx.fillText(o.level, 0, 12);
  ctx.font = `500 15px ${M}`;
  ctx.fillText('2026', 0, 40);
  ctx.restore();
  ctx.textAlign = 'left';
  // spec rows
  ctx.font = `600 30px ${M}`;
  ctx.fillStyle = INK;
  ctx.fillText('ID: ' + o.no, L, 1420);
  const rows = [['FLUENCY LEVEL', o.level], ['FAVOURITE WORD', o.word.toUpperCase()], ['FORKS ON PERSON', '0'], ['VALID UNTIL', 'LOW TIDE']];
  ctx.font = `400 24px ${M}`;
  rows.forEach(([k, v], i) => {
    const yy = 1474 + i * 38;
    ctx.fillStyle = '#3a3a38';
    ctx.textAlign = 'left';
    ctx.fillText(k, L, yy);
    ctx.fillStyle = INK;
    ctx.textAlign = 'right';
    ctx.font = `700 24px ${M}`;
    ctx.fillText(v, R, yy);
    ctx.font = `400 24px ${M}`;
    ctx.fillStyle = '#9a9993';
    ctx.fillRect(L, yy + 12, R - L, 1);
  });
  ctx.textAlign = 'left';
  rule(1636, 2);
  ctx.fillStyle = INK;
  ctx.font = `800 58px ${G}`;
  ctx.fillText('A public service', L - 2, 1706);
  ctx.fillText('by Gateway.', L - 2, 1758);
  if (o.logo) ctx.drawImage(o.logo, R - 112, 1652, 112, 112);
  // outside footer
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = `500 22px ${M}`;
  ctx.textAlign = 'center';
  ctx.fillText('LEARN TO SPEAK DURBAN · A PUBLIC SERVICE BY GATEWAY', CARD_W / 2, 1888);
  ctx.textAlign = 'left';
}
function StudentCard({
  mobile
}) {
  const {
    Window,
    Button,
    Icon,
    StatusStrip
  } = cardNS;
  const canvasRef = React.useRef(null);
  const fileRef = React.useRef(null);
  const [img, setImg] = React.useState(null);
  const [name, setName] = React.useState(() => localStorage.getItem('lsd-name') || 'Thandi Mkhize');
  const [level, setLevel] = React.useState('BRU');
  const [word, setWord] = React.useState('Shap');
  const [style, setStyle] = React.useState('pixel');
  const [cell, setCell] = React.useState(8);
  const [zoom, setZoom] = React.useState(1);
  const [ready, setReady] = React.useState(false);
  const [drag, setDrag] = React.useState(false);
  const [note, setNote] = React.useState(null);
  const [logo, setLogo] = React.useState(null);
  React.useEffect(() => {
    const im = new Image();
    im.onload = () => setLogo(im);
    im.src = window.__resources && window.__resources.gatewayLogo || (window.LSD_ASSETS || 'assets/') + 'logos/gateway-logo.png';
  }, []);
  const no = React.useMemo(() => localStorage.getItem('lsd-student') || 'LSD-2026-04417', []);
  const words = window.LSD_DATA.words.map(w => w[1]);
  React.useEffect(() => {
    Promise.all(["800 120px Switzer", "400 24px 'IBM Plex Mono'", "500 24px 'IBM Plex Mono'", "700 24px 'IBM Plex Mono'", "400 40px 'Geist Pixel'"].map(f => document.fonts.load(f))).catch(() => {}).then(() => setReady(true));
  }, []);
  React.useEffect(() => {
    if (canvasRef.current) drawStudentCard(canvasRef.current, {
      img,
      name,
      level,
      word,
      style,
      cell,
      zoom,
      no,
      logo
    });
  }, [img, name, level, word, style, cell, zoom, ready, logo]);
  const load = file => {
    if (!file || !file.type.startsWith('image/')) {
      setNote('That is not a photo. Gateway checked.');
      return;
    }
    const im = new Image();
    im.onload = () => {
      setImg(im);
      setNote(null);
    };
    im.src = URL.createObjectURL(file);
  };
  const blob = () => new Promise(res => canvasRef.current.toBlob(res, 'image/png'));
  const save = async () => {
    const b = await blob();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(b);
    a.download = 'lsd-student-card.png';
    a.click();
    setNote('Saved. Post it to your story. Wait for the DMs.');
  };
  const canShare = typeof navigator !== 'undefined' && navigator.canShare && navigator.canShare({
    files: [new File([''], 'x.png', {
      type: 'image/png'
    })]
  });
  const share = async () => {
    const b = await blob();
    try {
      await navigator.share({
        files: [new File([b], 'lsd-student-card.png', {
          type: 'image/png'
        })],
        text: CAPTION
      });
    } catch (e) {}
  };
  const CAPTION = 'Officially enrolled in Learn to Speak Durban, a public service by Gateway. Fluency: guaranteed-ish. Forks: 0. #LearnToSpeakDurban';
  const copy = () => {
    navigator.clipboard && navigator.clipboard.writeText(CAPTION);
    setNote('Caption copied. Paste responsibly.');
  };
  const lab = {
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '6px 10px',
    background: 'var(--paper-3)',
    borderBottom: '1px solid var(--ink)'
  };
  const box = {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid var(--ink)',
    background: 'var(--paper-2)'
  };
  const sel = {
    border: 'none',
    outline: 'none',
    background: 'transparent',
    padding: 12,
    fontFamily: 'var(--font-mono)',
    fontSize: 15,
    color: 'var(--ink)',
    borderRadius: 0,
    appearance: 'none',
    cursor: 'pointer'
  };
  const seg = (opts, val, set) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: 'none'
    }
  }, opts.map(([v, l], i) => /*#__PURE__*/React.createElement("button", {
    key: v,
    type: "button",
    onClick: () => set(v),
    style: {
      flex: 1,
      padding: '10px 8px',
      border: 'none',
      borderLeft: i ? '1px solid var(--ink)' : 'none',
      background: val === v ? 'var(--ink)' : 'transparent',
      color: val === v ? 'var(--paper-2)' : 'var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, l)));
  const previewH = mobile ? 560 : 760;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "06",
    kicker: "Identification \xB7 for the gram",
    title: "Student Card",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        maxWidth: 330,
        lineHeight: 1.5
      }
    }, "Proof of enrolment. Upload a photo and Gateway pixelates it, for privacy and for style. Post it to your story. Wait for the DMs.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 48,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 380px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Window, {
    title: "student_card.exe",
    bar: "accent",
    meta: "Form ID-07",
    controls: ['min', 'close'],
    shadow: "lg",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: mobile ? 16 : 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    onDragOver: e => {
      e.preventDefault();
      setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
      load(e.dataTransfer.files[0]);
    },
    onClick: () => fileRef.current.click(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: 16,
      border: '2px dashed var(--ink)',
      background: drag ? 'var(--yellow)' : 'var(--bg-dots)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 56,
      height: 56,
      display: 'grid',
      placeItems: 'center',
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: img ? 'check' : 'human',
    size: 32
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, img ? 'Face received' : 'Upload a face'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ink-2)'
    }
  }, img ? 'Click to swap it for a better angle.' : 'Drop a selfie or click. Gateway does not judge. The pixels might.')), /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: e => load(e.target.files[0])
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Name on card",
    value: name,
    onChange: setName,
    placeholder: "First and last. Or just first, like a legend.",
    autoComplete: "name"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: box
  }, /*#__PURE__*/React.createElement("span", {
    style: lab
  }, "Fluency level"), /*#__PURE__*/React.createElement("select", {
    value: level,
    onChange: e => setLevel(e.target.value),
    style: sel
  }, LEVELS.map(([v]) => /*#__PURE__*/React.createElement("option", {
    key: v,
    value: v
  }, v)))), /*#__PURE__*/React.createElement("label", {
    style: box
  }, /*#__PURE__*/React.createElement("span", {
    style: lab
  }, "Favourite word"), /*#__PURE__*/React.createElement("select", {
    value: word,
    onChange: e => setWord(e.target.value),
    style: sel
  }, words.map(w => /*#__PURE__*/React.createElement("option", {
    key: w,
    value: w
  }, w))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ink-2)',
      marginTop: -4
    }
  }, level, ": ", LEVELS.find(l => l[0] === level)[1], "."), /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement("span", {
    style: lab
  }, "Pixel treatment"), seg([['pixel', 'Pixel'], ['halftone', 'Halftone']], style, setStyle)), /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement("span", {
    style: lab
  }, "Resolution"), seg([[14, 'Chunky'], [8, 'Classic'], [5, 'Fine']], cell, setCell)), /*#__PURE__*/React.createElement("label", {
    style: {
      ...box,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...lab,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Zoom"), /*#__PURE__*/React.createElement("span", null, Math.round(zoom * 100), "%")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1",
    max: "2.2",
    step: "0.05",
    value: zoom,
    onChange: e => setZoom(+e.target.value),
    style: {
      margin: 14,
      accentColor: 'var(--ink)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    brackets: true,
    onClick: save
  }, "Save for the story"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, canShare && /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: share
  }, "Share"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: copy
  }, "Copy caption")), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      padding: '8px 10px',
      border: '2px solid var(--ink)',
      background: 'var(--yellow)'
    }
  }, note))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: 'flex-start',
      maxWidth: '100%'
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    width: CARD_W,
    height: CARD_H,
    style: {
      display: 'block',
      height: previewH,
      width: previewH * 9 / 16,
      maxWidth: '100%',
      border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-hard-lg)',
      background: '#0b0b0b'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-3)',
      letterSpacing: '0.04em'
    }
  }, "FIG. 7 \u2014 Preview at ", Math.round(previewH / CARD_H * 100), "%. Exports at 1080 \xD7 1920."))), /*#__PURE__*/React.createElement(StatusStrip, {
    label: "Format",
    items: ['1080 × 1920', 'Ready for stories', 'Filter: not required', 'Forks on person: 0'],
    style: {
      marginTop: 40
    }
  }));
}
Object.assign(window, {
  StudentCard,
  drawStudentCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/student-card.jsx", error: String((e && e.message) || e) }); }

// site/js/study.jsx
try { (() => {
const studyNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
const STUDY_PACKS = [{
  id: 'PACK-01',
  open: 'dict',
  icon: 'book-open',
  name: 'The Dictionary',
  fmt: 'PDF · 32 entries',
  mb: 2.1,
  desc: 'Every lesson, every example line. Printable. Works at 10,000 metres.'
}, {
  id: 'PACK-02',
  open: 'dict',
  icon: 'headphone',
  name: 'Radio lessons',
  fmt: 'MP3 · 32 tracks',
  mb: 46.2,
  desc: 'Hear each word said properly. Recommended for the flight in.'
}, {
  id: 'PACK-03',
  open: 'flash',
  icon: 'card-text',
  name: 'Flashcards',
  fmt: 'PDF · 32 cards',
  mb: 1.4,
  desc: 'Cut along the dotted line. Test the person in seat 14B.'
}, {
  id: 'PACK-04',
  open: 'exam',
  icon: 'notes',
  name: 'Final exam, offline',
  fmt: 'App data',
  mb: 0.3,
  desc: 'Write the exam in flight mode. It hands itself in when you land.'
}, {
  id: 'PACK-05',
  open: 'act/game-03',
  icon: 'gamepad',
  name: 'Ja / No Laka',
  fmt: 'App data',
  mb: 0.8,
  desc: 'The true-false game, offline. No laka still means yes at altitude.'
}, {
  id: 'PACK-06',
  open: 'act/game-04',
  icon: 'calendar',
  name: 'Durdle, 30 days',
  fmt: 'App data',
  mb: 0.2,
  desc: 'A month of daily words, preloaded. No signal required.'
}];
function useDownloads() {
  const [prog, setProg] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lsd-offline') || '{}');
    } catch (e) {
      return {};
    }
  });
  const timers = React.useRef({});
  React.useEffect(() => {
    localStorage.setItem('lsd-offline', JSON.stringify(Object.fromEntries(Object.entries(prog).filter(([, v]) => v >= 100))));
  }, [prog]);
  React.useEffect(() => () => Object.values(timers.current).forEach(clearInterval), []);
  const start = id => {
    if (timers.current[id]) return;
    setProg(p => ({
      ...p,
      [id]: 0
    }));
    timers.current[id] = setInterval(() => {
      setProg(p => {
        const v = Math.min(100, (p[id] || 0) + 9 + Math.random() * 14);
        if (v >= 100) {
          clearInterval(timers.current[id]);
          delete timers.current[id];
        }
        return {
          ...p,
          [id]: v
        };
      });
    }, 160);
  };
  const remove = id => setProg(p => {
    const n = {
      ...p
    };
    delete n[id];
    return n;
  });
  return {
    prog,
    start,
    remove
  };
}
function Study({
  go
}) {
  const {
    Window,
    Button,
    Icon,
    ProgressBar,
    StatusStrip
  } = studyNS;
  const {
    prog,
    start,
    remove
  } = useDownloads();
  const saved = STUDY_PACKS.filter(p => prog[p.id] >= 100);
  const busy = STUDY_PACKS.some(p => prog[p.id] !== undefined && prog[p.id] < 100);
  const total = STUDY_PACKS.reduce((s, p) => s + p.mb, 0);
  const savedMb = saved.reduce((s, p) => s + p.mb, 0);
  const all = saved.length === STUDY_PACKS.length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "05",
    kicker: "Self-study \xB7 works offline",
    title: "Study Pack",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        maxWidth: 320,
        lineHeight: 1.5
      }
    }, "For when you're flying in. Download the course before take-off. The lessons work in flight mode. The ocean does not.")
  }), /*#__PURE__*/React.createElement(Window, {
    title: "flight_mode.exe",
    bar: "accent",
    meta: all ? 'Ready' : saved.length + '/' + STUDY_PACKS.length + ' saved',
    controls: ['min', 'close'],
    shadow: "lg",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 28,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '26px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '999 1 420px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: 'clamp(30px, 3.4vw, 46px)',
      lineHeight: 0.95,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em'
    }
  }, all ? 'Ready for flight mode.' : 'Save the whole course for the flight.'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--ink-2)'
    }
  }, all ? `${savedMb.toFixed(1)} MB saved to this device. Lessons, games and the exam all work without signal. Press Open on any pack to start.` : `Six packs, ${total.toFixed(1)} MB. Everything you need to keep studying between Joburg and the coast.`)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 300px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Saved for offline",
    value: Math.round(savedMb * 10) / 10,
    max: Math.round(total * 10) / 10,
    segments: 16,
    showCount: false
  }), all ? /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: () => STUDY_PACKS.forEach(p => remove(p.id))
  }, "Clear downloads") : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    brackets: true,
    disabled: busy,
    onClick: () => STUDY_PACKS.forEach(p => prog[p.id] >= 100 || start(p.id))
  }, busy ? 'Packing…' : 'Save everything')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: 24,
      marginTop: 40
    }
  }, STUDY_PACKS.map(p => {
    const v = prog[p.id];
    const done = v >= 100,
      going = v !== undefined && !done;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid var(--ink)',
        background: 'var(--paper-2)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 14px',
        borderBottom: '2px solid var(--ink)',
        fontFamily: 'var(--font-mono)',
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement("b", null, p.id), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)',
        fontSize: 10,
        letterSpacing: '0.08em',
        textTransform: 'uppercase'
      }
    }, p.fmt)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start',
        padding: '18px 14px',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 56,
        height: 56,
        display: 'grid',
        placeItems: 'center',
        border: '2px solid var(--ink)',
        background: done ? 'var(--yellow)' : 'var(--bg-dots)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 32
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-grotesk)',
        fontWeight: 800,
        fontSize: 24,
        lineHeight: 1,
        textTransform: 'uppercase',
        letterSpacing: '-0.01em'
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        lineHeight: 1.5,
        color: 'var(--ink-2)',
        textWrap: 'pretty'
      }
    }, p.desc))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '7px 12px',
        borderTop: '2px solid var(--ink)',
        background: 'var(--paper-3)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.06em',
        textTransform: 'uppercase'
      }
    }, /*#__PURE__*/React.createElement("span", null, "SIZE"), /*#__PURE__*/React.createElement("span", null, p.mb.toFixed(1), " MB")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        minHeight: 58
      }
    }, going ? /*#__PURE__*/React.createElement(ProgressBar, {
      value: Math.round(v),
      max: 100,
      segments: 12,
      showCount: false,
      style: {
        flex: 1
      }
    }) : done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18
    }), "Saved"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: () => remove(p.id)
    }, "Remove"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => go && go(p.open)
    }, "Open ", '→')) : /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      block: true,
      onClick: () => start(p.id)
    }, "\u2193 Download")));
  })), /*#__PURE__*/React.createElement(StatusStrip, {
    label: "Cabin",
    items: ['Seatbelt sign: on', 'Wi-Fi: optional', 'Fluency: continuing'],
    style: {
      marginTop: 40
    }
  }));
}
Object.assign(window, {
  Study,
  STUDY_PACKS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/study.jsx", error: String((e && e.message) || e) }); }

// site/js/submit-word.jsx
try { (() => {
const subNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function SubmitWord({
  initial,
  mobile
}) {
  const {
    Window,
    Button,
    Stamp,
    RefCode
  } = subNS;
  const blank = {
    word: '',
    meaning: '',
    example: '',
    where: '',
    name: localStorage.getItem('lsd-name') || '',
    email: localStorage.getItem('lsd-email') || '',
    real: false
  };
  const [f, setF] = React.useState(blank);
  const [err, setErr] = React.useState({});
  const [done, setDone] = React.useState(initial === 'done' ? {
    ref: 'LSD-SUB-0388',
    word: 'your word'
  } : null);
  const set = k => v => {
    setF({
      ...f,
      [k]: v
    });
    if (err[k]) setErr({
      ...err,
      [k]: null
    });
  };
  const submit = e => {
    e.preventDefault();
    const x = {};
    if (!f.word.trim()) x.word = 'A word is required. It is in the name';
    if (!f.meaning.trim()) x.meaning = 'Explain yourself';
    if (!isEmail(f.email)) x.email = f.email ? 'That looks like a vaalie typed it' : 'Gateway needs this';
    if (!f.real) x.real = 'Gateway checks';
    setErr(x);
    if (Object.keys(x).length) return;
    // Mock submission. In production, POST the form to the review inbox here.
    setDone({
      ref: 'LSD-SUB-' + String(Math.floor(1000 + Math.random() * 8999)),
      word: f.word.trim()
    });
  };
  const steps = [['01', 'Received', 'Filed with a submission number.'], ['02', 'Read aloud', 'By Gateway, to Gateway.'], ['03', 'Field-tested', 'Said to a lifeguard. Reaction noted.'], ['04', 'Filed', 'Or returned with a polite note.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "04",
    kicker: "Contributions \xB7 open to the public",
    title: "Submit a Word",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        maxWidth: 320,
        lineHeight: 1.5
      }
    }, "The dictionary holds 32 words. The coast holds more. Send yours to Gateway for review.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 40,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '999 1 560px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Window, {
    title: "submit_word.exe",
    bar: "accent",
    meta: done ? 'Sent' : 'Form W-05',
    controls: ['min', 'close'],
    shadow: "lg",
    padding: 0
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32,
      alignItems: 'center',
      padding: mobile ? 20 : '40px 36px'
    }
  }, /*#__PURE__*/React.createElement(Stamp, {
    top: "A public service by Gateway",
    middle: "FILED",
    bottom: "For review",
    size: 150
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 260px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    code: done.ref,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: 40,
      lineHeight: 0.95,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em'
    }
  }, "Filed for review."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      lineHeight: 1.55
    }
  }, "Shot. \"", done.word, "\" is with Gateway. If it passes the lifeguard test, you'll hear from us by email."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => {
      setF({
        ...blank,
        name: f.name,
        email: f.email
      });
      setDone(null);
    }
  }, "Submit another")))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: mobile ? 16 : 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "The word",
    value: f.word,
    onChange: set('word'),
    placeholder: "One word or phrase",
    error: err.word
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Where you heard it",
    value: f.where,
    onChange: set('where'),
    placeholder: "e.g. North Beach, the taxi rank, my gran"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "What it means",
    multiline: true,
    rows: 3,
    value: f.meaning,
    onChange: set('meaning'),
    placeholder: "Explain it like you would to a vaalie.",
    error: err.meaning
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Use it in a sentence",
    multiline: true,
    rows: 2,
    value: f.example,
    onChange: set('example'),
    placeholder: "Optional. Gateway likes examples."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    value: f.name,
    onChange: set('name'),
    placeholder: "For the credits",
    autoComplete: "given-name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email address",
    type: "email",
    value: f.email,
    onChange: set('email'),
    placeholder: "you@example.co.za",
    autoComplete: "email",
    error: err.email
  })), /*#__PURE__*/React.createElement(Tick, {
    checked: f.real,
    onChange: set('real'),
    error: err.real
  }, "I confirm this word is real and someone in Durban actually says it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 14,
      borderTop: '1px dashed var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "One word per form. Reviewed in order received, or by vibes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => {
      setF(blank);
      setErr({});
    }
  }, "Clear"), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    brackets: true
  }, "Send to Gateway")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 300px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '7px 12px',
      background: 'var(--paper-3)',
      borderBottom: '1px solid var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "REVIEW PROCESS"), /*#__PURE__*/React.createElement("span", null, "4 STEPS")), steps.map(([n, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: '36px 1fr',
      gap: 10,
      padding: '12px',
      borderTop: i ? '1px dashed var(--ink-3)' : 'none',
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 13
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 13,
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ink-2)'
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--ink)',
      background: 'var(--ink)',
      color: 'var(--paper-2)',
      padding: '14px 14px',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.1em',
      marginBottom: 6,
      color: 'var(--yellow)'
    }
  }, "SUBMISSION RULES"), "Real words only. No forks. Words already in the 32 lessons will be returned with a copy of the Dictionary."))));
}
Object.assign(window, {
  SubmitWord
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/submit-word.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsite/Activities.jsx
try { (() => {
const actNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function ClickOMeter() {
  const [v, setV] = React.useState(0.62);
  const stops = ['VAALIE', 'KOOK', 'LAATIE', 'BRU', 'FLUENT'];
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => setV(Math.random()),
    style: {
      width: '78%',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      justifyContent: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(actNS.Icon, {
    name: "headphone",
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 18
    }
  }, "\"GQ-!\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 22,
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      display: 'flex'
    }
  }, stops.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      flex: 1,
      borderLeft: i ? '1px solid var(--ink)' : 'none',
      background: i / stops.length < v ? 'var(--ink)' : 'transparent'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -8,
      left: `calc(${v * 100}% - 1px)`,
      width: 3,
      height: 34,
      background: 'var(--yellow)',
      outline: '1px solid var(--ink)',
      transition: 'left 200ms var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: '0.04em',
      gap: 4
    }
  }, stops.map(s => /*#__PURE__*/React.createElement("span", {
    key: s
  }, s))));
}
function SpotVaalie() {
  const marks = [[22, 40, 'flame shirt'], [64, 70, 'socks + slops'], [78, 28, 'gazebo']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(actNS.Halftone, {
    height: "100%",
    dot: 5,
    placeholder: "beach"
  }), marks.map(([x, y, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      position: 'absolute',
      left: x + '%',
      top: y + '%',
      transform: 'translate(-50%,-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      border: '2px dashed var(--ink)',
      background: 'rgba(255,90,46,.25)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      background: 'var(--paper-2)',
      border: '1px solid var(--ink)',
      padding: '1px 4px',
      whiteSpace: 'nowrap'
    }
  }, l))));
}
function JaNoLaka() {
  const {
    Button
  } = actNS;
  const [s, setS] = React.useState(3);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      width: '80%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      textAlign: 'center',
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      padding: '10px 14px'
    }
  }, "A robot is a traffic light."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setS(s + 1)
  }, "NO LAKA"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setS(Math.max(0, s - 1))
  }, "EISH, NO")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11
    }
  }, "Score: ", s, " soft-serves"));
}
function DurdleGrid() {
  const rows = [['K', 'O', 'O', 'K', ''], ['S', 'H', 'A', 'P', ''], ['', '', '', '', ''], ['', '', '', '', '']];
  const hit = {
    '0-0': 'y',
    '1-0': 'i',
    '1-1': 'i'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 32px)',
      gap: 5
    }
  }, rows.flatMap((r, ri) => r.map((c, ci) => {
    const h = hit[ri + '-' + ci];
    return /*#__PURE__*/React.createElement("span", {
      key: ri + '-' + ci,
      style: {
        width: 32,
        height: 32,
        display: 'grid',
        placeItems: 'center',
        border: '2px solid var(--ink)',
        background: h === 'y' ? 'var(--yellow)' : h === 'i' ? 'var(--ink)' : 'var(--paper-2)',
        color: h === 'i' ? 'var(--paper-2)' : 'var(--ink)',
        fontFamily: 'var(--font-pixel)',
        fontSize: 16
      }
    }, c);
  })));
}
function PackForDurban({
  onBad
}) {
  const items = [['Baggies', true], ['Sunscreen', true], ['Wetsuit', false], ['Fork', false]];
  const [packed, setPacked] = React.useState(['Baggies']);
  const add = (n, ok) => {
    if (!ok) return onBad(n);
    if (!packed.includes(n)) setPacked([...packed, n]);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, items.map(([n, ok]) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => add(n, ok),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      border: '2px solid var(--ink)',
      background: packed.includes(n) ? 'var(--paper-3)' : 'var(--paper-2)',
      padding: '4px 8px',
      cursor: 'grab',
      textAlign: 'left',
      textDecoration: packed.includes(n) ? 'line-through' : 'none'
    }
  }, n))), /*#__PURE__*/React.createElement(actNS.Icon, {
    name: "arrow-right",
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 96,
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      position: 'relative',
      padding: '18px 8px 6px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      fontFamily: 'var(--font-mono)',
      fontSize: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -10,
      left: 34,
      width: 40,
      height: 10,
      border: '2px solid var(--ink)',
      borderBottom: 'none'
    }
  }), packed.map(p => /*#__PURE__*/React.createElement("span", {
    key: p
  }, "\u2713 ", p))));
}
function Leaderboard() {
  const {
    Window,
    Icon
  } = actNS;
  return /*#__PURE__*/React.createElement(Window, {
    title: "top_students.txt",
    meta: "Live",
    controls: ['min', 'close'],
    shadow: "md",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trophy",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: 26,
      textTransform: 'uppercase'
    }
  }, "Top Students")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '28px 1fr auto auto',
      columnGap: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, ['#', 'Student', 'Exam', 'Games'].map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      padding: '6px 0',
      borderTop: '1px solid var(--ink)',
      borderBottom: '1px solid var(--ink)',
      background: 'var(--paper-3)',
      fontSize: 10,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      paddingLeft: h === '#' ? 16 : 0,
      paddingRight: h === 'Games' ? 16 : 0
    }
  }, h)), window.LSD_DATA.leaderboard.map(([n, e, g], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: n
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '9px 0 9px 16px',
      borderBottom: '1px dashed var(--paper-4)',
      fontWeight: 700
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '9px 0',
      borderBottom: '1px dashed var(--paper-4)'
    }
  }, i === 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--yellow)',
      padding: '0 4px'
    }
  }, n) : n), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '9px 0',
      borderBottom: '1px dashed var(--paper-4)'
    }
  }, e), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '9px 16px 9px 0',
      borderBottom: '1px dashed var(--paper-4)',
      textAlign: 'right'
    }
  }, g)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "Updated after every exam. Forks disqualify. Sand in the keyboard is fine."));
}
function Activities({
  initialError = 'Wetsuit',
  game
}) {
  const openGame = ref => {
    location.hash = 'act/' + ref.toLowerCase();
  };
  const {
    SpecCard,
    Button,
    Dialog,
    Icon
  } = actNS;
  const [err, setErr] = React.useState(initialError);
  const games = [{
    ref: 'GAME-01',
    label: 'Say Gqom',
    tag: 'MIC',
    src: 'Mic-based pronunciation test. The click-o-meter rates your gqom click from VAALIE to FLUENT.',
    body: /*#__PURE__*/React.createElement(ClickOMeter, null)
  }, {
    ref: 'GAME-02',
    label: 'Spot the Vaalie',
    tag: '3 TO FIND',
    src: 'Find the details in the beach scene: flame shirt, socks with slops, gazebo with cup holders.',
    body: /*#__PURE__*/React.createElement(SpotVaalie, null),
    nox: true
  }, {
    ref: 'GAME-03',
    label: 'Ja / No Laka',
    tag: '60 SEC',
    src: 'Rapid true-false. Agree? NO LAKA (it means yes, keep up). Disagree? EISH, NO. Score counted in soft-serves.',
    body: /*#__PURE__*/React.createElement(JaNoLaka, null)
  }, {
    ref: 'GAME-04',
    label: 'Durdle',
    tag: 'DAILY',
    src: 'Daily Durban-slang word game. Six tries. Today\u2019s word is in the Dictionary. So is tomorrow\u2019s. Hint hint.',
    body: /*#__PURE__*/React.createElement(DurdleGrid, null)
  }, {
    ref: 'GAME-05',
    label: 'Pack for Durban',
    tag: 'DRAG',
    src: 'Drag the essentials to the suitcase. The system will tell you if you are wrong. Loudly.',
    body: /*#__PURE__*/React.createElement(PackForDurban, {
      onBad: setErr
    })
  }, {
    ref: 'GAME-06',
    label: 'The 2pm Quiz',
    tag: 'LOCKED',
    src: 'Locked before 2pm. Come back after the beach.',
    locked: true,
    body: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        opacity: 0.9
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 48
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-pixel)',
        fontSize: 22
      }
    }, "14:00"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13
      }
    }, "Come back after the beach."))
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "02",
    kicker: "Practical study \xB7 six games",
    title: "Activities"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 640px), 1fr))',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: 28,
      position: 'relative'
    }
  }, games.map(g => /*#__PURE__*/React.createElement(SpecCard, {
    key: g.ref,
    refCode: g.ref,
    meta: g.locked ? 'Opens 14:00' : 'Play',
    label: g.label,
    chipVariant: g.locked ? 'inverse' : 'outline',
    crosshair: !g.nox,
    previewHeight: 230,
    sourceLabel: "SOURCE",
    sourceTag: g.tag,
    source: g.src,
    interactive: true,
    onClick: () => openGame(g.ref),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, g.locked ? 'Status: sunbathing' : 'Best: 9 soft-serves'), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: g.locked ? 'secondary' : 'primary',
      onClick: e => {
        e.stopPropagation();
        openGame(g.ref);
      }
    }, g.locked ? 'Peek' : 'Play full screen'))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'none',
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, g.body))), err && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '30%',
      top: '58%',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(Dialog, {
    title: "pack_for_durban.exe",
    kind: "error",
    heading: err === 'Fork' ? 'ABSOLUTELY NOT' : '\u26A0 Error: wetsuit detected.',
    width: 400,
    onClose: () => setErr(null),
    actions: err === 'Fork' ? /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => setErr(null)
    }, "Remove fork") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setErr(null)
    }, "OK"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => setErr(null)
    }, "OK, bru"))
  }, err === 'Fork' ? 'Forks are not permitted within 50km of a bunny.' : 'Baggies required.'))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 140,
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement(Leaderboard, null))), game && /*#__PURE__*/React.createElement(GameScreen, {
    id: game,
    onBack: () => {
      location.hash = 'act';
    }
  }));
}
Object.assign(window, {
  Activities
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsite/Activities.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsite/Dictionary.jsx
try { (() => {
const dictNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function buildDrawer(words) {
  const sorted = [...words].sort((a, b) => a[1].replace(/^The /, 'T').localeCompare(b[1].replace(/^The /, 'T')));
  const rows = [];
  let cur = null;
  const counts = {};
  sorted.forEach(w => {
    const L = w[1].replace(/^The /, 'T')[0].toUpperCase();
    counts[L] = (counts[L] || 0) + 1;
  });
  const cols = [40, 60, 26, 52, 34, 64];
  sorted.forEach((w, i) => {
    const L = w[1].replace(/^The /, 'T')[0].toUpperCase();
    if (L !== cur) {
      rows.push({
        letter: L,
        count: String(counts[L]).padStart(3, '0'),
        offset: 4 + rows.length % 3 * 6
      });
      cur = L;
    }
    rows.push({
      w,
      offset: cols[i % cols.length]
    });
  });
  return rows;
}
function EntryCard({
  w,
  playing,
  setPlaying
}) {
  const {
    Button,
    RefCode,
    Barcode,
    ProgressBar,
    Icon
  } = dictNS;
  const [num, word, pos, def, ex] = w;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      padding: '9px 22px',
      marginBottom: -2,
      background: 'var(--yellow)',
      border: '2px solid var(--ink)',
      borderBottom: 'none',
      borderRadius: '8px 8px 0 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 700,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", null, num), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 600
    }
  }, word))), /*#__PURE__*/React.createElement("article", {
    style: {
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-hard-lg)',
      padding: '28px 32px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      transform: 'rotate(-0.6deg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    prefix: "",
    code: 'LSD-' + num + ' · Entry ' + num + ' of 32'
  }), /*#__PURE__*/React.createElement(RefCode, {
    code: "LSD-2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: 84,
      lineHeight: 0.9,
      letterSpacing: '-0.02em'
    }
  }, word), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--ink-2)'
    }
  }, pos)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 17,
      lineHeight: 1.55,
      textWrap: 'pretty'
    }
  }, def), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '5px 10px',
      background: 'var(--paper-3)',
      borderBottom: '1px solid var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.1em'
    }
  }, "EXAMPLE"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 12px',
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      fontStyle: 'italic'
    }
  }, "\u201C", ex, "\u201D")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: playing ? 'accent' : 'primary',
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: playing ? 'volume-3' : 'play',
      size: 18
    }),
    onClick: () => setPlaying(!playing)
  }, playing ? 'On air — Radio lesson ' + num : 'Hear it'), /*#__PURE__*/React.createElement(Barcode, {
    value: 'LSD-' + num + word,
    width: 130,
    height: 30
  })), playing && /*#__PURE__*/React.createElement(ProgressBar, {
    label: 'Radio lesson ' + num + ' · ' + word,
    value: 3,
    max: 10,
    showCount: false
  })));
}
function Dictionary() {
  const {
    IndexTab
  } = dictNS;
  const words = window.LSD_DATA.words;
  const rows = React.useMemo(() => buildDrawer(words), []);
  const [open, setOpen] = React.useState('13');
  const [playing, setPlaying] = React.useState(false);
  const w = words.find(x => x[0] === open);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "01",
    kicker: "Reference \xB7 do not remove from the drawer",
    title: "The Dictionary",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        maxWidth: 300,
        lineHeight: 1.5,
        textAlign: 'right'
      }
    }, "Filed alphabetically. Numbered by lesson. Dusted weekly. Pull any card to read the full entry.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-3)',
      border: '2px solid var(--ink)',
      borderBottom: 'none',
      padding: '18px 14px 0'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginTop: i ? -14 : 0,
      padding: `0 ${Math.max(0, (rows.length - i) * 0.35)}px`,
      position: 'relative',
      zIndex: i
    }
  }, r.letter ? /*#__PURE__*/React.createElement(IndexTab, {
    letter: r.letter,
    count: r.count,
    offset: r.offset,
    tabWidth: "28%"
  }) : /*#__PURE__*/React.createElement(IndexTab, {
    number: r.w[0],
    word: r.w[1],
    offset: r.offset,
    tabWidth: "34%",
    active: r.w[0] === open,
    onClick: () => {
      setOpen(r.w[0]);
      setPlaying(false);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22,
      background: 'var(--paper-2)',
      borderTop: '1.5px solid var(--ink)',
      margin: '0 -14px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 110,
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      boxShadow: 'var(--shadow-hard)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontSize: 20,
      fontWeight: 500,
      background: 'var(--yellow)',
      border: '1.5px solid var(--ink)',
      borderRadius: 6,
      padding: '6px 22px'
    }
  }, "the whole language, filed."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      bottom: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--ink-3)'
    }
  }, "DRAWER 01 / 01 \xB7 LSD-01 \u2013 LSD-32 \xB7 SAND INSIDE: LIKELY"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 140
    }
  }, /*#__PURE__*/React.createElement(EntryCard, {
    w: w,
    playing: playing,
    setPlaying: setPlaying
  }))));
}
Object.assign(window, {
  Dictionary
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsite/Dictionary.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsite/Enrol.jsx
try { (() => {
const enrolNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function EnrolTease({
  mobile
}) {
  const {
    Icon,
    RefCode,
    Button
  } = enrolNS;
  const toForm = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      const el = document.querySelector('input[autocomplete="given-name"]');
      if (el) el.focus({
        preventScroll: true
      });
    }, 400);
  };
  const items = [['01', 'The Dictionary', '32 words on index cards, each with a radio lesson.', 'B——y  n.  A quarter loaf of █████, hollowed and ██████ with curry.'], ['02', 'Activities', 'Six games, from Say Gqom to Spot the Vaalie, plus the leaderboard.', 'GAME-01 … GAME-06  ·  TOP STUDENTS: ████████'], ['03', 'Merch', 'Course materials. Mostly tees. One cooler box.', 'MERCH-01  ████.  Tee  ·  R ███'], ['04', 'Submit a Word', 'Know one we missed? File it with Gateway.', 'FORM W-05  ·  Review: 4 steps'], ['05', 'Study Pack', 'Download the course for the flight. Works offline.', 'PACK-01 … PACK-06  ·  51.0 MB'], ['06', 'Student Card', 'Upload a selfie. Get pixelated. Post it to your story.', 'STUDENT: █████  ·  FORKS ON PERSON: 0'], ['07', 'Flashcards', 'All 32 words on flip cards. Guess, flip, file as known.', 'LSD-13  ·  FRONT: B████  ·  BACK: ███████'], ['08', 'The Final Exam', '32 questions. Pass and your Certificate of Fluency prints itself.', 'Q13/32  The bunny arrives with a ████ █████. You:']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: mobile ? 44 : 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 20,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, "Enrolment unlocks"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: mobile ? 40 : 'clamp(44px, 5vw, 72px)',
      lineHeight: 0.9,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase'
    }
  }, "Eight files.", /*#__PURE__*/React.createElement("br", null), "Currently locked.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.5,
      maxWidth: 340
    }
  }, "Everything below opens the moment you enrol. Contents partially redacted by Gateway\u2019s legal team (one guy, Dave).")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
      gap: 22
    }
  }, items.map(([n, t, d, peek], i) => /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    onClick: toForm,
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      paddingLeft: [0, 24, 48, 12, 36, 60, 18, 42][i]
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '7px 14px',
      marginBottom: -2,
      border: '2px solid var(--ink)',
      borderBottom: 'none',
      borderRadius: '6px 6px 0 0',
      background: 'var(--paper-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("b", null, n), /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'lowercase'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '18px 18px 14px',
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: 28,
      lineHeight: 0.95,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 8px 3px 4px',
      background: 'var(--ink)',
      color: 'var(--paper-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.08em'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 16
  }), "LOCKED")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--ink-2)',
      textWrap: 'pretty'
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: '10px 10px',
      border: '1px dashed var(--ink-3)',
      background: 'var(--bg-dots)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      whiteSpace: 'pre-wrap',
      overflow: 'hidden',
      color: 'var(--ink-2)'
    }
  }, peek))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 28,
      padding: '16px 18px',
      border: '2px solid var(--ink)',
      background: 'var(--yellow)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 700
    }
  }, "Eight files. One form. Course fee: free."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    brackets: true,
    onClick: toForm
  }, "Unlock the course")));
}
function Enrol({
  onDone,
  mobile,
  initial
}) {
  const {
    Window,
    Button,
    Barcode,
    RefCode,
    Dialog,
    StatusStrip
  } = enrolNS;
  const [f, setF] = React.useState({
    name: '',
    email: '',
    consent: false,
    promise: false
  });
  const [err, setErr] = React.useState({});
  const [done, setDone] = React.useState(initial === 'done' ? {
    no: 'LSD-2026-04417',
    name: 'Thandi'
  } : null);
  const set = k => v => {
    setF({
      ...f,
      [k]: v
    });
    if (err[k]) setErr({
      ...err,
      [k]: null
    });
  };
  const submit = e => {
    e.preventDefault();
    const x = {};
    if (!f.name.trim()) x.name = 'Gateway needs this';
    if (!isEmail(f.email)) x.email = f.email ? 'That looks like a vaalie typed it' : 'Gateway needs this';
    if (!f.consent) x.consent = 'Tick it. It is free, bru';
    setErr(x);
    if (Object.keys(x).length) return;
    const no = 'LSD-2026-' + String(Math.floor(10000 + Math.random() * 89999));
    // Mock capture. In production, POST { name, email, consent, source: 'lsd-enrol' } to the CRM here.
    localStorage.setItem('lsd-enrolled', '1');
    localStorage.setItem('lsd-name', f.name.trim());
    localStorage.setItem('lsd-email', f.email.trim());
    localStorage.setItem('lsd-student', no);
    setDone({
      no,
      name: f.name.trim()
    });
  };
  const rows = [['Lessons', '32 · real Durban slang'], ['Final exam', '32 questions · written on site'], ['Games', '6 · plus the leaderboard'], ['Study Pack', 'Download for the flight · works offline'], ['Certificate', 'Your name on it · redeemable at Gateway, Durban'], ['Course fee', 'Free']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      maxWidth: 'var(--page-max)',
      width: '100%',
      margin: '0 auto',
      padding: mobile ? '14px 16px' : '20px 64px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      borderBottom: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: mobile ? 16 : 20,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em'
    }
  }, "Learn to Speak Durban"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: 'var(--yellow)',
      border: '1px solid var(--ink)'
    }
  }), "Enrolment desk \xB7 open")), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      maxWidth: 'var(--page-max)',
      width: '100%',
      margin: '0 auto',
      padding: mobile ? '28px 16px 0' : '64px 64px 0'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      gap: mobile ? 28 : 56,
      alignItems: 'flex-start',
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      boxShadow: mobile ? 'var(--shadow-hard)' : 'var(--shadow-hard-lg)',
      padding: mobile ? '36px 18px 22px' : '56px 56px 48px'
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    code: "LSD-2026 \xB7 FORM E-01",
    style: {
      position: 'absolute',
      top: 10,
      left: 12
    }
  }), !mobile && /*#__PURE__*/React.createElement(Barcode, {
    value: "LSD-ENROL",
    width: 160,
    height: 36,
    style: {
      position: 'absolute',
      top: 14,
      right: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '999 1 480px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: mobile ? 18 : 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: mobile ? 11 : 13,
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, "A public service by Gateway"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: mobile ? 54 : 'clamp(56px, 7.6vw, 124px)',
      lineHeight: 0.86,
      letterSpacing: '-0.03em',
      textTransform: 'uppercase'
    }
  }, "Learn to", /*#__PURE__*/React.createElement("br", null), "Speak ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontWeight: 400,
      fontSize: '0.86em',
      letterSpacing: '-0.02em',
      background: 'var(--yellow)',
      padding: '0 0.06em'
    }
  }, "Durban")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 540,
      fontFamily: 'var(--font-mono)',
      fontSize: mobile ? 14 : 16,
      lineHeight: 1.55,
      textWrap: 'pretty'
    }
  }, "The course the whole country is passing happily. Enrol to open all 32 lessons, write the final exam and receive your Certificate of Fluency."), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--ink)',
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '7px 12px',
      background: 'var(--paper-3)',
      borderBottom: '1px solid var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "ENROLMENT INCLUDES"), /*#__PURE__*/React.createElement("span", null, "2026 INTAKE")), rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '96px 1fr' : '130px 1fr',
      gap: 12,
      padding: '9px 12px',
      borderTop: i ? '1px dashed var(--ink-3)' : 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      textTransform: 'uppercase',
      fontSize: 11,
      letterSpacing: '0.06em',
      paddingTop: 2
    }
  }, k), /*#__PURE__*/React.createElement("span", null, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 360px',
      minWidth: 0,
      maxWidth: mobile ? undefined : 460
    }
  }, /*#__PURE__*/React.createElement(Window, {
    title: "enrolment_form.exe",
    bar: "accent",
    meta: "Step 1 of 1",
    controls: ['close'],
    shadow: "md",
    padding: 0
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: mobile ? 16 : 22
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "First name",
    value: f.name,
    onChange: set('name'),
    placeholder: "Your actual name. Not \u201CBru\u201D.",
    autoComplete: "given-name",
    error: err.name
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email address",
    type: "email",
    value: f.email,
    onChange: set('email'),
    placeholder: "you@example.co.za",
    autoComplete: "email",
    error: err.email
  }), /*#__PURE__*/React.createElement(Tick, {
    checked: f.consent,
    onChange: set('consent'),
    error: err.consent
  }, "Send me lessons, exam reminders and Gateway rewards. Unsubscribe any time \u2014 no hard feelings, bru."), /*#__PURE__*/React.createElement(Tick, {
    checked: f.promise,
    onChange: set('promise')
  }, "I promise not to bring a wetsuit. (Optional, but noted.)"), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    block: true,
    brackets: true
  }, "Enrol, bru"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      lineHeight: 1.5,
      color: 'var(--ink-3)'
    }
  }, "Your details are handled by Gateway in line with its ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--ink)'
    }
  }, "privacy policy"), ". One enrolment per student. Clones must enrol separately."))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onDone('home'),
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'block',
      marginTop: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textDecoration: 'underline',
      textUnderlineOffset: 4
    }
  }, "Already enrolled? Go to the course (we trust you)"))), /*#__PURE__*/React.createElement(EnrolTease, {
    mobile: mobile
  }), /*#__PURE__*/React.createElement(StatusStrip, {
    label: "Intake",
    items: ['Students enrolled today: 1,204', 'Forks confiscated: 37', 'Course fee: free', 'Fluency: guaranteed-ish'],
    style: {
      marginTop: mobile ? 28 : 40
    }
  })), /*#__PURE__*/React.createElement(Footer, {
    mobile: mobile
  }), done && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 40,
      display: 'grid',
      placeItems: 'center',
      padding: 16,
      background: 'rgba(242,241,236,.6)'
    }
  }, /*#__PURE__*/React.createElement(Dialog, {
    title: "enrolment.exe",
    kind: "success",
    heading: "Enrolment confirmed.",
    width: mobile ? '100%' : 440,
    onClose: () => onDone('home'),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onDone('home')
    }, "Go to the index"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => onDone('dict')
    }, "Begin Lesson 1"))
  }, "Welcome to the coast, ", done.name, ". Student no. ", /*#__PURE__*/React.createElement("b", null, done.no), ". Your first lesson is on its way to your inbox. Check spam. Gateway is new at email.")));
}
Object.assign(window, {
  Enrol
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsite/Enrol.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsite/Exam.jsx
try { (() => {
const examNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function ExamStack({
  children,
  title = 'final_exam.exe',
  meta
}) {
  const {
    Window
  } = examNS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: 72,
      paddingLeft: 72
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      top: i * 24,
      left: i * 24,
      right: 72 - i * 24,
      bottom: 72 - i * 24
    }
  }, /*#__PURE__*/React.createElement(Window, {
    title: title,
    controls: ['close'],
    shadow: "grey",
    style: {
      height: '100%'
    },
    bar: "strip"
  }, /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Window, {
    title: title,
    meta: meta,
    bar: "accent",
    controls: ['min', 'close'],
    shadow: "lg",
    padding: 0
  }, children)));
}
function Certificate({
  name,
  setName,
  score
}) {
  const {
    RefCode,
    Barcode,
    Stamp,
    Input,
    Button
  } = examNS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 40,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '999 1 520px',
      minWidth: 0,
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-hard-lg)',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--ink)',
      padding: '30px 40px 28px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    code: 'LSD-2026-CERT-' + String(score).padStart(2, '0') + '0417'
  }), /*#__PURE__*/React.createElement(RefCode, {
    prefix: "",
    code: "Issued as a public service by Gateway"
  })), /*#__PURE__*/React.createElement(Barcode, {
    value: 'CERT' + name,
    width: 140,
    height: 36,
    style: {
      maxWidth: '40%'
    },
    showValue: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      marginTop: 10
    }
  }, "This certifies that"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '2px solid var(--ink)',
      paddingBottom: 6,
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: 56,
      lineHeight: 1,
      minHeight: 56
    }
  }, name || '\u00a0'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      lineHeight: 1.55,
      maxWidth: 520
    }
  }, "has completed all 32 lessons and passed the Final Exam with a score of ", /*#__PURE__*/React.createElement("b", null, score, "/32"), ", and is hereby declared"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: 64,
      lineHeight: 0.9,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em'
    }
  }, "Fluent in Durban"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderTop: '1px solid var(--ink)',
      marginTop: 8
    }
  }, [['Course', 'LSD-01 – LSD-32'], ['Grade', score >= 30 ? 'Native-ish' : 'Fluent'], ['Valid', 'Up and down the coast']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: '8px 10px 0 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, k), v))), /*#__PURE__*/React.createElement(Stamp, {
    top: "A public service by Gateway",
    size: 150,
    style: {
      position: 'absolute',
      right: 34,
      bottom: 70
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 4px 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "Show this certificate at Gateway, Durban to claim your graduation reward."), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, "1 / 1"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 260px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name of graduate",
    value: name,
    onChange: e => setName(e.target.value),
    hint: "Printed exactly as typed. Choose wisely. Your gran will see this."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    block: true,
    brackets: true
  }, "Print certificate"), /*#__PURE__*/React.createElement(Button, {
    block: true
  }, "Download PDF (for the fridge)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--ink-2)'
    }
  }, "Redeemable once per graduate at Gateway, Durban. Baggies optional at collection.")));
}
function Exam({
  go,
  initial
}) {
  const {
    AnswerOption,
    Button,
    ProgressBar,
    Dialog
  } = examNS;
  const Q = window.LSD_DATA.exam;
  const N = Q.length,
    PASS = 24;
  const [i, setI] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [phase, setPhase] = React.useState(initial || 'q');
  const [name, setName] = React.useState(() => localStorage.getItem('lsd-name') || 'Thandi Mkhize');
  const score = Object.entries(answers).filter(([k, v]) => Q[k].c === v).length;
  const q = Q[i];
  const sel = answers[i];
  const answered = Object.keys(answers).length;
  const complete = answered === N;
  const shown = complete ? score : phase === 'fail' ? 13 : 29;
  const missed = complete ? Q.filter((x, k) => answers[k] !== x.c).map(x => window.LSD_DATA.words[+x.w - 1][1]) : ['Kiff', 'Robot', 'Pozi'];
  const next = () => {
    if (i < N - 1) setI(i + 1);else if (complete) setPhase(score >= PASS ? 'pass' : 'fail');
  };
  const reset = () => {
    setAnswers({});
    setI(0);
    setPhase('q');
  };
  const demo = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      letterSpacing: '0.08em'
    }
  }, "DEMO STATE"), [['q', 'Question'], ['pass', 'Pass'], ['fail', 'Fail']].map(([k, l]) => /*#__PURE__*/React.createElement(Button, {
    key: k,
    size: "sm",
    variant: phase === k ? 'primary' : 'secondary',
    onClick: () => setPhase(k)
  }, l)));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "08",
    kicker: "Assessment \xB7 pencils down, baggies on",
    title: phase === 'pass' ? 'Certificate of Fluency' : 'The Final Exam',
    right: demo
  }), phase === 'pass' ? /*#__PURE__*/React.createElement(Certificate, {
    name: name,
    setName: setName,
    score: shown
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(ExamStack, {
    meta: 'Question ' + String(i + 1).padStart(2, '0') + '/' + N
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 30
    }
  }, "QUESTION ", String(i + 1).padStart(2, '0'), "/", N), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "REF: LSD-", q.w, " \xB7 LESSON ", q.w, "/32")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 36,
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
      textWrap: 'balance'
    }
  }, q.q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, q.a.map((a, k) => /*#__PURE__*/React.createElement(AnswerOption, {
    key: k,
    letter: 'abc'[k],
    state: sel === k ? 'selected' : 'idle',
    onClick: () => {
      setAnswers({
        ...answers,
        [i]: k
      });
    }
  }, a))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.08em',
      color: 'var(--ink-3)'
    }
  }, "QUESTION MAP \xB7 JUMP AROUND, WE WON'T TELL"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(16, minmax(0,1fr))',
      gap: 4
    }
  }, Q.map((x, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    type: "button",
    onClick: () => setI(k),
    title: 'Question ' + (k + 1),
    style: {
      height: 26,
      padding: 0,
      border: '1.5px solid var(--ink)',
      borderRadius: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 700,
      background: k === i ? 'var(--yellow)' : answers[k] !== undefined ? 'var(--ink)' : 'var(--paper-2)',
      color: k !== i && answers[k] !== undefined ? 'var(--paper-2)' : 'var(--ink)'
    }
  }, String(k + 1).padStart(2, '0')))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      padding: '22px 32px 26px',
      marginTop: 24,
      borderTop: '1px dashed var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Answered",
    value: answered,
    max: N,
    segments: 16,
    style: {
      width: 300
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: i === 0,
    onClick: () => setI(i - 1)
  }, "Wait, go back"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: sel === undefined || i === N - 1 && !complete,
    onClick: next
  }, i === N - 1 ? complete ? 'Hand it in' : N - answered + ' to go, bru' : 'Next, bru')))), phase === 'fail' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(242,241,236,.55)'
    }
  }, /*#__PURE__*/React.createElement(Dialog, {
    title: "exam_result.exe",
    kind: "error",
    heading: 'Eish. ' + shown + '/32.',
    width: 460,
    onClose: () => setPhase('q'),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => go('dict')
    }, "Study the Dictionary"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: reset
    }, "Try again"))
  }, "Rewrite immediately \u2014 the ocean isn't going anywhere.", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 8,
      fontSize: 12,
      color: 'var(--ink-2)'
    }
  }, "Pass mark: ", PASS, "/32. Gateway suggests revising: ", missed.slice(0, 6).join(', '), missed.length > 6 ? ' and ' + (missed.length - 6) + ' more' : '', ".")))));
}
Object.assign(window, {
  Exam
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsite/Exam.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsite/Flashcards.jsx
try { (() => {
const flashNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function Flashcards() {
  const {
    Button,
    RefCode,
    Barcode,
    ProgressBar,
    StatusStrip,
    Icon
  } = flashNS;
  const all = window.LSD_DATA.words;
  const [order, setOrder] = React.useState(() => all.map((_, i) => i));
  const [pos, setPos] = React.useState(0);
  const [flip, setFlip] = React.useState(false);
  const [known, setKnown] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lsd-flash') || '[]');
    } catch (e) {
      return [];
    }
  });
  const [onlyNew, setOnlyNew] = React.useState(false);
  React.useEffect(() => {
    localStorage.setItem('lsd-flash', JSON.stringify(known));
  }, [known]);
  const deck = onlyNew ? order.filter(i => !known.includes(all[i][0])) : order;
  const idx = deck.length ? deck[Math.min(pos, deck.length - 1)] : null;
  const w = idx !== null ? all[idx] : null;
  const go = d => {
    setFlip(false);
    setTimeout(() => setPos(p => (p + d + deck.length) % deck.length), flip ? 120 : 0);
  };
  const mark = got => {
    if (!w) return;
    setKnown(k => got ? k.includes(w[0]) ? k : [...k, w[0]] : k.filter(x => x !== w[0]));
    if (onlyNew && got) {
      setFlip(false);
      setPos(p => Math.min(p, Math.max(0, deck.length - 2)));
    } else go(1);
  };
  const shuffle = () => {
    const o = [...order];
    for (let i = o.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [o[i], o[j]] = [o[j], o[i]];
    }
    setOrder(o);
    setPos(0);
    setFlip(false);
  };
  React.useEffect(() => {
    const f = e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === ' ') {
        e.preventDefault();
        setFlip(x => !x);
      } else if (e.key === 'ArrowRight') go(1);else if (e.key === 'ArrowLeft') go(-1);
    };
    addEventListener('keydown', f);
    return () => removeEventListener('keydown', f);
  });
  const face = {
    position: 'absolute',
    inset: 0,
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    background: 'var(--paper-2)',
    border: '2px solid var(--ink)',
    display: 'flex',
    flexDirection: 'column',
    padding: '22px 28px'
  };
  const allDone = known.length === all.length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "07",
    kicker: "Revision \xB7 one card at a time",
    title: "Flashcards",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        maxWidth: 320,
        lineHeight: 1.5
      }
    }, "Read the word. Guess the meaning. Flip the card. Be honest with yourself. The Institute is.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 48,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '999 1 560px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, w ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setFlip(!flip),
    style: {
      position: 'relative',
      height: 440,
      perspective: 1600,
      cursor: 'pointer'
    },
    role: "button",
    "aria-label": "Flip card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      transformStyle: 'preserve-3d',
      transition: 'transform 420ms var(--ease-out)',
      transform: flip ? 'rotateY(180deg)' : 'none',
      boxShadow: 'var(--shadow-hard-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: face
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    prefix: "",
    code: 'LSD-' + w[0] + ' · Card ' + (deck.indexOf(idx) + 1) + ' of ' + deck.length
  }), /*#__PURE__*/React.createElement(RefCode, {
    code: "LSD-2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 28
    }
  }, w[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: 'clamp(64px, 9vw, 120px)',
      lineHeight: 0.9,
      letterSpacing: '-0.02em'
    }
  }, w[1]), known.includes(w[0]) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em',
      background: 'var(--yellow)',
      border: '2px solid var(--ink)',
      padding: '3px 8px'
    }
  }, "FILED AS KNOWN"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-3)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Tap or press space to flip"), /*#__PURE__*/React.createElement(Barcode, {
    value: 'FLASH' + w[0],
    width: 100,
    height: 24
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...face,
      transform: 'rotateY(180deg)',
      gap: 16,
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    prefix: "",
    code: 'LSD-' + w[0] + ' · Reverse'
  }), /*#__PURE__*/React.createElement(RefCode, {
    code: "LSD-2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: 52,
      lineHeight: 0.95
    }
  }, w[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontStyle: 'italic',
      fontSize: 16,
      color: 'var(--ink-2)'
    }
  }, w[2])), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 17,
      lineHeight: 1.55,
      textWrap: 'pretty'
    }
  }, w[3]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      border: '1px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '5px 10px',
      background: 'var(--paper-3)',
      borderBottom: '1px solid var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.1em'
    }
  }, "EXAMPLE"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      fontStyle: 'italic'
    }
  }, "\u201C", w[4], "\u201D"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go(-1),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })
  }, "Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => mark(false)
  }, "Eish, again"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => mark(true)
  }, "Got it, shap")), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go(1)
  }, "Next ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 440,
      border: '2px solid var(--ink)',
      background: 'var(--yellow)',
      boxShadow: 'var(--shadow-hard-lg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      textAlign: 'center',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 40
    }
  }, "32/32"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: 56,
      lineHeight: 0.9,
      textTransform: 'uppercase'
    }
  }, "Deck cleared."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      maxWidth: 420
    }
  }, "Every card filed as known. The Final Exam is expecting you. So is the ocean."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => {
      setOnlyNew(false);
      setPos(0);
    }
  }, "Review the full deck"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 300px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Filed as known",
    value: known.length,
    max: all.length,
    segments: 16
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      gap: 4
    }
  }, all.map((x, i) => {
    const on = w && x[0] === w[0],
      k = known.includes(x[0]);
    return /*#__PURE__*/React.createElement("button", {
      key: x[0],
      type: "button",
      title: x[1],
      onClick: () => {
        if (onlyNew && k) setOnlyNew(false);
        const d = onlyNew && !k ? deck : order;
        setPos(d.indexOf(i));
        setFlip(false);
      },
      style: {
        height: 32,
        border: '2px solid var(--ink)',
        background: on ? 'var(--yellow)' : k ? 'var(--ink)' : 'var(--paper-2)',
        color: k && !on ? 'var(--paper-2)' : 'var(--ink)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 700,
        cursor: 'pointer',
        padding: 0
      }
    }, x[0]);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: shuffle
  }, "Shuffle the deck"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: onlyNew ? 'primary' : 'secondary',
    onClick: () => {
      setOnlyNew(!onlyNew);
      setPos(0);
      setFlip(false);
    }
  }, onlyNew ? 'Showing: still learning' : 'Only the ones I don\u2019t know'), known.length > 0 && /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "ghost",
    onClick: () => setKnown([])
  }, "Forget everything (start over)")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--ink-2)'
    }
  }, allDone ? 'All 32 filed. You are, technically, fluent.' : 'Black = filed as known. Orange = on the desk. Keys: space flips, arrows move.'))), /*#__PURE__*/React.createElement(StatusStrip, {
    label: "Deck",
    items: ['32 cards', 'Known: ' + known.length, 'Works offline', 'Cheating: impossible, you only cheat yourself'],
    style: {
      marginTop: 40
    }
  }));
}
Object.assign(window, {
  Flashcards
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsite/Flashcards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsite/Forms.jsx
try { (() => {
const formNS = window.LearnToSpeakDurbanDesignSystem_ec3271;

// Kit-level form fields (multiline + error states, checkbox). Same visual language as DS Input.
function Field({
  label,
  value,
  onChange,
  placeholder,
  hint,
  error,
  multiline,
  rows = 3,
  type = 'text',
  autoComplete
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      boxShadow: focus ? 'var(--shadow-hard-sm)' : 'none',
      transition: 'box-shadow var(--dur-snap) linear'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      padding: '6px 10px',
      borderBottom: '1px solid var(--ink)',
      background: error ? 'var(--ink)' : focus ? 'var(--yellow)' : 'var(--paper-3)',
      color: error ? 'var(--paper-2)' : 'var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), error && /*#__PURE__*/React.createElement("span", null, "\u2715 ", error)), /*#__PURE__*/React.createElement(Tag, {
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    value: value,
    placeholder: placeholder,
    autoComplete: autoComplete,
    onChange: e => onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--ink)',
      minWidth: 0,
      resize: 'vertical'
    }
  }), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 12px 8px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, hint));
}
function Tick({
  checked,
  onChange,
  children,
  error
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: e => onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      marginTop: 1,
      display: 'grid',
      placeItems: 'center',
      border: '2px solid var(--ink)',
      background: checked ? 'var(--yellow)' : 'var(--paper-2)',
      outline: error ? '2px solid var(--ink)' : 'none',
      outlineOffset: 2,
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1
    }
  }, checked ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      textWrap: 'pretty'
    }
  }, children, error && /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontSize: 11,
      marginTop: 2
    }
  }, "\u2715 ", error)));
}
const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
Object.assign(window, {
  Field,
  Tick,
  isEmail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsite/Forms.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsite/Games.jsx
try { (() => {
const gameNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
const GAME_META = {
  'game-01': {
    title: 'Say Gqom',
    how: 'Press the button. Click your tongue like you mean it. The click-o-meter judges you from VAALIE to FLUENT.'
  },
  'game-02': {
    title: 'Spot the Vaalie',
    how: 'Find three vaalie details hidden in the beach scene. Click to report. False reports are noted.'
  },
  'game-03': {
    title: 'Ja / No Laka',
    how: 'A statement appears. Agree? Slam NO LAKA (J key) — yes, it means yes. Disagree? Slam EISH, NO (N key). 45 seconds. Score counted in soft-serves.'
  },
  'game-04': {
    title: 'Durdle',
    how: 'Guess the five-letter Durban word in six tries. Orange = right spot. Black = wrong spot. Grey = not in the word.'
  },
  'game-05': {
    title: 'Pack for Durban',
    how: 'Drag items into the suitcase, or click them. Pack only what you actually need. The system is watching.'
  },
  'game-06': {
    title: 'The 2pm Quiz',
    how: 'Five questions. Only after 2pm. Before that you should be at the beach.'
  }
};
function GameShell({
  id,
  score,
  onBack,
  children
}) {
  const {
    Button,
    Icon,
    StatusStrip,
    RefCode
  } = gameNS;
  const meta = GAME_META[id];
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const k = e => {
      if (e.key === 'Escape') onBack();
    };
    addEventListener('keydown', k);
    return () => {
      document.body.style.overflow = prev;
      removeEventListener('keydown', k);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": meta.title,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      overflowY: 'auto',
      background: 'var(--bg-graph)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px clamp(16px, 4vw, 40px)',
      background: 'var(--paper-2)',
      borderBottom: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }),
    onClick: onBack
  }, "Back to Activities"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    prefix: "",
    code: id.toUpperCase()
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: 22,
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, meta.title)), score != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      border: '2px solid var(--ink)',
      padding: '5px 10px',
      background: 'var(--yellow)',
      whiteSpace: 'nowrap'
    }
  }, score), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close game",
    onClick: onBack,
    style: {
      width: 32,
      height: 32,
      display: 'grid',
      placeItems: 'center',
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 14,
      borderRadius: 0
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      width: '100%',
      maxWidth: 1100,
      margin: '0 auto',
      padding: 'clamp(20px, 4vw, 48px) clamp(16px, 4vw, 40px)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 clamp(16px, 4vw, 40px) 28px',
      maxWidth: 1100,
      width: '100%',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(StatusStrip, {
    label: "How to play",
    live: false,
    items: [meta.how]
  })));
}
const bigHead = {
  fontFamily: 'var(--font-grotesk)',
  fontWeight: 800,
  fontSize: 'clamp(36px, 5vw, 64px)',
  lineHeight: 0.92,
  letterSpacing: '-0.02em',
  textTransform: 'uppercase',
  margin: 0,
  textWrap: 'balance'
};
const monoP = {
  fontFamily: 'var(--font-mono)',
  fontSize: 15,
  lineHeight: 1.55,
  margin: 0
};

/* GAME-01 */
function SayGqomGame({
  setScore
}) {
  const {
    Button
  } = gameNS;
  const stops = ['VAALIE', 'KOOK', 'LAATIE', 'BRU', 'FLUENT'];
  const lines = ['That was a cough. Try again, from the diaphragm.', 'A click was attempted. Gateway heard it, faintly.', 'Getting there. Your gran would nod politely.', 'Solid click. Taxi drivers would respect it.', 'Windows rattled. Gqom approved.'];
  const [phase, setPhase] = React.useState('idle');
  const [lvl, setLvl] = React.useState(0);
  const [live, setLive] = React.useState(0);
  const [note, setNote] = React.useState(null);
  const listen = async () => {
    setPhase('listening');
    setNote(null);
    setLive(0);
    let peak = 0;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
      });
      const ac = new (window.AudioContext || window.webkitAudioContext)();
      const an = ac.createAnalyser();
      an.fftSize = 1024;
      ac.createMediaStreamSource(stream).connect(an);
      const buf = new Uint8Array(an.fftSize);
      const t0 = performance.now();
      await new Promise(res => {
        const tick = () => {
          an.getByteTimeDomainData(buf);
          let m = 0;
          for (let i = 0; i < buf.length; i++) m = Math.max(m, Math.abs(buf[i] - 128) / 128);
          peak = Math.max(peak, m);
          setLive(m);
          if (performance.now() - t0 < 2000) requestAnimationFrame(tick);else res();
        };
        tick();
      });
      stream.getTracks().forEach(t => t.stop());
      ac.close();
      peak = Math.min(1, peak * 1.6);
    } catch (e) {
      setNote('Microphone unavailable. Gateway guessed, generously.');
      await new Promise(r => setTimeout(r, 1200));
      peak = 0.35 + Math.random() * 0.6;
    }
    setLvl(peak);
    setPhase('result');
    const idx = Math.min(4, Math.floor(peak * 5));
    setScore('Best: ' + stops[idx]);
  };
  const idx = Math.min(4, Math.floor(lvl * 5));
  const shown = phase === 'listening' ? live : phase === 'result' ? lvl : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: bigHead
  }, phase === 'result' ? 'Rating: ' + stops[idx] : phase === 'listening' ? 'Click now.' : 'Say it with a click.'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: phase === 'listening' ? undefined : listen,
    style: {
      width: 220,
      height: 220,
      borderRadius: '50%',
      border: '3px solid var(--ink)',
      background: phase === 'listening' ? 'var(--yellow)' : 'var(--paper-2)',
      boxShadow: 'var(--shadow-hard)',
      cursor: phase === 'listening' ? 'default' : 'pointer',
      fontFamily: 'var(--font-pixel)',
      fontSize: 34,
      color: 'var(--ink)'
    }
  }, phase === 'listening' ? 'GQ-!' : phase === 'result' ? 'AGAIN' : 'START'), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(640px, 100%)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 34,
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)',
      display: 'flex'
    }
  }, stops.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      flex: 1,
      borderLeft: i ? '1px solid var(--ink)' : 'none',
      background: i / 5 < shown ? 'var(--ink)' : 'transparent',
      transition: 'background 80ms linear'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -10,
      left: `calc(${shown * 100}% - 2px)`,
      width: 4,
      height: 50,
      background: 'var(--yellow)',
      outline: '1px solid var(--ink)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700
    }
  }, stops.map(s => /*#__PURE__*/React.createElement("span", {
    key: s
  }, s)))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...monoP,
      maxWidth: 520
    }
  }, phase === 'result' ? lines[idx] : phase === 'listening' ? 'Listening for two seconds. Do not apologise.' : 'Press start, allow the microphone, and click your tongue once. Loudly. The neighbours will understand.'), note && /*#__PURE__*/React.createElement("p", {
    style: {
      ...monoP,
      fontSize: 12,
      color: 'var(--ink-2)'
    }
  }, note), phase === 'result' && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    brackets: true,
    onClick: listen
  }, "Try again"));
}

/* GAME-02 */
function SpotVaalieGame({
  setScore,
  onBack
}) {
  const {
    Halftone,
    Button,
    Dialog,
    Icon
  } = gameNS;
  const targets = [{
    k: 'Flame shirt',
    x: 22,
    y: 42
  }, {
    k: 'Socks with slops',
    x: 63,
    y: 78
  }, {
    k: 'Gazebo with cup holders',
    x: 80,
    y: 26
  }];
  const [found, setFound] = React.useState([]);
  const [misses, setMisses] = React.useState(0);
  const [toast, setToast] = React.useState(null);
  const [hint, setHint] = React.useState(false);
  React.useEffect(() => {
    setScore(found.length + '/3 found');
  }, [found]);
  const click = e => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width * 100,
      y = (e.clientY - r.top) / r.height * 100;
    const hit = targets.find(t => !found.includes(t.k) && Math.hypot(t.x - x, (t.y - y) * 0.6) < 7);
    if (hit) {
      setFound([...found, hit.k]);
      setToast('Reported: ' + hit.k.toLowerCase() + '.');
    } else {
      setMisses(misses + 1);
      setToast(['That is just a regular tourist.', 'That is a lifeguard. Leave him alone.', 'That is a seagull. Innocent.', 'False report. Gateway sighs.'][misses % 4]);
    }
  };
  const reset = () => {
    setFound([]);
    setMisses(0);
    setToast(null);
    setHint(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 28,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '999 1 560px',
      minWidth: 0,
      position: 'relative',
      border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-hard)',
      cursor: 'crosshair'
    },
    onClick: click
  }, /*#__PURE__*/React.createElement(Halftone, {
    height: 540,
    dot: 6,
    placeholder: "beach",
    caption: "FIG. 2 \u2014 North Beach (placeholder scene)"
  }), targets.map(t => (found.includes(t.k) || hint) && /*#__PURE__*/React.createElement("span", {
    key: t.k,
    style: {
      position: 'absolute',
      left: t.x + '%',
      top: t.y + '%',
      transform: 'translate(-50%,-50%)',
      width: 70,
      height: 70,
      borderRadius: '50%',
      border: found.includes(t.k) ? '3px solid var(--ink)' : '2px dashed var(--ink)',
      background: found.includes(t.k) ? 'rgba(255,90,46,.45)' : 'transparent',
      pointerEvents: 'none'
    }
  })), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      top: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 700,
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      padding: '6px 10px',
      pointerEvents: 'none'
    }
  }, toast)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 260px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...bigHead,
      fontSize: 40
    }
  }, "Find the vaalie."), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)'
    }
  }, targets.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.k,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      borderTop: i ? '1px dashed var(--ink-3)' : 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      textDecoration: found.includes(t.k) ? 'line-through' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      border: '2px solid var(--ink)',
      display: 'grid',
      placeItems: 'center',
      background: found.includes(t.k) ? 'var(--yellow)' : 'transparent',
      fontSize: 12,
      fontWeight: 700
    }
  }, found.includes(t.k) ? '✓' : ''), t.k))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ink-2)'
    }
  }, "False reports: ", misses), misses >= 3 && !hint && found.length < 3 && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => setHint(true)
  }, "Ask a lifeguard (hint)")), found.length === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 5,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(242,241,236,.6)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Dialog, {
    title: "spot_the_vaalie.exe",
    kind: "success",
    heading: "Vaalie confirmed.",
    onClose: reset,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onBack
    }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: reset
    }, "Play again"))
  }, "All three details reported with ", misses, " false alarm", misses === 1 ? '' : 's', ". The coast thanks you. Be gentle; they are on holiday.")));
}

/* GAME-03 */
const JA_STATEMENTS = [['A robot is a traffic light.', true], ['Baggies are formal attire on the coast.', true], ['A bunny is a small rabbit, served whole.', false], ['“Chips!” means the food has arrived.', false], ['Kiff means good.', true], ['Larney means cheap.', false], ['Shot means thanks.', true], ['Smaak means you like it a lot.', true], ['A laatie is an elderly gentleman.', false], ['Your pozi is your home.', true], ['Forks are required for bunny chow.', false], ['Vy means to go.', true], ['Gqom is dance music.', true], ['Ducking out means hiding from ducks.', false], ['A prawn is an idiot.', true], ['A kook has mastered surfing.', false], ['Yano is short for amapiano.', true], ['Logging means cutting down trees.', false], ['Logging is longboarding.', true], ['Mfethu is warmer than bru.', true], ['A vaalie wears socks with slops.', true], ['Tops means the worst.', false], ['Dala means to do.', true]];
function JaNoLakaGame({
  setScore,
  onBack
}) {
  const {
    Button
  } = gameNS;
  const [phase, setPhase] = React.useState('ready');
  const [deck, setDeck] = React.useState([]);
  const [i, setI] = React.useState(0);
  const [pts, setPts] = React.useState(0);
  const [left, setLeft] = React.useState(45);
  const [flash, setFlash] = React.useState(null);
  const start = () => {
    setDeck([...JA_STATEMENTS].sort(() => Math.random() - 0.5));
    setI(0);
    setPts(0);
    setLeft(45);
    setFlash(null);
    setPhase('play');
  };
  React.useEffect(() => {
    if (phase !== 'play') return;
    const t = setInterval(() => setLeft(l => {
      if (l <= 1) {
        clearInterval(t);
        setPhase('done');
        return 0;
      }
      return l - 1;
    }), 1000);
    return () => clearInterval(t);
  }, [phase]);
  React.useEffect(() => {
    setScore(pts + ' soft-serve' + (pts === 1 ? '' : 's'));
  }, [pts]);
  const answer = v => {
    if (phase !== 'play') return;
    const ok = deck[i][1] === v;
    if (ok) setPts(p => p + 1);
    setFlash(ok ? 'ok' : 'no');
    setTimeout(() => setFlash(null), 260);
    if (i + 1 >= deck.length) setPhase('done');else setI(i + 1);
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'j' || e.key === 'J') answer(true);
      if (e.key === 'n' || e.key === 'N') answer(false);
    };
    addEventListener('keydown', k);
    return () => removeEventListener('keydown', k);
  });
  const verdict = pts >= 18 ? 'Fluent. Possibly born on the beachfront.' : pts >= 12 ? 'Bru-level. Respectable.' : pts >= 6 ? 'Laatie-level. Keep practising.' : 'Vaalie-level. The Dictionary is right there.';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 28,
      textAlign: 'center'
    }
  }, phase === 'ready' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: bigHead
  }, "No laka or eish, no?"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...monoP,
      maxWidth: 520
    }
  }, "45 seconds. Reminder: no laka means yes. The Institute apologises for nothing. One point per correct answer, paid in soft-serves. J and N keys work too."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    brackets: true,
    onClick: start
  }, "Start the clock")), phase === 'play' && deck[i] && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      fontFamily: 'var(--font-pixel)',
      fontSize: 28
    }
  }, /*#__PURE__*/React.createElement("span", null, String(left).padStart(2, '0'), "s"), /*#__PURE__*/React.createElement("span", null, String(i + 1).padStart(2, '0'), "/", deck.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(760px, 100%)',
      minHeight: 220,
      display: 'grid',
      placeItems: 'center',
      padding: '28px 24px',
      border: '3px solid var(--ink)',
      boxShadow: 'var(--shadow-hard-lg)',
      background: flash === 'ok' ? 'var(--yellow)' : flash === 'no' ? 'var(--ink)' : 'var(--paper-2)',
      color: flash === 'no' ? 'var(--paper-2)' : 'var(--ink)',
      transition: 'background 80ms linear'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 'clamp(28px, 3.6vw, 44px)',
      lineHeight: 1.1,
      textWrap: 'balance'
    }
  }, deck[i][0])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => answer(true),
    style: {
      minWidth: 200
    }
  }, "NO LAKA (J)"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => answer(false),
    style: {
      minWidth: 200
    }
  }, "EISH, NO (N)"))), phase === 'done' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: bigHead
  }, pts, " soft-serve", pts === 1 ? '' : 's', "."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...monoP,
      maxWidth: 520
    }
  }, verdict), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onBack
  }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    brackets: true,
    onClick: start
  }, "Play again"))));
}

/* GAME-04 */
function DurdleGame({
  setScore
}) {
  const {
    Button
  } = gameNS;
  const ANSWERS = ['CHOON', 'BUNNY', 'SMAAK', 'CHIPS'];
  const answer = ANSWERS[Math.floor(Date.now() / 864e5) % ANSWERS.length];
  const [rows, setRows] = React.useState([]);
  const [cur, setCur] = React.useState('');
  const [msg, setMsg] = React.useState(null);
  const done = rows.includes(answer) || rows.length >= 6;
  const grade = g => {
    const res = Array(5).fill('x');
    const pool = answer.split('');
    g.split('').forEach((c, i) => {
      if (c === answer[i]) {
        res[i] = 'g';
        pool[i] = null;
      }
    });
    g.split('').forEach((c, i) => {
      if (res[i] !== 'g') {
        const j = pool.indexOf(c);
        if (j > -1) {
          res[i] = 'y';
          pool[j] = null;
        }
      }
    });
    return res;
  };
  const keyState = {};
  rows.forEach(r => {
    const g = grade(r);
    r.split('').forEach((c, i) => {
      const s = g[i];
      if (s === 'g' || s === 'y' && keyState[c] !== 'g' || !keyState[c]) keyState[c] = s;
    });
  });
  const press = k => {
    if (done) return;
    if (k === 'ENTER') {
      if (cur.length < 5) {
        setMsg('Five letters, bru.');
        return;
      }
      const n = [...rows, cur];
      setRows(n);
      setCur('');
      if (cur === answer) {
        setMsg(['Lekker first try. Suspicious.', 'Shap. Two tries.', 'Three tries. Solid.', 'Four. Fine.', 'Five. Close one.', 'Six. Just.'][n.length - 1]);
        setScore('Solved in ' + n.length);
      } else if (n.length >= 6) {
        setMsg('Eish. It was ' + answer + '. The Dictionary has it.');
        setScore('Unsolved');
      } else setMsg(null);
      return;
    }
    if (k === '⌫') {
      setCur(cur.slice(0, -1));
      return;
    }
    if (/^[A-Z]$/.test(k) && cur.length < 5) setCur(cur + k);
  };
  React.useEffect(() => {
    const h = e => {
      const k = e.key === 'Enter' ? 'ENTER' : e.key === 'Backspace' ? '⌫' : e.key.toUpperCase();
      press(k);
    };
    addEventListener('keydown', h);
    return () => removeEventListener('keydown', h);
  });
  React.useEffect(() => {
    setScore(Math.min(rows.length + 1, 6) + '/6');
  }, []);
  const cell = s => ({
    g: {
      background: 'var(--yellow)',
      color: 'var(--ink)'
    },
    y: {
      background: 'var(--ink)',
      color: 'var(--paper-2)'
    },
    x: {
      background: 'var(--paper-4)',
      color: 'var(--ink)'
    }
  })[s] || {
    background: 'var(--paper-2)',
    color: 'var(--ink)'
  };
  const grid = Array.from({
    length: 6
  }, (_, r) => rows[r] ? {
    t: rows[r],
    g: grade(rows[r])
  } : r === rows.length ? {
    t: cur.padEnd(5),
    g: []
  } : {
    t: '     ',
    g: []
  });
  const kb = ['QWERTYUIOP', 'ASDFGHJKL', 'ENTER ZXCVBNM ⌫'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.08em'
    }
  }, "DURDLE NO. ", Math.floor(Date.now() / 864e5) % 1000, " \xB7 TODAY\u2019S WORD IS IN THE DICTIONARY"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6
    }
  }, grid.map((row, r) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 58px)',
      gap: 6
    }
  }, row.t.split('').map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: 58,
      display: 'grid',
      placeItems: 'center',
      border: '2px solid var(--ink)',
      fontFamily: 'var(--font-pixel)',
      fontSize: 30,
      ...cell(row.g[i])
    }
  }, c.trim()))))), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 24,
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 700
    }
  }, msg), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: 'center',
      width: '100%'
    }
  }, kb.map((row, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: 'flex',
      gap: 5,
      justifyContent: 'center',
      width: '100%'
    }
  }, (ri === 2 ? row.split(' ').flatMap((p, j) => j === 1 ? p.split('') : [p]) : row.split('')).map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    type: "button",
    onClick: () => press(k),
    style: {
      minWidth: k.length > 1 ? 72 : 38,
      flex: k.length > 1 ? '0 0 auto' : '0 1 44px',
      height: 50,
      border: '2px solid var(--ink)',
      borderRadius: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: k.length > 1 ? 11 : 15,
      fontWeight: 700,
      ...cell(keyState[k])
    }
  }, k))))), done && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    brackets: true,
    onClick: () => {
      setRows([]);
      setCur('');
      setMsg(null);
    }
  }, "Practise again"));
}

/* GAME-05 */
const PACK_ITEMS = [{
  k: 'Baggies',
  ok: true
}, {
  k: 'Sunscreen',
  ok: true
}, {
  k: 'Slops',
  ok: true
}, {
  k: 'Towel',
  ok: true
}, {
  k: 'Wetsuit',
  ok: false,
  h: '⚠ Error: wetsuit detected.',
  b: 'Baggies required.',
  a: ['OK', 'OK, bru']
}, {
  k: 'Fork',
  ok: false,
  h: 'ABSOLUTELY NOT',
  b: 'Forks are not permitted within 50km of a bunny.',
  a: ['Remove fork']
}, {
  k: 'Socks',
  ok: false,
  h: 'Vaalie behaviour detected.',
  b: 'Socks with slops is a serious offence on the coast.',
  a: ['Sorry', 'It won’t happen again']
}, {
  k: 'Gazebo with cup holders',
  ok: false,
  h: 'Error: gazebo too larney.',
  b: 'The beach is free. So is the shade under someone else’s umbrella.',
  a: ['OK, fine']
}];
function PackGame({
  setScore,
  onBack
}) {
  const {
    Button,
    Dialog,
    Icon
  } = gameNS;
  const [packed, setPacked] = React.useState([]);
  const [err, setErr] = React.useState(null);
  const [over, setOver] = React.useState(false);
  const need = PACK_ITEMS.filter(i => i.ok).length;
  React.useEffect(() => {
    setScore(packed.length + '/' + need + ' packed');
  }, [packed]);
  const pack = k => {
    const it = PACK_ITEMS.find(i => i.k === k);
    if (!it) return;
    if (!it.ok) return setErr(it);
    if (!packed.includes(k)) setPacked([...packed, k]);
  };
  const won = packed.length === need;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 360px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...bigHead,
      fontSize: 44
    }
  }, "Pack for Durban."), /*#__PURE__*/React.createElement("p", {
    style: monoP
  }, "Drag to the suitcase or click to pack. Some items will be refused."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: 10
    }
  }, PACK_ITEMS.map(it => {
    const p = packed.includes(it.k);
    return /*#__PURE__*/React.createElement("button", {
      key: it.k,
      type: "button",
      draggable: !p,
      onDragStart: e => e.dataTransfer.setData('text/plain', it.k),
      onClick: () => pack(it.k),
      disabled: p,
      style: {
        minHeight: 64,
        padding: '10px 12px',
        border: '2px solid var(--ink)',
        borderRadius: 0,
        background: p ? 'var(--paper-3)' : 'var(--paper-2)',
        cursor: p ? 'default' : 'grab',
        fontFamily: 'var(--font-mono)',
        fontSize: 14,
        fontWeight: 700,
        textAlign: 'left',
        textDecoration: p ? 'line-through' : 'none',
        color: 'var(--ink)',
        boxShadow: p ? 'none' : 'var(--shadow-hard-sm)'
      }
    }, it.k);
  }))), /*#__PURE__*/React.createElement("div", {
    onDragOver: e => {
      e.preventDefault();
      setOver(true);
    },
    onDragLeave: () => setOver(false),
    onDrop: e => {
      e.preventDefault();
      setOver(false);
      pack(e.dataTransfer.getData('text/plain'));
    },
    style: {
      flex: '1 1 320px',
      position: 'relative',
      marginTop: 30,
      minHeight: 340,
      border: '3px solid var(--ink)',
      background: over ? 'var(--yellow)' : 'var(--paper-2)',
      boxShadow: 'var(--shadow-hard-lg)',
      padding: '40px 22px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -26,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 120,
      height: 24,
      border: '3px solid var(--ink)',
      borderBottom: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em'
    }
  }, "SUITCASE \xB7 ", packed.length, "/", need), packed.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      ...monoP,
      color: 'var(--ink-3)',
      marginTop: 40,
      textAlign: 'center'
    }
  }, "Drop items here."), packed.map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20
  }), k))), (err || won) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 5,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(242,241,236,.6)',
      padding: 16
    }
  }, err ? /*#__PURE__*/React.createElement(Dialog, {
    title: "pack_for_durban.exe",
    kind: "error",
    heading: err.h,
    onClose: () => setErr(null),
    actions: err.a.map((a, i) => /*#__PURE__*/React.createElement(Button, {
      key: a,
      size: "sm",
      variant: i === err.a.length - 1 ? 'primary' : 'secondary',
      onClick: () => setErr(null)
    }, a))
  }, err.b) : /*#__PURE__*/React.createElement(Dialog, {
    title: "pack_for_durban.exe",
    kind: "success",
    heading: "Packed. Vy.",
    onClose: () => setPacked([]),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onBack
    }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => setPacked([])
    }, "Pack again"))
  }, "Baggies, sunscreen, slops, towel. Everything you actually need.")));
}

/* GAME-06 */
function TwoPmGame({
  setScore,
  onBack
}) {
  const {
    Button,
    Icon,
    AnswerOption
  } = gameNS;
  const [now, setNow] = React.useState(new Date());
  const [force, setForce] = React.useState(false);
  const [qs] = React.useState(() => [...window.LSD_DATA.exam].sort(() => Math.random() - 0.5).slice(0, 5));
  const [i, setI] = React.useState(0);
  const [pick, setPick] = React.useState(null);
  const [pts, setPts] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const open = force || now.getHours() >= 14;
  React.useEffect(() => {
    setScore(open ? pts + '/5' : 'Locked');
  }, [open, pts]);
  if (!open) {
    const t = new Date(now);
    t.setHours(14, 0, 0, 0);
    const s = Math.max(0, Math.floor((t - now) / 1000));
    const hms = [Math.floor(s / 3600), Math.floor(s / 60) % 60, s % 60].map(n => String(n).padStart(2, '0')).join(':');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 120,
        height: 120,
        display: 'grid',
        placeItems: 'center',
        border: '3px solid var(--ink)',
        background: 'var(--ink)',
        color: 'var(--yellow)',
        boxShadow: 'var(--shadow-hard)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 72
    })), /*#__PURE__*/React.createElement("h2", {
      style: bigHead
    }, "Come back after the beach."), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-pixel)',
        fontSize: 'clamp(44px, 7vw, 80px)',
        lineHeight: 1
      }
    }, hms), /*#__PURE__*/React.createElement("p", {
      style: {
        ...monoP,
        maxWidth: 480
      }
    }, "The 2pm Quiz opens at 14:00 sharp. Until then Gateway recommends sunscreen, a swim and a quarter mutton."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: onBack
    }, "Back to Activities"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setForce(true)
    }, "I\u2019m already at the beach (open anyway)")));
  }
  if (i >= qs.length) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: bigHead
  }, pts, "/5."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...monoP,
      maxWidth: 480
    }
  }, pts === 5 ? 'Perfect. Go back to the beach, you’ve earned it.' : pts >= 3 ? 'Decent. The afternoon is young.' : 'The sun got to you. Try again tomorrow at 2.'), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    brackets: true,
    onClick: onBack
  }, "Back to Activities"));
  const q = qs[i];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 26
    }
  }, "QUESTION ", i + 1, "/5"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 'clamp(26px, 3.4vw, 38px)',
      lineHeight: 1.1,
      textWrap: 'balance'
    }
  }, q.q), q.a.map((a, k) => /*#__PURE__*/React.createElement(AnswerOption, {
    key: k,
    letter: 'abc'[k],
    state: pick === null ? 'idle' : k === q.c ? 'correct' : k === pick ? 'wrong' : 'idle',
    disabled: pick !== null,
    onClick: () => {
      setPick(k);
      if (k === q.c) setPts(pts + 1);
    }
  }, a)), pick !== null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => {
      setPick(null);
      setI(i + 1);
    }
  }, i === 4 ? 'See score' : 'Next, bru')));
}
function GameScreen({
  id,
  onBack
}) {
  const [score, setScore] = React.useState(null);
  const C = {
    'game-01': SayGqomGame,
    'game-02': SpotVaalieGame,
    'game-03': JaNoLakaGame,
    'game-04': DurdleGame,
    'game-05': PackGame,
    'game-06': TwoPmGame
  }[id];
  if (!C) return null;
  return /*#__PURE__*/React.createElement(GameShell, {
    id: id,
    score: score,
    onBack: onBack
  }, /*#__PURE__*/React.createElement(C, {
    setScore: setScore,
    onBack: onBack
  }));
}
Object.assign(window, {
  GameScreen,
  GAME_META
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsite/Games.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsite/Landing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const landNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function HeroCard({
  go,
  mobile
}) {
  const {
    Button,
    Barcode,
    RefCode
  } = landNS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      boxShadow: mobile ? 'var(--shadow-hard)' : '10px 10px 0 var(--ink)',
      padding: mobile ? '36px 20px 24px' : '56px 56px 48px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: mobile ? 28 : 48
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    code: "LSD-2026",
    style: {
      position: 'absolute',
      top: 10,
      left: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: mobile ? 20 : 28,
      minWidth: 0,
      flex: '1 1 560px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: mobile ? 11 : 13,
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, "A public service by Gateway"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: mobile ? 62 : 'clamp(56px, 8.6vw, 140px)',
      lineHeight: 0.84,
      letterSpacing: '-0.025em',
      textTransform: 'uppercase'
    }
  }, "Learn to", /*#__PURE__*/React.createElement("br", null), "Speak ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontWeight: 400,
      fontStretch: '100%',
      fontSize: '0.86em',
      letterSpacing: '-0.04em',
      background: 'var(--yellow)',
      padding: '0 0.06em'
    }
  }, "Durban")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontFamily: 'var(--font-mono)',
      fontSize: mobile ? 14 : 16,
      lineHeight: 1.55,
      textWrap: 'pretty'
    }
  }, "32 lessons of real Durban slang. A final exam you can write right here. A certificate of fluency with your name on it \u2014 redeemable at Gateway, Durban."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    brackets: true,
    onClick: () => go('dict')
  }, "Begin Lesson 1"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('exam')
  }, "Skip to exam (brave)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: mobile ? 'column-reverse' : 'column',
      justifyContent: 'space-between',
      gap: 24,
      flex: mobile ? '1 1 100%' : '0 1 340px',
      minWidth: mobile ? 0 : 280,
      borderLeft: mobile ? 'none' : '2px solid var(--ink)',
      paddingLeft: mobile ? 0 : 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: mobile ? 'flex-start' : 'flex-end',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Barcode, {
    value: "LSD-2026-DBN",
    width: mobile ? 200 : 300,
    height: mobile ? 44 : 72
  }), /*#__PURE__*/React.createElement(RefCode, {
    prefix: "",
    code: "Course No. 4001 \xB7 Coastal dialect \xB7 Humidity: 87%"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '7px 12px',
      background: 'var(--paper-3)',
      borderBottom: '1px solid var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "ENROLMENT"), /*#__PURE__*/React.createElement("span", null, "OPEN")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 12px',
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      fontWeight: 700,
      lineHeight: 1.45
    }
  }, "Course fee: free.", /*#__PURE__*/React.createElement("br", null), "Fluency: guaranteed-ish."))), !mobile && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 10,
      bottom: 10,
      width: 28,
      height: 28,
      borderRight: '2px solid var(--ink)',
      borderBottom: '2px solid var(--ink)'
    }
  }));
}
function Landing({
  go,
  mobile
}) {
  const {
    FolderCard,
    StatusStrip
  } = landNS;
  const sections = [{
    id: 'dict',
    index: '01',
    title: 'The Dictionary',
    description: '32 words, filed by an intern who has since gone surfing. Pull a card. Hear it on the radio.',
    meta: '32 entries'
  }, {
    id: 'act',
    index: '02',
    title: 'Activities',
    description: 'Six games for practical study. Some require a microphone. One requires 2pm.',
    meta: '6 games'
  }, {
    id: 'merch',
    index: '03',
    title: 'Merch',
    description: 'Course materials. Mostly tees. One cooler box, metaphorically.',
    meta: '8 items'
  }, {
    id: 'submit',
    index: '04',
    title: 'Submit a Word',
    description: 'Heard a word at the taxi rank we don’t know? Report it. Gateway will investigate.',
    meta: 'Open to the public'
  }, {
    id: 'study',
    index: '05',
    title: 'Study Pack',
    description: 'Download the course before take-off. Study at 10,000 metres. Practise on seat 14B.',
    meta: 'Works offline'
  }, {
    id: 'card',
    index: '06',
    title: 'Student Card',
    description: 'Upload a selfie. Gateway pixelates it. Your ex sees it on your story.',
    meta: '1080 × 1920'
  }, {
    id: 'flash',
    index: '07',
    title: 'Flashcards',
    description: 'All 32 words on flip cards. Guess, flip, file as known. Honesty encouraged.',
    meta: '32 cards'
  }, {
    id: 'exam',
    index: '08',
    title: 'The Final Exam',
    description: '32 questions, one per lesson. Pass and the certificate prints itself. Fail and the ocean waits.',
    meta: '32 questions'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: mobile ? 36 : 56,
      paddingTop: mobile ? 20 : 48
    }
  }, /*#__PURE__*/React.createElement(HeroCard, {
    go: go,
    mobile: mobile
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : 'repeat(auto-fill, minmax(270px, 1fr))',
      gap: mobile ? 22 : 24
    }
  }, sections.map((s, i) => /*#__PURE__*/React.createElement(FolderCard, _extends({
    key: s.id
  }, s, {
    active: !mobile && i === 1 ? undefined : undefined,
    tabOffset: mobile ? 0 : [0, 24, 48, 12, 36, 60, 18, 42][i],
    onClick: () => go(s.id)
  })))), /*#__PURE__*/React.createElement(StatusStrip, {
    items: ['Current ocean temperature: 24°C', 'Lessons: 32', 'Forks required: 0']
  }));
}
Object.assign(window, {
  Landing,
  HeroCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsite/Landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsite/Merch.jsx
try { (() => {
const merchNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function MerchPreview({
  m
}) {
  const {
    Halftone
  } = merchNS;
  const overlay = m.tee ? m.name : m.kind === 'Bumper sticker' ? 'FLUENT IN DURBAN' : m.kind === 'Cap' ? 'NATIVE SPEAKER' : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(Halftone, {
    height: "100%",
    dot: 5,
    placeholder: m.kind === 'Bundle' || m.kind === 'Towel' ? 'beach' : 'product'
  }), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '44%',
      transform: 'translate(-50%,-50%)',
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      padding: '6px 10px',
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: m.tee ? 34 : 15,
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, overlay));
}
function Merch({
  cart,
  setCart
}) {
  const {
    SpecCard,
    Button,
    Dialog,
    Icon
  } = merchNS;
  const [added, setAdded] = React.useState(null);
  const items = window.LSD_DATA.merch;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "03",
    kicker: "Course materials \xB7 compulsory-ish",
    title: "Merch",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        border: '2px solid var(--ink)',
        background: 'var(--paper-2)',
        padding: '10px 14px',
        boxShadow: 'var(--shadow-hard-sm)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "cooler-box",
      size: 40
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        lineHeight: 1.4
      }
    }, /*#__PURE__*/React.createElement("b", null, "Cooler box"), /*#__PURE__*/React.createElement("br", null), cart, " item", cart === 1 ? '' : 's', " \xB7 kept cold"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
      gap: 24
    }
  }, items.map(m => /*#__PURE__*/React.createElement(SpecCard, {
    key: m.id,
    refCode: m.id,
    meta: m.kind,
    label: m.tee ? 'Tee' : m.name,
    crosshair: false,
    previewHeight: 250,
    sourceLabel: "PRICE",
    sourceTag: m.price,
    source: m.desc,
    interactive: true,
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "accent",
      block: true,
      onClick: () => {
        setCart(cart + 1);
        setAdded(m);
      }
    }, "Vy to checkout")
  }, /*#__PURE__*/React.createElement(MerchPreview, {
    m: m
  })))), added && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 40,
      bottom: 40,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(Dialog, {
    title: "cooler_box.exe",
    kind: "success",
    heading: "Packed in the cooler.",
    width: 360,
    onClose: () => setAdded(null),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setAdded(null)
    }, "Keep shopping"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => setAdded(null)
    }, "Chow now"))
  }, added.name, " (", added.kind, ") \u2014 ", added.price, ". Kept cold until checkout. Like a good cooler box should.")));
}
Object.assign(window, {
  Merch
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsite/Merch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsite/Shell.jsx
try { (() => {
const shellNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
const NAV_ITEMS = [{
  id: 'home',
  index: '00',
  label: 'Index'
}, {
  id: 'dict',
  index: '01',
  label: 'Dictionary'
}, {
  id: 'act',
  index: '02',
  label: 'Activities'
}, {
  id: 'merch',
  index: '03',
  label: 'Merch'
}, {
  id: 'submit',
  index: '04',
  label: 'Submit'
}, {
  id: 'study',
  index: '05',
  label: 'Study'
}, {
  id: 'card',
  index: '06',
  label: 'ID Card'
}, {
  id: 'flash',
  index: '07',
  label: 'Flashcards'
}, {
  id: 'exam',
  index: '08',
  label: 'Final Exam'
}];
function Masthead({
  page,
  go,
  cart = 0,
  mobile,
  compactNav
}) {
  const {
    FolderTabs,
    Icon,
    RefCode
  } = shellNS;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--paper)',
      paddingTop: mobile ? 12 : 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: mobile ? '0 16px' : '0 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'baseline',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: mobile ? 17 : 20,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em'
    }
  }, "Learn to Speak Durban"), !mobile && /*#__PURE__*/React.createElement(RefCode, {
    code: "LSD-2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, !mobile && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, "Ocean 24\xB0C \xB7 Tide: going out \xB7 Vibes: tops"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('merch'),
    "aria-label": "Cooler box",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: '2px solid var(--ink)',
      background: cart ? 'var(--yellow)' : 'var(--paper-2)',
      padding: '5px 10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(shellNS.Icon, {
    name: "cooler-box",
    size: 20
  }), String(cart).padStart(2, '0')))), !mobile && !compactNav && /*#__PURE__*/React.createElement(FolderTabs, {
    items: NAV_ITEMS,
    active: page,
    onChange: go
  })));
}
function Footer({
  mobile
}) {
  const {
    Barcode,
    RefCode
  } = shellNS;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 96,
      borderTop: '2px solid var(--ink)',
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: mobile ? '24px 16px 32px' : '28px 64px 36px',
      display: 'flex',
      flexDirection: mobile ? 'column' : 'row',
      gap: 24,
      alignItems: mobile ? 'flex-start' : 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14
    }
  }, "Learn to Speak Durban. A public service by Gateway."), /*#__PURE__*/React.createElement(RefCode, {
    code: "LSD-2026 \xB7 No forks were harmed in the making of this website"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, !mobile && /*#__PURE__*/React.createElement(Barcode, {
    value: "GATEWAY-DBN",
    width: 120,
    height: 34
  }), /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.gatewayLogo || (window.LSD_ASSETS || 'assets/') + 'logos/gateway-logo.png',
    alt: "Gateway",
    style: {
      width: mobile ? 64 : 76,
      height: 'auto',
      display: 'block'
    }
  }))));
}
function PageHead({
  index,
  title,
  kicker,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32,
      margin: '48px 0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, index, " \u2014 ", kicker), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontStretch: '88%',
      fontSize: 'clamp(48px, 6.2vw, 88px)',
      lineHeight: 0.88,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase'
    }
  }, title)), right);
}
Object.assign(window, {
  Masthead,
  Footer,
  PageHead,
  NAV_ITEMS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsite/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsite/StudentCard.jsx
try { (() => {
const cardNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
const CARD_W = 1080,
  CARD_H = 1920;
const LEVELS = [['VAALIE', 'Still wearing socks with slops'], ['KOOK', 'Owns a wetsuit. Working on it'], ['LAATIE', 'Young, keen, slightly sunburnt'], ['BRU', 'Says "shot" at robots'], ['FLUENT', 'Has never once asked for a fork']];
const BAYER = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];
function seeded(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return (h >>> 0) % 10000 / 10000;
  };
}
function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function ditherPhoto(ctx, img, x, y, w, h, {
  cell,
  style,
  zoom,
  ink
}) {
  const cols = Math.floor(w / cell),
    rows = Math.floor(h / cell);
  const off = document.createElement('canvas');
  off.width = cols;
  off.height = rows;
  const o = off.getContext('2d');
  const scale = Math.max(cols / img.width, rows / img.height) * zoom;
  const dw = img.width * scale,
    dh = img.height * scale;
  o.fillStyle = '#fff';
  o.fillRect(0, 0, cols, rows);
  o.drawImage(img, (cols - dw) / 2, (rows - dh) * 0.3, dw, dh);
  const d = o.getImageData(0, 0, cols, rows).data;
  const lum = new Float32Array(cols * rows);
  let mn = 1,
    mx = 0;
  for (let i = 0; i < cols * rows; i++) {
    const l = (0.299 * d[i * 4] + 0.587 * d[i * 4 + 1] + 0.114 * d[i * 4 + 2]) / 255;
    lum[i] = l;
    if (l < mn) mn = l;
    if (l > mx) mx = l;
  }
  const span = Math.max(0.2, mx - mn);
  ctx.fillStyle = ink;
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    let l = (lum[r * cols + c] - mn) / span;
    l = Math.min(1, Math.max(0, (l - 0.5) * 1.25 + 0.5));
    const px = x + c * cell,
      py = y + r * cell;
    if (style === 'halftone') {
      const rad = cell * 0.66 * Math.sqrt(1 - l);
      if (rad > 0.4) {
        ctx.beginPath();
        ctx.arc(px + cell / 2, py + cell / 2, rad, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (l < (BAYER[r % 4][c % 4] + 0.5) / 16) ctx.fillRect(px, py, cell, cell);
  }
}
function drawStudentCard(canvas, o) {
  const ctx = canvas.getContext('2d');
  const css = getComputedStyle(document.documentElement);
  const ACC = css.getPropertyValue('--yellow').trim() || '#ff5a2e';
  const INK = '#111111',
    PAPER = '#ecebe4';
  const G = "'Switzer', 'Helvetica Neue', Arial, sans-serif",
    M = "'IBM Plex Mono', monospace",
    P = "'Geist Pixel', monospace";
  ctx.clearRect(0, 0, CARD_W, CARD_H);
  ctx.fillStyle = '#0b0b0b';
  ctx.fillRect(0, 0, CARD_W, CARD_H);
  const rnd = seeded('grain');
  for (let i = 0; i < 9000; i++) {
    ctx.fillStyle = `rgba(255,255,255,${0.02 + rnd() * 0.05})`;
    ctx.fillRect(rnd() * CARD_W, rnd() * CARD_H, 2, 2);
  }
  // badge holder
  ctx.fillStyle = 'rgba(255,255,255,0.045)';
  rrect(ctx, 90, 140, 900, 1700, 60);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.7)';
  ctx.lineWidth = 4;
  rrect(ctx, 90, 140, 900, 1700, 60);
  ctx.stroke();
  ctx.strokeStyle = 'rgba(255,255,255,0.28)';
  ctx.lineWidth = 2;
  rrect(ctx, 106, 156, 868, 1668, 48);
  ctx.stroke();
  ctx.strokeStyle = 'rgba(255,255,255,0.75)';
  ctx.lineWidth = 5;
  rrect(ctx, 420, 210, 240, 64, 32);
  ctx.stroke();
  [[260, 242], [820, 242]].forEach(([cx, cy]) => {
    ctx.beginPath();
    ctx.arc(cx, cy, 30, 0, Math.PI * 2);
    ctx.stroke();
  });
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'rgba(255,255,255,0.45)';
  [322, 338, 362].forEach(yy => {
    ctx.beginPath();
    ctx.moveTo(106, yy);
    ctx.lineTo(974, yy);
    ctx.stroke();
  });
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  for (let xx = 120; xx < 962; xx += 9) ctx.fillRect(xx, 384, 4, 22);
  // paper insert
  const X0 = 150,
    Y0 = 440,
    PW = 780,
    PH = 1340,
    L = 200,
    R = 880;
  ctx.fillStyle = PAPER;
  ctx.fillRect(X0, Y0, PW, PH);
  const rule = (yy, w = 3) => {
    ctx.fillStyle = INK;
    ctx.fillRect(L, yy, R - L, w);
  };
  ctx.fillStyle = INK;
  ctx.textBaseline = 'alphabetic';
  ctx.font = `500 30px ${M}`;
  ctx.fillText('STUDENT:', L, 520);
  ctx.textAlign = 'right';
  ctx.fillStyle = '#6b6a66';
  ctx.fillText('REF: LSD-2026', R, 520);
  ctx.textAlign = 'left';
  rule(544, 2);
  // name, fitted
  const words = (o.name || 'Your Name').trim().split(/\s+/);
  const lines = words.length > 1 ? [words[0], words.slice(1).join(' ')] : [words[0]];
  let fs = lines.length > 1 ? 112 : 124;
  ctx.font = `800 ${fs}px ${G}`;
  while (fs > 56 && Math.max(...lines.map(t => ctx.measureText(t).width)) > R - L) {
    fs -= 4;
    ctx.font = `800 ${fs}px ${G}`;
  }
  ctx.fillStyle = INK;
  const nameTop = 544 + 22 + fs * 0.74;
  lines.forEach((t, i) => ctx.fillText(t, L - 4, nameTop + i * fs * 0.92));
  const ruleY = Math.round(nameTop + (lines.length - 1) * fs * 0.92 + 30);
  rule(ruleY, 2);
  // photo + vertical barcode
  const PY = ruleY + 36,
    PHt = 1376 - PY,
    PWd = 540;
  if (o.img) ditherPhoto(ctx, o.img, L, PY, PWd, PHt, {
    cell: o.cell,
    style: o.style,
    zoom: o.zoom,
    ink: INK
  });else {
    ctx.strokeStyle = INK;
    ctx.lineWidth = 3;
    ctx.setLineDash([14, 10]);
    ctx.strokeRect(L + 2, PY + 2, PWd - 4, PHt - 4);
    ctx.setLineDash([]);
    ctx.font = `400 56px ${P}`;
    ctx.textAlign = 'center';
    ctx.fillText('FACE', L + PWd / 2, PY + PHt / 2 - 10);
    ctx.font = `500 24px ${M}`;
    ctx.fillText('GOES HERE. ANY FACE.', L + PWd / 2, PY + PHt / 2 + 34);
    ctx.fillText('YOURS IS RECOMMENDED.', L + PWd / 2, PY + PHt / 2 + 66);
    ctx.textAlign = 'left';
  }
  const br = seeded(o.no + o.name);
  let by = PY;
  ctx.fillStyle = INK;
  while (by < PY + PHt) {
    const t = 2 + Math.floor(br() * 9);
    if (br() > 0.35) ctx.fillRect(R - 96, by, 96, t);
    by += t + 2 + Math.floor(br() * 5);
  }
  // pixel stamp on photo corner
  ctx.save();
  ctx.translate(L + PWd - 70, PY + PHt - 40);
  ctx.rotate(-0.16);
  ctx.fillStyle = ACC;
  ctx.beginPath();
  ctx.arc(0, 0, 78, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = INK;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, 70, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = INK;
  ctx.textAlign = 'center';
  ctx.font = `500 15px ${M}`;
  ctx.fillText('ENROLLED', 0, -26);
  ctx.font = `400 34px ${P}`;
  ctx.fillText(o.level, 0, 12);
  ctx.font = `500 15px ${M}`;
  ctx.fillText('2026', 0, 40);
  ctx.restore();
  ctx.textAlign = 'left';
  // spec rows
  ctx.font = `600 30px ${M}`;
  ctx.fillStyle = INK;
  ctx.fillText('ID: ' + o.no, L, 1420);
  const rows = [['FLUENCY LEVEL', o.level], ['FAVOURITE WORD', o.word.toUpperCase()], ['FORKS ON PERSON', '0'], ['VALID UNTIL', 'LOW TIDE']];
  ctx.font = `400 24px ${M}`;
  rows.forEach(([k, v], i) => {
    const yy = 1474 + i * 38;
    ctx.fillStyle = '#3a3a38';
    ctx.textAlign = 'left';
    ctx.fillText(k, L, yy);
    ctx.fillStyle = INK;
    ctx.textAlign = 'right';
    ctx.font = `700 24px ${M}`;
    ctx.fillText(v, R, yy);
    ctx.font = `400 24px ${M}`;
    ctx.fillStyle = '#9a9993';
    ctx.fillRect(L, yy + 12, R - L, 1);
  });
  ctx.textAlign = 'left';
  rule(1636, 2);
  ctx.fillStyle = INK;
  ctx.font = `800 58px ${G}`;
  ctx.fillText('A public service', L - 2, 1706);
  ctx.fillText('by Gateway.', L - 2, 1758);
  if (o.logo) ctx.drawImage(o.logo, R - 112, 1652, 112, 112);
  // outside footer
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = `500 22px ${M}`;
  ctx.textAlign = 'center';
  ctx.fillText('LEARN TO SPEAK DURBAN · A PUBLIC SERVICE BY GATEWAY', CARD_W / 2, 1888);
  ctx.textAlign = 'left';
}
function StudentCard({
  mobile
}) {
  const {
    Window,
    Button,
    Icon,
    StatusStrip
  } = cardNS;
  const canvasRef = React.useRef(null);
  const fileRef = React.useRef(null);
  const [img, setImg] = React.useState(null);
  const [name, setName] = React.useState(() => localStorage.getItem('lsd-name') || 'Thandi Mkhize');
  const [level, setLevel] = React.useState('BRU');
  const [word, setWord] = React.useState('Shap');
  const [style, setStyle] = React.useState('pixel');
  const [cell, setCell] = React.useState(8);
  const [zoom, setZoom] = React.useState(1);
  const [ready, setReady] = React.useState(false);
  const [drag, setDrag] = React.useState(false);
  const [note, setNote] = React.useState(null);
  const [logo, setLogo] = React.useState(null);
  React.useEffect(() => {
    const im = new Image();
    im.onload = () => setLogo(im);
    im.src = window.__resources && window.__resources.gatewayLogo || (window.LSD_ASSETS || 'assets/') + 'logos/gateway-logo.png';
  }, []);
  const no = React.useMemo(() => localStorage.getItem('lsd-student') || 'LSD-2026-04417', []);
  const words = window.LSD_DATA.words.map(w => w[1]);
  React.useEffect(() => {
    Promise.all(["800 120px Switzer", "400 24px 'IBM Plex Mono'", "500 24px 'IBM Plex Mono'", "700 24px 'IBM Plex Mono'", "400 40px 'Geist Pixel'"].map(f => document.fonts.load(f))).catch(() => {}).then(() => setReady(true));
  }, []);
  React.useEffect(() => {
    if (canvasRef.current) drawStudentCard(canvasRef.current, {
      img,
      name,
      level,
      word,
      style,
      cell,
      zoom,
      no,
      logo
    });
  }, [img, name, level, word, style, cell, zoom, ready, logo]);
  const load = file => {
    if (!file || !file.type.startsWith('image/')) {
      setNote('That is not a photo. Gateway checked.');
      return;
    }
    const im = new Image();
    im.onload = () => {
      setImg(im);
      setNote(null);
    };
    im.src = URL.createObjectURL(file);
  };
  const blob = () => new Promise(res => canvasRef.current.toBlob(res, 'image/png'));
  const save = async () => {
    const b = await blob();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(b);
    a.download = 'lsd-student-card.png';
    a.click();
    setNote('Saved. Post it to your story. Wait for the DMs.');
  };
  const canShare = typeof navigator !== 'undefined' && navigator.canShare && navigator.canShare({
    files: [new File([''], 'x.png', {
      type: 'image/png'
    })]
  });
  const share = async () => {
    const b = await blob();
    try {
      await navigator.share({
        files: [new File([b], 'lsd-student-card.png', {
          type: 'image/png'
        })],
        text: CAPTION
      });
    } catch (e) {}
  };
  const CAPTION = 'Officially enrolled in Learn to Speak Durban, a public service by Gateway. Fluency: guaranteed-ish. Forks: 0. #LearnToSpeakDurban';
  const copy = () => {
    navigator.clipboard && navigator.clipboard.writeText(CAPTION);
    setNote('Caption copied. Paste responsibly.');
  };
  const lab = {
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '6px 10px',
    background: 'var(--paper-3)',
    borderBottom: '1px solid var(--ink)'
  };
  const box = {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid var(--ink)',
    background: 'var(--paper-2)'
  };
  const sel = {
    border: 'none',
    outline: 'none',
    background: 'transparent',
    padding: 12,
    fontFamily: 'var(--font-mono)',
    fontSize: 15,
    color: 'var(--ink)',
    borderRadius: 0,
    appearance: 'none',
    cursor: 'pointer'
  };
  const seg = (opts, val, set) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: 'none'
    }
  }, opts.map(([v, l], i) => /*#__PURE__*/React.createElement("button", {
    key: v,
    type: "button",
    onClick: () => set(v),
    style: {
      flex: 1,
      padding: '10px 8px',
      border: 'none',
      borderLeft: i ? '1px solid var(--ink)' : 'none',
      background: val === v ? 'var(--ink)' : 'transparent',
      color: val === v ? 'var(--paper-2)' : 'var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, l)));
  const previewH = mobile ? 560 : 760;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "06",
    kicker: "Identification \xB7 for the gram",
    title: "Student Card",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        maxWidth: 330,
        lineHeight: 1.5
      }
    }, "Proof of enrolment. Upload a photo and Gateway pixelates it, for privacy and for style. Post it to your story. Wait for the DMs.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 48,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 380px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Window, {
    title: "student_card.exe",
    bar: "accent",
    meta: "Form ID-07",
    controls: ['min', 'close'],
    shadow: "lg",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: mobile ? 16 : 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    onDragOver: e => {
      e.preventDefault();
      setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
      load(e.dataTransfer.files[0]);
    },
    onClick: () => fileRef.current.click(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: 16,
      border: '2px dashed var(--ink)',
      background: drag ? 'var(--yellow)' : 'var(--bg-dots)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 56,
      height: 56,
      display: 'grid',
      placeItems: 'center',
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: img ? 'check' : 'human',
    size: 32
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, img ? 'Face received' : 'Upload a face'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ink-2)'
    }
  }, img ? 'Click to swap it for a better angle.' : 'Drop a selfie or click. Gateway does not judge. The pixels might.')), /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: e => load(e.target.files[0])
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Name on card",
    value: name,
    onChange: setName,
    placeholder: "First and last. Or just first, like a legend.",
    autoComplete: "name"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: box
  }, /*#__PURE__*/React.createElement("span", {
    style: lab
  }, "Fluency level"), /*#__PURE__*/React.createElement("select", {
    value: level,
    onChange: e => setLevel(e.target.value),
    style: sel
  }, LEVELS.map(([v]) => /*#__PURE__*/React.createElement("option", {
    key: v,
    value: v
  }, v)))), /*#__PURE__*/React.createElement("label", {
    style: box
  }, /*#__PURE__*/React.createElement("span", {
    style: lab
  }, "Favourite word"), /*#__PURE__*/React.createElement("select", {
    value: word,
    onChange: e => setWord(e.target.value),
    style: sel
  }, words.map(w => /*#__PURE__*/React.createElement("option", {
    key: w,
    value: w
  }, w))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ink-2)',
      marginTop: -4
    }
  }, level, ": ", LEVELS.find(l => l[0] === level)[1], "."), /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement("span", {
    style: lab
  }, "Pixel treatment"), seg([['pixel', 'Pixel'], ['halftone', 'Halftone']], style, setStyle)), /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement("span", {
    style: lab
  }, "Resolution"), seg([[14, 'Chunky'], [8, 'Classic'], [5, 'Fine']], cell, setCell)), /*#__PURE__*/React.createElement("label", {
    style: {
      ...box,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...lab,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Zoom"), /*#__PURE__*/React.createElement("span", null, Math.round(zoom * 100), "%")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1",
    max: "2.2",
    step: "0.05",
    value: zoom,
    onChange: e => setZoom(+e.target.value),
    style: {
      margin: 14,
      accentColor: 'var(--ink)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    brackets: true,
    onClick: save
  }, "Save for the story"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, canShare && /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: share
  }, "Share"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: copy
  }, "Copy caption")), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      padding: '8px 10px',
      border: '2px solid var(--ink)',
      background: 'var(--yellow)'
    }
  }, note))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: 'flex-start',
      maxWidth: '100%'
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    width: CARD_W,
    height: CARD_H,
    style: {
      display: 'block',
      height: previewH,
      width: previewH * 9 / 16,
      maxWidth: '100%',
      border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-hard-lg)',
      background: '#0b0b0b'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-3)',
      letterSpacing: '0.04em'
    }
  }, "FIG. 7 \u2014 Preview at ", Math.round(previewH / CARD_H * 100), "%. Exports at 1080 \xD7 1920."))), /*#__PURE__*/React.createElement(StatusStrip, {
    label: "Format",
    items: ['1080 × 1920', 'Ready for stories', 'Filter: not required', 'Forks on person: 0'],
    style: {
      marginTop: 40
    }
  }));
}
Object.assign(window, {
  StudentCard,
  drawStudentCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsite/StudentCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsite/Study.jsx
try { (() => {
const studyNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
const STUDY_PACKS = [{
  id: 'PACK-01',
  open: 'dict',
  icon: 'book-open',
  name: 'The Dictionary',
  fmt: 'PDF · 32 entries',
  mb: 2.1,
  desc: 'Every lesson, every example line. Printable. Works at 10,000 metres.'
}, {
  id: 'PACK-02',
  open: 'dict',
  icon: 'headphone',
  name: 'Radio lessons',
  fmt: 'MP3 · 32 tracks',
  mb: 46.2,
  desc: 'Hear each word said properly. Recommended for the flight in.'
}, {
  id: 'PACK-03',
  open: 'flash',
  icon: 'card-text',
  name: 'Flashcards',
  fmt: 'PDF · 32 cards',
  mb: 1.4,
  desc: 'Cut along the dotted line. Test the person in seat 14B.'
}, {
  id: 'PACK-04',
  open: 'exam',
  icon: 'notes',
  name: 'Final exam, offline',
  fmt: 'App data',
  mb: 0.3,
  desc: 'Write the exam in flight mode. It hands itself in when you land.'
}, {
  id: 'PACK-05',
  open: 'act/game-03',
  icon: 'gamepad',
  name: 'Ja / No Laka',
  fmt: 'App data',
  mb: 0.8,
  desc: 'The true-false game, offline. No laka still means yes at altitude.'
}, {
  id: 'PACK-06',
  open: 'act/game-04',
  icon: 'calendar',
  name: 'Durdle, 30 days',
  fmt: 'App data',
  mb: 0.2,
  desc: 'A month of daily words, preloaded. No signal required.'
}];
function useDownloads() {
  const [prog, setProg] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lsd-offline') || '{}');
    } catch (e) {
      return {};
    }
  });
  const timers = React.useRef({});
  React.useEffect(() => {
    localStorage.setItem('lsd-offline', JSON.stringify(Object.fromEntries(Object.entries(prog).filter(([, v]) => v >= 100))));
  }, [prog]);
  React.useEffect(() => () => Object.values(timers.current).forEach(clearInterval), []);
  const start = id => {
    if (timers.current[id]) return;
    setProg(p => ({
      ...p,
      [id]: 0
    }));
    timers.current[id] = setInterval(() => {
      setProg(p => {
        const v = Math.min(100, (p[id] || 0) + 9 + Math.random() * 14);
        if (v >= 100) {
          clearInterval(timers.current[id]);
          delete timers.current[id];
        }
        return {
          ...p,
          [id]: v
        };
      });
    }, 160);
  };
  const remove = id => setProg(p => {
    const n = {
      ...p
    };
    delete n[id];
    return n;
  });
  return {
    prog,
    start,
    remove
  };
}
function Study({
  go
}) {
  const {
    Window,
    Button,
    Icon,
    ProgressBar,
    StatusStrip
  } = studyNS;
  const {
    prog,
    start,
    remove
  } = useDownloads();
  const saved = STUDY_PACKS.filter(p => prog[p.id] >= 100);
  const busy = STUDY_PACKS.some(p => prog[p.id] !== undefined && prog[p.id] < 100);
  const total = STUDY_PACKS.reduce((s, p) => s + p.mb, 0);
  const savedMb = saved.reduce((s, p) => s + p.mb, 0);
  const all = saved.length === STUDY_PACKS.length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "05",
    kicker: "Self-study \xB7 works offline",
    title: "Study Pack",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        maxWidth: 320,
        lineHeight: 1.5
      }
    }, "For when you're flying in. Download the course before take-off. The lessons work in flight mode. The ocean does not.")
  }), /*#__PURE__*/React.createElement(Window, {
    title: "flight_mode.exe",
    bar: "accent",
    meta: all ? 'Ready' : saved.length + '/' + STUDY_PACKS.length + ' saved',
    controls: ['min', 'close'],
    shadow: "lg",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 28,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '26px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '999 1 420px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: 'clamp(30px, 3.4vw, 46px)',
      lineHeight: 0.95,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em'
    }
  }, all ? 'Ready for flight mode.' : 'Save the whole course for the flight.'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--ink-2)'
    }
  }, all ? `${savedMb.toFixed(1)} MB saved to this device. Lessons, games and the exam all work without signal. Press Open on any pack to start.` : `Six packs, ${total.toFixed(1)} MB. Everything you need to keep studying between Joburg and the coast.`)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 300px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Saved for offline",
    value: Math.round(savedMb * 10) / 10,
    max: Math.round(total * 10) / 10,
    segments: 16,
    showCount: false
  }), all ? /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: () => STUDY_PACKS.forEach(p => remove(p.id))
  }, "Clear downloads") : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    brackets: true,
    disabled: busy,
    onClick: () => STUDY_PACKS.forEach(p => prog[p.id] >= 100 || start(p.id))
  }, busy ? 'Packing…' : 'Save everything')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: 24,
      marginTop: 40
    }
  }, STUDY_PACKS.map(p => {
    const v = prog[p.id];
    const done = v >= 100,
      going = v !== undefined && !done;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid var(--ink)',
        background: 'var(--paper-2)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 14px',
        borderBottom: '2px solid var(--ink)',
        fontFamily: 'var(--font-mono)',
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement("b", null, p.id), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)',
        fontSize: 10,
        letterSpacing: '0.08em',
        textTransform: 'uppercase'
      }
    }, p.fmt)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start',
        padding: '18px 14px',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 56,
        height: 56,
        display: 'grid',
        placeItems: 'center',
        border: '2px solid var(--ink)',
        background: done ? 'var(--yellow)' : 'var(--bg-dots)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 32
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-grotesk)',
        fontWeight: 800,
        fontSize: 24,
        lineHeight: 1,
        textTransform: 'uppercase',
        letterSpacing: '-0.01em'
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        lineHeight: 1.5,
        color: 'var(--ink-2)',
        textWrap: 'pretty'
      }
    }, p.desc))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '7px 12px',
        borderTop: '2px solid var(--ink)',
        background: 'var(--paper-3)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.06em',
        textTransform: 'uppercase'
      }
    }, /*#__PURE__*/React.createElement("span", null, "SIZE"), /*#__PURE__*/React.createElement("span", null, p.mb.toFixed(1), " MB")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        minHeight: 58
      }
    }, going ? /*#__PURE__*/React.createElement(ProgressBar, {
      value: Math.round(v),
      max: 100,
      segments: 12,
      showCount: false,
      style: {
        flex: 1
      }
    }) : done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18
    }), "Saved"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: () => remove(p.id)
    }, "Remove"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => go && go(p.open)
    }, "Open ", '→')) : /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      block: true,
      onClick: () => start(p.id)
    }, "\u2193 Download")));
  })), /*#__PURE__*/React.createElement(StatusStrip, {
    label: "Cabin",
    items: ['Seatbelt sign: on', 'Wi-Fi: optional', 'Fluency: continuing'],
    style: {
      marginTop: 40
    }
  }));
}
Object.assign(window, {
  Study,
  STUDY_PACKS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsite/Study.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsite/SubmitWord.jsx
try { (() => {
const subNS = window.LearnToSpeakDurbanDesignSystem_ec3271;
function SubmitWord({
  initial,
  mobile
}) {
  const {
    Window,
    Button,
    Stamp,
    RefCode
  } = subNS;
  const blank = {
    word: '',
    meaning: '',
    example: '',
    where: '',
    name: localStorage.getItem('lsd-name') || '',
    email: localStorage.getItem('lsd-email') || '',
    real: false
  };
  const [f, setF] = React.useState(blank);
  const [err, setErr] = React.useState({});
  const [done, setDone] = React.useState(initial === 'done' ? {
    ref: 'LSD-SUB-0388',
    word: 'your word'
  } : null);
  const set = k => v => {
    setF({
      ...f,
      [k]: v
    });
    if (err[k]) setErr({
      ...err,
      [k]: null
    });
  };
  const submit = e => {
    e.preventDefault();
    const x = {};
    if (!f.word.trim()) x.word = 'A word is required. It is in the name';
    if (!f.meaning.trim()) x.meaning = 'Explain yourself';
    if (!isEmail(f.email)) x.email = f.email ? 'That looks like a vaalie typed it' : 'Gateway needs this';
    if (!f.real) x.real = 'Gateway checks';
    setErr(x);
    if (Object.keys(x).length) return;
    // Mock submission. In production, POST the form to the review inbox here.
    setDone({
      ref: 'LSD-SUB-' + String(Math.floor(1000 + Math.random() * 8999)),
      word: f.word.trim()
    });
  };
  const steps = [['01', 'Received', 'Filed with a submission number.'], ['02', 'Read aloud', 'By Gateway, to Gateway.'], ['03', 'Field-tested', 'Said to a lifeguard. Reaction noted.'], ['04', 'Filed', 'Or returned with a polite note.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    index: "04",
    kicker: "Contributions \xB7 open to the public",
    title: "Submit a Word",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        maxWidth: 320,
        lineHeight: 1.5
      }
    }, "The dictionary holds 32 words. The coast holds more. Send yours to Gateway for review.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 40,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '999 1 560px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Window, {
    title: "submit_word.exe",
    bar: "accent",
    meta: done ? 'Sent' : 'Form W-05',
    controls: ['min', 'close'],
    shadow: "lg",
    padding: 0
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32,
      alignItems: 'center',
      padding: mobile ? 20 : '40px 36px'
    }
  }, /*#__PURE__*/React.createElement(Stamp, {
    top: "A public service by Gateway",
    middle: "FILED",
    bottom: "For review",
    size: 150
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 260px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(RefCode, {
    code: done.ref,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 800,
      fontSize: 40,
      lineHeight: 0.95,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em'
    }
  }, "Filed for review."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      lineHeight: 1.55
    }
  }, "Shot. \"", done.word, "\" is with Gateway. If it passes the lifeguard test, you'll hear from us by email."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => {
      setF({
        ...blank,
        name: f.name,
        email: f.email
      });
      setDone(null);
    }
  }, "Submit another")))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: mobile ? 16 : 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "The word",
    value: f.word,
    onChange: set('word'),
    placeholder: "One word or phrase",
    error: err.word
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Where you heard it",
    value: f.where,
    onChange: set('where'),
    placeholder: "e.g. North Beach, the taxi rank, my gran"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "What it means",
    multiline: true,
    rows: 3,
    value: f.meaning,
    onChange: set('meaning'),
    placeholder: "Explain it like you would to a vaalie.",
    error: err.meaning
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Use it in a sentence",
    multiline: true,
    rows: 2,
    value: f.example,
    onChange: set('example'),
    placeholder: "Optional. Gateway likes examples."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    value: f.name,
    onChange: set('name'),
    placeholder: "For the credits",
    autoComplete: "given-name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email address",
    type: "email",
    value: f.email,
    onChange: set('email'),
    placeholder: "you@example.co.za",
    autoComplete: "email",
    error: err.email
  })), /*#__PURE__*/React.createElement(Tick, {
    checked: f.real,
    onChange: set('real'),
    error: err.real
  }, "I confirm this word is real and someone in Durban actually says it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 14,
      borderTop: '1px dashed var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "One word per form. Reviewed in order received, or by vibes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => {
      setF(blank);
      setErr({});
    }
  }, "Clear"), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    brackets: true
  }, "Send to Gateway")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 300px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--ink)',
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '7px 12px',
      background: 'var(--paper-3)',
      borderBottom: '1px solid var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "REVIEW PROCESS"), /*#__PURE__*/React.createElement("span", null, "4 STEPS")), steps.map(([n, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: '36px 1fr',
      gap: 10,
      padding: '12px',
      borderTop: i ? '1px dashed var(--ink-3)' : 'none',
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 13
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 13,
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ink-2)'
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--ink)',
      background: 'var(--ink)',
      color: 'var(--paper-2)',
      padding: '14px 14px',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.1em',
      marginBottom: 6,
      color: 'var(--yellow)'
    }
  }, "SUBMISSION RULES"), "Real words only. No forks. Words already in the 32 lessons will be returned with a copy of the Dictionary."))));
}
Object.assign(window, {
  SubmitWord
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsite/SubmitWord.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsite/data.js
try { (() => {
window.LSD_DATA = {
  words: [['01', 'Aweh', 'interj.', 'The standard greeting. Also: yes, agreed, understood, and I see you. One word, four meanings, zero effort.', 'Aweh, bru. Long time.'], ['02', 'Ekse', 'interj.', 'Used to open a sentence, or to request attention. Roughly "I say", but with better posture.', 'Ekse, is that your bunny?'], ['03', 'Kiff', 'adj.', 'Good. Excellent. Of acceptable quality to a person standing on a beach.', 'The water is kiff today.'], ['04', 'Chips!', 'interj.', 'A warning. Shouted to alert others that trouble — or a parent — is approaching. Not a snack.', 'Chips! Chips! Here comes the lifeguard.'], ['05', 'Baggies', 'n. pl.', 'Loose board shorts. The formal attire of the coast. Required at all lessons.', 'He wore baggies to the wedding. Nobody minded.'], ['06', 'Logging', 'v.', 'Longboarding. Rolling down the promenade on a long skateboard, slowly, with excellent posture. No trees are involved.', 'We\u2019re logging down to uShaka after lunch.'], ['07', 'One time', 'adv.', 'Truly. Honestly. Confirms that the preceding statement is not a joke.', 'That was the best bunny of my life, one time.'], ['08', 'Scheming', 'v.', 'Thinking, with conviction. Halfway between an opinion and a plan. Roughly \u201cI rate\u201d. No actual scheme required, although one is usually forming.', 'I scheme we go to the beach, bru.'], ['09', 'Choon', 'v.', 'To tell, to talk, to give your opinion whether or not anyone asked. Used before important information and also before unimportant information.', 'Let me choon you something about this bunny.'], ['10', 'Gqom', 'n.', 'Durban\u2019s own electronic dance music. Pronounced with a click. Practise the click in GAME-01.', 'The gqom was so loud the windows were dancing.'], ['11', 'Jol', 'n. / v.', 'A party, or the act of having one. Can describe an evening, a weekend or an attitude.', 'Big jol at the beach tonight.'], ['12', 'Larney', 'adj.', 'Fancy. Posh. Slightly too expensive for baggies.', 'Look at you in your larney shoes.'], ['13', 'Bunny', 'n.', 'A quarter loaf of bread, hollowed and filled with curry. Eaten with the hands. The bread is the plate. The bread is also the spoon.', 'Quarter mutton bunny, extra gravy. No fork.'], ['14', 'Shap', 'interj.', 'Fine. Good. Agreed. A complete conversation in one syllable.', 'Shap, see you at six.'], ['15', 'Shot', 'interj.', 'Thanks. Also: well done. Delivered with a nod.', 'Shot for the lift, bru.'], ['16', 'Ducking out', 'v. phr.', 'Leaving. Usually quietly, usually early, usually towards the beach.', 'I\u2019m ducking out before the traffic.'], ['17', 'The coast', 'n.', 'Durban and its surroundings, referred to as though there were no other coast.', 'We\u2019re going down the coast for the weekend.'], ['18', 'Chow', 'v. / n.', 'To eat; food. "Chow now" is also a farewell.', 'Let\u2019s chow, I\u2019m starving.'], ['19', 'Prawn', 'n.', 'An idiot. A fool. Someone who has done something only a prawn would do. Usually behind the wheel.', 'That prawn just parked across three bays.'], ['20', 'Kook', 'n.', 'A beginner surfer, or anyone who has bought more gear than they have used.', 'Brand new board, never been wet. Total kook.'], ['21', 'Robot', 'n.', 'A traffic light. Not a machine. Turn left at the second robot.', 'Turn left at the robot by the garage.'], ['22', 'Smaak', 'v.', 'To like, very much. Applies to people, food and weather.', 'I smaak this weather.'], ['23', 'Dala', 'v.', 'To do. To get on with it. "Dala what you must."', 'Just dala what you must, bru.'], ['24', 'Laatie', 'n.', 'A young person. A kid. Anyone younger than the speaker.', 'The laatie paddled out further than all of us.'], ['25', 'Bru', 'n.', 'Brother. Friend. Stranger at a robot. The most important word in this course.', 'Shot, bru.'], ['26', 'Vaalie', 'n.', 'A visitor from inland, identifiable by socks with slops and an umbrella with cup holders.', 'Spot the vaalie: he\u2019s the one with the gazebo.'], ['27', 'Pozi', 'n.', 'Home; one\u2019s place. Where you return after a long day of logging.', 'Come through to my pozi later.'], ['28', 'Vy', 'v.', 'To go. To leave. Also used to suggest that others go.', 'Let\u2019s vy, the bunnies are getting cold.'], ['29', 'Tops', 'adj.', 'The best. Excellent. Of the highest available quality. No higher rating exists.', 'This drink is tops!'], ['30', 'No laka', 'interj.', 'Yes. Enthusiastic agreement, despite starting with “no”. Related to “ja no” and “no ja”, which also mean yes. Visitors find this confusing. Locals find visitors confusing.', 'Another bunny? No laka, bru.'], ['31', 'Mfethu', 'n.', 'Brother; my guy. Warmer than bru, if that were possible.', 'Mfethu! Where have you been?'], ['32', 'Yano', 'n.', 'Amapiano, shortened. The log-drum-heavy dance music you hear from every car at the robot. Too good to need all four syllables.', 'They played yano until the sun came up.']],
  exam: [{
    "w": "01",
    "q": "A friend greets you on the promenade with \"Aweh.\" The correct reply is:",
    "a": ["Good afternoon.", "Aweh.", "Please state your business."],
    "c": 1
  }, {
    "w": "02",
    "q": "\"Ekse\" at the start of a sentence means:",
    "a": ["Excuse me, I am leaving.", "Attention, please — something important follows.", "Exactly."],
    "c": 1
  }, {
    "w": "03",
    "q": "\"The water is kiff today.\" The water is:",
    "a": ["Good.", "Cold.", "Closed."],
    "c": 0
  }, {
    "w": "04",
    "q": "Someone shouts \"Chips!\" across the beach. You should:",
    "a": ["Order a large portion.", "Look out — trouble is coming.", "Check the menu."],
    "c": 1
  }, {
    "w": "05",
    "q": "Which item is required at all lessons?",
    "a": ["A wetsuit.", "A fork.", "Baggies."],
    "c": 2
  }, {
    "w": "06",
    "q": "\"We're logging down to uShaka.\" You will need:",
    "a": ["An axe.", "A longboard.", "A sleeping bag."],
    "c": 1
  }, {
    "w": "07",
    "q": "\"That was the best bunny of my life, one time.\" The speaker:",
    "a": ["Means it. Truly.", "Has only eaten one bunny.", "Is joking."],
    "c": 0
  }, {
    "w": "08",
    "q": "\"I scheme we go to the beach.\" Your friend is:",
    "a": ["Plotting something illegal.", "Confidently suggesting the beach.", "Unsure."],
    "c": 1
  }, {
    "w": "09",
    "q": "\"Let me choon you something.\" Your friend is about to:",
    "a": ["Sing a song.", "Tell you something, at length.", "Tune a guitar."],
    "c": 1
  }, {
    "w": "10",
    "q": "Gqom is:",
    "a": ["Durban’s own electronic dance music.", "A type of curry.", "A beach umbrella."],
    "c": 0
  }, {
    "w": "11",
    "q": "\"Big jol at the beach tonight.\" You should bring:",
    "a": ["A gazebo with cup holders.", "Yourself, in baggies.", "A permit."],
    "c": 1
  }, {
    "w": "12",
    "q": "Your friend arrives in larney shoes. The shoes are:",
    "a": ["Fancy.", "Borrowed.", "Wet."],
    "c": 0
  }, {
    "w": "13",
    "q": "The bunny arrives with a side salad. You:",
    "a": ["Ask for a fork", "Call the police", "Both — this is a crime scene."],
    "c": 2
  }, {
    "w": "14",
    "q": "\"Shap, see you at six.\" This means:",
    "a": ["Agreed. See you at six.", "Hurry up.", "Bring snacks."],
    "c": 0
  }, {
    "w": "15",
    "q": "Someone gives you a lift home. The fluent thank-you is:",
    "a": ["Thank you kindly.", "Shot, bru.", "Please leave a review."],
    "c": 1
  }, {
    "w": "16",
    "q": "\"I’m ducking out before the traffic.\" The speaker is:",
    "a": ["Swimming.", "Hiding from a duck.", "Leaving."],
    "c": 2
  }, {
    "w": "17",
    "q": "\"We’re going down the coast.\" Which coast?",
    "a": ["The coast.", "The west coast.", "Please specify."],
    "c": 0
  }, {
    "w": "18",
    "q": "Complete the farewell: \"Chow ___\"",
    "a": ["later", "now", "never"],
    "c": 1
  }, {
    "w": "19",
    "q": "\"That prawn just parked across three bays.\" The prawn is:",
    "a": ["Seafood.", "An idiot.", "A valet."],
    "c": 1
  }, {
    "w": "20",
    "q": "Brand new board, never been wet. Its owner is a:",
    "a": ["Kook.", "Laatie.", "Lifeguard."],
    "c": 0
  }, {
    "w": "21",
    "q": "\"Turn left at the robot\" means turn left at the:",
    "a": ["Machine.", "Traffic light.", "Mall entrance."],
    "c": 1
  }, {
    "w": "22",
    "q": "\"I smaak this weather\" expresses:",
    "a": ["A complaint.", "A weather warning.", "Strong approval."],
    "c": 2
  }, {
    "w": "23",
    "q": "\"Just dala what you must.\" You should:",
    "a": ["Get on with it.", "Ask for a form.", "Wait for instructions."],
    "c": 0
  }, {
    "w": "24",
    "q": "The laatie paddled out further than everyone. The laatie is:",
    "a": ["The lifeguard.", "A young person.", "A dog."],
    "c": 1
  }, {
    "w": "25",
    "q": "The most important word in this course is:",
    "a": ["Bru.", "Fork.", "Wetsuit."],
    "c": 0
  }, {
    "w": "26",
    "q": "Socks with slops. Gazebo with cup holders. This is a:",
    "a": ["Laatie.", "Kook.", "Vaalie."],
    "c": 2
  }, {
    "w": "27",
    "q": "\"Come through to my pozi later.\" You are going to their:",
    "a": ["Office.", "Home.", "Pool."],
    "c": 1
  }, {
    "w": "28",
    "q": "\"Let’s vy, the bunnies are getting cold.\" You should:",
    "a": ["Go.", "Wait.", "Reheat."],
    "c": 0
  }, {
    "w": "29",
    "q": "\"This drink is tops!\" The drink is:",
    "a": ["The best.", "On top of the fridge.", "Finished."],
    "c": 0
  }, {
    "w": "30",
    "q": "You offer your bru another bunny. He says \"No laka.\" He has just:",
    "a": ["Declined politely.", "Agreed. Enthusiastically.", "Insulted the bunny."],
    "c": 1
  }, {
    "w": "31",
    "q": "You spot your oldest friend across the beachfront. You shout:",
    "a": ["Mfethu!", "Excuse me, sir!", "Chips!"],
    "c": 0
  }, {
    "w": "32",
    "q": "\"They played yano all night.\" They played:",
    "a": ["Piano lessons.", "Amapiano.", "Hide and seek."],
    "c": 1
  }],
  leaderboard: [['BunnyChowBrad', '10/10', '12'], ['NoLakaNelly', '10/10', '11'], ['ShapShapSipho', '9/10', '9'], ['VaalieInRecovery', '8/10', '7'], ['KiffKelly', '8/10', '6'], ['DalaDave', '7/10', '4']],
  merch: [{
    id: 'MERCH-01',
    name: 'AWEH.',
    kind: 'Tee',
    price: 'R 349',
    desc: 'One-word slang tee. Says hello so you don’t have to.',
    tee: true
  }, {
    id: 'MERCH-02',
    name: 'EKSE.',
    kind: 'Tee',
    price: 'R 349',
    desc: 'One-word slang tee. Starts conversations. Doesn’t finish them.',
    tee: true
  }, {
    id: 'MERCH-03',
    name: 'SHAP.',
    kind: 'Tee',
    price: 'R 349',
    desc: 'One-word slang tee. Ends conversations. An exit strategy in cotton.',
    tee: true
  }, {
    id: 'MERCH-04',
    name: 'Fluent in Durban',
    kind: 'Bumper sticker',
    price: 'R 59',
    desc: 'For the car. Visible from the robot.'
  }, {
    id: 'MERCH-05',
    name: 'Native Speaker',
    kind: 'Cap',
    price: 'R 279',
    desc: 'Embroidered. Worn backwards by graduates only.'
  }, {
    id: 'MERCH-06',
    name: 'Certificate of Fluency',
    kind: 'Framed',
    price: 'R 499',
    desc: 'Your certificate, framed. Hang it where the vaalies can see.'
  }, {
    id: 'MERCH-07',
    name: 'Beach Towel',
    kind: 'Towel',
    price: 'R 449',
    desc: 'All 32 words, edge to edge. Study while you tan.'
  }, {
    id: 'MERCH-08',
    name: 'Kook Starter Pack',
    kind: 'Bundle',
    price: 'R 399',
    desc: 'Just baggies and sunscreen. Everything you actually need.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsite/data.js", error: String((e && e.message) || e) }); }

__ds_ns.FolderCard = __ds_scope.FolderCard;

__ds_ns.SpecCard = __ds_scope.SpecCard;

__ds_ns.Barcode = __ds_scope.Barcode;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.LabelChip = __ds_scope.LabelChip;

__ds_ns.RefCode = __ds_scope.RefCode;

__ds_ns.Stamp = __ds_scope.Stamp;

__ds_ns.StatusStrip = __ds_scope.StatusStrip;

__ds_ns.AnswerOption = __ds_scope.AnswerOption;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Halftone = __ds_scope.Halftone;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.FolderTabs = __ds_scope.FolderTabs;

__ds_ns.IndexTab = __ds_scope.IndexTab;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Window = __ds_scope.Window;

})();
