/* Virtual scrolling + skeleton loading for long IoT lists.
 *
 * Virtual scroll keeps only the rows near the viewport in the DOM. With 846 app
 * cards a normal render creates ~5,000 nodes; virtualised it stays around 300.
 *
 * Cards are forced to a uniform height so row positions can be computed exactly.
 * That trade is deliberate: uniform cards are the usual price of virtualisation. */
(function(){
  var DEFAULTS = { minCardWidth: 300, cardHeight: 320, gap: 14, buffer: 2 };

  function measureCols(container, minCardWidth, gap){
    var w = container.clientWidth || 900;
    var cols = Math.max(1, Math.floor((w + gap) / (minCardWidth + gap)));
    return cols;
  }

  function virtualGrid(container, items, renderItem, options){
    var o = Object.assign({}, DEFAULTS, options || {});
    var state = { items: items, scrollTop: 0, cols: 1, rendered: 0 };
    container.classList.add("virtual-grid");
    container.innerHTML = '<div class="virtual-spacer"><div class="virtual-window"></div></div>';
    var spacer = container.firstChild;
    var win = spacer.firstChild;

    function layout(){
      state.cols = measureCols(container, o.minCardWidth, o.gap);
      spacer.style.height = (Math.ceil(state.items.length / state.cols) * (o.cardHeight + o.gap)) + "px";
      paint();
    }

    function paint(){
      var scrollParent = container.closest(".section") || window;
      var top = container.getBoundingClientRect().top;
      var viewH = window.innerHeight;
      // how far the container has scrolled past the top of the viewport
      var scrolled = Math.max(0, -top);
      var startRow = Math.max(0, Math.floor(scrolled / (o.cardHeight + o.gap)) - o.buffer);
      var visibleRows = Math.ceil(viewH / (o.cardHeight + o.gap)) + o.buffer * 2;
      var endRow = Math.min(Math.ceil(state.items.length / state.cols), startRow + visibleRows);

      win.style.transform = "translateY(" + (startRow * (o.cardHeight + o.gap)) + "px)";
      win.style.gridTemplateColumns = "repeat(" + state.cols + ", minmax(0,1fr))";

      var from = startRow * state.cols;
      var to = Math.min(state.items.length, endRow * state.cols);
      var html = "";
      for (var i = from; i < to; i++) html += renderItem(state.items[i], i);
      if(win.__lastFrom !== from || win.__lastTo !== to){
        win.innerHTML = html;
        win.__lastFrom = from; win.__lastTo = to;
      }
      state.rendered = Math.max(0, to - from);
      if(o.onStats) o.onStats({ total: state.items.length, rendered: state.rendered, start: from });
    }

    var raf = null;
    function onScroll(){ if(raf) return; raf = requestAnimationFrame(function(){ raf = null; paint(); }); }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", function(){ layout(); });

    layout();
    return {
      setItems: function(next){ state.items = next; win.__lastFrom = null; layout(); },
      refresh: layout,
      stats: function(){ return { total: state.items.length, rendered: state.rendered }; }
    };
  }

  /* Skeleton placeholder cards, shown while a list is being prepared. */
  function skeleton(container, count, cls){
    var n = count || 9;
    var out = "";
    for (var i = 0; i < n; i++) {
      out += '<div class="skeleton-card ' + (cls || "") + '" aria-hidden="true">'
        + '<div class="sk-row sk-sm"></div><div class="sk-row sk-lg"></div>'
        + '<div class="sk-row sk-md"></div><div class="sk-row sk-sm"></div>'
        + '<div class="sk-row sk-btn"></div></div>';
    }
    container.innerHTML = out;
  }

  window.IOT_VIRTUAL = { grid: virtualGrid, skeleton: skeleton };
})();
